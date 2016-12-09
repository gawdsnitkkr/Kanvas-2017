(function(w, d) {
	var loader, web, graphics, photography, caption, currentSlide;
	var init = function() {
		loader = d.getElementById('loader');
    	web = d.getElementById('web');
    	graphics = d.getElementById('graphics');
    	photography = d.getElementById('photography');
    	caption = d.getElementById('caption');
    	currentSlide = 1;
	};
	var adjustSlides = function(slideNo) {
		switch(slideNo) {
			case 1: {
				web.className = 'open1';
				graphics.className = 'close2';
				photography.className = 'close1';
				caption.className = 'close2';
				break;
			}
			case 2: {
				web.className = 'close1';
				graphics.className = 'open2';
				photography.className = 'close1';
				caption.className = 'close2';
				break;
			}
			case 3: {
				web.className = 'close1';
				graphics.className = 'close2';
				photography.className = 'open1';
				caption.className = 'close2';
				break;
			}
			case 4: {
				web.className = 'close1';
				graphics.className = 'close2';
				photography.className = 'close1';
				caption.className = 'open2';
				break;
			}
		}
	};
    d.addEventListener('DOMContentLoaded', function() {
    	init();
    	//photography.style.display = 'none';
		//caption.style.display = 'none';
		adjustSlides(currentSlide);
		loader.style.display = 'none';
		d.addEventListener('keydown', function(e) {
			var keyCode = e.which;
			//up arrow key
			if (keyCode == 38) {
				if (currentSlide > 1) {
					currentSlide--;
					adjustSlides(currentSlide);
				}
				e.preventDefault();
			} else if (keyCode == 40) {
				//down arrow key
				if (currentSlide < 4) {
					currentSlide++;
					adjustSlides(currentSlide);
				}
				e.preventDefault();
			}
		});
    });
})(window, document);