import React from "react";

class Detail extends React.Component{
  componentDidMount(){
    console.log(this.props);
    const { history, location } = this.props;
    
    if(location.state === undefined){
      history.push("/");
    }
  }

  render(){
    return <span>hello</span>;
  }
} 

export default Detail;
