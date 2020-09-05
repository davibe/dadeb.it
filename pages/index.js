import Head from 'next/head'


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
    <Title />
    <img src="static/drawings/home.jpeg" />
  </div>
)

export default Index
