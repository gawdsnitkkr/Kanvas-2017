(function(w, d) {
	var loader, landing, web, graphics, photography, caption, currentSlide;
	var landingContent, webContent, graphicsContent, photographyContent, captionContent;
	var contentArray = [];
	var init = function() {
		loader = d.getElementById('loader');
		landing = d.getElementById('landing');
    	web = d.getElementById('web');
    	graphics = d.getElementById('graphics');
    	photography = d.getElementById('photography');
    	caption = d.getElementById('caption');
    	currentSlide = 1;
    	landingContent = d.getElementById('landing-content');
    	webContent = d.getElementById('web-content');
    	graphicsContent = d.getElementById('graphics-content');
    	photographyContent = d.getElementById('photography-content');
    	captionContent = d.getElementById('caption-content');
    	contentArray[1] = landingContent;
    	contentArray[2] = webContent;
    	contentArray[3] = graphicsContent;
    	contentArray[4] = photographyContent;
    	contentArray[5] = captionContent;
	};
	var closeContents = function(slideNo) {
		for (var i = 1; i <= 5; i++) {
			contentArray[i].className = 'content-close';
		}
		contentArray[slideNo].className = 'content-open';
	};
	var adjustSlides = function(slideNo) {
		switch (slideNo) {
			case 1: {
				landing.className = 'open1';
				web.className = 'close2';
				graphics.className = 'close1';
				photography.className = 'close2';
				caption.className = 'close1';
				closeContents(slideNo);
				break;
			}
			case 2: {
				landing.className = 'close1';
				web.className = 'open2';
				graphics.className = 'close1';
				photography.className = 'close2';
				caption.className = 'close1';
				closeContents(slideNo);
				break;
			}
			case 3: {
				landing.className = 'close1';
				web.className = 'close2';
				graphics.className = 'open1';
				photography.className = 'close2';
				caption.className = 'close1';
				closeContents(slideNo);
				break;
			}
			case 4: {
				landing.className = 'close1';
				web.className = 'close2';
				graphics.className = 'close1';
				photography.className = 'open2';
				caption.className = 'close1';
				closeContents(slideNo);
				break;
			}
			case 5: {
				landing.className = 'close1';
				web.className = 'close2';
				graphics.className = 'close1';
				photography.className = 'close2';
				caption.className = 'open1';
				closeContents(slideNo);
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
				if (currentSlide < 5) {
					currentSlide++;
					adjustSlides(currentSlide);
				}
				e.preventDefault();
			}
		});
    });
})(window, document);