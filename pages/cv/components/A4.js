// This container element simulates an A4 paper sheet
// with the same margins you would get out when printing

// The container/margins are removed when printing for wysiwyg effect

const A4 = ({children}) => (
  <div className="page">
    <div className="margins">
      {children}
    </div>

    <style jsx>{`
      @media screen {
        .page {
          margin: 0px auto;
          margin-top: 1cm;
          margin-bottom: 1px;
          padding: 0px;
          width: 21cm;
          //height: 29.7cm;
          border: 1px solid #ccc;
          background-color: white;
        }
        .margins {
          margin: 0cm auto;
          margin-top: 1cm;
          margin-bottom: 2cm;
          width: 19cm;
          //height: 26.7cm;
        }
      }

      @media print {
        .page {}
        .margins {
          margin: 0px auto;
          padding: 0px;
          width: 21cm;
          height: 29.7cm;
        }
      }
    `}</style>

  </div>
)

export default A4