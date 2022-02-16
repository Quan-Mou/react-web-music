import * as actionType from "./constant"

import { getTopBanner } from "@/service/recommend"

export const changeTopBanners = (res) => ({
  type: actionType.CHANGE_TOP_BANNER,
  banner: res
})

export const getBannersAction = () => {
  return dispatch => {
    getTopBanner().then(res => {
      dispatch(changeTopBanners(res.data.banners));
    })
  }
}
