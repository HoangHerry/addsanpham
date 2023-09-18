var container = document.querySelector(".temp123");
var isDragging = false;
var startX = 0;
var scrollLeft = 0;
container.scrollLeft = 255;
var list = document.querySelectorAll('.item123');
var animationFrame;

container.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  console.log('container_scrolleft' + container.scrollLeft);
  console.log('scrolleft' + scrollLeft);
  vitriitem1 = 0;
});

container.addEventListener("mouseleave", () => {
  isDragging = false;
});
container.addEventListener("mouseup", () => {
  isDragging = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX); 
  container.scrollLeft = scrollLeft - walk;
  console.log('after' + container.scrollLeft);
});
var btnLeft = document.querySelector('.btn_lefttemp');
var btnRight = document.querySelector('.btn_righttemp');
btnRight.addEventListener('mousedown', function () {
  var list = document.querySelectorAll('.item123');
  var slide = document.querySelector('.test1');
  slide.appendChild(list[0]);
  list[2].classList.remove('border_green');
  list[3].classList.add('border_green');
  container.scrollLeft = 255;
  console.log(container.scrollLeft);
});

