/* 
    JS code for the bread price calculator
*/

"use strict";
/* 
This function doesn't work. It doesn't multiply the quantity of bread with the price of that bread

let breadType = document.querySelector("#type");
let getPriceBtn = document.querySelector("#price");
let showPriceField = document.querySelector("#show-price");

function getBreadPrice(type) {
  var breadQuantity = document.querySelector("#quantity");
  var output;
  if (type == "filade") {
    output = breadQuantity.value * 190;
  }
  return output;
}

var priceOutput = getBreadPrice(breadType.value);
getPriceBtn.addEventListener("click", function() {
  console.log(priceOutput);
});
 */

/* But this function works just fine */












// let getPriceBtn = document.querySelector("#price");



// getPriceBtn.addEventListener("click", function() {
//   let breadType = document.querySelector("#type");
//   let breadQuantity = document.querySelector("#quantity");
//   let showPriceField = document.querySelector("#show-price");

//   //
//   //
//   if (breadType.value == "filade") {
//         let newEl = document.createElement('LI');
//         let string = `${breadQuantity.value} filade will cost -N- ${breadQuantity.value * 190}`
//         let newElContent = document.createTextNode( string );
//         newEl.appendChild(newElContent);
//         showPriceField.appendChild(newEl);
//         // showPriceField.innerHTML = `${breadQuantity.value} filade will cost -N- ${breadQuantity.value * 190}`;
//   }
// });













/* 
let getPriceBtn = document.querySelector("#price");

getPriceBtn.addEventListener("click", function() {
    let breadType = document.querySelector("#type");
    let breadQuantity = document.querySelector("#quantity");
    let showPriceField = document.querySelector("#show-price");
  if (breadType.value == "filade") {
        showPriceField.innerHTML = `${breadQuantity.value} filade will cost -N- ${breadQuantity.value * 190}`;
  }
});
 */
 




const breadList = [
  {
    'Breadmeal' : 
      {
        solo : 70,
        midi : 100,
        ultra : 170,
        jumbo : 270,
        mega : 320
      }
  },

  { 
    'Countryfresh' :
      {
        eco : 170,
        jumboSpecial : 280,
        jumboExtra : 320
      }
  },

  { 
    'Filade' :
      {
        smallSize : 190
      }
   
  },

  {  
    'Topcrust' :
      {
        ekoSmall : 185,
        ikejaSmall : 180,
        classic : 290,
        ikejaBig : 325,
        ekoBig : 340
      }
  }
];



let getPriceBtn = document.querySelector("#price");
getPriceBtn.addEventListener('click', () => console.log("clicked"));



  let breadType = document.querySelector("#type");
  let breadSize = document.querySelector('#size');
  let breadQuantity = document.querySelector("#quantity");
  let showPriceField = document.querySelector("#show-price");



function calculateBreadPrice() {
  // let newEl = document.createElement('LI');
  //       let string = `${breadQuantity.value} filade will cost -N- ${breadQuantity.value * 190}`
  //       let newElContent = document.createTextNode( string );
  //       newEl.appendChild(newElContent);
  //       showPriceField.appendChild(newEl);
        // showPriceField.innerHTML = `${breadQuantity.value} filade will cost -N- ${breadQuantity.value * 190}`;

    for ( let breadListIdx = 0; breadListIdx < breadList.length; breadListIdx++ ) {

       for ( let breadName in breadList[breadListIdx]  ) {
          for (let sizeProperty in breadList[breadListIdx][breadName]) {
              if (breadType.value == breadName && breadSize.value == sizeProperty ) {

                let newEl = document.createElement('LI');
                let string = `${breadQuantity.value} ${breadName} (${breadSize.value}) will cost ${breadQuantity.value * breadList[breadListIdx][breadName][sizeProperty]}`;
                let newElContent = document.createTextNode( string );
                newEl.appendChild(newElContent);
                showPriceField.appendChild(newEl);
                // showPriceField.innerHTML = `${breadQuantity.value} filade will cost -N- ${breadQuantity.value * 190}`;
                return showPriceField;
                


                // console.log(breadList[breadListIdx][breadName]);
                // console.log(breadList[breadListIdx][breadName][sizeProperty]);
                // console.log(`${breadQuantity.value} ${breadName} (${breadSize.value}) will cost ${breadQuantity.value * breadList[breadListIdx][breadName][sizeProperty] } `);
              }





          }
        }
    }

    
};

//Call the function on a click event to the "get price" button.
getPriceBtn.addEventListener("click", calculateBreadPrice);


// for ( let breadListIdx = 0; breadListIdx < breadList.length; breadListIdx++ ) {

//    for ( let breadName in breadList[breadListIdx]  ) {
//       for (let sizeProperty in breadList[breadListIdx][breadName]) {
//           if (breadType.value == breadName && breadQuantity.value == sizeProperty ) {
//             console.log(breadList[breadListIdx][breadName]);
//             console.log(breadList[breadListIdx][breadName][sizeProperty]);
//           }





//       }
    

    // for (prop in breadList[breadListIdx][breadName]) {
    //   if (breadQuantity.value == prop ) {
    //     console.log(prop);
    //   }
    // }
    
    // console.log(`${breadName} =>>> ${breadName[0]}`);



  //
  //
  // if (breadType.value == "filade") {
  //       let newEl = document.createElement('LI');
  //       let string = `${breadQuantity.value} filade will cost -N- ${breadQuantity.value * 190}`
  //       let newElContent = document.createTextNode( string );
  //       newEl.appendChild(newElContent);
  //       showPriceField.appendChild(newEl);
  //       // showPriceField.innerHTML = `${breadQuantity.value} filade will cost -N- ${breadQuantity.value * 190}`;
  // }

