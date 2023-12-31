var seenTransition = false;

const elements = document.querySelectorAll('.emailText, .copyButton');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.9
}
const callbacks = (entries) => {
  entries.forEach(entry => {
    if(!seenTransition && entry.isIntersecting && entry.target == document.getElementById('copyButton')) {
      seenTransition = true;
      entry.target.classList.add('transition');
    } else if (entry.isIntersecting && entry.target != document.getElementById('copyButton')){
      entry.target.classList.add('transition');
    }
  });
}
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
  observer.observe(element);
});

const button = document.getElementById('copyButton');
button.addEventListener('animationend', () => {
  button.classList.remove('transition');
  button.classList.add('opacity');
});

function copyEmail() {

  var email = "thejacobexpress@gmail.com";

  navigator.clipboard.writeText(email);

  alert("Copied email from The Jacob Express");

}