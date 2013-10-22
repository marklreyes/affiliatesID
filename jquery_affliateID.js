(function ($) {
    $.fn.affUpdate = function () {

        return this.filter('span.affiliatePhone').each(function () {

            /* URL Parameter to reference a match for later */
            var param1var = getQueryVariable("Affiliateid");

			/* Check for the hidden affiliate ID field if param1var is empty */
			if (typeof(param1var) === 'undefined' || param1var == '') {
				param1var = $('#AffiliateId').val();
			}
			
			/* Only move forward if there is an affiliate ID to compare against the phone number dataset */
			if (param1var != '') {
				
	            var domain = encodeURIComponent(document.domain);
	            var proxyURL = "http://" + domain + "/common/resa_proxy.php";
	            var referer = encodeURIComponent(document.referrer);

	            $.ajax({
	                type: "GET",
	                url: proxyURL + "?RESAType=content",
	                data: "PageDomain=GLOBAL&PageLocation=GLOBAL" + "&Referer=" + referer,
	                success: function (data) {
	                    var json = $.parseJSON(data);

	                    /* Reference a device */
	                    $.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));               

	                    /* Check for the span affiliate HTML element and store it as a value for future use */
	                    var affiliateNode = $('span.affiliatePhone');

	                    for (var jsondat in json) {

	                        /* Identify the content region from CJC, affiliate_numbers */
	                        var contentRegionID = json[jsondat].ContentRegionID;

	                        /* If it is a mobile device, run mobile number logic, else run desktop logic */
	                        if ($.browser.device === true) {

	                            /* Check if the appropriate content region exists to run affiliate number logic */
	                            if (contentRegionID == 'affiliate_mobnumbers') {

	                                /* Key:values from CJC */
	                                var phoneMobileSet = $.parseJSON(json[jsondat].Content);

	                                /* Loop through the phone number collection to access its keys and values */
	                                $.each(phoneMobileSet, function (key, element) {

	                                    /* if the key matches param1var, update affiliateNode's HTML value with the key's value */
	                                    if (param1var === key) {

	                                        /* Update the HTML phone number */
	                                        $(affiliateNode).text(element);
	                                    }
	                                });
	                            }
	                        } else {
	                            /* Check if the appropriate content region exists to run affiliate number logic. */
	                            if (contentRegionID == 'affiliate_numbers') {

	                                /* Key:values from CJC */
	                                var phoneCollection = $.parseJSON(json[jsondat].Content);

	                                /* Loop through the phone number collection to access its keys and values */
	                                $.each(phoneCollection, function (key, element) {

	                                    /* if the key matches param1var, update affiliateNode's HTML value with the key's value */
	                                    if (param1var === key) {

	                                        /* Update the HTML phone number */
	                                        $(affiliateNode).text(element);
	                                    }
	                                });
	                            }
	                        }
	                    }
	                }
	            });
			}
        });
    };
}(jQuery));

$(document).ready(function () {
    /* Call the plugin */
    $("span.affiliatePhone").affUpdate();
});

/* Function to query the URL for a specific parameter */
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
}