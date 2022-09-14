import axios from 'axios';
import { serverConfig } from '../../components/serverConfig/serverConfig';

 let appServerURL = serverConfig.appServerUrl;

 const rslApi = config => {
    config.baseURL = appServerURL;
    return axios(config);
 }

 export default rslApi;