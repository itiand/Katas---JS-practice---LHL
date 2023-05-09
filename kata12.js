const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for(const recipe of recipes) {
    let hasAllIngredient = true;

    for(const ingredient of recipe.ingredients) {
      //if neither bakery A or bakery B has the ingredient, recipe is not possbile
      if(!bakeryA.includes(ingredient) && !bakeryB.includes(ingredient)) {
        hasAllIngredient = false;
        break; // don't bother checking the rest of the ingredients since the current ingredient is already not available.
      } // atleast one of the bakery has, so keep going with the loop
    }

    if(hasAllIngredient) return recipe.name; 
    //if not, continue with the loop
  }

  //if code reach this point, it means the all ingredient 
  return 'None of the recipes are possible.'
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));