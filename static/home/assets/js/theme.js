(function ($) {
    "use strict";
    if($('.curved-circle').length) {
        $('.curved-circle').circleType({position: 'absolute', dir: 1, radius: 57, forceHeight: true, forceWidth: true});
    }

    //Submenu Dropdown Toggle
    if ($('.main-nav__main-navigation li.dropdown ul').length) {
        $('.main-nav__main-navigation li.dropdown').append('<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button>');
    }

    function dynamicCurrentMenuClass(selector) {
        let FileName = window.location.href.split('/').reverse()[0];

        selector.find('li').each(function () {
            let anchor = $(this).find('a');
            if ($(anchor).attr('href') == FileName) {
                $(this).addClass('current');
            }
        });
        // if any li has .current elmnt add class
        selector.children('li').each(function () {
            if ($(this).find('.current').length) {
                $(this).addClass('current');
            }
        });
        // if no file name return 
        if ('' == FileName) {
            selector.find('li').eq(0).addClass('current');
        }
    }

    // mobile menu

    if ($('.main-nav__main-navigation').length) {
        let mobileNavContainer = $('.mobile-nav__container');
        let mainNavContent = $('.main-nav__main-navigation').html();



        mobileNavContainer.append(function () {
            return mainNavContent;
        });



        //Dropdown Button
        mobileNavContainer.find('li.dropdown .dropdown-btn').on('click', function () {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(500);
        });

        // dynamic current class        
        let mainNavUL = $('.main-nav__main-navigation').find('.main-nav__navigation-box');
        let mobileNavUL = mobileNavContainer.find('.main-nav__navigation-box');

        dynamicCurrentMenuClass(mainNavUL);
        dynamicCurrentMenuClass(mobileNavUL);


    }


    if ($('.mc-form').length) {
        var mcURL = $('.mc-form').data('url');
        $('.mc-form').ajaxChimp({
            url: mcURL,
            callback: function (resp) {
                // appending response
                $('.mc-form__response').append(function () {
                    return '<p class="mc-message">' + resp.msg + '</p>';
                })
                // making things based on response
                if (resp.result === 'success') {
                    // Do stuff
                    $('.mc-form').removeClass('errored').addClass('successed');
                    $('.mc-form__response').removeClass('errored').addClass('successed');
                    $('.mc-form').find('input').val('');

                    $('.mc-form__response p').fadeOut(10000);

                }
                if (resp.result === 'error') {
                    $('.mc-form').removeClass('successed').addClass('errored');
                    $('.mc-form__response').removeClass('successed').addClass('errored');
                    $('.mc-form').find('input').val('');

                    $('.mc-form__response p').fadeOut(10000);

                }
            }
        });

    }




    if ($('.datepicker').length) {
        $('.datepicker').datepicker();
    }


    if ($('.plan-visit__tab-links').length) {
        var planVisitLink = $('.plan-visit__tab-links').find('.nav-link');
        planVisitLink.on('click', function (e) {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top - 50
            }, 1000);


            planVisitLink.removeClass('active');
            $(this).addClass('active');

            return false;
        })
    }

    if ($('.contact-form-validated').length) {
        $('.contact-form-validated').validate({ // initialize the plugin
            rules: {
                fname: {
                    required: true
                },
                lname: {
                    required: true
                },
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                service: {
                    required: true
                },
                message: {
                    required: true
                },
                subject: {
                    required: true
                }
            },
            submitHandler: function (form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function (response) {
                    $(form).parent().find('.result').append(response);
                    $(form).find('input[type="text"]').val('');
                    $(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                });
                return false;
            }
        });
    }
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    }
    if ($('.img-popup').length) {
        var groups = {};
        $('.img-popup').each(function () {
            var id = parseInt($(this).attr('data-group'), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });


        $.each(groups, function () {

            $(this).magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: {
                    enabled: true
                }
            });

        });

    };
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)

            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

    if ($('.video-popup').length) {
        $('.video-popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false
        });
    }
    if ($('[data-toggle="tooltip"]').length) {
        $('[data-toggle="tooltip"]').tooltip();
    }
    if ($('.stricky').length) {
        $('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original');
    }
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

            return false;

        });
    }

    if ($('.side-menu__toggler').length) {
        $('.side-menu__toggler').on('click', function (e) {
            $('.side-menu__block').toggleClass('active');
            e.preventDefault();
        });
    }

    if ($('.side-menu__block-overlay').length) {
        $('.side-menu__block-overlay').on('click', function (e) {
            $('.side-menu__block').removeClass('active');
            e.preventDefault();
        });
    }

    if ($('.side-content__toggler').length) {
        $('.side-content__toggler').on('click', function (e) {
            $('.side-content__block').toggleClass('active');
            e.preventDefault();
        });
    }

    if ($('.side-content__block-overlay').length) {
        $('.side-content__block-overlay').on('click', function (e) {
            $('.side-content__block').removeClass('active');
            e.preventDefault();
        });
    }


    if ($('.search-popup__toggler').length) {
        $('.search-popup__toggler').on('click', function (e) {
            $('.search-popup').addClass('active');
            e.preventDefault();
        });
    }

    if ($('.search-popup__overlay').length) {
        $('.search-popup__overlay').on('click', function (e) {
            $('.search-popup').removeClass('active');
            e.preventDefault();
        });
    }
    $(window).on('scroll', function () {
        if ($('.scroll-to-top').length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $('.scroll-to-top').fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $('.scroll-to-top').fadeOut(500);
            }
        }
        if ($('.stricked-menu').length) {
            var headerScrollPos = 100;
            var stricky = $('.stricked-menu');
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.addClass('stricky-fixed');
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass('stricky-fixed');
            }
        }
    });
    if ($('.accrodion-grp').length) {
        var accrodionGrp = $('.accrodion-grp');
        accrodionGrp.each(function () {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            var accordion = Self.find('.accrodion');
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            accordion.each(function () {
                $(this).find('.accrodion-title').on('click', function () {
                    if ($(this).parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');
                        $(this).parent().find('.accrodion-content').slideDown();
                    };


                });
            });
        });

    };



    $(window).on('load', function () {


        if ($('.thm__owl-carousel').length) {
            $('.thm__owl-carousel').each(function () {

                var Self = $(this);
                var carouselOptions = Self.data('options');
                var carouselPrevSelector = Self.data('carousel-prev-btn');
                var carouselNextSelector = Self.data('carousel-next-btn');
                var thmCarousel = Self.owlCarousel(carouselOptions);
                if (carouselPrevSelector !== undefined) {
                    $(carouselPrevSelector).on('click', function () {
                        thmCarousel.trigger('prev.owl.carousel', [1000]);
                        return false;
                    });
                }
                if (carouselNextSelector !== undefined) {
                    $(carouselNextSelector).on('click', function () {
                        thmCarousel.trigger('next.owl.carousel', [1000]);
                        return false;
                    });
                }
            });
        }

        // owl dots margin increment
        if ($('.thm__owl-dot-1').length) {
            var count = 10;
            $('.thm__owl-dot-1').find('.owl-dot span').each(function () {
                count += 10;
                $(this).css('left', '+=' + count + 'px');
            });
        }
        if ($('.thm__owl-dot-rtl-1').length) {
            var count = 10;
            $('.thm__owl-dot-rtl-1').find('.owl-dot span').each(function () {
                count += 10;
                $(this).css('right', '+=' + count + 'px');
            });
        }
        if ($('.thm__owl-dot-2').length) {
            var count = 10;
            $('.thm__owl-dot-2').find('.owl-dot span').each(function () {
                count += 10;
                $(this).css('top', '+=' + count + 'px');
            });
        }
        if ($('.preloader').length) {
            $('.preloader').fadeOut('slow');
        }

        if ($('.side-menu__block-inner').length) {
            $('.side-menu__block-inner').mCustomScrollbar({
                axis: 'y',
                theme: 'dark'
            });
        }
        

        if ($('.side-content__block-inner').length) {
            $('.side-content__block-inner').mCustomScrollbar({
                axis: 'y',
                theme: 'dark'
            });
        }

        if ($('.custom-cursor__overlay').length) {

            // / cursor /
            var cursor = $(".custom-cursor__overlay .cursor"),
                follower = $(".custom-cursor__overlay .cursor-follower");

            var posX = 0,
                posY = 0;

            var mouseX = 0,
                mouseY = 0;

            TweenMax.to({}, 0.016, {
                repeat: -1,
                onRepeat: function () {
                    posX += (mouseX - posX) / 9;
                    posY += (mouseY - posY) / 9;

                    TweenMax.set(follower, {
                        css: {
                            left: posX - 22,
                            top: posY - 22
                        }
                    });

                    TweenMax.set(cursor, {
                        css: {
                            left: mouseX,
                            top: mouseY
                        }
                    });

                }
            });

            $(document).on("mousemove", function (e) {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                mouseX = e.pageX;
                mouseY = e.pageY - scrollTop;
            });
            $("button, a").on("mouseenter", function () {
                cursor.addClass("active");
                follower.addClass("active");
            });
            $("button, a").on("mouseleave", function () {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
            $(".custom-cursor__overlay").on("mouseenter", function () {
                cursor.addClass("close-cursor");
                follower.addClass("close-cursor");
            });
            $(".custom-cursor__overlay").on("mouseleave", function () {
                cursor.removeClass("close-cursor");
                follower.removeClass("close-cursor");
            });
        }


        if ($('.masonary-layout').length) {
            $('.masonary-layout').isotope({
                layoutMode: 'masonry',
                itemSelector: '.masonary-item'
            });
        }

        if ($('.post-filter').length) {
            var postFilterList = $('.post-filter li');
            // for first init
            $('.filter-layout').isotope({
                filter: '.filter-item',
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            // on click filter links
            postFilterList.children('span').on('click', function () {
                var Self = $(this);
                var selector = Self.parent().attr('data-filter');
                postFilterList.children('span').parent().removeClass('active');
                Self.parent().addClass('active');


                $('.filter-layout').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        }

        if ($('.post-filter.has-dynamic-filter-counter').length) {
            // var allItem = $('.single-filter-item').length;

            var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

            activeFilterItem.each(function () {
                var filterElement = $(this).data('filter');
                var count = $('.gallery-content').find(filterElement).length;
                $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
            });
        }

    });

})(jQuery);



// Cart: localStorage-backed simple cart
(function ($) {
    'use strict';

    // single source key for cart
    var CART_KEY = 'painterCartV1';

    // migrate legacy simple id list (if present) to objects
    function migrateLegacy() {
        try {
            var legacy = JSON.parse(localStorage.getItem('miniCartItems') || 'null');
            var cur = localStorage.getItem(CART_KEY);
            if (legacy && !cur && Array.isArray(legacy)) {
                var converted = legacy.map(function (id) {
                    return { id: String(id), title: '', price: '0.00', image: '', qty: 1 };
                });
                localStorage.setItem(CART_KEY, JSON.stringify(converted));
            }
        } catch (e) {}
    }

    function readCart() {
        try {
            return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
        } catch (e) {
            return [];
        }
    }
    function writeCart(cart) {
        try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
    }
    function findIndex(cart, id) {
        for (var i = 0; i < cart.length; i++) {
            if (String(cart[i].id) === String(id)) return i;
        }
        return -1;
    }

    function updateCounter() {
        var cart = readCart();
        var n = cart.reduce(function (s, it) { return s + (parseInt(it.qty, 10) || 0); }, 0);
        $('.mini-cart-count, .cart-count-internal, .cart-count').text(n);
    }

    function updateAddButtons() {
        var cart = readCart();
        $('.add-to-cart[data-item-id]').each(function () {
            var $b = $(this);
            var id = String($b.data('item-id') || '');
            if (!id) return;
            var exists = findIndex(cart, id) !== -1;
            if (exists) {
                // show explicit "Retirer du panier" while item is in cart
                $b.addClass('in-cart').text('Retirer du panier');
            } else {
                $b.removeClass('in-cart').text('Ajouter au panier');
            }
        });
    }

    function addToCart(item) {
        var cart = readCart();
        var idx = findIndex(cart, item.id);
        if (idx === -1) {
            item.qty = item.qty || 1;
            cart.push(item);
        } else {
            cart[idx].qty = (parseInt(cart[idx].qty, 10) || 0) + (parseInt(item.qty, 10) || 1);
        }
        writeCart(cart);
        // ping other tabs/pages
        try { localStorage.setItem(CART_KEY + '_sync', Date.now().toString()); } catch (e) {}
        updateCounter();
        updateAddButtons();
    }


    function removeFromCart(id) {
        var cart = readCart();
        var idx = findIndex(cart, id);
        if (idx !== -1) {
            cart.splice(idx, 1);
            writeCart(cart);
            // ping other tabs/pages
            try { localStorage.setItem(CART_KEY + '_sync', Date.now().toString()); } catch (e) {}
            updateCounter();
            updateAddButtons();
            return true;
        }
        return false;
    }

    function setQty(id, qty) {
        var cart = readCart();
        var idx = findIndex(cart, id);
        if (idx !== -1) {
            qty = parseInt(qty, 10) || 0;
            if (qty <= 0) {
                cart.splice(idx, 1);
            } else {
                cart[idx].qty = qty;
            }
            writeCart(cart);
            updateCounter();
            updateAddButtons();
        }
    }

    function formatPrice(v) {
        v = parseFloat(v) || 0;
        return v.toFixed(2);
    }

    function renderCart() {
        var $container = $('.shopping-cart-items');
        if (!$container.length) return;
        var $shopping = $container.closest('.shopping-cart');
        var cart = readCart();
        // empty cart: show empty message, hide items / totals / checkout
        if (!cart || cart.length === 0) {
            $container.empty().hide();
            $shopping.find('.shopping-cart-empty').show();
            $shopping.find('.totals').hide();
            $shopping.find('.checkout').hide();
            updateCounter();
            // ensure totals zeroed
            $('#cart-subtotal').text(formatPrice(0));
            $('#cart-tax').text(formatPrice(0));
            $('#cart-shipping').text(formatPrice(0));
            $('#cart-total').text(formatPrice(0));
            return;
        }

        // has items: render list and show totals
        $shopping.find('.shopping-cart-empty').hide();
        $container.show().empty();
        var subtotal = 0;
        cart.forEach(function (it) {
            var price = parseFloat(it.price) || 0;
            var qty = parseInt(it.qty, 10) || 1;
            var line = price * qty;
            subtotal += line;
            var $row = $(
                '<div class="product" data-item-id="' + it.id + '">' +
                    '<div class="product-image"><img src="' + (it.image || '') + '" alt=""></div>' +
                    '<div class="product-details">' +
                        '<div class="product-title">' + $('<div/>').text(it.title || '').html() + '</div>' +
                        '<p class="product-description"></p>' +
                    '</div>' +
                    '<div class="product-price">' + formatPrice(price) + '</div>' +
                    '<div class="product-quantity"><input type="number" class="qty-input" value="' + qty + '" min="1"></div>' +
                    '<div class="product-removal"><button class="remove-product btn btn-link" type="button">Supprimer</button></div>' +
                    '<div class="product-line-price">' + formatPrice(line) + '</div>' +
                '</div>'
            );
            $container.append($row);
        });
        var tax = subtotal * 0.05;
        var shipping = subtotal > 0 ? 15.00 : 0.00;
        var total = subtotal + tax + shipping;
        $('#cart-subtotal').text(formatPrice(subtotal));
        $('#cart-tax').text(formatPrice(tax));
        $('#cart-shipping').text(formatPrice(shipping));
        $('#cart-total').text(formatPrice(total));

        $shopping.find('.totals').show();
        $shopping.find('.checkout').show();
        updateCounter();
    }


    // init
    $(function () {
        migrateLegacy();
        updateCounter();
        updateAddButtons();
        renderCart();
    });

    // sync cart changes coming from other tabs/windows
    window.addEventListener('storage', function (e) {
        if (!e.key) return;
        // react to direct cart key or our lightweight sync ping
        if (e.key !== CART_KEY && e.key !== (CART_KEY + '_sync') && e.key.indexOf(CART_KEY) !== 0) return;

        try {
            updateCounter();
            updateAddButtons();
            if ($('.shopping-cart-items').length) {
                renderCart();
            }
        } catch (err) { /* ignore */ }
    });

    // toggle add/remove from product list (click on same button toggles)
    $(document).on('click', '.add-to-cart', function (e) {
        e.preventDefault();
        var $b = $(this);
        var id = String($b.data('item-id') || '');
        if (!id) return;
        var title = $b.data('item-title') || $b.closest('[data-item-title]').data('item-title') || $b.closest('.venue-one__single').find('h3').text() || '';
        var price = $b.data('item-price') || '0.00';
        var image = $b.data('item-image') || '';
        var cart = readCart();
        var idx = findIndex(cart, id);

        if (idx === -1) {
            // add and update this button immediately
            addToCart({ id: id, title: title, price: price, image: image, qty: 1 });
            $b.addClass('in-cart').text('Retirer du panier');
        } else {
            // remove and update this button immediately
            var removed = removeFromCart(id);
            if (removed) {
                $b.removeClass('in-cart').text('Ajouter au panier');
            }
        }
        // refresh cart list if visible
        renderCart();
    });

    // remove from cart page
    $(document).on('click', '.remove-product', function (e) {
        e.preventDefault();
        var $prod = $(this).closest('.product');
        var id = String($prod.data('item-id') || '');
        if (!id) return;

        var removed = removeFromCart(id);
        if (removed) {
            // immediately restore product list buttons and counter
            updateAddButtons();
            updateCounter();

            // remove DOM row with animation then re-render totals
            $prod.slideUp(180, function () {
                $(this).remove();
                renderCart();
            });

            // trigger a lightweight storage ping so other tabs update
            try { localStorage.setItem(CART_KEY + '_sync', Date.now().toString()); } catch (err) { /* ignore */ }
        } else {
            renderCart();
        }
    });

    // qty change on cart page
    $(document).on('change', '.qty-input', function () {
        var $input = $(this);
        var qty = parseInt($input.val(), 10) || 1;
        if (qty < 1) qty = 1;
        $input.val(qty);
        var id = $input.closest('.product').data('item-id');
        if (!id) return;
        setQty(id, qty);
        renderCart();
    });

})(jQuery);
