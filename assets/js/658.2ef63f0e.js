(window.webpackJsonp=window.webpackJsonp||[]).push([[658],{1702:function(e,t,i){"use strict";i.r(t);var a=i(21),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"titanium-ui-ios-animator"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-ios-animator"}},[e._v("#")]),e._v(" Titanium.UI.iOS.Animator")]),e._v(" "),i("TypeHeader"),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[e._v("The animator provides physics-related capabilities and animations using the iOS physics engine.\nEach animator is independent of other animators you create.  An animator is comprised of\nbehaviors and items. Behaviors define the rules of the animation, while items are the\nview objects to be animated. An item in the animator can be given\nmultiple behaviors as long as those behaviors belong to the same animator.")]),e._v(" "),i("p",[e._v("To use these dynamic animations, first create the items to animate, then:")]),e._v(" "),i("p",[i("strong",[e._v("1.")]),e._v(" Create an animator using the "),i("type-link",{attrs:{type:"Titanium.UI.iOS.createAnimator"}},[e._v("Titanium.UI.iOS.createAnimator")]),e._v(" method.")],1),e._v(" "),i("p",[i("strong",[e._v("2.")]),e._v(" Set the "),i("type-link",{attrs:{type:"Titanium.UI.iOS.Animator.referenceView"}},[e._v("referenceView")]),e._v(" property to establish the\ncoordinate system for the animations.")],1),e._v(" "),i("p",[i("strong",[e._v("3.")]),e._v(" Create and add items to one or more of the following behaviors:")]),e._v(" "),i("ul",[i("li",[i("type-link",{attrs:{type:"Titanium.UI.iOS.AnchorAttachmentBehavior"}},[e._v("Titanium.UI.iOS.AnchorAttachmentBehavior")])],1),e._v(" "),i("li",[i("type-link",{attrs:{type:"Titanium.UI.iOS.CollisionBehavior"}},[e._v("Titanium.UI.iOS.CollisionBehavior")])],1),e._v(" "),i("li",[i("type-link",{attrs:{type:"Titanium.UI.iOS.DynamicItemBehavior"}},[e._v("Titanium.UI.iOS.DynamicItemBehavior")])],1),e._v(" "),i("li",[i("type-link",{attrs:{type:"Titanium.UI.iOS.GravityBehavior"}},[e._v("Titanium.UI.iOS.GravityBehavior")])],1),e._v(" "),i("li",[i("type-link",{attrs:{type:"Titanium.UI.iOS.PushBehavior"}},[e._v("Titanium.UI.iOS.PushBehavior")])],1),e._v(" "),i("li",[i("type-link",{attrs:{type:"Titanium.UI.iOS.SnapBehavior"}},[e._v("Titanium.UI.iOS.SnapBehavior")])],1),e._v(" "),i("li",[i("type-link",{attrs:{type:"Titanium.UI.iOS.ViewAttachmentBehavior"}},[e._v("Titanium.UI.iOS.ViewAttachmentBehavior")])],1)]),e._v(" "),i("p",[i("strong",[e._v("4.")]),e._v(" Add these behaviors to the animator with the "),i("type-link",{attrs:{type:"Titanium.UI.iOS.Animator.addBehavior"}},[e._v("addBehavior")]),e._v(" method.")],1),e._v(" "),i("p",[i("strong",[e._v("5.")]),e._v(" Start the animator with "),i("type-link",{attrs:{type:"Titanium.UI.iOS.Animator.startAnimator"}},[e._v("startAnimator")]),e._v(" method.")],1),e._v(" "),i("p",[e._v("Once all items are at rest, the animator automatically pauses, and resumes if a behavior\nparameter changes, or a behavior or item is added or removed.")]),e._v(" "),i("p",[e._v("See the behaviors listed above for examples of animating items.")]),e._v(" "),i("h3",{attrs:{id:"reference-view"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#reference-view"}},[e._v("#")]),e._v(" Reference View")]),e._v(" "),i("p",[e._v("The Titanium view object set to the Animator's "),i("type-link",{attrs:{type:"Titanium.UI.iOS.Animator.referenceView"}},[e._v("referenceView")]),e._v("\nproperty establishes the coordinate system for the animation behaviors and items.  Each item that\nneeds to be animated must be a child of the reference view.")],1),e._v(" "),i("p",[e._v("By default, when you create a collision behavior, the behavior uses the edge's of the reference\nview as its boundary, so any item within this view cannot be pushed out of it.")]),e._v(" "),i("p",[e._v("Use the following lists as references when specifying your animation behaviors.")]),e._v(" "),i("p",[i("strong",[e._v("Points")])]),e._v(" "),i("p",[e._v("The following list notes the location of notable points in the coordinate system, where WIDTH and\nHEIGHT are the width and height of the reference view, respectively.")]),e._v(" "),i("ul",[i("li",[e._v("Top-left corner: (0,0)")]),e._v(" "),i("li",[e._v("Top-right corner: (WIDTH, 0)")]),e._v(" "),i("li",[e._v("Center: (WIDTH/2, HEIGHT/2)")]),e._v(" "),i("li",[e._v("Bottom-left corner: (0, HEIGHT)")]),e._v(" "),i("li",[e._v("Bottom-right corner: (WIDTH, HEIGHT)")])]),e._v(" "),i("p",[e._v("Note that on iOS a point is equivalent to a display pixel.")]),e._v(" "),i("p",[i("strong",[e._v("Vectors")])]),e._v(" "),i("p",[e._v("Gravity and push forces may be specified as vectors with the "),i("code",[e._v("gravityDirection")]),e._v(" and\n"),i("code",[e._v("pushDirection")]),e._v(" properties, respectively.  The following list notes the direction and its\ncorresponding vector:")]),e._v(" "),i("ul",[i("li",[e._v("Left: (-x,0)")]),e._v(" "),i("li",[e._v("Right: (+x,0)")]),e._v(" "),i("li",[e._v("Up: (0,-y)")]),e._v(" "),i("li",[e._v("Down: (0,+y)")])]),e._v(" "),i("p",[i("strong",[e._v("Angles")])]),e._v(" "),i("p",[e._v("Gravity and push forces may be specified with the "),i("code",[e._v("angle")]),e._v(" and "),i("code",[e._v("magnitude")]),e._v(" properties.\nSpecify all angle values as radians (360 degrees = 2 * pi radians).  The following list notes\nthe direction and its corresponding angle:")]),e._v(" "),i("ul",[i("li",[e._v("Right: 0 or 2 * pi")]),e._v(" "),i("li",[e._v("Down: pi / 2")]),e._v(" "),i("li",[e._v("Left: pi")]),e._v(" "),i("li",[e._v("Up: pi / 2 * 3")])]),e._v(" "),i("ApiDocs")],1)}),[],!1,null,null,null);t.default=n.exports}}]);