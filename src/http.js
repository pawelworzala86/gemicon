const getData = {}

async function get(url,type="text"){
    if(getData[url]!=undefined){
        return getData[url]
    }
    const promise = await fetch('http://localhost:3000'+url)
    const text = await promise[type]()
    getData[url] = text
    return text
}

async function post(url,data,type="text"){
    const promise = await fetch('http://localhost:3000'+url,{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
    const text = await promise[type]()
    return text
}

export default {get,post}