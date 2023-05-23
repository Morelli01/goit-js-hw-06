const fontSizeControl = document.getElementById('font-size-control');
  const textElement = document.getElementById('text');

  fontSizeControl.addEventListener('input', function (event) {
    const fontSize = event.target.value;
    textElement.style.fontSize = `${fontSize}px`;
  });