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
} // end addPurchase

function readyNow(){            // the is the function we're running at the top
  // display budget
  // target budgetOut by ID
  let el = $( '#budgetOut' );
  el.empty();
  el.append( budget );
  //handle click event
  $( '#addPurchaseButton' ).on( 'click', addPurchase );
}  // end readyNow