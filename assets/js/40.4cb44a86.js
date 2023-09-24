(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{322:function(t,r,e){"use strict";e.r(r);var a=e(14),v=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"生态-产品与平台生态"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生态-产品与平台生态"}},[t._v("#")]),t._v(" 生态 - 产品与平台生态")]),t._v(" "),r("h2",{attrs:{id:"背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),r("p",[t._v("上文介绍一个可视化编辑器有哪些基础构成。但是我通篇没有提过它跟低代码、零代码有什么关系，因为它还只是低代码、零代码的基础，就像从一个算法到人工智能的距离。就像有些人在云服务厂商买个虚拟主机就管自己叫云计算，总有些人用几个简单算法处理个数据库就叫人工智能大数据，也总有些初级可视化编辑器管自己叫低代码。本文就想介绍一下，从可视化编辑器到低代码、零代码的距离")]),t._v(" "),r("h2",{attrs:{id:"关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关系"}},[t._v("#")]),t._v(" 关系")]),t._v(" "),r("p",[t._v("实现了一个可视化编辑器，充其量也只能算是个低代码编辑器，还远未到达可以称之为低代码平台的程度。平台应该包含：定义明确的使用场景、平台运营维护方、生产方(卖家)、消费方(买家)")]),t._v(" "),r("h2",{attrs:{id:"创作角色和可视化编辑器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创作角色和可视化编辑器"}},[t._v("#")]),t._v(" 创作角色和可视化编辑器")]),t._v(" "),r("p",[t._v("在上一篇最终推导出来一个可视化编辑器应该具备哪些核心部分。里面有一个重要的角色关系在上文没有展开的，就是创作者是什么样的角色\n"),r("a",{attrs:{href:"https://www.yuque.com/xiwen-bxuha/pr/lgodzi?inner=rVcOx&view=doc_embed",target:"_blank",rel:"noopener noreferrer"}},[t._v("低代码系列之一：可视化编辑器"),r("OutboundLink")],1),t._v("\n基于可视化编辑器、物料类型、设置器类型，可以组成这样一张表格")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("创作者身份")]),t._v(" "),r("th",[t._v("物料类型")]),t._v(" "),r("th",[t._v("设置器类型")]),t._v(" "),r("th",[t._v("代表性产品")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("技术人员（会一点代码的）")]),t._v(" "),r("td",[t._v("图表")]),t._v(" "),r("td",[t._v("数据库连接器 / sql")]),t._v(" "),r("td",[t._v("datav")])]),t._v(" "),r("tr",[r("td",[t._v("技术人员（后端/偏后端）")]),t._v(" "),r("td",[t._v("表单/表格/中后台组件/div")]),t._v(" "),r("td",[t._v("js 设置器 / 样式设置器 / 数据设置")]),t._v(" "),r("td",[t._v("lowcode-engine")])]),t._v(" "),r("tr",[r("td",[t._v("技术人员（后端/低代码开发)")]),t._v(" "),r("td",[t._v("表单/表格/中后台组件")]),t._v(" "),r("td",[t._v("展示数据来源/数据展示样式/预置动作设置")]),t._v(" "),r("td",[t._v("宜搭 / 微搭")])]),t._v(" "),r("tr",[r("td",[t._v("运营人员（不会代码）")]),t._v(" "),r("td",[t._v("图文组件")]),t._v(" "),r("td",[t._v("数据关联 / 图片视频上传")]),t._v(" "),r("td",[t._v("易企秀")])])])]),t._v(" "),r("p",[t._v("对于创作者而言，物料就是创作素材，根据身份的不同，需要使用的创作素材及其设置器也不同。专业的前端需要的是最原始的 div 可以自由发挥；非技术人员需要的是丰富的开箱即用的组件，不同场景下需要的组件也不同比如图表、表单。\n技术人员需要写一部分代码的，少到几行 javascript 和数据请求，多到自由排版 css，这类都属于是低代码（lowcode）的范畴。也即 "),r("strong",[t._v("可视化编辑器 + 专业物料 + 专业设置器 = 低代码")]),t._v("\n非技术人员通过拖拽配置组件、配置文本、关联数据就完成的，这类属于零代码（nocode）也即  "),r("strong",[t._v("可视化编辑器 + 高度封装物料 + 高度封装设置器 = 零代码；")]),t._v("\n甚至更粗浅的理解可以这样看：在这个可视化编辑器里看不到代码的，属于零代码，能看到 css/js 的属于低代码。这里有个例外，sql 、自定义的数据连接 dsl 算不算低代码？这其实更应该算是零代码，因为这类似 Excel 里的公式了，没人会觉得配置个 Excel  公式算是写代码，只是对使用者有稍高的要求。")]),t._v(" "),r("h2",{attrs:{id:"低代码平台"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#低代码平台"}},[t._v("#")]),t._v(" 低代码平台")]),t._v(" "),r("p",[t._v("但是上面的定义也只能叫低代码/零代码，并不能叫做低(零)代码平台，只能叫低(零)代码模式的编辑器。业界真正的低(零)代码平台，有非常完善了的��态化的的 "),r("a",{attrs:{href:"https://docs.microsoft.com/zh-hk/power-apps/powerapps-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("power apps"),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"https://workspace.google.com/marketplace",target:"_blank",rel:"noopener noreferrer"}},[t._v("google workspace add-on"),r("OutboundLink")],1),t._v("，也有非生态化各种给中小企业使用的 app maker ，如 "),r("a",{attrs:{href:"https://www.appypie.com/app-builder/appmaker",target:"_blank",rel:"noopener noreferrer"}},[t._v("appmaker"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.jiandaoyun.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("简道云"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://yida.aliwork.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("宜搭"),r("OutboundLink")],1),t._v("。\n"),r("img",{attrs:{src:"/yuque/0/2022/jpeg/139763/1658223750579-b941e1ac-b28d-4224-a5e2-36af42ba61b4.jpeg",alt:""}}),t._v("\n一个低(零)代码平台，需要有背后的企业套件提供服务才能构成一个完整平台。这个企业套件服务包括但不限于：")]),t._v(" "),r("ol",[r("li",[t._v("为最终应用提供部署和访问环境，也就是创作者创造的产物是托管于企业服务上的，并且由企业服务提供给最终用户访问站点，类似 figma 提供的是访问站点，而不是文件。否则就是 sketch 这样的 app ，而不是平台。")]),t._v(" "),r("li",[t._v("为应用提供数据、计算服务。比如 power apps，提供了链接微软云、连接 office365 、通过连接器连接三方服务，创作者可以在创造应用时对接这些丰富的服务，来提供多样丰富的应用功能")])]),t._v(" "),r("p",[t._v("举个例子，比如一个活动运营零代码平台，提供给创作者一个可视化编辑页面的站点，创作者构建完成后点击发布，活动运营平台生成一个可以直接访问的地址，最终用户可以访问此地址观看到最终页面，整个流程在活动运用平台上闭环，这叫平台；\n提供一个可视化编辑器和配套的物料，由别人私有化部署，最终用户访问这个私有化部署的系统，这叫低代码 app；\n提供一个可视化编辑器，有别人自己开发物料和私有化部署到自己的应用里，最终用户访问这个应用里的可视化编辑页面，这叫低代码 sdk ；")]),t._v(" "),r("h2",{attrs:{id:"低代码平台的构成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#低代码平台的构成"}},[t._v("#")]),t._v(" 低代码平台的构成")]),t._v(" "),r("p",[r("img",{attrs:{src:"/yuque/0/2022/jpeg/139763/1663940026012-f567d59d-014c-46ea-b575-865b8089a02e.jpeg",alt:""}}),t._v("\n注：蓝色部分是可视化编辑器、绿色部分是管理系统")])])}),[],!1,null,null,null);r.default=v.exports}}]);