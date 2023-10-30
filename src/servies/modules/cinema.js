import hyRequest from "../new_axios1"

export function getCinemaList(id,pageSize) {
  return hyRequest.get({
    url: "getCinemaList" ,
    params:{
      cityId: id,
      pageSize: pageSize
    }
  })
}

export function getCinemaDetail(cinemaId) {
  return hyRequest.get({
    url: "getCinemaInfo" ,
    params:{
      cinemaId: cinemaId,
    }
  })
}

export function getCinemaFilmsArrangement(cinemaId) {
  return hyRequest.get({
    url: "getCinemaFilmsArrangement" ,
    params:{
      cinemaId: cinemaId,
    }
  })
}

// getCinemaInfo35?cinemaId=35
// getCinemaInfo?cinemaId=1701