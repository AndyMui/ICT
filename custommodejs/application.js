function getSize() { 
  var reg = new RegExp("(^|&)size=([^&]*)(&|$)", "i");
  var r = location.search.substr(1).match(reg);
  if (r != null) {
    return parseInt(unescape(decodeURI(r[2])));
  }
  return 8; 
}

function getMode() { 
  var reg = new RegExp("(^|&)mode=([^&]*)(&|$)", "i");
  var r = location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(decodeURI(r[2]));
  }
  return "normal"; 
}

var game;
window.requestAnimationFrame(function () {
  var size = getSize();
  var container = document.getElementById('grid-container');
  var html = '';
  for (var i = 0; i < size; ++i) {
    html += '<div class="grid-row">';
    for (var j = 0; j < size; ++j) {
      html += '<div class="grid-cell"></div>';
    }
    html += '</div>';
  }
  container.innerHTML = html;
  game = new GameManager(size, KeyboardInputManager, HTMLActuator, LocalScoreManager);
  var mode = getMode();
  switch (mode) {
  default:
    normal();
    break;
  }
});

function random() {
  game.move(Math.floor(Math.random() * 4));
}

function changeSize(size) {
  window.location.href = 'CustomMode.html?size=' + size + '&mode=normalmode'
}

function normalAdd() {
  return Math.random() < 0.9 ? 2 : 4;
}

function normalMerge(a, b) {
  return a === b;
}

function normalWin(merged) {
  return merged === 4096;
}
