
export const production = true; // set it to true when deploy to the server

const domain = production ? 'https://www.deaninfotech.com:4000/' : 'http://localhost:4000/'; // if you have domain pointed to digitalOcean Cloud server let use your domain.eg: tabvn.com
//export const websocketUrl = `ws://${domain}`
 const baseApi = `${domain}`;
 export default baseApi;
