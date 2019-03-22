(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./docz/examples/12-example-grouping.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),u=n("./node_modules/react/index.js"),d=n.n(u),m=n("./node_modules/@mdx-js/tag/dist/index.js"),p=n("./docz/utils/Playground.jsx"),b=n("./src/material-table.js"),c=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).layout=null,n}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=Object(a.a)(e,["components"]);return d.a.createElement(m.MDXTag,{name:"wrapper",components:t},d.a.createElement(m.MDXTag,{name:"h2",components:t,props:{id:"grouping-examples"}},"Grouping Examples"),d.a.createElement(p.a,{__position:0,__code:"<MaterialTable\n  columns={[\n    { title: 'Ad\u0131', field: 'name' },\n    { title: 'Soyad\u0131', field: 'surname' },\n    { title: 'Cinsiyet', field: 'sex' },\n    { title: 'Tipi', field: 'type' },\n    { title: 'Do\u011fum Y\u0131l\u0131', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Do\u011fum Yeri',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    {\n      name: 'Mehmet',\n      surname: 'Baran',\n      birthYear: 1987,\n      birthCity: 63,\n      sex: 'Male',\n      type: 'adult',\n    },\n    {\n      name: 'G\xfclcan',\n      surname: 'Baran',\n      birthYear: 1987,\n      birthCity: 34,\n      sex: 'Female',\n      type: 'adult',\n    },\n    {\n      name: 'Zerya Bet\xfcl',\n      surname: 'Baran',\n      birthYear: 1987,\n      birthCity: 34,\n      sex: 'Female',\n      type: 'child',\n    },\n  ]}\n  title=\"Grouping Example\"\n  options={{\n    grouping: true,\n  }}\n/>",__scope:{props:this?this.props:n,Playground:p.a,MaterialTable:b.b},__codesandbox:"undefined"},d.a.createElement(b.b,{columns:[{title:"Ad\u0131",field:"name"},{title:"Soyad\u0131",field:"surname"},{title:"Cinsiyet",field:"sex"},{title:"Tipi",field:"type"},{title:"Do\u011fum Y\u0131l\u0131",field:"birthYear",type:"numeric"},{title:"Do\u011fum Yeri",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63,sex:"Male",type:"adult"},{name:"G\xfclcan",surname:"Baran",birthYear:1987,birthCity:34,sex:"Female",type:"adult"},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:1987,birthCity:34,sex:"Female",type:"child"}],title:"Grouping Example",options:{grouping:!0}})),d.a.createElement(p.a,{__position:1,__code:"<MaterialTable\n  columns={[\n    { title: 'Ad\u0131', field: 'name' },\n    { title: 'Soyad\u0131', field: 'surname' },\n    {\n      title: 'Cinsiyet',\n      field: 'sex',\n      defaultGroupOrder: 0,\n      defaultGroupSort: 'desc',\n    },\n    { title: 'Tipi', field: 'type' },\n    { title: 'Do\u011fum Y\u0131l\u0131', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Do\u011fum Yeri',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    {\n      name: 'Mehmet',\n      surname: 'Baran',\n      birthYear: 1987,\n      birthCity: 63,\n      sex: 'Male',\n      type: 'adult',\n    },\n    {\n      name: 'G\xfclcan',\n      surname: 'Baran',\n      birthYear: 1987,\n      birthCity: 34,\n      sex: 'Female',\n      type: 'adult',\n    },\n    {\n      name: 'Zerya Bet\xfcl',\n      surname: 'Baran',\n      birthYear: 1987,\n      birthCity: 34,\n      sex: 'Female',\n      type: 'child',\n    },\n  ]}\n  title=\"Default Grouped Columns  Example\"\n  options={{\n    grouping: true,\n  }}\n/>",__scope:{props:this?this.props:n,Playground:p.a,MaterialTable:b.b},__codesandbox:"undefined"},d.a.createElement(b.b,{columns:[{title:"Ad\u0131",field:"name"},{title:"Soyad\u0131",field:"surname"},{title:"Cinsiyet",field:"sex",defaultGroupOrder:0,defaultGroupSort:"desc"},{title:"Tipi",field:"type"},{title:"Do\u011fum Y\u0131l\u0131",field:"birthYear",type:"numeric"},{title:"Do\u011fum Yeri",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63,sex:"Male",type:"adult"},{name:"G\xfclcan",surname:"Baran",birthYear:1987,birthCity:34,sex:"Female",type:"adult"},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:1987,birthCity:34,sex:"Female",type:"child"}],title:"Default Grouped Columns  Example",options:{grouping:!0}})))}}]),t}(d.a.Component);c.isMDXComponent=!0},"./docz/utils/Playground.jsx":function(e,t,n){"use strict";var a=n("./node_modules/docz/dist/index.esm.js"),r=n("./node_modules/codemirror/lib/codemirror.js");n.n(r).a.defaults.viewportMargin=1/0,t.a=a.c}}]);
//# sourceMappingURL=docz-examples-12-example-grouping.fbee3e065790ee1de065.js.map