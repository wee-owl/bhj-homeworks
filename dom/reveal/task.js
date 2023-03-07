const revealBlocks = document.querySelectorAll('.reveal');
const viewBlocks = (reveal) => {
  window.addEventListener('scroll', () => {
    const { innerHeight } = window;
    const { top } = reveal.getBoundingClientRect();
    if (top < innerHeight && top > 0) {
      reveal.classList.add("reveal_active");
    } else {
      reveal.classList.remove("reveal_active");
    }
  });
};
revealBlocks.forEach(reveal => viewBlocks(reveal));