const socialLinks = [
  ['CV', '/cv'],
  ['GitHub', 'https://github.com/davibe'],
  ['LinkedIn', 'https://www.linkedin.com/pub/davide-bertola/3/601/782'],
  ['X', 'https://twitter.com/dadeb'],
  ['Instagram', 'https://www.instagram.com/dadeb/'],
  ['Facebook', 'https://www.facebook.com/dadeb']
]

const HomePage = () => (
  <>
    <main>
      <section className="hero">
        <div className="identity">
          <h1>Davide Bertola</h1>
          <p className="lead">
            Software engineer, AI whisperer, entrepreneur, father of two.
          </p>
          <p className="sublead">
            I work across WebRTC, Rust, media systems, networking, and
            pragmatic product engineering.
          </p>
          <nav aria-label="Primary links">
            {socialLinks.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="portrait" aria-label="Portrait placeholder">
          <div className="portraitFrame">
            <img src="/avatar.png" alt="Davide Bertola avatar" />
          </div>
        </div>
      </section>
    </main>

    <style jsx global>{`
      html,
      body {
        margin: 0;
        min-height: 100%;
        background: #f7f4ed;
        color: #161411;
        font-family: Georgia, 'Times New Roman', serif;
      }
      body {
        background:
          linear-gradient(rgba(22, 20, 17, .035) 1px, transparent 1px),
          #f7f4ed;
        background-size: 100% 34px;
      }
      * {
        box-sizing: border-box;
      }
    `}</style>

    <style jsx>{`
      main {
        width: min(1120px, calc(100% - 32px));
        margin: 0 auto;
        padding: 28px 0 64px;
      }
      a {
        color: #161411;
        text-decoration-color: rgba(22, 20, 17, .28);
        text-decoration-thickness: 1px;
        text-underline-offset: 4px;
      }
      a:hover {
        text-decoration-color: rgba(22, 20, 17, .85);
      }
      .hero {
        min-height: 84vh;
        display: grid;
        grid-template-columns: minmax(0, 1.35fr) minmax(260px, .65fr);
        gap: 56px;
        align-items: center;
      }
      .identity {
        max-width: 680px;
      }
      h1,
      p {
        margin: 0;
      }
      h1 {
        max-width: 8ch;
        font-size: clamp(56px, 8vw, 104px);
        line-height: .92;
        font-weight: 500;
      }
      .lead {
        max-width: 650px;
        margin-top: 24px;
        font-size: clamp(22px, 3vw, 34px);
        line-height: 1.22;
      }
      .sublead {
        max-width: 620px;
        margin-top: 18px;
        color: rgba(22, 20, 17, .74);
        font-size: 21px;
        line-height: 1.42;
      }
      nav {
        display: flex;
        flex-wrap: wrap;
        gap: 8px 0;
        margin-top: 28px;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-size: 15px;
      }
      nav a {
        text-decoration: underline;
      }
      nav a:not(:last-child)::after {
        content: '/';
        display: inline-block;
        margin: 0 10px;
        color: rgba(22, 20, 17, .34);
        text-decoration: none;
      }
      .portrait {
        justify-self: center;
        width: min(310px, 82vw);
      }
      .portraitFrame {
        position: relative;
        aspect-ratio: 1;
        display: grid;
        place-items: center;
        border: 2px solid #161411;
        border-radius: 54% 46% 48% 52% / 47% 57% 43% 53%;
        background:
          radial-gradient(circle at 48% 44%, rgba(255, 255, 255, .94), rgba(255, 255, 255, .2) 62%),
          rgba(255, 255, 255, .42);
        box-shadow: 14px 18px 0 rgba(22, 20, 17, .08);
        transform: rotate(-2deg);
      }
      .portraitFrame::before,
      .portraitFrame::after {
        content: '';
        position: absolute;
        inset: 10px;
        border: 1px solid rgba(22, 20, 17, .42);
        border-radius: 48% 52% 55% 45% / 54% 44% 56% 46%;
        pointer-events: none;
      }
      .portraitFrame::after {
        inset: 18px;
        border-color: rgba(22, 20, 17, .18);
        transform: rotate(5deg);
      }
      .portrait img {
        width: 78%;
        height: 78%;
        object-fit: contain;
        filter: saturate(.72) contrast(1.05);
      }
      @media (max-width: 860px) {
        main {
          width: min(680px, calc(100% - 28px));
        }
        .hero {
          grid-template-columns: 1fr;
          min-height: auto;
          padding: 54px 0 42px;
          gap: 36px;
        }
        .portrait {
          justify-self: start;
          width: min(250px, 72vw);
        }
      }
      @media (max-width: 560px) {
        main {
          width: min(100% - 22px, 520px);
        }
        .lead {
          font-size: 22px;
        }
      }
    `}</style>
  </>
)

export default HomePage
