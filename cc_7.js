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


