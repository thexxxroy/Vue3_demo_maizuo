//配置所有电影列表的网络请求

import hyRequest from "../new_axios1"

export function getMovieList(url) {
  return hyRequest.get({
    url
  })
}

//正在热映 v1/getNowPlayingFilmList
//即将上映 v1/getComingSoonFilmList
