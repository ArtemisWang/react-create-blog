import Head from 'next/head'
import React, {useState} from 'react';
import {List, Row, Col, Icon} from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/index.css'


const Home = () => {

  const [mylist, setMylist]=useState([
    {title:'伯曼猫',context:'伯曼猫又称缅甸圣猫，传说最早由古代缅甸寺庙里的僧侣饲养，视为护殿神猫，18世纪传入欧洲逐步进化定型。伯曼猫体型较长，身上被毛主要是浅金黄色，脸，耳，腿尾等部分毛色较深，呈咖啡色或深灰色，四爪为白色。颜色分为海豹色，蓝色，丁香色，巧克力色，红色，奶油色和玳瑁色，所有的颜色都可以附加山猫纹。据传，伯曼猫最早被缅甸圣僧所饲养。不过事实上，伯曼猫最早在法国被确定为固定品种，紧接着在英国也注册了这一品种。伯曼猫属于中型猫，有且仅有重点色块，肌肉结实，四肢中等长度，脚爪大而圆。头部宽圆适中，脸颊丰满，鼻子中等大小。眼睛差不多为圆形，眼角稍吊，为蓝宝石色。耳朵为暗色，中等大小，尖成圆弧形。尾巴中等长度。被毛长而细，且不易粘连。躯干毛色为浅色。胸部到腹部的毛呈波浪状。颇有特色的是伯曼猫的四肢末端为白色，被称为四肢踏雪，使它更加高贵。前肢的白色被称为手套，后肢的白色则被称为蕾丝，蕾丝的部位延伸得很长。伯曼猫温文尔雅，非常友善，叫声悦耳，喜欢与人作伴，对其他猫也十分友好。'},
    {title:'缅甸圣猫',context:'伯曼猫又称缅甸圣猫，传说最早由古代缅甸寺庙里的僧侣饲养，视为护殿神猫，18世纪传入欧洲逐步进化定型。伯曼猫体型较长，身上被毛主要是浅金黄色，脸，耳，腿尾等部分毛色较深，呈咖啡色或深灰色，四爪为白色。颜色分为海豹色，蓝色，丁香色，巧克力色，红色，奶油色和玳瑁色，所有的颜色都可以附加山猫纹。据传，伯曼猫最早被缅甸圣僧所饲养。不过事实上，伯曼猫最早在法国被确定为固定品种，紧接着在英国也注册了这一品种。伯曼猫属于中型猫，有且仅有重点色块，肌肉结实，四肢中等长度，脚爪大而圆。头部宽圆适中，脸颊丰满，鼻子中等大小。眼睛差不多为圆形，眼角稍吊，为蓝宝石色。耳朵为暗色，中等大小，尖成圆弧形。尾巴中等长度。被毛长而细，且不易粘连。躯干毛色为浅色。胸部到腹部的毛呈波浪状。颇有特色的是伯曼猫的四肢末端为白色，被称为四肢踏雪，使它更加高贵。前肢的白色被称为手套，后肢的白色则被称为蕾丝，蕾丝的部位延伸得很长。伯曼猫温文尔雅，非常友善，叫声悦耳，喜欢与人作伴，对其他猫也十分友好。'},
    {title:'护庙神猫',context:'伯曼猫又称缅甸圣猫，传说最早由古代缅甸寺庙里的僧侣饲养，视为护殿神猫，18世纪传入欧洲逐步进化定型。伯曼猫体型较长，身上被毛主要是浅金黄色，脸，耳，腿尾等部分毛色较深，呈咖啡色或深灰色，四爪为白色。颜色分为海豹色，蓝色，丁香色，巧克力色，红色，奶油色和玳瑁色，所有的颜色都可以附加山猫纹。据传，伯曼猫最早被缅甸圣僧所饲养。不过事实上，伯曼猫最早在法国被确定为固定品种，紧接着在英国也注册了这一品种。伯曼猫属于中型猫，有且仅有重点色块，肌肉结实，四肢中等长度，脚爪大而圆。头部宽圆适中，脸颊丰满，鼻子中等大小。眼睛差不多为圆形，眼角稍吊，为蓝宝石色。耳朵为暗色，中等大小，尖成圆弧形。尾巴中等长度。被毛长而细，且不易粘连。躯干毛色为浅色。胸部到腹部的毛呈波浪状。颇有特色的是伯曼猫的四肢末端为白色，被称为四肢踏雪，使它更加高贵。前肢的白色被称为手套，后肢的白色则被称为蕾丝，蕾丝的部位延伸得很长。伯曼猫温文尔雅，非常友善，叫声悦耳，喜欢与人作伴，对其他猫也十分友好。'},
    {title:'Lucky',context:'伯曼猫又称缅甸圣猫，传说最早由古代缅甸寺庙里的僧侣饲养，视为护殿神猫，18世纪传入欧洲逐步进化定型。伯曼猫体型较长，身上被毛主要是浅金黄色，脸，耳，腿尾等部分毛色较深，呈咖啡色或深灰色，四爪为白色。颜色分为海豹色，蓝色，丁香色，巧克力色，红色，奶油色和玳瑁色，所有的颜色都可以附加山猫纹。据传，伯曼猫最早被缅甸圣僧所饲养。不过事实上，伯曼猫最早在法国被确定为固定品种，紧接着在英国也注册了这一品种。伯曼猫属于中型猫，有且仅有重点色块，肌肉结实，四肢中等长度，脚爪大而圆。头部宽圆适中，脸颊丰满，鼻子中等大小。眼睛差不多为圆形，眼角稍吊，为蓝宝石色。耳朵为暗色，中等大小，尖成圆弧形。尾巴中等长度。被毛长而细，且不易粘连。躯干毛色为浅色。胸部到腹部的毛呈波浪状。颇有特色的是伯曼猫的四肢末端为白色，被称为四肢踏雪，使它更加高贵。前肢的白色被称为手套，后肢的白色则被称为蕾丝，蕾丝的部位延伸得很长。伯曼猫温文尔雅，非常友善，叫声悦耳，喜欢与人作伴，对其他猫也十分友好。'},
  ])
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center"> 
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14} >
          <List 
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item=>(
            <List.Item>
              <div className="list-title"><a href='/detailed'>{item.title}</a>{item.title}</div>
              <div className="list-icon">
                <span><Icon type="calendar"/>2020-02-23  </span>
                <span><Icon type="folder"/>视频教程  </span>
                <span><Icon type="fire"/>2333人  </span>
              </div>
              <div className="list-context">{item.context}</div>
            </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4} >
          <Author/>
          <Advert/>
        </Col>
      </Row>
      <Footer/>
    </div>
  )
}



export default Home