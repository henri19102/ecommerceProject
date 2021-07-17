describe("product data is got", () => {
  const product = [
    {
      name: "shirt",
      price: 10,
      count: 2,
      category: "Attire"
    }
  ];

  test("when list has only one item, get price for that", () => {
    expect(product[0].price).toBe(10);
  });
});

