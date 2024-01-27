const elements = document.querySelectorAll('.projectsText, .aboutText');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}
const callbacks = (entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('transitionUp');
    }
  });
}
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
  observer.observe(element);
});

const dElements = document.querySelectorAll('.endText');
const dOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}
const dCallbacks = (entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('transitionDown');
    }
  });
}
let dObserver = new IntersectionObserver(dCallbacks, dOptions);
dElements.forEach(element => {
  dObserver.observe(element);
});

const lElements = document.querySelectorAll('.aboutParagraph');
const lOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}
const lCallbacks = (entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('transitionLeft');
    }
  });
}
let lObserver = new IntersectionObserver(lCallbacks, lOptions);
lElements.forEach(element => {
  lObserver.observe(element);
});

const rElements = document.querySelectorAll('.aboutImage');
const rOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}
const rCallbacks = (entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('transitionRight');
    }
  });
}
let rObserver = new IntersectionObserver(rCallbacks, rOptions);
rElements.forEach(element => {
  rObserver.observe(element);
});