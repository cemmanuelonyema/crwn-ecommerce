export const addItemToCart = (cartItems, cartItemToAdd) => {
  //check for existing item
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //else, add a new item
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
