const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', () => {
	isDown = true;
	slider.classList.add('.active');
});
slider.addEventListener('mouseleave', () => {
	idDown = false;
	slider.classList.remove('.active');
});
slider.addEventListener('mouseup', () => {
	idDown = false;
	slider.classList.remove('.active');
});
slider.addEventListener('mousemove', () => {
	if (!isDown) return;
	console.log(isDown);
});
