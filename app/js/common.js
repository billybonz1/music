$(document).ready(function() {
    
    $(".auth_buttons").click(function(){
        $(this).next().slideToggle();
    });
     $(".top_menu_button").click(function(){
        $(".nav li").slideToggle();
    });


	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	//$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 5,
        autoHeight : true,
		responsiveClass:true,
		responsive:{
			0:{
				items:2,

			},
			600:{
				items:4,

			},
			1000:{
				items:5,

			}
		}
	});
	$(".next_button,.prev_button").on("click", function (e) {
		if ($(this).hasClass("prev_button")) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
    $(".main-slider").owlCarousel({
        items : 1,
		responsive:{
			0:{
				items:1,

			},
			600:{
				items:1,

			},
			1000:{
				items:1,

			}
		}
    });

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
    $(".top_menu_button").on("click",function(){
        $(this).toggleClass('active');
        $(this).find("i").toggleClass('fa-bars fa-times');
        $(".top_menu ul").toggleClass("active");
    });
});