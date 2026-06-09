import Head from 'next/head'
import HomePage from '../components/HomePage'

const siteUrl = 'https://dadeb.it'
const pageTitle = 'Davide Bertola - Software Engineer'
const pageDescription = 'Davide Bertola is a software engineer focused on WebRTC, Rust, media systems, networking, and pragmatic product engineering.'

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
    'https://www.linkedin.com/pub/davide-bertola/3/601/782',
    'https://www.instagram.com/dadeb/',
    'https://www.facebook.com/dadeb'
  ],
  knowsAbout: [
    'Software engineering',
    'WebRTC',
    'Rust',
    'Networking',
    'Media systems'
  ]
}

const Index = () => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
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
    </Head>
    <HomePage />
  </>
)

export default Index
