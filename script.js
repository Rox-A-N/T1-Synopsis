$(document).ready( readyNow );      // this is to get the script ready to use jQuery

const budget = 25000;
let purchases = [];        // new array to push newPurchase into

function addPurchase(){
    console.log( 'in addPurchase' );
    // get user input create a new object
    let newPurchase = {
        name: $( '#purchaseNameIn').val(),
        price: $( '#purchasePriceIn' ).val()
    }
    // push the new purchase into the array
    purchases.push( newPurchase );
    // empty inputs
    $( '#purchaseNameIn').val( '' );  // used as a setter to set empty string
    $( '#purchasePriceIn' ).val( '' );
    // calculate remainingBudget
    calculateRemainingBudget();
} // end addPurchase

function calculateRemainingBudget(){
  console.log( 'in calculateRemainingBudget');
  // loop through purchases array
  let totalPrices = 0;
  for( let i = 0; i< purchases.length; i++){
    totalPrices += Number( purchases[ i ].price );
    // for each purchase, add up total of all prices
  } // end for loop
  console.log( 'totalPrices: ', totalPrices );
  // subtract totalPrices from budget for remainingBudget
  const remainingBudget = budget -  totalPrices;
  //display remaining budget
  let el = $( '#remainingBudgetOut');
  el.empty();
  el.append( remainingBudget );
}  // end calculateRemainingBudget

function displayPurchases(){
  console.log( 'in displayPurchases' );
  // target output by ID
  let el = $( '#purchasesOut' );
  // empty
  el.empty();
  // loop through purchases array
  for( purchase of purchases ){
    // for each purchase, create a list item
    el.append( `<li>` + purchase.name + `: $` + purchase.price +`</li>`);   // couldn't get this to show on the DOM
  } // end of for loop
} // end displayPurchases

function readyNow(){            // the is the function we're running at the top
  // display budget
  // target budgetOut by ID
  let el = $( '#budgetOut' );
  el.empty();
  el.append( budget );
  //handle click event
  $( '#addPurchaseButton' ).on( 'click', addPurchase );
  // initialize display
  calculateRemainingBudget();
  // update the DOM
  displayPurchases();
}  // end readyNow