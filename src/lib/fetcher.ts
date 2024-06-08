import axios from "axios";

const fetcher = (url: string) => {
  return axios.get(url).then((res) => {
    console.log(res);

    return res.data;
  });
};

export default fetcher;
