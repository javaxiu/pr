(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{325:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"google-workspace-add-ons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-workspace-add-ons"}},[t._v("#")]),t._v(" Google Workspace add-ons")]),t._v(" "),a("h2",{attrs:{id:"google-workspace-market"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-workspace-market"}},[t._v("#")]),t._v(" Google workspace market")]),t._v(" "),a("h3",{attrs:{id:"名词解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[t._v("#")]),t._v(" 名词解释")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developers.google.com/apps-script/",target:"_blank",rel:"noopener noreferrer"}},[t._v("apps-script"),a("OutboundLink")],1),t._v(": 用于开发 add-ons 的编程语言，推荐语法同 javascript, 也可以使用 Java 等语言。用法类似于 serverless fc ，可用于编写谷歌定制的运行环境，包含UI api、连接 G suit 的 api ，用于开发 GWA、serverless 等应用。apps-script 对于 Google 来说就是它的生态编程语言，换言之，生态开发者在其基础上开发的应用，都是基于这一语言体系。用它来开发的应用包括但不限于：\n"),a("ol",[a("li",[t._v("作为脚本在 IDE 中直接执行一系列操作调用 G-suit 。该应用还可被三方服务器执行")]),t._v(" "),a("li",[t._v("无 UI 的 Gmail 聊天机器人")]),t._v(" "),a("li",[t._v("Serverless 服务，提供 get/post 请求，返回 html / json 数据")]),t._v(" "),a("li",[t._v("GWA 应用")])])]),t._v(" "),a("li",[t._v("Add-ons: 基于 apps-script 构建的应用， app 可以是以下任意一种应用。分两大类：\n"),a("ul",[a("li",[t._v("Google workspace add-ons：谷歌套件的扩展应用 （为方便描述 Google workspace add-ons, 下文简称 GWA，非官方称呼）")]),t._v(" "),a("li",[t._v("Editor add-ons：在 Docs / sheet 等文档应用里充当效率插件的应用。类似于微软办公套件里的宏脚本")])])])]),t._v(" "),a("p",[t._v("一个 GWA 可以做什么")]),t._v(" "),a("ul",[a("li",[t._v("形态：基本 UI 语言是卡片。一个典型例子是 quick-access side panel:  可嵌入到谷歌网页应用右侧的快捷启动应用")]),t._v(" "),a("li",[t._v("能力：通过 api 对接 G-suit 后台服务，例如获取用户的日程、为用户创建日程")]),t._v(" "),a("li",[t._v("发布：可上架到 google workspace ，供其他用户安装使用")]),t._v(" "),a("li",[t._v("安装：开发一个 GWA 多处使用:  Gmail、Calendar、Driver、Docs 等")])]),t._v(" "),a("h2",{attrs:{id:"gwa-机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gwa-机制"}},[t._v("#")]),t._v(" GWA 机制")]),t._v(" "),a("p",[t._v("按照官方文档，实现一个 homepage 型卡片， 分析其开发、运行、渲染方式")]),t._v(" "),a("h3",{attrs:{id:"ide-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ide-代码"}},[t._v("#")]),t._v(" IDE / 代码")]),t._v(" "),a("h4",{attrs:{id:"ide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ide"}},[t._v("#")]),t._v(" IDE")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://script.google.com/home/projects/1brSxLVClpnHxtERgVeLNNtPymrGbBOYS8857Vp3uy0jmFeVLkH8VJkrB/edit",target:"_blank",rel:"noopener noreferrer"}},[t._v("编辑器地址"),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"/pr//yuque/0/2022/png/139763/1647343318694-f1c2fbe9-0f2d-4c82-ae92-3a223db7ffc9.png",alt:"image-20220315103051202.png"}})]),t._v(" "),a("h4",{attrs:{id:"appscript-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appscript-json"}},[t._v("#")]),t._v(" appscript.json")]),t._v(" "),a("p",[a("img",{attrs:{src:"/pr//yuque/0/2022/png/139763/1647343336737-89843b1b-57da-4465-a829-b63640782e10.png",alt:"image-20220315103232706.png"}})]),t._v(" "),a("p",[t._v("其中，runtimeVersion 指所使用的的语言，这里的 V8 代表用 v8 nodejs 环境运行这一程序\naddOns 里的 homepageTrigger 代表点击 G-suit 右侧的图标时触发的函数。下面的 docs/slides/sheets 代表此应用安装于此三个 G-suit")]),t._v(" "),a("h4",{attrs:{id:"app-gs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-gs"}},[t._v("#")]),t._v(" app.gs")]),t._v(" "),a("p",[t._v("代码较长，做了一些关键代码删减")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// appscript 描述的点击图标入口")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onHomepage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSelectionCard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每次刷新页面内容都需要重新执行 newCardBuild 一次")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSelectionCard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" hostApp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hostApp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" builder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CardService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newCardBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "From" language selection & text input section')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fromSection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CardService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newCardSection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addWidget")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateLanguagesDropdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'origin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'From: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" originLanguage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addWidget")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CardService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newTextInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFieldName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTitle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Enter text...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMultiline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hostApp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'docs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fromSection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addWidget")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hostApp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sheets'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addSection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fromSection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 与宿主应用的 UI 级 api")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDocsSelection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" selection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DocumentApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getActiveDocument")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSelection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" elements "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" selection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRangeElements")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'选择了文字'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" translation "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LanguageApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("formInput"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("formInput"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重新渲染整页")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSelectionCard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" originLanguage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" destinationLanguage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" translation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("从代码可以得到 3 个关键信息")]),t._v(" "),a("ol",[a("li",[t._v("UI 是函数式操作的，不具备传统 html/js/css 的开发方式，即: 组件、样式、UI 风格，都是有限自定义的")]),t._v(" "),a("li",[t._v("与宿主 app 是有单向互通方式，可以在 add-on 里使用 app 暴露出来的某些 api")]),t._v(" "),a("li",[t._v("G-suit 有一些诸如翻译的编程式 api ，可以快速调用")])]),t._v(" "),a("p",[t._v("顺带一提，代码中的 Logger.log 是在控制台输出的，并不是在浏览器 console 里")]),t._v(" "),a("p",[a("img",{attrs:{src:"/pr//yuque/0/2022/png/139763/1647343350088-c77730bd-39cc-4994-a2d2-ef2692fe87a2.png",alt:"image-20220315105715739.png"}})]),t._v(" "),a("h3",{attrs:{id:"渲染机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染机制"}},[t._v("#")]),t._v(" 渲染机制")]),t._v(" "),a("p",[t._v("在点击 G-suit 右侧的快捷 app 入口时，发生如图的 ExecuteAddOn 请求，拉取到的 response 是一个类 protobuf 的数据。也即可以看出，上一节的代码，实际运行环境并不在前端，而是在后台的 v8 虚拟机中，运行输出为如上的数据结构，再由页面发起渲染。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/pr//yuque/0/2022/png/139763/1647343358241-a235c6e9-039b-4cb2-90ba-1b7a0626c6ee.png",alt:"image-20220315105922149.png"}})]),t._v(" "),a("p",[t._v("在页面上有执行操作（如按钮点击）时，会触发请求 SubmitForm")]),t._v(" "),a("p",[a("img",{attrs:{src:"/pr//yuque/0/2022/png/139763/1647343371456-0d7b5437-96f8-46f1-9f3e-53a2232bad6e.png",alt:"image-20220315110447228.png"}})]),t._v(" "),a("p",[t._v("该请求返回的数据同第一次返回的结果。整个 add-on 的显示方式是有严格的样式混淆，且独立运行于 iframe 中，与宿主应用完全隔离。（看起来似乎还用了某种基于 dom-element 的类似 angular 的 mvc 的 js 框架，jsaction 名称也是混淆的）")]),t._v(" "),a("p",[a("img",{attrs:{src:"/pr//yuque/0/2022/png/139763/1647343380997-c75fbe2e-65ce-4690-a4cf-3a602cc81a27.png",alt:"image-20220315142147531.png"}})]),t._v(" "),a("p",[t._v("通过上述的分析，可以来出来 GWA 的 「渲染 - service」 关系，可以简单类比微信小程序的运行机制")]),t._v(" "),a("p",[a("img",{attrs:{src:"/pr//yuque/__mermaid_v3/7fab6794d5b44e10d368c5e26df08199.svg",alt:""}}),t._v("\n可见这个过程是类似小程序的双线程机制（说不定小程序的机制就是照 GWA 借鉴的），区别在与小程序的双线程都在本地客户端上的两个运行沙箱环境，而 GWA 的双线程是渲染进程在前端侧，server 进程在服务端侧的 FC 里。共同点都是开发者编写的代码，并不直接运行于用户可以看到的渲染容器中，也无法通过任何手段获取到 UI 上的 dom 。而相对的，service 侧代码又能获得一定的 api 能力，小程序是有 app / 微信生态api，GWA 是有 G-Suit 系列生态套件的 api。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("更进一步的延伸一点，GWA 的本地操作这点，跟蚂蚁/钉钉的可交互卡片比较类似，数据会分为 localData / remoteData ，区别是可交互卡片会让开发者关注哪些是 localData，哪些是 remoteData，而 GWA 的整个开发过程，开发者全程都在 gs 文件中开发，不需要关心这些问题。\n")])])]),a("h2",{attrs:{id:"gwa-使用后台服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gwa-使用后台服务"}},[t._v("#")]),t._v(" GWA 使用后台服务")]),t._v(" "),a("p",[t._v("当自定义的 GWA 应用需要有三方后台时，三方后台如何与 GWA 前端、Google server 后台产生数据联动，如何使用它的后台服务")]),t._v(" "),a("h3",{attrs:{id:"使用-g-suit-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-g-suit-服务"}},[t._v("#")]),t._v(" 使用 G-suit 服务")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("有些 g-suit 服务是无需用户授权使用的，例如 Translate，这类服务不需要额外配置就可以直接在 gs 代码中使用。使用方式是类似 `LanguageApp.translate()`  这样的全局变量。\n\n而如果使用的是一些需要用户授权的服务，例如 Calendar、YouTube、Mail，则需要手动在 IDE 中配置服务，否则不会有 LSP 代码提示、保存代码时也会报错阻断保存/发布。\n\n此操作实际上是对 appscripts.json 的一个可视化操作，也可以直接在 appscripts.json 中配置相应的 oauthScopes & dependencies属性。其中， [OAuthScopes](https://developers.google.com/apps-script/add-ons/concepts/workspace-scopes?hl=en)\n")])])]),a("p",[a("img",{attrs:{src:"/pr//yuque/0/2022/png/139763/1647343392069-54df348b-b2d9-49a2-a8b6-fb0559718895.png",alt:"image-20220315155335183.png"}})]),t._v(" "),a("h3",{attrs:{id:"oauth-授权三方-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oauth-授权三方-app"}},[t._v("#")]),t._v(" OAuth 授权三方 app")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("即 用户安装一个 GWA，此 GWA 需要使用某些权限，会在安装过程中由用户确认 Google 账号、授予的权限，这个过程也就是 「用户 -> oauth -> 授权 GWA 应用权限」 过程。当 GWA 版本更新、代码更新、所属 owner 发生变更，这一授权过程都会重新触发。\n\n另外，此 OAuth 过程发生在 GWA 内部，GWA 开发者并不需要关心，也无法定义任何流程（一般来说也都是标准流程不应该定制）。\n")])])]),a("p",[a("img",{attrs:{src:"/pr//yuque/0/2022/png/139763/1647343400406-5f79d9f7-b459-4cb8-b1bf-7d177a4f77e4.png",alt:"image-20220315161157216.png"}}),a("img",{attrs:{src:"/pr//yuque/0/2022/png/139763/1647343444708-db5638e3-c7e3-4a19-a477-a568cb35b990.png",alt:"image-20220315161233664.png"}})]),t._v(" "),a("h3",{attrs:{id:"app-登录三方服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-登录三方服务器"}},[t._v("#")]),t._v(" app 登录三方服务器")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("GWA 到开发者自己的服务器（对谷歌来说就是三方服务器），如果为了安全需要而需要用户登录，这个过程相当于 『用户 -> OAuth2 -> 三方服务器』。这一过程 GWA 有标准开发方案，用于登录跳转、授权、AT/RT 存储使用\n\n以 zoom 的 GWA 应用举例\n")])])]),a("p",[a("img",{attrs:{src:"/pr//yuque/0/2022/png/139763/1647343469700-0493fa93-6bbd-4cda-a009-ec6a789c3b0d.png",alt:"image-20220315162048559.png"}}),a("img",{attrs:{src:"/pr//yuque/0/2022/png/139763/1647343479665-715c8a9c-54ef-4e4b-9e1b-d57a7b88da3d.png",alt:"image-20220315162214579.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/pr//yuque/0/2022/png/139763/1647343514919-26a15192-41e5-4a69-874d-560397fdf4ab.png",alt:"image-20220315162413183.png"}}),a("img",{attrs:{src:"/pr//yuque/0/2022/png/139763/1647343525207-3a80713d-ea43-4e48-9959-a708589fdad5.png",alt:"image-20220315162751406.png"}})]),t._v(" "),a("p",[t._v("通过 http 抓包可以看到，zoom 的日程是通过 "),a("a",{attrs:{href:"https://addons-pa.clients6.google.com/$rpc/google.internal.apps.addons.v1.AddOnService/ExecuteAddOn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://addons-pa.clients6.google.com/$rpc/google.internal.apps.addons.v1.AddOnService/ExecuteAddOn"),a("OutboundLink")],1),t._v(" 返回的")]),t._v(" "),a("p",[t._v("在登录成功之后，GWA 与三方服务器的通信方式，可通过 "),a("a",{attrs:{href:"https://github.com/googleworkspace/apps-script-oauth2/blob/master/samples/NoLibrary/Code.gs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nolibrary"),a("OutboundLink")],1),t._v(" 的方式对接，也可以通过 "),a("a",{attrs:{href:"https://github.com/googleworkspace/apps-script-oauth2",target:"_blank",rel:"noopener noreferrer"}},[t._v("app-script-oauth2"),a("OutboundLink")],1),t._v(" sdk 进行对接。也可以使用 apps-script 内置的一些工具如 "),a("a",{attrs:{href:"https://developers.google.com/apps-script/reference/properties/properties-service",target:"_blank",rel:"noopener noreferrer"}},[t._v("PropertiesService"),a("OutboundLink")],1),t._v(" 这样的 k-v 存储工具或者 JDBC 来记录。Google 推荐是授权对用户只见一次，没有 RT 过期的场景。\n简单代码类似")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("maybeAuthorized"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Invoke the authorization flow using the default authorization")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prompt card.")]),t._v("\n    CardService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newAuthorizationException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAuthorizationUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAuthorizationUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setResourceDisplayName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Display name to show to the user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("throwException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"应用管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用管理"}},[t._v("#")]),t._v(" 应用管理")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("不仅针对 GWA 应用，所有的 app-scripts 构建的应用都适用。官方全称为 Google Apps Script API，通过此 api 可以在本地构建、发布、监控、运行 GWA 的本地工具。\n单纯新建放在 console.google 上的非 GWA 应用，本身可以被一些触发器触发运行，例如定时器等。但如果三方服务器需要主动触发，也可以通过 api 触发其运行\n")])])]),a("h2",{attrs:{id:"google-workspace-生态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-workspace-生态"}},[t._v("#")]),t._v(" Google Workspace 生态")]),t._v(" "),a("p",[t._v("所有的三方 app 开发都在 "),a("a",{attrs:{href:"https://console.cloud.google.com/apis/api/calendar-json.googleapis.com/credentials?project=newbee-344111",target:"_blank",rel:"noopener noreferrer"}},[t._v("console"),a("OutboundLink")],1),t._v(" 中创建应用，类型取决于 app 的 manifest\n"),a("img",{attrs:{src:"/pr//yuque/0/2022/jpeg/139763/1647346018315-6cf4a474-633c-486a-8e36-f50ec84da19b.jpeg",alt:""}}),t._v("\n通过统一的开发方式（apps-scripts）和运行环境（google workspace app）实现的生态，谷歌很多产品都能从技术角度做成体系化的东西，就像 chrome 插件与 chrome os，从而形成一个体系化的商业产品环境")])])}),[],!1,null,null,null);a.default=e.exports}}]);