const content = document.querySelector('.container-fluid');

const maxSkew = 12;

const maxRotate = 1;

let currentPosition = window.pageYOffset;

function skewEffect(){

	const newPosition = window.pageYOffset;

	const dif = newPosition - currentPosition;

	let skew = dif * 1.8;//previous value was 0.8
	let rotate = dif * 1;//previous value was 0.2;

	if(skew > maxSkew || skew < - maxSkew){

		if(skew > 0){
			skew = -maxSkew;
		}else{
			skew = maxSkew;
		}

	}

	if(rotate > maxRotate || rotate < - maxRotate){

		if(skew > 0){
			rotate = -maxRotate;
		}else{
			rotate = maxRotate;
		}

	}


	content.style.transform = `skewY(${skew}deg) rotateY(${rotate}deg)`;

	currentPosition = newPosition;

	requestAnimationFrame(skewEffect);



}


skewEffect();