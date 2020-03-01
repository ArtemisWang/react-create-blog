import React from 'react';
import '../static/style/components/header.css'
import {Row,Col,Menu,Icon} from 'antd'
import Head from 'next/head';
import Link from 'next/link'

const Header=()=>{
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={18} lg={15} xl={12}>
                    <span className="header-logo">Artemis</span>
                    <span className="header-txt">专注养猫，热爱猫咪20年。</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal">
                        <Menu.Item key="home">
                            <Icon type="home" />
                            <a href="/life">首页</a>
                        </Menu.Item>
                        <Menu.Item key="video">
                            <Icon type="youtube"/>
                            视频
                        </Menu.Item>
                        <Menu.Item key="life">
                            <Icon type="smile"/>
                            生活
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
    
}

export default Header