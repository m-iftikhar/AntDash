import React from 'react'
import {Badge, Image, Space, Typography} from "antd"
import {MailOutlined,BellFilled} from "@ant-design/icons";
const Header = () => {
  return (
    <div className="AppHeader">
      <Image 
      width={60}
      src="https://img.freepik.com/free-vector/business-user-shield_78370-7029.jpg" />
      <Typography.Title>AntDesign DashBoard</Typography.Title>
      <Space>
        <Badge count={10} dot>
        <MailOutlined style={{fontSize:24}} />
        </Badge>
        <Badge count={20} >
        <BellFilled style={{fontSize:24}} />
        </Badge>
          
      </Space>
    </div>
  )
}

export default Header;
