import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
const KakaoLogin = () : JSX.Element => {
  useEffect(()=> {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Kakao 스크립트 로드 완료 후 초기화
      kakao.init('YOUR_KAKAO_APP_KEY'); // 발급받은 Kakao 앱 키를 사용합니다.
      console.log(Kakao.isInitialized()); // SDK 초기화 여부 판단
    };
  },[])
  function KaKao() {
    
  }
  return (<div onClick={KaKao}>
    <Helmet>
        <script src="https://developers.kakao.com/sdk/js/kakao.js" async></script>
      </Helmet>
    <span>카카오 로그인</span>
  </div>)
};

export default KakaoLogin;