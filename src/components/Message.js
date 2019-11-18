import React from 'react';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import $ from '../node_modules/jquery'

class Message extends React.Component {
  render(){
    var {message} = this.props;
    return (
        <div>
            {/* <!-- Message --> */}
            <h3>
                <span className="badge amber darken-2">
                  {message}
                </span>
            </h3>

        </div>
      );
  }
}

export default Message;
