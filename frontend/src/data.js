import image1 from './assets/images/image1.jpg'
import image2 from './assets/images/image2.jpg'
import image3 from './assets/images/image3.jpg'
import image4 from './assets/images/image4.jpg'
import image5 from './assets/images/image5.jpg'
import catogorie1 from './assets/images/catogorie1.jpg'
import catogorie2 from './assets/images/catogorie2.jpg'
import catogorie3 from './assets/images/catogorie3.jpeg'

 export const sliderItems=[
    {
       id: 1,
        image: image1,
        title: "Winter Sale",
        description: "GET FLAT 50% DISCOUNT ON ALL PRODUCTS",
        bg: "D28F96"
      },
      {
       id: 2,
        image: image2,
        title: "Holiday Special",
        description: "EXCLUSIVE HOLIDAY OFFERS JUST FOR YOU",
        bg: "F8BD00"
      },
      {
       id: 3,
        image: image3,
        title: "Clearance Event",
        description: "GRAB AMAZING DEALS BEFORE THEY'RE GONE",
        bg: "D68A18"
      },
      {
       id: 4,
        image: image4,
        title: "Spring Collection Launch",
        description: "DISCOVER THE LATEST TRENDS FOR SPRING",
        bg: "A45D63"
      },
      {
       id: 5,
        image: image5,
        title: "Flash Sale",
        description: "HURRY! LIMITED-TIME OFFERS ON SELECT ITEMS",
        bg: "fce8e4"
      }
      
    ]     

    export const catogories = [
      {
        id: 1,
        image: catogorie1,
        title: "SHIRT STYLE!",
        cat:"women"
      },
      {
        id: 2,
        image: catogorie3,
        title: "LOUNGEWEAR LOVE",
        cat:"women"
      },
      {
        id: 3,
        image: catogorie2,
        title: "LIGHT JACKETS",
        cat:"men"
      },
    ];

    export const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/women%27s%20clothing');
        const data = await response.json();
      
        return data;
      } catch (error) {
        console.error('Error:', error);
        return null;
      }
    };
   