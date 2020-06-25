(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1699:function(e,t,i){"use strict";i.r(t);var s=i(21),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"creating-custom-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-custom-queries"}},[e._v("#")]),e._v(" Creating Custom Queries")]),e._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),s("p",[e._v("By default, Dashboard provides metric analytics for AMPLIFY Runtime Requests, Average Session Length, Install, Events, Mobile Backend Service Requests, Push Notifications, Sessions, and Unique Devices. The Custom Queries feature enables you to create custom queries based on your application-specific metrics and analytical needs or expand upon the provided default analytics to meet your specific analytics needs.")]),e._v(" "),s("h2",{attrs:{id:"queries-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queries-overview"}},[e._v("#")]),e._v(" Queries Overview")]),e._v(" "),s("p",[e._v("To access the "),s("em",[e._v("Queries Overview")]),e._v(" screen, select the "),s("strong",[e._v("Custom Queries")]),e._v(" tab on the Dashboard home page.")]),e._v(" "),s("p",[s("img",{attrs:{src:i(991),alt:"custom_queries_overview"}})]),e._v(" "),s("p",[e._v("Note that if you have not created any custom queries, selecting the "),s("strong",[e._v("Custom Queries")]),e._v(" tab will transfer you to the "),s("em",[e._v("Queries")]),e._v(" screen. The "),s("em",[e._v("Queries")]),e._v(" screen enables creating, previewing, editing, saving, and deleting custom analytics queries. You can also filter custom queries. To access the "),s("em",[e._v("Queries")]),e._v(" screen from the "),s("em",[e._v("Queries Overview")]),e._v(" screen, click the "),s("strong",[e._v("+ Query")]),e._v(" button or click on a custom query tile. To navigate from the "),s("em",[e._v("Queries")]),e._v(" screen to the "),s("em",[e._v("Queries Overview")]),e._v(" screen, select "),s("strong",[e._v("All Queries")]),e._v(" from the Saved Queries drop-down menu.")]),e._v(" "),s("p",[s("img",{attrs:{src:i(992),alt:"custom_queries"}})]),e._v(" "),s("h2",{attrs:{id:"creating-queries-without-filtering"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-queries-without-filtering"}},[e._v("#")]),e._v(" Creating Queries without filtering")]),e._v(" "),s("p",[e._v("To create a custom query without filtering:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Enter a query name in the "),s("strong",[e._v("Name")]),e._v(" field.")])]),e._v(" "),s("li",[s("p",[e._v("Select a "),s("strong",[e._v("Method")]),e._v(". The Method drop-down menu selections are:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Count")])]),e._v(" "),s("li",[s("p",[e._v("Cardinality")])]),e._v(" "),s("li",[s("p",[e._v("Average")])]),e._v(" "),s("li",[s("p",[e._v("Sum")])]),e._v(" "),s("li",[s("p",[e._v("Min")])]),e._v(" "),s("li",[s("p",[e._v("Max")])])])]),e._v(" "),s("li",[s("p",[e._v("Select a "),s("strong",[e._v("Field")]),e._v(". The Field drop-down menu selections are:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Custom - If selected, enter the custom field information.")])]),e._v(" "),s("li",[s("p",[e._v("Event")])]),e._v(" "),s("li",[s("p",[e._v("Application")])]),e._v(" "),s("li",[s("p",[e._v("Platform")])]),e._v(" "),s("li",[s("p",[e._v("Platform Version")])]),e._v(" "),s("li",[s("p",[e._v("Environment")])]),e._v(" "),s("li",[s("p",[e._v("Country")])]),e._v(" "),s("li",[s("p",[e._v("Session")])]),e._v(" "),s("li",[s("p",[e._v("Session Length")])])])]),e._v(" "),s("li",[s("p",[e._v("Select a "),s("strong",[e._v("Grouping")]),e._v(". The Grouping drop-down menu selections are:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Custom - If selected, enter the custom grouping information.")])]),e._v(" "),s("li",[s("p",[e._v("Event")])]),e._v(" "),s("li",[s("p",[e._v("Application")])]),e._v(" "),s("li",[s("p",[e._v("Platform")])]),e._v(" "),s("li",[s("p",[e._v("Platform Version")])]),e._v(" "),s("li",[s("p",[e._v("Environment")])]),e._v(" "),s("li",[s("p",[e._v("Country")])]),e._v(" "),s("li",[s("p",[e._v("Session")])]),e._v(" "),s("li",[s("p",[e._v("Session Length - If selected, enter an "),s("strong",[e._v("Interval")]),e._v(". The entered interval is the range to use when grouping numeric values.")])])])]),e._v(" "),s("li",[s("p",[e._v("(Optional) Select the "),s("strong",[e._v("Map")]),e._v(" checkbox to display the results on a map instead of a chart. Please note this is not possible for averages.")])]),e._v(" "),s("li",[s("p",[e._v("Select a "),s("strong",[e._v("Date Range")]),e._v(". The Date Range drop-down menu selections are:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("From/To - If selected, enter the From and To dates and times. "),s("strong",[e._v("Queries with From/To date ranges cannot be saved.")])])]),e._v(" "),s("li",[s("p",[e._v("Custom - If selected, select a custom date range.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Number of Months")])]),e._v(" "),s("li",[s("p",[e._v("Number of Days")])]),e._v(" "),s("li",[s("p",[e._v("Number of Hours")])]),e._v(" "),s("li",[s("p",[e._v("Number of Minutes")])])])]),e._v(" "),s("li",[s("p",[e._v("3 Months")])]),e._v(" "),s("li",[s("p",[e._v("30 Days")])]),e._v(" "),s("li",[s("p",[e._v("7 Days")])]),e._v(" "),s("li",[s("p",[e._v("24 Hours")])]),e._v(" "),s("li",[s("p",[e._v("60 Minutes")])])])]),e._v(" "),s("li",[s("p",[e._v("(Optional) Select the "),s("strong",[e._v("Include current period")]),e._v(" checkbox to Include up to the end of the current period for which there will be only partial data.")])]),e._v(" "),s("li",[s("p",[e._v("(Optional) Click "),s("strong",[e._v("Preview")]),e._v(" to preview your custom query. The Custom Query section will be updated to display your custom query analytics preview.")])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("strong",[e._v("Save")]),e._v(" to save your custom query. Your custom query will be saved, the Saved Queries drop-down menu will be updated to include your saved custom query, the Custom Query section will be updated to display your custom query analytics, and your custom query will be available on the "),s("em",[e._v("Queries Overview")]),e._v(" screen.")])])]),e._v(" "),s("h2",{attrs:{id:"creating-queries-with-filtering"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-queries-with-filtering"}},[e._v("#")]),e._v(" Creating Queries with filtering")]),e._v(" "),s("p",[e._v("To create a custom query with filtering:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Enter a query name in the "),s("strong",[e._v("Name")]),e._v(" field.")])]),e._v(" "),s("li",[s("p",[e._v("Select a "),s("strong",[e._v("Method")]),e._v(". The Method drop-down menu selections are:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Count")])]),e._v(" "),s("li",[s("p",[e._v("Cardinality")])]),e._v(" "),s("li",[s("p",[e._v("Average")])]),e._v(" "),s("li",[s("p",[e._v("Sum")])]),e._v(" "),s("li",[s("p",[e._v("Min")])]),e._v(" "),s("li",[s("p",[e._v("Max")])])])]),e._v(" "),s("li",[s("p",[e._v("Select a "),s("strong",[e._v("Field")]),e._v(". The Field drop-down menu selections are:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Custom - If selected, enter the custom field information.")])]),e._v(" "),s("li",[s("p",[e._v("Event")])]),e._v(" "),s("li",[s("p",[e._v("Application")])]),e._v(" "),s("li",[s("p",[e._v("Platform")])]),e._v(" "),s("li",[s("p",[e._v("Platform Version")])]),e._v(" "),s("li",[s("p",[e._v("Environment")])]),e._v(" "),s("li",[s("p",[e._v("Country")])]),e._v(" "),s("li",[s("p",[e._v("Session")])]),e._v(" "),s("li",[s("p",[e._v("Session Length")])])])]),e._v(" "),s("li",[s("p",[e._v("Select a "),s("strong",[e._v("Grouping")]),e._v(". The Grouping drop-down menu selections are:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Custom - If selected, enter the custom grouping information.")])]),e._v(" "),s("li",[s("p",[e._v("Event")])]),e._v(" "),s("li",[s("p",[e._v("Application")])]),e._v(" "),s("li",[s("p",[e._v("Platform")])]),e._v(" "),s("li",[s("p",[e._v("Platform Version")])]),e._v(" "),s("li",[s("p",[e._v("Environment")])]),e._v(" "),s("li",[s("p",[e._v("Country")])]),e._v(" "),s("li",[s("p",[e._v("Session")])]),e._v(" "),s("li",[s("p",[e._v("Session Length - If selected, enter an "),s("strong",[e._v("Interval")]),e._v(". The entered interval specifies the range to use when grouping numeric values.")])])])]),e._v(" "),s("li",[s("p",[e._v("(Optional) Select the "),s("strong",[e._v("Map")]),e._v(" checkbox to display the results on a map instead of a chart. Please note this is not possible for averages.")])]),e._v(" "),s("li",[s("p",[e._v("Select a "),s("strong",[e._v("Date Range")]),e._v(". The Date Range drop-down menu selections are:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("From/To - If selected, enter the From and To dates and times. "),s("strong",[e._v("Queries with From/To date ranges cannot be saved.")])])]),e._v(" "),s("li",[s("p",[e._v("Custom - If selected, select a custom date range.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Number of Months")])]),e._v(" "),s("li",[s("p",[e._v("Number of Days")])]),e._v(" "),s("li",[s("p",[e._v("Number of Hours")])]),e._v(" "),s("li",[s("p",[e._v("Number of Minutes")])])])]),e._v(" "),s("li",[s("p",[e._v("3 Months")])]),e._v(" "),s("li",[s("p",[e._v("30 Days")])]),e._v(" "),s("li",[s("p",[e._v("7 Days")])]),e._v(" "),s("li",[s("p",[e._v("24 Hours")])]),e._v(" "),s("li",[s("p",[e._v("60 Minutes")])])])]),e._v(" "),s("li",[s("p",[e._v("(Optional) Select the "),s("strong",[e._v("Include current period")]),e._v(" checkbox to Include up to the end of the current period for which there will be only partial data.")])]),e._v(" "),s("li",[s("p",[e._v("(Optional) Click "),s("strong",[e._v("Preview")]),e._v(" to preview your custom query. The Custom Query section will be updated to display your custom query analytics preview.")])]),e._v(" "),s("li",[s("p",[e._v("Select "),s("strong",[e._v("Basic")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("For Match, select either "),s("strong",[e._v("All")]),e._v(" or "),s("strong",[e._v("Any")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Click the "),s("strong",[e._v("Plus")]),e._v(" icon to add a filter.")])]),e._v(" "),s("li",[s("p",[e._v("Select the type of filter. The type of filter drop-down menu selections are:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Custom - If selected, enter the custom field information.")])]),e._v(" "),s("li",[s("p",[e._v("Event")])]),e._v(" "),s("li",[s("p",[e._v("Application")])]),e._v(" "),s("li",[s("p",[e._v("Platform")])]),e._v(" "),s("li",[s("p",[e._v("Platform Version")])]),e._v(" "),s("li",[s("p",[e._v("Environment")])]),e._v(" "),s("li",[s("p",[e._v("Country")])]),e._v(" "),s("li",[s("p",[e._v("Session")])]),e._v(" "),s("li",[s("p",[e._v("Session Length")])])])]),e._v(" "),s("li",[s("p",[e._v("Select a filter operand. The filter operand selections are:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Equals")])]),e._v(" "),s("li",[s("p",[e._v("Not")])]),e._v(" "),s("li",[s("p",[e._v("Starts with")])]),e._v(" "),s("li",[s("p",[e._v("Ends with")])]),e._v(" "),s("li",[s("p",[e._v("Greater than")])]),e._v(" "),s("li",[s("p",[e._v("Greater than or equal to")])]),e._v(" "),s("li",[s("p",[e._v("Less than")])]),e._v(" "),s("li",[s("p",[e._v("Less than or equal to")])])])]),e._v(" "),s("li",[s("p",[e._v("Complete the operand field or make a selection from the drop-down menu. The field selections are based on the selected filter type. To fetch the available field selections over the selected time range, click the "),s("strong",[e._v("Magnify")]),e._v(" icon. Optionally, you can select "),s("strong",[e._v("Advanced")]),e._v(" and enter the JSON coded filter.")])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("strong",[e._v("Save")]),e._v(" to save to save your custom query. Your custom query will be saved, the Saved Queries drop-down menu will be updated to include your saved custom query, the Custom Query section will be updated to display your custom query analytics, and your custom query will be available on the "),s("em",[e._v("Queries Overview")]),e._v(" screen.")])])]),e._v(" "),s("h2",{attrs:{id:"previewing-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#previewing-queries"}},[e._v("#")]),e._v(" Previewing Queries")]),e._v(" "),s("p",[e._v("To preview a custom query and not save it, click "),s("strong",[e._v("Submit")]),e._v(". The Custom Query section will be updated to display your custom query analytics.")]),e._v(" "),s("h2",{attrs:{id:"saving-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#saving-queries"}},[e._v("#")]),e._v(" Saving Queries")]),e._v(" "),s("p",[e._v("To save a custom query, click "),s("strong",[e._v("Save")]),e._v(". Your custom query will be saved, the Saved Queries drop-down menu will be updated to include your saved custom query, the Custom Query section will be updated to display your custom query analytics, and your custom query will be available on the "),s("em",[e._v("Queries Overview")]),e._v(" screen.")]),e._v(" "),s("h2",{attrs:{id:"clearing-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clearing-queries"}},[e._v("#")]),e._v(" Clearing Queries")]),e._v(" "),s("p",[e._v("To clear the custom query selections and fields, click "),s("strong",[e._v("Clear")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"editing-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#editing-queries"}},[e._v("#")]),e._v(" Editing Queries")]),e._v(" "),s("p",[e._v("To edit a custom query:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Select the custom query to edit from the Saved Queries drop-down menu or from the "),s("em",[e._v("Queries Overview")]),e._v(" screen.")]),e._v(" "),s("p",[s("img",{attrs:{src:i(993),alt:"custom_queries_edit"}})])]),e._v(" "),s("li",[s("p",[e._v("Edit the "),s("strong",[e._v("Method")]),e._v(", "),s("strong",[e._v("Field")]),e._v(", "),s("strong",[e._v("Grouping")]),e._v(", and "),s("strong",[e._v("Date Range")]),e._v(" selections as needed.")])]),e._v(" "),s("li",[s("p",[e._v("(Optional) Click "),s("strong",[e._v("Preview")]),e._v(" to preview your custom query changes. The Custom Query section will be updated to display your custom query analytics changes.")])]),e._v(" "),s("li",[s("p",[e._v("Edit the filtering as needed.")])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("strong",[e._v("Save")]),e._v(" to save your custom query changes. The Custom Query section will be updated to display your custom query analytics changes.")])])]),e._v(" "),s("h2",{attrs:{id:"deleting-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deleting-queries"}},[e._v("#")]),e._v(" Deleting Queries")]),e._v(" "),s("p",[e._v("To delete a custom query:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Select the custom query to delete from the Saved Queries drop-down menu or from the "),s("em",[e._v("Queries Overview")]),e._v(" screen.")])]),e._v(" "),s("li",[s("p",[e._v("Click "),s("strong",[e._v("Delete")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Enter the name of the query to delete in the "),s("em",[e._v("Delete Confirmation")]),e._v(" screen.")])]),e._v(" "),s("li",[s("p",[e._v("To confirm the query deletion, click "),s("strong",[e._v("I understand that this is a permanent and irreversible action. Continue")]),e._v(".")])])]),e._v(" "),s("h2",{attrs:{id:"filtering-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filtering-queries"}},[e._v("#")]),e._v(" Filtering Queries")]),e._v(" "),s("p",[e._v("You can filter queries using either basic filtering or advanced filtering.")]),e._v(" "),s("h3",{attrs:{id:"basic-filtering"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-filtering"}},[e._v("#")]),e._v(" Basic Filtering")]),e._v(" "),s("p",[e._v("To configure basic filtering:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Select "),s("strong",[e._v("Basic")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("For Match, select either "),s("strong",[e._v("All")]),e._v(" or "),s("strong",[e._v("Any")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Click the "),s("strong",[e._v("Plus")]),e._v(" icon to add a filter.")])]),e._v(" "),s("li",[s("p",[e._v("Select the type of filter. The type of filter drop-down menu selections are:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Custom - If selected, enter the custom field information.")])]),e._v(" "),s("li",[s("p",[e._v("Event")])]),e._v(" "),s("li",[s("p",[e._v("Application")])]),e._v(" "),s("li",[s("p",[e._v("Platform")])]),e._v(" "),s("li",[s("p",[e._v("Platform Version")])]),e._v(" "),s("li",[s("p",[e._v("Environment")])]),e._v(" "),s("li",[s("p",[e._v("Country")])]),e._v(" "),s("li",[s("p",[e._v("Session")])]),e._v(" "),s("li",[s("p",[e._v("Session Length")])])])]),e._v(" "),s("li",[s("p",[e._v("Select a filter operand. The filter operand selections are:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Equals")])]),e._v(" "),s("li",[s("p",[e._v("Not")])]),e._v(" "),s("li",[s("p",[e._v("Starts with")])]),e._v(" "),s("li",[s("p",[e._v("Ends with")])]),e._v(" "),s("li",[s("p",[e._v("Greater than")])]),e._v(" "),s("li",[s("p",[e._v("Greater than or equal to")])]),e._v(" "),s("li",[s("p",[e._v("Less than")])]),e._v(" "),s("li",[s("p",[e._v("Less than or equal to")])])])]),e._v(" "),s("li",[s("p",[e._v("Complete the operand field or make a selection from the drop-down menu. The selections are based on the selected filter type. To fetch the available field selections over the selected time range, click the "),s("strong",[e._v("Magnify")]),e._v(" icon.")])]),e._v(" "),s("li",[s("p",[e._v("(Optional) To add additional filters, click the "),s("strong",[e._v("Plus")]),e._v(" icon.")])]),e._v(" "),s("li",[s("p",[e._v("To save the configured filtering as part of a custom query, click "),s("strong",[e._v("Save")]),e._v(".")])])]),e._v(" "),s("h3",{attrs:{id:"advanced-filtering"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced-filtering"}},[e._v("#")]),e._v(" Advanced Filtering")]),e._v(" "),s("p",[e._v("To configure advanced filtering:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Select "),s("strong",[e._v("Advanced")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Enter a JSON coded filter in the code field. Note that the code field will be highlighted unless a valid filter code is entered. For example, to create a filter to match application installation in the production environment, enter the following code in the field:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n    "$match": {\n        "event": "app.install",\n        "distribution.environment": "production"\n    }\n}\n')])])])]),e._v(" "),s("li",[s("p",[e._v("To save the configured filtering as part of a custom query, click "),s("strong",[e._v("Save")]),e._v(".")])])]),e._v(" "),s("h3",{attrs:{id:"delete-filters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-filters"}},[e._v("#")]),e._v(" Delete Filters")]),e._v(" "),s("p",[e._v("To delete a filter, select the "),s("strong",[e._v("Delete")]),e._v(" icon associated with the filter to delete.")]),e._v(" "),s("h2",{attrs:{id:"custom-data-query-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-data-query-example"}},[e._v("#")]),e._v(" Custom Data Query Example")]),e._v(" "),s("p",[e._v("If a "),s("code",[e._v("featureEvent")]),e._v(" is specified:")]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("doClick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Analytics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("featureEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'testFeature'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    testString"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'hello world'")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("The query to filter on the data "),s("code",[e._v("testString")]),e._v(" that is attached to the "),s("code",[e._v("featureEvent")]),e._v(" would be a "),s("code",[e._v("data.testString")]),e._v(" equal to hello world.")])])}),[],!1,null,null,null);t.default=r.exports},991:function(e,t,i){e.exports=i.p+"assets/img/custom_queries_overview.991994e4.png"},992:function(e,t,i){e.exports=i.p+"assets/img/custom_queries.8b22ff9d.png"},993:function(e,t,i){e.exports=i.p+"assets/img/custom_queries_edit.da2a6a4a.png"}}]);