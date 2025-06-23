document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  let scrolledToBottom = false;

  // show the button once you hit the bottom of the page
  window.addEventListener('scroll', () => {
      if(window.innerHeight + window.pageYOffset >=
      document.documentElement.scrollHeight - 5)
      {
        scrolledToBottom = true;
      }
      else if((window.pageYOffset + window.innerHeight / 2) <
      (document.documentElement.scrollHeight / 2))
      {
        scrolledToBottom = false;
      }
    btn.classList.toggle('show', scrolledToBottom);
  });

  // smooth scroll back to top on click
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
