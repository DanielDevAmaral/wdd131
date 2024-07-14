const select = document.querySelector("#product-select")

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      avgrating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  let options = ""

  products.forEach(product => {
    console.log(product)
    options += `<option value="${product.name}">${(product.name).toUpperCase()}</option>`;
  });

  select.innerHTML = options;

