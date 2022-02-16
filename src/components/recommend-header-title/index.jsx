import React, { memo,Fragment } from 'react'
import {
  WrappedHeader,
  Left,
  Right
} from "./style"
const RecommendHeaderTitle = memo((props) => {
  const { title=[] } = props;
  const isShowTitle = title.length ? title : null;
  return (
    <WrappedHeader >
      <div className='content'>
        <Left>
          <h3>热门推荐</h3>
          <div className="left-nav">
            {
              isShowTitle ? (
                title.map((item, index) => {
                  return (<Fragment key={item}><a href="">{item}</a><i>|</i></Fragment>
                  )}
                )) : null
            }
          </div>
        </Left>
        <Right>
          <a herf="">更多</a>
        </Right>
      </div>
    </WrappedHeader>
  )
})

export default RecommendHeaderTitle