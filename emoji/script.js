document.addEventListener("mousemove", (event) => {
  const eyes = [document.getElementById("eye-left"), document.getElementById("eye-right")];
  
  eyes.forEach((eye) => {
    const eyeBox = eye.getBoundingClientRect();
    const centerX = eyeBox.left + eyeBox.width / 2;
    const centerY = eyeBox.top + eyeBox.height / 2;

    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;

    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(10, Math.hypot(deltaX, deltaY) / 10); // limit movement

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    eye.style.transform = `translate(${x}px, ${y}px)`;
  });
});
