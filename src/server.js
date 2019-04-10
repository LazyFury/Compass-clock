import axios from 'axios'
let get
let post
// http://www.nongli.cn/rili/api
// axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.crossDomain=true
axios.defaults.withCredentials=true

const http={
    get,
    post
}
http.get=(url)=>{
    return new Promise(resolve=>{
        axios.get(url,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then((res)=>resolve(res))
    })
}

export default http;