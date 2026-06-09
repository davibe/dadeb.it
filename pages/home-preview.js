import Head from 'next/head'
import HomePage from '../components/HomePage'

const HomePreview = () => (
  <>
    <Head>
      <title>Davide Bertola - Home Preview</title>
      <meta name="robots" content="noindex,nofollow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <HomePage />
  </>
)

export default HomePreview
