document.addEventListener('DOMContentLoaded', function() {
    NProgress.configure({ showSpinner: false }); // 隐藏旋转图标

    // 监听所有链接点击
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function(e) {
        if (this.href && !this.target && !this.hash) {
          e.preventDefault();
          NProgress.start(); // 开始加载进度
          setTimeout(() => {
            window.location.href = this.href;
          }, 500);
        }
      });
    });

    // 页面加载完成后关闭进度条
    window.addEventListener('load', function() {
      NProgress.done();
    });

    // 处理跳转前逻辑
    window.addEventListener('beforeunload', function() {
      NProgress.start();
    });
  });