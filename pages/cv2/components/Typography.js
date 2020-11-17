// Applies css typography to child elements with unscoped styling

import { useState } from "react";

const colors = [
  '#801fde',
  '#de1fdd',
  '#1f6ade',
  '#a38314',
  '#af4848',
  '#15853a'
]
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

const Typography = (props) => {
  const [index, setIndex] = useState(0)
  const color = colors[index % colors.length]
  return <div className="typography-cv" onClick={ () => setIndex(i => i + 1) }>
    {props.children}
    <style jsx global>{`

/* I manually scope style to this element using .typography-cv */

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

.typography-cv {
  margin-left: 4.5cm;
  padding-left: .2cm;
  border-left: 1px solid #eee;
  font-family: 'DM Sans', sans-serif;
  font-weight: lighter;
  opacity: .9;
  font-size: .9em;
  text-rendering: optimizelegibility;
}

.typography-cv p {
  margin-bottom: 1em;
}

.typography-cv h1 {
  _color: #589;
}
.typography-cv h1 + p{
  margin-top: .4em;
}

.typography-cv h2,
.typography-cv h3 {
  _color: #8bc;
  color: #666;
}

.typography-cv h1 {
  font-size: 1.6em;
}

.typography-cv h2 {
  font-size: 1.3em;
}

.typography-cv a,
.typography-cv a:hover {
  color: ${color};
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
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-top: -.5em;
}


/* things on the left column */

.typography-cv h1,
.typography-cv h2,
.typography-cv h3 {
  width: 4.5cm;
  margin-left: -5cm;
  margin-bottom: -1.18em;
  margin-top: 1.5em;
  text-align: right;
}

.typography-cv blockquote {
  width: 4.5cm;
  margin-left: -5cm;
  margin-bottom: -1em;
  text-align: right;
  float: left;
}

.typography-cv blockquote a {
  font-size: .9em;
}

.typography-cv h2 + blockquote {
  margin-top: 38px;
}

/* job title */

.typography-cv h4 {
  font-weight: bold;
  font-size: 1.1em;
}

/* job dates */

.typography-cv h4 em {
  float: right;
  font-weight: normal;
  color: #999;
  font-size: .9em;
  padding-right: .5em;
}

/* job address */

.typography-cv h4 + p,
.typography-cv h4 + blockquote + p {
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
  color: #999;
}

/* job contribs */

.typography-cv h6 {
  width: 4.5cm;
  margin-left: -5cm;
  text-align: right;
  float: left;
}

@media print {
  .typography-cv h4 + p + p + p,
  .typography-cv h4 + blockquote + p + p + p {
    color: #666;
  }
  .typography-cv h4 em {
    color: #666;
  }
}

    `}</style>
  </div>
}

export default Typography
