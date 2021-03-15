// Import Javascript

// Import Sass
import "../sass/main.scss";

// Import all pngs in assets/png/
function requireAllPNG(r) {
  r.keys().forEach(r);
}
requireAllPNG(require.context("../img/", true, /\.png$/));

// Import all svgs in assets/svg/
// function requireAllSVG(r) {
//   r.keys().forEach(r);
// }
// requireAllSVG(require.context("../svg/", true, /\.svg$/));

console.log("Success!");
