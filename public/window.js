var container;
var iframeStyle;

function create(htmlString) {
  let frag = document.createDocumentFragment(),
    temp = document.createElement("div");
  temp.innerHTML = htmlString;
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  return frag;
}

function closeWindow(element) {
  element.parentNode.remove();
  // unblurBackgroundStyle = document.createTextNode(
  //   "main { filter: blur(0px);-webkit-filter:blur(0px);} "
  // );

  // document.getElementsByTagName("style")[0].append(unblurBackgroundStyle);
}


function createWhiteBoard() {
  container = document.getElementById("windows-container");
  let WhiteBoardPage = create(
    `<div class="window-container whiteboard"><button id="whiteboard-window-closer" class="window-closer" onclick="closeWindow(this)">×</button><iframe id="whiteboard-window" scrolling="yes" src="Tools/whiteboard/index.html"></iframe></div>`
  );
  iframeStyle = document.createTextNode(
    "iframe {border: none; border-radius: 20px; box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);}"
  );
  container.appendChild(WhiteBoardPage);
  document.getElementsByTagName("style")[0].append(iframeStyle);
}


