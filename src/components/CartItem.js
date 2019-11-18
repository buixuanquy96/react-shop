import React from 'react';
import * as Message from '../constants/Message'

class CartItem extends React.Component {
    
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         quantity: 1
    //     }
    // }

    render(){
        var {item} = this.props;
        //var {quantity} = item.quantity > 0 ? item : this.state;
        var {quantity} = item;
        return (
            <div>
                <tr>
                    <th scope="row">
                        <img src= {item.product.image}
                            alt={item.product.name} className="img-fluid z-depth-0" />
                    </th>
                    <td>
                        <h5>
                            <strong> {item.product.name} </strong>
                        </h5>
                    </td>
                    <td> {item.product.price}$ </td>
                    <td className="center-on-small-only">
                        <span className="qty"> {quantity} </span>
                        <div className="btn-group radio-group" data-toggle="buttons">
                            <label 
                                onClick = { () => this.onUpdateQuantity(item.product, item.quantity - 1) }
                                className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light">
                                <a>—</a>
                            </label>
                            <label 
                                onClick = { () => this.onUpdateQuantity(item.product, item.quantity + 1) }
                                className="btn btn-sm btn-primary
                                btn-rounded waves-effect waves-light">
                                <a>+</a>
                            </label>
                        </div>
                    </td>
                    <td> {this.showSubTotal(item.product.price, item.quantity)} $</td>
                    <td>
                        <button 
                            type="button"
                            className="btn btn-sm btn-primary waves-effect waves-light" 
                            data-toggle="tooltip" 
                            data-placement="top"
                            title="" 
                            data-original-title="Remove item"
                            onClick={ () => this.onDelete(item.product)}  >
                            X
                        </button>
                    </td>
                </tr>                       
            </div>
        );
    }

    showSubTotal = (price, quantity) =>{
      return price*quantity
    }

    onDelete = (product) => {
    //   console.log(product);
        var {onDeleteProductInCart, onChangeMessage} = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0){
            var {onUpdateProductInCart, onChangeMessage} = this.props;
            // this.setState({
            //     quantity: quantity
            // });
            onUpdateProductInCart(product, quantity);
            onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
        }
    }

}

export default CartItem;
