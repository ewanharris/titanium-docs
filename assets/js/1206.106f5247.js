(window.webpackJsonp=window.webpackJsonp||[]).push([[1206],{2457:function(t,a,e){"use strict";e.r(a);var s=e(21),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"localizing-a-ruble"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#localizing-a-ruble"}},[t._v("#")]),t._v(" Localizing a Ruble")]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("To allow locale-specific translations of UI strings, rubles use a system that is very similar to that used by Rails applications.")]),t._v(" "),e("h2",{attrs:{id:"locales-directories"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#locales-directories"}},[t._v("#")]),t._v(" Locales Directories")]),t._v(" "),e("p",[t._v("Any string that may need a translation is extracted out to a file in "),e("strong",[e("ruble",[t._v("/config/locales/"),e("locale",[t._v(".yml")])],1)],1)]),t._v(" "),e("p",[t._v("Individual translations are stored in YML files in the "),e("strong",[e("ruble",[t._v("/config/locales/")])],1),t._v(" directory. The filename does not need to match any language or locale, but it is helpful to do so. So an "),e("strong",[t._v("en.yml")]),t._v(" file should hold the English translations of the UI strings, but it is not required.")]),t._v(" "),e("h2",{attrs:{id:"externalizing-the-strings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#externalizing-the-strings"}},[t._v("#")]),t._v(" Externalizing the Strings")]),t._v(" "),e("p",[t._v("Inside the ruble code, to allow for translations, we externalize the string. To do so, we replace usage of the string with a call to the "),e("strong",[t._v("t(key, variables = {})")]),t._v(" method.")]),t._v(" "),e("p",[t._v("For example, we have the following command defined:")]),t._v(" "),e("p",[e("strong",[t._v("commands/example.rb")])]),t._v(" "),e("div",{staticClass:"language-ruby extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ruby"}},[e("code",[t._v("command "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("c"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),e("p",[t._v('We would replace the "Example" string with a new key representing the string, and a call to the '),e("strong",[t._v("t")]),t._v(" translate method. That string gets moved into the English translation pack in "),e("strong",[t._v("config/locales/en.yml")]),t._v(", as a key-pair. The key is the symbol we chose to replace the string, and the value is the string we replaced.")]),t._v(" "),e("p",[e("strong",[t._v("commands/example.rb")])]),t._v(" "),e("div",{staticClass:"language-ruby extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ruby"}},[e("code",[t._v("command t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":example")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("c"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),e("p",[e("strong",[t._v("config/locales/en.yml")])]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("en")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("example")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example"')]),t._v("\n")])])]),e("p",[t._v('A quick note here, the root "en:" key in the translation pack groups the indented key-value pairs as belonging to the '),e("strong",[t._v("en")]),t._v(" (or English) language. Simply naming the file "),e("strong",[t._v("en.yml")]),t._v(" will not associate the enclosed strings as being English.")]),t._v(" "),e("h3",{attrs:{id:"strings-with-variables-inside-them"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#strings-with-variables-inside-them"}},[t._v("#")]),t._v(" Strings with variables inside them")]),t._v(" "),e("p",[t._v("If the string is not simply a static value but inserts values inside, the full signature form of the "),e("strong",[t._v("t(key, variables = {})")]),t._v(" method should be used.")]),t._v(" "),e("p",[e("strong",[t._v("commands/variables.rb")])]),t._v(" "),e("div",{staticClass:"language-ruby extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ruby"}},[e("code",[t._v("command "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Power of '),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("number"),e("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("c"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),e("p",[t._v('We would replace the "Power of #{number}" string with a new key representing the string, and a call to the '),e("strong",[t._v("t")]),t._v(" translate method. That string gets moved into the English translation pack in "),e("strong",[t._v("config/locales/en.yml")]),t._v(", as a key-pair. The key is the symbol we chose to replace the string, and the value is the string we replaced. Note that the string interpolation gets changed to a "),e("strong",[t._v("{variable_name}")]),t._v(" syntax, and the key in the argument hash must match the "),e("strong",[t._v("variable_name")]),t._v(".")]),t._v(" "),e("p",[e("strong",[t._v("commands/variables.rb")])]),t._v(" "),e("div",{staticClass:"language-ruby extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ruby"}},[e("code",[t._v("command t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":complicated")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":number")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("c"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),e("p",[e("strong",[t._v("config/locales/en.yml")])]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("en")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("example")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("complicated")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Power of {number}"')]),t._v("\n")])])]),e("h2",{attrs:{id:"translation-lookups"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#translation-lookups"}},[t._v("#")]),t._v(" Translation lookups")]),t._v(" "),e("p",[t._v("When looking up translations, we take the current locale and attempt to match the full "),e("strong",[e("language",[t._v("-"),e("country")],1)],1),t._v(" locale strings first, then "),e("strong",[e("locale")],1),t._v(", and finally falling back to the "),e("strong",[t._v("en")]),t._v(" locale.")]),t._v(" "),e("p",[t._v("So if our locale is "),e("strong",[t._v("en_US")]),t._v(", we will try to find "),e("strong",[t._v("en-US")]),t._v(", then "),e("strong",[t._v("en")]),t._v(" strings.")]),t._v(" "),e("p",[t._v("If our locale is "),e("strong",[t._v("es_ES")]),t._v(", we'll try "),e("strong",[t._v("es-ES")]),t._v(", then "),e("strong",[t._v("es")]),t._v(", then "),e("strong",[t._v("en")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"contributing-a-translation-pack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contributing-a-translation-pack"}},[t._v("#")]),t._v(" Contributing a translation pack")]),t._v(" "),e("p",[t._v("If you would like to contribute a set of translations, there are a couple of different ways to do so.")]),t._v(" "),e("h3",{attrs:{id:"forking-the-ruble"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#forking-the-ruble"}},[t._v("#")]),t._v(" Forking the ruble")]),t._v(" "),e("p",[t._v("Ideally, the first step to take is to fork the ruble to which you're contributing.")]),t._v(" "),e("p",[t._v("The majority of the rubles can be found at "),e("a",{attrs:{href:"https://github.com/aptana",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/aptana"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("We'll use the Zen Coding ruble as an example. It is found at "),e("a",{attrs:{href:"https://github.com/aptana/zen-coding.ruble",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/aptana/zen-coding.ruble"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("On that page, click the Fork button in the upper right, and you'll be able to clone a fork of the ruble for your modifications. You can now grab the clone to work with, and once you're satisfied with your changes, you can then issue a pull request to us to incorporate your changes.")]),t._v(" "),e("h3",{attrs:{id:"adding-a-new-translation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-translation"}},[t._v("#")]),t._v(" Adding a new translation")]),t._v(" "),e("p",[t._v("Inside the ruble, you'll want to add a file to hold your translations (assuming that the language is not yet supported). We'll use Spanish as an example. We'd add a file at "),e("strong",[t._v("zen-coding.ruble/config/locales/es.yml")])]),t._v(" "),e("p",[t._v("If there's already an English file, the easiest way to start is to copy the "),e("strong",[t._v("zen-coding.ruble/config/locales/en.yml")]),t._v(" to "),e("strong",[t._v("zen-coding.ruble/config/locales/es.yml")]),t._v(" file.")]),t._v(" "),e("p",[t._v("Then we'll change the root "),e("strong",[t._v("en")]),t._v(" key in the file to "),e("strong",[t._v("es")]),t._v(". After that, it's simply a matter of changing the string values (the right-hand value of the indented pairs) to their Spanish equivalents.")])])}),[],!1,null,null,null);a.default=n.exports}}]);