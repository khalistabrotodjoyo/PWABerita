// Javascript String constants for translation
THEMEREX_MESSAGE_BOOKMARK_ADD   = "Add the bookmark";
THEMEREX_MESSAGE_BOOKMARK_ADDED = "Current page has been successfully added to the bookmarks. You can see it in the right panel on the tab \'Bookmarks\'";
THEMEREX_MESSAGE_BOOKMARK_TITLE = "Enter bookmark title";
THEMEREX_MESSAGE_BOOKMARK_EXISTS= "Current page already exists in the bookmarks list";
THEMEREX_MESSAGE_SEARCH_ERROR = "Error occurs in AJAX search! Please, type your query and press search icon for the traditional search way.";
THEMEREX_MESSAGE_EMAIL_CONFIRM= "On the e-mail address <b>%s</b> we sent a confirmation email.<br>Please, open it and click on the link.";
THEMEREX_MESSAGE_EMAIL_ADDED  = "Your address <b>%s</b> has been successfully added to the subscription list";
THEMEREX_REVIEWS_VOTE		  = "Thanks for your vote! New average rating is:";
THEMEREX_REVIEWS_ERROR		  = "Error saving your vote! Please, try again later.";
THEMEREX_MAGNIFIC_LOADING     = "Loading image #%curr% ...";
THEMEREX_MAGNIFIC_ERROR       = "<a href=\"%url%\">The image #%curr%</a> could not be loaded.";
THEMEREX_MESSAGE_ERROR_LIKE   = "Error saving your like! Please, try again later.";
THEMEREX_GLOBAL_ERROR_TEXT	  = "Global error text";
THEMEREX_NAME_EMPTY			  = "The name can\'t be empty";
THEMEREX_NAME_LONG 			  = "Too long name";
THEMEREX_EMAIL_EMPTY 		  = "Too short (or empty) email address";
THEMEREX_EMAIL_LONG			  = "Too long email address";
THEMEREX_EMAIL_NOT_VALID 	  = "Invalid email address";
THEMEREX_SUBJECT_EMPTY		  = "The subject can\'t be empty";
THEMEREX_SUBJECT_LONG 		  = "Too long subject";
THEMEREX_MESSAGE_EMPTY 		  = "The message text can\'t be empty";
THEMEREX_MESSAGE_LONG 		  = "Too long message text";
THEMEREX_SEND_COMPLETE 		  = "Send message complete!";
THEMEREX_SEND_ORDER_COMPLETE  = "Thank you! We\'ll be in touch.";
THEMEREX_SEND_ERROR 		  = "Transmit failed!";
THEMEREX_LOGIN_EMPTY		  = "The Login field can\'t be empty";
THEMEREX_LOGIN_LONG			  = "Too long login field";
THEMEREX_PASSWORD_EMPTY		  = "The password can\'t be empty and shorter then 5 characters";
THEMEREX_PASSWORD_LONG		  = "Too long password";
THEMEREX_PASSWORD_NOT_EQUAL   = "The passwords in both fields are not equal";
THEMEREX_REGISTRATION_SUCCESS = "Registration success! Please log in!";
THEMEREX_REGISTRATION_FAILED  = "Registration failed!";
THEMEREX_REGISTRATION_AUTHOR  = "Your account is waiting for the site admin moderation!";
THEMEREX_GEOCODE_ERROR 		  = "Geocode was not successful for the following reason:";
THEMEREX_GOOGLE_MAP_NOT_AVAIL = "Google map API not available!";


// AJAX parameters
var THEMEREX_ajax_url = "#";
var THEMEREX_ajax_nonce = "14aae6882d";

// Site base url
var THEMEREX_site_url = "#";

// Theme base font
var THEMEREX_theme_font = "";

// Css Animation
var THEMEREX_css_animation = true;

// Theme skin
var THEMEREX_theme_skin = "general";
var THEMEREX_theme_skin_bg = "#ffffff";

// Slider height
var THEMEREX_slider_height = 100;

// System message
var THEMEREX_systemMessage = {message:"", status: "", header: ""};

// User logged in
var THEMEREX_userLoggedIn = false;

// Show table of content for the current page
if (jQuery("#toc_home").length > 0) {var THEMEREX_menu_toc = 'fixed';}
else {var THEMEREX_menu_toc = 'no';}

var THEMEREX_menu_toc_home = THEMEREX_menu_toc!='no' && false;
var THEMEREX_menu_toc_top = THEMEREX_menu_toc!='no' && false;

// Fix main menu
var THEMEREX_menuFixed = true;

// Use responsive version for main menu
var THEMEREX_menuResponsive = 1135;
var THEMEREX_responsive_menu_click = true;

// Right panel demo timer
var THEMEREX_demo_time = 3000;

// Video and Audio tag wrapper
var THEMEREX_useMediaElement = true;

// Use AJAX search
var THEMEREX_useAJAXSearch = true;
var THEMEREX_AJAXSearch_min_length = 3;
var THEMEREX_AJAXSearch_delay = 200;

// Popup windows engine
var THEMEREX_popupEngine  = 'magnific';
var THEMEREX_popupGallery = true;

// E-mail mask
THEMEREX_EMAIL_MASK = '^([a-zA-Z0-9_\\-]+\\.)*[a-zA-Z0-9_\\-]+@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*\\.[a-z]{2,6}$';

// Messages max length
var THEMEREX_msg_maxlength_contacts = 1000;
var THEMEREX_msg_maxlength_comments = 1000;

// Remember visitors settings
var THEMEREX_remember_visitors_settings = false;


jQuery(window).load(function() {
    "use strict";
    preloader();
});

jQuery(document).ready(function() {
    "use strict";
	main_slider_init();
	add_user_pupup();
	simform_init();
	price_filter();
	hover_mobile();
});


/*Main slider*/
function main_slider_init() {
    "use strict";
    if (jQuery("#mainslider_1").length > 0) {

		var setREVStartSize = function() {
			var	tpopt = new Object();
				tpopt.startwidth = 1280;
				tpopt.startheight = 570;
				tpopt.container = jQuery('#rev_slider_2_1');
				tpopt.fullScreen = "off";
				tpopt.forceFullWidth="off";

			tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
		};

		/* CALL PLACEHOLDER */
		setREVStartSize();


		var tpj=jQuery;
		tpj.noConflict();
		var revapi2;

		tpj(document).ready(function() {

		if(tpj('#rev_slider_2_1').revolution == undefined){
			revslider_showDoubleJqueryError('#rev_slider_2_1');
		}else{
		   	revapi2 = tpj('#rev_slider_2_1').show().revolution({	
				dottedOverlay:"none",
				delay:8000,
				startwidth:1280,
				startheight:570,
				hideThumbs:200,
				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:3,
				simplifyAll:"off",
				navigationType:"bullet",
				navigationArrows:"solo",
				navigationStyle:"round",
				touchenabled:"on",
				onHoverStop:"on",
				nextSlideOnWindowFocus:"off",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				drag_block_vertical: false,
				keyboardNavigation:"off",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,
				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,
				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,
				shadow:2,
				fullWidth:"on",
				fullScreen:"off",
				spinner:"spinner0",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				forceFullWidth:"off",
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,
				hideSliderAtLimit:0,
				hideCaptionAtLimit:481,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0					
				});
			}
		});
	}

	if (jQuery("#mainslider_2").length > 0) {
		var setREVStartSize = function() {
			var	tpopt = new Object();
				tpopt.startwidth = 1280;
				tpopt.startheight = 570;
				tpopt.container = jQuery('#rev_slider_6_1');
				tpopt.fullScreen = "off";
				tpopt.forceFullWidth="off";

			tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
		};

		/* CALL PLACEHOLDER */
		setREVStartSize();


		var tpj=jQuery;
		tpj.noConflict();
		var revapi6;

		tpj(document).ready(function() {

		if(tpj('#rev_slider_6_1').revolution == undefined){
			revslider_showDoubleJqueryError('#rev_slider_6_1');
		}else{
		   revapi6 = tpj('#rev_slider_6_1').show().revolution(
			{	
				dottedOverlay:"none",
				delay:8000,
				startwidth:1280,
				startheight:570,
				hideThumbs:200,
				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:3,
				simplifyAll:"off",
				navigationType:"bullet",
				navigationArrows:"solo",
				navigationStyle:"round",
				touchenabled:"on",
				onHoverStop:"on",
				nextSlideOnWindowFocus:"off",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				drag_block_vertical: false,
				keyboardNavigation:"off",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,
				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,
				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,
				shadow:2,
				fullWidth:"on",
				fullScreen:"off",
				spinner:"spinner0",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				forceFullWidth:"off",
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0					
				});
			}
		});
	}

}

function simform_init() {
    "use strict";
    if (jQuery("#sc_contact_form_1").length > 0) {		
		var theForm = document.getElementById( "sc_contact_form_1" );
		var orderForm = jQuery("#sc_contact_form_1");
		new stepsForm( theForm, {
			onSubmit : function( form ) {
				// hide form
				var action = orderForm.attr("action");
				orderSubmitForm(theForm, orderForm, action!=undefined ? action : THEMEREX_ajax_url, THEMEREX_ajax_nonce);
			}
		});
	}
}


/* Add user-popUp */

function add_user_pupup() {
    "use strict";
    if (jQuery("#usermenu").length > 0) {

		var userpopup ='<div id="user-popUp" class="user-popUp mfp-with-anim mfp-hide">';
		userpopup  +=	'<div class="sc_tabs">';
		userpopup  +=		'<ul class="loginHeadTab">';
		userpopup  +=			'<li>';
		userpopup  +=				'<a href="#loginForm" class="loginFormTab icon">Log In</a>';
		userpopup  +=			'</li>';
		userpopup  +=			'<li>';
		userpopup  +=				'<a href="#registerForm" class="registerFormTab icon">Create an Account</a>';
		userpopup  +=			'</li>';
		userpopup  +=		'</ul>';
		userpopup  +=		'<div id="loginForm" class="formItems loginFormBody">';
		userpopup  +=			'<div class="itemformLeft">';
		userpopup  +=				'<form action="#" method="post" name="login_form" class="formValid">';
		userpopup  +=					'<input type="hidden" name="redirect_to" value="#"/>';
		userpopup  +=					'<ul class="formList">';
		userpopup  +=						'<li class="icon formLogin">';
		userpopup  +=							'<input type="text" id="login" name="log" value="" placeholder="Login">';
		userpopup  +=						'</li>';
		userpopup  +=						'<li class="icon formPass">';
		userpopup  +=							'<input type="password" id="password" name="pwd" value="" placeholder="Password">';
		userpopup  +=						'</li>';
		userpopup  +=						'<li class="remember">';
		userpopup  +=							'<a href="http://beautyou.axiomthemes.com/my-account/lost-password/" class="forgotPwd">Forgot password?</a>';
		userpopup  +=							'<input type="checkbox" value="forever" id="rememberme" name="rememberme">';
		userpopup  +=							'<label for="rememberme">Remember me</label>';
		userpopup  +=						'</li>';
		userpopup  +=						'<li>';
		userpopup  +=							'<a href="#" class="sendEnter enter">Login</a>';
		userpopup  +=						'</li>';
		userpopup  +=					'</ul>';
		userpopup  +=				'</form>';
		userpopup  +=			'</div>';
		userpopup  +=			'<div class="itemformRight">';
		userpopup  +=				'<ul class="formList">';
		userpopup  +=					'<li>You can login using your social profile</li>';
		userpopup  +=					'<li class="loginSoc">';
		userpopup  +=						'<a href="#" class="iconLogin fb"> </a>';
		userpopup  +=						'<a href="#" class="iconLogin tw"> </a>';
		userpopup  +=						'<a href="#" class="iconLogin gg"> </a>';
		userpopup  +=					'</li>';
		userpopup  +=					'<li>';
		userpopup  +=						'<a href="#" class="loginProblem">Problem with login?</a>';
		userpopup  +=					'</li>';
		userpopup  +=				'</ul>';
		userpopup  +=			'</div>';
		userpopup  +=			'<div class="result messageBlock"> </div>';
		userpopup  +=		'</div>';
		userpopup  +=		'<div id="registerForm" class="formItems registerFormBody">';
		userpopup  +=			'<form name="register_form" method="post" class="formValid">';
		userpopup  +=				'<input type="hidden" name="redirect_to" value="#"/>';
		userpopup  +=				'<div class="itemformLeft">';
		userpopup  +=					'<ul class="formList">';
		userpopup  +=						'<li class="icon formUser">';
		userpopup  +=							'<input type="text" id="registration_username" name="registration_username" value="" placeholder="User name (login)">';
		userpopup  +=						'</li>';
		userpopup  +=						'<li class="icon formLogin">';
		userpopup  +=							'<input type="text" id="registration_email" name="registration_email" value="" placeholder="E-mail">';
		userpopup  +=						'</li>';
		userpopup  +=						'<li class="i-agree">';
		userpopup  +=							'<input type="checkbox" value="forever" id="i-agree" name="i-agree">';
		userpopup  +=							'<label for="i-agree">I agree with</label>';
		userpopup  +=							'<a href="#">Terms &amp; Conditions</a>';
		userpopup  +=						'</li>';
		userpopup  +=						'<li>';
		userpopup  +=							'<a href="" class="sendEnter enter">Sign Up</a>';
		userpopup  +=						'</li>';
		userpopup  +=					'</ul>';
		userpopup  +=				'</div>';
		userpopup  +=				'<div class="itemformRight">';
		userpopup  +=					'<ul class="formList">';
		userpopup  +=						'<li class="icon formPass">';
		userpopup  +=							'<input type="password" id="registration_pwd" name="registration_pwd" value="" placeholder="Password">';
		userpopup  +=						'</li>';
		userpopup  +=						'<li class="icon formPass">';
		userpopup  +=							'<input type="password" id="registration_pwd2" name="registration_pwd2" value="" placeholder="Confirm Password">';
		userpopup  +=						'</li>';
		userpopup  +=					'</ul>';
		userpopup  +=				'</div>';
		userpopup  +=			'</form>';
		userpopup  +=			'<div class="result messageBlock"></div>';
		userpopup  +=		'</div>';
		userpopup  +=	'</div>';
		userpopup  +='</div>';

		jQuery('body').append(userpopup);
	}
}

// Price range slider
function price_filter() {
    if (jQuery("#slider-range").length > 0) {
        jQuery("#slider-range").slider({
            range: true,
            min: 0,
            max: 250,
            values: [0, 250],
            slide: function(event, ui) {
                jQuery("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        jQuery("#amount").val("$" + jQuery("#slider-range").slider("values", 0) +
            " - $" + jQuery("#slider-range").slider("values", 1));
    }
}

// Hover effects on mobile
function hover_mobile() {
    if (jQuery("#mobile_tap_hover").length > 0) {
        $('a.taphover').on("touchstart", function(e) {
            var link = $(this); //preselect the link
            if (link.hasClass('hover')) {
                return true;
            } else {
                link.addClass("hover");
                //$(this).parent().css({'z-index': 1});
                $('a.taphover').not(this).removeClass("hover");
                e.preventDefault();
                return false; //extra, and to make sure the function has consistent return points
            }
        });

        $('.imgNav.taphover').on("touchstart", function(e) {
            var link = $(this); //preselect the link
            if (link.hasClass('hover')) {
                $('.itemNext.taphover').not(this).removeClass("hover");
                $('.itemPrev.taphover').not(this).removeClass("hover");
                return true;
            } else {
                link.addClass("hover");
                $('.imgNav.taphover').not(this).removeClass("hover");
                e.preventDefault();
                return false; //extra, and to make sure the function has consistent return points
            }
        });
    }
}

// Preloader 
function preloader() {

    jQuery("#preloader_image").fadeOut();
    jQuery("#preloader").delay(200).fadeOut("slow").delay(200, function() {
        jQuery(this).remove();
    });
}