const elements = document.querySelectorAll('.projectsText');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.9
}
const callbacks = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('transitionUp');
    }
  });
}
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
  observer.observe(element);
});