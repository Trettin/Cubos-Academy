import React from "react";

const Input = React.forwardRef((props, ref) => (
  <input
    type={props.type}
    id={props.id}
    ref={ref}
    name={props.name}
    onChange={props.onChange}
    onBlur={props.onBlur}
  />
));

export default Input;
