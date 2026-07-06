document.addEventListener('click', function (event) {
  const wrapButton = event.target.closest('.wrap-button');
  const copyButton = event.target.closest('.copy-button');

  if (wrapButton) {
    const codeBlock = wrapButton.closest('.code-block');

    if (!codeBlock) {
      return;
    }

    const isWrapped = codeBlock.classList.toggle('is-wrapped');
    wrapButton.setAttribute('aria-pressed', String(isWrapped));
    wrapButton.setAttribute('title', isWrapped ? 'Disable code wrap' : 'Enable code wrap');
    wrapButton.setAttribute('aria-label', isWrapped ? 'Disable code wrap' : 'Enable code wrap');
    return;
  }

  if (copyButton) {
    const codeBlock = copyButton.closest('.code-block');
    const codeElement = codeBlock && codeBlock.querySelector('code');
    const copyIcon = copyButton.querySelector('i');

    if (!codeElement || !copyIcon) {
      return;
    }

    clearTimeout(copyButton.copyResetTimer);
    copyIcon.classList.remove('fa-copy', 'fa-check', 'fa-triangle-exclamation');
    copyIcon.classList.add('fa-spinner', 'fa-spin');
    copyButton.setAttribute('title', 'Copying...');
    copyButton.setAttribute('aria-label', 'Copying...');

    const resetCopyButton = () => {
      copyButton.copyResetTimer = setTimeout(() => {
        copyIcon.classList.remove('fa-check', 'fa-triangle-exclamation', 'fa-spinner', 'fa-spin');
        copyIcon.classList.add('fa-copy');
        copyButton.setAttribute('title', 'Copy');
        copyButton.setAttribute('aria-label', 'Copy code');
      }, 3000);
    };

    navigator.clipboard.writeText(codeElement.innerText).then(() => {
      copyIcon.classList.remove('fa-spinner', 'fa-spin');
      copyIcon.classList.add('fa-check');
      copyButton.setAttribute('title', 'Copied!');
      copyButton.setAttribute('aria-label', 'Copied!');
      resetCopyButton();
    }).catch((err) => {
      console.error('Failed to copy: ', err);
      copyIcon.classList.remove('fa-spinner', 'fa-spin');
      copyIcon.classList.add('fa-triangle-exclamation');
      copyButton.setAttribute('title', 'Copy failed');
      copyButton.setAttribute('aria-label', 'Copy failed');
      resetCopyButton();
    });
  }
});
