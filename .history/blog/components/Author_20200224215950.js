import {Avatar, Divider} from 'antd'

const Author=()=>{
    return (
        <div className="author-div comm-box">
            <div><Avatar size="100" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582562716064&di=89780e7596369e59c3eb4a5e20e8791b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F06%2F20161106114511_h4HXY.jpeg" /></div>
            <div className="author-introduction">
                养猫专业户，有十余年养猫经验，两年云养猫经验。
                <Divider>社交账号</Divider>
            </div>
        </div>
    )
}