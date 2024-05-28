	function initEmbeddedMessaging() {
		try {
			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
			embeddedservice_bootstrap.settings.chatButtonPosition = "150px,150px";
   			embeddedservice_bootstrap.init(
				'00D6t000001Qvai',
				'DP_Chat',
				'https://softerware--full.sandbox.my.site.com/ESWDPChat1655493128387',
				{
					scrt2URL: 'https://softerware--full.sandbox.my.salesforce-scrt.com'
				}
			);
		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};

window.addEventListener("onEmbeddedMessagingReady", e => {
  embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({"Client Id" : "E9999", "Userid" : "rsandstone", "In_product_URL" : document.URL});
  embeddedservice_bootstrap.prechatAPI.setVisiblePrechatFields({
    // List the pre-chat field names with the value and whether
    // it's editable in the pre-chat form.
    "_firstName": {
      "value": "Roger",
      "isEditableByEndUser": true
    },
    "_lastName": {
      "value": "Sandstone",
      "isEditableByEndUser": true
    },
    "_email": {
      "value": "roggie@email.com",
      "isEditableByEndUser": false
    },  
  });
});
