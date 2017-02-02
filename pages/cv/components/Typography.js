// Applies css typography to child elements with unscoped styling


const Typography = (props) =>
  <div className="typography-cv">
    {props.children}
    <style jsx global>{`

/* I manually scope style to this element using .typography-cv */

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

.typography-cv {
  margin-left: 4.5cm;
  padding-left: .2cm;
  border-left: 1px solid #eee;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: lighter;
  opacity: .9;
  font-size: 14px;
  text-rendering: optimizelegibility;
}

.typography-cv p {
  margin-bottom: 1em;
}

.typography-cv h1 {
  color: #589;
}

.typography-cv h2,
.typography-cv h3 {
  color: #8bc;
}

.typography-cv h1 {
  font-size: 24px;
}

.typography-cv h2 {
  font-size: 19px;
}

.typography-cv a,
.typography-cv a:hover {
  color: #af4848;
  text-decoration: none;
}

.typography-cv ul {
  margin-bottom: 1em;
}

.typography-cv ul li {
  list-style-position: outside;
  list-style-type: circle;
  margin-left: 1.5em;
}

.typography-cv img {
  width: 4cm;
  height: 4cm;
  float: left;
  margin-right: .5cm;
  margin-left: .25cm;
}


/* things on the left column */

.typography-cv h1,
.typography-cv h2,
.typography-cv h3 {
  width: 4.5cm;
  margin-left: -5cm;
  margin-bottom: -1.1em;
  margin-top: 1.5em;
  text-align: right;
}

.typography-cv blockquote {
  width: 4.5cm;
  margin-left: -5cm;
  margin-bottom: -1em;
  text-align: right;
  float:left;
}

.typography-cv blockquote a {
  font-size: 11px;
}

.typography-cv h2 + blockquote {
  margin-top: 38px;
}

/* job title */

.typography-cv h4 {
  font-weight: bold;
  font-size: 16px;
}

/* job dates */

.typography-cv h4 em {
  float: right;
  font-weight: normal;
  color: #aaa;
  font-size: 14px;
}

/* job address */

.typography-cv h4 + p,
.typography-cv h4 + blockquote + p {
  font-variant: small-caps;
  text-rendering: optimizeSpeed !important;
  margin-bottom: 0;
}

/* job description */

.typography-cv h4 + p + p,
.typography-cv h4 + blockquote + p + p {
  margin-bottom: 0;
}

/* job technologies */

.typography-cv h4 + p + p + p,
.typography-cv h4 + blockquote + p + p + p {
  color: #aaa;
}

/* job contribs */

.typography-cv h6 {
  width: 4.5cm;
  margin-left: -5cm;
  text-align: right;
  float: left;
}

    `}</style>
  </div>

export default Typography
