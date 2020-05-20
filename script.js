
document.querySelector('.set').addEventListener('submit', setCookie)
document.querySelector('.get').addEventListener('submit', getCookie)


function setCookie(e) {
    e.preventDefault()

    let output1 = document.querySelector('#output1')
    let output2 = document.querySelector('#output2')
    let name = document.querySelector('#CName').value
    let content = document.querySelector('#CContent').value
    document.querySelector('#CName').value = ''
    document.querySelector('#CContent').value = ''

    let toStore = `${name}=${content}`
    document.cookie = toStore

    output1.classList.add('bg-success', 'd-inline')

    output1.innerHTML = 'Cookie stored successfully'

}


function getCookie(e) {
    e.preventDefault()

    let parts = document.cookie.split('; ')

    let out = `
    <table class="table table-striped table-bordered table-dark">
    <thead>
        <tr>
        <th>#</th>
        <th>Name</th>
        <th>Content</th>
        </tr>
    </thead>
    <tbody>
    `

    for(let i = 0; i < parts.length; i++) {

        let partsOfParts = parts[i].split('=')
        out += `
        <tr>
        <th>${i + 1}</th>
        <td>${partsOfParts[0]}</td>
        <td>${partsOfParts[1]}</td>
        </tr>
        `

    }

    out += `
    </tbody>
    </table>
    `

    if (document.cookie.length > 0)
        output2.innerHTML = out
    else
        output2.innerHTML = 'There is no cookies' 

}