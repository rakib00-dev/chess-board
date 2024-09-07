const chessBoxes = document.querySelectorAll('.chessBox');
for (let i = 0; i <= 8 - 1; i = i + 2) {
  chessBoxes[i].classList.add('row');
}
for (let u = 9; u <= 8 * 2 - 1; u = u + 2) {
  chessBoxes[u].classList.add('row');
}
for (let i = 16; i <= 8 * 3 - 1; i = i + 2) {
  chessBoxes[i].classList.add('row');
}
for (let u = 25; u <= 8 * 4 - 1; u = u + 2) {
  chessBoxes[u].classList.add('row');
}
for (let u = 32; u <= 8 * 5 - 1; u = u + 2) {
  chessBoxes[u].classList.add('row');
}
for (let u = 41; u <= 8 * 6 - 1; u = u + 2) {
  chessBoxes[u].classList.add('row');
}
for (let u = 48; u <= 8 * 7 - 1; u = u + 2) {
  chessBoxes[u].classList.add('row');
}
for (let u = 57; u <= 8 * 8 - 1; u = u + 2) {
  chessBoxes[u].classList.add('row');
}
