$(document).ready(function() {
  $(window).scroll(function(e){
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent = (scrollTop) / (docHeight - winHeight);
    var scrollPercent = scrollPercent * 100
    var scrollPercent = 100 - scrollPercent
    $('#progress-show').height(scrollPercent + '%');
  });
});
