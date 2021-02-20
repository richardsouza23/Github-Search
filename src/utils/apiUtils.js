
const headers = new Headers();
headers.append("Authorization", process.env.REACT_APP_GITHUB_API_TOKEN);

export const getJson = async (url) => {

    return fetch(url, {headers})
        .then(content => content.json());
}