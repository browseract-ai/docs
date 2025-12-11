const script = document.createElement("script");
script.async = true;
script.src = "https://www.googletagmanager.com/gtag/js?id=G-W8NYCM9J41";
document.head.appendChild(script);

// 初始化 GA4
script.onload = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag("js", new Date());
  gtag("config", "G-W8NYCM9J41");
};