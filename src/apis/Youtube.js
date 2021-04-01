import axios from "axios";

const KEY = "AIzaSyB0_y1qbT244Aa-gq9fliK_dRAaaqVnGRY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
