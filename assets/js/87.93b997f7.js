(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{2903:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"titanium-ui-emaildialog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-emaildialog"}},[t._v("#")]),t._v(" Titanium.UI.EmailDialog")]),t._v(" "),e("TypeHeader"),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Android")]),t._v(" "),e("th",[t._v("iOS")]),t._v(" "),e("th",[t._v("Windows")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("img",{attrs:{src:s(452),alt:"Android"}})]),t._v(" "),e("td",[e("img",{attrs:{src:s(453),alt:"iOS"}})]),t._v(" "),e("td",[e("img",{attrs:{src:s(454),alt:"Windows"}})])])])]),t._v(" "),e("p",[t._v("The Email Dialog is created with the "),e("type-link",{attrs:{type:"Titanium.UI.createEmailDialog"}},[t._v("Titanium.UI.createEmailDialog")]),t._v(" method. The user needs to\nregister an e-mail account on the device in order to open the dialog.  The dialog will not\nopen when there is not a registered e-mail account.")],1),t._v(" "),e("p",[e("strong",[t._v("iOS Platform Notes")])]),t._v(" "),e("p",[t._v("On iOS, you cannot test the e-mail dialog on the iOS Simulator. Test the email dialog on device.")]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("h3",{attrs:{id:"simple-email-dialog-with-attachment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simple-email-dialog-with-attachment"}},[t._v("#")]),t._v(" Simple Email Dialog with Attachment")]),t._v(" "),e("p",[t._v("Create and send an email with a file attachment.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" emailDialog "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEmailDialog")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nemailDialog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subject "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello from Titanium"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nemailDialog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toRecipients "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo@yahoo.com'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nemailDialog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("messageBody "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<b>Appcelerator Titanium Rocks!</b>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Filesystem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cricket.wav'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nemailDialog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAttachment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nemailDialog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ApiDocs")],1)}),[],!1,null,null,null);a.default=n.exports},452:function(t,a,s){t.exports=s.p+"assets/img/emaildialog_android.2cdcc136.png"},453:function(t,a,s){t.exports=s.p+"assets/img/emaildialog_ios.b2d46dc8.png"},454:function(t,a,s){t.exports=s.p+"assets/img/emaildialog_wp.8e4d352d.png"}}]);