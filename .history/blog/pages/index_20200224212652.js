import Head from 'next/head'
import React from 'react';
import {Button, Row, Col} from 'antd'
import Header from '../components/Header'


const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Header/>
    <Row className="comm-main" type="flex" justify="center"> 
      <Col className="comm-left" >
      </Col>
    </Row>
  </div>
)

export default Home
