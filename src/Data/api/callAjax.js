const callAjax = (url) => {
    return new Promise((resolve, reject) => {
        let get = new XMLHttpRequest()
        get.onload = (e) => {
            if (e.target.status === 200) {
                console.log(JSON.parse(e.target.response));
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
export { callAjax }