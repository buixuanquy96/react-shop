import React from 'react';

import Product from './Product';


class Products extends React.Component {
    render(){
        var {products} = this.props;
        return (   
            <div className="section">
                
                <h1 className="heading ">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        );
    }

    
}


export default Products;
