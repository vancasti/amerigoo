if (typeof ORGANICS_GLOBALS == 'undefined') var ORGANICS_GLOBALS = {};
if (ORGANICS_GLOBALS['theme_font']=='') ORGANICS_GLOBALS['theme_font'] = 'Cantarell';
ORGANICS_GLOBALS['theme_skin_color'] = '';
ORGANICS_GLOBALS['theme_skin_bg_color'] = '';
ORGANICS_GLOBALS["strings"] = {
	bookmark_add: 		"Add the bookmark",
	bookmark_added:		"Current page has been successfully added to the bookmarks. You can see it in the right panel on the tab &#039;Bookmarks&#039;",
	bookmark_del: 		"Delete this bookmark",
	bookmark_title:		"Enter bookmark title",
	bookmark_exists:		"Current page already exists in the bookmarks list",
	search_error:		"Error occurs in AJAX search! Please, type your query and press search icon for the traditional search way.",
	email_confirm:		"On the e-mail address %s we sent a confirmation email. Please, open it and click on the link.",
	reviews_vote:		"Thanks for your vote! New average rating is:",
	reviews_error:		"Error saving your vote! Please, try again later.",
	error_like:			"Error saving your like! Please, try again later.",
	error_global:		"Global error text",
	name_empty:			"The name can&#039;t be empty",
	name_long:			"Too long name",
	email_empty:			"Too short (or empty) email address",
	email_long:			"Too long email address",
	email_not_valid:		"Invalid email address",
	subject_empty:		"The subject can&#039;t be empty",
	subject_long:		"Too long subject",
	text_empty:			"The message text can&#039;t be empty",
	text_long:			"Too long message text",
	send_complete:		"Send message complete!",
	send_error:			"Transmit failed!",
	login_empty:			"The Login field can&#039;t be empty",
	login_long:			"Too long login field",
	login_success:		"Login success! The page will be reloaded in 3 sec.",
	login_failed:		"Login failed!",
	password_empty:		"The password can&#039;t be empty and shorter then 4 characters",
	password_long:		"Too long password",
	password_not_equal:	"The passwords in both fields are not equal",
	registration_success:"Registration success! Please log in!",
	registration_failed:	"Registration failed!",
	geocode_error:		"Geocode was not successful for the following reason:",
	googlemap_not_avail:	"Google map API not available!",
	editor_save_success:	"Post content saved!",
	editor_save_error:	"Error saving post data!",
	editor_delete_post:	"You really want to delete the current post?",
	editor_delete_post_header:"Delete post",
	editor_delete_success:	"Post deleted!",
	editor_delete_error:		"Error deleting post!",
	editor_caption_cancel:	"Cancel",
	editor_caption_close:	"Close"
};
ORGANICS_GLOBALS['ajax_url']			 = '/';
ORGANICS_GLOBALS['ajax_nonce']		 = '56462cff56';
ORGANICS_GLOBALS['ajax_nonce_editor'] = '57fb6436ee';
ORGANICS_GLOBALS['site_url']			= 'http://organics-html.axiomthemes.com';
ORGANICS_GLOBALS['vc_edit_mode']		= false;
ORGANICS_GLOBALS['theme_font']		= 'Cantarell';
ORGANICS_GLOBALS['theme_skin']			= 'trex2_no_less';
ORGANICS_GLOBALS['theme_skin_color']		= '';
ORGANICS_GLOBALS['theme_skin_bg_color']	= '';
ORGANICS_GLOBALS['slider_height']	= 100;
ORGANICS_GLOBALS['system_message']	= {message: '',status: '',header: ''};
ORGANICS_GLOBALS['user_logged_in']	= false;
ORGANICS_GLOBALS['toc_menu']		= '';
ORGANICS_GLOBALS['toc_menu_home']	= false;
ORGANICS_GLOBALS['toc_menu_top']	= false;
ORGANICS_GLOBALS['menu_fixed']		= false;
ORGANICS_GLOBALS['menu_mobile']	= 1023;
ORGANICS_GLOBALS['menu_slider']     = true;
ORGANICS_GLOBALS['demo_time']		= 0;
ORGANICS_GLOBALS['media_elements_enabled'] = true;
ORGANICS_GLOBALS['ajax_search_enabled'] 	= true;
ORGANICS_GLOBALS['ajax_search_min_length']	= 3;
ORGANICS_GLOBALS['ajax_search_delay']		= 200;
ORGANICS_GLOBALS['css_animation']      = true;
ORGANICS_GLOBALS['menu_animation_in']  = 'fadeIn';
ORGANICS_GLOBALS['menu_animation_out'] = 'fadeOut';
ORGANICS_GLOBALS['popup_engine']	= 'pretty';
ORGANICS_GLOBALS['email_mask']		= '^([a-zA-Z0-9_\-]+\.)*[a-zA-Z0-9_\-]+@[a-z0-9_\-]+(\.[a-z0-9_\-]+)*\.[a-z]{2,6}$';
ORGANICS_GLOBALS['contacts_maxlength']	= 1000;
ORGANICS_GLOBALS['comments_maxlength']	= 1000;
ORGANICS_GLOBALS['remember_visitors_settings']	= false;
ORGANICS_GLOBALS['admin_mode']			= false;
ORGANICS_GLOBALS['isotope_resize_delta']	= 0.3;
ORGANICS_GLOBALS['error_message_box']	= null;
ORGANICS_GLOBALS['viewmore_busy']		= false;
ORGANICS_GLOBALS['video_resize_inited']	= false;
ORGANICS_GLOBALS['top_panel_height']		= 0;

jQuery(document).ready(function() {
    "use strict";
	main_slider_init();
	esg_init();
	reviews_stars();
	pie_skills_legend_color();
	price_filter();
	woo_review_star();
	woo_ship_calc();
});

/*Revolution slider*/
function revslider_showDoubleJqueryError(sliderID) {
    "use strict";
   	var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
	errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
	errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
	errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
	errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
		jQuery(sliderID).show().html(errorMessage);
}

function main_slider_init() {
    if (jQuery("#mainslider_1").length > 0) {
		"use strict";
		var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); 
		var htmlDivCss="";
		if(htmlDiv) {
			htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
		}else{
			var htmlDiv = document.createElement("div");
			htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
			document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
		}
							
		var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); 
		var htmlDivCss=".tp-caption.very_large_text,.very_large_text{color:rgba(255,255,255,1.00);font-size:60px;line-height:70px;font-weight:700;font-style:normal;font-family:Love Ya Like A Sister;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px}";
		if(htmlDiv) {
			htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
		}else{
			var htmlDiv = document.createElement("div");
			htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
			document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
		}
					

		var setREVStartSize=function(){
			try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
				e.c = jQuery('#rev_slider_12_1');
				e.responsiveLevels = [1240,1024,778,480];
				e.gridwidth = [1170,1024,778,680];
				e.gridheight = [612,600,600,600];
						
				e.sliderLayout = "fullwidth";
				if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
				
			}catch(d){console.log("Failure at Presize of Slider:"+d)}
		};
					
		setREVStartSize();
					
		var tpj=jQuery;
		var revapi12;
		if(tpj("#rev_slider_12_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_12_1");
		}else{
			revapi12 = tpj("#rev_slider_12_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"js/vendor/revslider/public/assets/js/",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:900000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
						mouseScrollReverse:"default",
					onHoverStop:"off",
					touch:{
						touchenabled:"on",
						swipe_threshold: 75,
						swipe_min_touches: 50,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					,
					bullets: {
						enable:true,
						hide_onmobile:true,
						hide_under:600,
						style:"hermes",
						hide_onleave:false,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:40,
						space:12,
						tmp:''
					}
				},
				responsiveLevels:[1240,1024,778,480],
				visibilityLevels:[1240,1024,778,480],
				gridwidth:[1170,1024,778,680],
				gridheight:[612,600,600,600],
				lazyType:"none",
				parallax: {
					type:"mouse",
					origo:"slidercenter",
					speed:2000,
					levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
					type:"mouse",
				},
				shadow:0,
				spinner:"off",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
		var htmlDivCss = unescape(".hermes.tp-bullets%20%7B%0A%7D%0A%0A.hermes%20.tp-bullet%20%7B%0A%20%20%20%20overflow%3Ahidden%3B%0A%20%20%20%20border-radius%3A50%25%3B%0A%20%20%20%20width%3A16px%3B%0A%20%20%20%20height%3A16px%3B%0A%20%20%20%20background-color%3A%20rgba%280%2C%200%2C%200%2C%200%29%3B%0A%20%20%20%20box-shadow%3A%20inset%200%200%200%202px%20rgb%28255%2C%20255%2C%20255%29%3B%0A%20%20%20%20-webkit-transition%3A%20background%200.3s%20ease%3B%0A%20%20%20%20transition%3A%20background%200.3s%20ease%3B%0A%20%20%20%20position%3Aabsolute%3B%0A%7D%0A%0A.hermes%20.tp-bullet%3Ahover%20%7B%0A%09%20%20background-color%3A%20rgba%280%2C0%2C0%2C0.21%29%3B%0A%7D%0A.hermes%20.tp-bullet%3Aafter%20%7B%0A%20%20content%3A%20%27%20%27%3B%0A%20%20position%3A%20absolute%3B%0A%20%20bottom%3A%200%3B%0A%20%20height%3A%200%3B%0A%20%20left%3A%200%3B%0A%20%20width%3A%20100%25%3B%0A%20%20background-color%3A%20rgb%28255%2C%20255%2C%20255%29%3B%0A%20%20box-shadow%3A%200%200%201px%20rgb%28255%2C%20255%2C%20255%29%3B%0A%20%20-webkit-transition%3A%20height%200.3s%20ease%3B%0A%20%20transition%3A%20height%200.3s%20ease%3B%0A%7D%0A.hermes%20.tp-bullet.selected%3Aafter%20%7B%0A%20%20height%3A100%25%3B%0A%7D%0A%0A");
		var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
		if(htmlDiv) {
			htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
		}
		else{
			var htmlDiv = document.createElement('div');
			htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
			document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
		}
	}
    if (jQuery("#mainslider_2").length > 0) {
	    "use strict";
		var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); 
		var htmlDivCss="";
		if(htmlDiv) {
			htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
		}else{
			var htmlDiv = document.createElement("div");
			htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
			document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
		}

		var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); 
		var htmlDivCss=".tp-caption.very_large_text,.very_large_text{color:rgba(255,255,255,1.00);font-size:60px;line-height:70px;font-weight:700;font-style:normal;font-family:Love Ya Like A Sister;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px}.tp-caption.Text16_norm,.Text16_norm{color:rgba(255,255,255,1.00);font-size:16px;line-height:24px;font-weight:400;font-style:normal;font-family:Muli;padding:0 0 0 0px;text-decoration:none;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0 0 0 0px}.tp-caption.White_big,.White_big{color:rgba(255,255,255,1.00);font-size:60px;line-height:60px;font-weight:400;font-style:normal;font-family:Cantarell;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:rgba(255,255,255,1.00);border-style:none;border-width:0px;border-radius:0px 0px 0px 0px}";
		if(htmlDiv) {
			htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
		}else{
			var htmlDiv = document.createElement("div");
			htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
			document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
		}
		var setREVStartSize=function(){
			try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
				e.c = jQuery('#rev_slider_13_1');
				e.responsiveLevels = [1240,1024,778,480];
				e.gridwidth = [1170,1024,928,830];
				e.gridheight = [695,600,650,650];
						
				e.sliderLayout = "fullwidth";
				if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
				
			}catch(d){console.log("Failure at Presize of Slider:"+d)}
		};
			
		setREVStartSize();
			
		var tpj=jQuery;
			
		var revapi13;
		if(tpj("#rev_slider_13_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_13_1");
		}else{
			revapi13 = tpj("#rev_slider_13_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"js/vendor/revslider/public/assets/js/",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:900000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
						mouseScrollReverse:"default",
					onHoverStop:"off",
					touch:{
						touchenabled:"on",
						swipe_threshold: 75,
						swipe_min_touches: 50,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					,
					bullets: {
						enable:true,
						hide_onmobile:true,
						hide_under:600,
						style:"hermes",
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile:1200,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:30,
						space:12,
						tmp:''
					}
				},
				responsiveLevels:[1240,1024,778,480],
				visibilityLevels:[1240,1024,778,480],
				gridwidth:[1170,1024,928,830],
				gridheight:[695,600,650,650],
				lazyType:"smart",
				parallax: {
					type:"mouse",
					origo:"slidercenter",
					speed:2000,
					levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
					type:"mouse",
				},
				shadow:0,
				spinner:"off",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
		
		var htmlDivCss = unescape(".hermes.tp-bullets%20%7B%0A%7D%0A%0A.hermes%20.tp-bullet%20%7B%0A%20%20%20%20overflow%3Ahidden%3B%0A%20%20%20%20border-radius%3A50%25%3B%0A%20%20%20%20width%3A16px%3B%0A%20%20%20%20height%3A16px%3B%0A%20%20%20%20background-color%3A%20rgba%280%2C%200%2C%200%2C%200%29%3B%0A%20%20%20%20box-shadow%3A%20inset%200%200%200%202px%20rgb%28255%2C%20255%2C%20255%29%3B%0A%20%20%20%20-webkit-transition%3A%20background%200.3s%20ease%3B%0A%20%20%20%20transition%3A%20background%200.3s%20ease%3B%0A%20%20%20%20position%3Aabsolute%3B%0A%7D%0A%0A.hermes%20.tp-bullet%3Ahover%20%7B%0A%09%20%20background-color%3A%20rgba%280%2C0%2C0%2C0.21%29%3B%0A%7D%0A.hermes%20.tp-bullet%3Aafter%20%7B%0A%20%20content%3A%20%27%20%27%3B%0A%20%20position%3A%20absolute%3B%0A%20%20bottom%3A%200%3B%0A%20%20height%3A%200%3B%0A%20%20left%3A%200%3B%0A%20%20width%3A%20100%25%3B%0A%20%20background-color%3A%20rgb%28255%2C%20255%2C%20255%29%3B%0A%20%20box-shadow%3A%200%200%201px%20rgb%28255%2C%20255%2C%20255%29%3B%0A%20%20-webkit-transition%3A%20height%200.3s%20ease%3B%0A%20%20transition%3A%20height%200.3s%20ease%3B%0A%7D%0A.hermes%20.tp-bullet.selected%3Aafter%20%7B%0A%20%20height%3A100%25%3B%0A%7D%0A%0A");
		var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
		if(htmlDiv) {
			htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
		}
		else{
			var htmlDiv = document.createElement('div');
			htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
			document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
		}
    }
    if (jQuery("#mainslider_3").length > 0) {
	    "use strict";
		var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); 
		var htmlDivCss="";
		if(htmlDiv) {
			htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
		}else{
			var htmlDiv = document.createElement("div");
			htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
			document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
		}

		var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); 
		var htmlDivCss=".tp-caption.Text16_norm,.Text16_norm{color:rgba(255,255,255,1.00);font-size:16px;line-height:24px;font-weight:400;font-style:normal;font-family:Muli;padding:0 0 0 0px;text-decoration:none;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0 0 0 0px}.tp-caption.White_big,.White_big{color:rgba(255,255,255,1.00);font-size:60px;line-height:60px;font-weight:400;font-style:normal;font-family:Cantarell;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:rgba(255,255,255,1.00);border-style:none;border-width:0px;border-radius:0px 0px 0px 0px}.tp-caption.very_large_text_80px,.very_large_text_80px{color:rgba(128,181,0,1.00);font-size:80px;line-height:80px;font-weight:700;font-style:normal;font-family:Raleway;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px}.tp-caption.Shotrcode-btn-Large,.Shotrcode-btn-Large{color:rgba(0,0,0,1.00);font-size:px;line-height:px;font-weight:400;font-style:normal;font-family:;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px}";
		if(htmlDiv) {
			htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
		}else{
			var htmlDiv = document.createElement("div");
			htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
			document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
		}
			
		var setREVStartSize=function(){
			try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
				e.c = jQuery('#rev_slider_14_1');
				e.responsiveLevels = [1240,1024,778,480];
				e.gridwidth = [1170,960,960,680];
				e.gridheight = [901,768,850,768];
						
				e.sliderLayout = "fullscreen";
				e.fullScreenAutoWidth='off';
				e.fullScreenAlignForce='off';
				e.fullScreenOffsetContainer= '';
				e.fullScreenOffset='';
				if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
				
			}catch(d){console.log("Failure at Presize of Slider:"+d)}
		};
			
		setREVStartSize();
			
		var tpj=jQuery;
		var revapi14;
		if(tpj("#rev_slider_14_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_14_1");
		}else{
			revapi14 = tpj("#rev_slider_14_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"js/vendor/revslider/public/assets/js/",
				sliderLayout:"fullscreen",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
						mouseScrollReverse:"default",
					onHoverStop:"off",
					touch:{
						touchenabled:"on",
						swipe_threshold: 75,
						swipe_min_touches: 50,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					,
					bullets: {
						enable:true,
						hide_onmobile:true,
						hide_under:600,
						style:"hermes",
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile:1200,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:30,
						space:12,
						tmp:''
					}
				},
				responsiveLevels:[1240,1024,778,480],
				visibilityLevels:[1240,1024,778,480],
				gridwidth:[1170,960,960,680],
				gridheight:[901,768,850,768],
				lazyType:"none",
				parallax: {
					type:"mouse",
					origo:"slidercenter",
					speed:2000,
					levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
					type:"mouse",
				},
				shadow:0,
				spinner:"off",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				fullScreenAutoWidth:"off",
				fullScreenAlignForce:"off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
		
		var htmlDivCss = unescape(".hermes.tp-bullets%20%7B%0A%7D%0A%0A.hermes%20.tp-bullet%20%7B%0A%20%20%20%20overflow%3Ahidden%3B%0A%20%20%20%20border-radius%3A50%25%3B%0A%20%20%20%20width%3A16px%3B%0A%20%20%20%20height%3A16px%3B%0A%20%20%20%20background-color%3A%20rgba%280%2C%200%2C%200%2C%200%29%3B%0A%20%20%20%20box-shadow%3A%20inset%200%200%200%202px%20rgb%28255%2C%20255%2C%20255%29%3B%0A%20%20%20%20-webkit-transition%3A%20background%200.3s%20ease%3B%0A%20%20%20%20transition%3A%20background%200.3s%20ease%3B%0A%20%20%20%20position%3Aabsolute%3B%0A%7D%0A%0A.hermes%20.tp-bullet%3Ahover%20%7B%0A%09%20%20background-color%3A%20rgba%280%2C0%2C0%2C0.21%29%3B%0A%7D%0A.hermes%20.tp-bullet%3Aafter%20%7B%0A%20%20content%3A%20%27%20%27%3B%0A%20%20position%3A%20absolute%3B%0A%20%20bottom%3A%200%3B%0A%20%20height%3A%200%3B%0A%20%20left%3A%200%3B%0A%20%20width%3A%20100%25%3B%0A%20%20background-color%3A%20rgb%28255%2C%20255%2C%20255%29%3B%0A%20%20box-shadow%3A%200%200%201px%20rgb%28255%2C%20255%2C%20255%29%3B%0A%20%20-webkit-transition%3A%20height%200.3s%20ease%3B%0A%20%20transition%3A%20height%200.3s%20ease%3B%0A%7D%0A.hermes%20.tp-bullet.selected%3Aafter%20%7B%0A%20%20height%3A100%25%3B%0A%7D%0A%0A");
		var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
		if(htmlDiv) {
			htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
		}
		else{
			var htmlDiv = document.createElement('div');
			htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
			document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
		}
    }
    if (jQuery("#mainslider_4").length > 0) {
	    "use strict";
		var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); 
		var htmlDivCss=".tp-caption.very_large_text,.very_large_text{color:rgba(255,255,255,1.00);font-size:60px;line-height:70px;font-weight:700;font-style:normal;font-family:Love Ya Like A Sister;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px}.tp-caption.slide_text,.slide_text{font-size:18px;line-height:27px;color:rgb(255,255,255);text-decoration:none;background-color:transparent;border-width:0px;border-color:rgb(255,255,255);border-style:none}.tp-caption.Text16_norm,.Text16_norm{color:rgba(255,255,255,1.00);font-size:16px;line-height:24px;font-weight:400;font-style:normal;font-family:Muli;padding:0 0 0 0px;text-decoration:none;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0 0 0 0px}.tp-caption.Shotrcode-btn-Large,.Shotrcode-btn-Large{color:rgba(0,0,0,1.00);font-size:px;line-height:px;font-weight:400;font-style:normal;font-family:;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px}";
        if(htmlDiv) {
          	htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
        }else{
          	var htmlDiv = document.createElement("div");
          	htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
          	document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
        }

      	var setREVStartSize=function(){
	        try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
	          e.c = jQuery('#rev_slider_15_1');
	          e.responsiveLevels = [1240,1024,778,480];
	          e.gridwidth = [870,1024,778,480];
	          e.gridheight = [390,400,400,400];
	              
	          e.sliderLayout = "auto";
	          e.minHeight = "380";
	          if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
	          
	        }catch(d){console.log("Failure at Presize of Slider:"+d)}
	    };
      
      	setREVStartSize();
      
        var tpj=jQuery;
      	var revapi15;
        if(tpj("#rev_slider_15_1").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_15_1");
        }else{
          	revapi15 = tpj("#rev_slider_15_1").show().revolution({
	            sliderType:"standard",
	            jsFileLocation:"js/vendor/revslider/public/assets/js/",
	            sliderLayout:"auto",
	            dottedOverlay:"none",
	            delay:9000,
	            navigation: {
	              keyboardNavigation:"on",
	              keyboard_direction: "horizontal",
	              mouseScrollNavigation:"off",
	              mouseScrollReverse:"default",
	              onHoverStop:"off",
	              touch:{
	                touchenabled:"on",
	                swipe_threshold: 75,
	                swipe_min_touches: 50,
	                swipe_direction: "horizontal",
	                drag_block_vertical: false
	              }
	            },
	            responsiveLevels:[1240,1024,778,480],
	            visibilityLevels:[1240,1024,778,480],
	            gridwidth:[870,1024,778,480],
	            gridheight:[390,400,400,400],
	            lazyType:"smart",
	            minHeight:"380",
	            parallax: {
	              type:"mouse",
	              origo:"slidercenter",
	              speed:2000,
	              levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
	              type:"mouse",
	            },
	            shadow:0,
	            spinner:"off",
	            stopLoop:"off",
	            stopAfterLoops:-1,
	            stopAtSlide:-1,
	            shuffle:"off",
	            autoHeight:"off",
	            hideThumbsOnMobile:"off",
	            hideSliderAtLimit:0,
	            hideCaptionAtLimit:0,
	            hideAllCaptionAtLilmit:0,
	            debugMode:false,
	            fallbacks: {
	              simplifyAll:"off",
	              nextSlideOnWindowFocus:"off",
	              disableFocusListener:false,
	            }
          	});
        }
    }

}
				  
/* Essential Grid */
function esg_init() {
    if (jQuery("#esg-grid-18-1").length > 0) {
		"use strict";
		function eggbfc(winw,resultoption) {
			var lasttop = winw,
			lastbottom = 0,
			smallest =9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [
								{ width:1400,amount:5},
								{ width:1170,amount:4},
								{ width:1024,amount:4},
								{ width:960,amount:3},
								{ width:778,amount:3},
								{ width:640,amount:3},
								{ width:480,amount:2}
								];
			if (responsiveEntries!=undefined && responsiveEntries.length>0)
				jQuery.each(responsiveEntries, function(index,obj) {
					var curw = obj.width != undefined ? obj.width : 0,
						cura = obj.amount != undefined ? obj.amount : 0;
					if (smallest>curw) {
						smallest = curw;
						samount = cura;
						resultidb = index;
					}
					if (largest<curw) {
						largest = curw;
						lamount = cura;
					}
					if (curw>lastbottom && curw<=lasttop) {
						lastbottom = curw;
						lastamount = cura;
						resultid = index;
					}
			})
			if (smallest>winw) {
				lastamount = samount;
				resultid = resultidb;
			}
			var obj = new Object;
			obj.index = resultid;
			obj.column = lastamount;
			if (resultoption=="id")
				return obj;
			else
				return lastamount;
		}

		if ("masonry"=="even") {
			var coh=0,
				container = jQuery("#esg-grid-18-1");
			var	cwidth = container.width(),
				ar = "4:5",
				gbfc = eggbfc(jQuery(window).width(),"id"),
			row = 1;
			ar = ar.split(":");
			aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
			coh = cwidth / aratio;
			coh = coh/gbfc.column*row;
			var ul = container.find("ul").first();
			ul.css({display:"block",height:coh+"px"});
		}
		var essapi_18;
		essapi_18 = jQuery("#esg-grid-18-1").tpessential({
	        gridID:18,
	        layout:"masonry",
	        forceFullWidth:"off",
	        lazyLoad:"off",
	        row:1,
	        loadMoreAjaxToken:"4ad3c96fc6",
	        loadMoreAjaxUrl:"#",
	        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
	        ajaxContentTarget:"ess-grid-ajax-container-",
	        ajaxScrollToOffset:"0",
	        ajaxCloseButton:"off",
	        ajaxContentSliding:"off",
	        ajaxScrollToOnLoad:"off",
	        ajaxNavButton:"off",
	        ajaxCloseType:"type1",
	        ajaxCloseInner:"false",
	        ajaxCloseStyle:"light",
	        ajaxClosePosition:"tr",
	        space:30,
	        pageAnimation:"horizontal-slide",
	        paginationScrollToTop:"off",
	        spinner:"spinner0",
	        lightBoxMode:"single",
	        animSpeed:1200,
	        delayBasic:1,
	        mainhoverdelay:1,
	        filterType:"single",
	        showDropFilter:"hover",
	        filterGroupClass:"esg-fgc-18",
	        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
	        responsiveEntries: [
							{ width:1400,amount:5},
							{ width:1170,amount:4},
							{ width:1024,amount:4},
							{ width:960,amount:3},
							{ width:778,amount:3},
							{ width:640,amount:3},
							{ width:480,amount:2}
							]
		});

		try{
			jQuery("#esg-grid-18-1 .esgbox").esgbox({
				padding : [0,0,0,0],
		      	afterLoad:function() { 
			 		if (this.element.hasClass("esgboxhtml5")) {
					   	var mp = this.element.data("mp4"),
					      ogv = this.element.data("ogv"),
					      webm = this.element.data("webm");
			     		this.content ='<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';	
					   	var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
				   	};
			 	},
				beforeShow : function () { 
					this.title = jQuery(this.element).attr('title');
					if (this.title) {
						this.title="";
		   				this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
					}
				},
				afterShow : function() {
				},
				openEffect : 'fade',
				closeEffect : 'fade',
				nextEffect : 'fade',
				prevEffect : 'fade',
				openSpeed : 'normal',
				closeSpeed : 'normal',
				nextSpeed : 'normal',
				prevSpeed : 'normal',
				helpers : {
					media : {},
				    title : {
						type:""
					}
				}
			});

		} catch (e) {}
	}
    if (jQuery("#esg-grid-21-1").length > 0) {
		"use strict";
		function eggbfc(winw,resultoption) {
			var lasttop = winw,
			lastbottom = 0,
			smallest =9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [
								{ width:1400,amount:4},
								{ width:1170,amount:4},
								{ width:1024,amount:4},
								{ width:960,amount:3},
								{ width:778,amount:3},
								{ width:640,amount:3},
								{ width:480,amount:1}
								];
			if (responsiveEntries!=undefined && responsiveEntries.length>0)
				jQuery.each(responsiveEntries, function(index,obj) {
					var curw = obj.width != undefined ? obj.width : 0,
						cura = obj.amount != undefined ? obj.amount : 0;
					if (smallest>curw) {
						smallest = curw;
						samount = cura;
						resultidb = index;
					}
					if (largest<curw) {
						largest = curw;
						lamount = cura;
					}
					if (curw>lastbottom && curw<=lasttop) {
						lastbottom = curw;
						lastamount = cura;
						resultid = index;
					}
			})
			if (smallest>winw) {
				lastamount = samount;
				resultid = resultidb;
			}
			var obj = new Object;
			obj.index = resultid;
			obj.column = lastamount;
			if (resultoption=="id")
				return obj;
			else
				return lastamount;
		}
		if ("masonry"=="even") {
			var coh=0,
				container = jQuery("#esg-grid-21-1");
			var	cwidth = container.width(),
				ar = "3:2",
				gbfc = eggbfc(jQuery(window).width(),"id"),
				row = 1;
				ar = ar.split(":");
				aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
				coh = cwidth / aratio;
				coh = coh/gbfc.column*row;
			var ul = container.find("ul").first();
			ul.css({display:"block",height:coh+"px"});
		}
		var essapi_21;
		essapi_21 = jQuery("#esg-grid-21-1").tpessential({
		    gridID:21,
		    layout:"masonry",
		    forceFullWidth:"off",
		    lazyLoad:"off",
		    row:1,
		    loadMoreAjaxToken:"4ad3c96fc6",
		    loadMoreAjaxUrl:"#",
		    loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
		    ajaxContentTarget:"ess-grid-ajax-container-",
		    ajaxScrollToOffset:"0",
		    ajaxCloseButton:"off",
		    ajaxContentSliding:"off",
		    ajaxScrollToOnLoad:"off",
		    ajaxNavButton:"off",
		    ajaxCloseType:"type1",
		    ajaxCloseInner:"false",
		    ajaxCloseStyle:"light",
		    ajaxClosePosition:"tr",
		    space:30,
		    pageAnimation:"horizontal-slide",
		    paginationScrollToTop:"off",
		    spinner:"spinner0",
		    lightBoxMode:"single",
		    animSpeed:1200,
		    delayBasic:1,
		    mainhoverdelay:2,
		    filterType:"single",
		    showDropFilter:"hover",
		    filterGroupClass:"esg-fgc-21",
		    googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
		    responsiveEntries: [
							{ width:1400,amount:4},
							{ width:1170,amount:4},
							{ width:1024,amount:4},
							{ width:960,amount:3},
							{ width:778,amount:3},
							{ width:640,amount:3},
							{ width:480,amount:1}
							]
		});
	}
    if (jQuery("#esg-grid-19-1").length > 0) {
		"use strict";
		function eggbfc(winw,resultoption) {
			var lasttop = winw,
			lastbottom = 0,
			smallest =9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [
								{ width:1400,amount:4},
								{ width:1170,amount:4},
								{ width:1024,amount:4},
								{ width:960,amount:3},
								{ width:778,amount:3},
								{ width:640,amount:3},
								{ width:480,amount:2}
								];
			if (responsiveEntries!=undefined && responsiveEntries.length>0)
				jQuery.each(responsiveEntries, function(index,obj) {
				var curw = obj.width != undefined ? obj.width : 0,
					cura = obj.amount != undefined ? obj.amount : 0;
				if (smallest>curw) {
					smallest = curw;
					samount = cura;
					resultidb = index;
				}
				if (largest<curw) {
					largest = curw;
					lamount = cura;
				}
				if (curw>lastbottom && curw<=lasttop) {
					lastbottom = curw;
					lastamount = cura;
					resultid = index;
				}
			})
			if (smallest>winw) {
				lastamount = samount;
				resultid = resultidb;
			}
			var obj = new Object;
			obj.index = resultid;
			obj.column = lastamount;
			if (resultoption=="id")
				return obj;
			else
				return lastamount;
		}
		if ("masonry"=="even") {
			var coh=0,
				container = jQuery("#esg-grid-19-1");
			var	cwidth = container.width(),
				ar = "4:5",
				gbfc = eggbfc(jQuery(window).width(),"id"),
			row = 1;
			ar = ar.split(":");
			aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
			coh = cwidth / aratio;
			coh = coh/gbfc.column*row;
			var ul = container.find("ul").first();
			ul.css({display:"block",height:coh+"px"});
		}
		var essapi_19;
		essapi_19 = jQuery("#esg-grid-19-1").tpessential({
	        gridID:19,
	        layout:"masonry",
	        forceFullWidth:"off",
	        lazyLoad:"off",
	        row:1,
	        loadMoreAjaxToken:"ef4e372e0e",
	        loadMoreAjaxUrl:"#",
	        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
	        ajaxContentTarget:"ess-grid-ajax-container-",
	        ajaxScrollToOffset:"0",
	        ajaxCloseButton:"off",
	        ajaxContentSliding:"off",
	        ajaxScrollToOnLoad:"off",
	        ajaxNavButton:"off",
	        ajaxCloseType:"type1",
	        ajaxCloseInner:"false",
	        ajaxCloseStyle:"light",
	        ajaxClosePosition:"tr",
	        space:30,
	        pageAnimation:"horizontal-slide",
	        paginationScrollToTop:"off",
	        spinner:"spinner0",
	        lightBoxMode:"single",
	        animSpeed:1200,
	        delayBasic:1,
	        mainhoverdelay:1,
	        filterType:"single",
	        showDropFilter:"hover",
	        filterGroupClass:"esg-fgc-19",
	        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
	        responsiveEntries: [
							{ width:1400,amount:4},
							{ width:1170,amount:4},
							{ width:1024,amount:4},
							{ width:960,amount:3},
							{ width:778,amount:3},
							{ width:640,amount:3},
							{ width:480,amount:2}
							]
		});

		try{
			jQuery("#esg-grid-19-1 .esgbox").esgbox({
				padding : [0,0,0,0],
		      	afterLoad:function() { 
		 		if (this.element.hasClass("esgboxhtml5")) {
				   	var mp = this.element.data("mp4"),
				      	ogv = this.element.data("ogv"),
				      	webm = this.element.data("webm");
		         	this.content ='<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';	
				   	var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
				   	};
				},
				beforeShow : function () { 
					this.title = jQuery(this.element).attr('title');
					if (this.title) {
						this.title="";
		   				this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
					}
				},
				afterShow : function() {
				},
				openEffect : 'fade',
				closeEffect : 'fade',
				nextEffect : 'fade',
				prevEffect : 'fade',
				openSpeed : 'normal',
				closeSpeed : 'normal',
				nextSpeed : 'normal',
				prevSpeed : 'normal',
				helpers : {
					media : {},
				    title : {
						type:""
					}
				}
			});

		} catch (e) {}
	}
	if (jQuery("#esg-grid-12-1").length > 0) {
    	"use strict";
		function eggbfc(winw,resultoption) {
			var lasttop = winw,
			lastbottom = 0,
			smallest =9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [
								{ width:1400,amount:3},
								{ width:1170,amount:3},
								{ width:1024,amount:3},
								{ width:960,amount:3},
								{ width:778,amount:3},
								{ width:640,amount:2},
								{ width:480,amount:2}
								];
			if (responsiveEntries!=undefined && responsiveEntries.length>0)
				jQuery.each(responsiveEntries, function(index,obj) {
					var curw = obj.width != undefined ? obj.width : 0,
						cura = obj.amount != undefined ? obj.amount : 0;
					if (smallest>curw) {
						smallest = curw;
						samount = cura;
						resultidb = index;
					}
					if (largest<curw) {
						largest = curw;
						lamount = cura;
					}
					if (curw>lastbottom && curw<=lasttop) {
						lastbottom = curw;
						lastamount = cura;
						resultid = index;
					}
			})
			if (smallest>winw) {
				lastamount = samount;
				resultid = resultidb;
			}
			var obj = new Object;
			obj.index = resultid;
			obj.column = lastamount;
			if (resultoption=="id")
				return obj;
			else
				return lastamount;
		}
		if ("even"=="even") {
			var coh=0,
				container = jQuery("#esg-grid-12-1");
			var	cwidth = container.width(),
				ar = "8:7",
				gbfc = eggbfc(jQuery(window).width(),"id"),
			row = 6;
			ar = ar.split(":");
			aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
			coh = cwidth / aratio;
			coh = coh/gbfc.column*row;
			var ul = container.find("ul").first();
			ul.css({display:"block",height:coh+"px"});
		}
		var essapi_12;
		essapi_12 = jQuery("#esg-grid-12-1").tpessential({
	        gridID:12,
	        layout:"even",
	        forceFullWidth:"off",
	        lazyLoad:"off",
	        row:6,
	        loadMoreAjaxToken:"3974310f71",
	        loadMoreAjaxUrl:"#",
	        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
	        ajaxContentTarget:"ess-grid-ajax-container-",
	        ajaxScrollToOffset:"0",
	        ajaxCloseButton:"off",
	        ajaxContentSliding:"off",
	        ajaxScrollToOnLoad:"off",
	        ajaxNavButton:"off",
	        ajaxCloseType:"type1",
	        ajaxCloseInner:"false",
	        ajaxCloseStyle:"light",
	        ajaxClosePosition:"tr",
	        space:30,
	        pageAnimation:"fade",
	        paginationScrollToTop:"off",
	        spinner:"spinner0",
	        evenGridMasonrySkinPusher:"off",
	        lightBoxMode:"single",
	        animSpeed:1000,
	        delayBasic:1,
	        mainhoverdelay:1,
	        filterType:"single",
	        showDropFilter:"hover",
	        filterGroupClass:"esg-fgc-12",
	        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
	        aspectratio:"8:7",
	        responsiveEntries: [
							{ width:1400,amount:3},
							{ width:1170,amount:3},
							{ width:1024,amount:3},
							{ width:960,amount:3},
							{ width:778,amount:3},
							{ width:640,amount:2},
							{ width:480,amount:2}
							]
		});

		try{
		jQuery("#esg-grid-12-1 .esgbox").esgbox({
			padding : [0,0,0,0],
	      	afterLoad:function() { 
		 		if (this.element.hasClass("esgboxhtml5")) {
				   	var mp = this.element.data("mp4"),
				      	ogv = this.element.data("ogv"),
				      	webm = this.element.data("webm");
		         	this.content ='<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';	
				   	var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
				};
			},
			beforeShow : function () { 
				this.title = jQuery(this.element).attr('title');
				if (this.title) {
					this.title="";
	   				this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
				}
			},
			afterShow : function() {
			},
			openEffect : 'fade',
			closeEffect : 'fade',
			nextEffect : 'fade',
			prevEffect : 'fade',
			openSpeed : 'normal',
			closeSpeed : 'normal',
			nextSpeed : 'normal',
			prevSpeed : 'normal',
			helpers : {
				media : {},
			    title : {
					type:""
				}
			}
		});

		} catch (e) {}
	}
	if (jQuery("#esg-grid-16-1").length > 0) {
		"use strict";
		function eggbfc(winw,resultoption) {
			var lasttop = winw,
			lastbottom = 0,
			smallest =9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [
	            { width:1400,amount:3},
	            { width:1170,amount:3},
	            { width:1024,amount:3},
	            { width:960,amount:3},
	            { width:778,amount:3},
	            { width:640,amount:3},
	            { width:480,amount:1}
	            ];
		  	if (responsiveEntries!=undefined && responsiveEntries.length>0)
		    jQuery.each(responsiveEntries, function(index,obj) {
			      var curw = obj.width != undefined ? obj.width : 0,
			        cura = obj.amount != undefined ? obj.amount : 0;
			      if (smallest>curw) {
			        smallest = curw;
			        samount = cura;
			        resultidb = index;
			      }
			      if (largest<curw) {
			        largest = curw;
			        lamount = cura;
			      }
			      if (curw>lastbottom && curw<=lasttop) {
			        lastbottom = curw;
			        lastamount = cura;
			        resultid = index;
			      }
		    })
		    if (smallest>winw) {
		      lastamount = samount;
		      resultid = resultidb;
		    }
		    var obj = new Object;
		    obj.index = resultid;
		    obj.column = lastamount;
		    if (resultoption=="id")
		      return obj;
		    else
		      return lastamount;
	  	}
		if ("even"=="even") {
		  var coh=0,
		    container = jQuery("#esg-grid-16-1");
		  var cwidth = container.width(),
		    ar = "4:4",
		    gbfc = eggbfc(jQuery(window).width(),"id"),
		  	row = 4;
			ar = ar.split(":");
			aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
			coh = cwidth / aratio;
			coh = coh/gbfc.column*row;
			var ul = container.find("ul").first();
			ul.css({display:"block",height:coh+"px"});
		}
		var essapi_16;
		  	essapi_16 = jQuery("#esg-grid-16-1").tpessential({
		        gridID:16,
		        layout:"even",
		        forceFullWidth:"off",
		        lazyLoad:"off",
		        row:4,
		        loadMoreAjaxToken:"3394fde8cf",
		        loadMoreAjaxUrl:"#",
		        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
		        ajaxContentTarget:"ess-grid-ajax-container-",
		        ajaxScrollToOffset:"0",
		        ajaxCloseButton:"off",
		        ajaxContentSliding:"off",
		        ajaxScrollToOnLoad:"off",
		        ajaxNavButton:"off",
		        ajaxCloseType:"type1",
		        ajaxCloseInner:"false",
		        ajaxCloseStyle:"light",
		        ajaxClosePosition:"tr",
		        space:30,
		        pageAnimation:"fade",
		        paginationScrollToTop:"off",
		        spinner:"spinner0",
		        evenGridMasonrySkinPusher:"off",
		        lightBoxMode:"single",
		        animSpeed:1000,
		        delayBasic:1,
		        mainhoverdelay:1,
		        filterType:"single",
		        showDropFilter:"hover",
		        filterGroupClass:"esg-fgc-16",
		        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
		        aspectratio:"4:4",
		        responsiveEntries: [
		            { width:1400,amount:3},
		            { width:1170,amount:3},
		            { width:1024,amount:3},
		            { width:960,amount:3},
		            { width:778,amount:3},
		            { width:640,amount:3},
		            { width:480,amount:1}
		            ]
		  });

		  try{
			  jQuery("#esg-grid-16-1 .esgbox").esgbox({
			    padding : [0,0,0,0],
			    afterLoad:function() { 
			    	if (this.element.hasClass("esgboxhtml5")) {
				       var mp = this.element.data("mp4"),
				          ogv = this.element.data("ogv"),
				          webm = this.element.data("webm");
				         this.content ='<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';  
				       var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
				       };
				     },
			    beforeShow : function () { 
			      this.title = jQuery(this.element).attr('title');
			      if (this.title) {
			        this.title="";
			      this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
			      }
			    },
			    afterShow : function() {
			    },
			    openEffect : 'fade',
			    closeEffect : 'fade',
			    nextEffect : 'fade',
			    prevEffect : 'fade',
			    openSpeed : 'normal',
			    closeSpeed : 'normal',
			    nextSpeed : 'normal',
			    prevSpeed : 'normal',
			    helpers : {
			      media : {},
			        title : {
			        type:""
			      }
			    }
			});

		} catch (e) {}
	}
	if (jQuery("#esg-grid-13-1").length > 0) {
		"use strict";
		function eggbfc(winw,resultoption) {
		    var lasttop = winw,
		    lastbottom = 0,
		    smallest =9999,
		    largest = 0,
		    samount = 0,
		    lamoung = 0,
		    lastamount = 0,
		    resultid = 0,
		    resultidb = 0,
		    responsiveEntries = [
		                        { width:1400,amount:4},
		                        { width:1170,amount:4},
		                        { width:1024,amount:4},
		                        { width:960,amount:4},
		                        { width:778,amount:3},
		                        { width:640,amount:3},
		                        { width:480,amount:1}
		                        ];
		    if (responsiveEntries!=undefined && responsiveEntries.length>0)
		        jQuery.each(responsiveEntries, function(index,obj) {
		            var curw = obj.width != undefined ? obj.width : 0,
		                cura = obj.amount != undefined ? obj.amount : 0;
		            if (smallest>curw) {
		                smallest = curw;
		                samount = cura;
		                resultidb = index;
		            }
		            if (largest<curw) {
		                largest = curw;
		                lamount = cura;
		            }
		            if (curw>lastbottom && curw<=lasttop) {
		                lastbottom = curw;
		                lastamount = cura;
		                resultid = index;
		            }
		        })
		        if (smallest>winw) {
		            lastamount = samount;
		            resultid = resultidb;
		        }
		        var obj = new Object;
		        obj.index = resultid;
		        obj.column = lastamount;
		        if (resultoption=="id")
		            return obj;
		        else
		            return lastamount;
	    }
		if ("even"=="even") {
		    var coh=0,
		        container = jQuery("#esg-grid-13-1");
		    var cwidth = container.width(),
		        ar = "4:3",
		        gbfc = eggbfc(jQuery(window).width(),"id"),
	    	row = 3;
			ar = ar.split(":");
			aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
			coh = cwidth / aratio;
			coh = coh/gbfc.column*row;
		    var ul = container.find("ul").first();
		    ul.css({display:"block",height:coh+"px"});
		}
		var essapi_13;
	    essapi_13 = jQuery("#esg-grid-13-1").tpessential({
	        gridID:13,
	        layout:"even",
	        forceFullWidth:"off",
	        lazyLoad:"off",
	        row:3,
	        loadMoreAjaxToken:"69fa5b2b9e",
	        loadMoreAjaxUrl:"#",
	        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
	        ajaxContentTarget:"ess-grid-ajax-container-",
	        ajaxScrollToOffset:"0",
	        ajaxCloseButton:"off",
	        ajaxContentSliding:"off",
	        ajaxScrollToOnLoad:"off",
	        ajaxNavButton:"off",
	        ajaxCloseType:"type1",
	        ajaxCloseInner:"false",
	        ajaxCloseStyle:"light",
	        ajaxClosePosition:"tr",
	        space:30,
	        pageAnimation:"fade",
	        paginationScrollToTop:"off",
	        spinner:"spinner0",
	        evenGridMasonrySkinPusher:"off",
	        lightBoxMode:"single",
	        animSpeed:1000,
	        delayBasic:1,
	        mainhoverdelay:1,
	        filterType:"single",
	        showDropFilter:"hover",
	        filterGroupClass:"esg-fgc-13",
	        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
	        aspectratio:"4:3",
	        responsiveEntries: [
	                        { width:1400,amount:4},
	                        { width:1170,amount:4},
	                        { width:1024,amount:4},
	                        { width:960,amount:4},
	                        { width:778,amount:3},
	                        { width:640,amount:3},
	                        { width:480,amount:1}
	                        ]
	    });

	    try{
		    jQuery("#esg-grid-13-1 .esgbox").esgbox({
		        padding : [0,0,0,0],
		      	afterLoad:function() { 
			        if (this.element.hasClass("esgboxhtml5")) {
			           var mp = this.element.data("mp4"),
			              ogv = this.element.data("ogv"),
			              webm = this.element.data("webm");
			         this.content ='<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';  
			           var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
			           };
		        },
		        beforeShow : function () { 
		            this.title = jQuery(this.element).attr('title');
		            if (this.title) {
		                this.title="";
		        		this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
		            }
		        },
		        afterShow : function() {
		        },
		        openEffect : 'fade',
		        closeEffect : 'fade',
		        nextEffect : 'fade',
		        prevEffect : 'fade',
		        openSpeed : 'normal',
		        closeSpeed : 'normal',
		        nextSpeed : 'normal',
		        prevSpeed : 'normal',
		        helpers : {
		            media : {},
		            title : {
		                type:""
		            }
		        }
			});

		} catch (e) {}
	}
	if (jQuery("#esg-grid-14-1").length > 0) {
		"use strict";
		function eggbfc(winw,resultoption) {
		    var lasttop = winw,
		    lastbottom = 0,
		    smallest =9999,
		    largest = 0,
		    samount = 0,
		    lamoung = 0,
		    lastamount = 0,
		    resultid = 0,
		    resultidb = 0,
		    responsiveEntries = [
		                        { width:1400,amount:4},
		                        { width:1170,amount:4},
		                        { width:1024,amount:4},
		                        { width:960,amount:4},
		                        { width:778,amount:3},
		                        { width:640,amount:3},
		                        { width:480,amount:1}
		                        ];
		    if (responsiveEntries!=undefined && responsiveEntries.length>0)
		        jQuery.each(responsiveEntries, function(index,obj) {
		            var curw = obj.width != undefined ? obj.width : 0,
		                cura = obj.amount != undefined ? obj.amount : 0;
		            if (smallest>curw) {
		                smallest = curw;
		                samount = cura;
		                resultidb = index;
		            }
		            if (largest<curw) {
		                largest = curw;
		                lamount = cura;
		            }
		            if (curw>lastbottom && curw<=lasttop) {
		                lastbottom = curw;
		                lastamount = cura;
		                resultid = index;
		            }
		        })
		        if (smallest>winw) {
		            lastamount = samount;
		            resultid = resultidb;
		        }
		        var obj = new Object;
		        obj.index = resultid;
		        obj.column = lastamount;
		        if (resultoption=="id")
		            return obj;
		        else
		            return lastamount;
	    }
		if ("masonry"=="even") {
		    var coh=0,
		        container = jQuery("#esg-grid-14-1");
		    var cwidth = container.width(),
		        ar = "4:3",
		        gbfc = eggbfc(jQuery(window).width(),"id"),
		    row = 3;
			ar = ar.split(":");
			aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
			coh = cwidth / aratio;
			coh = coh/gbfc.column*row;
		    var ul = container.find("ul").first();
		    ul.css({display:"block",height:coh+"px"});
		}
		var essapi_14;
	    essapi_14 = jQuery("#esg-grid-14-1").tpessential({
	        gridID:14,
	        layout:"masonry",
	        forceFullWidth:"off",
	        lazyLoad:"off",
	        row:3,
	        loadMoreAjaxToken:"69fa5b2b9e",
	        loadMoreAjaxUrl:"#",
	        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
	        ajaxContentTarget:"ess-grid-ajax-container-",
	        ajaxScrollToOffset:"0",
	        ajaxCloseButton:"off",
	        ajaxContentSliding:"off",
	        ajaxScrollToOnLoad:"off",
	        ajaxNavButton:"off",
	        ajaxCloseType:"type1",
	        ajaxCloseInner:"false",
	        ajaxCloseStyle:"light",
	        ajaxClosePosition:"tr",
	        space:30,
	        pageAnimation:"fade",
	        paginationScrollToTop:"off",
	        spinner:"spinner0",
	        lightBoxMode:"single",
	        animSpeed:1000,
	        delayBasic:1,
	        mainhoverdelay:1,
	        filterType:"single",
	        showDropFilter:"hover",
	        filterGroupClass:"esg-fgc-14",
	        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
	        responsiveEntries: [
	                        { width:1400,amount:4},
	                        { width:1170,amount:4},
	                        { width:1024,amount:4},
	                        { width:960,amount:4},
	                        { width:778,amount:3},
	                        { width:640,amount:3},
	                        { width:480,amount:1}
	                        ]
	    });

	    try{
		    jQuery("#esg-grid-14-1 .esgbox").esgbox({
		        padding : [0,0,0,0],
		      afterLoad:function() { 
		        if (this.element.hasClass("esgboxhtml5")) {
		           var mp = this.element.data("mp4"),
		              ogv = this.element.data("ogv"),
		              webm = this.element.data("webm");
		         this.content ='<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';  
		           var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
		           };
		         },
		        beforeShow : function () { 
		            this.title = jQuery(this.element).attr('title');
		            if (this.title) {
		                this.title="";
		        this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
		            }
		        },
		        afterShow : function() {
		        },
		        openEffect : 'fade',
		        closeEffect : 'fade',
		        nextEffect : 'fade',
		        prevEffect : 'fade',
		        openSpeed : 'normal',
		        closeSpeed : 'normal',
		        nextSpeed : 'normal',
		        prevSpeed : 'normal',
		        helpers : {
		            media : {},
		            title : {
		                type:""
		            }
		        }
			});

		} catch (e) {}
	}
	if (jQuery("#esg-grid-15-1").length > 0) {
		"use strict";
		function eggbfc(winw,resultoption) {
		    var lasttop = winw,
		    lastbottom = 0,
		    smallest =9999,
		    largest = 0,
		    samount = 0,
		    lamoung = 0,
		    lastamount = 0,
		    resultid = 0,
		    resultidb = 0,
		    responsiveEntries = [
		                        { width:1400,amount:4},
		                        { width:1170,amount:4},
		                        { width:1024,amount:4},
		                        { width:960,amount:4},
		                        { width:778,amount:3},
		                        { width:640,amount:3},
		                        { width:480,amount:1}
		                        ];
		    if (responsiveEntries!=undefined && responsiveEntries.length>0)
		        jQuery.each(responsiveEntries, function(index,obj) {
		            var curw = obj.width != undefined ? obj.width : 0,
		                cura = obj.amount != undefined ? obj.amount : 0;
		            if (smallest>curw) {
		                smallest = curw;
		                samount = cura;
		                resultidb = index;
		            }
		            if (largest<curw) {
		                largest = curw;
		                lamount = cura;
		            }
		            if (curw>lastbottom && curw<=lasttop) {
		                lastbottom = curw;
		                lastamount = cura;
		                resultid = index;
		            }
		        })
		        if (smallest>winw) {
		            lastamount = samount;
		            resultid = resultidb;
		        }
		        var obj = new Object;
		        obj.index = resultid;
		        obj.column = lastamount;
		        if (resultoption=="id")
		            return obj;
		        else
		            return lastamount;
	    }
		if ("cobbles"=="even") {
		    var coh=0,
		        container = jQuery("#esg-grid-15-1");
		    var cwidth = container.width(),
		        ar = "4:3",
		        gbfc = eggbfc(jQuery(window).width(),"id"),
		    row = 3;
			ar = ar.split(":");
			aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
			coh = cwidth / aratio;
			coh = coh/gbfc.column*row;
		    var ul = container.find("ul").first();
		    ul.css({display:"block",height:coh+"px"});
		}
		var essapi_15;
	    essapi_15 = jQuery("#esg-grid-15-1").tpessential({
	        gridID:15,
	        layout:"cobbles",
	        forceFullWidth:"off",
	        lazyLoad:"off",
	        row:3,
	        loadMoreAjaxToken:"69fa5b2b9e",
	        loadMoreAjaxUrl:"#",
	        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
	        ajaxContentTarget:"ess-grid-ajax-container-",
	        ajaxScrollToOffset:"0",
	        ajaxCloseButton:"off",
	        ajaxContentSliding:"off",
	        ajaxScrollToOnLoad:"off",
	        ajaxNavButton:"off",
	        ajaxCloseType:"type1",
	        ajaxCloseInner:"false",
	        ajaxCloseStyle:"light",
	        ajaxClosePosition:"tr",
	        space:30,
	        pageAnimation:"fade",
	        paginationScrollToTop:"off",
	        spinner:"spinner0",
	        lightBoxMode:"single",
	        animSpeed:1000,
	        delayBasic:1,
	        mainhoverdelay:1,
	        filterType:"single",
	        showDropFilter:"hover",
	        filterGroupClass:"esg-fgc-15",
	        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
	        aspectratio:"4:3",
	        responsiveEntries: [
	                        { width:1400,amount:4},
	                        { width:1170,amount:4},
	                        { width:1024,amount:4},
	                        { width:960,amount:4},
	                        { width:778,amount:3},
	                        { width:640,amount:3},
	                        { width:480,amount:1}
	                        ]
	    });

	    try{
		    jQuery("#esg-grid-15-1 .esgbox").esgbox({
		        padding : [0,0,0,0],
		      	afterLoad:function() { 
		        if (this.element.hasClass("esgboxhtml5")) {
		           var mp = this.element.data("mp4"),
		              ogv = this.element.data("ogv"),
		              webm = this.element.data("webm");
	         		this.content ='<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';  
		           var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
		           };
		        },
		        beforeShow : function () { 
		            this.title = jQuery(this.element).attr('title');
		            if (this.title) {
		                this.title="";
		        		this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
		            }
		        },
		        afterShow : function() {
		        },
		        openEffect : 'fade',
		        closeEffect : 'fade',
		        nextEffect : 'fade',
		        prevEffect : 'fade',
		        openSpeed : 'normal',
		        closeSpeed : 'normal',
		        nextSpeed : 'normal',
		        prevSpeed : 'normal',
		        helpers : {
		            media : {},
		            title : {
		                type:""
		            }
		        }
			});

		} catch (e) {}
	}
}

/*reviews stars*/
function reviews_stars() {
    "use strict";
    if (jQuery(".reviews_stars").length > 0) {
        jQuery(".reviews_stars").each(function() {
            var percent = jQuery(this).attr("data-mark") * 20;
            jQuery(this).find('.reviews_stars_hover').css({'width': percent + '%'});
        });
    }
}

// Price range slider
function price_filter() {
    "use strict";
    if (jQuery("#slider-range").length > 0) {
        jQuery("#slider-range").slider({
            range: true,
            min: 0,
            max: 250,
            values: [0, 250],
            slide: function(event, ui) {
                jQuery("#amount").val("€" + ui.values[0] + " - €" + ui.values[1]);
            }
        });
        jQuery("#amount").val("€" + jQuery("#slider-range").slider("values", 0) +
            " - €" + jQuery("#slider-range").slider("values", 1));
    }
}
// Select review stars
function woo_review_star() {
    "use strict";
    if (jQuery(".stars", "#review_form").length > 0) {
        $(".stars", "#review_form").find("a").on("click", function() {
			if (jQuery('p.stars', "#review_form").hasClass('selected')){
			}
			else {
				jQuery('p.stars', "#review_form").addClass('selected');
			}
            $("a.active", "#review_form").removeClass("active");
            $(this).addClass("active");
            return false;
        });
    }
}
function woo_ship_calc() {
   	"use strict";
	if (jQuery("#shipping_method_0").length > 0) {
		jQuery('.shipping-calculator-button').on('click' ,function(e){
			"use strict";
			if (jQuery('.shipping-calculator-form').hasClass('open-shipping-calculator-form'))
				jQuery('.shipping-calculator-form').removeClass('open-shipping-calculator-form');
			else {
				jQuery('.shipping-calculator-form').addClass('open-shipping-calculator-form');
			}
			e.preventDefault();
			return false;
		});
	}
	if (jQuery("body.woocommerce-checkout").length > 0) {
		jQuery(".showlogin", ".woocommerce-info").on('click' ,function(e){
			"use strict";
			if (jQuery('.login_woo_checkout','.woocommerce').hasClass('open_login_woo_checkout'))
				jQuery('.login_woo_checkout','.woocommerce').removeClass('open_login_woo_checkout');
			else {
				jQuery('.login_woo_checkout','.woocommerce').addClass('open_login_woo_checkout');
			}
			e.preventDefault();
			return false;
		});

		jQuery(".showcoupon", ".woocommerce-info").on('click' ,function(e){
			"use strict";
			if (jQuery('.coupon_woo_checkout','.woocommerce').hasClass('open_coupon_woo_checkout'))
				jQuery('.coupon_woo_checkout','.woocommerce').removeClass('open_coupon_woo_checkout');
			else {
				jQuery('.coupon_woo_checkout','.woocommerce').addClass('open_coupon_woo_checkout');
			}
			e.preventDefault();
			return false;
		});

		jQuery('#ship-to-different-address-checkbox').change(function(){
			if (jQuery('.shipping_woo_address','.woocommerce-shipping-fields').hasClass('open_shipping_woo_checkout'))
				jQuery('.shipping_woo_address','.woocommerce-shipping-fields').removeClass('open_shipping_woo_checkout');
			else {
				jQuery('.shipping_woo_address','.woocommerce-shipping-fields').addClass('open_shipping_woo_checkout');
			}
		});
		jQuery('#createaccount').change(function(){
			if (jQuery('.create-woo-account','.woocommerce-billing-fields').hasClass('open-create-woo-account'))
				jQuery('.create-woo-account','.woocommerce-billing-fields').removeClass('open-create-woo-account');
			else {
				jQuery('.create-woo-account','.woocommerce-billing-fields').addClass('open-create-woo-account');
			}
		});
	}
}

/* pie skills legend color */
function pie_skills_legend_color() {
    "use strict";
    if (jQuery(".sc_skills_pie").length > 0) {

		var skillspiecolor = $('input.color','.pie').map(function(){
		   return $(this).attr("value");
		}).get();

		var skillspielegend = $('.sc_skills_legend_marker','.sc_skills_legend').map(function(){
		   return $(this);
		}).get();

		skillspielegend[0].css({'background-color': skillspiecolor[0]});
		skillspielegend[1].css({'background-color': skillspiecolor[1]});
		skillspielegend[2].css({'background-color': skillspiecolor[2]});
		skillspielegend[3].css({'background-color': skillspiecolor[3]});

    }
}