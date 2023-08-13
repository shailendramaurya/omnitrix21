function typeWriterEffect(element, text, speed = 70) {
  let i = 0;
  const typing = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
      speed--;
    }
  };
  typing();
}

const element = typing.firstElementChild.firstElementChild;
const text = "Welcome to ElectroKernel for Sweet.\nBy Team Electro";
typeWriterEffect(element, text);