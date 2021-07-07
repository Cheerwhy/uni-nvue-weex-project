# 介绍
## 2021.7.7(V1.0) --nvue纯app开发从入门到放弃
1. 基于nvue、weex原生渲染，使用weex中的list与waterfall组件提升性能
2. 使用VueX进行状态管理
3. 封装list与waterfall组件，利用refresh与loading组件完成下拉刷新与上拉加载功能（weex中不支持使用代码触发两个组件的刷新）
4. 点击tabBar实现回到顶部功能
5. 封装请求适配器与api接口
6. 取消主页原生导航栏
7. 项目采用纯原生渲染+weex编译
8. 目前后端是我自己的后端接口地址
9. 修复bug
- 修复nvue页面中box-shadow引起绘制很诡异的bug，将box-shadow改为elevation(目前最佳做法是使用绝对定位的阴影图片，elevation的阴影效果比较一般)
- 修复image首次加载无渐变动画的问题，将appear事件改为load事件
- 修复当页面处于滚动的状态时，执行滚动至顶部(无动画效果)的事件后，页面依然在滚动。解决方法是，在执行滚动至顶部(无动画)事件之前先执行滚动至顶部(有动画)的事件
- 修复点击瀑布流中项目的头像确依然跳转页面的问题，在子元素上阻止了事件的冒泡
- uni.getSystemInfoSync().statusBarHeight获取的手机顶部状态栏高度不准，使用screenHeight-windowHeight解决

