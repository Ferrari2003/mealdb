const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // console.log(countries)
    const allCountries = document.getElementById('all-countries');
    countries.forEach(country => {

        const allCountry = document.createElement('div');
        allCountry.classList.add('country')
        allCountry.innerHTML = `
<h4>Name: ${country.name.common}</h4>
<h5>Capital: ${country.capital ? country.capital[0] : 'no capital'}</h5>
<button onclick="loadCountriesDetail('${country.cca2}')">Details<button>
`
        allCountries.appendChild(allCountry)
    });
}

const loadCountriesDetail = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    //    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showCountryDetail(data[0]))
}


const showCountryDetail = country => {
    const detailContainer = document.getElementById('country-details')
     detailContainer.innerHTML =`
     <
     `
}


loadCountries();