const MenuController = require("../../src/controllers/MenuController");
const BillingServiceStub = require("./stubs/BillingServiceStub");

// fake dependencies (not used in buy())
const fakeRepo = {};
const fakeSearch = {};

const billingStub = new BillingServiceStub();

// inject stub instead of real service
const menu = new MenuController(fakeRepo, fakeSearch, billingStub);

// -------- Integration Test Cases --------

// IT1: success case
console.log("IT1: Successful purchase");
menu.billingService = billingStub; // ensure stub is used
menu.buy = function () {
  const result = this.billingService.buyBook("Clean Code", 2, 100);
  console.log(result);
};
menu.buy();

// IT2: failure case
console.log("\nIT2: Insufficient balance");
menu.buy = function () {
  const result = this.billingService.buyBook("Design Patterns", 2, 80);
  console.log(result);
};
menu.buy();
