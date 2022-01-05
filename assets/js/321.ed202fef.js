(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{1107:function(e,t,n){"use strict";n.r(t);var o=n(21),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"apsconnectiondelegate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apsconnectiondelegate"}},[e._v("#")]),e._v(" APSConnectionDelegate")]),e._v(" "),n("TypeHeader"),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("The APSConnectionDelegate protocol is an extension of the NSURLConnectionDelegate protocol.")]),e._v(" "),n("p",[e._v("Although all methods in this protocol are optional, the connection delegate must implement at least one of the methods to\nparticipate in the authentication and resource management.")]),e._v(" "),n("p",[e._v("The deprecated methods as defined by the NSURLConnectionDelegate protocol are not supported.")]),e._v(" "),n("p",[e._v("In addition to the methods defined in the NSURLConnectionDelegate protocol this protocol defines one additional method.")]),e._v(" "),n("p",[n("code",[e._v("-(BOOL)willHandleChallenge:(NSURLAuthenticationChallenge *)challenge forConnection:(NSURLConnection *)connection")]),e._v(".")]),e._v(" "),n("p",[e._v("This method is called on the connection delegate only if it also implements the\n"),n("code",[e._v("connection:willSendRequestForAuthenticationChallenge:")]),e._v(" method of the NSURLConnectionDelegate protocol.\nReturn "),n("code",[e._v("true")]),e._v(" if the connection delegate wants to handle this challenge.\nReturn "),n("code",[e._v("false")]),e._v(" if the default delegate will handle this challenge.")]),e._v(" "),n("p",[e._v("If the connection delegate does not implement this method but implements "),n("code",[e._v("connection:willSendRequestForAuthenticationChallenge:")]),e._v(", the return\nvalue is assumed to be "),n("code",[e._v("true")]),e._v(" and all challenges will be forwarded to the connection delegate.")]),e._v(" "),n("ApiDocs")],1)}),[],!1,null,null,null);t.default=a.exports}}]);