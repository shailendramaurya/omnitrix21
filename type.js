// type.js

function typeWriterEffect(element, text, speed = 70) {
  let i = 0;
  const typing = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  };
  typing();
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('.typing-heading');
  const text = "Welcome to ElectroKernel for Sweet.\nBy Team Electro";
  typeWriterEffect(subHeading, subText, 100); // Adjust the speed as needed
});
