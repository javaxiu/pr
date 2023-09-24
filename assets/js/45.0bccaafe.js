(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{325:function(e,t,a){"use strict";a.r(t);var r=a(14),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"figma-devmode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#figma-devmode"}},[e._v("#")]),e._v(" figma devmode")]),e._v(" "),t("h2",{attrs:{id:"devmode-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#devmode-介绍"}},[e._v("#")]),e._v(" DevMode 介绍:")]),e._v(" "),t("p",[e._v("官方介绍："),t("a",{attrs:{href:"https://www.figma.com/dev-mode/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.figma.com/dev-mode/"),t("OutboundLink")],1),e._v("\nkm 同款翻译："),t("a",{attrs:{href:"https://km.woa.com/articles/show/582437?kmref=search&from_page=1&no=2",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://km.woa.com/articles/show/582437?kmref=search&from_page=1&no=2"),t("OutboundLink")],1),e._v("\n太长不看版总结：")]),e._v(" "),t("ol",[t("li",[e._v("目的：为了构建基于 figma 的工作台生态，以 figma 设计稿为中心构建工作流。 figma 之前只服务于设计师，现在开始看重开发者的使用体验了")]),e._v(" "),t("li",[e._v("连接："),t("a",{attrs:{href:"https://help.figma.com/hc/en-us/articles/15023121296151",target:"_blank",rel:"noopener noreferrer"}},[e._v("可以对接 vscode"),t("OutboundLink")],1),e._v(" ，在 vscode 里看设计稿和 css 代码了（没感觉到明显的价值）")]),e._v(" "),t("li",[e._v("功能：在 DevMode 下可以更方便看到盒模型和 CSS 代码了，比以前稍微方便点")]),e._v(" "),t("li",[e._v("插件：给插件生态加了个扩展点，以前的插件是只 for 设计师，必须有编辑权限，不然你甚至安装不了插件，现在 DevMode 也可以在右边面板使用了。避免给编辑权限会误操作到内容，提供了一个 「safe space that won’t impact the design file」")]),e._v(" "),t("li",[e._v("API：提供了转样式的 API，包括新的"),t("a",{attrs:{href:"https://www.figma.com/plugin-docs/api/WashiTapeNode/#getcssasync",target:"_blank",rel:"noopener noreferrer"}},[e._v("导出 CSS 样式"),t("OutboundLink")],1),e._v("的 API、swift 代码等。基于这个 API ，我们的导出代码以前导出的样式高效、准确了很多")]),e._v(" "),t("li",[e._v("版本：有了新的版本管理，可以方便看到前后差异；新增了一个 ready for development 概念，让设计师在设计稿上可以区分哪些图是给开发看的，哪些是 WIP 的")]),e._v(" "),t("li",[e._v("组件：提供了非常类似 storybook 或者低代码产品中的组件引用和设计功能，可以随意配置组件的参数来"),t("a",{attrs:{href:"https://cdn.sanity.io/images/599r6htc/localized/150d46f7e0fb5e922037111fa9ef48609620f6b1-1560x1248.png?w=540&h=432&q=75&fit=max&auto=format&dpr=2",target:"_blank",rel:"noopener noreferrer"}},[e._v("预览效果"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"好用的插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#好用的插件"}},[e._v("#")]),e._v(" 好用的插件")]),e._v(" "),t("p",[e._v("整个 DevMode 的宣传理念是 Dev Mode is a new space in Figma for developers with features that help you translate designs into code, faster. 一些插件也是朝着这个方向去设计的。目前体验了几个，最强的是"),t("a",{attrs:{href:"https://www.figma.com/community/plugin/1056467900248561542/Locofy-FREE-BETA---Figma-to-React%2C-React-Native%2C-HTML%2FCSS%2C-Next.js%2C-Gatsby%2C-Vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("locofy.ai"),t("OutboundLink")],1),e._v("这个插件，体验下来不管是代码片段还是完整工程的导出都比较好，还能识别组件。整体思路还是：设计师打标 - 组件生态 - 代码生成")]),e._v(" "),t("p",[t("img",{attrs:{src:"/yuque/0/2023/png/139763/1691155548929-37f335eb-f4ca-4064-81a5-363c2d7f2190.png",alt:"image.png"}}),t("img",{attrs:{src:"/yuque/0/2023/png/139763/1691155567001-67dd6281-0e4c-4838-9d02-15a655b141f3.png",alt:"image.png"}})]),e._v(" "),t("p",[e._v("但是缺点也很明显：公司不允许装这个插件。这个是"),t("a",{attrs:{href:"https://doc.weixin.qq.com/sheet/e2_AOYAegbdAFw71hnpAsJSZSRRWEokT?scode=AJEAIQdfAAogx4oqmdAOYAegbdAFw&isConversationEmbedded=&discussion_tab=&unreadCount=&mainid=&reminderid=&group_id=&rangeid=&comment_id=&subid=&tab=BB08J2&fromexcelid=&_cef_session_id_=&env_id=&convid=&roomid=",target:"_blank",rel:"noopener noreferrer"}},[e._v("企业微信文档"),t("OutboundLink")],1),e._v("，可以看到基本上跟代码生成有关的一概不允许安装（试试搜 html 这个关键词）\n"),t("img",{attrs:{src:"/yuque/0/2023/png/139763/1691155928532-0a907e55-b2bd-4feb-8c69-e4fa53743d75.png",alt:"image.png"}})]),e._v(" "),t("h2",{attrs:{id:"内网插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内网插件"}},[e._v("#")]),e._v(" 内网插件")]),e._v(" "),t("p",[e._v("现在内网有个文章是如意助手插件的，也及时跟进了这个 DevMode "),t("a",{attrs:{href:"https://km.woa.com/articles/show/582438?kmref=search&from_page=1&no=1",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://km.woa.com/articles/show/582438?kmref=search&from_page=1&no=1"),t("OutboundLink")],1),e._v("\n太长不看版本：")]),e._v(" "),t("ol",[t("li",[e._v("总结了一下 DevMode 是什么，强调了「唯一事实源」概念，就还是以设计稿为中心")]),e._v(" "),t("li",[e._v("介绍了代码生成的构思，也就是 plugin 的大致实现流程，比较粗略，然后是使用这个如意插件的效果截图")]),e._v(" "),t("li",[e._v("展示几行 devmode 插件的 hello world，与如意助手无关，就纯粹是 hello world")]),e._v(" "),t("li",[e._v("这个插件目前测试版、社区版都还不可用，目前仅展示 CSS 代码。应该还是在内测阶段还没正式发布（也可能是它只支持组件识别，一般的设计稿它不识别）")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/yuque/0/2023/png/139763/1691155952616-9540f9ac-baed-460e-b451-44f0597f0966.png",alt:"image.png"}})]),e._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("ol",[t("li",[e._v("这个新的模式，是 figma 探索商业化、生态化的一个模式，未来应该会有更多工作流的形态出现。不过这种野心目前业界很少做得好的，slack 算一个")]),e._v(" "),t("li",[e._v("司内安全原因一般不允许使用外部插件的情况下，别人做了工作流也不一定会引入。而自研的话，不知道有多少动力在这方面跟进，因为这是建立在别人的生态上做事情；")]),e._v(" "),t("li",[e._v("即使新的工作流没有出现，目前的 DevMode 确实一定程度是简化了开发时候获取 CSS 样式的步骤。这个提升其实也蛮有限，无非是比原来少了一次点击的问题；")]),e._v(" "),t("li",[e._v("一直以来 figma 里设计师是第一公民，开发者的使用体验终于也被重视了，以后可能会推出一些官方插件；")]),e._v(" "),t("li",[e._v("目前还没有可用的插件，继续观望如意设计助手吧。之前了解的如意设计助手更多是从组件组合成页面的角度看问题的，从它的演示 demo 也可以看出来是这个尝试的方向。像我们的腾讯会议活动，这种偏 C 端的，纯组件拼装页面的 case 并不多，不知道适用性有多少。这张demo图，看热闹的话是生成了很完美的代码；看门道的话，你有没有发现它只有组件，没有 div")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/yuque/0/2023/png/139763/1691155966538-134c8c60-19c7-4b4d-a525-9ed1d0eb688d.png",alt:"image.png"}})])])}),[],!1,null,null,null);t.default=o.exports}}]);