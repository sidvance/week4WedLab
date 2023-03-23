const resButton = document.querySelector('button')

const clicky = () => {
    console.log('You clicked that button, girl!!!')
}

resButton.addEventListener('click', clicky)


axios.get('https://swapi.dev/api/planets/?search=ald').then((req, res) => {
    let planetRes = req.params.residents
    for (let i = 0; i < planetRes.length; i++){

    }
})


// axios.get('url').then((response) => {