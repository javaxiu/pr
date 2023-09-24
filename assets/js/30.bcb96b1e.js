(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{311:function(a,t,n){"use strict";n.r(t);var e=n(14),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mac11-4权限问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac11-4权限问题"}},[a._v("#")]),a._v(" Mac11.4权限问题")]),a._v(" "),t("h2",{attrs:{id:"问题现象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题现象"}},[a._v("#")]),a._v(" 问题现象")]),a._v(" "),t("p",[t("img",{attrs:{src:"/pr//yuque/0/2021/png/139763/1637138284454-197234fe-fe16-4cd7-8988-405db3e38133.png",alt:"image.png"}})]),a._v(" "),t("h2",{attrs:{id:"现象分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#现象分析"}},[a._v("#")]),a._v(" 现象分析")]),a._v(" "),t("h3",{attrs:{id:"tcc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcc"}},[a._v("#")]),a._v(" TCC")]),a._v(" "),t("p",[a._v("通过解锁 mac sip 权限之后，读取 sqlite3 /Library/Application\\ Support/com.apple.TCC/TCC.d\n的列表看到 db ⾥的数据如下，正常能够显示图标的⼀⾏是 client 显示的是 com.alibaba.CloudUEM 这\n样的 bundle id，⽽异常的⼀⾏是直接指向了 app 的⼊⼝\n"),t("img",{attrs:{src:"/pr//yuque/0/2021/png/139763/1637138309367-7561b43a-a4fd-4d42-bcdc-f88eb04aeb66.png",alt:"image.png"}})]),a._v(" "),t("h3",{attrs:{id:"权限申请机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#权限申请机制"}},[a._v("#")]),a._v(" 权限申请机制")]),a._v(" "),t("p",[a._v("CloudUEM ⾥，前端需要申请投屏权限的流程是前端给 native 独⽴进程发⼀个消息，然后由 native 来唤\n起投屏进程的，⽽判断是否有权限是 native 通过直接拿⼀个抓屏流，如果能获取到⾮空的流则认为是有权\n限\n"),t("img",{attrs:{src:"/pr//yuque/0/2021/png/139763/1637138329346-f345bfcd-e6b9-4417-bd5c-276eb4df8e35.png",alt:"image.png"}}),a._v("\nnative 端判断是否有权限\n"),t("img",{attrs:{src:"/pr//yuque/0/2021/png/139763/1637138341369-ba36dd4a-8997-4892-b6a4-44d183745615.png",alt:"image.png"}})]),a._v(" "),t("h3",{attrs:{id:"测试唤起其他投屏进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试唤起其他投屏进程"}},[a._v("#")]),a._v(" 测试唤起其他投屏进程")]),a._v(" "),t("p",[a._v("因为此问题在阿⾥郎⾥并不存在，只在 CloudUEM ⾥出现了，两者的区别是阿⾥郎是之前直接调起投屏进\n程，⽽ CloudUEM 是通过 native 来调起的投屏，因此这个问题很明显是在 native 端的调⽤产⽣了问\n题。尝试由前端调⽤其他投屏的进程看是否存在此问题")]),a._v(" "),t("h3",{attrs:{id:"唤起钉钉的截图助手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#唤起钉钉的截图助手"}},[a._v("#")]),a._v(" 唤起钉钉的截图助⼿")]),a._v(" "),t("p",[a._v("钉钉的安装包⾥⾯有⼀个截图助⼿\n/Applications/DingTalk.app/Contents/Frameworks/ScreenShotTool.app 尝试着由 CloudUEM 直\n接唤起，发现权限申请关系是正常的，归属到⼀个 Bundle Id 上，相应的弹出界⾯也是正确的\n"),t("img",{attrs:{src:"/pr//yuque/0/2021/png/139763/1637138372398-5d9fdd24-e2ad-48c8-bf11-9b2bd18ddb8a.png",alt:"image.png"}}),a._v(" "),t("img",{attrs:{src:"/pr//yuque/0/2021/png/139763/1637138379346-f4a11e4e-418a-4583-9c2a-d828fb511d21.png",alt:"image.png"}})]),a._v(" "),t("h3",{attrs:{id:"唤起自己写的-swift-mac-应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#唤起自己写的-swift-mac-应用"}},[a._v("#")]),a._v(" 唤起⾃⼰写的 Swift Mac 应⽤")]),a._v(" "),t("p",[a._v("⾃⼰⽤ xcode 写了⼀个简单的 swift 应⽤，原理是直接通过 process 调⽤⼀个录屏。表现和唤起钉钉⼀\n样是正常的，⼀样的显示 CloudUEM 的 bundle id\n"),t("img",{attrs:{src:"/pr//yuque/0/2021/png/139763/1637138401018-1bd0486f-786f-4cde-adcf-1e7bd1468184.png",alt:"image.png"}})]),a._v(" "),t("h3",{attrs:{id:"钉钉的做法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#钉钉的做法"}},[a._v("#")]),a._v(" 钉钉的做法")]),a._v(" "),t("p",[a._v("钉钉有截图+会议共享屏幕两个功能都是使⽤到录屏权限的，但是却是分开的两个权限申请，仅授权⼀个的\n情况下另⼀个会⽆法正常获取到权限。但是从效果上看，⽤户并不会觉得有什么异常，我们 CloudUEM 遇\n到的问题也仅仅是因为图标显示了 CloudUEM ，⽽⽤户安装的 app 名称是 「联呗」，会让⽤户看到这个\n会有意外的感觉。\n"),t("img",{attrs:{src:"/pr//yuque/0/2021/png/139763/1637138418091-2b00da40-b8b9-429c-9cd2-4c229721d7e7.png",alt:"image.png"}})]),a._v(" "),t("h2",{attrs:{id:"根本原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根本原因"}},[a._v("#")]),a._v(" 根本原因")]),a._v(" "),t("p",[a._v("经过两三个周末逛外⽹ Mac app 开发的论坛，看到有⼈也遇到了类似的问题，看完他们的讨论发现\n了这样⼀个零⽇漏洞的分析 https://www.jamf.com/blog/zero-day-tcc-bypass-discovered-inxcsset-\nmalware/ 简要概括⼀下如下，就是攻击者可以通过遍历⽤户电脑上有某权限（举例录屏权限），\n然后将该 app ⼊⼝替换为⽊⻢⼊⼝，由⽊⻢⼊⼝再唤起宿主⼊⼝，给⽤户看到的效果是 app 是正常启动\n了，并不知道后台也启动了⽊⻢，⽽⽊⻢本身获得了和此 app ⼀样的权限，不需要⽤户再次确认授权\n为了解决此漏洞，Mac 11.4 合⼊了⼀个 patch ，原理是每次运⾏都会检测可执⾏⼊⼝的合法性\n"),t("em",[a._v("“detect and prevent anytime this vulnerability is potentially being abused.”")]),a._v(" ⽽检测的机制是检查\n可执⾏⼊⼝的数字签名的有效性。\n对⽐ CloudUEM，native 进程和投屏进程确实没有签名过，是通过 zip 包塞到 .app 整包⾥，绕过了\n签名，同时在⽤户⾸次运⾏时做解压处理，因此导致了授权链路的异常。因此只需要把 zip 去掉，对所有\n内容做签名就可以解决问题。\n⽽之前 CloudUEM 为什么要把 native 可执⾏⽂件打包，原因是 native ⽂件较多，当时遇到了 app\n签名⼀直失败，和当时的 Mac 开发赵睿同学⼀起尝试了各种办法查了各种⽂档，⼀个多星期都没有解决，\n最后商量就⽤这种把 native 进程全部打包掉运⾏时再解压的办法。⽽现在⼜不得不⾯对这样的问题⽽且只\n能⾃⼰⼀个⼈查了，艰难的排查过程略过，当然这次也是花了好多天时间，结论是被签名的 app 程序包⾥\n不能包含 ._ 开头的⽂件、.DS_Store、__MACOSX 这些垃圾⽂件，否则签名时虽然会忽略且正确签名完\n成，但是在⽤户电脑上执⾏的时候会报如下错误\n"),t("img",{attrs:{src:"/pr//yuque/0/2021/png/139763/1637138449010-4983d51f-17f8-4ae4-b82f-bc320329704b.png",alt:"image.png"}})]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("由于 Mac11.4 的安全机制会⼀直存在下去，以上分析会在后续的 app 开发都需要注意的：")]),a._v(" "),t("ul",[t("li",[a._v("如果业务有不得不动态下发的可执⾏程序，例如动态模块，UEM 以后也许也会遇到这种安装时没有，")])]),a._v(" "),t("p",[a._v("但是根据租户可能需要动态加载可执⾏程序的，那么这种场景合适以独⽴进程的⽅式唤起，⽤户直接\n给投屏进程授权，⽽不是通过主程序申请权限。具体做法是 open /xxx.app --args 参数 这样的⽅式")]),a._v(" "),t("ul",[t("li",[a._v("如果下发的就是整包，不会动态下载则要注意程序内所有⽂件都需要构建时签名。签名需要注意 ._ 等")])]),a._v(" "),t("p",[a._v("上⽂提到的垃圾⽂件的清理")])])}),[],!1,null,null,null);t.default=r.exports}}]);