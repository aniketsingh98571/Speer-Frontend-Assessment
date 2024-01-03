import axios from 'axios';
const axiosClient = axios.create({
	baseURL:'https://cerulean-marlin-wig.cyclic.app/'
});

  export function getRequest(URL) {
    return axiosClient.get(`/${URL}`).then(response => response);
  }
  
  export function postRequest(URL, payload) {
    return axiosClient.post(`/${URL}`, payload).then(response => response);
  }
  
  export function patchRequest(URL, payload) {
    return axiosClient.patch(`/${URL}`, payload).then(response => response);
  }
  
  export function deleteRequest(URL,payload) {
    return axiosClient.delete(`/${URL}`,payload).then(response => response);
  }
  export function putRequest(URL,payload) {
    return axiosClient.put(`/${URL}`,payload).then(response => response);
  }
  export const config = ()=> {
		return {
      headers: {
			"Authorization": "Bearer "+process.env.REACT_APP_BEARER_TOKEN,
      }
  }
};

export const token_config = (token) => {
	return {
		headers: {
			"Authorization": "Bearer " + token,
     }
	}
}