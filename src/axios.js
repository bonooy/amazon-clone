

import axios from "axios";


const instance = axios.create({
    baseURL: "..." //  여기에 클라우드 function 에서 가져온 API URL을 적으면 됨.
});

export default instance;