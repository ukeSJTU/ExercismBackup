/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  // Get the base price of the pizza
  function getBasePizzaPrice(pizzaName) {
    switch (pizzaName) {
      case "Margherita":
        return 7;
      case "Caprese":
        return 9;
      case "Formaggio":
        return 10;
      default:
        return 0;
    }
  }

  // Recursive function to calculate extras cost
  function calculateExtrasPrice(extrasList, index = 0) {
    // Base case: if we've processed all extras, return 0
    if (index >= extrasList.length) {
      return 0;
    }

    // Recursive case: add current extra price + remaining extras
    const currentExtraPrice = extrasList[index] === "ExtraSauce" ? 1 : 2;
    return currentExtraPrice + calculateExtrasPrice(extrasList, index + 1);
  }

  // Return base pizza price + recursive extras calculation
  return getBasePizzaPrice(pizza) + calculateExtrasPrice(extras);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let totalPrice = 0;
  
  for (const order of pizzaOrders) {
    totalPrice += pizzaPrice(order.pizza, ...order.extras);
  }
  
  return totalPrice;
}
