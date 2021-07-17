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
    const list = products.map(x => x.price)
    const result = list.reduce(((x,y) => x+y),0)
    expect(result).toBe(258010);
  });
});

