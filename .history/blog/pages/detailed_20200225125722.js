import Head from 'next/head'
import React from 'react';
import {Row, Col, Icon, Breadcrumb} from 'antd'
import Header from '../components/Header'
import Advert from '../components/Advert'
import Author from '../components/Author'
import Footer from '../components/Footer'
import '../static/style/pages/detailed.css'

const Detailed = () => (
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
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="/">视频列表</a></Breadcrumb.Item>
              <Breadcrumb.Item>文章名</Breadcrumb.Item>
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
            markkdown内容，下节课学习
          </div>
        </div>
      </Col>
      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4} >
        <Author/>
        <Advert/>
      </Col>
    </Row>
    <Footer/>
  </div>
)

export default Detailed