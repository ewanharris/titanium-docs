(window.webpackJsonp=window.webpackJsonp||[]).push([[1068],{1006:function(e,t,n){"use strict";n.r(t);var a=n(21),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"event-handling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-handling"}},[e._v("#")]),e._v(" Event Handling")]),e._v(" "),n("h2",{attrs:{id:"objective"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[e._v("#")]),e._v(" Objective")]),e._v(" "),n("p",[e._v("In this chapter, you will learn how to capture and fire events. You'll also learn the difference between component level and app level events.")]),e._v(" "),n("h2",{attrs:{id:"contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),n("p",[e._v('Events are actions that can be detected by JavaScript. Such actions might be user-initiated, like taps or swipes, or system-initiated, like when an app is paused. Your app can capture and react to any of these events. You specify which components in your app should "listen" for events with the '),n("code",[e._v("addEventListener()")]),e._v(" function. Assigning an event listener follows this pattern:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("element.addEventListener('event_type', function(e) {\n  // code here is run when the event is fired\n  // properties of the event object 'e' describe the event and object that received it\n  Ti.API.info('The '+e.type+' event happened');\n});\n")])])]),n("p",[e._v("As seen above, the first parameter specifies the type of event for which we are listening. In this case, "),n("code",[e._v("event_type")]),e._v(" on the "),n("code",[e._v("element")]),e._v(" component. The second parameter is a callback function that will be executed whenever the event is fired.")]),e._v(" "),n("p",[e._v("Each Titanium component is capable of listening for a particular subset of event types. As shown in the code sample above, within an event listener's function, an event object, "),n("code",[e._v("e")]),e._v(", is created. The properties of that object vary by component and event type. These are listed on the API docs page for any given module or component. Some common event types include:")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("click")]),e._v(" and its synonym "),n("code",[e._v("singletap")])])]),e._v(" "),n("li",[n("p",[n("code",[e._v("swipe")]),e._v(" which is a left or right touch and drag the finger action")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("scroll")]),e._v(" which is a touch and drag action")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("dblclick")]),e._v(" and its synonym "),n("code",[e._v("doubletap")])])]),e._v(" "),n("li",[n("p",[n("code",[e._v("touchstart")]),e._v(", "),n("code",[e._v("touchmove")]),e._v(", and "),n("code",[e._v("touchend")]),e._v(" which define the three stages of an action where the user touches the screen, moves his or her finger in an arbitrary direction, then lifts the finger")])])]),e._v(" "),n("p",[e._v("In addition to the common event types, some modules have their own special events. For example, the location services API includes events for "),n("code",[e._v("heading")]),e._v(" and "),n("code",[e._v("location")]),e._v(" changes. The gestures module enables you to listen for the "),n("code",[e._v("shake")]),e._v(" event. See the API docs for more information.")]),e._v(" "),n("p",[e._v("Common event object properties include:")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" which describe the x/y coordinates of the event (such as a tap) in the view's coordinates")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("globalPoint")]),e._v(" which is a dictionary with "),n("code",[e._v("x")]),e._v(" and "),n("code",[e._v("y")]),e._v(" properties describing the event's location in screen coordinates")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("type")]),e._v(" which is the name of the event type")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("source")]),e._v(" which is a reference to the object on which the event was fired")])])]),e._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),n("p",[n("code",[e._v("globalPoint")]),e._v(" is an iOS only event property.")])]),e._v(" "),n("p",[e._v("You can assign more than one event listener to a component. For example, a table could listen for taps, swipes, and scrolls.")]),e._v(" "),n("p",[e._v("While the general form above uses an anonymous (unnamed) function, you can use a named function as well. Typically, you would do so if you wanted to reuse the function in more than one event handler or in response to more than one type of event. Let's say you had two buttons that when clicked would perform identical operations. Rather than writing duplicate anonymous functions for each button, you could create a named function that is called instead.")]),e._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("doSomething")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// This function will be called by multiple handlers")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The event object is accessible within this function")]),e._v("\n  Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[e._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'The '")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("type"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("' event happened'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\nbutton1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'click'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" doSomething"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nbutton2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'click'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" doSomething"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),n("p",[e._v("Tip: A UI element must have its "),n("code",[e._v("touchEnabled")]),e._v(" property set to "),n("code",[e._v("true")]),e._v(" for it to react to touch-related events (click, singletap, etc.). In most cases, UI components default to this value being "),n("code",[e._v("true")]),e._v(". However, if you find an element that won't respond to an event, try setting "),n("code",[e._v("touchEnabled=true")]),e._v(" to see if that helps. If a view has "),n("code",[e._v("touchEnabled")]),e._v(" set to "),n("code",[e._v("false")]),e._v(", touch events pass to the next view in the stack (for example, an underlying sibling view or parent view).")]),e._v(" "),n("h3",{attrs:{id:"ui-event-bubbling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ui-event-bubbling"}},[e._v("#")]),e._v(" UI event bubbling")]),e._v(" "),n("p",[e._v("UI events can bubble up from the view that was actually touched through parent views (objects that inherit from "),n("code",[e._v("Ti.UI.View")]),e._v('), as well as certain "view-like" objects which act as containers for views.')]),e._v(" "),n("p",[e._v("For example, a "),n("code",[e._v("TableViewSection")]),e._v(" object acts as a container for "),n("code",[e._v("TableViewRow")]),e._v(" objects. However, in iOS, the "),n("code",[e._v("TableViewSection")]),e._v(" is not itself a view. Since it serves as a logical container for views, it takes part in the bubbling chain. From the point of view of event bubbling, the section acts as parent to the rows it contains, and the table acts as parent for its rows.")]),e._v(" "),n("p",[e._v("Some special containers, such as windows, have no parents in the view hierarchy, so event bubbling ends when it reaches a special container. These special containers include:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("NavigationWindow")])]),e._v(" "),n("li",[n("p",[e._v("SplitWindow")])]),e._v(" "),n("li",[n("p",[e._v("Tab")])]),e._v(" "),n("li",[n("p",[e._v("TabGroup")])]),e._v(" "),n("li",[n("p",[e._v("Window")])])]),e._v(" "),n("p",[e._v("Event bubbling ends when it reaches the special containers.")]),e._v(" "),n("h4",{attrs:{id:"bubbling-and-non-bubbling-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bubbling-and-non-bubbling-events"}},[e._v("#")]),e._v(" Bubbling and non-bubbling events")]),e._v(" "),n("p",[e._v("Events that represent user input (click, touchmove, swipe) are bubbling events. Other events, such as focus and scroll, are view-specific. They represent views reacting to user input, and they do not bubble.")]),e._v(" "),n("p",[e._v("The following events bubble:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("click")])]),e._v(" "),n("li",[n("p",[e._v("dblclick")])]),e._v(" "),n("li",[n("p",[e._v("doubletap")])]),e._v(" "),n("li",[n("p",[e._v("longclick")])]),e._v(" "),n("li",[n("p",[e._v("longpress")])]),e._v(" "),n("li",[n("p",[e._v("pinch")])]),e._v(" "),n("li",[n("p",[e._v("singletap")])]),e._v(" "),n("li",[n("p",[e._v("swipe")])]),e._v(" "),n("li",[n("p",[e._v("touchcancel")])]),e._v(" "),n("li",[n("p",[e._v("touchend")])]),e._v(" "),n("li",[n("p",[e._v("touchmove")])]),e._v(" "),n("li",[n("p",[e._v("touchstart")])]),e._v(" "),n("li",[n("p",[e._v("twofingertap")])])]),e._v(" "),n("p",[e._v("That is, all of the events defined by "),n("code",[e._v("Titanium.UI.View")]),e._v(" "),n("em",[e._v("except")]),e._v(" "),n("code",[e._v("postlayout")]),e._v(".")]),e._v(" "),n("h4",{attrs:{id:"managing-event-bubbling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#managing-event-bubbling"}},[e._v("#")]),e._v(" Managing event bubbling")]),e._v(" "),n("p",[e._v("Release 3.0 adds several features to allow more control over event bubbling. The "),n("code",[e._v("Titanium.Event")]),e._v(" object has two new properties:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("API")]),e._v(" "),n("th",[e._v("Type")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[n("code",[e._v("bubbles")])]),e._v(" "),n("td",[e._v("boolean")]),e._v(" "),n("td",[e._v("Indicates whether the event can bubble. This property is set at creation time and cannot be changed. For events fired by the Titanium SDK, this property is set to ensure that event-bubbling behavior matches the 2.X event bubbling behavior.  "),n("br"),e._v(" "),n("br"),e._v("When firing custom events, "),n("code",[e._v("bubbles")]),e._v(" can be specified as part of the event data to enable or disable bubbling.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("cancelBubble")])]),e._v(" "),n("td",[e._v("boolean")]),e._v(" "),n("td",[e._v("If "),n("code",[e._v("true")]),e._v(", stop the event from propagating any further. The "),n("code",[e._v("cancelBubble")]),e._v(" property is always "),n("code",[e._v("false")]),e._v(" when an event handler is invoked. While handling the event, the application can set "),n("code",[e._v("cancelBubble")]),e._v(" to true to prevent any further bubbling.")])])])]),e._v(" "),n("p",[e._v("In addition, all views and view-like objects have a new "),n("code",[e._v("bubbleParent")]),e._v(" property, which determines whether the view bubbles to its parent. This property is read/write. By default, "),n("code",[e._v("bubbleParent")]),e._v(" is set so that event bubbling behavior for a given view matches its Release 2.X event bubbling behavior. This property is defined as a property of "),n("code",[e._v("Titanium.Proxy")]),e._v("--the parent of all Titanium objects. However, the property is only used on views and view-like objects that act as containers for views.")]),e._v(" "),n("h4",{attrs:{id:"event-bubbling-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-bubbling-notes"}},[e._v("#")]),e._v(" Event bubbling notes")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Event bubbling happens after native event handling. That is, native event handling (such as highlighting a view) has already happened before any event fires.")])]),e._v(" "),n("li",[n("p",[e._v("Multiple events of different types are treated separately. That is, if the user lifting their finger triggers 'touchend', 'singletap', and 'click' events, any actions done on the 'touchend' event (such as setting "),n("code",[e._v("cancelBubble")]),e._v(") do not affect the bubbling or firing of either 'singletap' or 'click' events.")])])]),e._v(" "),n("h3",{attrs:{id:"firing-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#firing-events"}},[e._v("#")]),e._v(" Firing events")]),e._v(" "),n("p",[e._v("You can fire events rather than waiting around for the user or system to initiate them. For example, you could simulate a button press by firing that button's "),n("code",[e._v("click")]),e._v(" event. You'd use code like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("someButton.fireEvent('click');\n")])])]),n("p",[e._v("or if you wanted to pass data along with the event:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("someButton.fireEvent('click', {kitchen: 'sink'});\n")])])]),n("p",[e._v("As shown, you can also pass JSON-serializable data when firing events. You simply include an object (without methods) as the second parameter of the "),n("code",[e._v("fireEvent()")]),e._v(" function. That parameter is optional and can be omitted. Members of the passed object become available via the event object in the listener. For example, the following code:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("someButton.addEventListener('click', function(e){\n  Ti.APP.info('The value of kitchen is '+e.kitchen);\n});\n")])])]),n("p",[e._v("would output this to the Titanium console:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[INFO] The value of kitchen is sink\n")])])]),n("h3",{attrs:{id:"custom-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#custom-events"}},[e._v("#")]),e._v(" Custom events")]),e._v(" "),n("p",[e._v("Manually firing a click event demonstrates the flexibility of Titanium's event system, but it's probably not something you'll do that often. You can (and probably will) fire your own custom events frequently. For example, you might fire a custom event when when the database is updated. Any components that depend on the database – a table, for example – could listen for that event and update themselves. This promotes loose coupling of our components and makes for more scalable and maintainable Javascript code.")]),e._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),n("p",[e._v("Do "),n("strong",[e._v("NOT")]),e._v(' name your events with spaces, for example, "my event". This may cause your events to fire multiple times with other JavaScript libraries, such as Backbone.js, which uses spaces to delimit events.')])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("deleteButton.addEventListener('click', function(e){\n  // when something happens in your app\n  database.doDelete(e.whichRecord);\n  // fire an event so components can react\n  theTable.fireEvent('db_updated');\n});\n// ... elsewhere in your code\ntheTable.addEventListener('db_updated', function(e){\n  theTable.setData(database.getCurrentRecords());\n});\n")])])]),n("p",[e._v("An event fired and listened for in this manner is associated with one particular component. Sometimes you'll want more than one component to be able to react to custom events. You could fire a whole bunch of component-level events. Or, you can use application-level events.")]),e._v(" "),n("h3",{attrs:{id:"application-level-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#application-level-events"}},[e._v("#")]),e._v(" Application-level events")]),e._v(" "),n("p",[e._v("App-level events are global to your app. They are accessible in all contexts, functional scopes, CommonJS modules, and so forth. You fire them and listen for them via the "),n("code",[e._v("Ti.App")]),e._v(" module. They're tailor made for sending custom events across contexts. Updating the previous code sample to use app-level events gets us this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("deleteButton.addEventListener('click', function(e){\n  // when something happens in your app\n  database.doDelete(e.whichRecord);\n  // fire a global event so components can react\n  Ti.App.fireEvent('db_updated');\n});\n// ... elsewhere in your code\nTi.App.addEventListener('db_updated', function(e){\n  theTable.setData(database.getCurrentRecords());\n  someOtherComponent.doSomethingElse();\n});\n")])])]),n("p",[e._v("Keep in mind that app-level events are global, which means they remain in context the entire time your app is running (unless you remove them). This also means that any objects they reference will also remain in scope while your app runs. This could prevent those objects from being garbage collected. See the "),n("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Debugging_and_Profiling/Managing_Memory_and_Finding_Leaks/"}},[e._v("Managing Memory and Finding Leaks")]),e._v(" chapter for more information.")],1),e._v(" "),n("h3",{attrs:{id:"removing-event-listeners"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#removing-event-listeners"}},[e._v("#")]),e._v(" Removing event listeners")]),e._v(" "),n("p",[e._v("You can remove an event listener, thereby preventing the associated component from reacting to the event in the future. Let's say you have a delete button that should only be active when one or more items are checked. When the users checks the first item, you could add the click event listener to the delete button. If the user clears the last of the check marks, you'd remove the event listener from the delete button.")]),e._v(" "),n("p",[e._v("To remove an event listener, you have to pass a reference to the function that was specified when you added the event listener. In other words, the function signature passed to "),n("code",[e._v("addEventListener()")]),e._v(" and "),n("code",[e._v("removeEventListener()")]),e._v(" must match. The easiest way to do this is to use a named function in the "),n("code",[e._v("addEventListener()")]),e._v(" statement so you can also pass that same function name to remove the listener.")]),e._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("doSomething")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// do something")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\ndeleteButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'click'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" doSomething"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ... elsewhere in your code ...")]),e._v("\ndeleteButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("removeEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'click'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" doSomething"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),n("h3",{attrs:{id:"special-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#special-events"}},[e._v("#")]),e._v(" Special events")]),e._v(" "),n("p",[e._v('Android devices feature various "hardware" buttons, like Back, Home, Search, and Menu in addition to the volume up/down rocker and the camera button. With Titanium, you can monitor each of these buttons for presses with event listeners added to a heavy weight window.')]),e._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("💡 Hint")]),e._v(" "),n("p",[e._v("Prior to Release 3.0.0, these events were named with a colon right after the android name. For example, "),n("code",[e._v("androidback")]),e._v(" was originally called "),n("code",[e._v("android:back")]),e._v(".")]),e._v(" "),n("p",[e._v("Since Release 3.2.0, all windows are heavyweight by default and you cannot control the type of window created.")])]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("strong",[e._v("Event")])]),e._v(" "),n("th",[n("strong",[e._v("Fired when ...")])])])]),e._v(" "),n("tbody",[n("tr",[n("td",[n("code",[e._v("androidback")])]),e._v(" "),n("td",[e._v("The back button is released")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("androidhome")])]),e._v(" "),n("td",[e._v("The home button is released")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("androidsearch")])]),e._v(" "),n("td",[e._v("The search button is released")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("androidcamera")])]),e._v(" "),n("td",[e._v("The camera button is released")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("androidfocus")])]),e._v(" "),n("td",[e._v("Fired when the camera button is pressed halfway and then released.")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("androidvolup")])]),e._v(" "),n("td",[e._v("The volume-up rocker button is released")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("androidvoldown")])]),e._v(" "),n("td",[e._v("The volume-down rocker button is released")])])])]),e._v(" "),n("p",[e._v("See the "),n("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window-object.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Window"),n("OutboundLink")],1),e._v(" reference page for more information on these special events. The Menu button is handled specially as an event fired against the Android activity. See this "),n("a",{attrs:{href:"https://github.com/appcelerator-developer-relations/KitchenSink/blob/master/Resources/ui/handheld/android/baseui/android_menu_1.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kitchen Sink example"),n("OutboundLink")],1),e._v(" for sample code for creating and displaying a menu.")]),e._v(" "),n("h3",{attrs:{id:"considerations-and-best-practices"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#considerations-and-best-practices"}},[e._v("#")]),e._v(" Considerations and best practices")]),e._v(" "),n("p",[e._v("Event listeners must be defined "),n("em",[e._v("before")]),e._v(" their respective events are likely to be fired, otherwise they are not guaranteed to be called. For example, a window's "),n("a",{attrs:{href:"#!/api/Titanium.UI.Window-method-open"}},[e._v("open")]),e._v(" and "),n("a",{attrs:{href:"#!/api/Titanium.UI.Window-event-focus"}},[e._v("focus")]),e._v(" listeners must be defined before the window is opened. Evaluating events as late as possible while bearing the above consideration in mind, however, can significantly improve application responsiveness. For example, an event listener for a click event may be defined after the parent window has been opened.")]),e._v(" "),n("p",[e._v("Global event listeners, such as the Ti.App events described above or the Geolocation or Gesture listeners, remain in scope the entire time your app is running. This means that any local variables you reference within those listeners will remain in scope while your app is running. This can cause memory leaks – objects you no longer need and think have been destroyed remain in memory. See the "),n("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Debugging_and_Profiling/Managing_Memory_and_Finding_Leaks/"}},[e._v("Managing Memory and Finding Leaks")]),e._v(" chapter for more information. The gist of it is that you must remove global event listeners when you're done with them. When a window closes, for example, you might no longer need to listen for a certain global event; remove it.")],1),e._v(" "),n("h2",{attrs:{id:"hands-on-practice"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hands-on-practice"}},[e._v("#")]),e._v(" Hands-on practice")]),e._v(" "),n("h3",{attrs:{id:"goal"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#goal"}},[e._v("#")]),e._v(" Goal")]),e._v(" "),n("p",[e._v("In this activity, you will fire and listen for events to test how events propagate – whether they bubble up or trickle down. You will also fire and listen for an app-level event.")]),e._v(" "),n("h3",{attrs:{id:"steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),n("p",[e._v("Determine if events bubble up or trickle down and do the platforms match...put a button in a view in a window then put a click listener on all of them and see the order in which they're fired. Perhaps also compare the x/y and globalPoint coordinates to see how they differ.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Create a new Titanium project named Events")])]),e._v(" "),n("li",[n("p",[e._v("Remove all of the code from app.js. Write new code to define the following elements:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("A window with a white background color. Add a custom property named "),n("code",[e._v("whichObj")]),e._v(" with the value 'window' to your window object.")])]),e._v(" "),n("li",[n("p",[e._v("A view that fills 80% of the width and height of the window. It should have a yellow background. Add a custom property named "),n("code",[e._v("whichObj")]),e._v(" with the value 'view' to your view object. Make sure to add the view to the window.")])]),e._v(" "),n("li",[n("p",[e._v("A button centered vertically and horizontally within the view. Add a custom property named "),n("code",[e._v("whichObj")]),e._v(" with the value 'button' to your button object. Make sure to add the button to the view.")])])])]),e._v(" "),n("li",[n("p",[e._v("Add a click event listener on the window object. It should log two messages to the console:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Message 1: Simply output the word 'window' to the log so you know the window received the click event")])]),e._v(" "),n("li",[n("p",[e._v("Message 2: Log the "),n("code",[e._v("whichObj")]),e._v(" property value to the console so you know which object actually received the user's click. Keep in mind the event object properties that you'll need to reference to access this property.")])])])]),e._v(" "),n("li",[n("p",[e._v("Add a click event listener to the view object. It should log the word 'view' to the console so you know the view received the click event.")])]),e._v(" "),n("li",[n("p",[e._v("Add a click event listener to the button. It should take two actions:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("It should print the word 'button' to the log so you know the button received the click event.")])]),e._v(" "),n("li",[n("p",[e._v("It should fire an app-level event named "),n("code",[e._v("changeBG")]),e._v(" and pass an anonymous object defining a color.")])])])]),e._v(" "),n("li",[n("p",[e._v("Add an app-level event listener which watches for the "),n("code",[e._v("changeBG")]),e._v(" event. When received, it should update the view's background color with the value passed via the event object.")])]),e._v(" "),n("li",[n("p",[e._v("Build and test the app by clicking the button. Do events bubble up (button receives the click first, then the view, then the window) or do events trickle down (window, then view, then button)? If you can build for both Android and iOS, compare the output on the two platforms. Do they react the same?")])])]),e._v(" "),n("h3",{attrs:{id:"references-and-further-reading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#references-and-further-reading"}},[e._v("#")]),e._v(" References and further reading")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/3.3_events.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Finished code"),n("OutboundLink")],1)])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"#!/api/Titanium.UI.Window"}},[e._v("Window module")])])])]),e._v(" "),n("h2",{attrs:{id:"summary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),n("p",[e._v("In this section, you learned how to capture and fire events. You learned the difference between component level and app-level events, as well as how and when to use them. Finally, you tested event propagation to determine that on both platforms, events bubble up though only a single event object is created and passed among the interested event listeners. Next we'll move on to handling one of the most used UI components in today's apps: the TableView.")])])}),[],!1,null,null,null);t.default=o.exports}}]);