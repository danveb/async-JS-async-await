// Number Facts (app.js) -> Trivia 

// #1 
// async function favNumber(num) {
//     let baseURL = 'http://numberapi.com' 
//     const response = await axios.get(`${baseURL}/${num}/trivia?json`) 
//     console.log(response.data.text) 
// }
// favNumber(17) 

// #2 (parallel requests)
const dataContainer = document.getElementById('data-container') 
let baseURL = 'http://numberapi.com' 
async function favNumbers() {
    let p1Promise = await axios.get(`${baseURL}/17/trivia?json`);
    let p2Promise = await axios.get(`${baseURL}/59/trivia?json`);
    let p3Promise = await axios.get(`${baseURL}/27/trivia?json`);
    
    // await 
    let p1 = await p1Promise
    let p2 = await p2Promise
    let p3 = await p3Promise

    // console.log(p1.data.text)
    // console.log(p2.data.text)
    // console.log(p3.data.text)

    dataContainer.insertAdjacentHTML('beforeend', `<p>${p1.data['text']}</p>`)
    dataContainer.insertAdjacentHTML('beforeend', `<p>${p2.data['text']}</p>`)
    dataContainer.insertAdjacentHTML('beforeend', `<p>${p3.data['text']}</p>`)
}
favNumbers() 

// #3 (parallel requests)
async function get4Facts() {
    let p1Promise = await axios.get(`${baseURL}/87/trivia?json`);
    let p2Promise = await axios.get(`${baseURL}/87/trivia?json`);
    let p3Promise = await axios.get(`${baseURL}/87/trivia?json`);
    let p4Promise = await axios.get(`${baseURL}/87/trivia?json`);
    
    // await 
    let p1 = await p1Promise
    let p2 = await p2Promise
    let p3 = await p3Promise
    let p4 = await p4Promise

    // console.log(p1.data.text)
    // console.log(p2.data.text)
    // console.log(p3.data.text)

    dataContainer.insertAdjacentHTML('beforeend', `<p>${p1.data['text']}</p>`)
    dataContainer.insertAdjacentHTML('beforeend', `<p>${p2.data['text']}</p>`)
    dataContainer.insertAdjacentHTML('beforeend', `<p>${p3.data['text']}</p>`)
    dataContainer.insertAdjacentHTML('beforeend', `<p>${p4.data['text']}</p>`)
}
get4Facts() 
