$(document).on('pop-initialized', function(){
  $('.asset-type-imagegroup').live('initialize', function(){
    $(this).find('.slide').each(function(){
      var $el = $(this).find('a').addClass('overlay');
      $el.find('img').insertAfter($el);
    });
  });
});
