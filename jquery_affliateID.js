(function ($) {
    $.fn.affUpdate = function () {

        return this.filter('span.affiliatePhone').each(function () {

            /* Check for the span affiliate HTML element and store it as a value for future use */
            var affiliateNode = $('span.affiliatePhone');

            /* Affiliate ID objects for multiple phone numbers - should be true to run logic */
			var BPN_Generic = window.location.search.indexOf('AffiliateID=BPN_Generic') > -1;	
			var BPN_Tradename = window.location.search.indexOf('AffiliateID=BPN_Tradename') > -1;			
			var Google_Generic = window.location.search.indexOf('AffiliateID=Google_Generic') > -1;			
			var Google_Generic_RLSA = window.location.search.indexOf('AffiliateID=Google_Generic_RLSA') > -1;			
			var Google_Tradename = window.location.search.indexOf('AffiliateID=Google_Tradename') > -1;			
			var MSN_Generic = window.location.search.indexOf('AffiliateID=MSN_Generic') > -1;	
			var MSN_Tradename = window.location.search.indexOf('AffiliateID=MSN_Tradename') > -1;	
			
            /* Affiliate ID objects for one unique phone number - should be true to run logic */
            var GDNtext_rmktg = window.location.search.indexOf('AffiliateID=GDNtext_rmktg') > -1;
            var AOL_BT = window.location.search.indexOf('AffiliateID=AOL_BT') > -1;
            var OwnIQ_BT = window.location.search.indexOf('AffiliateID=OwnIQ_BT') > -1;
            var XaxisRTB_DT = window.location.search.indexOf('AffiliateID=XaxisRTB_DT') > -1;
            var XaxisRTB_SR = window.location.search.indexOf('AffiliateID=XaxisRTB_SR');
            var XaxisRTB_SR_EI = window.location.search.indexOf('AffiliateID=XaxisRTB_SR_EI') > -1;
            var Generic_fb = window.location.search.indexOf('AffiliateID=Generic_fb') > -1;
            var C_FarmerGrp_fb = window.location.search.indexOf('AffiliateID=C_FarmerGrp_fb') > -1;
            var BASCJ_fb = window.location.search.indexOf('AffiliateID=BASCJ_fb') > -1;			

            /* Window object's width needs to be less than or equal to 752 */
            var windowWidth = $(window).width();
            
            /* If window is less than or equal to 752, run logic */
            if (windowWidth <= 752) {
	            /* do stuff */
	            console.log('I am in mobile UI!!!');
            } else {
            	/* Logic for Affiliates with the DIFFERENT phone number */
	            if (BPN_Generic == true) {
	                $(affiliateNode).text('1.800.254.BPN_Generic');
	            }
	
	            if (BPN_Tradename == true) {
	                $(affiliateNode).text('1.800.254.BPN_Tradename');
	            }
	
	            if (Google_Generic == true) {
	                $(affiliateNode).text('1.800.254.Google_Generic');
	            }
	            if (Google_Generic_RLSA == true) {
	                $(affiliateNode).text('1.800.254.Google_Generic_RLSA');
	            }
	
	            if (Google_Tradename == true) {
	                $(affiliateNode).text('1.800.254.Google_Tradename');
	            }
	
	            if (MSN_Generic == true) {
	                $(affiliateNode).text('1.800.254.MSN_Generic');
	            }
	
	            if (MSN_Tradename == true) {
	                $(affiliateNode).text('1.800.254.MSN_Tradename');
	            }
	            
	            /* Logic for Affiliates with the SAME phone number */
	            if ((GDNtext_rmktg == true) || (AOL_BT == true) || (OwnIQ_BT == true) || (XaxisRTB_DT == true) || (XaxisRTB_SR == true) || (XaxisRTB_SR_EI == true) || (Generic_fb == true) || (C_FarmerGrp_fb == true) || (BASCJ_fb == true)) {
	                $(affiliateNode).text('1.800.254.SameSame');
	            }	            

            }
        });
    };
}(jQuery));

$(document).ready(function () {
    /* Call the plugin */
    $("span.affiliatePhone").affUpdate();
});