$(document).ready(function(){


    //swipebox
    if (!!$('[data-swipebox]').offset()) {
        $('[data-swipebox]').swipebox();
    }

    //main-partners-box
    if (!!$('.main-partners-box').offset()) {
        $('.main-partners-box .slider').slick({
            dots: false,
            slidesToShow: 4,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    //main-info-box
    if (!!$('.main-info-box').offset()) {
        let mS = $('.main-info-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: false,
            nextArrow: false,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
            ]
        });
        $('.main-info-box .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.main-info-box .info-wrap li.active').removeClass('active');
            $('.main-info-box .info-wrap li[data-slide="' + currentSlide + '"]').addClass('active');
        });
        $('.main-info-box .info-wrap li').click(function () {
            let newSlide = $(this).attr('data-slide');
            $('.main-info-box .info-wrap li').removeClass('active');
            $(this).addClass('active');
            $('.main-info-box .slider-wrap .slider').slick('slickGoTo', newSlide);
            return false;
        })
        $('.main-info-box li[data-slide="0"]').addClass('active');
    }
});