import { Button, Panel, FlexboxGrid, Container, Divider } from 'rsuite';

function AddToCartButton({product, selectQuantity}) {
const onAddToCartClicked = (product) => {
    console.log(product);
    var item = localStorage.getItem('cart');
    var cart = item == null? [] : JSON.parse(item);
    var updateProduct = cart.find(p => p.id === product.id);
    if (!updateProduct) {
        const newProduct = {
            ...product,
            selectQuantity: '1'
        }
        cart.push(newProduct);
    } else {
        updateProduct.selectQuantity = parseInt(updateProduct.selectQuantity) + parseInt(selectQuantity);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("product added to shopping cart");
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