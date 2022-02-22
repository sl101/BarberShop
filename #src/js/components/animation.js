// scroll animation ==============================================
document.addEventListener('DOMContentLoaded', () => {
	const scrollItems = document.querySelectorAll('.scroll-item');
	let animated = false;

	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight/2)+window.scrollY; 
		scrollItems.forEach(element => {
			let scrollOfset = element.offsetTop;
			if(windowCenter >= scrollOfset){
				element.classList.add('animation-class');
				animated = true;
			} else {
				if(!animated){
					element.classList.remove('animation-class');
				}
			}
		});
	};

	// Backet animation ===============================
	const bodyPage = document.querySelector('body');
	const backetButtons = document.querySelectorAll('.product__button--backet');
	const backetCounter = document.querySelector('.menu__amount');
	const backet = document.querySelector('.menu__backet');
	let valueBacket = 0; 

	function bodyLocker(){
		let element = window.innerWidth  - document.body.offsetWidth + 'px';
		fixedBlocks.forEach((el) => {
			el.style.paddingRight = element;
		});
		document.body.style.paddingRight = element;
		document.body.style.overflow = 'hidden';
	}
	
	function bodyUnlocker(){
		fixedBlocks.forEach((el) => {
			el.style.paddingRight = '0';
		});
		document.body.style.paddingRight = '0';
		document.body.style.overflow = 'auto';
	}
	
	backetButtons.forEach((element)=>{
		element.addEventListener('click', function (e){
			let parent = element.parentElement.parentElement.parentElement.parentElement;
			let targetImg;

			if(!parent.classList.contains('product-page__product')){
				targetImg = parent.children[1].children[0].children[0];
			}else{
				targetImg = parent.children[1].children[1].children[0].children[0];
			}

			bodyLocker();

			let clone = targetImg.cloneNode(true);
		
			let parentTop = parent.getBoundingClientRect().top + pageYOffset +"px";
			let parentLeft = parent.getBoundingClientRect().left + "px";

			let backetTop = backet.getBoundingClientRect().top + pageYOffset +"px";
			let backetLeft = backet.getBoundingClientRect().left + "px";
 
			bodyPage.appendChild(clone);
			if(parent.getBoundingClientRect().top < 100){
				parentTop = (pageYOffset+100) +'px';
			}
		
			clone.style.top = parentTop;
			clone.style.left = parentLeft;
			clone.classList.add('_selected');

			setTimeout(function (){
				clone.style.top = backetTop;
				clone.style.left = backetLeft;
				clone.style.animation = 'addToBacket 2s ease';
			}, 900);

			setTimeout(function (){
				valueBacket = valueBacket + 1;
				backetCounter.textContent = valueBacket;
				clone.style.display = 'none';
				clone.remove();
				bodyUnlocker();
			}, 2000);
});
	});


	scrollAnimation();
	window.addEventListener('scroll', () =>{
		scrollAnimation();
	});
});