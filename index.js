// First of all, you have to generate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());

let intervalid
var startChangingColor = function () {
  if(!intervalid){
  intervalid = setInterval(changeBGcolor, 2000);
  }

  function changeBGcolor() {
    document.body.style.backgroundColor = randomColor()
  }
}
var stopChangingColor = function () {
  clearInterval(intervalid);
  intervalid = null;
}
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);