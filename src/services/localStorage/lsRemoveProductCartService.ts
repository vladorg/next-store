

export const lsRemoveProductCartService = (id: string): boolean => {
  try {
    const cart = localStorage.getItem('cart') as string; // if delete from cart, it means what in cart exists something - marked it as STRING (not null)
    
    let parsed = JSON.parse(cart);
    parsed = parsed.filter((product: any) => product.id != id );
    
    if (parsed.length) {
      localStorage.setItem('cart', JSON.stringify(parsed));
    } else {
      localStorage.removeItem('cart');
    }    

    return true
  } catch(err) {
    console.log(err);
    return false    
  }
}
