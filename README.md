AffiliateID Phone No. Plugin
==========
Phone numbers are determined by an affiliate parameter in the URL then updated accordingly. Default phone number should rest within the markup. If custom phone numbers are also intended for mobile devices, nest the conditions where windowWidth is less than or equal to 752.

<strong>DEPENDENCIES:</strong> 
- jquery.min.js
- HTML span tags should be created with, class="affiliatePhone" as a property of that node.

<strong>USAGE (JS):</strong> 
<pre>
<code>
$(document).ready(function () {
    /* Call the plugin */
    $("span.affiliatePhone").affUpdate();
});
</code>
</pre>

<strong>Test URL to append:</strong> 
- /?AffiliateID=BPN_Generic
