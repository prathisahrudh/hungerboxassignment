import React from "react";
import CardContent from "./CardContent";

const Card = ( props ) => {
  console.log('Inside');
  console.log(props.data.name);
  return <CardContent data={props.data} />;
};

export default Card;
