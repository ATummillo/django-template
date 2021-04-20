// Import Javascript

// Import Sass
import "../sass/main.scss";

// Import all pngs in src/app/assets/img/
function requireAllPNG(r) {
  r.keys().forEach(r);
}
requireAllPNG(require.context("../img/", true, /\.png$/));

// Import all svgs in src/app/assets/svg/
// function requireAllSVG(r) {
//   r.keys().forEach(r);
// }
// requireAllSVG(require.context("../svg/", true, /\.svg$/));

console.log("Webpack build success!");
