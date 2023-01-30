const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const showRecipe = async function() {
    try {
        const res = await fetch("https://forkify-api.herokuapp.com/api/get?rId=47746");
        if (!res.ok) throw new Error(`Problem with recipe ${res.status}`);
        const data = await res.json();
        console.log(data.recipe.publisher);
        console.log(data.recipe.ingredients);
        console.log(data.recipe.source_url);
    } catch (err) {
        alert(err);
    }
};
showRecipe();

//# sourceMappingURL=index.62406edb.js.map
