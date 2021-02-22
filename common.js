const JAVASCRIPT_SDK_APP_KEY = 'Your Key Here';

window.addEventListener('load', init);

function init() {
  console.log('init');
  Kakao.init(JAVASCRIPT_SDK_APP_KEY);
  console.log(Kakao.isInitialized());

  console.log(window.location.pathname)
  if (isLoggedin()) {
    if (window.location.pathname !== '/profile') {
      window.location.pathname = '/profile';
    }
  } else {
    if (window.location.pathname !== '/') {
      window.location.pathname = '/';
    }
  }
}

function isLoggedin() {
  return Boolean(Kakao.Auth.getAccessToken());
}