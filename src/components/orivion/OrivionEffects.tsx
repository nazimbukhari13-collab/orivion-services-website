import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Wires up the Orivion theme's interactive layer for the whole site:
 * custom cursor, nav scroll state, preloader and the per-page scroll reveals,
 * count-up stats, accordion rows and magnetic buttons. Cursor / nav / preloader
 * are set up once; the DOM-scanning observers re-run on every route change.
 */
export function OrivionEffects() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Set up once: cursor, nav scroll state, preloader.
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".orivion");
    if (!root) return;
    const cleanups: Array<() => void> = [];

    // Keep the brand loader brief, show it once per session, and never rely on it
    // to make the page usable. CSS also contains a no-JS fallback timeout.
    const loader = root.querySelector<HTMLElement>("#loader");
    if (loader) {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let seen = false;
      try {
        seen = window.sessionStorage.getItem("orivion-loader-seen") === "1";
      } catch {
        // Storage may be unavailable in privacy-restricted browser modes.
      }
      const delay = reducedMotion || seen ? 0 : 420;
      const t = window.setTimeout(() => {
        loader.classList.add("done");
        root.classList.add("loaded");
        try {
          window.sessionStorage.setItem("orivion-loader-seen", "1");
        } catch {
          // Ignore storage failures.
        }
      }, delay);
      cleanups.push(() => window.clearTimeout(t));
    } else {
      root.classList.add("loaded");
    }

    // custom cursor
    const dot = root.querySelector<HTMLElement>(".cur-dot");
    const ring = root.querySelector<HTMLElement>(".cur-ring");
    if (dot && ring) {
      // Hide the native cursor only after the replacement cursor is ready.
      root.classList.add("cursor-hidden");
      cleanups.push(() => root.classList.remove("cursor-hidden"));
      let mx = window.innerWidth / 2,
        my = window.innerHeight / 2,
        rx = mx,
        ry = my,
        raf = 0;
      const move = (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.left = mx + "px";
        dot.style.top = my + "px";
        root.classList.add("mouse-on");
      };
      const over = (e: MouseEvent) => {
        const t = e.target as HTMLElement;
        if (t.closest("a,button,[data-svc] .top,summary,input,select,textarea"))
          ring.classList.add("hov");
      };
      const out = (e: MouseEvent) => {
        const t = e.target as HTMLElement;
        if (t.closest("a,button,[data-svc] .top,summary,input,select,textarea"))
          ring.classList.remove("hov");
      };
      window.addEventListener("mousemove", move);
      document.addEventListener("mouseover", over);
      document.addEventListener("mouseout", out);
      const loop = () => {
        rx += (mx - rx) * 0.16;
        ry += (my - ry) * 0.16;
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
        raf = requestAnimationFrame(loop);
      };
      loop();
      cleanups.push(() => {
        window.removeEventListener("mousemove", move);
        document.removeEventListener("mouseover", over);
        document.removeEventListener("mouseout", out);
        cancelAnimationFrame(raf);
      });
    }

    // nav scrolled state
    const nav = root.querySelector<HTMLElement>("#nav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  // Re-run per route: reveals, counters, accordion, magnetic buttons.
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".orivion");
    if (!root) return;
    const cleanups: Array<() => void> = [];

    // Keep the decorative hero loop lightweight: pause it off-screen and for
    // visitors who prefer reduced motion.
    const heroVideo = root.querySelector<HTMLVideoElement>(".home-hero-video");
    if (heroVideo) {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        heroVideo.pause();
      } else {
        const videoObserver = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            void heroVideo.play().catch(() => undefined);
          } else {
            heroVideo.pause();
          }
        });
        videoObserver.observe(heroVideo);
        cleanups.push(() => videoObserver.disconnect());
      }
    }

    // reveal on scroll
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.14 },
    );
    root.querySelectorAll(".rv,.proc").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    // safety net — never leave content stuck hidden
    const safety = window.setTimeout(() => {
      root.querySelectorAll(".rv,.proc").forEach((el) => el.classList.add("in"));
    }, 1600);
    cleanups.push(() => window.clearTimeout(safety));

    // count-up stats
    const cio = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          cio.unobserve(e.target);
          const el = e.target as HTMLElement;
          const end = +(el.dataset.count || "0");
          const suf = el.dataset.suffix || "+";
          const t0 = performance.now();
          const D = 1600;
          const tick = (t: number) => {
            const p = Math.min((t - t0) / D, 1);
            const v = Math.round(end * (1 - Math.pow(1 - p, 3)));
            el.textContent = v + (p === 1 ? suf : "");
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }),
      { threshold: 0.5 },
    );
    root.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));
    cleanups.push(() => cio.disconnect());

    // services accordion
    root.querySelectorAll<HTMLElement>("[data-svc]").forEach((row) => {
      const top = row.querySelector(".top");
      if (!top) return;
      const handler = () => {
        const isOpen = row.classList.contains("open");
        root.querySelectorAll<HTMLElement>("[data-svc].open").forEach((openRow) => {
          openRow.classList.remove("open");
          openRow.querySelector(".top")?.setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          row.classList.add("open");
          top.setAttribute("aria-expanded", "true");
        }
      };
      top.addEventListener("click", handler);
      cleanups.push(() => top.removeEventListener("click", handler));
    });

    // magnetic buttons
    root.querySelectorAll<HTMLElement>(".magnet").forEach((m) => {
      const move = (e: MouseEvent) => {
        const b = m.getBoundingClientRect();
        m.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * 0.22}px,${
          (e.clientY - b.top - b.height / 2) * 0.22
        }px)`;
      };
      const leave = () => (m.style.transform = "");
      m.addEventListener("mousemove", move);
      m.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        m.removeEventListener("mousemove", move);
        m.removeEventListener("mouseleave", leave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
