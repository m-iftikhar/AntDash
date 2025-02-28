import React from 'react'
import {Typography} from "antd";
const Footer = () => {
  return (
    <div className="AppFooter">
    <Typography.Link href="tel:+923104628296">+923104628296</Typography.Link>
    <Typography.Link href="https://www.google.com" target={"_blank"}>
      Privacy Policy
    </Typography.Link>
    <Typography.Link href="https://www.google.com" target={"_blank"}>
      Terms of Use
    </Typography.Link>
  </div>
  )
}

export default Footer;
