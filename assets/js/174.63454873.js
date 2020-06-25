(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{2176:function(t,e,a){"use strict";a.r(e);var i=a(21),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"pylint-can-be-used-with-pydev"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pylint-can-be-used-with-pydev"}},[t._v("#")]),t._v(" PyLint can be used with PyDev")]),t._v(" "),i("div",{staticClass:"warning custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),i("p",[i("a",{attrs:{href:"http://www.logilab.org/projects/pylint",target:"_blank",rel:"noopener noreferrer"}},[t._v("PyLint"),i("OutboundLink")],1),t._v(" is "),i("strong",[t._v("disabled by default")]),t._v(", so, if you want to activate it, you should go to the pylint preferences page, "),i("strong",[t._v("specify its location")]),t._v(" (it MUST be installed in the site-packages) and activate it (after activating it, you can clean your project on the project menu so that the files are checked with pylint, or you can do it on deltas as you go and change your files).")])]),t._v(" "),i("p",[i("img",{attrs:{src:a(783),alt:"pylint_prefs"}}),t._v("\nWell, moving on: The integration is done so that it is integrated with the eclipse builder. That means that whenever you change a file, it automatically passes pylint (if auto-build is on – check the menu Project > Build Automatically. If it is not, you can request a build when you want with Ctrl+B, so that the deltas are analyzed).")]),t._v(" "),i("p",[t._v("This, however, has a drawback: PyLint can be slow at sometimes, and if you work in big projects, it can be kind of slow (anyway, you can stop the builder process at any time if you want) - you should expect that it takes some secs. For each file, it analyzes, so, if you are working with about 700 files - like I am - it can take a long time - more than 40 minutes to get all the info on the project...")]),t._v(" "),i("p",[t._v("For these cases, I have provided an option on the maximum delta to use PyLint on. So, if you have all of the sudden 100 changed files because of a CVS update, PyLint will not be run unless the limit you specify allows it.")]),t._v(" "),i("p",[t._v("Oh, if you don't see the problems with your problems view, don't forget to enable it in the problems view filter.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(784),alt:"pylint"}})])])}),[],!1,null,null,null);e.default=o.exports},783:function(t,e,a){t.exports=a.p+"assets/img/pylint_prefs.e13e1b72.png"},784:function(t,e,a){t.exports=a.p+"assets/img/pylint.9a481fb7.png"}}]);