import Axios from "axios";
import { settings } from "../config/settings";


export const resConnector = Axios.create({
    baseURL: settings.domain
})