
const headers = new Headers();
headers.append("Authorization", process.env.REACT_APP_GITHUB_API_TOKEN);

export const getResponse = async (url) => {

    let status, headers, body;
    try{
        let response = await fetch(url, {headers});
        status = response.status;
        headers = response.headers;
        body = await response.json();

    } catch (err) {
        console.log(err);
        status = status ? status : 500;
        body = body ? body : {} ;
        headers = headers ? headers : new Headers();
    
    } finally {
        return { status, headers, body };
    }
}



export const STATUS_OK = 200;