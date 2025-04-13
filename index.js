const products = [
    {
        id: 0,
      name: "Samsung Galaxy S24 Ultra",
      description: "Samsung Galaxy S24 Ultra Dual SIM - 12GB RAM - 256GB - 5G - Black",
      price: "₦ 1,599,000",
      image: "images/galaxy-s24-ultra.jpg",
      alt: "Samsung Galaxy S24 Ultra"
    },
    {
        id: 1,
      name: "Urban Explorer",
      description: "Stylish casual shoes that combine comfort with modern design.",
      price: "₦ 2,599,000",
      image: "images/macbook-air-gold-laptop-72rDZq8-600.jpg",
      alt: "Apple MacBook Air Gold"
    },
    {
        id: 2,
      name: "Dell Alienware M18 R2 Gaming Laptop",
      description: "High-performance gaming laptop with powerful graphics and advanced cooling system.",
      price: "₦ 10,248,000",
      image: "images/Alienware-14-back-angle1.webp",
      alt: "Dell Alienware M18 R2"
    },
    {
        id: 3,
      name: "iPhone 16 Pro Max",
      description: "Apple iPhone 16 Pro Max - Latest model with advanced features and triple 48MP cameras.",
      price: "₦ 3,399,000",
      image: "images/Apple-iPhone-16-Pro-Max-Nachfolger-komplett-mit-drei-48-Megapixel-Kameras.jpg",
      alt: "Apple iPhone 16 Pro Max"
    },
    {
        id: 4,
      name: "Google Pixel 9 Pro XL",
      description: "Google Pixel 9 Pro XL 5G with 256/512GB storage, 6.8\" OLED, 50MP camera, and Tensor G4 chip.",
      price: "₦ 2,470,000",
      image: "images/google-pixel-9-pro-news-featured-copy.webp",
      alt: "Google Pixel 9 Pro XL"
    },
    {
        id: 5,
      name: "Samsung Galaxy Tab S9 Ultra",
      description: "Samsung Galaxy Tab S9 Ultra 5G, 12GB RAM, 256GB ROM - GRAPHITE.",
      price: "₦ 1,398,600",
      image: "images/images.jpg",
      alt: "Samsung Galaxy Tab S9 Ultra"
    }
  ];

  const cartProducts = [];

  const addToCart = (id) => {
    cartProducts.push(id);
    displayCartItems();
  }

  //THIS FUNCTION CREATE A CARD ITEM WITH THE INFO PASS INTO IT AS A PARAMETER
  function createProductCard(item) {
    // Create main card container
    const card = document.createElement('div');
    card.className = 'product-card';

    // Create image wrapper
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'product-image';
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = '';
    imageWrapper.appendChild(img);

    // Create info wrapper
    const info = document.createElement('div');
    info.className = 'product-info';

    // Create heading (empty h3)
    const title = document.createElement('h3');
    title.textContent = item.name; 

    // Create description
    const description = document.createElement('p');
    description.textContent = item.description; 

    // Create price div
    const price = document.createElement('div');
    price.className = 'product-price';
    price.textContent = item.price;

    // Create button link
    const button = document.createElement('a');
    button.href = '#';
    // button.className = 'product-button';
    // button.setAttribute('onclick', 'addToCart(6)');
    // button.innerHTML = 'Add to Cart <i class="fa-solid fa-cart-plus"></i>';

    // Append everything to info section
    info.appendChild(title);
    info.appendChild(description);
    info.appendChild(price);
    info.appendChild(button);

    // Append image and info to card
    card.appendChild(imageWrapper);
    card.appendChild(info);

    // Append card to the container
    document.getElementById('cart-products').appendChild(card);
  }

  // Call the function to add the card to the page
  const displayCartItems = () => {    
    //CLEAR PREVIOUS CART ITEMS
    document.getElementById('cart-products').textContent = '';
    
    for (let index = 0; index < cartProducts.length; index++) {        
        const productId = cartProducts[index];
        const item = products.filter((item) => {
            return item.id === productId
        })
        
        createProductCard(item[0]);
    }

  };
