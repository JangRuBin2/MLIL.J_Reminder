import React from "react";
import CommonBtn from "../btn/commonBtn";
const createTitle = () : JSX.Element => {
  return (
  <><h2>리마인더의 제목을 작성해주세요.</h2><input type="text" placeholder='제목 입력란'/><CommonBtn/></>
  );
}

export default createTitle;