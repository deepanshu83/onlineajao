'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const yearNode = document.getElementById('yr');
    if (yearNode) yearNode.textContent = new Date().getFullYear();

    const revealEls = document.querySelectorAll('.rv');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el, index) => {
      el.style.transitionDelay = `${(index % 3) * 80}ms`;
      observer.observe(el);
    });

    const canvas = document.getElementById('art');
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let mouseX = -999;
    let mouseY = -999;
    let scrollY = 0;
    let tick = 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const orbs = [
      { color: '10,92,255', fx: 0.9, fy: 0.2, phase: 0 },
      { color: '138,77,255', fx: 0.15, fy: 0.55, phase: 1.7 },
      { color: '255,122,61', fx: 0.85, fy: 0.75, phase: 3.4 },
      { color: '0,200,190', fx: 0.4, fy: 0.9, phase: 5.1 },
      { color: '226,77,192', fx: 0.65, fy: 0.45, phase: 6.8 }
    ].map((orb, index) => ({ ...orb, radius: 0.32 + index * 0.03 }));

    const sizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointerMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const draw = () => {
      tick += reduceMotion ? 0 : 0.0035;
      context.clearRect(0, 0, width, height);
      const maxDim = Math.max(width, height);

      orbs.forEach((orb) => {
        const px = (orb.fx + Math.sin(tick * 1.3 + orb.phase) * 0.14) * width;
        const py = ((orb.fy + Math.cos(tick + orb.phase) * 0.12) * height) - scrollY * 0.05;
        const radial = context.createRadialGradient(px, py, 0, px, py, orb.radius * maxDim);
        radial.addColorStop(0, `rgba(${orb.color},.30)`);
        radial.addColorStop(1, `rgba(${orb.color},0)`);
        context.fillStyle = radial;
        context.fillRect(0, 0, width, height);
      });

      const spacing = width < 600 ? 30 : 38;
      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - distance / 190);
          const wobble = Math.sin(x * 0.012 + y * 0.012 + tick * 4) * 0.5 + 0.5;
          const radius = 1 + wobble * 0.7 + influence * 3.2;

          context.fillStyle = influence > 0.02
            ? `hsla(${215 + influence * 120}, 90%, 55%, ${0.25 + influence * 0.6})`
            : `rgba(11,13,18,${0.08 + wobble * 0.08})`;
          context.beginPath();
          context.arc(x, y, radius, 0, 6.283);
          context.fill();
        }
      }

      if (!reduceMotion) {
        requestAnimationFrame(draw);
      }
    };

    window.addEventListener('resize', sizeCanvas);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
    }, { passive: true });

    sizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', sizeCanvas);
      window.removeEventListener('pointermove', onPointerMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <canvas id="art" aria-hidden="true" />

      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <symbol id="mark" viewBox="0 0 124 70">
          <circle cx="32" cy="40" r="25" fill="none" stroke="#0b0d12" strokeWidth="12" />
          <circle cx="72" cy="40" r="25" fill="none" stroke="#0b0d12" strokeWidth="12" />
          <rect x="91" y="38" width="12" height="27" fill="#0b0d12" />
          <circle cx="108" cy="9" r="7" fill="#0a5cff" />
        </symbol>
      </svg>

      <header>
        <nav>
          <div className="wrap">
            <a className="brand" href="#top" aria-label="onlineajao home">
              <svg viewBox="0 0 124 70"><use href="#mark" /></svg>
              onlineajao
            </a>
            <div className="links">
              <a href="#services">Services</a>
              <a href="#process">Process</a>
              <a className="btn dark sm" href="#contact">Baat karein</a>
            </div>
          </div>
        </nav>
      </header>

      <main id="top">
        <div className="wrap hero">
          <div>
            <svg className="logo" viewBox="0 0 124 70" role="img" aria-label="onlineajao logo">
              <use href="#mark" />
            </svg>
            <h1>
              Business ko online laayein.<br />Seedha, sundar, tez.
            </h1>
            <p className="lead">
              Website, Google Business Profile aur social media — sab ek jagah. Taaki customer aapko
              dhoondhe, dekhe aur aapse judey.
            </p>
            <div className="cta">
              <a className="btn dark" href="#contact">Free consultation</a>
              <a className="btn ghost" href="#services">Services dekhein</a>
            </div>
          </div>
        </div>

        <section id="services">
          <div className="wrap">
            <h2 className="rv">Online hone ke liye<br />jo chahiye, wo sab.</h2>
            <p className="sub rv">Ek team, ek plan. Aapko alag-alag logon ke peeche nahi bhagna padega.</p>
            <div className="grid">
              <article className="card rv">
                <div className="ic" style={{ background: 'linear-gradient(135deg,#0a5cff,#6a8dff)' }}>
                  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="14" rx="2" />
                    <path d="M8 21h8M12 18v3" />
                  </svg>
                </div>
                <h3>Website</h3>
                <p>Mobile aur laptop dono pe tez chalne wali premium website, jo aapke brand jaisi dikhe.</p>
              </article>

              <article className="card rv">
                <div className="ic" style={{ background: 'linear-gradient(135deg,#ff7a3d,#ffb347)' }}>
                  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <h3>Google Business</h3>
                <p>Maps aur search me aapki shop sabse upar dikhe. Reviews, photos, timing — sab set.</p>
              </article>

              <article className="card rv">
                <div className="ic" style={{ background: 'linear-gradient(135deg,#8a4dff,#e24dc0)' }}>
                  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
                  </svg>
                </div>
                <h3>Social media</h3>
                <p>Instagram aur Facebook ke liye design, posts aur reels, jo roz aapka naam yaad dilayein.</p>
              </article>

              <article className="card big rv">
                <div>
                  <h3 style={{ marginTop: 0 }}>Pehle baat, phir kaam.</h3>
                  <p>Pehli consultation free hai. Hum samjhenge aapka business, phir sahi plan batayenge.</p>
                </div>
                <a className="btn dark" href="#contact">Abhi shuru karein</a>
              </article>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="wrap">
            <h2 className="rv">Chaar kadam, aur aap online.</h2>
            <p className="sub rv">Simple process, clear timeline, koi hidden kharcha nahi.</p>
            <div className="steps rv">
              <div className="step">
                <b>1</b>
                <h4>Baat</h4>
                <p>Aapka business aur goal samajhte hain.</p>
              </div>
              <div className="step">
                <b>2</b>
                <h4>Design</h4>
                <p>Logo, rang aur layout ka preview.</p>
              </div>
              <div className="step">
                <b>3</b>
                <h4>Build</h4>
                <p>Website, Google profile aur social pages live.</p>
              </div>
              <div className="step">
                <b>4</b>
                <h4>Grow</h4>
                <p>Customers badhane ke liye saath me kaam.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="founders">
          <div className="wrap">
            <h2 className="rv">Co-founders</h2>
            <p className="sub rv">Business ko samajhna aur growth ko ek saath lead karna — yahi hamara focus hai.</p>
            <div className="founder-grid">
              <article className="founder-card rv">
                <div className="founder-badge">D</div>
                <h3>Deepanshu Jangid</h3>
                <p>Founder & Growth Partner</p>
                <div className="founder-contact">
                  <a href="tel:+918302909191">8302909191</a>
                  <a href="https://wa.me/918302909191?text=Hi%20Deepanshu%2C%20mujhe%20onlineajao%20ke%20baare%20me%20baat%20karni%20hai." rel="noopener">WhatsApp</a>
                </div>
              </article>

              <article className="founder-card rv">
                <div className="founder-badge alt">N</div>
                <h3>Nitin Kumar</h3>
                <p>Founder & Strategy Partner</p>
                <div className="founder-contact">
                  <a href="tel:+918302161688">8302161688</a>
                  <a href="https://wa.me/918302161688?text=Hi%20Nitin%2C%20mujhe%20onlineajao%20ke%20baare%20me%20baat%20karni%20hai." rel="noopener">WhatsApp</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="final">
          <div className="wrap">
            <div className="panel rv">
              <h2>Chaliye, online aao.</h2>
              <p>Apna business batayein. Hum 24 ghante me jawab denge.</p>
              <a
                className="btn"
                href="https://wa.me/910000000000?text=Hi%20onlineajao%2C%20mujhe%20website%20chahiye"
                rel="noopener"
              >
                WhatsApp pe baat karein
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>
            © <span id="yr"></span> onlineajao
          </span>
          <span>Jaipur, Rajasthan</span>
        </div>
      </footer>
    </>
  );
}
