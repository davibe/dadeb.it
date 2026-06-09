import Head from 'next/head'

const siteUrl = 'https://dadeb.it'
const pageTitle = 'Davide Bertola - Software Engineer'
const pageDescription = 'Davide Bertola is a software engineer focused on WebRTC, Rust, media systems, networking, and product engineering.'

const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Davide Bertola',
  alternateName: 'dadeb',
  url: siteUrl,
  image: `${siteUrl}/avatar.png`,
  jobTitle: 'Software Engineer',
  email: 'mailto:dade@dadeb.it',
  sameAs: [
    'https://github.com/davibe',
    'https://twitter.com/dadeb',
    'https://www.linkedin.com/pub/davide-bertola/3/601/782'
  ],
  knowsAbout: [
    'Software engineering',
    'WebRTC',
    'Rust',
    'Networking',
    'Media systems'
  ]
}

const Title = () =>
  <div className="root">
    <h1>
      <span>d</span>
      <span>a</span>
      <span>d</span>
      <span>e</span>
      <span>b</span>
    </h1>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Chau+Philomene+One');
      .root {
        text-align: center;
      }
      h1 {
        display: inline-block;
        margin: 0 auto;
        font-family: 'Chau Philomene One', sans-serif;
        font-size: 72px;
        font-weight: 100;
        color: rgba(0, 0, 0, 0.9);
        background-color: white;
      }
      h1 > span {
        display: inline-block;
        margin: 0; padding: 0;
        height: 1em; width: .1em;
        text-align: center;
        opacity: 0;
        transition: all .1s ease-in-out;
      }
      h1 > span:first-child, h1 > span:last-child {
        opacity: 1;
      }
      h1:hover span {
        opacity: .8;
        width: .4em;
        transition: all .5s ease-in-out;
      }
    `}</style>
  </div>


const Index = () => (
  <div>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="author" content="Davide Bertola" />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={siteUrl} />
      <meta property="og:type" content="profile" />
      <meta property="og:site_name" content="Davide Bertola" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${siteUrl}/avatar.png`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${siteUrl}/avatar.png`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData)
        }}
      />
      <style dangerouslySetInnerHTML={{ 
        __html: `
          body, html {
            margin: 0;
            padding: 0;
            width: 100%; 
            height: 100%; 
            overflow: hidden;
            background-image: url("/drawings/home.jpeg");
            background-repeat: no-repeat;
            background-size: 210%;
            background-attachment: fixed;
          }
        `
      }} />
    </Head>
    <Title />
  </div>
)

export default Index
