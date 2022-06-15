/**
 * @file
 */

 (function ($) {
  Drupal.behaviors.paragraph_owl = {
      attach: function (context, settings) {
          $('.owl-carousel', context).each(function () {
              $(this).owlCarousel({
                  items: 1,
                  loop: true,
                  nav: true,
                  lazyload: false,
                  video: true,
                  autoplayTimeout: 6000,
                  autoplayHoverPause: true,
                  navText: ['<span class="material-icons-outlined"> arrow_back </span>', '<span class="material-icons-outlined"> arrow_forward </span>'],

                 onTranslate: function(event) {
                      var currentSlide, player, command;
                      currentSlide = $('.owl-item.active');
                      player = currentSlide.find(".item-video iframe").get(0);
                      command = {
                        "event": "command",
                        "func": "pauseVideo"
                      };
                      if (player != undefined) {
                        player.contentWindow.postMessage(JSON.stringify(command), "*");
                      }
                    }
                
              });
          });
      }
  };
})(jQuery);
