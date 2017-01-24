
const Bug = () =>
  <div className="root">
    <p>red</p>
    <p>green</p>
    <p>blue</p>
  <style jsx>{`

  .root :global(p) {
    color: red;
  }

  /* this does not work */
  .root :global(p + p) {
    color: green;
  }

  /* this works */
  .root :global(p) + :global(p) {
    color: blue;
  }

  `}</style>
  </div>

const Bug2 = () =>
  <div className="root">
    <p>red</p>
    <blockquote>green</blockquote>
    <div>blue</div>
  <style jsx>{`

  .root :global(p) {
    color: purple;
  }

  /* this does not work */
  .root :global(p) + :global(blockquote),
  .root :global(div) {
    color: green;
  }


  `}</style>
  </div>
const Index = () => (
  <div>
    <Bug2 />
    <pre>{`
    dadeb.it
    - Resume
    - Contacts
      `}
    </pre>
  </div>
)

export default Index