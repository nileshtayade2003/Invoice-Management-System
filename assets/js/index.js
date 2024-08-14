/******** login page ******* */
if (window.location.pathname == "/login.html") {
  console.log(window.location.pathname);
  let loginForm = document.getElementById("loginform");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); //to prevent the reloading of page

    let organization = document.getElementById("organization").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const logindata = {
      organization: organization,
      email: email,
      password: password,
    };

    localStorage.setItem("logininfo", JSON.stringify(logindata));

    loginForm.reset();

    window.location.href = "index.html"; //to redirect after submission
  });
}

/*************** home page **************/
else if(window.location.pathname == '/index.html' || window.location.pathname == '/'){
  console.log('you are on home')
}

/***************** User Master **********************/
else if(window.location.pathname == '/masters/user-master.html'){}


/***************** Organization Master **********************/
else if(window.location.pathname == '/masters/organisation-master.html'){
  console.log('you are on organization master')
}


/***************** Category Master **********************/
else if(window.location.pathname == '/masters/category-master.html'){}


/***************** Role Master **********************/
else if(window.location.pathname == '/masters/role-master.html'){}


/***************** Client Master **********************/
else if(window.location.pathname == '/masters/client-master.html'){}


/***************** Tax Master **********************/
else if(window.location.pathname == '/masters/tax-master.html'){}


/***************** Product Master **********************/
else if(window.location.pathname == '/masters/product-master.html'){}


/***************** Transaction Master **********************/
else if(window.location.pathname == '/masters/transaction-master.html'){}


/********** add invoice page **********/
else if (window.location.pathname == "/invoice-management/invoice-add.html") {
  document
    .getElementById("invoice-additembtn")
    .addEventListener("click", function () {
      const cardContainer = document.getElementById("invoice-container");

      // Create a new card div
      const newCard = document.createElement("div");
      newCard.classList.add("repeater-wrapper", "pt-0", "pt-md-4");

      newCard.innerHTML = `
      <div class="d-flex border rounded position-relative pe-0">
        <div class="row w-100 p-4 g-4">
          <div class="col-md-6 col-12 mb-md-0 mb-4">
            <p class="h6 repeater-title">Item</p>
            <select class="form-select item-details mb-4">
              <option value="App Design">App Design</option>
              <option value="App Customization" selected="">App Customization</option>
              <option value="ABC Template">ABC Template</option>
              <option value="App Development">App Development</option>
            </select>
            <textarea class="form-control" rows="2" placeholder="Customization &amp; Bug Fixes"></textarea>
          </div>
          <div class="col-md-3 col-12 mb-md-0 mb-4">
            <p class="h6 repeater-title">Cost</p>
            <input type="text" class="form-control invoice-item-price mb-4" placeholder="24" min="12">
            <div class="text-heading">
              <div class="mb-1">Discount:</div>
              <span class="discount me-2">0%</span>
              <span class="tax-1 me-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Tax 1">0%</span>
              <span class="tax-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Tax 2">0%</span>
            </div>
          </div>
          <div class="col-md-2 col-12 mb-md-0 mb-4">
            <p class="h6 repeater-title">Qty</p>
            <input type="text" class="form-control invoice-item-qty" placeholder="1" min="1" max="50">
          </div>
          <div class="col-md-1 col-12 pe-0 mt-4">
            <p class="h6 repeater-title">Price</p>
            <p class="mb-0 text-heading">$24.00</p>
          </div>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-between border-start p-2">
          <i class="bx bx-x bx-sm cursor-pointer delete-btn" data-repeater-delete="" id="invoice-delete"></i>
          <div class="dropdown">
            <i class="bx bx-cog bx-sm cursor-pointer more-options-dropdown" role="button" id="dropdownMenuButton" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"></i>
            <div class="dropdown-menu dropdown-menu-end w-px-300 p-4" aria-labelledby="dropdownMenuButton">
              <div class="row g-3">
                <div class="col-12">
                  <label for="discountInput" class="form-label">Discount(%)</label>
                  <input type="number" class="form-control" id="discountInput" min="0" max="100">
                </div>
                <div class="col-md-6">
                  <label for="taxInput1" class="form-label">Tax 1</label>
                  <select name="group-a[0][tax-1-input]" id="taxInput1" class="form-select tax-select">
                    <option value="0%" selected="">0%</option>
                    <option value="1%">1%</option>
                    <option value="10%">10%</option>
                    <option value="18%">18%</option>
                    <option value="40%">40%</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="taxInput2" class="form-label">Tax 2</label>
                  <select name="group-a[0][tax-2-input]" id="taxInput2" class="form-select tax-select">
                    <option value="0%" selected="">0%</option>
                    <option value="1%">1%</option>
                    <option value="10%">10%</option>
                    <option value="18%">18%</option>
                    <option value="40%">40%</option>
                  </select>
                </div>
              </div>
              <div class="dropdown-divider my-4"></div>
              <button type="button" class="btn btn-outline-primary btn-apply-changes">Apply</button>
            </div>
          </div>
        </div>
      </div>
    `;

      // Add the delete button event listener directly to the newly created card
      newCard
        .querySelector(".delete-btn")
        .addEventListener("click", function () {
          cardContainer.removeChild(newCard);
        });

      // Append the new card to the card container
      cardContainer.appendChild(newCard);
    });
}

/******** index page ***********************/



/********* invoice management **********/

