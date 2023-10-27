import hyRequest from "../new_axios1"

export function getCityList(id) {
  return hyRequest.get({
    url: "getCinemaList?cityId=" + id,
  })
}
