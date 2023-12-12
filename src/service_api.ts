import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "99f525024c8843b9aabf6de4b31714b6",
  },
});
