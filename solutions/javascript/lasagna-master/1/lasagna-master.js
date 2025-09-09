/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return 'Lasagna is done.';
  } else if (remainingTime === undefined) {
    return 'You forgot to set the timer.'
  } else {
    return 'Not done, please wait.';
  }
}

export function preparationTime(layers, avgPrepTime = 2) {
  return layers.length * avgPrepTime;
}

export function quantities(lasagnaLayers) {
  let noodleCount = 0;
  let sauceCount = 0;
  
  for (let layer of lasagnaLayers) {
    if (layer === 'noodles') {
      noodleCount++;
    } else if (layer === 'sauce') {
      sauceCount++;
    }
  }

  const noodlesNeeded = noodleCount * 50;
  const sauceNeeded = sauceCount * 0.2;
  
  return {
    noodles: noodlesNeeded,
    sauce: sauceNeeded
  };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {};
  
  for (let ingredient in recipe) {
    scaledRecipe[ingredient] = (recipe[ingredient] / 2) * portions;
  }
  
  return scaledRecipe;
}