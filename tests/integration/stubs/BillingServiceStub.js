class BillingServiceStub {
  buyBook(title, quantity, balance) {

    // Case 1: success
    if (title === "Clean Code" && quantity === 2 && balance === 100) {
      return {
        success: true,
        receipt: {
          title: "Clean Code",
          quantity: 2,
          price: 45,
          total: 90,
          remaining: 10
        }
      };
    }

    // Case 2: insufficient balance
    if (title === "Design Patterns") {
      return {
        success: false,
        msg: "Insufficient balance"
      };
    }

    // default
    return {
      success: false,
      msg: "Book not found"
    };
  }
}

module.exports = BillingServiceStub;
