// const loadMeals = (searchText) => {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayMeals(data.meals));
// }

// const displayMeals = meals => {
//     const mealsContainer = document.getElementById('meals-container');
//     mealsContainer.innerHTML = '';
//     meals.forEach(meal => {
//         console.log(meal)
//         const mealDiv = document.createElement('div');
//         mealDiv.classList.add('col')
//         mealDiv.innerHTML = `
//         <div class="card h-100">
//         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${meal.strMeal}</h5>
//           <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         </div>
//       </div>
//     `
//         mealsContainer.appendChild(mealDiv)
//     });
// }


// const searchMeals = () => {
//     const searchText = document.getElementById('search-field');
//     const previousText = searchText.value;
//     console.log(previousText)
//     loadMeals(previousText)


//     searchText.value = '';
// }

// loadMeals('rice');





// const loadMeals = (searchText) => {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayMeals(data.meals))
// }

// const displayMeals = meals => {
//     const mealContainer = document.getElementById('meals-container');
//     mealContainer.innerHTML = '';
//     meals.forEach(meal => {
//         console.log(meal)
//         const mealDiv = document.createElement('div');
//         mealDiv.classList.add('col');
//         mealDiv.innerHTML = `
// <div class="card h-100">
// <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
// <div class="card-body">
//   <h5 class="card-title">${meal.strMeal}</h5>
//   <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
// </div>
// </div>
// `
//         mealContainer.appendChild(mealDiv)
//     });

// }

// const searchMeals = () => {
//     const searchText = document.getElementById('search-field');
//     const previousText = searchText.value;
//     console.log(previousText)
//     loadMeals(previousText)
//     searchText.value = '';
// }


// loadMeals('rice');



// const loadMeals = (searchText) => {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayMeals(data.meals))
// }

// const displayMeals = meals => {
//     const mealContainer = document.getElementById('meals-container');
//     mealContainer.innerHTML = '';
//     meals.forEach(meal => {
//         console.log(meal)
//         const mealsDiv = document.createElement('div');
//         mealsDiv.classList.add('col');
//         mealsDiv.innerHTML = `
//         <div class="card h-100">
//                     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                       <h5 class="card-title">${meal.strMeal}</h5>
//                       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                     </div>
//                   </div>
//         `
//         mealContainer.appendChild(mealsDiv)
//     });
// }


// const searchMeals = () => {
//     // console.log('click now')
//     const searchText = document.getElementById('search-field');
//     const previousText = searchText.value;
//     console.log(previousText)
//     loadMeals(previousText)
//     searchText.value = '';
// }

// loadMeals('chicken');


const loadMeals = (searchText) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => {
            displayMeals(data.meals)
        })
}


const displayMeals = (meals) => {
    const mealContainer = document.getElementById('meal-container');
   mealContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
        </div>
    </div>
      `
        mealContainer.appendChild(mealDiv);
    });
}


const mealSearch = () => {
    const searchText = document.getElementById('search-field');
    const previousText = searchText.value;
    // console.log(previousText);
    loadMeals(previousText)
   
    searchText.value = '';
}


loadMeals('fish');