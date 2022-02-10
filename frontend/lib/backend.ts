import axios from "axios";

import { apiUrl } from "../utils/url";

export default axios.create({
    withCredentials: true,
    baseURL: apiUrl,
});
