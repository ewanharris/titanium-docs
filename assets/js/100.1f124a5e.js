(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{2709:function(e,t,s){"use strict";s.r(t);var a=s(21),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"configuring-cloud-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-cloud-services"}},[e._v("#")]),e._v(" Configuring Cloud Services")]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("Configuration")]),e._v(" tab lets you do the following:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("View Cloud application keys")])]),e._v(" "),a("li",[a("p",[e._v("Configure application settings for Cloud services")])]),e._v(" "),a("li",[a("p",[e._v("Provide SMTP, or "),a("a",{attrs:{href:"http://messagegears.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Message Gears"),a("OutboundLink")],1),e._v(" account information to send e-mails for notifications")])])]),e._v(" "),a("p",[e._v("Before configuring Cloud settings, make sure you select the correct environment from the "),a("strong",[e._v("Environment")]),e._v(" menu. The changes you make in the "),a("strong",[e._v("Configuration")]),e._v(" tab only affects the selected environment.")]),e._v(" "),a("h2",{attrs:{id:"keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keys"}},[e._v("#")]),e._v(" Keys")]),e._v(" "),a("p",[e._v("Click the "),a("strong",[e._v("Keys")]),e._v(" tab to display the keys. Click "),a("strong",[e._v("Show")]),e._v(" to display a key. Use the App Key to make requests to the Cloud service.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(532),alt:"keys_latest"}})]),e._v(" "),a("h2",{attrs:{id:"settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[e._v("#")]),e._v(" Settings")]),e._v(" "),a("p",[e._v("Click the "),a("strong",[e._v("Settings")]),e._v(" tab to configure application settings for Cloud services.")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Description")]),e._v(": Enter a Cloud application description.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Friend Request Type")]),e._v(": Configures the behavior for the "),a("RouterLink",{attrs:{to:"/arrowdb/latest/#!/api/Friends"}},[e._v("Friends")]),e._v(" objects. Select either:")],1),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Two Way")]),e._v(" (default): Friend each other (Facebook).")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("One Way")]),e._v(": Follow a friend (Twitter).")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("New User Email Verification")]),e._v(": With this option enabled, new users must provide a valid email address and prove they can access it before their account is activated. You must have your SMTP settings completed before this setting is enabled.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Allow User Creation")]),e._v(": With this option disabled, app users can only be created through this administrative website.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(533),alt:"settings_latest"}})])]),e._v(" "),a("li",[a("p",[e._v("Click "),a("strong",[e._v("Save")]),e._v(" to save any setting changes you made.")])])]),e._v(" "),a("h2",{attrs:{id:"email"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#email"}},[e._v("#")]),e._v(" Email")]),e._v(" "),a("p",[e._v("On the "),a("strong",[e._v("Email")]),e._v(" configuration tab, you can configure Dashboard to send email using SMTP or Message Gears on behalf of your application. To send an email, you use the "),a("RouterLink",{attrs:{to:"/arrowdb/latest/#!/api/Emails-method-email_from_template"}},[e._v("custom_mailer/email_from_template.json")]),e._v(" REST method, the "),a("a",{attrs:{href:"#!/api/Modules.Cloud.Emails-method-send"}},[e._v("Cloud.Emails.send()")]),e._v(" method, or the equivalent native "),a("a",{attrs:{href:"http://docs.appcelerator.com/aps-sdk-apidoc/latest/ios/Classes/APSEmails.html#//api/name/send:withBlock:",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"http://docs.appcelerator.com/aps-sdk-apidoc/latest/android/com/appcelerator/aps/APSEmails.html#send(java.util.Map,%20com.appcelerator.aps.APSResponseHandler)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android"),a("OutboundLink")],1),e._v(" method. To send an email, you must specify an email template that you previously created in Dashboard (see "),a("RouterLink",{attrs:{to:"/guide/Appcelerator_Dashboard/Appcelerator_Dashboard_Guide/Managing_Applications/Managing_Mobile_Backend_Services_Datasources/Managing_Mobile_Backend_Services_data_objects/Managing_Email_Templates/"}},[e._v("Managing Email Templates")]),e._v(" for details).")],1),e._v(" "),a("p",[a("strong",[e._v("Notes:")])]),e._v(" "),a("ul",[a("li",[e._v("If not specified, the "),a("strong",[e._v("End Point")]),e._v(" URL for Message Gears defaults to "),a("strong",[e._v("https://api.messagegears.net/3.1/WebService")]),e._v(".")])]),e._v(" "),a("p",[a("strong",[e._v("To configure your application to send an email:")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("In the "),a("strong",[e._v("Provider")]),e._v(" field, select either "),a("strong",[e._v("SMTP")]),e._v(" or "),a("strong",[e._v("Message Gears")]),e._v(" and enter your SMTP or Message Gears server or account settings.")])]),e._v(" "),a("li",[a("p",[e._v("For SMTP, complete the "),a("strong",[e._v("Username")]),e._v(", "),a("strong",[e._v("Password")]),e._v(", "),a("strong",[e._v("SMTP Address")]),e._v(", and "),a("strong",[e._v("Port")]),e._v(" fields and then make the "),a("strong",[e._v("Authentication")]),e._v(", "),a("strong",[e._v("Use Default Sender")]),e._v(", "),a("strong",[e._v("Test Mode")]),e._v(", "),a("strong",[e._v("TLS")]),e._v(" selections.")])]),e._v(" "),a("li",[a("p",[e._v("For MessageGears, complete the "),a("strong",[e._v("Account ID")]),e._v(", "),a("strong",[e._v("API Key")]),e._v(", "),a("strong",[e._v("Sender Email")]),e._v(", "),a("strong",[e._v("Sender Name")]),e._v(", and (optionally) "),a("strong",[e._v("Endpoint")]),e._v(" fields and then make the "),a("strong",[e._v("Test Mode")]),e._v(" selection.")])]),e._v(" "),a("li",[a("p",[e._v("To have all sent emails sent to a specified email for testing purposes:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("In the "),a("strong",[e._v("Test Mode")]),e._v(" field, select "),a("strong",[e._v("Enable")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("In the "),a("strong",[e._v("Administrator's Email")]),e._v(" field, enter the email address where emails should be sent.")])])])]),e._v(" "),a("li",[a("p",[e._v("Click "),a("strong",[e._v("Save")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:s(534),alt:"email_latest"}})])])])])}),[],!1,null,null,null);t.default=o.exports},532:function(e,t,s){e.exports=s.p+"assets/img/keys_latest.b83d4846.png"},533:function(e,t,s){e.exports=s.p+"assets/img/settings_latest.5c8784f1.png"},534:function(e,t,s){e.exports=s.p+"assets/img/email_latest.548337d7.png"}}]);