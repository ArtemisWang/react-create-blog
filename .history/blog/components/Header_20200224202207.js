import React from 'react';
import '../static/style/components/header.css'
import {Row,Col,Menu,Icon} from 'antd'
import Head from 'next/head';

const Header=()=>{
    <div className="header">
        <Row type="flex" justify="center">
            <Col>
                <span className="header-logo">Artemis</span>
                <span className="header-txt">专注养猫，热爱猫咪20年。</span>
            </Col>
            <Col>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <Icon type="home" />
                        首页
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
}

export default Header