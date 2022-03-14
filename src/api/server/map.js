import axiosInstance from "@/api/axios.js"

const fetchMapList = () => {
  return axiosInstance.request({
    method: "GET",
    url: `api/maps/`
  });
}

const fetchMapDetail = (mapId) => {
  return axiosInstance.request({
    method: "GET",
    url: `api/maps/${mapId}`
  });
}

const fetchMapStatistics = (mapId) => {
  return axiosInstance.request({
    method: "GET",
    url: `api/matches-summary/`,
    params: {
      "map": mapId
    }
  });
}

export {
  fetchMapDetail,
  fetchMapList,
  fetchMapStatistics
}