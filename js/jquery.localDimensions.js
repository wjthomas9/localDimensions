(function ($, window, i) {
	$.fn.localDimensions = function (options) {


		// Default settings
		var settings = $.extend({
			"devUrl": ""
		}, options);


		return this.each(function(){

			//Local variables
			var $this = $(this),
				$dimensions,
				windowWidth,
				windowHeight,
				devUrl = settings.devUrl,
				currentUrl = String(window.location.origin);

				//Setup position
				setPosition = function() {
					$dimensions.css({
						position: 'fixed',
						bottom: '0',
						right: '0',
						padding: '5px 20px 20px 5px',
						fontSize: '12px',
						color: 'black',
						background: 'rgba(255, 255, 255, 0.5)',
						zIndex: '9999999',
						webkitTransition: 'all 0.3s ease-out',
						MozTransition: 'all 0.3s ease-out',
						cursor: 'pointer'
					});
				},

				//Move the dimensions
				setupMoveDimensions = function() {
					$dimensions.on('click', function() {
						var right = $dimensions.css('right'),
							elementWidth = $dimensions.outerWidth();

						if (right === '0px') {
							$dimensions.css({
								right: '100%',
								marginRight: -elementWidth + 'px'
							});
						} else {
							$dimensions.css({
								right: '0',
								marginRight: '0'
							});
						}
					});
				},

				//Display the dimensions
				displayWindowSize = function() {
					windowWidth = document.documentElement.clientWidth,
					windowHeight = document.documentElement.clientHeight,
					$dimensions.html(windowWidth + ' x ' + windowHeight);
				},

				showDimensions = function() {
					window.onload = displayWindowSize,
					window.onresize = displayWindowSize;
				},

				appendContainer = function() {
					$this.append('<div id="dimensions">');
					$dimensions = $('#dimensions'),
					setPosition();
				},

				// Make sure user passed a dev url.
				// Dimensions won't show if this isn't set
				checkDevUrl = (function() {
					if (devUrl === currentUrl) {
						appendContainer();
						showDimensions();
						setupMoveDimensions();
					}
				})();
		}); // return
	};

})(jQuery, this, 0);