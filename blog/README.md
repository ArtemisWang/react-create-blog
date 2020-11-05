<!--
 * @Author: yating.wang
 * @Date: 2020-11-05 18:31:48
 * @LastEditors: yating.wang
 * @LastEditTime: 2020-11-05 18:35:41
 * @Description:
-->

## 运行

yarn dev

## 实现功能

1. 首页页面布局
2. 点击 header 中的首页、视频、生活能够实现页面跳转
3. 分页中点击面包屑导航能够跳转回首页、视频页
4. 首页点击文章标题跳转到详情页
5. 详情页右侧设立滑动文章目录，通过 MarkNav 自动解析文章标题得到的目录，Affix 固定

## 修复问题

1. 页面跳转重新加载：转为客户端渲染形式，使用 next/link 中的<Link>标签设置路由，注意其中包裹<a>
2. 直接引入<Link>标签后面内容不显示：使用\<div>包裹
