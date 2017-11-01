首先熟悉一下jsonp的工作原理：ajax请求受同源策略影响，不允许进行跨域请求，而script标签src属性中的链接却可以访问跨域的js脚本,利用这个特性，服务端不再返回JSON格式的数据，而是返回一段调用某个函数的js代码，在src中进行了调用，这样实现了跨域。(via:csdn)<br>
为了深化对jsonp原理的认识，demo中的脚本基于原生JavaScript，注释部分为jquery的实现方法<br>
调用了豆瓣的api,可以查询自己喜欢的音乐和歌手<br>
增加百度搜索的实现搜索项高亮选中   <a href="https://dantyli.github.io/jsonp/jsonp.html">点我看看</a>
