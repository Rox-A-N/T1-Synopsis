$(document).ready( readyNow );      // this is to get the script ready to use jQuery

const budget = 25000;
let purchases = [];

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
    $( '#purchaseNameIn').val( '' );
    $( '#purchasePriceIn' ).val( '' );
    // calculate remainingBudget
}

function readyNow(){            // the is the function we're running at the top
  // display budget
  // target budgetOut by ID
  let el = $( '#budgetOut' );
  el.empty();
  el.append( budget );
  //handle click event
  $( '#addPurchaseButton' ).on( 'click', addPurchase );
}