document.addEventListener("DOMContentLoaded", () => {
    const textContainer = document.getElementById("animated-text");
    const text = textContainer.textContent;
    textContainer.textContent = ""; // Clear the container's text content

    [...text].forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter; // Add each letter inside a <span>
        span.style.animationDelay = `${index * 0.1}s`; // Delay each letter's animation
        textContainer.appendChild(span);
    });
});