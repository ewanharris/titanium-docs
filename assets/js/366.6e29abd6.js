(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{1623:function(e,n,t){"use strict";t.r(n);var s=t(21),i=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"modules-cloud-pushnotifications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-pushnotifications"}},[e._v("#")]),e._v(" Modules.Cloud.PushNotifications")]),e._v(" "),t("TypeHeader"),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("For information on configuring and setting up push notifications,\nsee the "),t("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/Push_Notifications",target:"_blank",rel:"noopener noreferrer"}},[e._v("Push Notifications guide"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("The methods in this module are used to subscribe and unsubscribe from Arrow push notification\nchannels, and to generate Arrow push notifications. Push notifications are received using\nplatform-specific mechanisms:")]),e._v(" "),t("ul",[t("li",[e._v("On iOS, push notifications are received through the standard iOS push notification\nmechanism. When you register for push notifications, incoming push notifications\nare passed to the "),t("code",[e._v("callback")]),e._v(" callback. See\n"),t("type-link",{attrs:{type:"Titanium.Network.registerForPushNotifications"}},[e._v("Network.registerForPushNotifications")]),e._v("\nfor details.")],1),e._v(" "),t("li",[e._v("On Android, push notifications are received through the "),t("type-link",{attrs:{type:"Modules.CloudPush"}},[e._v("Modules.CloudPush")]),e._v(" module.\nAdd a listener for the "),t("type-link",{attrs:{type:"Modules.CloudPush.callback"}},[e._v("callback")]),e._v(" event to receive push notifications.")],1)]),e._v(" "),t("p",[e._v("To register for push notifications, you need to obtain an application-specific "),t("em",[e._v("device\ntoken")]),e._v(". To obtain a device token:")]),e._v(" "),t("ul",[t("li",[e._v("On iOS, when you successfully register for push notifications, the device token is\npassed to the "),t("code",[e._v("success")]),e._v(" callback.")]),e._v(" "),t("li",[e._v("On Android, use\n"),t("type-link",{attrs:{type:"Modules.CloudPush.retrieveDeviceToken"}},[e._v("CloudPush.retrieveDeviceToken")]),e._v(" to request\na device token. The device token is passed to the "),t("code",[e._v("success")]),e._v(" callback.")],1)]),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("h3",{attrs:{id:"subscribe-to-channel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subscribe-to-channel"}},[e._v("#")]),e._v(" Subscribe to Channel")]),e._v(" "),t("p",[e._v("This example subscribes to a push notification channel and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.PushNotifications.subscribe({\n    channel: 'friend_request',\n    device_token: myPushDeviceToken\n}, function (e) {\n    if (e.success) {\n        alert('Success');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"unsubscribe-to-channel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unsubscribe-to-channel"}},[e._v("#")]),e._v(" Unsubscribe to Channel")]),e._v(" "),t("p",[e._v("This example unsubscribes from a push notification channel and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.PushNotifications.unsubscribe({\n    channel: 'friend_request',\n    device_token: myPushDeviceToken\n}, function (e) {\n    if (e.success) {\n        alert('Success');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"notify-channel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notify-channel"}},[e._v("#")]),e._v(" Notify Channel")]),e._v(" "),t("p",[e._v("This example sends a push notification to a channel and checks the response.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Cloud.PushNotifications.notify({\n    channel: 'friend_request',\n    payload: 'Welcome to push notifications'\n}, function (e) {\n    if (e.success) {\n        alert('Success');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),t("h3",{attrs:{id:"update-subscription"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-subscription"}},[e._v("#")]),e._v(" Update Subscription")]),e._v(" "),t("p",[e._v("This example updates the user's notification subscription with the device's current\nlocation, upon successfully obtaining the device's current position.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("var latitude, longitude, \nvar pushDeviceToken; // Device token obtained earlier...\n\nTitanium.Geolocation.getCurrentPosition(function(e) {\n    if (e.error) {\n        Ti.API.error('Error: ' + e.error);\n    } else {\n        latitude = e.coords.latitude;\n        longitude = e.coords.longitude;\n        Cloud.PushNotifications.updateSubscription({\n            device_token: pushDeviceToken,\n            loc: [longitude, latitude]\n        }, function (e) {\n            if (e.success) {\n                alert('Subscription Updated.');\n            }\n            else {\n                alert(e);\n            }\n        });                        \n    }\n});\n")])])]),t("ApiDocs")],1)}),[],!1,null,null,null);n.default=i.exports}}]);