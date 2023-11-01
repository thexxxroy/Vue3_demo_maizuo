//配置城市的网络请求

import hyRequest from "../new_axios1"

export function getCityList() {
  return hyRequest.get({
    url:'getCitiesInfo',
    
  })
}   