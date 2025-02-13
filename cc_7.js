// Task 1: Function Declaration

function calculateInvoice(subtotal, taxRate, discount) 
{
    let total = (subtotal + (subtotal * taxRate)- discount)
    {
 return (total.toFixed(2)); } //using .toFized to give each output two decimal places
}
// creating a function that calculates the final invoice amount


console.log("Customer Invoice Calculation:");
console.log(`Invoice Amount 1: $${calculateInvoice(100, 0.08, 5)}`);
console.log(`Invoice Amount 1: $${calculateInvoice(500, 0.1, 20)}`);
// Logging the test data given.
// Using a template literal to give us the output of each invoice amount

// Task 2: Function Expression

function calculateHourlyWage(salary, hoursPerWeek)
{ 
   let hourlyWage = ( salary / (hoursPerWeek * 52));
  {  return (hourlyWage.toFixed(2));  // using .toFixed to give each output two decimal places
}
}
// creating a calculation that finds the hourly wage per week based on salary and hours

console.log("Hourly Wages:")
console.log(`Hourly Wage 1: $${calculateHourlyWage(52000, 40)}`);
console.log(`Hourly Wage 2: $${calculateHourlyWage(75000, 35)}`);
// logging the test data give
// Using template literal to give us the output

// Task 3: Arrow Function

const calculateLoyaltyDiscount = (amount, years) => {
// creating an arrow function that applies a discount
    let discountRate; 

    if (years >= 5) { discountRate = .15; }  // applies a 15% discount if theres over 5 years
    else if (years >= 3) {discountRate =.10; } // applies a 10% discount is theres over 3 years
    else if (years < 3) {discountRate = .05; } // applies a 5% discount if theres less than 3 years

    return (amount - (amount * discountRate)).toFixed(2);
// gives us the calculated discount and .toFixed is used to display two decimal places
}

console.log("Loyalty Discounts:");
console.log(`Loyalty Discount 1: $${calculateLoyaltyDiscount(100, 6)}`); //test data 1
console.log(`Loyalty Discount 2: $${calculateLoyaltyDiscount(200, 2)}`); // test data 2
// logging the test data given
