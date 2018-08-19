jQuery(document).ready(function() {
    //contact form processing
    jQuery('form.contact_1', '.sc_form_fields').on('submit', function( e ){
        e.preventDefault();
        var $form = jQuery(this);
        //checking on empty values
        var formFields = $form.serializeArray();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailaddressVal = jQuery("#contact_form_email").val();
        for (var i = formFields.length - 1; i >= 0; i--) {
            if (!formFields[i].value.length) {
                $form.find('.result', '.sc_form_fields').html("");
                $form.find('[name="' + formFields[i].name + '"]', '.sc_form_fields').addClass('error_fields_class').on('focus', function(){jQuery(this).removeClass('error_fields_class')});
            };
			if(!emailReg.test(emailaddressVal)) {
            	$form.find('#contact_form_email', '.sc_form_fields').addClass('error_fields_class').on('focus', function(){jQuery(this).removeClass('error_fields_class')});
        	}
        };

        //if one of form fields is empty - exit
		if( !emailReg.test(emailaddressVal) ){
			$form.find('.result', '.sc_form_fields').html("");
			jQuery($form).find('div.result', '.sc_form_fields').addClass('error_email_mask');
            jQuery($form).find('div.result', '.sc_form_fields').attr('disabled', false).append('<p class="error_item">invalid email address</p>');
        };

        if ($form.find('#contact_form_username', '.sc_form_fields').hasClass('error_fields_class')) {
            jQuery($form).find('div.result', '.sc_form_fields').attr('disabled', false).append('<p class="error_item">The name can\'t be empty</p>');
        };
        if ($form.find('#contact_form_email', '.sc_form_fields').hasClass('error_fields_class')) {
			if ($form.find('div.result', '.sc_form_fields').hasClass('error_email_mask')) {} 
			else {
	        	jQuery($form).find('div.result', '.sc_form_fields').attr('disabled', false).append('<p class="error_item">Too short (or empty) email address</p>');
	        }
        };

        if ($form.find('#contact_form_subj', '.sc_form_fields').hasClass('error_fields_class')) {
            jQuery($form).find('div.result', '.sc_form_fields').attr('disabled', false).append('<p class="error_item">The subject can\'t be empty</p>');
        };
        if ($form.find('#contact_form_message', '.sc_form_fields').hasClass('error_fields_class')) {
            jQuery($form).find('div.result', '.sc_form_fields').attr('disabled', false).append('<p class="error_item">The message text can\'t be empty</p>');
        };
        if ($form.find('[name]', '.sc_form_fields').hasClass('error_fields_class')) {
            $form.find('.result', '.sc_form_fields').addClass('sc_infobox_style_error').fadeIn().delay(3000).fadeOut();
            return;
        };
        //sending form data to PHP server if fields are not empty
        var request = $form.serialize();
        var ajax = jQuery.post( "include/contact-form.php", request )
            .done(function( data ) {
                $form.find('.result', '.sc_form_fields').removeClass('sc_infobox_style_error');
                $form.find('.result', '.sc_form_fields').removeClass('error_email_mask');
                $form.find('.result', '.sc_form_fields').addClass('sc_infobox_style_success').html("").fadeIn().delay(3000).fadeOut();
                jQuery($form).find('div.result', '.sc_form_fields').attr('disabled', false).append('<p>'+data+'</p>');
                jQuery('form.contact_1', '.sc_form_fields')[0].reset();
        })
            .fail(function( data ) {
                $form.find('.result', '.sc_form_fields').addClass('sc_infobox_style_error').html("").fadeIn().delay(3000).fadeOut();
                jQuery($form).find('div.result', '.sc_form_fields').attr('disabled', false).append('<p class="error_item">Mail cannot be sent. You need PHP server to send mail.</p>');
        })
    });
});