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
    const { location } = this.props;
    if(location.state === undefined){
      return null;
    }else{
    return <span>{location.state.title}</span>;
    }
  }
} 

export default Detail;
