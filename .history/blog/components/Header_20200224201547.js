import React from 'react';
import '../static/style/components/header.css'
import {Row,Col,Menu,Icon} from 'antd'

const Header=()=>{
    <div className="header">
        <Row type="flex" justify="center">
            <Col>
                <span className="header-logo">Artemis</span>
                <span className="header-txt">专注养猫，热爱猫咪20年。</span>
            </Col>
        </Row>
    </div>
}