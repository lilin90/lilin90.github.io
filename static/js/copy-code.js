document.addEventListener('DOMContentLoaded', function () {
  const codeBlocks = document.querySelectorAll('.code-block');

  codeBlocks.forEach((codeBlock) => {
    const code = codeBlock.querySelector('code').innerText;
    const copyButton = codeBlock.querySelector('.copy-button');
    const copyIcon = copyButton.querySelector('i'); // 获取图标元素

    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(code).then(() => {
        // 切换图标和提示文字
        copyIcon.classList.remove('fa-copy'); // 移除复制图标
        copyIcon.classList.add('fa-check'); // 添加对号图标
        copyButton.setAttribute('title', 'Copied!'); // 更新提示文字
        //copyButton.textContent = 'Copied!';
        setTimeout(() => {
          copyIcon.classList.remove('fa-check'); // 移除对号图标
          copyIcon.classList.add('fa-copy'); // 恢复复制图标
          copyButton.setAttribute('title', 'Copy'); // 恢复提示文字
          //copyButton.textContent = 'Copy';
        }, 4000);
      }).catch((err) => {
        console.error('Failed to copy: ', err);
      });
    });
  });
});
