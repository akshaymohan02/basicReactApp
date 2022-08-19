//class-based React component
import React from "react";

class Description extends React.Component {
    constructor(props)
        {  
            super(props);      
        }

    render() {
      return (
      <div className="description">
      <h1>{this.props.title}</h1>
      <div>{this.props.description}</div>
      </div>
      
        )
 
    }
  }

  export default Description;