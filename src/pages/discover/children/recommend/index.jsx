import React, { memo } from 'react'

import {WrappedRecoomend,RecommendContent,RecommendLeft,RecommendRight} from "./style"
import TopBanner from './c-pag/top-banners'
import HotRecommend from './c-pag/hot-recommend'
const Recommend = memo((props) => {

  return (
    <WrappedRecoomend>
      <TopBanner />
      <RecommendContent className='wrap-v2'> 
        <RecommendLeft>
           <HotRecommend />
        </RecommendLeft>
      </RecommendContent>
    </WrappedRecoomend>
  )
})
export default Recommend;



// import React, { memo, useEffect } from 'react'
// import { getBannersAction } from "./store/actionCreators"
// import { connect } from "react-redux"
// const Recommend = memo((props) => {
//   const { getBanners } = props;
//   useEffect(() => {
//     console.log('页面刷新')
//     getBanners()
//   }, [getBanners])
//   return (

//     <div style={{ marginTop: "10px" }}>banners:{props.banners.length}</div>
//   )
// })
// const mapStateToProps = state => ({
//   banners: state.recommend.banners
// })
// const mapDispatchToProps = dispatch => ({
//   getBanners: function () {
//     dispatch(getBannersAction());
//   }
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
