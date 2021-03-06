import Head from 'next/head'
import React from 'react';
import {Row, Col, Icon, Breadcrumb, Affix} from 'antd'
import Header from '../components/Header'
import Advert from '../components/Advert'
import Author from '../components/Author'
import Footer from '../components/Footer'
import '../static/style/pages/detailed.css'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import Link from 'next/link'

const Detailed = () => {
  let markdown=' # p01: markdown 的编辑器\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:这是加删除线的文字\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:这是加删除线的文字\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:这是加删除线的文字\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p05:这是加删除线的文字\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:这是加删除线的文字\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'+
  '# p06:这是加删除线的文字\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:这是加删除线的文字\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'

  return (
    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center"> 
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14} >
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><Link href="/"><a>首页</a></Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link href="/video"><a>视频</a></Link></Breadcrumb.Item>
                <Breadcrumb.Item>视频名</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="detailed-title">
              伯曼猫的生活日常-打滚卖萌中...（第一集）
            </div>
            <div className="list-icon center">
              <span><Icon type="calendar"/>2020-02-25</span>
              <span><Icon type="folder"/>视频教程</span>
              <span><Icon type="fire"/>2333人</span>
            </div>
            <div className="detailed-content">
              <ReactMarkdown
                source={markdown}
                escapeHtml={false} 
              />
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4} >
          <Author/>
          <Advert/>
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <MarkNav
                className="article-menu"
                source={markdown}
                headingTopOffset={0}
                ordered={false}
              />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer/>
    </div>
  )
}



export default Detailed
