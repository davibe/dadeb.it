import Head from 'next/head'
import Script from 'next/script'

const projects = [
  {
    name: 'str0m',
    meta: 'Rust / WebRTC',
    href: 'https://github.com/algesten/str0m/pulls?q=is%3Apr+author%3Adavibe+is%3Aclosed+',
    description: 'Work around media, networking, security, and low-latency real-time communication.'
  },
  {
    name: 'aya',
    meta: 'Rust / eBPF',
    href: 'https://github.com/pulls?q=is%3Apr+author%3Adavibe+archived%3Afalse+aya+is%3Amerged+',
    description: 'Contributions to the Rust ecosystem for writing and shipping eBPF programs.'
  },
  {
    name: 'WebProducer',
    meta: 'Media / Streaming',
    href: 'https://github.com/davibe/webproducer',
    description: 'A web producer experiment from the long-running interest in live media tooling.'
  },
  {
    name: 'YakYak',
    meta: 'Desktop / Open Source',
    href: 'https://github.com/yakyak/yakyak',
    description: 'A cross-platform chat client that became a useful community-maintained project.'
  }
]

const repos = [
  {
    name: 'yakyak/yakyak',
    href: 'https://github.com/yakyak/yakyak',
    language: 'CoffeeScript',
    description: 'Desktop chat client for Google Hangouts.'
  },
  {
    name: 'meetecho/janus-gateway',
    href: 'https://github.com/meetecho/janus-gateway',
    language: 'C',
    description: 'Janus WebRTC Server.'
  },
  {
    name: 'webproducer',
    href: 'https://github.com/davibe/webproducer',
    language: 'JavaScript',
    description: 'A Flash player based RTMP encoder with FMLE-style authentication and a JavaScript interface.'
  },
  {
    name: 'cordova-webrtc-janus-gateway',
    href: 'https://github.com/davibe/cordova-webrtc-janus-gateway',
    language: 'JavaScript',
    description: 'An example of how to use PhoneRTC with janus-gateway.'
  },
  {
    name: 'Phonegap-SQLitePlugin',
    href: 'https://github.com/davibe/Phonegap-SQLitePlugin',
    language: 'JavaScript',
    description: 'A PhoneGap plugin to open and use SQLite databases on iOS.'
  },
  {
    name: 'push-notification-service',
    href: 'https://github.com/davibe/push-notification-service',
    language: 'CoffeeScript',
    description: 'A small push notification service for iOS and Android applications.'
  }
]

const socialLinks = [
  ['CV', '/cv'],
  ['GitHub', 'https://github.com/davibe'],
  ['LinkedIn', 'https://www.linkedin.com/pub/davide-bertola/3/601/782'],
  ['X', 'https://twitter.com/dadeb'],
  ['Instagram', 'https://www.instagram.com/dadeb/'],
  ['Facebook', 'https://www.facebook.com/dadeb']
]

const HomePreview = () => (
  <>
    <Head>
      <title>Davide Bertola - Home Preview</title>
      <meta name="robots" content="noindex,nofollow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Chau+Philomene+One" />
    </Head>

    <main>
      <section className="hero">
        <div className="identity">
          <p className="mark">dadeb</p>
          <h1>Davide Bertola</h1>
          <p className="lead">
            Software engineer working across WebRTC, Rust, media systems,
            networking, and pragmatic product engineering.
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

      <section className="bio">
        <div>
          <h2>Now</h2>
          <p>
            I work on the WebRTC side of Lookback products, mostly around
            media formats, networking, security, performance, and globally
            distributed low-latency systems.
          </p>
        </div>
        <div>
          <h2>About</h2>
          <p>
            I like hard engineering problems with real users at the other end:
            transport protocols, media pipelines, developer tools, system
            programming, and small interfaces that make complex work easier.
          </p>
        </div>
      </section>

      <section className="work">
        <div className="sectionHeader">
          <h2>Selected Work</h2>
          <a href="/cv">Full CV</a>
        </div>
        <div className="projectGrid">
          {projects.map(project => (
            <article key={project.name}>
              <a href={project.href}>
                <span>{project.name}</span>
                <small>{project.meta}</small>
              </a>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="activity">
        <div>
          <div className="sectionHeader">
            <h2>Pinned GitHub Repos</h2>
            <a href="https://github.com/davibe">davibe</a>
          </div>
          <div className="repoList">
            {repos.map(repo => (
              <article key={repo.name}>
                <a href={repo.href}>{repo.name}</a>
                <p>{repo.description}</p>
                <small>{repo.language}</small>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="sectionHeader">
            <h2>From X</h2>
            <a href="https://twitter.com/dadeb">@dadeb</a>
          </div>
          <div className="timeline">
            <a
              className="twitter-timeline"
              data-height="420"
              data-chrome="noheader nofooter noborders transparent"
              href="https://twitter.com/dadeb"
            >
              Posts by @dadeb
            </a>
          </div>
        </div>
      </section>
    </main>

    <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />

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
      .mark {
        display: inline-block;
        margin: 0 0 28px;
        padding: 4px 12px 8px;
        border: 1px solid rgba(22, 20, 17, .18);
        background: rgba(255, 255, 255, .68);
        font-family: 'Chau Philomene One', Georgia, serif;
        font-size: 46px;
        line-height: .9;
        letter-spacing: 0;
      }
      h1,
      h2,
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
      nav {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 34px;
      }
      nav a,
      .sectionHeader a {
        border: 1px solid rgba(22, 20, 17, .22);
        background: rgba(255, 255, 255, .62);
        padding: 8px 12px;
        border-radius: 999px;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-size: 14px;
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
      .bio,
      .activity {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 24px;
      }
      .bio {
        border-top: 1px solid rgba(22, 20, 17, .16);
        border-bottom: 1px solid rgba(22, 20, 17, .16);
        padding: 34px 0;
      }
      h2 {
        margin-bottom: 12px;
        font-size: 24px;
        font-weight: 500;
      }
      .bio p,
      .projectGrid p,
      .repoList p {
        font-size: 18px;
        line-height: 1.48;
      }
      .work,
      .activity {
        padding-top: 42px;
      }
      .sectionHeader {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: center;
        margin-bottom: 18px;
      }
      .sectionHeader h2 {
        margin: 0;
      }
      .projectGrid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 14px;
      }
      .projectGrid article,
      .repoList article,
      .timeline {
        min-height: 168px;
        border: 1px solid rgba(22, 20, 17, .16);
        border-radius: 8px;
        background: rgba(255, 255, 255, .56);
        padding: 18px;
      }
      .projectGrid a,
      .repoList a {
        display: grid;
        gap: 4px;
        margin-bottom: 16px;
        font-size: 21px;
        line-height: 1.12;
      }
      small {
        color: rgba(22, 20, 17, .62);
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-size: 13px;
      }
      .repoList {
        display: grid;
        gap: 12px;
      }
      .repoList article {
        min-height: 0;
      }
      .repoList p {
        margin-bottom: 10px;
      }
      .timeline {
        overflow: hidden;
        min-height: 420px;
      }
      @media (max-width: 860px) {
        main {
          width: min(680px, calc(100% - 28px));
        }
        .hero,
        .bio,
        .activity {
          grid-template-columns: 1fr;
        }
        .hero {
          min-height: auto;
          padding: 54px 0 42px;
          gap: 36px;
        }
        .portrait {
          justify-self: start;
          width: min(250px, 72vw);
        }
        .projectGrid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
      @media (max-width: 560px) {
        main {
          width: min(100% - 22px, 520px);
        }
        .projectGrid {
          grid-template-columns: 1fr;
        }
        .lead {
          font-size: 22px;
        }
        .bio p,
        .projectGrid p,
        .repoList p {
          font-size: 16px;
        }
      }
    `}</style>
  </>
)

export default HomePreview
