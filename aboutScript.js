const b = document.body;

//Title Section Variables
const scrollText = document.getElementById("scrollText");

const attribute1 = document.getElementById("attribute1");
const attribute2 = document.getElementById("attribute2");
const attribute3 = document.getElementById("attribute3");

const image1 = document.getElementById("image1");
// const image2 = document.getElementById("image2");
// const image3 = document.getElementById("image3");
// const image4 = document.getElementById("image4");

const attributes = [attribute1, attribute2, attribute3];
// const images = [image1, image2, image3, image4];

var selectedAttribute = attribute1;
// var selectedImage = image1;

var isAnimationPlaying = false;


//MeetTheProgrammer Section Variables
const meetTheProgrammerDiv = document.getElementById("meetTheProgrammerDiv");
const meetTheStudentDiv = document.getElementById("meetTheStudentDiv");
const meetTheLeaderDiv = document.getElementById("meetTheLeaderDiv");
const roboticsImgDiv = document.getElementById("roboticsImgDiv");

const programmerSectionContainer = document.getElementById("programmerSectionContainer");
const studentSectionContainer = document.getElementById("studentSectionContainer");
const leaderSectionContainer = document.getElementById("leaderSectionContainer");


b.classList.add("noScroll");

function animationStoppedPlaying() {
    isAnimationPlaying = false;
}

function scrollDown() {
    if(!isAnimationPlaying) {
        for(var i = 0; i < attributes.length; i++) {
            if(selectedAttribute == attributes[i] && selectedAttribute != attributes[attributes.length-1]) {

                selectedAttribute.classList = [];
                selectedAttribute.classList.add("transitionOutToUp");
                attributes[i+1].classList = [];
                attributes[i+1].classList.add("transitionInFromDown");

                // selectedImage.classList = [];
                // selectedImage.classList.add("imageTransitionOutToUp");
                // images[i+1].classList = [];
                // images[i+1].classList.add("imageTransitionInFromUp");
                
                selectedAttribute = attributes[i+1];
                // selectedImage = images[i+1];

                isAnimationPlaying = true;

                setTimeout(function() {
                    animationStoppedPlaying();
                }, 1000);
                
                break;

            } else if(selectedAttribute == attributes[attributes.length-1]) {
                b.classList.remove("noScroll");
                break;
            }
        }
    }
}

function scrollUp() {
    if(!isAnimationPlaying) {
        for(var i = 0; i < attributes.length; i++) {
            if(selectedAttribute == attributes[i] && selectedAttribute != attributes[0] && window.scrollY == 0.0) {

                selectedAttribute.classList = [];
                selectedAttribute.classList.add("transitionOutToDown");
                attributes[i-1].classList = [];
                attributes[i-1].classList.add("transitionInFromUpAttribute");

                // selectedImage.classList = [];
                // selectedImage.classList.add("imageTransitionOutToDown");
                // images[i-1].classList = [];
                // images[i-1].classList.add("imageTransitionInFromDown");
    
                selectedAttribute = attributes[i-1];
                // selectedImage = images[i-1];

                isAnimationPlaying = true;

                setTimeout(function() {
                    animationStoppedPlaying();
                }, 1000);

                break;
            } else if(window.scrollY == 0.0) {
                b.classList.add("noScroll");
            } else if(selectedAttribute != attributes[attributes.length-1]) {
                b.classList.remove("noScroll");
                break;
            }
        }
    }
}

const navbar = document.getElementById("navbar");
const titleContainerContainer = document.getElementById("titleContainerContainer");
const schoolsDiv = document.getElementById("schoolsDiv");
const roboticsDiv = document.getElementById("roboticsDiv");
const roboticsIntroDiv = document.getElementById("roboticsIntroDiv");
const roboticsIntroText = document.getElementById("roboticsIntroText")
const tahomaLogoTextDiv = document.getElementById("tahomaLogoTextDiv");
const roboticsImg = document.getElementById("roboticsImg");
const tahomaTSAScrollingDiv = document.getElementById("tahomaTSAScrollingDiv");
const tahomaTSAContainer = document.getElementById("tahomaTSAContainer");
const tahomaTSALowerImageDiv1 = document.getElementById("tahomaTSALowerImageDiv1");
const tahomaTSALowerImageDiv2 = document.getElementById("tahomaTSALowerImageDiv2");
const tahomaTSALowerImageDiv3 = document.getElementById("tahomaTSALowerImageDiv3");
const scrollButtonsDiv = document.getElementById("scrollButtonsDiv");
const tahomaTSATextDiv = document.getElementById("tahomaTSATextDiv");
const tahomaTSARowsContainer = document.getElementById("tahomaTSARowsContainer");
const leaderImproveDiv = document.getElementById("leaderImproveDiv");
const dedicationDiv = document.getElementById("dedicationDiv");

//Also used in the sliding image leader section
const tahomaTSAImageDiv1 = document.getElementById("tahomaTSAImageDiv1");
const tahomaTSAImageDiv2 = document.getElementById("tahomaTSAImageDiv2");
const tahomaTSAImageDiv3 = document.getElementById("tahomaTSAImageDiv3");

function stickSectionTitleDivs() {

    if(window.scrollY >= this.window.innerHeight) {
        meetTheProgrammerDiv.style.position = "absolute";
        meetTheProgrammerDiv.style.transform = "translateY(" + (this.window.innerHeight - 30) + "px)";
    } else {
        meetTheProgrammerDiv.style.opacity = 1;
        meetTheProgrammerDiv.style.position = "fixed";
        meetTheProgrammerDiv.style.transform = "translateY(-30px)";
    }

    if(window.scrollY >= this.window.innerHeight + programmerSectionContainer.offsetHeight + (parseInt(studentSectionContainer.style.marginTop))) {
        meetTheStudentDiv.style.position = "absolute";
        meetTheStudentDiv.style.transform = "translateY(" + (this.window.innerHeight + programmerSectionContainer.offsetHeight + parseInt(studentSectionContainer.style.marginTop) - 30) + "px)";
    } else if(window.scrollY >= this.window.innerHeight + programmerSectionContainer.offsetHeight) {
        meetTheStudentDiv.style.opacity = 1;
        meetTheStudentDiv.style.position = "fixed";
        meetTheStudentDiv.style.transform = "translateY(-30px)";
    } else {
        meetTheStudentDiv.style.opacity = 0;
    }

    if(window.scrollY >= navbar.offsetHeight + titleContainerContainer.offsetHeight + programmerSectionContainer.offsetHeight + 
      parseInt(window.getComputedStyle(programmerSectionContainer).marginTop) + parseInt(window.getComputedStyle(studentSectionContainer).
      marginTop) + schoolsDiv.offsetHeight + parseInt(window.getComputedStyle(roboticsDiv).marginTop) + roboticsIntroDiv.offsetHeight + 
      roboticsImgDiv.offsetHeight/2 - this.window.innerHeight/2 + parseInt(window.getComputedStyle(tahomaLogoTextDiv).marginTop) - 
      roboticsImgDiv.offsetHeight) {
        roboticsImgDiv.style.position = "absolute";
        roboticsImgDiv.style.top = roboticsIntroDiv.offsetHeight + parseInt(window.getComputedStyle(tahomaLogoTextDiv).marginTop) - 
        roboticsImgDiv.offsetHeight/2 + "px";

    } else if(window.scrollY >= navbar.offsetHeight + titleContainerContainer.offsetHeight + programmerSectionContainer.offsetHeight + 
      parseInt(window.getComputedStyle(programmerSectionContainer).marginTop) + parseInt(window.getComputedStyle(studentSectionContainer).
      marginTop) + schoolsDiv.offsetHeight + parseInt(window.getComputedStyle(roboticsDiv).marginTop) + roboticsIntroDiv.offsetHeight + 
      parseInt(window.getComputedStyle(roboticsIntroText).marginBottom) + roboticsImgDiv.offsetHeight/2 - this.window.innerHeight/2) {
        var blurValue = 20/(Math.min((window.scrollY - (this.window.innerHeight + programmerSectionContainer.offsetHeight + 
          parseInt(window.getComputedStyle(programmerSectionContainer).marginTop) + parseInt(window.getComputedStyle(studentSectionContainer).
          marginTop) + schoolsDiv.offsetHeight + parseInt(window.getComputedStyle(roboticsDiv).marginTop) + roboticsIntroDiv.offsetHeight + 
          parseInt(window.getComputedStyle(roboticsIntroText).marginBottom) + roboticsImgDiv.offsetHeight/2 - this.window.innerHeight/2))/44.5, 20));
        if(blurValue > 20) {
          blurValue = 20;
        } else if(blurValue < 1.1) {
          blurValue = 0;
        }
        roboticsImg.style.filter = "blur(" + blurValue + "px)";

        roboticsImgDiv.style.top = "50%";
        roboticsImgDiv.style.position = "fixed";
        roboticsImgDiv.style.transform = "translateY(" + (-roboticsImgDiv.offsetHeight/2) + "px)";

    } else {
        roboticsImgDiv.style.position = "absolute";
        roboticsImgDiv.style.top = roboticsIntroDiv.offsetHeight + 70 + "px";
        roboticsImgDiv.style.transform = "translateY(0px)";
    }

    if(window.scrollY >= this.window.innerHeight + parseInt(programmerSectionContainer.style.marginTop) 
        + programmerSectionContainer.offsetHeight + parseInt(studentSectionContainer.style.marginTop) + 
        studentSectionContainer.offsetHeight) {
        meetTheLeaderDiv.style.position = "absolute";
        meetTheLeaderDiv.style.transform = "translateY(" + (this.window.innerHeight + parseInt(programmerSectionContainer.style.marginTop) 
        + programmerSectionContainer.offsetHeight + parseInt(studentSectionContainer.style.marginTop) + 
        studentSectionContainer.offsetHeight - 30) + "px)";
    } else if(window.scrollY >= this.window.innerHeight + parseInt(programmerSectionContainer.style.marginTop) + 
        programmerSectionContainer.offsetHeight + studentSectionContainer.offsetHeight - 30) {
        meetTheLeaderDiv.style.opacity = 1;
        meetTheLeaderDiv.style.position = "fixed";
        meetTheLeaderDiv.style.transform = "translateY(-30px)";
    } else {
        meetTheLeaderDiv.style.opacity = 0; 
    }

    // Resizing divs for leaderSectionContainer and tahomaTSAContainer:

    tahomaTSAScrollingDiv.style.height = (Math.max(tahomaTSALowerImageDiv1.offsetHeight, tahomaTSALowerImageDiv2.offsetHeight, 
    tahomaTSALowerImageDiv3.offsetHeight) + "px");
    // tahomaTSALowerImageDiv1.style.bottom = (-(tahomaTSAScrollingDiv.style.height - tahomaTSALowerImageDiv1.style.height)) + "px";
    tahomaTSAContainer.style.height = tahomaTSAScrollingDiv.offsetHeight + scrollButtonsDiv.offsetHeight + 
    parseInt(scrollButtonsDiv.style.marginBottom) + tahomaTSATextDiv.offsetHeight + tahomaTSARowsContainer.offsetHeight + "px"/* + margin that comes before rows of pictures/descriptions + height of rows of pictures/descriptions*/;
    leaderSectionContainer.style.height = tahomaTSAContainer.offsetHeight + leaderImproveDiv.offsetHeight + "px"; /*just equals tahomaTSAContainer height FOR NOW. If more is added on, this needs to be changed.*/

    // End of Resizing divs for leaderSectionContainer and tahomaTSAContainer:

    programmerSectionContainer.style.marginTop = this.window.innerHeight + "px";
    studentSectionContainer.style.marginTop = this.window.innerHeight + "px";
    if(window.innerWidth <= 410) {
        dedicationDiv.style.height = "840px";
    } else if(window.innerWidth <= 564) {
        dedicationDiv.style.height = "750px";
    } else if(window.innerWidth <= 573) {
        dedicationDiv.style.height = "670px";
    } else if(window.innerWidth <= 669) {
        dedicationDiv.style.height = "580px";
    } else if(window.innerWidth <= 879) {
        dedicationDiv.style.height = "500px";
    } else if(window.innerWidth <= 1009) {
        dedicationDiv.style.height = "420px";
    } else if(window.innerWidth <= 1122) {
        dedicationDiv.style.height = "340px";
        console.log("SIZE CHANGED")
    } else if(window.innerWidth <= 1705) {
        dedicationDiv.style.height = "250px";
    }

    leaderSectionContainer.style.marginTop = this.window.innerHeight + "px";

}
window.addEventListener("scroll", stickSectionTitleDivs);
window.addEventListener("resize", stickSectionTitleDivs);

tahomaTSAScrollingDiv.style.height = (Math.max(tahomaTSALowerImageDiv1.offsetHeight, tahomaTSALowerImageDiv2.offsetHeight, 
tahomaTSALowerImageDiv3.offsetHeight) + "px");
tahomaTSAContainer.style.height = tahomaTSAScrollingDiv.offsetHeight + scrollButtonsDiv.offsetHeight + 
parseInt(scrollButtonsDiv.style.marginBottom) + tahomaTSATextDiv.offsetHeight + tahomaTSARowsContainer.offsetHeight + "px"/* + margin that comes before rows of pictures/descriptions + height of rows of pictures/descriptions*/;
leaderSectionContainer.style.height = tahomaTSAContainer.offsetHeight + leaderImproveDiv.offsetHeight + parseInt(leaderImproveDiv.marginBottom) + "px"; /*just equals tahomaTSAContainer height FOR NOW. If more is added on, this needs to be changed.*/



// function scrolling(event, changeY) {
//     var deltaY = event.deltaY;
//     var direction = Math.sign(deltaY);
//     var amount = Math.abs(deltaY);

//     if(direction > 0) {
//         console.log("Scrolling down by " + amount);
//         scrollTotal += amount;
//         scrollDown();

//         console.log(isInViewport(aElements.item(0)));

//         lastScrolledUp = false;
//     }

//     if(direction < 0) {
//         // console.log("Scrolling up by " + amount);
//         // scrollTotal += amount;
//         scrollUp();

//         lastScrolledUp = true;
//     }

// }

var lastScrolledUp = false;

var lastScrollTop = 0;
function scrollingMouse(event) {
    var deltaY = event.deltaY;
    var direction = Math.sign(deltaY);
    var amount = Math.abs(deltaY);

    if(deltaY == null) {
        // console.log("null");
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            // console.log("Scrolling down");
            scrollDown();
    
            lastScrolledUp = false;
        } else {
            // console.log("Scrolling up");
            scrollUp();
    
            lastScrolledUp = true;
        }
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling

    } else {
        if(direction > 0) {
            scrollDown();
    
            lastScrolledUp = false;
        }
        if(direction < 0) {
            scrollUp();
    
            lastScrolledUp = true;
        }
    }

}

var scrollTotal = 0;

function scrolling(event) {
    var deltaY = event.deltaY;
    if(deltaY != null) {
        scrollTotal += deltaY;
        console.log(scrollTotal);
    }

    scrollingMouse(event);
}

const interval = setInterval(function() {
    if(scrollTotal == 0 && selectedAttribute != attributes[attributes.length-1]) {
        scrollText.classList = [];
        scrollText.offsetHeight;
        if(window.outerWidth <= 770) {
            scrollText.classList.add("scrollBumpMobile");
        } else {
            scrollText.classList.add("scrollBump");
            scrollTotal = 0;
        }
    }
}, 5000);

const githubButtonDiv = document.getElementById("githubButtonDiv");

window.addEventListener("wheel", scrollingMouse);
window.addEventListener("scroll", (event) => {

    lastKnownScrollPosition = window.scrollY;

});


// Listening events for mobile
var startY;

window.addEventListener("touchstart", function(event) {
    startY = event.touches[0].clientY;
});

window.addEventListener("touchend", function(event) {
    var endY = event.changedTouches[0].clientY;
    if(startY - endY > 1) {
        scrollDown();
    } else {
        scrollUp();
    }
});

// Start of elements entering the screen and gaining animations
//IF YOU ANIMATE ANOTHER ELEMENT YOU MUST ADD THE ELEMENT TO elementList!!!!!!!!! (Around line 900)

/** Does not consider elements that are partially visible to be in the viewport */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom <= window.innerHeight &&
        rect.bottom > element.offsetHeight &&
        rect.top <= window.innerHeight - element.offsetHeight &&
        rect.top > 0
    );
}

/** Considers elements that are partially visible to be in the viewport */
function isInViewportFix(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom <= window.innerHeight + element.offsetHeight &&
        rect.bottom > 0 &&
        rect.top <= window.innerHeight &&
        rect.top > -element.offsetHeight
    );
}

// DONE
var seenEntranceAnimation = [false, false, false, false, false, false];
var isAnimating = [false, false, false, false, false, false];
const elements = document.querySelectorAll('.notAllDiv, .usgStudiosImageDiv, .usgStudiosGroupImageDiv, .moreText, .roboticsContributorText, .roboticsGroupImgDiv');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.9
}
const callbacks = (entries) => {
  entries.forEach(entry => {

    if(entry.isIntersecting && !seenEntranceAnimation[Array.from(elements).findIndex(node => node === entry.target)] &&
    !isAnimating[Array.from(elements).findIndex(node => node === entry.target)]){

        isAnimating[Array.from(elements).findIndex(node => node === entry.target)] = true;

        console.log("normal function!");

        // Animates the element in.
        requestAnimationFrame(() => {
            entry.target.classList.remove('fadeUpReverse');
            requestAnimationFrame(() => {
                entry.target.classList.add('fadeUp');
            });
        });

        // Checks if the user has scrolled up during the element animating in. If they have, the element animates back out.
        setTimeout(function() {
            isAnimating[Array.from(elements).findIndex(node => node === entry.target)] = false;
            seenEntranceAnimation[Array.from(elements).findIndex(node => node === entry.target)] = true;
            if(!isInViewportFix(entry.target) && seenEntranceAnimation[Array.from(elements).findIndex(node => node === entry.target)] && lastScrolledUp) {
                console.log("ViewPort function!");
                seenEntranceAnimation[Array.from(elements).findIndex(node => node === entry.target)] = false;
                requestAnimationFrame(() => {
                    Array.from(elements)[Array.from(elements).findIndex(node => node === entry.target)].classList.remove('fadeUp');
                    requestAnimationFrame(() => {
                        Array.from(elements)[Array.from(elements).findIndex(node => node === entry.target)].classList.add('fadeUpReverse');
                    });
                });
            }
        }, 1000);

        seenEntranceAnimation[Array.from(elements).findIndex(node => node === entry.target)] = true;
    } else if(seenEntranceAnimation[Array.from(elements).findIndex(node => node === entry.target)] && 
    !entry.isIntersecting && !isInViewport(entry.target) && lastScrolledUp) {

        var currentElement = entry.target;

        // Animates the element out.
        requestAnimationFrame(() => {
            entry.target.classList.remove('fadeUp');
            requestAnimationFrame(() => {
                entry.target.classList.add('fadeUpReverse');
            });
            isAnimating[Array.from(elements).findIndex(node => node === entry.target)] = true;
            seenEntranceAnimation[Array.from(elements).findIndex(node => node === entry.target)] = false;
        });

        // Checks if the user has scrolled down while the element was animating out. If they have, the element animates back in.
        setTimeout(function() {
            isAnimating[Array.from(elements).findIndex(node => node === currentElement)] = false;

            console.log(isPastElement(currentElement) + " " + !seenEntranceAnimation[Array.from(elements).findIndex(node => node === currentElement)]);
            if(isPastElement(currentElement) && !seenEntranceAnimation[Array.from(elements).findIndex(node => node === currentElement)]) {
                console.log("ViewPort function!");
                seenEntranceAnimation[Array.from(elements).findIndex(node => node === currentElement)] = true;
                requestAnimationFrame(() => {
                    Array.from(elements)[Array.from(elements).findIndex(node => node === currentElement)].classList.remove('fadeUpReverse');
                    requestAnimationFrame(() => {
                        Array.from(elements)[Array.from(elements).findIndex(node => node === currentElement)].classList.add('fadeUp');
                    });
                });
            }
        }, 1000);

    }
  });
}
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
  observer.observe(element);
});

// DONE
var aSeenEntranceAnimation = false;
var aIsAnimating = false;
const aElements = document.querySelectorAll('.usgStudiosImageTextDiv');
const aOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.9
}
const aCallbacks = (entries) => {
  entries.forEach(entry => {
    // console.log(aSeenEntranceAnimation + " " + !entry.isIntersecting + " " + isInViewport(entry.target) + " " + lastScrolledUp);
    if(entry.isIntersecting && !aSeenEntranceAnimation && !aIsAnimating){

        requestAnimationFrame(() => {
            entry.target.classList.remove('fadeInReverse');
            requestAnimationFrame(() => {
                entry.target.classList.add('fadeIn');
            });
        });
        
        aSeenEntranceAnimation = true;
    } else if(aSeenEntranceAnimation && !entry.isIntersecting && !isInViewport(entry.target) && lastScrolledUp) {
        aSeenEntranceAnimation = false;

        console.log("reverse animation!")

        requestAnimationFrame(() => {
            entry.target.classList.remove('fadeIn');
            requestAnimationFrame(() => {
                entry.target.classList.add('fadeInReverse');
                aIsAnimating = true;
                aSeenEntranceAnimation = false;
            });

        });

        setTimeout(function() {
            aIsAnimating = false;
            if(isPastElement(entry.target) && !aSeenEntranceAnimation) {
                console.log("ViewPort function!");
                requestAnimationFrame(() => {
                    Array.from(aElements)[0].classList.remove('fadeInReverse');
                    requestAnimationFrame(() => {
                        Array.from(aElements)[0].classList.add('fadeIn');
                    });
                });
            }
        }, 1000);

    }
  });
}
let aObserver = new IntersectionObserver(aCallbacks, aOptions);
aElements.forEach(element => {
    aObserver.observe(element);
});

// DONE
var bSeenEntranceAnimation = [false, false, false, false];
var bIsAnimating = [false, false, false, false];
const bElements = document.querySelectorAll('.githubButton, .githubButtonDiv, .moreThanText, .moreThanDiv'); // 0 = githubButtonDiv, 1 = githubButton, 2 = moreThanDiv, 3 = moreThanText
const bOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.9
}
const bCallbacks = (entries) => {
  entries.forEach(entry => {

    if((entry.target == Array.from(bElements)[0] || entry.target == Array.from(bElements)[2]) && entry.isIntersecting && 
    !bSeenEntranceAnimation[Array.from(bElements).findIndex(node => node === entry.target)] && 
    !bIsAnimating[Array.from(bElements).findIndex(node => node === entry.target)]){

        bIsAnimating[Array.from(bElements).findIndex(node => node === entry.target)] = true;

        console.log("normal function!");

        requestAnimationFrame(() => {
            if(entry.target == Array.from(bElements)[0]) {
                Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target) + 1].classList.remove('transitionInFromUpButtonReverse');
                Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target)].classList.remove('transitionInFromUp');
            } else {
                Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target) + 1].classList.remove('transitionInFromUpMoreThanReverse');
                Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target)].classList.remove('transitionInFromUp');
            }
            requestAnimationFrame(() => {
                Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target)].classList.add('transitionInFromUp');
            });
        });

        setTimeout(function() {
            bIsAnimating[Array.from(bElements).findIndex(node => node === entry.target)] = false;
            bSeenEntranceAnimation[Array.from(bElements).findIndex(node => node === entry.target)] = true;
            if(!isInViewportFix(entry.target) && bSeenEntranceAnimation[Array.from(bElements).findIndex(node => node === entry.target)] && 
            lastScrolledUp) {
                console.log("ViewPort function!");
                bSeenEntranceAnimation[Array.from(bElements).findIndex(node => node === entry.target)] = false;
                requestAnimationFrame(() => {
                    Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target)].classList.remove('transitionInFromUp');
                    requestAnimationFrame(() => {
                        if(entry.target == Array.from(bElements)[0]) {
                            Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target) + 1].classList.add('transitionInFromUpButtonReverse');
                        } else {
                            Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target) + 1].classList.add('transitionInFromUpMoreThanReverse');
                        }
                    });
                });
            }
        }, 1000);

    } else if((entry.target == Array.from(bElements)[0] || entry.target == Array.from(bElements)[2]) && 
    bSeenEntranceAnimation[Array.from(bElements).findIndex(node => node === entry.target)] && !entry.isIntersecting && 
    !isInViewport(entry.target) && lastScrolledUp) {

        requestAnimationFrame(() => {
            if(entry.target == Array.from(bElements)[0]) {
                // Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target)].classList.remove('transitionInFromUp');
                requestAnimationFrame(() => {
                    Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target) + 1].classList.add('transitionInFromUpButtonReverse');
                })
            } else {
                // Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target)].classList.remove('transitionInFromUp');
                requestAnimationFrame(() => {
                    Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target) + 1].classList.add('transitionInFromUpMoreThanReverse');
                })
            }
            bIsAnimating[Array.from(bElements).findIndex(node => node === entry.target)] = true;
            bSeenEntranceAnimation[Array.from(bElements).findIndex(node => node === entry.target)] = false;
        })

        setTimeout(function() {
            bIsAnimating[Array.from(bElements).findIndex(node => node === entry.target)] = false;
            bSeenEntranceAnimation[Array.from(bElements).findIndex(node => node === entry.target)] = false;
            if(isPastElement(entry.target) && isInViewport(entry.target) && !bSeenEntranceAnimation[Array.from(bElements).findIndex(node => node === entry.target)]) {
                console.log("ViewPort function!");
                bIsAnimating[Array.from(bElements).findIndex(node => node === entry.target)] = true;
                bSeenEntranceAnimation[Array.from(bElements).findIndex(node => node === entry.target)] = true;
                requestAnimationFrame(() => {
                    if(entry.target == Array.from(bElements)[0]) {
                        Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target) + 1].classList.remove('transitionInFromUpButtonReverse');
                        Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target)].classList.remove('transitionInFromUp');
                    } else {
                        Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target) + 1].classList.remove('transitionInFromUpMoreThanReverse');
                        Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target)].classList.remove('transitionInFromUp');
                    }
                    requestAnimationFrame(() => {
                        Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target)].classList.add('transitionInFromUp');
                    });
                });
            }
        }, 1000);

    }

  });
}
let bObserver = new IntersectionObserver(bCallbacks, bOptions);
bElements.forEach(element => {
    bObserver.observe(element);
});

// DONE
var cSeenEntranceAnimation = false;
const cElements = document.querySelectorAll('.roboticsInText');
const cOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.9
}
const cCallbacks = (entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting && !cSeenEntranceAnimation){

        requestAnimationFrame(() => {
            entry.target.classList.remove('fadeInDelay15Reverse');
            requestAnimationFrame(() => {
                entry.target.classList.add('fadeInDelay15');
            });
        });

        cSeenEntranceAnimation = true;
    } else if(cSeenEntranceAnimation && !entry.isIntersecting && !isInViewport(entry.target) && lastScrolledUp) {
        cSeenEntranceAnimation = false;

        requestAnimationFrame(() => {
            entry.target.classList.remove('fadeInDelay15');
            requestAnimationFrame(() => {
                entry.target.classList.add('fadeInDelay15Reverse');
            });
        });

    }
  });
}
let cObserver = new IntersectionObserver(cCallbacks, cOptions);
cElements.forEach(element => {
    cObserver.observe(element);
});

// DONE
var dSeenEntranceAnimation = false;
const dElements = document.querySelectorAll('.roboticsTheText');
const dOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.9
}
const dCallbacks = (entries) => {
  entries.forEach(entry => {
    // console.log(dSeenEntranceAnimation + " " + !entry.isIntersecting + " " + isInViewport(entry.target) + " " + lastScrolledUp);
    if(entry.isIntersecting && !dSeenEntranceAnimation){

        requestAnimationFrame(() => {
            entry.target.classList.remove('fadeInDelay3Reverse');
            requestAnimationFrame(() => {
                entry.target.classList.add('fadeInDelay3');
            });
        });

        dSeenEntranceAnimation = true;
    } else if(dSeenEntranceAnimation && !entry.isIntersecting && !isInViewport(entry.target) && lastScrolledUp) {
        dSeenEntranceAnimation = false;

        requestAnimationFrame(() => {
            entry.target.classList.remove('fadeInDelay3');
            requestAnimationFrame(() => {
                entry.target.classList.add('fadeInDelay3Reverse');
            });
        });

    }
  });
}
let dObserver = new IntersectionObserver(dCallbacks, dOptions);
dElements.forEach(element => {
    dObserver.observe(element);
});

// DONE
var eSeenEntranceAnimation = false;
const eElements = document.querySelectorAll('.roboticsWorldText');
const eOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.9
}
const eCallbacks = (entries) => {
  entries.forEach(entry => {
    // console.log(eSeenEntranceAnimation + " " + !entry.isIntersecting + " " + isInViewport(entry.target) + " " + lastScrolledUp);
    if(entry.isIntersecting && !eSeenEntranceAnimation){

        requestAnimationFrame(() => {
            entry.target.classList.remove('fadeInDelay45Reverse');
            requestAnimationFrame(() => {
                entry.target.classList.add('fadeInDelay45');
            });
        });

        eSeenEntranceAnimation = true;
    } else if(eSeenEntranceAnimation && !entry.isIntersecting && !isInViewport(entry.target) && lastScrolledUp) {
        eSeenEntranceAnimation = false;

        requestAnimationFrame(() => {
            entry.target.classList.remove('fadeInDelay45');
            requestAnimationFrame(() => {
                entry.target.classList.add('fadeInDelay45Reverse');
            });
        });

    }
  });
}
let eObserver = new IntersectionObserver(eCallbacks, eOptions);
eElements.forEach(element => {
    eObserver.observe(element);
});

// WAITING
var fSeenEntranceAnimation = [false, false];
var fIsAnimating = [false, false];
const fElements = document.querySelectorAll('.dedicationText, .dedicationDiv'); // 0 = dedicationDiv, 1 = dedicationText
const fOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.9
}
const fCallbacks = (entries) => {
  entries.forEach(entry => {

    if(entry.target == Array.from(fElements)[0] && entry.isIntersecting && 
    !fSeenEntranceAnimation[Array.from(fElements).findIndex(node => node === entry.target)] && 
    !fIsAnimating[Array.from(fElements).findIndex(node => node === entry.target)]){

        console.log("animating in!");

        requestAnimationFrame(() => {
            Array.from(fElements)[Array.from(fElements).findIndex(node => node === entry.target)].classList.remove('fadeUp');
            Array.from(fElements)[Array.from(fElements).findIndex(node => node === entry.target) + 1].classList.remove('fadeUpDedReverse');
            requestAnimationFrame(() => {
                Array.from(fElements)[Array.from(fElements).findIndex(node => node === entry.target)].classList.add('fadeUp'); // may not work because the text is opacity 0
                Array.from(fElements)[Array.from(fElements).findIndex(node => node === entry.target) + 1].classList.add('fadeIn');
                fIsAnimating[Array.from(fElements).findIndex(node => node === entry.target)] = true;
                fSeenEntranceAnimation[Array.from(fElements).findIndex(node => node === entry.target)] = true;
            });
        });

        setTimeout(function() {
            fIsAnimating[Array.from(fElements).findIndex(node => node === entry.target)] = false;
            if(!isInViewport(entry.target) && fSeenEntranceAnimation[Array.from(fElements).findIndex(node => node === entry.target)] 
            && lastScrolledUp) {
                console.log("ViewPort function!");
                fSeenEntranceAnimation[Array.from(fElements).findIndex(node => node === entry.target)] = false;
                requestAnimationFrame(() => {
                    // Array.from(fElements)[Array.from(fElements).findIndex(node => node === entry.target) + 1].classList.remove('fadeUpDed');
                    requestAnimationFrame(() => {
                        Array.from(fElements)[Array.from(fElements).findIndex(node => node === entry.target) + 1].classList.add('fadeUpDedReverse');
                    });
                });
            }
        }, 1000);

        fSeenEntranceAnimation[Array.from(fElements).findIndex(node => node === entry.target)] = true;
    } else if(fSeenEntranceAnimation[Array.from(fElements).findIndex(node => node === entry.target)] && !entry.isIntersecting && 
    !isInViewport(entry.target) && lastScrolledUp) {

        console.log("animating out!");

        requestAnimationFrame(() => {

            // Array.from(fElements)[Array.from(fElements).findIndex(node => node === entry.target) + 1].classList.remove('fadeUpDed');
            Array.from(fElements)[Array.from(fElements).findIndex(node => node === entry.target) + 1].classList.remove('fadeIn');
            //There was a dot right here when I got back to my computer one time.

            requestAnimationFrame(() => {
                Array.from(fElements)[Array.from(fElements).findIndex(node => node === entry.target) + 1].classList.add('fadeUpDedReverse');
                fIsAnimating[Array.from(fElements).findIndex(node => node === entry.target)] = true;
                fSeenEntranceAnimation[Array.from(fElements).findIndex(node => node === entry.target)] = false;
            });

        });

        
        setTimeout(function() {
            console.log(isPastElement(entry.target) + " " + 
        !fSeenEntranceAnimation[Array.from(fElements).findIndex(node => node === entry.target)]);
            fIsAnimating[Array.from(fElements).findIndex(node => node === entry.target)] = false;
            if(isPastElement(entry.target) && !fSeenEntranceAnimation[Array.from(fElements).findIndex(node => node === entry.target)]) {
                console.log("ViewPort function!");
                requestAnimationFrame(() => {
                    // Array.from(fElements)[Array.from(fElements).findIndex(node => node === entry.target) + 1].classList.remove('fadeUpDedReverse');
                    Array.from(fElements)[Array.from(fElements).findIndex(node => node === entry.target)].classList.remove('fadeUp');
                    Array.from(fElements)[Array.from(fElements).findIndex(node => node === entry.target) + 1].classList.remove('fadeUpDedReverse');
                    requestAnimationFrame(() => {
                        Array.from(fElements)[Array.from(fElements).findIndex(node => node === entry.target)].classList.add('fadeUp');
                        Array.from(fElements)[Array.from(fElements).findIndex(node => node === entry.target) + 1].classList.add('fadeIn');
                    });
                });
            }
        }, 1000);

    }
  });
}
let fObserver = new IntersectionObserver(fCallbacks, fOptions);
fElements.forEach(element => {
    fObserver.observe(element);
});

// WAITING
var gSeenEntranceAnimation = [false, false];
var gIsAnimating = [false, false];
const gElements = document.querySelectorAll('.leaderImproveText, .leaderImproveDiv'); // 0 = leaderImproveDiv, 1 = leaderImproveText
const gOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.9
}
const gCallbacks = (entries) => {
  entries.forEach(entry => {

    if(entry.target == Array.from(gElements)[0] && entry.isIntersecting && 
    !gSeenEntranceAnimation[Array.from(gElements).findIndex(node => node === entry.target)] && 
    !gIsAnimating[Array.from(gElements).findIndex(node => node === entry.target)]){

        console.log("normal function!");

        requestAnimationFrame(() => {
            Array.from(gElements)[Array.from(gElements).findIndex(node => node === entry.target) + 1].classList.remove('transitionInFromUpImpReverse');
            Array.from(gElements)[Array.from(gElements).findIndex(node => node === entry.target)].classList.remove('transitionInFromUpImp');
            requestAnimationFrame(() => {
                Array.from(gElements)[Array.from(gElements).findIndex(node => node === entry.target)].classList.add('transitionInFromUpImp');
            });
        });

        gSeenEntranceAnimation[Array.from(gElements).findIndex(node => node === entry.target)] = true;
    } else if(entry.target == Array.from(gElements)[0] && 
    gSeenEntranceAnimation[Array.from(gElements).findIndex(node => node === entry.target)] && !entry.isIntersecting && 
    isInViewport(entry.target) && lastScrolledUp) {

        requestAnimationFrame(() => {
            Array.from(gElements)[Array.from(gElements).findIndex(node => node === entry.target) + 1].classList.add('transitionInFromUpImpReverse');
            gIsAnimating[Array.from(gElements).findIndex(node => node === entry.target)] = true;
            gSeenEntranceAnimation[Array.from(gElements).findIndex(node => node === entry.target)] = false;
        });

        setTimeout(function() {
            gIsAnimating[Array.from(gElements).findIndex(node => node === entry.target)] = false;
            if(isInViewport(entry.target) && !gSeenEntranceAnimation[Array.from(gElements).findIndex(node => node === entry.target)] && 
            !lastScrolledUp) {
                console.log("ViewPort function!");
                requestAnimationFrame(() => {
                    Array.from(gElements)[Array.from(gElements).findIndex(node => node === entry.target) + 1].classList.remove('transitionInFromUpImpReverse');
                    Array.from(gElements)[Array.from(gElements).findIndex(node => node === entry.target)].classList.remove('transitionInFromUpImp');
                    requestAnimationFrame(() => {
                        Array.from(gElements)[Array.from(gElements).findIndex(node => node === entry.target)].classList.add('transitionInFromUpImp');
                    });
                });
            }
        }, 1000);

        // setTimeout(function() {
        //     isAnimating[Array.from(elements).findIndex(node => node === entry.target)] = false;
        //     if(isInViewport(entry.target) && !seenEntranceAnimation[Array.from(elements).findIndex(node => node === entry.target)] && 
        //     !lastScrolledUp) {
        //         console.log("ViewPort function!");
        //         requestAnimationFrame(() => {
        //             Array.from(elements)[Array.from(elements).findIndex(node => node === entry.target)].classList.remove('fadeUp');
        //             requestAnimationFrame(() => {
        //                 Array.from(elements)[Array.from(elements).findIndex(node => node === entry.target)].classList.add('fadeUpReverse');
        //             });
        //         });
        //     }
        // }, 1000);

    }
    
  });
}
let gObserver = new IntersectionObserver(gCallbacks, gOptions);
gElements.forEach(element => {
    gObserver.observe(element);
});

const elementList = [document.getElementById("notAllDiv"), document.getElementById("usgStudiosImageDiv"), 
document.getElementById("usgStudiosGroupImageDiv"), document.getElementById("moreText"), document.getElementById("roboticsContributorText"),
document.getElementById("roboticsGroupImgDiv"), document.getElementById("usgStudiosImageTextDiv"), document.getElementById("githubButton"), 
document.getElementById("githubButtonDiv"), document.getElementById("moreThanText"), document.getElementById("moreThanDiv"), 
document.getElementById("roboticsInText"), document.getElementById("roboticsTheText"), document.getElementById("roboticsWorldText"), 
document.getElementById("dedicationText"), document.getElementById("dedicationDiv"), document.getElementById("leaderImproveText"), document.getElementById("leaderImproveDiv")];

var distanceList = [];
for(e of elementList) {
    // distanceList.push(e.getBoundingClientRect().top); //Working on this!!!
}

function isPastElement(element) {

    if(element == null) {
        console.log("Element is null!");
        return false;
    }

    let elementDistance;

    elementList.forEach((value, index) => {
        if(value == element) {
            elementDistance = distanceList[index];
        }
    });

    if(elementDistance + (element.offsetHeight * 0.9) < window.scrollY) { // Replicates the threshold for the above functions.
        return true;
    } else {
        return false;
    }

}

// End of elements entering the screen and gaining animations

//All code for sliding/intro part of the Leader section

var isMobile = !!navigator.userAgent.match(/iphone|android|samsung|galaxy|pixel|blackberry/ig) || false;

const leaderButton1El = document.getElementById("leaderButton1");
const leaderButton2El = document.getElementById("leaderButton2");
const leaderButton3El = document.getElementById("leaderButton3");

const leaderButtons = [leaderButton1El, leaderButton2El, leaderButton3El];

var selectedButton = leaderButton1El;
if(isMobile) {
    leaderButton1El.classList.add("selectButtonMobile");
} else {
    leaderButton1El.classList.add("selectButton");
}

const leaderSections = [tahomaTSAImageDiv1, tahomaTSAImageDiv2, tahomaTSAImageDiv3];

var selectedSection = tahomaTSAImageDiv1;

const intervalImages = setInterval(function() {
    rightArrow();
}, 5000);

function rightArrow() {
    for(let i = 0; i < leaderSections.length; i++) {
        if(leaderSections[i] == selectedSection) {
            if(i == leaderSections.length-1) {
                changeSection(leaderSections[0]);
                selectedButton = leaderButtons[0];
                if(isMobile) {
                    leaderButton1El.classList.add("selectButtonMobile");
                } else {
                    leaderButton1El.classList.add("selectButton");
                }
                unselectButtons();

                selectedSection = leaderSections[0];
            } else {
                changeSection(leaderSections[i+1]);
                selectedButton = leaderButtons[i+1];
                if(isMobile) {
                    leaderButtons[i+1].classList.add("selectButtonMobile");
                } else {
                    leaderButtons[i+1].classList.add("selectButton");
                }
                unselectButtons();

                selectedSection = leaderSections[i+1];
            }
            break;
        }
    }
}

function leaderButton1() {
    if(selectedButton != leaderButton1El) {
        clearInterval(intervalImages);
    }
    
    changeSection(tahomaTSAImageDiv1);
    selectedButton = document.getElementById("leaderButton1");
    if(isMobile) {
        leaderButton1El.classList.add("selectButtonMobile");
    } else {
        leaderButton1El.classList.add("selectButton");
    }
    unselectButtons();
}
function leaderButton2() {
    if(selectedButton != leaderButton2El) {
        clearInterval(intervalImages);
    }

    changeSection(tahomaTSAImageDiv2);
    selectedButton = document.getElementById("leaderButton2");
    if(isMobile) {
        leaderButton2El.classList.add("selectButtonMobile");
    } else {
        leaderButton2El.classList.add("selectButton");
    }
    unselectButtons();
}
function leaderButton3() {
    if(selectedButton != leaderButton3El) {
        clearInterval(intervalImages);
    }

    changeSection(tahomaTSAImageDiv3);
    selectedButton = document.getElementById("leaderButton3");
    if(isMobile) {
        leaderButton3El.classList.add("selectButtonMobile");
    } else {
        leaderButton3El.classList.add("selectButton");
    }
    unselectButtons();
}

function changeSection(section) {
    var index;
    for(let j = 0; j < leaderSections.length; j++) {
        if(leaderSections[j] == selectedSection) {
            index = j;
        }
    }
    for(let i = 0; i < leaderSections.length; i++) {
        if(leaderSections[i] == section) {
            if(i < index /*If next section is to the right of current section*/) {
                selectedSection.classList = [];
                selectedSection.classList.add("transitionOutLeft");
                section.classList = [];
                section.classList.add("transitionInRight");
            } else if(i > index /*If next section is to the left of current section*/) {
                selectedSection.classList = [];
                selectedSection.classList.add("transitionOutRight");
                section.classList = [];
                section.classList.add("transitionInLeft");
            }
            selectedSection = section;
        }
    }
}

function unselectButtons() {
    for(let i = 0; i < leaderButtons.length; i++) {
        if(leaderButtons[i] != selectedButton && !isMobile) {
            leaderButtons[i].classList.remove("selectButton");
        } else if(leaderButtons[i] != selectedButton && isMobile) {
            leaderButtons[i].classList.remove("selectButtonMobile");
        }
    }
}

//End of code for sliding/intro part of the Leader section

//Start of code for resizing each div when the window touches it

// window.addEventListener('resize', function() {

// //ERRORS

//     var width = window.innerWidth;
//     var height = window.innerHeight;

//     const programmingIntroductionImage = document.getElementById("programmingIntroductionImage");
//     const programmingIntroductionImageInitWidth = programmingIntroductionImage.innerWidth;

//     if(width <= programmingIntroductionImage.innerWidth) {
//         programmingIntroductionImage.innerWidth = width;
//     } else {
//         programmingIntroductionImage.innerWidth = programmingIntroductionImageInitWidth;
//     }

// });