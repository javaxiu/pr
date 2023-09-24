(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{320:function(t,a,e){"use strict";e.r(a);var s=e(14),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"概念-编辑器核心框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念-编辑器核心框架"}},[t._v("#")]),t._v(" 概念 - 编辑器核心框架")]),t._v(" "),a("blockquote",[a("p",[t._v("参考 lowcode-engine 的架构图 "),a("a",{attrs:{href:"https://lowcode-engine.cn/docV2/ud2pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://lowcode-engine.cn/docV2/ud2pdf"),a("OutboundLink")],1),t._v("，基本结构是经过业务考验的")])]),t._v(" "),a("h2",{attrs:{id:"核心框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心框架"}},[t._v("#")]),t._v(" 核心框架")]),t._v(" "),a("p",[t._v("可视化编辑器的核心，可以理解为一个流水线模板，它管理物料的导入（lowcode-engine叫入料）、可视化编辑（编排）、解析效果展示（渲染）、生成产物（出码）。\n这是我理解的一个完整的可视化编辑器分层结构图，是从详细的实现角度分析的，实际上也分别对应了入料、编排、渲染、出码 4 个环节\n"),a("img",{attrs:{src:"/pr//yuque/0/2022/jpeg/139763/1659679471196-2e02ee30-09c8-429b-af9f-d7155cceb39b.jpeg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),a("p",[t._v("可视化编辑器本质上是一种「入料-编排-渲染-出码 」这样的软件工程模式(pattern)，或者可以叫做框架（skeleton），在不同使用场景可以给每个环节赋予不同的实现，进而实现不同的工程目的。可视化编辑器的核心也应该是轻量级的，由丰富的扩展来实现此流程，扩展包含物料、设置器、插件，物料对应入料和渲染环节，设置器对应编排环节，插件则可以嵌入到整个声明周期的任意环节。\n思路和工作流程上 webpack 工作方式其实非常类似：\nwebpack:  代码 -> loader ->  plugin -> 生成代码。  (plugin贯穿整个生命周期，这里只是线性)\n可视化编辑:   组件  -> 画布  -> plugin  -> 生成代码。(plugin同样贯穿声明周期）")]),t._v(" "),a("h3",{attrs:{id:"物料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#物料"}},[t._v("#")]),t._v(" 物料")]),t._v(" "),a("p",[t._v("这篇讲得比较详细，大致分为基础组件、复合型组件。是否基础不在于代码体积和复杂度，在于是否是最小组成成分，比如文本展示、图像、对话框、表格等。一个好的物料体系，应该与日常工作写的 React 组件是同等级的，不应该引入过多概念。只管入参（props）和渲染（render）。\n如果一定需要日常开发的 React 组件有什么不同，那就是编辑态和渲染态，你可能想要做一些不同的事情。\n"),a("a",{attrs:{href:"https://www.yuque.com/xiwen-bxuha/pr/dl00ay?view=doc_embed",target:"_blank",rel:"noopener noreferrer"}},[t._v("物料类型"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"设置器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置器"}},[t._v("#")]),t._v(" 设置器")]),t._v(" "),a("p",[t._v("用于为组件配置参数（props）的组件，应该接受当前值（value）、经过用户操作之后（onChange） 通知框架此卡片的新值变成了什么。因此它对外表现应该是一个受控的类似 FormField 的组件，最简单的实现可以是这样：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("StringSetter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onChange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onChange"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onChange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("根据业务需要，在某些情况下你可能会需要「瞻前顾后」，就像 Form 表单一样，要关注另外一个 Field 改变了，这里需要作何反应。Setter 也是，你可能会需要知道这张卡片的其他值、画布上其他卡片当前的状态、以及触发其他卡片发生一些改变，这时候 Setter 的入参可以额外多一个 ctx ，用于获取这些你需要的信息。")]),t._v(" "),a("h3",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("p",[t._v("正如上文所说，一个框架的核心只包含核心流程，一些非必须行为应该以嵌入的方式，通过监听"),a("strong",[t._v("核心流程")]),t._v("、"),a("strong",[t._v("调用框架 api")]),t._v(" 影响框架的数据和流程，从而拓展功能。比如历史记录撤销操作，这是大部分编辑器都具备的能力，但它并非核心流程必须步骤。这里抽取部分环节加以解释：\n"),a("img",{attrs:{src:"/pr//yuque/__mermaid_v3/ebd275734074d286aa227785602d1a68.svg",alt:""}}),t._v("从这个流程图可以看到，从 UI 到 编辑器核心，可以在很多地方提供 api ，api 大致分 3 种类型：")]),t._v(" "),a("ol",[a("li",[t._v("注入型，如 UI 注入，也就是事先注入一部分代码，框架才能正常（业务含义上的）初始化")]),t._v(" "),a("li",[t._v("事件型-无副作用，只管监听某些关键事件，例如 Schema 的增删改动作。")]),t._v(" "),a("li",[t._v("事件行-有副作用，更类似钩子，这里的设计跟 "),a("a",{attrs:{href:"https://webpack.js.org/api/plugins/#tapable",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack tapable"),a("OutboundLink")],1),t._v(" 很类似，在关键位置提供同步或 PromiseLike 的钩子，插件监听这些钩子并修改此位置的值，返回给框架，框架拿到新值继续下一步")])]),t._v(" "),a("p",[t._v("举例：")]),t._v(" "),a("ol",[a("li",[t._v("历史记录与撤销重做插件：监听 Schema.Update -> 记录快照 -> 监听键盘事件和撤销图标 -> 使用Schema.reload api -> 重设当前页面 schema")]),t._v(" "),a("li",[t._v("限制某些字段不能为空：监听 Sync.Schema.Update -> 判断是否是目标组件 -> 判断 key 是否是目标 -> 判断值是否空 -> 返回默认值")])]),t._v(" "),a("h3",{attrs:{id:"扩展包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展包"}},[t._v("#")]),t._v(" 扩展包")]),t._v(" "),a("p",[t._v("通常在一个特定的业务领域，比如流程设计、运营、toB 中后台管理系统等，不同的业务领域有不同的界面样式、素材库的风格，这些反应在低代码编辑器上，就是将有关联的插件、物料、设置器的组合起来，因此基于这种需求会将一批特定领域的这 3 种代码放在一起（比如 npm 包) 作为一个领域扩展包，而不是每个单独各自管理。这样组合之后再进行部署的系统，可以理解为一个特定领域的租户。\n"),a("a",{attrs:{href:"https://www.yuque.com/xiwen-bxuha/pr/cchuly?inner=Nmtid&view=doc_embed",target:"_blank",rel:"noopener noreferrer"}},[t._v("从可视化编辑器到低代码"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);