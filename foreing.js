const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
}

const displayUser = user => {
    const names = document.getElementById('name')
    names.innerText = user.results[0].name.first + ' ' + user.results[0].name.last

    const genders = document.getElementById('gender')
    genders.innerText = user.results[0].gender
    console.log(user.results[0].name.title)
}

loadUser();