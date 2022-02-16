import React, { memo,useEffect,useRef } from 'react'
import { getBannersAction } from "../../store/actionCreators"
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Carousel } from 'antd';
import {
  WrappedRennder,
  BannerLeft,
  BannerRight
} from "./style"
const TopBanner = memo(() => {

  const bannerRef = useRef();
  
  const { banners } = useSelector((state) => ({
    // banners: state.recommend.banners
    // banners: state.get("recommend").get("banners")  最后外层的reducer做了包裹 其实还有另外一种写法
    banners: state.getIn(["recommend", "banners"])
    // ... 更多数据
  }), shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBannersAction());
  }, [dispatch])

  return (
    <WrappedRennder>
      <div className='content wrap-v2'>
        <BannerLeft >
          <Carousel effect="fade" ref={bannerRef} autoplay>
            {
              banners.map((item, index) => {
                return (
                  <div key={item.imageUrl} className='item'>
                    <img src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <a href="https://music.163.com/#/download" className='download' target="_blank"></a>
        </BannerRight>
        <div className='left-arrow'  onClick={e => (bannerRef.current.prev())}></div>
        <div className='right-arrow' onClick={e => (bannerRef.current.next())}></div>
      </div>
    </WrappedRennder>
  )
})

export default TopBanner