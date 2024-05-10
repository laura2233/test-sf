<script type='text/javascript' src='https://service.force.com/embeddedservice/5.0/esw.min.js'></script>
<script type='text/javascript'>
	var initESW = function(gslbBaseURL) {
		embedded_svc.settings.displayHelpButton = true; //Or false
		embedded_svc.settings.language = 'en-US'; //For example, enter 'en' or 'en-US'

		embedded_svc.settings.defaultMinimizedText = 'Live Chat Support'; //(Defaults to Chat with an Expert)

		embedded_svc.settings.prepopulatedPrechatFields = {  //sample variables in php below
                FirstName: 'Roger',
                LastName: 'Sandstone',
                Email: 'roger@testing.com',
                Client_ID__c: 'E12345678',
            };
			
		embedded_svc.settings.extraPrechatInfo = [
                {
                    "entityFieldMaps": [
                        {
                            "doCreate":false,
                            "doFind":true,
                            "fieldName":"LastName",
                            "isExactMatch":true,
                            "label":"Last Name"
                        }, {
                            "doCreate":false,
                            "doFind":true,
                            "fieldName":"FirstName",
                            "isExactMatch":true,
                            "label":"First Name"
                        }, {
                            "doCreate":false,
                            "doFind":true,
                            "fieldName":"Email",
                            "isExactMatch":true,
                            "label":"Email"
                        }, {
                            "doCreate":false,
                            "doFind":true,
                            "fieldName":"Client_ID__c",
                            "isExactMatch":true,
                            "label":"Client ID"
                        }
                    ],
                    "entityName":"Contact",
                    "saveToTranscript": "ContactId"
                },
                {
                    "entityName":"Case",
                    "showOnCreate": true,
                    "saveToTranscript": "CaseId",
                    "entityFieldMaps": [{
                        "doCreate": true,
                        "doFind": false,
                        "fieldName": "Origin",
                        "isExactMatch": false,
                        "label": "Origin"
                    }]
                }
            ];

            embedded_svc.settings.extraPrechatFormDetails = [{
                "label": "First Name",
                "displayToAgent": true,
                "transcriptFields": ["Chat_First_Name__c"]
            }, {
                "label": "Last Name",
                "displayToAgent": true,
                "transcriptFields": ["Chat_Last_Name__c"]
            }, {
                "label": "Email",
                "displayToAgent": true,
                "transcriptFields": ["Chat_Email__c"]
            }, {
                "label": "Client ID",
                "displayToAgent": true,
                "transcriptFields": ["Chat_Client_ID__c"]
            }, {
                "label": "Origin",
                "value": "GCEXP Chat",
                "displayToAgent": true
            }];

		embedded_svc.settings.enabledFeatures = ['LiveAgent'];
		embedded_svc.settings.entryFeature = 'LiveAgent';

		embedded_svc.init(
			'https://softerware.my.salesforce.com', //base SF url
			'https://softerware.my.site.com/dpcommunity', //community endpoint
			gslbBaseURL,
			'00Di0000000imEJ', //org id
			'Givecloud_Express_Chat', //dev name
			{
				baseLiveAgentContentURL: 'https://c.la4-c2-ia4.salesforceliveagent.com/content', //could change in the future.  SF makes the change.
				deploymentId: '572i0000000W7VP', 
				buttonId: '57331000000WBbf',
				baseLiveAgentURL: 'https://d.la4-c2-ia4.salesforceliveagent.com/chat', //could change in the future.  SF makes the change.
				eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I6e0000008SfeEAE_18ed371122d',
				isOfflineSupportEnabled: false
			}
		);
	};

	if (!window.embedded_svc) {
		var s = document.createElement('script');
		s.setAttribute('src', 'https://softerware.my.salesforce.com/embeddedservice/5.0/esw.min.js');
		s.onload = function() {
			initESW(null);
		};
		document.body.appendChild(s);
	} else {
		initESW('https://service.force.com');
	}
</script>
