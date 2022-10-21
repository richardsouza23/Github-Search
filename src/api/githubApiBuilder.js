import axios from "axios";
import { concat, map, pickAll, pipe, prop, range, reduce } from "ramda";


export const githubApiBuilder = (baseUrl, token) => {

    const axiosInstance = axios.create({
        baseURL: baseUrl
    });

    axiosInstance.defaults.headers.common['Authorization'] = token;

    const reposPerPage = 100;

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
        },

        getUserRepos: (username, maxQty = 50) => {

            const pageQty = Math.ceil(maxQty / reposPerPage);

            const repoProps = [
                'id',
                'name',
                'description',
                'stargazers_count',
                'forks_count',
                'language',
                'html_url'
            ];

            const fetchPage = (page) => 
                axiosInstance.get(
                    `/users/${username}/repos?per_page=${reposPerPage}&page=${page}`
                ).then(pipe(
                    prop('data'),
                    map(pickAll(repoProps))
                )).catch((err) => {throw new Error(err);});

            const getReposInPage = (promise, page) => 
                promise.then((repoList) => fetchPage(page).then(concat(repoList)));

            return reduce(
                getReposInPage,
                Promise.resolve([]),
                range(1, pageQty + 1)
            );
        }
    };
}