import { Button, Panel, FlexboxGrid, Container, Divider } from 'rsuite';

function AddToCartButton(product) {

const onAddToCartClicked = (product) => {
    var item = localStorage.getItem('cart');
    var cart = item == null? [] : JSON.parse(item);
    var updateProduct = cart.find(p => p.id === product.id);
    if (!updateProduct) {
      cart.push(product);
    } else {
      updateProduct.quantity += product.quantity;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  return (              
    <Button       
        style={{ backgroundColor: 'black', color: 'white', borderBlockColor:'black'}}
        appearance="ghost" 
        onClick={() => onAddToCartClicked(product)}>
        Add to Cart
    </Button>
  );

}

export default AddToCartButton;