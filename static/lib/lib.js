//callback 

const Ajax({
    method = 'get',
    url = '/',
    data,
    async = true
}, callback) => {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let res = JSON.parse(xhr.responseText)
            callback(res)
        }
    }
    xhr.open(method, url, async)
    if (method === 'get') {
        xhr.send()
    }
    if (method === 'post') {
        let type = typeof data
        let header
        if (type === 'string') {
            header = 'application/x-www-form-urlencoded'
        }
        else {
            header = 'application/json'
            data = JSON.stringify(data)
        }
        xhr.setRequestHeader('Content-type', header)
        xhr.send(data)
    }
}

Ajax.get = (url, callback) => {
    return Ajax({
        url
    }, callback)
}


Ajax.post = function (url, data, callback) {
    return Ajax({
        method: 'post',
        url,
        data,
    }, callback)
}

Ajax.get('http://localhost:3000/getData', (res) => {
    console.log(res)
})








//Promise

const Ajax = ({
    method = 'get',
    url = '/',
    data,
    async = true
}) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let res = JSON.parse(xhr.responseText)
                resolve(res)
            }
        }
        xhr.open(method, url, async)
        if (method === 'get') {
            xhr.send()
        }
        if (method === 'post') {
            let type = typeof data
            let header
            if (type === 'string') {
                header = 'application/x-www-form-urlencoded'
            }
            else {
                header = 'application/json'
                data = JSON.stringify(data)
            }
            xhr.setRequestHeader('Content-type', header)
            xhr.send(data)
        }
    })
}

Ajax.get = (url) => {
    return Ajax({
        url
    })
}


Ajax.post = (url, data) => {
    return Ajax({
        method: 'post',
        url,
        data
    })
}


Ajax.get('http://localhost:3000/getData')
    .then((data) => {
        console.log(data)
    })
//Generator

const Ajax = ({
    method = 'get',
    url = '/',
    data,
    async = true
}) => {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let res = JSON.parse(xhr.responseText)
            obj.next(res)
        }
    }
    xhr.open(method, url, async)
    if (method === 'get') {
        xhr.send()
    }
    if (method === 'post') {
        let type = typeof data
        let header
        if (type === 'string') {
            header = 'application/x-www-form-urlencoded'
        }
        else {
            header = 'application/json'
            data = JSON.stringify(data)
        }
        xhr.setRequestHeader('Content-type', header)
        xhr.send(data)
    }
}

Ajax.get = (url) => {
    return Ajax({
        url
    })
}

Ajax.post = (url, data) => {
    return Ajax({
        method: 'post',
        url,
        data
    })
}

function* use() {
    let data = yield Ajax.get('http://localhost:3000/getData')
    console.log(data)
}

let obj = use()
obj.next()
//Must manual call the next function without co module


//async

const Ajax = ({
    method = 'get',
    url = '/',
    data,
    async = true
}) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let res = JSON.parse(xhr.responseText)
                resolve(res)
            }
        }
        xhr.open(method, url, async)
        if (method === 'get') {
            xhr.send()
        }
        if (method === 'post') {
            let type = typeof data
            let header
            if (type === 'string') {
                header = 'application/x-www-form-urlencoded'
            }
            else {
                header = 'application/json'
                data = JSON.stringify(data)
            }
            xhr.setRequestHeader('Content-type', header)
            xhr.send(data)
        }
    })
    
}

Ajax.get = (url) => {
    return Ajax({url})
}

Ajax.post = (url, data) => {
    return Ajax({
        method: 'post',
        url,
        data,
    })
}
async function use () {
    let data = await Ajax.get('http://localhost:3000/getData')
    console.log(data)
}


//test

const A = () => {
    return new Promise((resolve, reject) => {
        resolve('123')
    })
}

async function B() {
    let data = await A()
    console.log(data)
}