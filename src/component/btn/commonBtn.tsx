import React, { useState } from "react";

const CommonBtn = () : JSX.Element => {
  const [btnState, setBtnState] = useState('다음');
  function btnChange() {
    setBtnState('저장');
  }
  return (<button onClick={btnChange}>{btnState}</button>)
}
export default CommonBtn;