import hyRequest from "../new_axios1"

export function getCityList(id,pageSize) {
  return hyRequest.get({
    url: "getCinemaList" ,
    params:{
      cityId: id,
      pageSize: pageSize
    }
  })
}
