fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById('author').textContent = `By: ${data.user.name}`;
    })
    .catch(err => {
        document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ3MjI0MDR8&ixlib=rb-4.0.3&q=80&w=1080')`;
        document.getElementById('author').textContent = `By: ${data.user.name}`;
    })

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById('crypto').textContent = `Price: ${bitcoin.usd}`
    })

fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong!")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById('crypto-top').innerHTML = ` 
        <img src=${data.image.small} />
        <span>${data.name}</span>
        `
    })


.catch(err => console.error(err))