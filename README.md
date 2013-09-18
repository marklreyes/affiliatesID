<strong>AffiliateID Phone No. Plugin</strong>

Phone numbers are determined by an affiliate parameter in the URL then updated accordingly. Default phone number should rest within the markup. If custom phone numbers are also intended for mobile devices, nest the conditions where windowWidth is less than or equal to 752.

DEPENDENCIES:
- jquery.min.js
- HTML span tags should be created with, class="affiliatePhone" as a property of that node.

USAGE (JS): 
<pre>
<code>
$(document).ready(function () {
    /* Call the plugin */
    $("span.affiliatePhone").affUpdate();
});
</code>
</pre>

Test URL to append: 
- /?AffiliateID=BPN_Generic
