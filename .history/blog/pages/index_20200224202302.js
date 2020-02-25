import Head from 'next/head'
import React from 'react';
import {Button} from 'antd'
import Header from '../components/Header'


const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <div><Button>按钮</Button></div>
  </div>
)

export default Home
