import React from 'react'
import { NavLink } from "react-router-dom"
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import { headerLinks } from "@/common/local-data"
import { WrappedDiv, HeaderLeft, HeaderRight } from "./style"
export default function Header() {
  const NavList = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }
  return (
    <WrappedDiv>
      <div className='wrap-v1 wraper-content'>
        <HeaderLeft>
          <a href='#/' className="sprite_01 header-logo"></a>
          <div className='music-list'>
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className='selector-item'>
                    {NavList(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input placeholder='音乐/视频/电台/用户' className='input'
            prefix={<SearchOutlined />} />
          <button className='author'>创作者中心</button>
          <div className='login'>登录</div>
        </HeaderRight>
      </div>
      <div className='red-line'></div>
    </WrappedDiv>
  )
}