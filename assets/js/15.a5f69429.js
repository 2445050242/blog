(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{515:function(s,n,e){"use strict";e.r(n);var a=e(4),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("ul",[e("li",[e("h2",{attrs:{id:"先写一下答大体思路，后面等demo完整之后再继续深入地分析过程："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#先写一下答大体思路，后面等demo完整之后再继续深入地分析过程："}},[s._v("#")]),s._v(" 先写一下答大体思路，后面等demo完整之后再继续深入地分析过程：")]),s._v(" "),e("ul",[e("li",[e("h5",{attrs:{id:"首先全局安装express，并全局安装express-generator。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首先全局安装express，并全局安装express-generator。"}},[s._v("#")]),s._v(" 首先全局安装express，并全局安装express-generator。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm install -g express  \nnpm install -g express-generator\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("（ps:这里有个小坑，就是在成功安装express，在命令行会提示express不是内部或外部命令，最新express4.0版本中将命令工具分家出来了(项目地址:https://github.com/expressjs/generator),所以我们还需要安装一个命令工具,命令如下:npm install -g express-generator）")])]),s._v(" "),e("li",[e("h5",{attrs:{id:"安装express模板，这里简单介绍两种模板引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装express模板，这里简单介绍两种模板引擎"}},[s._v("#")]),s._v(" 安装express模板，这里简单介绍两种模板引擎")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("使用jade模板语法，为express默认模板")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("express jade\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("jade为项目名称，自取;\n"),e("a",{attrs:{href:"http://cnodejs.org/topic/5368adc5cf738dd6090060f2",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文档地址"),e("OutboundLink")],1)])]),s._v(" "),e("li",[e("p",[s._v("使用ejs模板语法")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("express -e ejs \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("ejs为项目名称，-e则表示选择使用ejs模板\n"),e("a",{attrs:{href:"http://www.360doc.com/content/16/0115/10/597197_528136785.shtml",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文档地址"),e("OutboundLink")],1)])]),s._v(" "),e("li",[e("p",[s._v("jade模板虽然较为简洁，不过更多人比较倾向于ejs模板，更容易上手，建议使用ejs，当然这里选择哪一种语法就取决于个人了。还有更多模板引擎大家可以自己去了解一下，这里就不多做介绍了。。。")])])])]),s._v(" "),e("li",[e("h5",{attrs:{id:"开始搭建我们所需要的页面以及爬虫程序（这一步最为关键）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始搭建我们所需要的页面以及爬虫程序（这一步最为关键）"}},[s._v("#")]),s._v(" 开始搭建我们所需要的页面以及爬虫程序（这一步最为关键）")]),s._v(" "),e("p",[s._v("先把主要代码贴出来看一下(以下代码以ejs模板为例，如果要使用其他模板，请自行更换模板)（这里就先简单的记录一下代码，等到有时间再好好地整理一下吧）")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("先在routes目录下创建test.js文件")]),s._v(" "),e("p",[e("img",{attrs:{src:"//note.youdao.com/yws/res/142/WEBRESOURCE9b9e0ad713445ca77315d532df1361ba",alt:""}})])]),s._v(" "),e("li",[e("p",[s._v("将以下代码写到test.js文件中")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var express = require('express');\nvar router = express.Router();\n\n/* GET users listing. */\nrouter.get('/', function(req, res, next) {\n    res.render('test');\n});\n  \nmodule.exports = router;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("在view目录下创建对应的test.ejs并将以下代码写到文件中（test.ejs文件为简单的可视化界面，用于向爬虫页面传递参数）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<!DOCTYPE html>\n<html>\n<head>\n    <title>123132</title>\n    <link rel=\'stylesheet\' href=\'/stylesheets/style.css\'/>\n</head>\n<body>\n<form action="/" method="post">\n    <p>需要爬取的文章数<input type="text" name="num"/></p>\n    <input type="submit" value="Submit" id="btn"/>\n</form>\n<script>\n<\/script>\n</body>\n</html>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("在routes文件目录下创建index.js文件并将以下代码写入文件中(index.js文件执行爬虫功能，并将爬取到的数据传输至模板中)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    var express = require('express');\nvar http = require('http');\nvar fs = require('fs');\nvar cheerio = require('cheerio');\nvar request = require('request');\nvar querystring = require('querystring');\nvar bodyParser = require('body-parser');\nvar util = require('util');\n\nvar router = express.Router();\nvar app = express();\n\n// 引入body-parser中间件来获取传递的参数\napp.use(bodyParser.urlencoded({extended: false}));\napp.use(bodyParser.json());\n\n// 爬取文章的序号\nvar i = 0;\n// 爬取的路径\nvar url = \"http://www.ss.pku.edu.cn/index.php/newscenter/news/2391\";\n// 用来存储接收的参数\n// var num = 5;\n// 用来存储爬取到的内容\nvar html1 = [];\n// 爬虫主体函数块\nstartRequest = function (x, num) {\n    return new Promise(function (resolve, reject) {\n        //采用http模块向服务器发起一次get请求\n        http.get(x, function (res) {\n            var html = '';        //用来存储请求网页的整个html内容\n            var titles = [];\n            res.setEncoding('utf-8'); //防止中文乱码\n            //监听data事件，每次取一块数据\n            res.on('data', function (chunk) {\n                html += chunk;\n            });\n            //监听end事件，如果整个网页内容的html都获取完毕，就执行回调函数\n            res.on('end', function () {\n                var $ = cheerio.load(html); //采用cheerio模块解析html\n                var time = $('.article-info a:first-child').next().text().trim();\n                var news_item = {\n                    //获取文章的标题\n                    title: $('div.article-title a').text().trim(),\n                    //获取文章发布的时间\n                    Time: time,\n                    //获取当前文章的url\n                    link: \"http://www.ss.pku.edu.cn\" + $(\"div.article-title a\").attr('href'),\n                    //获取供稿单位\n                    author: $('[title=供稿]').text().trim(),\n                    //i是用来判断获取了多少篇文章\n                    i: i = i + 1,\n                };\n                console.log(news_item);     //打印新闻信息\n                html1.push(news_item.title);\n                var news_title = $('div.article-title a').text().trim();\n                //下一篇文章的url\n                var nextLink = \"http://www.ss.pku.edu.cn\" + $(\"li.next a\").attr('href');\n                str1 = nextLink.split('-');  //去除掉url后面的中文\n                str = encodeURI(str1[0]);\n                //这是亮点之一，通过控制I,可以控制爬取多少篇文章.\n                if (i >= num) {\n                    // startRequest(str, num);\n                    resolve({bool: 1, data: html1});\n                } else {\n                    resolve({bool: 0, url: str, data: html1});\n                }\n            });\n            // setTimeout(function () {\n            //     resolve(html1);\n            // }, 2000);\n        }).on('error', function (err) {\n            console.log(err);\n        });\n    })\n}\n\n\n/* GET home page. */\nrouter.post('/', function (req, res, next) {\n    var start = async function () {\n//接收传递过来的参数\n        let num = req.body.num;\n        let ht = await startRequest(url, num);\n        let data = \"\";\n//根据异步传回来的bool变量的值判断是否继续爬取数据\n        while (!ht.bool) {\n            ht = await startRequest(ht.url, num);\n            data += ht.data;\n        }\n        await  res.render('index', {title: ht.data});\n    };\n    start();\n});\n\nmodule.exports = router;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br"),e("span",{staticClass:"line-number"},[s._v("87")]),e("br"),e("span",{staticClass:"line-number"},[s._v("88")]),e("br"),e("span",{staticClass:"line-number"},[s._v("89")]),e("br"),e("span",{staticClass:"line-number"},[s._v("90")]),e("br"),e("span",{staticClass:"line-number"},[s._v("91")]),e("br"),e("span",{staticClass:"line-number"},[s._v("92")]),e("br"),e("span",{staticClass:"line-number"},[s._v("93")]),e("br"),e("span",{staticClass:"line-number"},[s._v("94")]),e("br"),e("span",{staticClass:"line-number"},[s._v("95")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("在views目录下创建对应的index.ejs文件并将以下代码写入文件中（index.ejs负责将爬取到的数据展示在页面中，需要对数据做一些修饰就可以在这里操作）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<!DOCTYPE html>\n<html>\n  <head>\n    <title>123132</title>\n    <link rel='stylesheet' href='/stylesheets/style.css' />\n  </head>\n  <body>\n  <% for (i in title){ %>\n        <%= title[i] %><br>\n  <% } %>\n  </body>\n</html>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("至此一个简单的基于node express框架的可视化爬虫demo就已经完成了，这里只是简单地演示了一下爬取过程，对爬取到的数据没有进行修饰，大家可以根据自己的需求对代码进行修改，这里只是提供一个思路，有兴趣的小伙伴可以自己动手尝试一下~~~")])])])])])])])])}),[],!1,null,null,null);n.default=t.exports}}]);