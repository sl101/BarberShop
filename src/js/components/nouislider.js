const priceFilter = document.querySelector('.price-filter__line');

if(priceFilter){
	noUiSlider.create(priceFilter, {
			start: [200, 800],
			connect: true,
			tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
			range: {
					'min': 0,
					'max': 1000
			},	
	});

const priceStart = document.querySelector('.price-filter__input--start');
const tooltipStart = document.querySelector('.noUi-handle-lower[aria-valuetext]');
const priceEnd = document.querySelector('.price-filter__input--end');
const tooltipEnd = document.querySelector('.noUi-handle-upper');

priceStart.addEventListener('click', function () {
	priceStart.value = '';
});
priceStart.addEventListener('change', function () {
	priceFilter.noUiSlider.set([this.value, null]);
});

priceEnd.addEventListener('click', function () {
	priceEnd.value = '';
});
priceEnd.addEventListener('change', function () {
	priceFilter.noUiSlider.set([null, this.value]);
});

priceFilter.noUiSlider.on('update', function (values, handle) {
	let number = values[handle];

	if(handle){
		priceEnd.value = Math.round(number);
	}else{
		priceStart.value = Math.round(number);
	}
});
}