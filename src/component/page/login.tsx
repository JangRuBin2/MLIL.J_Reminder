import React from "react";
import KakaoLogin from '../service/kakaoLogin';
const LoginPage = () : JSX.Element => {
  return (<>
  <div>
    <h2>로그인</h2>
    <KakaoLogin />
  </div>
  </>)
}
export default LoginPage;
