 function showModal(){
   	$('.modal-container').fadeIn(300);
   }
   function closeModal(){
   	$('.modal-container').fadeOut(300);
   }

    function fbShare(url, caption){
    FB.ui({
      method: 'feed',
      link: url,
      caption: caption,
    }, function(response){});
  }

$(document).ready(function() {

  $("#owl-home").owlCarousel({
  	navigation : true, // Show next and prev buttons
  	slideSpeed : 300,
  	paginationSpeed : 400,
  	singleItem:true,
  	pagination: false,
    rewindNav: true,
  	navigationText: ["<img src='img/arrow-left.png'>", "<img src='img/arrow-right.png'>"]
  	  });

  $('.mobile-trigger a').click(function(e){
  	e.preventDefault()
  	$('#menu').toggle()
  })

 $('.tweet-share').click(function(e){
  e.preventDefault()
 })

  var feed = new Instafeed({
         get: 'tagged',
         tagName: 'realstrength',
         clientId: 'a8ebb98564e34a4d83e6431ea7e9444a',
         limit: 4,
         template: '<li><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></li>'
     });
   feed.run();


   var currentPage = $('.this-page').attr('id')
   $('li.' + currentPage).addClass('active-page')

  if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
     var s = skrollr.init({
      edgeStrategy: 'set',
      easing: {
        WTF: Math.random,
        inverted: function(p) {
          return 1-p;
        }
      }
    });
     // use JS to make the post-meta stuff (share) the same height as the excerpt. Ew.
	$('.post-meta').css('height',$('.post-details').css('height'));
  };

  	

	$('.share-icon').click(function(e){
		e.preventDefault()
		$(this).children('.share-tip').toggleClass('open-tip')
	})
});