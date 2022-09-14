import schema from './schema.json'

function stringToObjectKey(stringRoute, data) {
    if(typeof stringRoute !== 'string'){stringRoute = stringRoute.path}

    let namespaces = stringRoute.split(".");

    for(let i = 0; i < namespaces.length; i++) {
        data = data[namespaces[i]];
    }
    return data
}

function schemaURL (uid){
    let url
    let path = schema.routes.find(x => x.uid === uid).path
    url = schema.server.url+schema.server.api_route + path
    return url
}

function formatValues (item, schema, uid){
    let responseSchema = schema.routes.find(x => x.uid ===uid).response
    let formatted = Object.create({})
    Object.keys(responseSchema).forEach(function(key) {
        let value = stringToObjectKey(responseSchema[key], item)
        if (Array.isArray(value) && value.length !== 0){
            let newArray = []
            value.forEach(function(newItem) {
                let newObj = Object.create({})
                Object.keys(responseSchema[key].response).forEach(function(newKey) {
                    let res = stringToObjectKey(responseSchema[key].response[newKey], newItem)
                    if (typeof res === 'string' && res.startsWith('/uploads')){
                        newObj[newKey] = schema.server.url+res
                    }else {
                        newObj[newKey] = res
                    }
                })
                newArray.push(newObj)
            })
            formatted[key] = newArray
        }else {
            formatted[key] = stringToObjectKey(responseSchema[key], item)
        }
    })
    return formatted
}


async function schemaFormatter (response){
    let formatted = []
    let uid = 'getProducts'

    response.data.map((item)=>{
        formatted.push(formatValues(item,schema, uid))
    })
    return formatted
}

export {schemaFormatter, schemaURL}