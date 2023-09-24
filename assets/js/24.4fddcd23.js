(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{306:function(t,a,n){"use strict";n.r(a);var e=n(14),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"aigc-在零代码中的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aigc-在零代码中的应用"}},[t._v("#")]),t._v(" AIGC 在零代码中的应用")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://juejin.cn/live/ddmjssj001",target:"_blank",rel:"noopener noreferrer"}},[t._v("稀土掘金 2023"),a("OutboundLink")],1),t._v(" 技术分享原文。转载请注明出处")])]),t._v(" "),a("h2",{attrs:{id:"背景问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景问题"}},[t._v("#")]),t._v(" 背景问题")]),t._v(" "),a("p",[t._v("零代码产品目前的应用场景通常有这样几个特征")]),t._v(" "),a("ol",[a("li",[t._v("领域化。也就是这个零代码平台通常应用于哪些业务场景，如网站主页介绍、活动信息、管理后台等")]),t._v(" "),a("li",[t._v("丰富的组件。在特定业务领域下通常有较为常用的物料库，如 B端的 crud 表单、C端的图文展示组件")])]),t._v(" "),a("p",[t._v("基于这两个特征，随着零代码产品的发展，会积累带来越来越多更细分的业务流程模块、信息展示&交互组件，这是发展的必然。在零代码产品变得更完善的同时，也带来了一定的负向收益：即使用流程正在变得更为复杂，组件变得更为多样难以抉择和搭配，面对空白的画布万事开头难。\n业界通常解决这个问题的办法通常是这样两种：")]),t._v(" "),a("ol",[a("li",[t._v("行业模板化，当用户打开一个零代码产品，甚至一个文档、ppt 编辑器，在新建一个页面时，它首先会提供一个模板选择步骤，按照行业、细分业务场景，分门别类提供给用户选择\n"),a("img",{attrs:{src:"/pr//yuque/0/2023/png/139763/1685351882506-38a5966e-28ba-4ccb-9e6b-a3de05d893ab.png",alt:"image.png"}})]),t._v(" "),a("li",[t._v("使用引导，用于引导可视化编辑器本身的使用，告诉用户都有哪些功能，每一步可以做什么\n"),a("img",{attrs:{src:"/pr//yuque/0/2023/png/139763/1685351923368-3dd77dfa-b7c3-4ed1-9d78-8868eba1eb6d.png",alt:"image.png"}})])]),t._v(" "),a("p",[t._v("但是这两种方法，给用户提供的心智负担并没有减少，对小白用户来说，上手零代码的创作的成本可能没有减少。\n而随着 GPT 的发展，这个问题有了新的解法。我们可以做一个类比，丰富的组件库就好像商场里丰富的衣服，根据不同衣服的用途组合在一起，会得到特定穿搭场合、风格，而对于一个没有丰富挑衣服经验的人来说，这时候可能最需要的不是模板化的套装，而是一个导购员甚至形象顾问，我们在零代码场景里需要的，可能是一个「导购员」")]),t._v(" "),a("h2",{attrs:{id:"零代码与gpt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#零代码与gpt"}},[t._v("#")]),t._v(" 零代码与GPT")]),t._v(" "),a("h3",{attrs:{id:"最佳实践定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践定义"}},[t._v("#")]),t._v(" 最佳实践定义")]),t._v(" "),a("p",[t._v("我们以一个更为具体的公司主页作为例子，分析需要解决的问题\n输入一行简单的诉求介绍，生成网页\n"),a("a",{attrs:{href:"https://player.bilibili.com/player.html?bvid=BV15s4y1B7Ws&autoplay=0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bilibili External Player"),a("OutboundLink")],1),t._v("\n输入一张图片，根据图片内容生成网页\n"),a("a",{attrs:{href:"https://player.bilibili.com/player.html?bvid=BV1AN41117Dm&autoplay=0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bilibili External Player"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"需要解决的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需要解决的问题"}},[t._v("#")]),t._v(" 需要解决的问题")]),t._v(" "),a("h4",{attrs:{id:"如何让-gpt-知道我要做什么-逻辑设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何让-gpt-知道我要做什么-逻辑设计"}},[t._v("#")]),t._v(" 如何让 GPT 知道我要做什么（逻辑设计）")]),t._v(" "),a("ul",[a("li",[t._v("我要一个页面前后是连续的、前后有逻辑关系的页面")]),t._v(" "),a("li",[t._v("GPT 的输出应该是一个低/零代码的 schema")])]),t._v(" "),a("h4",{attrs:{id:"如何让-gpt-知道我有什么-物料库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何让-gpt-知道我有什么-物料库"}},[t._v("#")]),t._v(" 如何让 GPT 知道我有什么（物料库）")]),t._v(" "),a("ul",[a("li",[t._v("不能真的把物料库发给它，这样 token 会溢出，而且执行也慢，即便 GPT4 plus 有 32k")]),t._v(" "),a("li",[t._v("不能把物料库发给它做 fine-tune，一般应用都是商用产品，属于公司资产")])]),t._v(" "),a("h4",{attrs:{id:"如何让-gpt-严格按照组件参数构建-schema-怎么做"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何让-gpt-严格按照组件参数构建-schema-怎么做"}},[t._v("#")]),t._v(" 如何让 GPT 严格按照组件参数构建 schema（怎么做）")]),t._v(" "),a("ul",[a("li",[t._v("GPT 在处理单一超长任务容易像脱缰野马，难以符合预期，如何拆分任务让 GPT 知道每个页面节点的构造")]),t._v(" "),a("li",[t._v("业界一般方式是提供 json schema（常用于swagger/openapi），这种描述方式在一个中等体量的组件极易超长")])]),t._v(" "),a("h3",{attrs:{id:"流程设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程设计"}},[t._v("#")]),t._v(" 流程设计")]),t._v(" "),a("p",[t._v("GPT 本质上是更像一个基于文字概率预测工具，甚至一定程度上可以理解为一个大号的成语接龙游戏，根据上下文推理接下来说什么更合理，它不是一个能无中生有的魔法，需要适当的 prompt 对其进行引导，也就是 prompt 四要素：角色、背景、任务、条件。GPT 不会像人那么一样给一个任务就能自动完成所有工作。吴承恩教授的公开课上也提到过，GPT 的文字处理，擅长做：总结、扩写、推理、转写、翻译这 5 类。而我们要实现的这个目标，至少要用到扩写、推理这两类。\n因此这本质上还是一个软件工程问题。\n要用零代码产品去实现一个公司主页，我们在可视化编辑器上需要做的是这样几个步骤：大纲撰写 - 选用组件 - 填写组件参数 - 拼装组件。这是一个思考链条(Chain Of Thought)，这里可以借助 langchain 做一次编程拆分：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("llm_chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("段落生成与组件推测"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("组件"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("组件参数获取"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("段落"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("组件生成节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("组件组装成页面"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"段落生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#段落生成"}},[t._v("#")]),t._v(" 段落生成")]),t._v(" "),a("p",[t._v("我们希望这个地方能够得到一组段落，大概类似这样的格式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Section1\ntitle 关于我们\ncontent 我们是一家专注IoT的公司，提供工厂设备运行监测解决方案\n")])])]),a("p",[t._v("这一个步骤很好完成，我们只需要类似这样设计一个下面这样的 prompt 即可。注意此 prompt 应该在 gpt-3.5-turbo 及以上的 chat 场景下使用，否则如 text-davinci-003 这样的模型，它是无法理解什么是 repeat N times 的")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""you are a webpage developer. your job is generating a document base on the user input. the document should follow this format:\n\nSection1\nTitle: (same language as user input) a title for this section\'s content\nContent: (same language as user input) a paragraph, about 100 words of this section\nKeywords: some keywords summary of this section content\nComponents: 5 English keywords to describe a proper component which can be used to show this section on a webpage\n...(this Section/Title/Content/Keywords/Components should repeat 5 times)\n\nTips: generally the first section is a navigator. the second section\'s component is banner\n\nBegin!\n\nUSER_INPUT: {input}\n"""')]),t._v("\n")])])]),a("h4",{attrs:{id:"组件选用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件选用"}},[t._v("#")]),t._v(" 组件选用")]),t._v(" "),a("p",[t._v("基于前面提到的问题，我们的物料库无法也不能直接提交给 GPT 做 fine-tune，那如何让 GPT 生成的区块能够从我们的物料库中选择一个最佳的组件用来展示呢？\n幸运的是，GPT 有这样一个背景，它在代码编程上有一定的知识储备，它甚至知道 React 代码怎么写，有些开发者还经常让 GPT 来帮助自己给变量、组件来起名字。那么，这里的问题我们不妨反过来，不让它根据我们有什么来选组件，我们让它直接猜：一般要展示这样一个段落（例如 Team Members) ，用什么组件更合适, 让它列几个关键词或者一句话出来，它可能会猜（Team、People、UserList）等特征的词，我们再根据这些词，在本地向量数据库中查找语意上最为接近的组件。这样的好处是，无论我们有多少组件，都不会使 token 超长，更不会把组件资产泄露。这里的 prompts 实际上在上一步已经列出了，需要关注的是这一句：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n...\nComponents: 5 English keywords to describe a proper component which can be used to show this section on a webpage\n...\n"""')]),t._v("\n")])])]),a("p",[t._v("为了实现这个效果，我们需要一个矢量数据库，事先做一个组件描述信息提取，抽取两份关键数据")]),t._v(" "),a("ul",[a("li",[t._v("矢量数据库，存储映射关系：关键词 -> 组件名，可以根据关键词搜索到对应的组件名")]),t._v(" "),a("li",[t._v("文档数据库，存储组件描述：组件名 -> 组件参数类型及描述，可以根据组件名获取")])]),t._v(" "),a("p",[t._v("为了开发和落库过程，我实现的是一个基于 ts 语法树提取工具。IBanner + defaultValue，存入到文档数据库；将组件注释的 @desc 作为组件描述，@cardName 作为组件名，存到矢量数据库。\n"),a("img",{attrs:{src:"/pr//yuque/0/2023/png/139763/1685357471686-36b9f8a1-e1f1-4355-aff2-1f2056345bfe.png",alt:"image.png"}})]),t._v(" "),a("h4",{attrs:{id:"组件实例化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件实例化"}},[t._v("#")]),t._v(" 组件实例化")]),t._v(" "),a("p",[t._v("现在我们已经得到了若干组 section，里面还有一个 componentName 是我们本地真实存在的一个组件名。经过查找，我们得到了一组 section + 节点 ts declare。接下来只需要设计一个 prompt ，让 GPT 能够基于这组信息生成一个满足低代码节点 schema 的 json。这里的 prompt 也非常简单：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 这里一次性将多个 sections 传入, 实测简单场景下并没有溢出, 但个 section 会比这个更简单")]),t._v("\ntemplate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v('"you are good at typescript '),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" json mock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" you will be given some sections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" your job "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" generating a json data "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" every section base on the Title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" then combine them into a json array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" here are some rules you should follow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\nrule "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" every instance should follow this ts structure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n```typescript\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" each node of the page "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),t._v(" Node "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" the component name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n    componentName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" the props "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" should be strictly follow the data struct "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n    props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("rule 2: to create a instance, you should know the parameter declaration of a specific component name, you have access to the following components's props declaration, when generating field data, you should consider every field's type and comment:")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("comps_declare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("rule 3: if you need to generate a image url, you can use Picsum.")]),t._v(" "),a("p",[t._v("here is the sections:")]),t._v(" "),a("p",[t._v("{sections}")]),t._v(" "),a("p",[t._v('Remember, output the json array only\n"""')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#### 题外话\n我一直在讲用 ts 声明来告诉 gpt 如何生成 json，那业界大家都这么做吗？并不是，下面的截图是 langchan 里做一个格式化输出的方式，是基于 json schema 的。它有两个作用：告诉 GPT 应该如何生成 json；拿到返回之后用这个 json schema 把返回的 string 转化为 json。对于开发者来说，开发者只需要写一个 pojo 数据结构（class），剩下的 json schema 生成和返回数据的结构化输出就都确定了。\n![image.png](/pr//yuque/0/2023/png/139763/1684040679199-6d071579-9a48-4023-b84e-d75e3577f0b1.png)![image.png](/pr//yuque/0/2023/png/139763/1684040828393-324639aa-0c9e-41f9-8276-15c23be20d58.png)\n看起来非常完美，但是它有个问题：信息总量其实只有2个字段，需要的 token 却长达 71 个\n![image.png](/pr//yuque/0/2023/png/139763/1684041167339-52e389ed-982e-41ab-88ee-bab470a51fdf.png)\n组件复杂一些的话，这个 token 极容易超出 token 限制，而且计算时间会变大。出于时间成本和费用成本考虑，有没有信息密度更高的表达方式呢？当然有，同样是描述了参数名、是否必填、字段描述，直接用 ts declare 可以达到 json schema 的一半：\n![image.png](/pr//yuque/0/2023/png/139763/1684041288625-ba43c0a6-3ae2-4328-b7c1-7d323f7a13b3.png)\n#### 完整流程图\n![](/pr//yuque/0/2023/jpeg/139763/1683553174762-7f96ed34-bf50-4022-aa21-940a8e5f6bc5.jpeg)\n![](/pr//yuque/__mermaid_v3/d1f726b677215ef61ba5bb7f51aecde2.svg)## 生产环境问题\n\n1. 文字转网页，2次 GPT3.5 交互，发送/返回 token 数约 400/8000，大概耗时 1 分 50 秒。耗时较慢，这个可以做一些体验上的优化，让用户感觉不那么长，framer.com/ai 就是这样的实现方式，先展示一个大纲，然后每个区域分别逐字实时生成、显示\n2. 大厂应用，需要有自己的模型。大厂不大可能直接使用 ChatGPT，都需要自己的模型，然而目前还没有任何大厂公开一个可以 api 形式调用的 LLM GPT 模型，小厂如果直接用 ChatGPT 难以保证服务可用性\n3. 性能优化变成了在 token 数量和最佳效果之间的平衡。未来可能会出现多级架构，贵/更泛用的 GPT4 用于逻辑推理，便宜的本地 fine-tuneGPT2/3 用于机械计算，甚至定制的服务。（这就是 MaaS 存在的意义，我们通常并不总是需要一个聪明的 GPT，某些场景下比如上面的基于文字 + ts 生成 json，可能一个训练过的定制模型会更合适）\n4. 领域定制的模型，类似上一条提的定制的 MaaS，结合业务需要预训练更多领域内的数据，更擅长特定领域问题\n5. 更少的通用推理 + 通用 pattern。例如一个 crud 的网页，整个页面唯一的变量可能只是数据库的一张表、一个页面模板，GPT 需要推理这点就够了。这种模式在 GPT 前有一个名字，叫模型驱动，或者库表驱动。\n### 以图生成页面\n本质上也是一样的流程，只是在前面加了一个前置操作，读取并识别图片的关键信息，然后讲信息输入到文本生成页面的流程即可。这里用到的是 Salesforce/blip-image-captioning-large 这一预训练模型\n上传图片 -> 预训练模型 -> 文字概要 -> 翻译API -> 文字转网页流程\n在 GPT4 刚发布的时候，大家可能看过一个视频，拍照识别一张用户+密码登录的草图，GPT 自动就生成了一张可访问的页面，这个效果基于我们的流程来看也很容易实现：特征提取 - 领域识别 - 表单生成。如果要更复杂一些的，做到类似 imgcook 的那种效果，那就是另外一个话题了。\n### 优化与改进\n#### 局部优化\n在 Demo 中的效果，可以看到图文关联不是很大，这是因为生成过程我们并没有告诉 GPT 这里应该选择一张更好的图片。这里我们其实也不应该直接让它去生成一张最合适的图，因为这个过程会消耗一定的时间，GPT 本身就耗时比较久。有些应该详细展开的也没有展开，于是我们面临一个新的需求迭代：局部优化，我希望选中这个区域后，让 GPT 根据我的输入对其做内容优化：\n![image.png](/pr//yuque/0/2023/png/139763/1685373305125-15d683b4-8bcd-42a2-be2d-5c95d94c9c50.png)\n实现流程是基于 [ReAct](https://arxiv.org/pdf/2210.03629.pdf) 框架。这里简单介绍一下 ReAct 框架的原理：\n\n- 是一种具备推理和行动能力的 MRKL 系统\n- 默认基于 openai 的 text-davinci-003 模型，该模型更擅长做下文推断补全\n- 基于 openai 接口的 stop 参数，告知 GPT 应该在何处停止生成。（2023.06.13 openai ���供了新的 api, 原生支持 functions 参数)\n- 程序端发送 prompt，GPT 执行到 stop 位置时自动停止继续生成\n- 程序端收到返回，判断是否到了一处 Action ，并判断该 Action 本地是否可执行，并取得 Action Input 作为本地函数入参，调用如 Bing Search 等函数，计算得到结果，并作为 Observation 拼接到文本中，作为下一次 Prompt 提交\n- GPT 最终返回 Final Answer，程序结束，得出结果\n\n![image.png](/pr//yuque/0/2023/png/139763/1685373823042-392417c7-4aec-4710-8948-c098c12c74a3.png)\n程序设计：\n直接使用 langchain 内置的 ZERO_SHOT_REACT_DESCRIPTION 这一类型的 agent，封装一个 bing 图片搜索 `image_search`agent tool \n```python\ntemplate = """\nyou will receive a json data, your job is modifing some fields of it, you should keep the original data struct, You have access to the following tools:\n\nimage_search: useful when you need to search for an image. provide some keywords, and it will return 2 http urls of pictures\nnoop: a default tool if there is no suitable tool\n\nUse the following format:\n\nQuestion: the input question you must answer\nThought: you should always think about what to do\nAction: the action to take, should be one of [image_search, noop]. if no\nAction Input: the input to the action\nObservation: the result of the action. skip this step if no available Action\n... (this Thought/Action/Action Input/Observation can repeat N times)\nThought: I now know the final answer\nFinal Answer: the final answer to the original input question\n\nBegin! remember, the final answer should be a json repect the original json data structure\n\njson data: ```{json_data}```\nuser_input: {input}\n{agent_scratchpad}\n"""\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('you will receive a json data, your job is modifing the props field, you should keep the original data struct, You have access to the following tools:\n\nimage_search: useful when you need to search for an image. provide some keywords, and it will return 2 http urls of pictures\nnoop: a default tool if there is no suitable tool\nUse the following format:\nQuestion: the input question you must answer\nThought: you should always think about what to do\nAction: the action to take, should be one of [image_search, noop]. if no\nAction Input: the input to the action\nObservation: the result of the action. skip this step if no available Action\n... (this Thought/Action/Action Input/Observation can repeat N times)\nThought: I now know the final answer\nFinal Answer: the final answer to the original input question\nBegin! remember, the final answer should be a json repect the original json data structure\njson data: ```{\n    "media": {\n        "src": "https://picsum.photos/400/400"\n    },\n    "title": {\n        "text": "实时监控"\n    },\n    "txt": {\n        "text": "我们的方案基于先进的传感器技术，可以实时监控工厂设备的运行状态和生产数据。"\n    }\n}```\nuser_input: 根据内容选一张合适的图片\nQuestion: 根据内容选一张合适的图片\nThought: I need to find a better image\nAction: image_search\nAction Input: factory, equipment\nObservation: [\'https://ts3.cn.mm.bing.net/th?id=OIP-C.omsDBEURvl9e53aAaSQpYQHaD_&pid=Api\', \'https://ts1.cn.mm.bing.net/th?id=OIP-C.Uzn713ZhtWZnuMzyVxgRWAHaFN&pid=Api\']\nFinal Answer: {\n    "media": {\n        "src": "https://ts3.cn.mm.bing.net/th?id=OIP-C.omsDBEURvl9e53aAaSQpYQHaD_&pid=Api"\n    },\n    "title": {\n        "text": "实时监控"\n    },\n    "txt": {\n        "text": "我们的方案基于先进的传感器技术，可以实时监控工厂设备的运行状态和生产数据，以提高生产效率和质量。"\n    }\n}\n')])])]),a("h4",{attrs:{id:"素材库的强化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#素材库的强化"}},[t._v("#")]),t._v(" 素材库的强化")]),t._v(" "),a("p",[t._v("素材的落库的模块，按上述流程其实有个缺点，即比较依赖于初始研发团队对于这个组件的定义，研发团队当时写的多少个使用场景关键词在上面，后续就会一成不变只能匹配上这些词，整个系统不会随着用户的使用而变得更聪明。例如一个 Team member 组件，实际上也可以用于 Feature List，研发团队没有考虑到，但用户其实可以使用在这样的场景。对于这样的 user case，可以将组件内配置的文本类型的内容提取出来，交给 GPT 做一次提炼，推测用户将这个组件用于何种场景，然后追加到组件的矢量数据库里，这样每一次不同的用户使用，都相当于告诉矢量库这个组件还可以用于什么样的新场景。\n"),a("img",{attrs:{src:"/pr//yuque/0/2023/png/139763/1685373570342-217fb26b-2e22-4d3e-8fb4-974516affae8.png",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"总结与扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结与扩展"}},[t._v("#")]),t._v(" 总结与扩展")]),t._v(" "),a("h3",{attrs:{id:"自动化的流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化的流程"}},[t._v("#")]),t._v(" 自动化的流程")]),t._v(" "),a("p",[t._v("这整个流程，实际上是一个程序设定好的流程，现阶段的 GPT，其实是 【数据+Prompt】 作为两个输入，经过 GPT 计算得到输出，这个输出又会成为下一个节点 【数据+Prompt】 的数据。示例中的流程是一个线性的、内容也是线性的，是比较简单的场景，而如果要实现复杂树状的效果（如 crud 页面的多层节点、表单、表格），其实也是类似的，只是做了多个线性流程的嵌套：\n"),a("img",{attrs:{src:"/pr//yuque/0/2023/jpeg/139763/1685535147277-86a75b84-88b0-4ee5-8e69-bf82aa4cc14c.jpeg",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"扩展想法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展想法"}},[t._v("#")]),t._v(" 扩展想法")]),t._v(" "),a("p",[t._v("Prompt 本质上的人为定义的程序框架，所以它至今表现的仍然是一种机械化的程序，比较能符合预期，但是也不会超出预期。（超出预期可能是故障，也可能是惊喜）\n那 Prompt 有没有可能直接通过 GPT 做逻辑推理出来呢？如果可以，那这里必然能实现真正意义上的智能化、自动化驾驶，社区真的有人这么搞，它就是 AutoGPT，从人列计算机完全演变成了二极管计算机，未来的发展趋势，应该是一定比例的降低人在里面的既定成分。目前距离让其“自动驾驶”可能还有一定的距离\n"),a("img",{attrs:{src:"/pr//yuque/0/2023/png/139763/1685376402607-00b37fbf-eb42-4e3f-918e-602d012825a1.png",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"一个mock服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个mock服务器"}},[t._v("#")]),t._v(" 一个mock服务器")]),t._v(" "),a("p",[t._v("前面的使用中，得到了一个副产品：gpt 可以基于 ts 生成一个非常逼真的 json，比 mockjs 的效果要好的多。\n笔者实现过一个 "),a("a",{attrs:{href:"https://github.com/javaxiu/api-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("api-loader"),a("OutboundLink")],1),t._v(", 它是一个能递归查找到某个函数所有 ts 声明，并转化为 json schema，从而知道一个函数的入参、返回，可以用于入参校验、输出 mock。\n"),a("img",{attrs:{src:"/pr//yuque/0/2023/png/139763/1685359537547-c872da3a-f40a-482a-b1f7-9865e04675ce.png",alt:"image.png"}}),t._v("\n但是 Mock 出来的数据有个缺点，就是太“假”，因为 mock 是基于 "),a("a",{attrs:{href:"http://mockjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mock.js"),a("OutboundLink")],1),t._v("，它的数据看起来是这样的")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Random.ctitle('10')")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'积文要界往报力查五法'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'却极天形查温表府空位'")]),t._v("\n")])])]),a("p",[t._v("而基于 ts + gpt 的实现，我们之前已经提过，它实现的效果如下")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[t._v("```ts\ninterface IBanner {\n  /"),a("span",{pre:!0,attrs:{class:"token bold"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v(" 页面标题 "),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("/\n  title: string\n  /")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("*")])]),t._v("* 页面副标题 */\n  subtitle: string\n  /")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v(" 产品/公司等介绍 "),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("/\n  description: string\n  /")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("*")])]),t._v("* Logo */\n  img: string\n}\n")])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"欢迎来到我们的网站"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subtitle"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"这里是一个很棒的地方"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我们是一家专业的公司，提供高质量的产品和服务。"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"img"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://picsum.photos/200/300"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("配合 [json-server](https://www.npmjs.com/package/json-server)，可以实现一个较为完整的 Mock 服务器，它的大致流程如下\n![](/pr//yuque/__mermaid_v3/afaea6ee743bb00842d652a504e0bc58.svg)虽然可以更简单的，直接每次 web 请求到 server，然后 server 根据参数和事先的定义，直接推测返回值，这里的 json-server 实际上是充当一个数据缓存并提供 REST 接口的作用\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);