// import { create } from "zustand";
// const UseStore = create((set) => {
//   var storedProducts;

//   if (typeof window !== "undefined") {
//     storedProducts = window?.localStorage?.getItem("products")
//       ? JSON.parse(localStorage.getItem("products") || [])
//       : [];
//   }

//   return {
//     products: storedProducts,

//     addToCart: (images, id, title, description, price) => {
//       set((state) => {
//         const productWithQuantityAndType = { ...images, id, title, description, price };
//         const exist = state.products.find((card) => card.id === productWithQuantityAndType.id);
//     console.log(exist,"exist");
//         if (exist) {
//           const updatedProducts = [...state.cart]
//           // .products.map((item) =>
//           //   item.id === exist.id ? {...item, price: item.price + productWithQuantityAndType.price} : item
//           // );
          
//           // localStorage.setItem("products", JSON.stringify(updatedProducts));
//           return {
//             products: updatedProducts,
//           };
//         } else {
//           const updatedProducts = [...state.products, productWithQuantityAndType];
//           localStorage.setItem("products", JSON.stringify(updatedProducts));
//           return {
//             products: updatedProducts,
//           };
//         }
//       });
//     },   
    
//     deleteItem: (id) => {
//       set((state) => {
//         // console.log(state, id)
//         const updatedProducts = state.products.filter(
//           (item) => item.id !== id 
//         );
//         localStorage.setItem("products", JSON.stringify(updatedProducts));
//         return {
//           products: updatedProducts,
//         };
//       });
//     },
//   }
//   });
//   export default UseStore;















import { create } from "zustand";
import Cookies from 'js-cookie';
const UseStore = create((set) => {
  var storedProducts;
    storedProducts = Cookies.get("products")
      ? JSON.parse(Cookies.get("products") || [])
      : [];

  return {
    products: storedProducts,
    addToCart: (images, id, title, description, price) => {
      set((state) => {
        const productWithQuantityAndType = { ...images, id, title, description, price };
        const exist = state.products.find((card) => card.id === productWithQuantityAndType.id);
        if (exist) {
          const updatedProducts = [...state.cart]
          return {
            products: updatedProducts,
          };
        } else {
          const updatedProducts = [...state.products, productWithQuantityAndType];
          Cookies.set("products", JSON.stringify(updatedProducts),{ path: '/', domain: '.blacktiecarpetcare.com' })
          console.log("added");
          return {
            products: updatedProducts,
          };
        }
      });
    },  
    deleteItem: (id) => {
      set((state) => {
        const updatedProducts = state.products.filter(
          (item) => item.id !== id 
        );
        Cookies.set("products", JSON.stringify(updatedProducts),{ path: '/', domain: '.blacktiecarpetcare.com' })
        return {
          products: updatedProducts,
        };
      });
    },
    resetStore: () => {
      Cookies.remove("products")
      set({
        products: [],
      });
    },
  };
});

export default UseStore;

































