function EqualizeHeight(selector) {
  const projectElements = document.querySelectorAll(selector);
  let maxHeight = 0;

  projectElements.forEach(element => {
    element.style.height = 'auto';
    if (element.offsetHeight > maxHeight) {
      maxHeight = element.offsetHeight;
    }
  });

  projectElements.forEach(element => {
    element.style.height = maxHeight + 'px';
  });
}

window.addEventListener('load', async () => {
  EqualizeHeight(".equalize-height");
});
