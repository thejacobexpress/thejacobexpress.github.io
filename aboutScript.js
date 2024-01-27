// const b = document.body;

// b.classList.add("noScroll");

// const scrollText = document.getElementById("scrollText");

// const attribute1 = document.getElementById("attribute1");
// const attribute2 = document.getElementById("attribute2");
// const attribute3 = document.getElementById("attribute3");

// const attributes = [attribute1, attribute2, attribute3];

// var selectedAttribute = attribute1;

// var isAnimationPlaying = false;

// function animationStoppedPlaying() {
//     isAnimationPlaying = false;
// }

// function scrollDown() {
//     if(!isAnimationPlaying) {
//         for(var i = 0; i < attributes.length; i++) {
//             if(selectedAttribute == attributes[i] && selectedAttribute != attributes[attributes.length-1]) {
//                 selectedAttribute.classList = [];
//                 selectedAttribute.classList.add("transitionOutToUp");
//                 attributes[i+1].classList = [];
//                 attributes[i+1].classList.add("transitionInFromUp");
                
//                 selectedAttribute = attributes[i+1];

//                 isAnimationPlaying = true;

//                 setTimeout(function() {
//                     animationStoppedPlaying();
//                 }, 1000);

//                 break;
//             } else if(selectedAttribute == attributes[attributes.length-1]) {
//                 b.classList.remove("noScroll");
//                 break;
//             }
//         }
//     }
// }

// function scrollUp() {
//     if(!isAnimationPlaying) {
//         for(var i = 0; i < attributes.length; i++) {
//             if(selectedAttribute == attributes[i] && selectedAttribute != attributes[0] && window.scrollY == 0.0) {
//                 selectedAttribute.classList = [];
//                 selectedAttribute.classList.add("transitionOutToDown");
//                 attributes[i-1].classList = [];
//                 attributes[i-1].classList.add("transitionInFromDown");
    
//                 selectedAttribute = attributes[i-1];

//                 isAnimationPlaying = true;

//                 setTimeout(function() {
//                     animationStoppedPlaying();
//                 }, 1000);

//                 break;
//             } else if(window.scrollY == 0.0) {
//                 b.classList.add("noScroll");
//             } else if(selectedAttribute != attributes[attributes.length-1]) {
//                 b.classList.remove("noScroll");
//                 break;
//             }
//         }
//     }
// }

// var scrollTotal = 0;

// function scrolling(event) {
//     var deltaY = event.deltaY;
//     var direction = Math.sign(deltaY);
//     var amount = Math.abs(deltaY);

//     if(direction > 0) {
//         console.log("Scrolling down by " + amount);
//         scrollTotal += amount;
//         scrollDown();
//     }

//     if(direction < 0) {
//         console.log("Scrolling up by " + amount);
//         scrollUp();
//     }

// }

// const interval = setInterval(function() {
//     if(scrollTotal == 0 && selectedAttribute != attributes[attributes.length-1]) {
//         scrollText.classList = [];
//         scrollText.offsetHeight;
//         scrollText.classList.add("scrollBump");
//     }
//     scrollTotal = 0;
// }, 5000);

// window.addEventListener("wheel", scrolling);