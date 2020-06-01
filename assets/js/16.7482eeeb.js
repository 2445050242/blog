(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{516:function(s,e,a){"use strict";a.r(e);var n=a(4),r=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("ul",[a("li",[a("h3",{attrs:{id:"路由命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由命名"}},[s._v("#")]),s._v(" 路由命名")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("routes配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const router = new VueRouter({\nroutes: [\n    {\n      //访问路径\n      path: '/user/:userId',\n      //路由名称\n      name: 'user',\n      //路由对应组件\n      component: User\n    }\n  ]\n})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("调用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<router-link :to=\"{ name: 'user', params: { userId: 123 }}\">User</router-link>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("router.push({ name: 'user', params: { userId: 123 }})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("命名视图")]),s._v(" "),a("p",[s._v("有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如创建一个布局，有"),a("code",[s._v("sidebar")]),s._v("(侧导航) 和"),a("code",[s._v("main")]),s._v("(主内容) 两个视图，这个时候命名视图就派上用场了。你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果"),a("code",[s._v("router-view")]),s._v("没有设置名字，那么默认为"),a("code",[s._v("default")]),s._v("。示例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\x3c!--声明--\x3e\nconst router = new VueRouter({\n  routes: [\n    {\n      path: \'/\',\n      components: {\n        default: Foo,\n        a: Bar,\n        b: Baz\n      }\n    }\n  ]\n})\n\x3c!--使用--\x3e\n<router-view class="view one"></router-view>\n<router-view class="view two" name="a"></router-view>\n<router-view class="view three" name="b"></router-view>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])])])]),s._v(" "),a("li",[a("h3",{attrs:{id:"动态路由匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态路由匹配"}},[s._v("#")]),s._v(" 动态路由匹配")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 "),a("code",[s._v("this.$route.params")]),s._v("，可以在每个组件内使用。例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{ path: '/user/:id', component: User }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。"),a("br"),s._v("\n复用组件时，想对路由参数的变化作出响应的话，你可以简单地"),a("code",[s._v("watch")]),s._v("(监测变化)"),a("code",[s._v("$route")]),s._v("对象。例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("watch: {\n  '$route' (to, from) {\n    // 对路由变化作出响应...\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("或者使用 2.2 中引入的"),a("code",[s._v("beforeRouteUpdate")]),s._v("导航守卫")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("beforeRouteUpdate (to, from, next) {\n    // react to route changes...\n    // don't forget to call next()\n} \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])])]),s._v(" "),a("li",[a("h3",{attrs:{id:"跳转方式："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跳转方式："}},[s._v("#")]),s._v(" 跳转方式：")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("router.push(location, onComplete?, onAbort?)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 字符串\nrouter.push('home')\n// 对象\nrouter.push({ path: 'home' })\n// 命名的路由\nrouter.push({ name: 'user', params: { userId: 123 }})\n// 带查询参数，变成 /register?plan=private\nrouter.push({ path: 'register', query: { plan: 'private' }})\n//注意：如果提供了 path，params 会被忽略\n// 这里的 params 不生效\nrouter.push({ path: '/user', params: { userId }}) // -> /user\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("router.replace(location, onComplete?, onAbort?)")]),s._v(",它不会向"),a("code",[s._v("history")]),s._v("添加新纪录，而是跟它的方法名一样——替代当前的"),a("code",[s._v("history")]),s._v("记录")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("router.replace('home')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("router.go(n)")]),s._v(" 这个方法的参数是一个整数，意思是在"),a("code",[s._v("history")]),s._v("记录中向前或者后退多少步")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 在浏览器记录中前进一步，等同于 history.forward()\nrouter.go(1)\n// 后退一步记录，等同于 history.back()\nrouter.go(-1)\n// 前进 3 步记录\nrouter.go(3)\n// 如果 history 记录不够用，那就默默地失败呗\nrouter.go(-100)\nrouter.go(100)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);