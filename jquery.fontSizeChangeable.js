(function (window, Error, $, undef) {
    if ($ === undef) {
        throw new Error('Dépendence non satisfaite : jQuery');
    }

    function fontSizeChangeable(triggerUp, triggerDown) {
        var $this = this,
        size = 1;

        function refresh() {
            $this
                .css('font-size', size + 'em');
        }

        function up() {
            if (size < 1.5) {
                size += 0.05;
                refresh();
            }
        }

        function down() {
            if (size > 0.7) {
                size -= 0.05;
                refresh();
            }
        }

        function onTriggerUpClicked() {
            $this.trigger('fontSizeUp');
        }

        function onTriggerDownClicked() {
            $this.trigger('fontSizeDown');
        }

        if (triggerUp !== undef) {
            $(triggerUp)
                .click(onTriggerUpClicked);
        }

        if (triggerDown !== undef) {
            $(triggerDown)
                .click(onTriggerDownClicked);
        }

        return this
            .css('font-size', '1em')
            .bind('fontSizeUp', up)
            .bind('fontSizeDown', down);
    }

    $.fn.fontSizeChangeable = $.fn.fontSizeChangeable || fontSizeChangeable;

}(this, this.Error, this.jQuery));