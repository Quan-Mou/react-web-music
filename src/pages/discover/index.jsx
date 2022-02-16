import React, { memo } from 'react'
import { dicoverMenu } from "@/common/local-data"
import { WrappedDiscover, TopMenu } from "./style"
import { NavLink } from "react-router-dom"
import { renderRoutes } from "react-router-config"
const Discover = memo((props) => {
  console.log();
  return (
    <WrappedDiscover>
      <div className='nav-list'>
        <TopMenu className='wrap-v2'>
          {
            dicoverMenu.map((item, index) => {
              return <NavLink to={item.link} key={item.link}>{item.title}</NavLink>
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(props.route.routes)}
    </WrappedDiscover>

  )
})

export default Discover