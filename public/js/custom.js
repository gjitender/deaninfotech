const mapapikey = ''; function customMap() {
  $('.google-map').each(function (index, element) {
    const map_default = {
      address: '', content: '', icon: '', zoom: 10, scrollwheel: true, styles: '',
    }; const e = $(this); for (const i in map_default) { if (e.data(i) !== undefined) { map_default[i] = e.data(i); } else if (e.data(i.toLowerCase()) !== undefined) { map_default[i] = e.data(i.toLowerCase()); } }e.gmap3({
      marker: {
        values: [{ address: map_default.address, data: map_default.content, options: { icon: map_default.icon } }],
        options: { draggable: false },
        events: {
          click(marker, event, context) {
            let map = $(this).gmap3('get'),
              infowindow = $(this).gmap3({ get: { name: 'infowindow' } }); if (infowindow) { infowindow.open(map, marker); infowindow.setContent(context.data); } else { $(this).gmap3({ infowindow: { anchor: marker, options: { content: context.data } } }); }
          },
          closeclick() { const infowindow = $(this).gmap3({ get: { name: 'infowindow' } }); if (infowindow) { infowindow.close(); } },
        },
      },
      map: {
        options: {
          mapTypeId: google.maps.MapTypeId.ROADMAP, mapTypeControl: true, mapTypeControlOptions: { style: google.maps.MapTypeControlStyle.DROPDOWN_MENU }, navigationControl: true, zoom: map_default.zoom, scrollwheel: map_default.scrollwheel, styles: map_default.styles,
        },
      },
    });
  });
}$(document).ready(() => {
  $('.imgbg-cover').each(function (index, element) {
    $(this).css('background-image', `url("${ $(this).children('img').eq(0).remove()
      .attr('src') }")`);
  }); $('.min-window-height').each(function (index, element) { $(this).css('min-height', $(window).height()); }); $(window).resize(() => { $('.min-window-height').each(function (index, element) { $(this).css('min-height', $(window).height()); }); }); $('.window-height').each(function (index, element) { $(this).css('height', $(window).height()); }); $(window).resize(() => { $('.window-height').each(function (index, element) { $(this).css('height', $(window).height()); }); }); $('.circle_slider').each(function () {
    const circle_slider_default = {
      max_shown_items: 3, hv_switch: 0, active_item: 0, wrapper_text_max_height: 'auto', middle_click: 1, under_600_max_height: 1200, automatic_height_resize: 1, border_on_off: 1, prettyPhoto_width: 42, responsive_by_available_space: 1, small_pic_width: 100, small_pic_height: 100, big_pic_width: 182, big_pic_height: 182, child_div_width: 150, child_div_height: 150, small_border: 4, big_border: 4, border_color: '#FFFFFF', arrow_color: '#FFFFFF', left_offset: 20, hide_prettyPhoto: 1,
    }; const e = $(this); const image_array = new Array(); for (const i in circle_slider_default) { if (e.data(i) !== undefined) { circle_slider_default[i] = e.data(i); } else if (e.data(i.toLowerCase()) !== undefined) { circle_slider_default[i] = e.data(i.toLowerCase()); } }e.content_slider(circle_slider_default);
  }); jQuery('.isotope-grid').each(function () {
    const url = window.location.search; if (url.indexOf('?') != -1) {
      const str = url.substr(1); strs = str.split('&'); for (i = 0; i < strs.length; i++) {
        if (jQuery(this).attr('id') == strs[i].split('=')[0]) {
          $(this).find('.isotope-group a').eq(strs[i].split('=')[1] - 1).addClass('active')
            .siblings()
            .removeClass('active');
        }
      }
    } let a = jQuery(this),
      e = a.find('.isotope-main'),
      el = e.find('.isotope-item'),
      response = 0,
      item = a.data('item') ? a.data('item') : 4,
      szie = {
        MobileSmall: [item - 4, 1], Mobile: [479, Math.max(item - 3, 1)], Tablet: [768, Math.max(item - 2, Math.min(2, item))], DesktopSmall: [979, Math.max(item - 1, Math.min(2, item))], Desktop: [1199, Math.max(item - 1, Math.min(2, item))],
      },
      once = true,
      currentpage = 0,
      endData = false; if (item == 5 || item == 6) {
      szie = {
        MobileSmall: [1, 1], Mobile: [479, 1], Tablet: [768, 2], DesktopSmall: [979, Math.max(item - 2, Math.min(2, item))], Desktop: [1199, Math.max(item - 1, Math.min(2, item))],
      };
    } for (i in szie) { if (a.data(i) != undefined) { szie[i][1] = a.data(i); } else if (a.data(i.toLowerCase()) != undefined) { szie[i][1] = a.data(i.toLowerCase()); } } function responsive(list, newitem) { w = $(window).width(); f = response; if (w <= szie.MobileSmall[0]) { response = szie.MobileSmall[1]; } else if (w <= szie.Mobile[0]) { response = szie.Mobile[1]; } else if (w <= szie.Tablet[0]) { response = szie.Tablet[1]; } else if (w <= szie.DesktopSmall[0]) { response = szie.DesktopSmall[1]; } else if (w <= szie.Desktop[0]) { response = szie.Desktop[1]; } else { response = item; } if (f != response || newitem) { list.each(function () { $(this).data('zoom') ? $(this).css('width', `${Math.min((100 / response) * $(this).data('zoom'), 100)}%`) : $(this).css('width', `${100 / response}%`); }); } } let filterValue = false; a.find('.isotope-group').each(function () { filterValue += $(this).find('.active').attr('data-filter') != '*' && $(this).find('.active').attr('data-filter') ? $(this).find('.active').attr('data-filter') : false; }); filterValue = filterValue || '*'; const sortValue = a.find('.sort-box .active').attr('href') ? a.find('.sort-box .active').attr('href').slice(1) : false; const ascValue = a.find('.desc-asc .active').attr('data-sort') ? a.find('.desc-asc .active').attr('data-sort') : false; responsive(el); function isotopegrid() {
      jQuery(window).resize(() => { responsive(el); }); el.each(function (index, element) { if (!$(this).data('zoom')) { $(this).addClass('standard-size'); return false; } }); e.isotope({
        getSortData: {
          name(itemElem) { return jQuery(itemElem).find('.name').text().toLowerCase(); }, author(itemElem) { return jQuery(itemElem).find('.author').text().toLowerCase(); }, date(itemElem) { return parseInt(jQuery(itemElem).find('.date').attr('data-date')); }, price(itemElem) { return parseFloat(jQuery(itemElem).find('.price').attr('data-price')); },
        },
        sortBy: sortValue,
        sortAscending: ascValue == 'asc',
        filter: filterValue,
        percentPosition: true,
        masonry: { columnWidth: '.standard-size' },
      }); a.children('.loading').remove(); a.removeClass('loading'); el.css({ opacity: '0' }).animate({ opacity: '1' }); a.find('.isotope-group').on('click', 'a', function () { let filterValue = ''; jQuery(this).addClass('active').siblings().removeClass('active'); a.find('.isotope-group').each(function () { filterValue += jQuery(this).find('.active').attr('data-filter') != '*' ? jQuery(this).find('.active').attr('data-filter') : ''; }); e.isotope({ filter: filterValue || '*' }); if (jQuery(this).parent().siblings('.active_filter').length != 0) { jQuery(this).parent().siblings('.active_filter').html(jQuery(this).html()); jQuery(this).parent().slideUp(200); } return false; }); a.find('.isotope-group-select').on('change', function () {
        const se = $(this); let filterValue = ''; a.find('.isotope-group-select').each(function (index) {
          a.find('.isotope-group').eq(index).find(`a[data-filter="${$(this).val()}"]`).addClass('active')
            .siblings()
            .removeClass('active'); filterValue += $(this).val() != '*' ? $(this).val() : '';
        }); e.isotope({ filter: se.val() });
      }); a.find('.sort-box a').click(function () { const sortName = jQuery(this).attr('href').slice(1); jQuery(this).addClass('active').siblings().removeClass('active'); e.isotope({ sortBy: sortName }); if (jQuery(this).parent().siblings('.active_filter').length != 0) { jQuery(this).parent().siblings('.active_filter').html(jQuery(this).html()); jQuery(this).parent().slideUp(200); } return false; }); a.find('.desc-asc a').click(function () { const sorts = jQuery(this).attr('data-sort'); jQuery(this).addClass('active').siblings().removeClass('active'); e.isotope({ sortAscending: sorts == 'asc' }); if (jQuery(this).parent().siblings('.active_filter').length != 0) { jQuery(this).parent().siblings('.active_filter').html(jQuery(this).html()); jQuery(this).parent().slideUp(200); } return false; }); a.find('.filter-switch').click(function () {
        $(this).siblings('a').each(function () {
          console.log($(this).hasClass('active'));
          if (!$(this).hasClass('active')) { $(this).click(); return false; }
        });
      }); a.find('.active_filter').each(function () {
        jQuery(this).on('click', function () { jQuery(this).siblings('.filter_list').slideToggle(100); });
        jQuery(this).parent().on('mouseleave', function () { jQuery(this).find('.filter_list').slideUp(200); });
}); if (a.hasClass('isotope-ajax') && a.data('ajaxurl')) {
        let requestData = true; const ajaxDate = function () {
          requestData = false; a.find('.ajax-more').addClass('loading'); $.ajax({
            type: 'GET', url: a.data('ajaxurl'), data: '', dataType: 'html', success(data) { const items = $(data); ImgLoad(() => { responsive(items, true); e.append(items).isotope('appended', items); a.find('.ajax-more').removeClass('loading'); currentpage++; requestData = true; if (endData) { a.find('.ajax-more').hide(); } }, items); },
          });
        }; a.find('.ajax-more').on('click', () => { if (requestData) { ajaxDate(); } }); if (a.data('infinity-scroll')) { const maxpage = a.data('max-scroll-page') ? a.data('max-scroll-page') : 5; $(window).scroll(() => { if ($(window).scrollTop() + $(window).height() > e.offset().top + e.innerHeight() && requestData) { if (currentpage < maxpage) { ajaxDate(); } } }); }
      }once = false;
    } if (a.find('.owl-carousel').length === 0) { ImgLoad(() => { isotopegrid(); }, e); } else { c = e.find('.owl-carousel').last(); c.on('refreshed.owl.carousel', () => { if (once) { setTimeout(() => { isotopegrid(); }, 300); } else { e.isotope(); } }); }
  }); $('.owl-carousel').each(function () {
    const e = $(this); const item = e.data('items') ? e.data('items') : 4; const carousel_default = {
      items: item, loop: true, center: false, rewind: false, mouseDrag: true, touchDrag: true, pullDrag: true, freeDrag: false, margin: 0, stagePadding: 0, merge: false, mergeFit: true, autoWidth: false, startPosition: 0, rtl: false, smartSpeed: 250, fluidSpeed: false, dragEndSpeed: false, responsiveRefreshRate: 200, responsiveBaseElement: window, fallbackEasing: 'swing', info: false, nestedItemSelector: false, MobileSmall: 1, autoplay: false, autoplayTimeout: 3000, autoplayHoverPause: true, autoHeight: false, nav: true, animateOut: '', animateIn: '', navText: ['<', '>'], navSpeed: false, navElement: 'div', navContainer: false, slideBy: 1, dots: true, dotsEach: false, dotsData: false, dotsSpeed: false, dotsContainer: false, maxHeight: false, model3D: false, mobile: Math.max(item - 3, 1), tablet: Math.max(item - 2, Math.min(2, item)), desktopSmall: Math.max(item - 1, Math.min(3, item)), desktop: Math.max(item - 1, Math.min(3, item)),
    }; for (i in carousel_default) { if (e.data(i) != undefined) { carousel_default[i] = e.data(i); } else if (e.data(i.toLowerCase()) != undefined) { carousel_default[i] = e.data(i.toLowerCase()); } }carousel_default.responsive = {
      0: { items: carousel_default.MobileSmall }, 321: { items: carousel_default.mobile }, 481: { items: carousel_default.tablet }, 769: { items: carousel_default.desktopSmall }, 993: { items: carousel_default.desktop }, 1201: { items: carousel_default.items },
    }; if (carousel_default.model3D) {
      carousel_default.maxHeight = true; carousel_default.center = true; carousel_default.mouseDrag = false; let moves = 0,
        rotate = true; e.on('translated.owl.carousel', (x) => { rotate = true; });
      let prev = true,
        next = true; e.on('drag.owl.carousel', (x) => {
        e.addClass('owl-grab owl-drag');
        moves == 0 ? moves = x.originalEvent.offsetX : ''; if (x.originalEvent.offsetX - moves > 20 && rotate && prev) { moves = x.originalEvent.offsetX; e.trigger('prev.owl'); next = false; } if (x.originalEvent.offsetX - moves < -20 && rotate && next) { moves = x.originalEvent.offsetX; e.trigger('next.owl'); prev = false; } if (x.originalEvent.screenX == 0) { moves = 0; prev = true; next = true; e.removeClass('owl-grab owl-drag'); }
      });
} if (carousel_default.maxHeight) { e.on('refreshed.owl.carousel', (x) => { let max_height = 0; e.find('.owl-item.center').addClass('temporary'); e.find('.owl-item').addClass('center'); e.find('.owl-item.center').each(function () { max_height = Math.max(max_height, $(this).innerHeight()); }); e.find('.owl-item').removeClass('center'); e.find('.owl-item.temporary').addClass('center').removeClass('temporary'); e.find('.owl-stage-outer').css('height', max_height); }); } if (carousel_default.center) { e.on('initialized.owl.carousel translate.owl.carousel', (x) => { e.find('.owl-item.next').removeClass('next'); e.find('.owl-item.prev').removeClass('prev'); e.find('.owl-item').eq(x.item.index).addClass('center'); e.find('.owl-item').eq(x.item.index + 1).addClass('prev'); e.find('.owl-item').eq(x.item.index - 1).addClass('next'); }); } if (carousel_default.maxHeight || e.attr('class').indexOf('dg-testimonial')) { ImgLoad(() => { e.owlCarousel(carousel_default).each(() => {}); }, e); } else { e.owlCarousel(carousel_default); }
  });
  $('[class*=dg-imagebox] .owl-carousel').each(function () {
    const e = $(this); e.on('refreshed.owl.carousel', (x) => {
      const allAfter = function () { e.find('.owl-nav').insertAfter(e); e.find('.owl-dots').insertAfter(e); };
      setTimeout(allAfter, 10);

 });
  }); $('.decorate').each(function () {
    const chart_default = {
      animate: 1000, barColor: $(this).css('color'), trackColor: '#dddddd', size: 200, lineWidth: 10, lineCap: 'round', scaleColor: false, onStep(from, to, percent) { $(this.el).find('.percentage_inner span').text(Math.round(percent)); },
    };
    const e = $(this); for (i in chart_default) { if (e.data(i) != undefined) { chart_default[i] = e.data(i); } else if (e.data(i.toLowerCase()) != undefined) { chart_default[i] = e.data(i.toLowerCase()); } }$(this).easyPieChart(chart_default);
  }); $('.text-slide').each(function () {
    const e = $(this); const textslide = function () { e.find('span').removeClass('previous'); curr = e.find('.active'); curr.removeClass('active').addClass('previous'); if (curr.next().length != 0) { curr.next().addClass('active'); } else { e.find('span').eq(0).addClass('active'); }e.animate({ width: e.find('.active').width() + 1 }, 400); };
    speed = e.data('speed') ? e.data('speed') : 3000; setInterval(textslide, speed);
  }); if (typeof ($(document).pagepiling) === 'function') {
    $(document).ready(() => {
      if ($('#pagepiling').length != 0) { if ($('body').hasClass('dnnEditState')) { $('#pagepiling .section').css({ position: 'relative', height: $(window).height() }); return false; }$('body,html').css('overflow', 'hidden'); } const deleteLog = false; if ($('#pagepiling').length == 0) return false; let el = $('#pagepiling'),
        e = el.children('.section'),
        start = e.eq(0).data('tooltips') ? e.eq(0).data('tooltips') : 'page 1',
        d = `${start} `; for (i = 1; i < e.length; i++) {
        const s = e.eq(i).data('tooltips') ? e.eq(i).data('tooltips') : `page ${  i + 1}`;
        d += `,${  s}`;
      } const data = d.split(','); let ontouchstart = $(window).width() < 992; let curr = 0,
        off = true; el.pagepiling({
        navigation: {
          textColor: '#f2f2f2', bulletsColor: '#ccc', position: el.data('navposition') ? el.data('navposition') : 'right', tooltips: data,
        },
        scrollingSpeed: el.data('Speed') ? parseInt(el.data('Speed')) : 700,
        easing: el.data('easing') ? el.data('easing') : 'swing',
        direction: el.data('direction') ? el.data('direction') : 'vertical',
        onLeave(index, nextIndex, direction) {
 e.eq(nextIndex - 1).removeClass('animated'); e.eq(nextIndex - 1).find('.animation').removeClass('animated'); setTimeout(() => {e.eq(index-1).find(".animation.number").html(0)}, 600);
          e.eq(index).find('.animation.number').html(0); curr = nextIndex; off = false; 
},
        afterLoad(anchorLink, index) {
 e.eq(index - 1).addClass('animated'); e.eq(index - 1).find('.animation').addClass('animated'); e.eq(index - 1).find('.animation.number').each(function () { $(this).dynamicnumbers($(this).attr('data-number'), 1500, 50); });
          off = true; 
},
      });
      if ($(window).scrollTop() > 0) { $('body,html').css('overflow', 'visible'); }$(window).stop().scrollTop(0); e.css('height', $(window).height()); el.css('height', $(window).height()); e.find('.section-scrollbar').css('height', $(window).height()); e.find('.section-scrollbar').each(function (index, element) {
        const x = $(this); let bottom = true; e.eq(e.length - 1).on('mousewheel', (event) => { if (event.deltaY < 0 && bottom) { el.stop().animate({ marginTop: -$('footer.footer-box').height() }, 500); bottom = false; $.fn.pagepiling.setAllowScrolling(false); }if (event.deltaY > 0 && !bottom) { el.stop().animate({ marginTop: 0 }, 500, () => {if(!ontouchstart){$.fn.pagepiling.setAllowScrolling(true);}e.find(".section-scrollbar").mCustomScrollbar("update");}); bottom = true; } }); $('footer.footer-box').on('mousewheel', (event) => { if (event.deltaY > 0 && !bottom) { el.stop().animate({ marginTop: 0 }, 500, () => {if(!ontouchstart){$.fn.pagepiling.setAllowScrolling(true);}e.find(".section-scrollbar").mCustomScrollbar("update");}); bottom = true; } }); const mouseevents = { mousedown() { startX = events.clientX; startY = events.clientY; $.fn.pagepiling.setAllowScrolling(false); }, mouseup() { OffsetY = events.clientY - startY; if (OffsetY < 0 && bottom) { el.stop().animate({ marginTop: -el.siblings('footer').height() }, 500); bottom = false; $.fn.pagepiling.setAllowScrolling(false); } if(OffsetY > 0 && !bottom) { el.stop().animate({ marginTop: 0 }, 500, () => {if(!ontouchstart){$.fn.pagepiling.setAllowScrolling(true);}e.find(".section-scrollbar").mCustomScrollbar("update");bottom=true;}); } }, mousemove() {} };
        e.eq(e.length - 1).newMouse(mouseevents); if ($('footer.footer-box').length != 0) { $('footer.footer-box').newMouse(mouseevents); } if (ontouchstart) { $.fn.pagepiling.setAllowScrolling(false); } else { $.fn.pagepiling.setAllowScrolling(true); }x.mCustomScrollbar({ theme: 'dark', callbacks: { onTotalScroll() { if (curr == e.length && off && ontouchstart && el.siblings('footer').length != 0) { el.stop().animate({ marginTop: -el.siblings('footer').height() }, 500, () => {e.find(".section-scrollbar").mCustomScrollbar("disable");}); e.eq(e.length - 1).find('.section-scrollbar').mCustomScrollbar('scrollTo', '+=1', { scrollInertia: 100 }); bottom = false; } } } });
      }); e.find('.section-scrollbar').mCustomScrollbar('scrollTo', 1);
      $(window).resize(() => { e.css('height', $(window).height()); el.css('height', $(window).height()); e.find('.section-scrollbar').css('height', $(window).height()); e.find('.section-scrollbar').mCustomScrollbar('update'); if ($(window).width() < 992) { ontouchstart = true; $.fn.pagepiling.setAllowScrolling(false); } else{ ontouchstart = false; $.fn.pagepiling.setAllowScrolling(true); } });
      el.addClass('active');
    });
  }$('.fixed_footer').each(function () {
    const e = $(this); e.wrap('<div class="fixed_footer_clone"><div class="fixed_footer_bottom"></div></div>'); let wh = $(window).height(),
      parent = e.parent().parent(),
      parent2 = e.parent(); parent.height(e.innerHeight()); $(window).resize(() => { parent.height(e.innerHeight()); e.css('max-height', wh = $(window).height()); wh = $(window).height(); parent2.height($(window).scrollTop() + wh - parent.offset().top); });
    // $(window).load(() => { parent.height(e.innerHeight());
      $(window).on(() => { parent.height(e.innerHeight());
       e.css('max-height', wh = $(window).height()); wh = $(window).height(); parent2.height($(window).scrollTop() + wh - parent.offset().top); });
    e.addClass('active'); e.css('max-height', wh = $(window).height()); parent2.height($(window).scrollTop() + wh - parent.offset().top); $(window).scroll(() => { parent2.height($(window).scrollTop() + wh - parent.offset().top); });
  }); $('.dg-bg-roll-left').each(function () {
    const e = $(this); e.css('background-position-x', e.width());
    $(window).resize(() => { e.css('background-position-x', e.width()); });
  }); $('.dg-bg-roll-right').each(function () {
    const e = $(this); e.css('background-position-x', -e.width());
    $(window).resize(() => { e.css('background-position-x', -e.width()); });
  }); $('.dg-bg-roll-top').each(function () {
    const e = $(this); e.css('background-position-y', e.height());
    $(window).resize(() => { e.css('background-position-y', e.height()); });
  }); $('.dg-bg-roll-bottom').each(function () {
    const e = $(this); e.css('background-position-y', -e.height());
    $(window).resize(() => { e.css('background-position-y', -e.height()); });
}); $('.widget-categories .current,.portfolio-categories .current').show(); $('.widget-categories li,.portfolio-categories li').each(function () {
    const e = $(this); if (e.children('ul').length > 0) {
      if (e.hasClass('current')) { e.addClass('active'); }e.append('<span class="arrow"></span> ');
      e.children('.arrow').on('click', () => {
        e.children('ul').stop().slideToggle().siblings()
          .children('ul')
          .slideUp(); e.siblings().children('ul').stop().slideUp(); e.toggleClass('active');
        e.siblings().removeClass('active');
      });
    }
  });
  $('.search-popup-box').each(function () {
    const e = $(this); e.children('.icon').on('click', function () { $(this).toggleClass('active'); e.children('.popup-content').toggleClass('active'); $('html').toggleClass('search-popup-box-active'); });
    e.children('.popup-content').children('.popup-close').on('click', () => { e.children('.popup-content').removeClass('active'); e.children('.icon').removeClass('active'); $('html').removeClass('search-popup-box-active'); });
}); $('.shopping-cart-box').each(function () {
    const e = $(this); e.children('.icon').on('click', function () { $(this).toggleClass('active'); if (!e.children('.shopping-cart-content').hasClass('active')) { e.children('.shopping-cart-content').fadeIn().addClass('active'); } else { e.children('.shopping-cart-content').fadeOut().removeClass('active'); } });
    e.children('.popup-content').children('.popup-close').on('click', () => { e.children('.popup-content').removeClass('active'); });
    e.find('.icon > .badge').text(e.find('.item').length); e.find('.item > .remove').on('click', function () { $(this).parent().fadeOut(function () { $(this).remove(); e.find('.icon > .badge').text(e.find('.item').length); }); });
  }); $('.rightinfo-popup-box').each(function () {
    const e = $(this); e.children('.icon').on('click', function () { $(this).toggleClass('active'); e.children('.rightinfo-content').fadeToggle(); });
    e.find('.rightinfo-close').on('click', () => { e.children('.rightinfo-content').fadeOut(); e.children('.icon').removeClass('active'); });
  }); $('.number-box').each(function () {
    const e = $(this); $(this).children('.number-up').on('click', () => { e.children('.number').val(parseInt(e.children('.number').val()) + 1); });
    $(this).children('.number-down').on('click', () => { if (e.children('.number').val() > 0) { e.children('.number').val(parseInt(e.children('.number').val()) - 1); } });
  }); if ($('.shopping-cart-box').length != 0) { jQuery(document).click((e) => { if (!($(e.target).closest('.shopping-cart-box').length != 0 || jQuery.contains($('.shopping-cart-box')[0], e.target))) { $('.shopping-cart-box > .shopping-cart-content').fadeOut().removeClass('active'); $('.shopping-cart-box > .icon').removeClass('active'); } }); }$('.header-account > .text').on('click', function () { $(this).siblings('.account-box').stop().fadeToggle(); $(this).toggleClass('active'); });
  if ($('.header-account').length != 0) { jQuery(document).click((e) => { if (!($(e.target).closest('.header-account ').length != 0 || jQuery.contains($('.header-account')[0], e.target))) { $('.header-account > .account-box').stop().fadeOut(); $('.header-account > .text').removeClass('active'); } }); }
});
// jQuery(window).load(() => { const e = $('.roll-menu');
jQuery(window).on(() => { const e = $('.roll-menu');
 if (e.length != 0) { top = e.offset().top + e.height(); e.rollmenu({ MTop: e.data('top'), noroll: 992 }); } }); jQuery(document).ready(($) => {
  if ($('#dng-megamenu').length != 0) { $('#dng-megamenu-mobile').html($('#dng-megamenu').html()); } else if ($('header .side-panel-menu').length != 0) { $('#dng-megamenu-mobile').html($('header .side-panel-menu').html()); }$('#dng-megamenu').each(function (index, element) {
    const e = $(this); const dnngomegamenu_default = {
      slide_speed: 200, delay_disappear: 500, popUp: 'vertical', delay_show: 150, direction: 'ltr', megamenuwidth: 'box', WidthBoxClassName: '#megamenuWidthBox',
    };
    for (i in dnngomegamenu_default) { if (e.data(i) != undefined) { dnngomegamenu_default[i] = e.data(i); } else if (e.data(i.toLowerCase()) != undefined) { dnngomegamenu_default[i] = e.data(i.toLowerCase()); } }e.dnngomegamenu(dnngomegamenu_default); jQuery('.gomenu').has('ul').find('.dir > a').attr('aria-haspopup', 'true'); animationShow({ '#ico_search': '.mobile-search' });
  }); $('#ico-menu-mobile').on('click', function () { $(this).toggleClass('active'); $('#dng-megamenu-mobile').stop().slideToggle(400); $('html').toggleClass('overflow-hidden'); });
  $('#dng-megamenu-mobile .dir').each(function () {
    const dropdown = $('<span class="dropdown-submenu"></span>'); dropdown.prependTo($(this)); dropdown.on('click', function () {
      $(this).siblings('.menuslide,.sub-menu').stop().slideToggle(); $(this).toggleClass('active'); if ($(this).hasClass('active')) {
        $(this).parent().siblings('.dir').children('.menuslide,.sub-menu')
          .stop()
          .slideUp(); $(this).parent().siblings('.dir').children('.dropdown-submenu')
          .removeClass('active');
      }
    });
  });
}); jQuery(document).ready(($) => {
  $('.header-split').each(function (index, element) {
    let e = $(this),
      im = e.find('.primary-structure').children('li'),
      l = im.length,
      c = im.siblings('.menu-logo').index(),
      size = im.outerWidth(),
      leftwidth = 0,
      rightwidth = 0,
      i1 = 1,
      i2 = c + 1,
      time = 200; const resize = function () { im.slice(0, c).addClass('left-item').each(function (index, element) { leftwidth += $(this).outerWidth(); }); im.slice(c + 1, l).addClass('right-item').each(function (index, element) { rightwidth += $(this).outerWidth(); }); if (leftwidth > rightwidth) { e.find('.primary-structure').css('paddingRight', leftwidth - rightwidth); } if (leftwidth < rightwidth) { e.find('.primary-structure').css('paddingLeft', rightwidth - leftwidth); } };
    im.siblings('.menu-logo').addClass('logo-at'); resize(); var leftitem = function () { const t = im.eq(c - i1); t.addClass('left-at'); i1++; if (i1 < c + 1) { setTimeout(leftitem, time); } };
    var rightitem = function () { const t = im.eq(i2); t.addClass('right-at'); i2++; if (i2 < l) { setTimeout(rightitem, time); } };
    setTimeout(leftitem, time); setTimeout(rightitem, time); $(window).resize(() => {
      if (size != im.outerWidth()) {
        size = im.outerWidth();
        leftwidth = 0; rightwidth = 0; resize();
      }
    });
  });
});
jQuery(document).ready(($) => {
  $('.headar-left-menu .menu-close').on('click', function () { $(this).toggleClass('active'); $(this).parents('.headar-left-menu').toggleClass('menu-active'); });
  $('.headar-overlay-menu .menu-close,.headar-overlay-menu .menu-open').on('click', function () { $(this).toggleClass('active'); $(this).parents('.headar-overlay-menu').toggleClass('menu-active'); });
  $('.headar-side-header .menu-close').on('click', function () { $(this).toggleClass('active'); $(this).parents('.headar-side-header').toggleClass('menu-active'); });
});
$(document).ready(() => {
  $('.blog-tab').each(function () {
    const e = $(this); $(this).find('.tab-title li').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active'); e.find('.tab-container .tab-main').eq($(this).index()).addClass('active').siblings()
        .removeClass('active');
    });
  });
});
jQuery(document).ready(($) => { $('.blog-grid-list-main .list-video .responsive-video').each(function () { const r = ($('.list-image').eq(0).height() / $('.list-image').eq(0).width()) * 100; $(this).css('padding-bottom', `${r}%`); }); }); jQuery(document).ready(($) => { $('.page-title-arrow').on('click', function () { jQuery('body,html').stop().animate({ scrollTop: $(this).parents('.pagetitleBox').height() + $(this).parents('.pagetitleBox').offset().top }, 800); }); }); jQuery(document).ready(($) => {
  $('.side-panel-btn').each(function (index, element) {
    let e = $(this),
      pane = e.data('panel') ? $(e.data('panel')) : '.side-panel',
      box = e.data('target') ? $(e.data('target')) : 'body',
      c = e.data('class') ? e.data('class') : ''; if (c) { $('html').addClass('side-panel-has'); }pane.appendTo(box); e.on('click', () => { $('html').toggleClass(c); pane.toggleClass('side-panel-active'); e.toggleClass('active'); if (c) { $('html').addClass('overflow-x').delay(500).queue(function () { $('html').removeClass('overflow-x'); $(this).dequeue(); }); } });
    pane.find('.close-panel').on('click', () => { $('html').toggleClass(c); pane.toggleClass('side-panel-active'); e.toggleClass('active'); if (c) { $('html').addClass('overflow-x').delay(500).queue(function () { $('html').removeClass('overflow-x'); $(this).dequeue(); }); } });
  });
}); jQuery(document).ready(($) => {
  if ($('#datetimepicker12').length > 0) { $('#datetimepicker12').datetimepicker({ inline: true, sideBySide: true, format: 'DD/MM/YYYY' }); } const $flickr_widget = $('.widget-flickr'); if ($flickr_widget.length > 0) {
    $flickr_widget.each(function () {
      let $elem = $(this),
        $flickrId = $elem.attr('data-flickr-id'),
        $flickrImages = $elem.attr('data-flickr-images'); console.log($flickrId);
      console.log($flickrImages);
      $flickr_widget.jflickrfeed({ limit: $flickrImages, qstrings: { id: $flickrId }, itemTemplate: '<ul>' + '<li>' + '<a href="{{image}}" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" /></a><span class="bg bg-accent"></span>' + '</li>' + '</ul>' }, () => { $elem.magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled: true } }); });
    });
  }
}); 
// jQuery(window).load(() => { $('.page-loaders').fadeOut(); });
jQuery(window).on(() => { $('.page-loaders').fadeOut(); });
setTimeout(() => { $('.page-loaders').fadeOut(); }, 6000); jQuery(document).ready(($) => { function modalshow() { $('.modal[data-show="true"]').each(function () { if ((typeof $.cookie === 'function') && $(this).data('once')) { if ($(this).data('once') && !$.cookie($(this).attr('id'))) { $.cookie($(this).attr('id'), true); $(this).modal({ show: true }); } } else { $(this).modal({ show: true });
//  } }); } if ($('.page-loaders').length) { jQuery(window).load(() => { modalshow();
 } }); } if ($('.page-loaders').length) { jQuery(window).on(() => { modalshow();
}); } else { modalshow(); } });
jQuery(document).ready(($) => {
  $('.side-panel-menu .dir').each(function () {
    const dropdown = $('<span class="dropdown-submenu"></span>'); dropdown.prependTo($(this)); dropdown.on('click', function () {
      $(this).siblings('.menuslide,.sub-menu').stop().slideToggle(); $(this).toggleClass('active'); if ($(this).hasClass('active')) {
        $(this).parent().siblings('.dir').children('.menuslide,.sub-menu')
          .stop()
          .slideUp(); $(this).parent().siblings('.dir').children('.dropdown-submenu')
          .removeClass('active');
      }
    });
  });
});
jQuery(document).ready(($) => { const home14_banner_h = parseInt($('.home14-con').height() / 2); $('.home14-con').css('margin-top', -home14_banner_h); $(window).resize(() => { const home14_banner_h = parseInt($('.home14-con').height() / 2); $('.home14-con').css('margin-top', -home14_banner_h); }); });
jQuery('#to-top').on('click', () => { jQuery('body,html').stop().animate({ scrollTop: 0 }, 800); }); const backtop = function () { Math.max.call(window.scrollTop, document.body.scrollTop, document.documentElement.scrollTop) > 245 ? jQuery('#to-top').fadeIn(300) : jQuery('#to-top').fadeOut(300); };
// $(window).load(() => { backtop(); });
$(window).on(() => { backtop(); });
$(window).scroll(() => { backtop(); });

