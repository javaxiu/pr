(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{323:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"概念-选型设计与调研"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念-选型设计与调研"}},[t._v("#")]),t._v(" 概念 - 选型设计与调研")]),t._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("p",[t._v("因为业务需要，需要实现一个可视化编辑生成网页的工具。其实社区已经有大量这类的轮子，可以参考这个文章 "),a("a",{attrs:{href:"https://juejin.cn/post/6858881797490098190",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6858881797490098190"),a("OutboundLink")],1),t._v("，里面列举了百度/阿里/美团/京东等大厂的数十个大小开源的或者不开源的前端可视化搭建平台。\n如果需要做一个类似的事情的话，有没有必要自己实现一个？还是直接用开源版本改？其实从实现原理上分析一下就会很清晰。所以本文是从自己实现一个低代码编辑器需要做哪些事情，以及一般开源产品做了哪些事情的角度，来看看探讨一般开源低代码编辑器对每个不同的业务场景来说有多大的利用价值。")]),t._v(" "),a("h2",{attrs:{id:"组成要素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组成要素"}},[t._v("#")]),t._v(" 组成要素")]),t._v(" "),a("p",[t._v("日常最常用的可视化编辑器，可能就是 PPT 了，整个 app 都是围绕着着三个核心模块展开的：物料抽屉（素材库）、画布、物料配置（素材参数配置）。即：从"),a("strong",[t._v("物料抽屉")]),t._v("里选择若干物料拖放到"),a("strong",[t._v("画布")]),t._v("里，按需给画布上的素材通过"),a("strong",[t._v("素材配置，"),a("strong",[t._v("最后通过")]),t._v("操作工具区")]),t._v("导出需要的效果。可以导出 ppt、pdf、甚至是视频。\n"),a("img",{attrs:{src:"/yuque/0/2022/png/139763/1658152649621-e5e1a724-9036-456e-a40c-12b4008f4c27.png",alt:"image.png"}}),t._v("\n而这个模式，不仅仅是 ppt，我们熟知的其他 office套件、adobe 套件（photoshop、premium、audio-mixing，甚至是 dreamware），几乎所有创作型软件的设计都是这个模式。所以一个前端可视化编辑器也自然顺应这个模式，比如 "),a("a",{attrs:{href:"https://lowcode-engine.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("lowcode-engine"),a("OutboundLink")],1),t._v(" 的应用组成：\n"),a("img",{attrs:{src:"/yuque/0/2022/png/139763/1658153155590-8cab7cc5-9ab1-4978-aa98-268c4a7eb5f5.png",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"技术要素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术要素"}},[t._v("#")]),t._v(" 技术要素")]),t._v(" "),a("p",[t._v("可视化编辑器，简单理解是一张白纸，可以在上面写写画画，也可以像设计师理解的炒菜。对于生产一个静态产物，如 photoshop、word，这个解释已经足够，而如果是 flash 、premium 这类动态产物，这个过程则更像设计一幕话剧，对应过来，就是演员等候（素材库）-> 配置演员台词服饰(素材属性) ->  故事脚本(业务逻辑）。纯静态产物不包含第三个步骤。\n下面看看基于界面上的三个区域，从界面内容到分别分析一下需要做哪些事情")]),t._v(" "),a("h3",{attrs:{id:"_1-画布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-画布"}},[t._v("#")]),t._v(" 1. 画布")]),t._v(" "),a("p",[t._v("画布是整个界面的核心，可以说其他的部分都是围绕着它来实现的。从程序设计的角度看，不同的创作目标背后需要有不同的数据模型，这个模型才是画布和整个可视化编辑器的核心。比如 photoshop，核心模型是图层、图层组、图层上的各种图形元素，以及这些元素的坐标等信息；flash / premium 则是在 photoshop 的模型基础上增加图层的动画行为。")]),t._v(" "),a("h4",{attrs:{id:"_1-1-画布的技术选型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-画布的技术选型"}},[t._v("#")]),t._v(" 1.1 画布的技术选型")]),t._v(" "),a("p",[t._v("页面元素通常有两种布局方式：类似 CSS 盒模型瀑布流布局、完全平铺的绝对布局。图层是基于图层嵌套+瀑布流模式的，如 "),a("a",{attrs:{href:"https://lowcode-engine.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("lowcode-engine"),a("OutboundLink")],1),t._v(" ；像 sketch/figma 一样自由布局类型的，如 "),a("a",{attrs:{href:"https://www.canva.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("canva"),a("OutboundLink")],1),t._v(" 。基于实现方式划分的，又有基于 html div 来实现的和基于 html canvas 实现的，简单画个表格加以对比")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("布局方式")]),t._v(" "),a("th",[t._v("实现方式")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"https://lowcode-engine.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("lowcode-engine"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("瀑布布局")]),t._v(" "),a("td",[t._v("html div")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://wix.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("wix"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("瀑布流+局部绝对布局")]),t._v(" "),a("td",[t._v("html div")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://www.canva.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("canva"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("自由布局(绝对定位)")]),t._v(" "),a("td",[t._v("html div")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://figma.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("figma"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("自由布局")]),t._v(" "),a("td",[t._v("html canvas")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"http://fabricjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("fabric"),a("OutboundLink")],1),t._v("(很多产品都是基于这个SDK)")]),t._v(" "),a("td",[t._v("自由布局")]),t._v(" "),a("td",[t._v("html canvas")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://processon.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("process on"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("自由布局")]),t._v(" "),a("td",[t._v("html canvas")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"http://datav.jiaminghi.com/demo/manage-desk/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("datav"),a("OutboundLink")],1),t._v(" ("),a("a",{attrs:{href:"https://www.aliyun.com/product/bigdata/datav",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里云"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("td",[t._v("瀑布布局")]),t._v(" "),a("td",[t._v("html div")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://www.activiti.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("activiti"),a("OutboundLink")],1),t._v("  / "),a("a",{attrs:{href:"https://demo.bpmn.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("bpms"),a("OutboundLink")],1),t._v(" 这类流程设计器")]),t._v(" "),a("td",[t._v("自由布局")]),t._v(" "),a("td",[t._v("html svg")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://www.yuque.com/xiwen-bxuha/pr/framer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Framer"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("自由布局")]),t._v(" "),a("td",[t._v("html div")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://tencent.github.io/tmagic-editor/playground/index.html#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("魔方"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("自由布局")]),t._v(" "),a("td",[t._v("html div")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("注: 表格里的 fabric 并不是具体的某类可视化编辑器，它是个 sdk，因为很多可视化搭建类产品都是基于它来实现的，所以用它来代表这类产品")])]),t._v(" "),a("p",[a("strong",[t._v("自由布局")]),t._v("更适合给创作者提供画布宽高比例固定的产物，例如图片海报制作、微信(手机端)运营页、易企秀这类的东西；"),a("strong",[t._v("瀑布流布局")]),t._v("更适合做传统信息流网页，如产品宣传主页、to B 中后台页面；\nhtml div 适合产物是网页且内容相对动态，需要有良好屏幕适配性的效果，如大量数据动态的图文、实现响应式支持多端功能；html canvas 适合产物是相对固定内容，如网页相册/海报/网页视频；html svg 合适构建矢量型图表/流程类的信息展示或信息结构，如流程配置器/流程图/uml图。\n没有完美的的技术实现，只有根据自己的可视化编辑器的创作产物的使用场景，选择合适的技术实现")]),t._v(" "),a("h4",{attrs:{id:"_1-2-画布数据模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-画布数据模型"}},[t._v("#")]),t._v(" 1.2 画布数据模型")]),t._v(" "),a("p",[t._v("创作者实际编辑的背后，对应的是一个文档模型（schema) 。也就是一般软件开发理解中的 view-model 里的 m.  可以说，用户是通过画布视图，在实际操作这个文档模型. 每个图层对应 schema 的一个节点。而对于每个图层的坐标、数据配置，则是对每个叶子节点做属性配置。根据预期提供给创作者自由布局还是瀑布布局的不同，schema 也会有所不同。\n一个瀑布流，天然就是树形结构，从上往下，由表及里组合嵌套。这里引用"),a("a",{attrs:{href:"https://lowcode-engine.cn/lowcode#233-%E5%AE%B9%E5%99%A8%E7%BB%93%E6%9E%84%E6%8F%8F%E8%BF%B0-a",target:"_blank",rel:"noopener noreferrer"}},[t._v(" lowcode-engine 的协议"),a("OutboundLink")],1),t._v("加以说明，这里对协议做了最简化，结构大致可以描述为：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 组件唯一名称, 表示此节点使用哪个组件渲染 */")]),t._v("\n  componentName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 节点唯一ID */")]),t._v("\n  id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 节点定制的参数 */")]),t._v("\n  props"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 子节点, 组合模式 */")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//等效于 xml 系的结构")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//<xxx id props>children</xxx>")]),t._v("\n")])])]),a("p",[t._v("基于这个数据结构，就可以完整描述一个网页所需要的结构了。这个数据结构其实在 React / vue 的组件里甚至是 xml 语法都是等效的。而整个可视化编辑器基本上就都是围绕着这个基本的结构编辑展开的。")]),t._v(" "),a("h3",{attrs:{id:"_1-3-内容渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-内容渲染"}},[t._v("#")]),t._v(" 1.3 内容渲染")]),t._v(" "),a("p",[t._v("编辑的文档模型要在 canvas 上最终展示出来一个最终效果，则需要一段类似如下的递归渲染代码来实现，这是一个最简化的渲染引擎核心：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("renderNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("schema"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n     node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n")])])]),a("p",[t._v("有这3个问题需要在递归渲染之前解决：")]),t._v(" "),a("ol",[a("li",[t._v("模拟器环境沙盒隔离：模拟器环境需要隔离画布里的 css (比如position:fixed / @media)、js（比如window.xx) 的一些全局副作用影响到了可视化编辑器？")]),t._v(" "),a("li",[t._v("组件注入：React.createElement 的第一个参数 node.componentName, 我们知道这个值只是个字符串，如何将字符串映射成真正的组件 React.ComponentType？也就是模拟器的组件注入和 schema 映射问题")]),t._v(" "),a("li",[t._v("组件开发：那么组件如何开发？是否需要写一份组件，然后再写一份组件元信息？")])]),t._v(" "),a("h3",{attrs:{id:"_2-素材库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-素材库"}},[t._v("#")]),t._v(" 2. 素材库")]),t._v(" "),a("p",[t._v("通过上面「一切都是围绕 schema 展开」的说明，素材库其实就是用于承载 schema 里 node 节点有哪些可选 componentName 的可视化选择。表面上，它负责承担组件的分组检索、点击/拖入到画布，以及当一个组件被拖入到画布时初始的 props 值是什么。而这背后对应了另一个概念的数据模型：组件元信息。在 lowcode-engine 里这个概念称作是物料描述。同样借用 "),a("a",{attrs:{href:"https://lowcode-engine.cn/material",target:"_blank",rel:"noopener noreferrer"}},[t._v("lowcode-engine 的协议"),a("OutboundLink")],1),t._v("加以说明。可以稍作简化如下：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ComponentMeta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 物料分组,用于素材库分组,并不是必须的 */")]),t._v("\n  catalog"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 物料名称 */")]),t._v("\n  componentDisplayName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 物料唯一名称,对应 schema 里的 componentName */")]),t._v("\n  componentName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 物料描述,非必须 */")]),t._v("\n  desc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 是否可以插入子物料 */")]),t._v("\n  isContainer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 预览图,用于在素材库里的展示,非必须 */")]),t._v("\n  screenshot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://xxx.jpg"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 物料参数 */")]),t._v("\n  props"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 参数类型 */")]),t._v("\n    propType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"union"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 参数默认值 */")]),t._v("\n    defaultValue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 参数名称 */")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 此参数是否不能为空, 用于设置器里校验 */")]),t._v("\n    required"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 参数描述,用于设置器给创作者理解的参数名称 */")]),t._v("\n    description"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 此参数通过何种设置器来配置 */")]),t._v("\n    setter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 设置器的参数 */")]),t._v("\n    setterConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 仅物料有这个字段，一般组件没有. Node 类型就是上面的 Schema 类型 */")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("基于这些信息，此物料才可以被可视化的在素材库中展示、在组件属性配置面板里")]),t._v(" "),a("h3",{attrs:{id:"_3-属性配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-属性配置"}},[t._v("#")]),t._v(" 3. 属性配置")]),t._v(" "),a("p",[t._v("通过上面「一切都是围绕 schema 展开」的说明，属性配置面板，其实就是用于承载 schema 里 node 的 props 的参数设置。也就是当创作者在画布面板上点选了一个组件时，在右侧的属性面板展示的此组件的 props 都有哪些、都应该如何设置。这里也是可以参考 "),a("a",{attrs:{href:"https://www.yuque.com/lce/doc/cl03wo_nmhznb",target:"_blank",rel:"noopener noreferrer"}},[t._v("lowcode-engine 的设置器"),a("OutboundLink")],1),t._v(" 。\n最理想状态下，程序可以自动识别字段类型，比如它是个 boolean ，则在属性面板上展示一个 checkbox 开关；如果是字符串，则给出一个文本输入框；是 union 类型，则给下拉框。而实际业务往往有更多定制要求，比如图片上传 / 颜色选择等，UI 上也有复杂的交互要求。因此，上一节的组件元信息的数据结构中，每个 prop 可以有一个 setter 字段，用于描述应该使用何种设置器来给创作者编辑此 prop 数据。\n"),a("img",{attrs:{src:"/yuque/0/2022/png/139763/1658214929670-ca3825c0-75b0-41d1-a325-d22ef71f7c36.png",alt:"image.png"}})]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" componentMeta "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"props"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"标题"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"defaultValue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"默认标题"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不写 setter ，自动识别为这里是个输入框")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"propType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fontSize"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"字体大小"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"defaultValue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写了 setter，编辑器在需要用户需要编辑此字段时，交给 FontSetter 组件来做编辑")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"setter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"componentName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FontSetter"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("以上这段看起来比较简单的用于描述组件 meta 信息的 JSON 描述，可以手写，但是当组件复杂度提升、组件个数多的时候，显然 ux 体验并不是很好\n为了解决组件 meta 生产的 ux 问题，lowcode-engine 提供了一套"),a("a",{attrs:{href:"https://www.yuque.com/lce/doc/yhgcqb",target:"_blank",rel:"noopener noreferrer"}},[t._v("入料"),a("OutboundLink")],1),t._v("的概念，有用可视化方式配置物料的，有基于 react-doc-gen 导入的，有识别 npm 包导入的，基于甚至搞了一个叫做"),a("a",{attrs:{href:"https://www.yuque.com/lce/xhk5hf/qa9pbx",target:"_blank",rel:"noopener noreferrer"}},[t._v("造物"),a("OutboundLink")],1),t._v("的系统。")]),t._v(" "),a("h2",{attrs:{id:"要素总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#要素总结"}},[t._v("#")]),t._v(" 要素总结")]),t._v(" "),a("p",[t._v("通过上述的从 UI 到功能原理到细节分析（功能分解），我们知道想要实现一个可视化编辑器，需要实现这些核心模块:")]),t._v(" "),a("ol",[a("li",[t._v("界面部分:  左侧素材库(组件库) 选择区、顶部工具栏、中间画布区、右侧组件属性设置区")]),t._v(" "),a("li",[t._v("核心模块:\n"),a("ol",[a("li",[t._v("schema 管理：增删改查 schema 的树形节点（参考 React Fiber 链表树做性能优化）")]),t._v(" "),a("li",[t._v("物料生成：组件开发方式 / 组件元信息生成方式")]),t._v(" "),a("li",[t._v("物料导入：物料加载到模拟器或者预览页面")]),t._v(" "),a("li",[t._v("模拟器\n"),a("ol",[a("li",[t._v("嵌入渲染引擎")]),t._v(" "),a("li",[t._v("iframe 方式隔离 js / css ，同时又能和编辑器无缝非异步的互通消息")]),t._v(" "),a("li",[t._v("监听点选、拖拽、hover 了画布上的组件及其坐标等详细信息")])])]),t._v(" "),a("li",[t._v("渲染引擎\n"),a("ol",[a("li",[t._v("加载真实组件")]),t._v(" "),a("li",[t._v("递归渲染 schema")])])]),t._v(" "),a("li",[t._v("插件系统：非核心模块如撤销重做、导出、画布尺寸设置等，需要通过插件系统来扩展")])])]),t._v(" "),a("li",[t._v("非核心模块\n"),a("ol",[a("li",[t._v("拖拽引擎。用于组件抽屉的组件拖拽到画布上，或者画布上的组件拖拽调整顺序。并非必要的，都可以通过点击、工具条等方式实现目标，但是有拖拽引擎会更好")])])])]),t._v(" "),a("p",[t._v("一张简单的图来概括上述模块\n"),a("img",{attrs:{src:"/yuque/0/2022/jpeg/139763/1663592671127-e4720e45-c19f-4dc6-8e0e-995408da124e.jpeg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"选开源还是自己写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选开源还是自己写"}},[t._v("#")]),t._v(" 选开源还是自己写")]),t._v(" "),a("p",[t._v("从上面的总结，可以看出来整个最小何用的编辑器的核心其实就是 编辑器UI+物料导入与管理+模拟器+渲染引擎+拖拽引擎。市面上最好的低代码引擎是 lowcode-engine，这里以它为例每个部分分解，看看每个部分有多少是自己的业务场景所需要的。每一项带上一个占比，代表实际开发工作量占比。其中，由于设置器基本上结合实际业务都是需要自己开发的，所以不计算在内\n编辑器 UI （占比10%）是否是自己想要的，固定了上-左中右布局，左侧是 docker 机制，右侧是固定了一个高级设置 tab 和选中组件属性设置 tab；但是界面强依赖于 "),a("a",{attrs:{href:"https://fusion.design/",target:"_blank",rel:"noopener noreferrer"}},[t._v("fusion"),a("OutboundLink")],1),t._v(", 视觉上要改可能就要定制 fusion 主题；体积也稍微有点大；\n物料管理和导入（占比20%），有丰富的导入方式，物料管理体系也比较完备。但是默认物料都依赖于 fusion；但是这个物料描述相对固定，如果你的\n模拟器内置的模拟器（占比30%），代码量不大，可以手动注入渲染引擎 js。缺点是对于画布上的内容操作比较固定，不好做扩展。比如想要实现原地编辑，lowcode-engine 已经内置了，但是如果想要实现原地富文本编辑，就做不到，并且也不好扩展实现，需要修改源码；其他的扩展\n设置器（占比不计），基本的设置器强依赖于 fusion，可以自定义设置器，需要另外单独开发，并且通过插件的方式注入到编辑器框架中；\n渲染引擎（占比40%），lowcode-engine 为了适用于小程序(rax)、Vue、等，设计了一套非常复杂的 "),a("a",{attrs:{href:"https://www.yuque.com/lce/doc/dim7q5",target:"_blank",rel:"noopener noreferrer"}},[t._v("adaptor"),a("OutboundLink")],1),t._v("，也就是具体的渲染、点选组件的坐标计算、渲染等。这部分是否是自己的业务所需要的、是否需要背负这些在自己的业务里；\n拖拽引擎（占比不急），虽然不是核心，但是有和没有，对于产品体验差别还是很大的\n结合这些占比关系，可以自己大致判断了，编辑器 UI，然而大部分团队都有自己的设计风格的，这里都是需要改的，能直接使用它的场景并不多；如果模拟器部分的点选/拖拽，不是自己想要的样子，比如我想要一个组件支持原地富文本编辑、一个组件需要能所有看得到的文字都支持原地修改，那模拟器几乎就是要推翻自己做的，直接改的意义并不是很大；如果渲染引擎我不想背负复杂的 adaptor，并且想要自己实现一些特殊逻辑，也基本上可以推翻了，因为这里的核心逻辑并不多（就是上一文提到的递归渲染），lowcode-engine 里大部分都是各种兼容逻辑；物料管理部分，如果想要更轻量开发，像日常在自己的业务工程里写代码一样的写那似乎也是不大可行的，而且物料里的大部分协议，我们其实都用不上，参考上一文提到的物料协议。另外 lowcode-engine 还有个小缺憾，就是目前不是冲着 SDK 去的，尤其是植入到 SSR 框架中难度极高，恰巧我们的业务就有不讲道理的规定必须用 SSR。\n总结起来，如果在我的业务场景里使用，我需要禁用掉大量的内部逻辑，然后开发一堆插件和各种 hack，就好像我买了一艘船，我把所有模块都给拆了，连龙骨都换了，只剩下个舵盘和帆杆子，这就成了"),a("a",{attrs:{href:"https://baike.baidu.com/item/%E5%BF%92%E4%BF%AE%E6%96%AF%E4%B9%8B%E8%88%B9/19890027",target:"_blank",rel:"noopener noreferrer"}},[t._v("忒修斯之船"),a("OutboundLink")],1),t._v("了。\n当然，以上几个部分的核心模块，如果自定义要求不高，我是强烈推荐使用 lowcode-engine 的，它几乎涵盖了所有想得到的使用场景，并且阿里内部踩坑多年已经相对非常完善了。\n其他低代码平台的类比关系也是这样，对比这几个核心模块，一一分析可用部分有多少，需要定制部分有多少，当前版本的改动量+将来的适配成本算算，和自己全都重新按业务需要实现+将来开发成本，对比起来决定用开源还是自建。\n什么？你看的低代码框架甚至都没划分这几个核心模块？那别用了，它不是个好东西")]),t._v(" "),a("p",[a("strong",[t._v("其实不仅是可视化编辑器，任何开源工具都应该如此，把它拆开掰碎了看，能复用的比例有多少？和自己的业务目标距离是增量的还是交集？交集部分有多少？能否未来一直背负着你不需要的东西？未来的业务增量和它的交集、hack 又有多少？")])])])}),[],!1,null,null,null);a.default=e.exports}}]);