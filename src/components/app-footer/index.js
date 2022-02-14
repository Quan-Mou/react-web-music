import React, { memo, Fragment } from 'react'
import { WrappedFooter, CorporateInfo, IconList } from "./style"
import { footerLinks, footerImages } from "@/common/local-data"
const Footer = memo(() => {
  return (
    <WrappedFooter >
      <div className='wrap-v2 footer-content'>
        <CorporateInfo>
          <div className='link'>
            {
              footerLinks.map((item, index) => {
                return (<Fragment key={item.link}><a href={item.link}>{item.title}</a><i>|</i></Fragment>)
              })
            }
          </div>
          <div className='lav-info'>
            <p>
              <span>网易公司版权所有©1997-2022</span>
              <span>杭州乐读科技有限公司运营：</span>
              <a href="/">浙网文[2021] 1186-054号</a>
            </p>
            <p>
              <span>违法和不良信息举报电话：0571-89853516</span>
              <span> 举报邮箱：</span>
              <a href="/">ncm5990@163.com</a>
            </p>
            <p>
              <a href="/">粤B2-20090191-18  工业和信息化部备案管理系统网站</a>
              <a href="/"><span></span><span>浙公网安备 33010902002564号</span></a>
            </p>
          </div>
        </CorporateInfo>
        <IconList>
          {
            footerImages.map((item, index) => {
              return (
                <li key={item.link} className='item'>
                  <a href={item.link} className='link'></a>
                  <span className='title'></span>
                </li>
              )
            })
          }
        </IconList>
      </div>
    </WrappedFooter>
  )
})

export default Footer