/* 
    JS code for the bread price calculator
*/

"use strict";

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



  let breadType = document.querySelector("#type");
  let breadSize = document.querySelector('#size');
  let breadQuantity = document.querySelector("#quantity");
  let showPriceField = document.querySelector("#show-price");



function calculateBreadPrice() {
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
              }





          }
        }
    }

    
};

//Call the calculateBreadPrice function at a click event on the 'Get Price' button


getPriceBtn.addEventListener("click", calculateBreadPrice);






