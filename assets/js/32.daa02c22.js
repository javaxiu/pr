(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{312:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"扒一扒某下载软件的源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扒一扒某下载软件的源码"}},[t._v("#")]),t._v(" 扒一扒某下载软件的源码")]),t._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("p",[t._v("之前扒过飞书的源码，从代码设计架构层面里里外外学习一把，后来想着介绍一下我们部门，分享一下我们做的一些有趣的事情（然后趁机招聘），所以趁某个难得的周末又找了一个业界 app。一不小心发现迅雷的客户端竟然也是基于 Electron 开发的，所以想着也扒一下迅雷的。（先吐槽一下这新版本的迅雷为什么要抄钉钉的界面，这些年迅雷都不知道自己要干什么了，每个版本都招人嫌）\n"),a("img",{attrs:{src:"/yuque/0/2020/png/139763/1604223403334-9af92d32-6863-4db9-8068-37ac8b79879a.png",alt:"QQ图片20201101173630.png"}})]),t._v(" "),a("h2",{attrs:{id:"拆盒篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拆盒篇"}},[t._v("#")]),t._v(" 拆盒篇")]),t._v(" "),a("p"),t._v(" "),a("h3",{attrs:{id:"一点背景知识说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一点背景知识说明"}},[t._v("#")]),t._v(" 一点背景知识说明")]),t._v(" "),a("p",[t._v("基于前端技术栈 Electron 构建的桌面应用，本质上都是加载本地前端资源文件，而这些文件通常是用 asar 格式（类似 windows iso 镜像）的方式进行打包，然后运行时再通过挂在到内存实现前端资源文件 js/css/html/img 等文件的读取。\n这么说 asar 想办法挂载就可以随意阅读源码了吗？不是的。同时 asar 会提供一套通过加密方式防止任意解压，飞书就是这么做的，直接通过 asar extract 的方式无法解包出来。但是由于 node 端和 rust 构建的二进制文件如果打包到 asar 会导致无法链接到这些二进制文件，因此需要从 asar 中独立出来，因而导致有部分 js 文件仍然裸露在外面。不过即便没有任何 js 是暴露的仍然是有办法爆破的。\n啊，跑偏了，先不谈飞书，今天的主菜是迅雷。\n那迅雷的前端资源文件是怎么管理的呢？\n"),a("img",{attrs:{src:"/yuque/0/2020/png/139763/1604224440621-57564615-1717-400c-96ee-7b40e862ba46.png",alt:"image.png"}}),t._v("\n \n是在下想多了，不好意思，迅雷梅川酷子，都摊着在那呢，根本没用 asar 打包/加密。")]),t._v(" "),a("h3",{attrs:{id:"打开调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开调试"}},[t._v("#")]),t._v(" 打开调试")]),t._v(" "),a("p",[t._v("既然 js 都暴露了，也没什么好绕的，直接植入代码吧。我们都知道 Electron 是有 render 进程和 Node 进程的，接下来这一步需要猜猜看哪个文件是负责 render 主进程的？好吧不用猜，名字都非常人类可读，就 main-renderer（主窗口渲染进程）。打开找到 html 文件（js也可以）插入如下这串\n \n"),a("img",{attrs:{src:"/yuque/0/2020/png/139763/1604227675548-db7bf77b-0764-492e-9b19-af2d6cc0bb57.png",alt:"image.png"}}),t._v("\n \n双击启动，调试窗口出来了，可以大致看到整体页面结构了\n \n"),a("img",{attrs:{src:"/yuque/0/2020/png/139763/1604227844218-9767cb1a-cf11-4c26-834b-6f82d35c6a23.png",alt:"image.png"}}),t._v("\n \n然后看了一下，迅雷的悬浮小圆圈和主窗口，分别用一个 BrowserWindow 来实现。有趣的是那个小圆圈窗口其实并不小，鼠标悬停出来的那个浮窗也是它的一部分，为了让小圆圈在屏幕的任何位置都可以看到悬浮窗，所以整个小圆圈的 BrowserWindow 是大约 4 倍的悬浮窗口大小\n \n"),a("img",{attrs:{src:"/yuque/0/2020/png/139763/1604228679236-3d5f9570-cc2e-4b6c-8913-de26a07fb778.png",alt:"image.png"}}),t._v("\n \n独立窗口的检视界面 - 窗口实际是 4倍 浮窗大小\n"),a("img",{attrs:{src:"/yuque/0/2020/png/139763/1604237721774-8302ac82-6a38-4e21-97ed-055a84274cf5.png",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"一点防御措施"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一点防御措施"}},[t._v("#")]),t._v(" 一点防御措施")]),t._v(" "),a("p",[t._v("从代码来看，nodejs 进程只有一个文件 main.js ，是 webpack 的构建产物，看源码这里的 BrowserWindow 的 webPreference 参数是把 devTools 禁用掉的，导致直接在命令行里敲 openDevTools 是不能检视任意窗口的\n \n"),a("img",{attrs:{src:"/yuque/0/2020/png/139763/1604228991757-3b55f7e4-9c0f-4ab1-98fe-d897ac3c6bd8.png",alt:"image.png"}}),t._v("\n \n当然了，这里即便是混淆过了也没关系，毕竟还是明文，把 1 改成 0，把它打开就好（双叹号/true/1啥都行，开心就好)。不过由于迅雷的窗口实在是太多了，下载弹窗是独立窗口，选择文件夹是独立窗口，各种广告窗口也是，需要改的配置点很多，这里就不列了，总共有 10 个窗口，这个配置点按需打开（批量替换也行，谨慎操作就行）。")]),t._v(" "),a("h2",{attrs:{id:"进程结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程结构"}},[t._v("#")]),t._v(" 进程结构")]),t._v(" "),a("p",[t._v("呃……然后要干啥……好像也没什么好看的了，代码是混淆过的，也没有 map 文件。而且前端部分的代码也没什么技术含量可以说的，哪个 web 页面都那样。那看看进程分工吧。")]),t._v(" "),a("h3",{attrs:{id:"进程树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程树"}},[t._v("#")]),t._v(" 进程树")]),t._v(" "),a("p",[t._v("在进程树里可以看出来，几乎全部的进程都是 Thunder.exe，可见 Thunder.exe 作为进程派发入口（类似 server 的网关，而并不直接是业务本身），用户启动的时候传参是 --StartType:DesktopIcon，随后它唤起了两组进程，一组是 Electron main 进程，main 进程唤起相关的 renderer；然后是下载的 SDK 服务 DownlaodSDKServer。\n \n那么迅雷的进程关系差不多是清楚了：多个 Electron 窗口，对应一个 DownloadSDK。\n \n"),a("img",{attrs:{src:"/yuque/0/2020/png/139763/1604227975674-22b0c755-2db8-4a5e-a431-ff37f83ea842.png",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"通信方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通信方式"}},[t._v("#")]),t._v(" 通信方式")]),t._v(" "),a("p",[t._v("那么 Electron 的进程（甭管 main-process 还是 renderer-process，统称 electron进程） 和 DownloadSDK 是如何通信的呢？\n进程间通信一般都是依靠 ipc 管道的形式来实现。不过迅雷似乎没按套路来，它的 DownloadSDK 是控制台程序，意味着很有可能是通过 stdio 的方式来进行交互的（后续证明不是）。\n通过观察进程打开的句柄，看到很诡异的一个现象：DownloadSDK 并没有打开任何 ipc 管道，反倒是前端进程打开了一个\n \n"),a("img",{attrs:{src:"/yuque/0/2020/png/139763/1604234360377-5902ab2e-652f-40f3-ae96-4fa536876863.png",alt:"image.png"}})]),t._v(" "),a("h4",{attrs:{id:"前端的-ipc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端的-ipc"}},[t._v("#")]),t._v(" 前端的 ipc")]),t._v(" "),a("p",[t._v("而 Electron 打开的这个 handler 进程名称，查了一下，竟然全是 Electron 进程使用的，而且是所有进程。\n"),a("img",{attrs:{src:"/yuque/0/2020/png/139763/1604234559916-7daeb148-c243-44f4-866c-2c27a7b1161b.png",alt:"image.png"}}),t._v("\n那么不妨做出一个大胆的推测：前端多窗口之间是靠自建的 ipc 通道实现的，而 ipc 是 1 server 对 N client 的方式，那么 server 很有可能就是在主窗口上的，也就是前文看到那个及其明显的 main-renderer 进程，通过控制台查看，确实如此，nodejs 的 net 方式创建了一个 server，并且将一个叫做 __xdasIPCServerInstance 的对象暴露在全局环境供前端 js 调用，也即 jsapi。\n"),a("img",{attrs:{src:"/yuque/0/2020/png/139763/1604234993253-c70554b7-b2ba-48ce-bc85-a8e71bce7156.png",alt:"image.png"}}),t._v("\n \n而小窗口并不存在上述 server 实例，而相对应的有一个 client 实例\n \n"),a("img",{attrs:{src:"/yuque/0/2020/png/139763/1604234904917-200095c9-cf0c-4f32-8861-e665b2e23e0e.png",alt:"image.png"}})]),t._v(" "),a("h4",{attrs:{id:"和-downloadsdk-的通讯方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和-downloadsdk-的通讯方式"}},[t._v("#")]),t._v(" 和 DownloadSDK 的通讯方式")]),t._v(" "),a("p",[t._v("这样看起来就很奇葩了，前端进程之间是通过自建的 ipc 管道通信的，但是并没有跟 DownloadSDK 有任何通信管道，难道它俩是心有灵犀无言自通？啊这……程序员是唯物主义的！\n那怎么查它到底是怎么跟前端进程交互的呢？既然前端暴露了 server sdk instance，那意味着 DownLoadSDK 肯定是以一种 proxy 的方式暴露在这上面作为 jsapi 的。可以拿【创建一个下载任务api】来顺藤摸瓜。看了主窗口的 server instance 一下果然有这个方法：createTask ，应该就是前端用于创建下载任务用的 api。\n \n"),a("img",{attrs:{src:"/yuque/0/2020/png/139763/1604235320244-8c430b7d-3c06-484e-beed-018cc1629f37.png",alt:"image.png"}}),t._v("\n \nchrome 浏览器里查代码不方便，转战 vscode 看源码，搜索 createTask 这个函数的声明位置，看到这一段（篇幅控制，此处删减了部分代码）")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DownloadKernel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TaskType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("P2sp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DownloadKernel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TaskType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Bt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DownloadKernel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TaskType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Emule"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DownloadKernel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TaskType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Group"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DownloadKernel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TaskType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Magnet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n              i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n            _"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fireTaskEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DownloadKernel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TaskEventType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TaskCreated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("没跑了，证实了我前面的猜想，这个 __xdasIPCServerInstance 就是 download sdk 封装到前端的 proxy。\n继续查，这个 fireTaskEvent 是怎么处理的，阅读代码过程繁琐按下不提，就看这两段代码(有删减整理)")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 片段一")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getDownloadSdkVersion")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__rootDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../bin/SDK/DownloadSDKServer.exe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFileVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 片段二")]),t._v("\ny "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__rootDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../bin/ThunderHelper.node"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("F")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ssdkver "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DownloadKernelManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDownloadSdkVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("F")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ny"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shellExecute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"open"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SW_SHOW"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("很显然，DownloadSDK 是通过一个 ThunderHelper.node 的 nodejs addon 模块来启动、通信的。\n我们知道,  nodejs 可以通过 ffi 等方式实现内存共享，以达到两个进程不需要通过 pipe/sock 等管道就达到通信的目的。而通过工具观察 Thunder.exe 的唤起关系、句柄关系，两者的关系就更加一目了然了：ELectron 前端进程加载 DownloadSDK 进程，并且通过 \\Sessions\\5\\BaseNamedObjects\\BDAF7A63-568C-43ab-9406-D145CF03B08C:16312:5536@22123720|SendShareMemory 这种内存通道来实现的通信，句柄一一对应上了。\n"),a("img",{attrs:{src:"/yuque/0/2020/png/139763/1604236598623-aa6956a8-9990-4a38-b2dc-c4d77929150f.png",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("扒拉了半天，扒完了有点空虚是怎么回事")]),t._v(" "),a("ul",[a("li",[t._v("迅雷的代码架构关系是轻 node 而重前端，把所有的 node 加载、进程管理、多窗口通信都放在前端进程的主窗口进程里。关于这个做法，我尊重而不认同。前端进程不应该做太重的底层交互，尤其是 js 这种单线程语言，天然的就运行效率低，而且主窗口使用这么频繁就不怕卡住吗")]),t._v(" "),a("li",[t._v("Electron 天然就有 ipc 通信能力，完全可以在 node 端做一个消息网关，达成每个窗口通信的能力，完全不需要自建一个 ipc server-client 体系。可能这也是一开始就把大量工作放在前端(主窗口)了导致后期的程序设计受限。说不定是个历史包袱")]),t._v(" "),a("li",[t._v("用一个 node addon 的方式来跟 DownloadSDK 来通信，这点是可���点个赞的，虽然是业界标准（飞书是通过rust，基本原理类似），但是我目前所负责的业务并没有做到这样，所以在惭愧的同时也给它点个赞")]),t._v(" "),a("li",[t._v("迅雷使用的 Electron 版本是 9.2.1，vscode 也是这个版本，好神奇！非常好奇为何业界都用这个版本，事实上 electron 9.x 最新版本已经更新到 9.3.3 了（2020年10月28日）这个 9.2.1 有什么魔力让业界都用它吗\n"),a("ul",[a("li",[t._v("这里说明一下，Electron 从 6.0 开始就不支持 windows7(非sp1) 及以下的版本了。")]),t._v(" "),a("li",[t._v("我在 win7 系统上用迅雷安装器安装迅雷最新版本，发现 electron 用的是 1.8.6 版本")])])]),t._v(" "),a("li",[t._v("Electron 的主入口是处理过了的，通过 Thunder.exe 程序干了很多除了启动前端以外的事情，这个定制还是挺棒的，因为这样就可以把各种进程模块管理起来，不会出现多个独立进程。就我所看到的 Electron-base 的应用其实都没有定制过。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/yuque/0/2020/png/139763/1604237481428-8a7be21c-a7f5-4209-9273-c605d08e1b86.png",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"关于我们"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于我们"}},[t._v("#")]),t._v(" 关于我们")]),t._v(" "),a("p",[t._v("我们是部门有若干桌面端应用，用户基数大，挑战大，招聘有 electron 经验或者前端技术专家。如果有兴趣的话欢迎联系我，简历请狠砸我！私信我获取联系方式哦！都可以聊一下，说不定就成为同事了，没有你想象的那么难！\n还记得开头说的扒了飞书的源码的事情吗？想看吗？想就投简历吧哈哈哈哈")])])}),[],!1,null,null,null);a.default=e.exports}}]);