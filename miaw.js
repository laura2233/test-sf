	function initEmbeddedMessaging() {
		try {
			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'

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

window.addEventListener("onEmbeddedMessagingReady", () => {
  console.log("Received the onEmbeddedMessagingReady event…");

  // The JavaScrip API is ready for calls.
});
