async function findAPI() {
    let response = await fetch('https://api.publicapis.org/entries')
    let data = await response.json()
    return data
}



function getAPIHtml(API) {
    return `
    <div class='api'>
    <h2 class='api-name'><a href='${API.Link}'>${API.API}</a></h2>
    <p class='api-auth'>Auth: ${getAuth(API.Auth)}</p>
    <p class='api-cors'>Cors: ${API.Cors}</p>
    <p class='api-description'>Description: ${API.Description}</p>
    <p class='api-https'>HTTPS: ${API.HTTPS}</p>
    <p class='api-category'>Category: ${API.Category}</p>
    </div>
`  
}

function getAuth(auth){
    if (!(auth)) {
        return 'not required'
    } else {
        return auth
    }
}


function displayAllAPIs(allAPIs) {
    // let sampleAPI = allAPIs.entries[1]
    // console.log(sampleAPI)
    // document.body.innerHTML = getAPIHtml(sampleAPI)
    // allAPIs.entries.map(getAPIHtml).join('')
    document.body.innerHTML = `
        <h1 class='api-title'>Public APIs</h1>
        <div class='apis'>
            ${allAPIs.entries.map(getAPIHtml).join('')}
        <div>`
}

findAPI().then(displayAllAPIs)


