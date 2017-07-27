// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
function timeRush(sec) {
  stopMovement();
  game.restart();
  var cnt = sec;
  function countDown() {
    if (game.over) {
      cnt = 0;
    }
    var item = document.getElementById('game-intro');
    item.innerText = "Remaining Time: " + cnt;
    if (cnt == 0) {
      game.over = true;
      game.actuate();
      item.innerText = sec + "s time rush result: " + game.score;      
    } else {
      setTimeout(function() {
        --cnt;
        countDown();
      }, 1000);
    }
  }
  countDown();
}
