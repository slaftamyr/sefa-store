import React from "react";

const Cart = ({ cart }) => {
  
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

   
  const handleWhatsAppOrder = () => {
    const orderDetails = cart.map(item => 
      `Product: ${item.title}, Quantity: ${item.quantity}, Price: $${item.price * item.quantity}`
    ).join("\n");
    
    const message = `Order details:\n${orderDetails}\nTotal Price: $${totalPrice}\n\nPlease process this order.`;
    
    const url = `https://wa.me/0129512940?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="mt-4">
          {cart.map((item) => (
            <div key={item.id} className="border p-4 rounded mb-4 shadow">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 object-cover rounded"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 text-lg font-semibold">
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
          <div className="mt-4">
            <button
              onClick={handleWhatsAppOrder}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
             Order 
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
