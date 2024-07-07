import axios from "axios";

const fetcher = (url: string) => {
  return axios
    .get(url, {
      headers: {
        "Cache-Control": "no-cache",
      },
    })
    .then((res) => {
      return res.data;
    });
};

export default fetcher;
