import React from 'react';

import MessageContainer from '../containers/MessageContainer';

import ProductsContainer from '../containers/ProductsContainer';
import CartContainer from '../containers/CartContainer';


class Main extends React.Component{
    render(){
        return(
            <div id="mainContainer">
                <div className="container">
                {/* <!-- Products --> */}
                <ProductsContainer />
                {/* <!-- Message --> */}
                <MessageContainer />
                {/* <!-- Cart --> */}
                <CartContainer />
                </div>
            </div>
        )
    }
}

export default Main;