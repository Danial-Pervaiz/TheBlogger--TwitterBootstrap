jQuery(document).ready(function() {
    "use strict";

    /*================== Search =====================*/
    $(".open-search").on("click",function(){
    	$(this).parent().toggleClass("active");
    	return false;
    });


    /*================== Responsive Menu =====================*/
    $(".open-menu").on("click",function(){
    	$(this).next("ul").addClass("slidein");
    	return false;
    });
    $("html").on("click",function(){
    	$("ul.slidein").removeClass("slidein");
    });
    $(".open-menu, .responsive-menu > ul").on("click",function(e){
    	e.stopPropagation();
    });


    /*================== Responsive Menu Dropdown =====================*/
    $(".responsive-menu ul ul").parent().addClass("menu-item-has-children");
    $(".responsive-menu ul li.menu-item-has-children > a").on("click",function(){
        $(this).parent().toggleClass("active").siblings().removeClass("active");
        $(this).next("ul").slideToggle();
        $(this).parent().siblings().find("ul").slideUp();
        return false;
    });


    /*================== SCROLLBAR =====================*/
    $('.responsive-menu > ul').enscroll({
    showOnHover: true,
    verticalTrackClass: 'track3',
    verticalHandleClass: 'handle3'
    });
    
    /* ============ Topics Carousel ================*/
    $('.topics-carousel').owlCarousel({
        autoplay:true,
        smartSpeed:1000,
        loop:true,
        dots:false,
        nav:false,
        margin:0,
        mouseDrag:false,
        singleItem:true,
        items:1,
        autoHeight:true,
        animateIn:"fadeInRight",
        animateOut:"fadeOutLeft"
    });

    /* ============ Stories Carousel ================*/
    $('.stories-carousel').owlCarousel({
        autoplay:true,
        smartSpeed:1000,
        loop:true,
        dots:false,
        nav:true,
        margin:0,
        mouseDrag:false,
        singleItem:true,
        items:1,
        autoHeight:true,
        animateIn:"fadeInRight",
        animateOut:"fadeOutLeft"
    });

    /* ============ Gallery Slider ================*/
    $('.gallery-slider').owlCarousel({
        autoplay:false,
        smartSpeed:1000,
        loop:true,
        dots:false,
        nav:true,
        margin:10,
        mouseDrag:true,
        singleItem:true,
        items:1,
        autoHeight:true,
        animateIn:"fadeIn",
        animateOut:"fadeOut"
    });

    /*=================== LightBox ===================*/
    $(function() {
        var foo = $('.lightbox');
        foo.poptrox({
            usePopupCaption: true
        });
    });

}); /*=== Document.Ready Ends Here ===*/
