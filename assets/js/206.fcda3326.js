(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{1017:function(e,a,s){"use strict";s.r(a);var n=s(21),t=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"modules-cloud-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-files"}},[e._v("#")]),e._v(" Modules.Cloud.Files")]),e._v(" "),s("TypeHeader"),e._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("h3",{attrs:{id:"create-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-file"}},[e._v("#")]),e._v(" Create File")]),e._v(" "),s("p",[e._v("This example creates a new file and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.Files.create({\n    name: 'test.dat',\n    file: Titanium.Filesystem.getFile('test.dat')\n}, function (e) {\n    if (e.success) {\n        var file = e.files[0];\n        alert('Success:\\n' +\n            'id: ' + file.id + '\\n' +\n            'name: ' + file.name + '\\n' +\n            'updated_at: ' + file.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("h3",{attrs:{id:"show-a-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-a-file"}},[e._v("#")]),e._v(" Show a File")]),e._v(" "),s("p",[e._v("This example retrieves information about a file and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.Files.show({\n    file_id: savedFileId\n}, function (e) {\n    if (e.success) {\n        var file = e.files[0];\n        alert('Success:\\n' +\n            'id: ' + file.id + '\\n' +\n            'name: ' + file.name + '\\n' +\n            'updated_at: ' + file.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("h3",{attrs:{id:"query-for-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-for-files"}},[e._v("#")]),e._v(" Query for Files")]),e._v(" "),s("p",[e._v("This example requests a list of files and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.Files.query({\n    page: 1,\n    per_page: 20\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.files.length);\n        for (var i = 0; i < e.files.length; i++) {\n            var file = e.files[i];\n            alert('id: ' + file.id + '\\n' +\n                'name: ' + file.name + '\\n' +\n                'updated_at: ' + file.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("h3",{attrs:{id:"update-a-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-a-file"}},[e._v("#")]),e._v(" Update a File")]),e._v(" "),s("p",[e._v("This example updates a file and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.Files.update({\n    file_id: savedFileId,\n    name: 'Notice'\n}, function (e) {\n    if (e.success) {\n        var file = e.files[0];\n        alert('Success:\\n' +\n            'id: ' + file.id + '\\n' +\n            'name: ' + file.name + '\\n' +\n            'updated_at: ' + file.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("h3",{attrs:{id:"remove-a-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-a-file"}},[e._v("#")]),e._v(" Remove a File")]),e._v(" "),s("p",[e._v("This example deletes a file and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.Files.remove({\n    file_id: savedFileId\n}, function (e) {\n    if (e.success) {\n        alert('Removed');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("ApiDocs")],1)}),[],!1,null,null,null);a.default=t.exports}}]);