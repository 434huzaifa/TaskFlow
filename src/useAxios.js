import axios from 'axios'
const caxios =axios.create({
	// baseURL:'https://task-flow-server-umber.vercel.app',
	baseURL:'http://localhost:5353',
	withCredentials:true,
})
const useAxios = () => {
	return caxios
};
	
export default useAxios;