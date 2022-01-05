(window.webpackJsonp=window.webpackJsonp||[]).push([[1009],{1901:function(e,t,a){"use strict";a.r(t);var s=a(21),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-api-doc-style-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-api-doc-style-guide"}},[e._v("#")]),e._v(" Titanium API Doc Style Guide")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The following style proposals are inspired by a number of sources, most notably the JavaDoc style guide in "),a("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/documentation/index-137868.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Write Doc Comments for the Javadoc Tool"),a("OutboundLink")],1),e._v(". The "),a("em",[e._v("Microsoft Guide to Technical Publications")]),e._v(" is also a useful reference for general documentation style questions.")]),e._v(" "),a("h2",{attrs:{id:"guidelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guidelines"}},[e._v("#")]),e._v(" Guidelines")]),e._v(" "),a("p",[e._v("Always use initial capital and end punctuation, even if the doc string is a fragment:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("An object describing the font properties for the label.")]),e._v(" (preferred)")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("an object describing the font properties for the label")]),e._v(" (avoid)")])])]),e._v(" "),a("p",[e._v("Object and module summaries should describe the object or module. The creator method should be listed in the description, not the summary.")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("A switch control with on and off states.")]),e._v(" (preferred)")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("A Switch is created by the method `Ti.UI.createSwitch.`")]),e._v(" (avoid)")])])]),e._v(" "),a("p",[e._v("Start method summaries with an active verb:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("Pours the whisky.")]),e._v(" (preferred)")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("This method pours the whisky.")]),e._v(" (avoid)")])])]),e._v(" "),a("p",[e._v("Use 3rd person declarative instead of 2nd person imperative:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("Adds a child to this view.")]),e._v(" (preferred)")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Add a child to this view.")]),e._v(" (avoid)")])])]),e._v(" "),a("p",[e._v('When referring to the present object, use "this" not "the."')]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("Multiplies this matrix by the supplied matrix, `m1`.")]),e._v(" (preferred)")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Multiplies the matrix by the supplied matrix, `m1`.")]),e._v(" (avoid)")])])]),e._v(" "),a("p",[e._v("When methods or properties can take a constant value, identify the set of constant values and where they are defined. If the set of possible values is small, the values can be enumerated.")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("Specify one of the `TEXT_ALIGNMENT` constants from <Titanium.UI>.")]),e._v(" (preferred)")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Specify one of `SERVED_ROCKS` or `SERVED_NEAT` from <Titanium.Beverage>.")]),e._v(" (preferred)")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Specify one of [pe:SERVED_ROCKS](Titanium.Beverage.SERVED_ROCKS) or [pe:SERVED_NEAT] (Titanium.Beverage.SERVED_NEAT).")]),e._v(" (preferred)")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Specify using a constant from <Titanium.UI>.")]),e._v("(avoid)")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Specify one of `SERVED_ROCKS` or `SERVED_NEAT`.")]),e._v(" (avoid, unless the constants are defined in the same object/module)")])])]),e._v(" "),a("p",[e._v("Use code font for keywords and names. This includes:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("JavaScript keywords")])]),e._v(" "),a("li",[a("p",[e._v("method names")])]),e._v(" "),a("li",[a("p",[e._v("property names")])]),e._v(" "),a("li",[a("p",[e._v("parameter names")])]),e._v(" "),a("li",[a("p",[e._v("module and object names")])]),e._v(" "),a("li",[a("p",[e._v("variable names")])]),e._v(" "),a("li",[a("p",[e._v("constants")])]),e._v(" "),a("li",[a("p",[e._v("code samples")]),e._v(" "),a("p",[e._v("When used inline, use `backticks` for objects that should be in code font. (When you add inline links to Titanium types, they are automatically set in code font.) For code samples, indent the entire code sample 4 spaces to format as a Markdown code block.")])])]),e._v(" "),a("p",[e._v("Defining a constant: Need a consistent style here. We should describe both what the constant does, and (if possible) where it's used. We don't include a special annotation for constants, but we do use a consistent style for them (ALL_CAPS). It is not necessary to include the term \"constant\" in the summary unless it makes the description more clear.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("summary: "),a("code",[e._v("Ease-in to the animation. See <Titanium.UI.Animation> for a discussion of animation curves.")]),e._v(" (preferred)")])]),e._v(" "),a("li",[a("p",[e._v("summary: "),a("code",[e._v('Constant value representing an "ease-in" animation curve.')]),e._v(" (ok)")])]),e._v(" "),a("li",[a("p",[e._v("summary: "),a("code",[e._v("animation curve constant")]),e._v(" (avoid)")])])]),e._v(" "),a("p",[e._v("Using inline links: Inline links are very useful, but excessive use detracts from readability. Use them where they add information not already supplied by the YAML markup. For example, if the return type of a method is Titanium.Blob, the description text can just use code style – `Blob` – instead of an inline link.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("summary: Returns the image as a `Blob`.\nreturns:\n    type: Titanium.Blob\n")])])])]),e._v(" "),a("p",[e._v("When referring to a given type multiple times in the same description, only one reference (usually the first) should be an inline link.")]),e._v(" "),a("p",[e._v("Using external links: Make sure that the linked content is useful. When linking to content outside of the API docs, introduce\nthe link so users know why they should follow the link. Avoid anonymous inline links.")]),e._v(" "),a("p",[e._v("Preferred:")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Titanium binding for an Android activity. For more information on Android activities, see the\n[Activity Reference Page](http://developer.android.com/reference/android/app/Activity.html) on the Android Developer site.\n")])])])]),e._v(" "),a("p",[e._v("Preferred:")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("For more information on Android Activity, see:\n\n-  [developer.android.com/reference/android/app/Activity.html](http://developer.android.com/reference/android/app/Activity.html)}} (preferred)\n")])])])]),e._v(" "),a("p",[e._v("Avoid:")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Titanium binding for an an [Android Activity](http://developer.android.com/reference/android/app/Activity.html).\n")])])])]),e._v(" "),a("h2",{attrs:{id:"formatting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formatting"}},[e._v("#")]),e._v(" Formatting")]),e._v(" "),a("p",[e._v("For ease of reviewing pull requests on GitHub, TDoc files should be line-wrapped at 100 characters.")]),e._v(" "),a("p",[e._v("For legibility, vertical whitespace may be added before a YAML key that introduces a YAML array, and before each array element:")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\nproperties:\n\n  - name: backgroundColor\n    summary: Background color for this view.\n    type: String\n\n  - name: enabled\n    summary: Indicates whether the view is enabled.\n    type: Boolean\n")])])])]),e._v(" "),a("p",[e._v("Vertical whitespace should not be used "),a("em",[e._v("inside")]),e._v(" a YAML array element:")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n  # Avoid this format\n  - name: enabled\n\n    summary: Indicates whether the view is enabled.\n    type: Boolean\n")])])])]),e._v(" "),a("p",[e._v('JSON-style arrays. Where JSON-style arrays are used (for example, in "platforms:" or when listing multiple types a property can hold), whitespace between items is desirable for ease of reading:')]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\nplatforms: [android, iphone, ipad]\n")])])])]),e._v(" "),a("h2",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[e._v("#")]),e._v(" Links")]),e._v(" "),a("p",[e._v("When linking to guides or videos on docs.appcelerator.com from the API docs, use the full URL for the doc site, with the version replaced with `latest` and `index.html` removed from the path. When generating the JSDuck version of the docs for the doc site, these links are translated to local links. For other formats, the link will work as written. Entering the URL in a browser should redirect you to the latest version of the guide.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n[Quick Start](http://docs.appcelerator.com/platform/latest/#!/guide/Quick_Start)\n")])])])]),e._v(" "),a("p",[e._v("Do not use the versioned link, which will get outdated, or include `index.html`, which breaks the redirection mechanism.")]),e._v(" "),a("p",[e._v("Avoid:")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n[Quick Start](http://docs.appcelerator.com/platform/2.1/index.html#!/guide/Quick_Start)\n[Quick Start](http://docs.appcelerator.com/platform/latest/index.html#!/guide/Quick_Start)\n")])])])]),e._v(" "),a("h2",{attrs:{id:"inline-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inline-html"}},[e._v("#")]),e._v(" Inline HTML")]),e._v(" "),a("p",[e._v("Markdown format allows you to use inline HTML. This is especially useful for adding tables, which Markdown doesn't support itself. When adding inline HTML:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Always use "),a("strong",[e._v("lowercase")]),e._v(" tag names. So use "),a("code",[e._v("<table>")]),e._v(", "),a("code",[e._v("<code>")]),e._v(", not "),a("code",[e._v("<TABLE>")]),e._v(", "),a("code",[e._v("<CODE>")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("All tags must be closed, XHTML style. So use "),a("code",[e._v("<br />")]),e._v(", "),a("code",[e._v("<td>A Table Cell</a>")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("When adding an inline table, much formatting is overridden by JSDuck. Use the "),a("code",[e._v("doc-table")]),e._v(" CSS class to get some reasonable default formatting ("),a("code",[e._v('<table class="doc-table">')]),e._v(").")])])]),e._v(" "),a("h2",{attrs:{id:"deprecating-and-removing-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecating-and-removing-apis"}},[e._v("#")]),e._v(" Deprecating and Removing APIs")]),e._v(" "),a("p",[e._v("When deprecating an API, add the "),a("code",[e._v("deprecated")]),e._v(" tag. You must specify a "),a("code",[e._v("since")]),e._v(" version. You should specify a "),a("code",[e._v("notes")]),e._v(" field directing the user to the replacement API or APIs.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('deprecated:\n    since: "7.0.0"\n    notes: Use [SOMETHING_ELSE](Titanium.UI.SOMETHING_ELSE) instead.\n')])])]),a("p",[e._v("The "),a("code",[e._v("removed")]),e._v(" version should "),a("strong",[e._v("NOT")]),e._v(" be specified until the API is actually removed.")]),e._v(" "),a("p",[e._v("When the API is removed, add the "),a("code",[e._v("removed")]),e._v(" version to the "),a("code",[e._v("deprecated")]),e._v(" tag. "),a("strong",[e._v("DO NOT")]),e._v(" remove the API from the docs.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('deprecated:\n    since: "7.0.0"\n    notes: Use [SOMETHING_ELSE](Titanium.UI.SOMETHING_ELSE) instead.\n    removed: "8.0.0"\n')])])]),a("p",[e._v("Removed APIs should stay in the docs (marked as removed) for a full deprecation cycle. That is, if APIs deprecated in release A are "),a("em",[e._v("removed")]),e._v(" in release B, the APIs "),a("em",[e._v("removed")]),e._v(" in release A can be removed from the doc in release B.")]),e._v(" "),a("h2",{attrs:{id:"tips-and-tricks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips-and-tricks"}},[e._v("#")]),e._v(" Tips and Tricks")]),e._v(" "),a("p",[e._v("Colon (😃 characters won't pass validation in normal YAML text fields, and YAML text fields can't start with a backtick (`) character. To include one of these characters in a summary or description field, use the YAML chunking operator (|) to add free-form markdown text:")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("- description: |\n      Specify one of: <Titanium.Beverage.WHISKY_ISLAY>, <Titanium.Beverage.WHISKY_HIGHLAND>, <Titanium.Beverage.WHISKY_LOWLAND>.\n\n- summary: |\n      `true` if the current view is awesome.\n")])])])]),e._v(" "),a("p",[e._v('Optional parameters: specify optional method parameters by specifying "'),a("code",[e._v("optional: true")]),e._v('" and adding a default value.')]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("parameters:\n  - name: cubes\n    summary: Number of ice cubes.\n    type: Number\n    optional: true\n    default: 0\n")])])])]),e._v(" "),a("p",[e._v("Platform-specific parameters: TDoc (and JSCA) don't allow for a parameter to be platform-specific. If one platform adds a parameter,\nother platforms must accept or ignore that parameter. Describe platform limitations in the summary.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  - name: glass\n    summary: Glass type, one of <Titanium.Beverage.GLASS_ROCKS> or <Titanium.Beverage.GLASS_COCKTAIL>. Only used on Android.\n    optional: true\n    default: Titanium.Beverage.GLASS_ROCKS\n")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);