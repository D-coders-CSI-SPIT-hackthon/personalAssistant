let page = window.location.href.split("#")[1] || "home";

/*
if (page != "home") {
  window.open(`https://probox.vercel.app/Tools/${page}/index.html`, `_blank`);
}*/

switch (page.toLowerCase().trim()) {
  case "whileboard":
    createWhiteBoard();
    break;
  default:
    break;
}
