window.addEventListener('load', initView);

function initView() {
  const btnKakaoLogin = document.getElementById('btn_kakao_login');
  btnKakaoLogin.addEventListener('click', login);
}

function login() {
  Kakao.Auth.login({
    success: function(authObj) {
      const {
        access_token,
        expires_in,
        refresh_token,
        refresh_token_expires_in,
        scope,
        token_type
      } = authObj;
      console.log(authObj);
      window.location.href = '';
    },
    fail: function(err) {
      console.log(err);
    },
  });
}
