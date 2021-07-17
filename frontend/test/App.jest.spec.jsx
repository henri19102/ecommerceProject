describe("product data is got", () => {
  const products = [
    {
      name: "shirt",
      price: 10,
      count: 1,
      category: "Attire"
    },
    {
      name: "lamborghini",
      price: 258000,
      count: 1,
      category: "Car"
    },
  ];

  test("when list has only one item, get price for that", () => {
    expect(products[0].price).toBe(10);
  });

  test("when list has multiple items,get total price", () => {
    expect(products.reduce((x,y) => x.price+y.price),0).toBe(258010);
  });
});

