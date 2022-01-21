import AxiosIncetance from "axios";

const axios = AxiosIncetance.create({
    baseURL: "http://127.0.0.1:7001",
    timeout: 2000
});

export default axios;