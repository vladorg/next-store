

export const lsAddProductCartService = (id: string, quantity?: number): boolean => {
  try {
    const value = { id, quantity: quantity || 1 };
    const cart = localStorage.getItem('cart');  

    if (cart) { 
      if (!cart.includes(id)) {
        const parsed = JSON.parse(cart); 
        parsed.push(value);
        localStorage.setItem('cart', JSON.stringify(parsed)); 
      }
      
    } else {
      localStorage.setItem('cart', JSON.stringify([ value ]));      
    }
    
    return true
  } catch(err) {
    console.log(err);
    return false    
  }

}
