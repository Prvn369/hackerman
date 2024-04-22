
let arr = [
    "Starting...",
    "Initializing...",
    "Initializing Hacking Process...",
    "Searching for Username...",
    "Username found Parveen369...",
    "Connecting to Facebook...",
    "Connected"
]

let sleep =async()=>{
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res()
        }, Math.floor(Math.random()*10000));
    })
}

let showHack =async (msg) => {
    await sleep()
    document.body.innerHTML = document.body.innerHTML + `<h3>${msg}</h3>`
    // console.log(msg)
}


let data = async() => {
    for (let i = 0; i < arr.length; i++) {
    await showHack(arr[i])
    }
}

data()