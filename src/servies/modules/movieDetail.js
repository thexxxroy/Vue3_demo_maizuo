
import hyRequest from "../new_axios1"

export function getmovieDetailList(id) {
  return hyRequest.get({
    url:'getFilmInfo?filmId=' + id,
  })
}