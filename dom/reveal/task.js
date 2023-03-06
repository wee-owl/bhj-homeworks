const revealBlocks = document.querySelectorAll('.reveal');

const viewBlocks = (block) => {
  window.addEventListener('scroll', () => {
    let top = block.getBoundingClientRect().top;
    let windowLeftBottom = document.documentElement.clientHeight;

    top <= windowLeftBottom ? 
      block.classList.add('reveal_active') : 
      block.classList.remove('reveal_active');
  });
};

revealBlocks.forEach(reveal => viewBlocks(reveal));