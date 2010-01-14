(function(window, $, undef) {
	if($ === undef) {
		throw 'Dépendence non satisfaite : jQuery';
	}

	$.fn.fontSizeChangeable = function(triggerUp, triggerDown) {
		var $this = this,
		size = 1,

		refresh = function() {
			$this
				.css('font-size', size+'em');
		},

		up = function() {
			if(size > 1.5)
				return;
			size+= 0.05;
			refresh();
		},

		down = function() {
			if(size < 0.7)
				return;
			size-= 0.05;
			refresh();
		};

		if(triggerUp !== undef) {
			$(triggerUp)
				.click(function() {
					$this.trigger('fontSizeUp');
				});
		}

		if(triggerDown !== undef) {
			$(triggerDown)
				.click(function() {
					$this.trigger('fontSizeDown');
				});
		}

		return this
			.css('font-size', '1em')
			.bind('fontSizeUp', up)
			.bind('fontSizeDown', down);
	};

})(this, this.jQuery);