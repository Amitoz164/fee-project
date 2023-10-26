const product = [
    {
      id: 0,
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230812/bpEp/64d77730eebac147fcc4f16c/-473Wx593H-466428340-black-MODEL.jpg",
      title: "Loose Fit Graphic Print Round-Neck T-Shirt",
      price: 120,
    },
    {
      id: 1,
      image:
        "https://rukminim2.flixcart.com/image/832/832/kerfl3k0hlty2aw-0/top/r/h/s/xl-1-tttp002779-tokyo-talkies-original-imafvejwrxuyg3jc.jpeg?q=70",
      title: "Casual Regular Sleeves Printed Women Dark Blue, Beige Top",
      price: 60,
    },
    {
      id: 2,
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/w/y/y/30-kttwomensjeans728-kotty-original-imafyhphwufynnat-bb.jpeg?q=70",
      title: "Women Flared High Rise Dark Blue Jeans",
      price: 430,
    },
    {
      id: 3,
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/w/s/b/28-kttladiesjeans1119-kotty-original-imagnvzhgzsdzwdq.jpeg?q=70",
      title: "Women Boot-Leg Mid Rise Light Blue Jeans",
      price: 599,
    },
    {
      id: 4,
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/top/r/w/t/s-tttp007136-tokyo-talkies-original-imaggtmvpm9edypy.jpeg?q=70",
      title: "Casual Bishop Sleeve Solid Women Black Top",
      price: 3000,
    },
    {
      id: 5,
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/top/c/s/s/l-gr6201-blue-harpa-original-imafzt9tujn9m6te-bb.jpeg?q=70",
      title: "Casual Regular Sleeves Solid Women Blue Top",
      price: 395,
    },
    {
      id: 6,
      image:
        "https://rukminim2.flixcart.com/image/832/832/l4zxn680/jean/h/1/d/32-36087-0637-levi-s-original-imagfrtubaufc3vz.jpeg?q=70",
      title: " 512 Men Regular Low Rise Blue Jeans",
      price: 1595,
    },
    {
      id: 7,
      image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/3/j/v/xxl-st10-vebnor-original-imagnvrqgv7e5crg.jpeg?q=70",
      title: "Men Leaf Printed Regular Fit Shirt",
      price: 1200,
    },
    {
      id: 8,
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230921/u00i/650b514cafa4cf41f5f5c792/-473Wx593H-466602015-navy-MODEL5.jpg",
      title: "Tropical Print Spread-Collar Shirt",
      price: 800,
    },
    {
      id: 9,
      image:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/s/b/e/s-hlsh013854-highlander-original-imagg9tcjmegphsy.jpeg?q=70",
      title: "Men Slim Fit Printed Cut Away Collar Casual Shirt",
      price: 450,
    },
  ];
  
  let i = 0;
  document.getElementById("root").innerHTML = product
    .map((item) => {
      var { image, title, price } = item;
      return (
        `<div class='box'>
              <div class='img-box'>
                  <img class='images' src=${image}></img>
              </div>
          <div class='bottom'>
          <p>${title}</p>
          <h2>₹ ${price}.00</h2>` +
        "<button onclick='addtocart(" +
        i++ +
        ")'>Add to cart</button>" +
        `</div>
          </div>`
      );
    })
    .join("");
  
  let cart = [];
  
  // Add to cart function
  function addtocart(a) {
    cart.push({ ...product[a] });
    displaycart();
  }
  
  // Display cart items
  function displaycart() {
    let j = 0;
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;
    let cartItemsHTML = "";
  
    if (cart.length == 0) {
      document.getElementById("cartItem").innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    } else {
      cartItemsHTML = cart
        .map((items) => {
          var { image, title, price } = items;
          total += price;
          return `<div class='cart-item'>
              <div class='row-img'>
                <img class='rowimg' src=${image}>
              </div>
              <p style='font-size: 8px;'>${title}</p>
              <h2 style='font-size: 10px;'>$ ${price}.00</h2>
              <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
            </div>`;
        })
        .join("");
    }
    cartItemsHTML += "<button onclick='showPayment()'>BUY</button>";
  
    document.getElementById("cartItem").innerHTML = cartItemsHTML;
    document.getElementById("total").innerHTML = "$ " + total + ".00";
  }
  
  // Delete item from the cart
  function delElement(a) {
    cart.splice(a, 1);
    displaycart();
  }
  
  // Show the payment section
  function showPayment() {
    document.getElementById("payment").style.display = "block";
  }
  function closePayment() {
    document.getElementById("payment").style.display = "none";
  }