jQuery(document).ready(function() {
    //contact form processing
    jQuery('form.contact_1', '.contact_form_1').on('submit', function( e ){
        e.preventDefault();
        var $form = jQuery(this);
        //checking on empty values
        var formFields = $form.serializeArray();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailaddressVal = jQuery("#contact_form_email").val();
        for (var i = formFields.length - 1; i >= 0; i--) {
            if (!formFields[i].value.length) {
                $form.find('.result', '.contact_form_1').html("");
                $form.find('[name="' + formFields[i].name + '"]', '.contact_form_1').addClass('error_fields_class').on('focus', function(){jQuery(this).removeClass('error_fields_class')});
            };
			if(!emailReg.test(emailaddressVal)) {
            	$form.find('#contact_form_email', '.contact_form_1').addClass('error_fields_class').on('focus', function(){jQuery(this).removeClass('error_fields_class')});
        	}
        };

        //if one of form fields is empty - exit
		if( !emailReg.test(emailaddressVal) ){
			$form.find('.result', '.contact_form_1').html("");
			jQuery($form).find('div.result', '.contact_form_1').addClass('error_email_mask');
            jQuery($form).find('div.result', '.contact_form_1').attr('disabled', false).append('<p class="error_item">invalid email address</p>');
        };

        if ($form.find('#contact_form_username', '.contact_form_1').hasClass('error_fields_class')) {
            jQuery($form).find('div.result', '.contact_form_1').attr('disabled', false).append('<p class="error_item">The name can\'t be empty</p>');
        };
        if ($form.find('#contact_form_email', '.contact_form_1').hasClass('error_fields_class')) {
			if ($form.find('div.result', '.contact_form_1').hasClass('error_email_mask')) {} 
			else {
	        	jQuery($form).find('div.result', '.contact_form_1').attr('disabled', false).append('<p class="error_item">Too short (or empty) email address</p>');
	        }
        };

        if ($form.find('#contact_form_subj', '.contact_form_1').hasClass('error_fields_class')) {
            jQuery($form).find('div.result', '.contact_form_1').attr('disabled', false).append('<p class="error_item">The subject can\'t be empty</p>');
        };
        if ($form.find('#contact_form_message', '.contact_form_1').hasClass('error_fields_class')) {
            jQuery($form).find('div.result', '.contact_form_1').attr('disabled', false).append('<p class="error_item">The message text can\'t be empty</p>');
        };
        if ($form.find('[name]', '.contact_form_1').hasClass('error_fields_class')) {
            $form.find('.result', '.contact_form_1').addClass('sc_infobox_style_error').fadeIn().delay(3000).fadeOut();
            return;
        };
        //sending form data to PHP server if fields are not empty
        var request = $form.serialize();
        var ajax = jQuery.post( "include/contact-form.php", request )
            .done(function( data ) {
                $form.find('.result', '.contact_form_1').removeClass('sc_infobox_style_error');
                $form.find('.result', '.contact_form_1').removeClass('error_email_mask');
                $form.find('.result', '.contact_form_1').addClass('sc_infobox_style_success').html("").fadeIn().delay(3000).fadeOut();
                jQuery($form).find('div.result', '.contact_form_1').attr('disabled', false).append('<p>'+data+'</p>');
                jQuery('form.contact_1', '.contact_form_1')[0].reset();
        })
            .fail(function( data ) {
                $form.find('.result', '.contact_form_1').addClass('sc_infobox_style_error').html("").fadeIn().delay(3000).fadeOut();
                jQuery($form).find('div.result', '.contact_form_1').attr('disabled', false).append('<p class="error_item">Mail cannot be sent. You need PHP server to send mail.</p>');
        })
    });
});

var THEMEREX_validateForm = null;

function userSubmitForm(form, url, nonce){
    "use strict";
    var error = false;
    var form_custom = form.data('formtype')=='custom';
    if (!form_custom) {
        error = formValidate(form, {
            error_message_show: true,
            error_message_time: 5000,
            error_message_class: "sc_infobox sc_infobox_style_error",
            error_fields_class: "error_fields_class",
            exit_after_first_error: false,
            rules: [
                {
                    field: "username",
                    min_length: { value: 1,  message: THEMEREX_NAME_EMPTY },
                    max_length: { value: 60, message: THEMEREX_NAME_LONG}
                },
                {
                    field: "email",
                    min_length: { value: 7,  message: THEMEREX_EMAIL_EMPTY },
                    max_length: { value: 60, message: THEMEREX_EMAIL_LONG},
                    mask: { value: THEMEREX_EMAIL_MASK, message: THEMEREX_EMAIL_NOT_VALID}
                },
                {
                    field: "message",
                    min_length: { value: 1,  message: THEMEREX_MESSAGE_EMPTY },
                    max_length: { value: THEMEREX_msg_maxlength_contacts, message: THEMEREX_MESSAGE_LONG}
                }
            ]
        });
    }
    if (!error && url!='#') {
        THEMEREX_validateForm = form;
        var data = {
            action: "send_contact_form",
            nonce: nonce,
            type: form_custom ? 'custom' : 'contact',
            data: form.serialize()
        };
        jQuery.post(url, data, userSubmitFormResponse, "text");
    }
}
    
function userSubmitFormResponse(response) {
    "use strict";
    var rez = JSON.parse(response);
    var result = THEMEREX_validateForm.find(".result")
        .toggleClass("sc_infobox_style_error", false)
        .toggleClass("sc_infobox_style_success", false);
    if (rez.error == "") {
        result.addClass("sc_infobox_style_success").html(THEMEREX_SEND_COMPLETE);
        setTimeout(function () {
            result.fadeOut();
            THEMEREX_validateForm.get(0).reset();
            }, 3000);
    } else {
        result.addClass("sc_infobox_style_error").html(THEMEREX_SEND_ERROR + ' ' + rez.error);
    }
    result.fadeIn();}



// Order Form
function orderSubmitForm(theForm, orderForm, url, nonce){
    "use strict";
    if (url!='#') {
        THEMEREX_validateForm = theForm;
        var data = {
            action: "send_contact_form",
            nonce: nonce,
            type: 'okorder',
            data: orderForm.serialize()
        };
        jQuery.post(url, data, orderSubmitFormResponse, "text");
    }
}

function orderSubmitFormResponse(response) {
    "use strict";
    var rez = JSON.parse(response);
    classie.addClass( THEMEREX_validateForm.querySelector( ".simform-inner" ), "hide" );
    classie.addClass( THEMEREX_validateForm.querySelector( ".continue_button" ), "hide" );
    var messageEl = THEMEREX_validateForm.querySelector( ".final-message" );
    if (rez.error == "") {
        messageEl.innerHTML = THEMEREX_SEND_ORDER_COMPLETE;
    } else {
        messageEl.innerHTML =  rez.error;
    }
    classie.addClass( messageEl, "show" );

    jQuery('.sc_contact_form_order .dots > span').addClass('answered');
}