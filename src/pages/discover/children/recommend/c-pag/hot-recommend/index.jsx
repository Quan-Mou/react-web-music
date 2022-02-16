import React, { memo } from 'react'
import RecommendHeaderTitle from "@/components/recommend-header-title"
const HotRecommend = memo(() => {
  return (
    <div>
      <RecommendHeaderTitle title={['华语', '流行', '摇滚', '民谣', '电子']} />
      
    </div>
  )
})

export default HotRecommend