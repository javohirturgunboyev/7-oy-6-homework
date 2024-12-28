// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { remove, update, clear } from "../redux/cartSlice";

// function Cart() {
//   const cart = useSelector((state) => state.cart); 
//   const dispatch = useDispatch();

//   const handleRemove = (id, color) => {
//     dispatch(remove({ id, color })); 
//   };

//   const handleUpdate = (id, color, count) => {
//     dispatch(update({ id, color, count })); 
//   };

//   const handleClear = () => {
//     dispatch(clear()); 
//   };

//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
//       <hr className="mb-6" />
//       {cart.length > 0 ? (
//         <div>
//           {cart.map((item) => (
//             <div
//               key={`${item.id}-${item.color}`}
//               className="flex items-center justify-between p-4 mb-6 shadow-md rounded-lg border"
//             >
          
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-32 h-32 rounded-md object-cover"
//               />

           
//               <div className="flex-1 ml-6">
//                 <h2 className="text-lg font-bold">{item.name}</h2>
//                 <p className="text-gray-500">{item.brand}</p>
//                 <p className="mt-2">
//                   <span className="font-semibold">Color:</span>
//                   <span
//                     className="inline-block w-4 h-4 ml-2 rounded-full"
//                     style={{ backgroundColor: item.color }}
//                   ></span>
//                 </p>
//               </div>

  
//               <div className="flex flex-col items-end">
//                 <div className="flex items-center mb-4">
//                   <label htmlFor={`quantity-${item.id}`} className="mr-2">
//                     Amount:
//                   </label>
//                   <select
//                     id={`quantity-${item.id}`}
//                     className="border rounded px-2 py-1"
//                     value={item.count}
//                     onChange={(e) =>
//                       handleUpdate(item.id, item.color, Number(e.target.value))
//                     }
//                   >
//                     {[...Array(50).keys()].map((num) => (
//                       <option key={num + 1} value={num + 1}>
//                         {num + 1}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <button
//                   onClick={() => handleRemove(item.id, item.color)}
//                   className="text-red-500 underline"
//                 >
//                   Remove
//                 </button>
//               </div>

         
//               <p className="text-xl font-bold">${item.price.toFixed(2)}</p>
//             </div>
//           ))}
//           <button
//             onClick={handleClear}
//             className="bg-red-500 text-white px-6 py-3 rounded-lg mt-6"
//           >
//             Clear Cart
//           </button>
//         </div>
//       ) : (
//         <p className="text-gray-500">Your cart is empty.</p>
//       )}
//     </div>
//   );
// }

// export default Cart;



import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, update, clear } from "../redux/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart); // Redux-dan cartni olish
  const dispatch = useDispatch();

  const handleRemove = (id, color) => {
    dispatch(remove({ id, color })); // Mahsulotni o'chirish
  };

  const handleUpdate = (id, color, count) => {
    dispatch(update({ id, color, count })); // Miqdorni yangilash
  };

  const handleClear = () => {
    dispatch(clear()); // Hammasini o'chirish
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <hr className="mb-6" />
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.color}`}
              className="flex items-center justify-between p-4 mb-6 shadow-md rounded-lg border"
            >
              {/* Mahsulot rasmi */}
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 rounded-md object-cover"
              />

              {/* Mahsulot ma'lumotlari */}
              <div className="flex-1 ml-6">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="mt-2">
                  <span className="font-semibold">Color:</span>
                  <span
                    className="inline-block w-4 h-4 ml-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                </p>
              </div>

              {/* Miqdor va amallar */}
              <div className="flex flex-col items-end">
                <div className="flex items-center mb-4">
                  <label htmlFor={`quantity-${item.id}`} className="mr-2">
                    Amount:
                  </label>
                  <select
                    id={`quantity-${item.id}`}
                    className="border rounded px-2 py-1"
                    value={item.count}
                    onChange={(e) =>
                      handleUpdate(item.id, item.color, Number(e.target.value))
                    }
                  >
                    {[...Array(50).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => handleRemove(item.id, item.color)}
                  className="text-red-500 underline"
                >
                  Remove
                </button>
              </div>

              {/* Narx */}
              <p className="text-xl font-bold">${item.price}</p>
            </div>
          ))}
          <button
            onClick={handleClear}
            className="bg-red-500 text-white px-6 py-3 rounded-lg mt-6"
          >
            Clear Cart
          </button>
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
