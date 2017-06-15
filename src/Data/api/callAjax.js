const callAjax = (url) => {
    return new Promise((resolve, reject) => {
        let get = new XMLHttpRequest()
        get.onload = (e) => {
            if (e.target.status === 200) {
                resolve(JSON.parse(e.target.response));
            } else {
                resolve(JSON.parse(e.target.response))
            }
        }
        get.onerror = (e) => {
            reject(JSON.parse(e.target.response))
        }
        get.open("GET", url);
        get.send(null);
    })
}
const postAjax = (url, data) => {
    console.log('data: ', data);
    return new Promise((resolve, reject) => {
        let get = new XMLHttpRequest()
        get.onload = (e) => {
            console.log('e: ', e);
            if (e.target.status === 200) {
                resolve(e.target.response);
            } else {
                // console.log(e);
                resolve(e.target.response);
            }
        }
        get.onerror = (e) => {
            reject(e.target.response);
        }
        get.open("POST", url, true);
        get.send(data);
    })
}
export { callAjax, postAjax }