// Burger =============================================
const burger = document.querySelector('.burger');
const menuBody = document.querySelector('.menu__body');
const fixedBlocks = document.querySelectorAll('._fixed');

if (burger) {
	burger.addEventListener("click", function (e) {
		let paddingOffset = window.innerWidth  - document.body.offsetWidth + 'px';
		if (document.body.classList.contains('_lock')){
			burger_close();
		} else {
			burger_open(paddingOffset);
		}
		burger__move();
	});
}

function burger_open(element){
	fixedBlocks.forEach((el) => {
		el.style.paddingRight = element;
	});
	document.body.style.paddingRight = element;
	document.body.classList.add("_lock");
	burger.classList.add("_active");
	menuBody.classList.add("_active");
}

function burger_close(){
	fixedBlocks.forEach((el) => {
		el.style.paddingRight = '0';
	});
	document.body.style.paddingRight = '0';
	document.body.classList.remove("_lock");
	burger.classList.remove("_active");
	menuBody.classList.remove("_active");
}

// MoveBurgerOnClick ================================
const headerMenu = document.querySelector('.header__menu');

function burger__move(){
	if(!burger.classList.contains('_done')){
		burger.classList.add('_done');
		menuBody.insertBefore(burger, menuBody.children[0]);
	} else {
			burger.classList.remove('_done');
			headerMenu.insertBefore(burger, headerMenu.children[0]);
	}
}

// ScrollOnClick =================================
let menuLinks = document.querySelectorAll('._goto[data-goto]');
if(menuLinks.length > 0){
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		e.preventDefault();
		const menuLink = e.target;
			if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				const gotoBlock = document.querySelector(menuLink.dataset.goto);
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

				if(burger.classList.contains('_active')){
					burger__move();
					burger_close();
				}

				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth"
				});
			}
	}
}

// FilterDecor / Filter-btn =====================================================
const filterDecor = document.querySelectorAll('.decor-filter');
let filterForm = document.querySelector('.products-filter__form');
let filterAside = document.querySelector('.products-filter__aside');


function showBlock(element) {
	element.classList.toggle('_active');

	if(window.innerWidth > 992 ){
		
		if(element.style.maxHeight){
			element.style.maxHeight = null;
		} else {
			element.style.maxHeight = (element.scrollHeight+64) +'px';
		}

	} else {
		bodyLocker();
		document.body.classList.add('_lock');
		let filterBurger = document.querySelector('.products-filter__burger');
		let filterButton = document.querySelector('.filter-product__button');
		
		if(filterBurger){
			filterBurger.addEventListener("click", function (e) {
					burger_close();
					bodyUnlocker()
					element.classList.remove('_active');
					document.body.classList.remove('_lock');
			});
		}
		if(filterButton){
			filterButton.addEventListener("click", function (e) {
					burger_close();
					bodyUnlocker()
					element.classList.remove('_active');
					document.body.classList.remove('_lock');
			});
		}
	}
}

if(filterDecor){
	for (let index = 0; index < filterDecor.length; index++) {
		const element = filterDecor[index];
		element.addEventListener("click", function (e){
			this.classList.toggle('_active');
			showBlock(filterForm);
	});
	}
}

const filterBtn = document.querySelector('.filter-btn');

if(filterBtn){

const filterMenu = document.querySelector('.menu-filter');
const filterLinks = document.querySelectorAll('.menu-filter__link');
const filterGallery = document.querySelector('.products-filter__gallery');
const productsList = filterGallery.children;

filterBtn.addEventListener('click' , function (e){
	if(!filterForm.classList.contains('_active')){
			filterMenu.classList.toggle('_checked');
		}
	});

	if(filterLinks){
		for (let index = 0; index < filterLinks.length; index++) {
			const el = filterLinks[index];
			el.addEventListener('click', function (e){
				e.preventDefault;
				filterLinks.forEach((element)=>{
					element.classList.remove('_checked');
					filterGallery.classList.remove('_list');
					filterGallery.classList.remove('_image');
					for (let index = 0; index < productsList.length; index++) {
						const element = productsList[index];
						element.classList.remove('_list');
						element.classList.remove('_image');
					}
				});
				switch(el.innerHTML){
					case 'List':
						filterGallery.classList.add('_list');
						for (let index = 0; index < productsList.length; index++) {
							const element = productsList[index];
							element.classList.add('_list');
						}
					break;
					case 'Tile':
					break;
					case 'Image':
							filterGallery.classList.add('_image');
							for (let index = 0; index < productsList.length; index++) {
								const element = productsList[index];
								element.classList.add('_image');
							}
					break;
				}
				e.target.classList.add('_checked');
				filterMenu.classList.remove('_checked');
			})
		}
	}
}

// Marker SALE =====================================
const saleMarker = document.querySelectorAll('.product__action');
const pageGAllery = document.querySelector('.gallery');
const pageFilter = document.querySelector('.products-filter');

let markerElement = null;

if(pageGAllery){
	markerElement = 2;
}

if(pageFilter){
	markerElement = 5;
}

	for (let index = 0; index < saleMarker.length; index++){
		if(index == markerElement){
			let markerItem = saleMarker[index];
			markerItem.classList.add("_sale");
		}
	}


	// Hide elements in gallery =======================

	if(window.innerWidth < 768){
		hideElements();
	}
	
	function hideElements(){
		
const gallery = document.querySelector('.products-filter__gallery');

if(gallery){
	const galleryItems = gallery.children;
	
	for (let index = 0; index < galleryItems.length; index++) {
		const element = galleryItems[index];
		
			switch(index){
				case 1:
					element.style.display = 'none';
				case 2:
					element.style.display = 'none';
				case 3:
					element.style.display = 'none';
				break;
			}
		}
	}
};

// see-more tab ========================
const seeMore = document.querySelectorAll('.product-item__see-more');

if(seeMore){
	for (let index = 0; index < seeMore.length; index++) {
		const element = seeMore[index];
		element.addEventListener('click', function(el){
			this.classList.toggle('_active');
			const textMore = this.parentElement.children[1];
			textMore.classList.toggle('_show');
		});
	}
}
