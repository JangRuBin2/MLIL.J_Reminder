import React from "react";
import CommonBtn from "../btn/commonBtn";
const createContent = () : JSX.Element => {

  return (
  <><h2>추가할 내용을 작성해주세요.</h2>
  <div id="content_area">
  <input type="text" placeholder='소제목 입력란' />
  <input type="text" placeholder='내용 입력란' />
  </div>
  <CommonBtn/></>
  );
}

export default createContent;