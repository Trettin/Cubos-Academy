import React from "react";

const TextArea = React.forwardRef((props, ref) => (
  <textarea
    id={props.id}
    ref={ref}
    name={props.name}
    onChange={props.onChange}
    onBlur={props.onBlur}
  />
));

export default TextArea;
