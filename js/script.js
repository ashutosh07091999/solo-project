$(window).on('load', function () {
    $('#preloader').delay(350).fadeOut();
    $('#status').fadeOut();
});

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive : {
    // breakpoint from 0 up
    0 : {
       items: 1
    },
    // breakpoint from 480 up
    480 : {
      items: 2
    },
}
    });
});
/*$(function()
 {
    $(".progress-bar").each(function(){
        $(this).animate({
            width:$(this).attr("aria-valuenow") + "%"
        },1000);
    });
});*/
$(function(){
    $("#progress-elements").waypoint(function(){
         $(".progress-bar").each(function(){
        $(this).animate({
            width:$(this).attr("aria-valuenow") + "%"
        },1000);
    });
        
        this.destroy();
        
    },{
        offset:'bottom-in-view'
        
    }); 
});


$(function () {
   $("#services-tabs").responsiveTabs({
  animation: 'slide'
});
    
    
});
$(window).on('load', function () {
    $("#isotope-container").isotope({
          
    });
    
    $("#isotope-filters").on('click','button',function()
                            {
                    var filterValue=$(this).attr('data-filter');
        $("#isotope-container").isotope(
        {
            filter:filterValue
        });
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
                                
                            });
   
});


$(function () {
    
    $("#portfolio-wrapper").magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
         gallery: {
      enabled: true
    }
  // other options
});
});


$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


$(function () {
    $('.couter').counterUp({
                delay: 10,
                time: 1000
            });
});

$(function () {
    $("#client-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

$(window).on('load',function(){
    var addressString='230 Broadway,NY,New York 10007,USA';
        var myLatlng = {lat: 40.712860, lng: -74.007390};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 11, center: myLatlng});
    var marker = new google.maps.Marker({position: myLatlng, map: map,title:"Click to see address"});
    var infowindow = new google.maps.InfoWindow({
    content: addressString
  });
    marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
});

$(function(){
    showHideNav();
    $(window).scroll(function(){
        showHideNav();
    });
function showHideNav(){
    if($(window).scrollTop()>50){
        
        $("nav").addClass("white-nav-top");
        
        $(".navbar-brand img").attr("src","img/logo/logo-dark.png");
        $("#back-to-top").fadeIn();
    }
    else{
        $("nav").removeClass("white-nav-top");
      $(".navbar-brand img").attr("src","img/logo/logo.png");
          $("#back-to-top").fadeOut();
    }
}
});

$(function () {
    
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        var section_id=$(this).attr("href");
        
        $("html,body").animate({
            scrollTop:$(section_id).offset().top-64
            
        },1250,"easeInOutExpo");
    });
    
});







