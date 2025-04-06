// TODO: Write a function 'move' that simulates a rocket moving back and forth in the console
// TODO: Use 'console.clear()', 'console.log()', and basic logic with position

function move() {
  let pos = 0;
  let dir = 1;
  console.clear();
    setInterval(() => {
      console.clear();
      console.log(" ".repeat(pos) + "R");
      pos += dir;
      if (pos == 100 || pos == 0) dir = -1 * dir;
    }, 50);
}

move();
module.exports = { move };
