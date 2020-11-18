(window.webpackJsonp=window.webpackJsonp||[]).push([[981],{1667:function(e,t,a){"use strict";a.r(t);var n=a(21),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"java-coding-standards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-coding-standards"}},[e._v("#")]),e._v(" Java Coding Standards")]),e._v(" "),a("p",[e._v('The purpose of this document is to lay out the expected coding style for Java source code used by Appcelerator. The rules laid out in this document apply to all Java source code written internally or accepted from community contributions. The coding standards laid out in this document are a modified version of the official Oracle coding standards for Java. This document only lists differences from the base standard, and certain aspects that should be highlighted. Furthermore, this document and the base standard cover not just syntax style, but some general "best practice" techniques that should also be adhered to.')]),e._v(" "),a("p",[a("strong",[e._v("Failure on any of the points outlined in the base standard or this document are grounds for refusing a PR until updates are made.")])]),e._v(" "),a("p",[e._v("Baseline standard we are working from (READ THE COMPLETE BASELINE STANDARD BEFORE CONTINUING):")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/documentation/codeconvtoc-136057.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.oracle.com/technetwork/java/javase/documentation/codeconvtoc-136057.html"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Appcelerator specific points:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Tabs are to be used for indentation rather than spaces.")])]),e._v(" "),a("li",[a("p",[e._v("In the event that a translation from tabs to spaces is required (beyond personal taste in how an editor displays source), there should 4 spaces per tab.")])]),e._v(" "),a("li",[a("p",[e._v("Do not use multiple declarations per line.")])]),e._v(" "),a("li",[a("p",[e._v("Always use a single space rather than tab in between the type and variable name in declarations.")])]),e._v(" "),a("li",[a("p",[e._v("Compound statements should always use parentheses. For example:")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("return (myVar ? myVar : defaultVar);\nint x = (a ? (y = 2) : z);\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[a("strong",[a("em",[e._v("if")])]),e._v(", "),a("strong",[a("em",[e._v("while")])]),e._v(" and "),a("strong",[a("em",[e._v("for")])]),e._v(" control structures must ALWAYS have braces around their contents")])]),e._v(" "),a("li",[a("p",[e._v("There should usually be a empty line before the opening line of a "),a("strong",[a("em",[e._v("if")])]),e._v(", "),a("strong",[a("em",[e._v("else if")])]),e._v(" or "),a("strong",[a("em",[e._v("else")])]),e._v(" check for readability. The exception to this rule is a value assignment that is core to the control statement. For example:")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("a = true; // boolean previously set to false somewhere else\nif (a) {\n     // do neat things here\n}\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[a("p",[e._v("Empty "),a("strong",[a("em",[e._v("for")])]),e._v(" and "),a("strong",[a("em",[e._v("while")])]),e._v(" loops should have empty braces instead of the braces being purely omitted.")])]),e._v(" "),a("li",[a("p",[a("strong",[a("em",[e._v("do while")])]),e._v(' loops should have a empty line between the last statement the "} while (condition)" line.')])]),e._v(" "),a("li",[a("p",[a("strong",[a("em",[e._v("switch")])]),e._v(" statements should have a empty line between each "),a("strong",[a("em",[e._v("case")])]),e._v(" statement. For example:")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("switch (condition) {\ncase ABC:\n    statements;\n    /* falls through */\n\ncase DEF:\n    statements;\n    break;\n\ncase XYZ:\n    statements;\n    break;\n\ndefault:\n    statements;\n    break;\n}\n")])])]),a("ol",{attrs:{start:"11"}},[a("li",[e._v("Acronyms should NOT be capitalized inside method or variable names. For example:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("int HTTPGETFired = 0; // this is bad\n\nint httpGetFired = 0; // this is good\n")])])]),a("ol",{attrs:{start:"12"}},[a("li",[e._v("Use meaningful class, method and variable names. The goal here is for the role of a method or variable to be clear when reading the name (not after reading to source to see what a method does or how a variable is used). For example:")])]),e._v(" "),a("p",[a("strong",[e._v("Bad Variable Names")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('int myVar; // glad you have a var, why does it exist?\n\nint done; // unless the positioning of this variable makes it overwhelmingly clear as to what "done" means then this is bad. even if positioned within a small block, a better name can likely be identified\n\nint shouldFire; // fire what? unless this is in the "MyCannon" class, be more specific\n\nClass Container (Handler, Processor also work); // failboat\n\netc. etc. etc.\n')])])]),a("ol",{attrs:{start:"13"}},[a("li",[a("p",[e._v("Regarding variable placement - read section 6.3 of the base standard. Once finished read it a second time for reinforcement. 😉")])]),e._v(" "),a("li",[a("p",[e._v("Regarding parentheses - read section 10.5.1 of the base standard. Same as #13.")])]),e._v(" "),a("li",[a("p",[e._v("Documentation. Monsters eat a puppy every time you fail to document properly. "),a("strong",[e._v("BE NICE TO PUPPIES AND DOCUMENT THE CODE")]),e._v(".\nKeep in mind that when writing comments, the entire goal is to quickly provide the needed information for a Class, variable or method to someone who might be unfamiliar with:")])])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The overall purpose of the code in question.")])]),e._v(" "),a("li",[a("p",[e._v("Any relevant architecture that ties into understanding the purpose of the code.")])]),e._v(" "),a("li",[a("p",[e._v("The original mindset and justification that went into creating the code.")])]),e._v(" "),a("li",[a("p",[e._v('Any "gotchas" that need to be kept in mind.')])])]),e._v(" "),a("p",[e._v("If a developer should need to talk to the original developer who wrote the code in order to quickly understand the overall code structure and purpose, then the clarity of the code and level of documentation should be re-evaluated.\nIn General, the baseline standard outlines the documentation structure for a class and when documentation is needed but it will be elaborated on here:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Every java source file without exception should have a file level comment at the top (baseline standard 3.1.1).")])]),e._v(" "),a("li",[a("p",[e._v("Every class without exception should have a class documentation block (baseline standard 3.1.3).")])]),e._v(" "),a("li",[a("p",[e._v("If the class has enough complexity to warrant having a implementation block, then the failure to include one should NOT be seen as optional (baseline standard 3.1.3).")])]),e._v(" "),a("li",[a("p",[e._v("A method documentation block should only be omitted when the purpose of the method is overwhelmingly clear to anyone who looks at it.")])]),e._v(" "),a("li",[a("p",[e._v("A variable comment should be used if there is some larger scope to the variable that may not be clear. For example, if the variable is used locally but changing it can also drive changes in other classes or areas of the code base.")])])]),e._v(" "),a("p",[e._v("While documenting, the choice between standard comments and Javadoc needs to be made on a case by case basis. In general, if the comment is for something that is not private then Javadoc should be used so that the comments are available as eclipse comment popups when looking at public or protected methods and variables.")]),e._v(" "),a("p",[e._v("NOTE: The guidelines in this document may change in the future if deemed appropriate.")])])}),[],!1,null,null,null);t.default=o.exports}}]);