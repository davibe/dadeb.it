import Head from 'next/head'
import A4 from './../cv/components/A4'
import Content from './../cv/components/Content'
import Typography from './components/Typography'


const Index = () =>
  <div>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
    `}</style>

    <Head>
      <style>{`
        * {
          margin: 0px;
          padding: 0px;
        }
        body   {
          background-color: #eee;
          margin: 2cm;
        }
      `}</style>
    </Head>

    <A4>
      <Typography>
        <Content />
      </Typography>
    </A4>

  </div>

export default Index