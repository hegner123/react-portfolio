import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

*, *::after, *::before {
  font-family: "Roboto Mono", monospace;
  box-sizing: border-box;
}

:root {
  --white: #fbfbff;
  --grey-blue-lt: #a6b6c7;
  --grey-blue-drk: #9eadbe;
  --slate: #363635;
  --dark-blue: #303a46;
  --red: #db3069;
  --red2: #d11149;
  --yellow: #ffcb47;
  --yellow2: #e6c229;
  --khaki: #bbb193;
  --indigo: #6610f2;
  --pumpkin: #f17105;
  --bg: var(--grey-blue-lt);
  --bg-accent: var(--grey-blue-drk);
  --bg-footer: var(--slate);
  --dark: var(--slate);
  --danger: var(--red);
  --warn: var(--yellow);
  --bland: var(--khaki);
  --font-size: 18px;
  --text-color: var(--dark);
  --section-bg: var(--indigo);
}

h1,h2,h3,h4,h5,h6,ol,ul{
  margin-block-start:0;
  margin-block-end: 0;
}

body {
  margin:0;
  
  padding:0;
  min-height: 100vh;
  text-rendering: optimizeLegibility;
}

ol,ul{
  list-style: none;
}

footer {
  background-color: var(--bg-footer);
}

footer p {
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
  color: var(--white);
  font-size:0.75rem;
}

.app {
  min-height: 100%;
  width: 100%;
}
  `;
