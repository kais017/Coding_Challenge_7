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

//  Task 4: Parameters and Arguments

function calculateShippingCost(weight, location, expedited = false) {
// creating a function that calculates shipping costs based on location, weight, and additional fees
 let shippingFee = 0;

    if (location === "USA") { shippingFee = (5 + (0.5 * weight)); //gives us the shipping cost for the USA location
    }
    else if (location === "Canada") {(shippingFee = 10 + (0.7 * weight)); // gives us the shipping cost for the Canada location
    }
    if (expedited === true) {shippingFee += 10; // if the shipping is expedited, this applies an additional $10 fee
    }
  

    return `Shipping Cost: $${shippingFee.toFixed(2)}`;
    // gives us the shipping costs based on the function
    }
    
    console.log("Shipping Cost Calculation:")
    console.log(`Shipping Cost 1: $${calculateShippingCost(10, "USA", true)}`);
    console.log(`Shipping Cost 2: $${calculateShippingCost(5, "Canada", false)}`);
// logging the test data given


// Task 5: Returning Values
function calculateLoanInterest(principal, rate, years){
// creating a function that calculates loan interest based on the principal, rate, years
let interest = (principal * rate * years);
return (interest.toFixed(2));
// .toFixed gives us our output with two decimal places
}

console.log("Interest Calculation:")
console.log(`Loan Interest 1: $${calculateLoanInterest(1000, 0.05, 3)}`);
console.log(`Loan Interests 2: $${calculateLoanInterest(5000, 0.07, 5)}`);
// logging the test data

// Task 6: Higher-Order Functions
let transaction = [500, 1200, 3000, 800, 2200];
function filterHighValueTransactions(transaction) {
return transaction.filter(transaction => transaction > 1000);
} 
//creating a function that will return any number in the array that is over 1000
console.log("Transactions:", filterHighValueTransactions(transaction));
// logging the test data

// Task 7: Closures

function createBudgetTracker()
{ let totalBudget = 0;
    return function(expense) {
        totalBudget += expense;
        return totalBudget.toFixed(2);
 // creating a function that lists expenses for a budget tracker
    };
}
let budgetTracker = createBudgetTracker();
console.log(`Total Budget: -$${budgetTracker(300)}`);
console.log(`Total Budget: -$${budgetTracker(500)}`);
// logging the given test data and making our outputs negative because they are expenses

