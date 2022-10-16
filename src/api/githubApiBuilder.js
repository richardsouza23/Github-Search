import axios from "axios";
import { pickAll, pipe, prop } from "ramda";


export const githubApiBuilder = (baseUrl, token, maxRepoPages) => {

    const axiosInstance = axios.create({
        baseURL: baseUrl
    });

    axiosInstance.defaults.headers.common['Authorization'] = token;

    return {
        getUserByUsername: (username) => {
            return axiosInstance.get(`/users/${username}`)
            .then(pipe(
                prop('data'),
                pickAll([
                    'avatar_url', 
                    'name', 
                    'login', 
                    'location', 
                    'company', 
                    'followers', 
                    'following', 
                    'starred_url',
                    'public_repos',
                    'repos_url',
                    'html_url'
                ])
            )).catch(({response, message}) => {
                return response && response.status === 404 ?
                    Promise.resolve(null) :
                    Promise.reject(message || response);
            })
        }
    };
}