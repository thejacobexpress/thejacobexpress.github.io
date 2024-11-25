const b = document.body;

//Title Section Variables
const scrollText = document.getElementById("scrollText");

const attribute1 = document.getElementById("attribute1");
const attribute2 = document.getElementById("attribute2");
const attribute3 = document.getElementById("attribute3");
const attribute4 = document.getElementById("attribute4");

const image1 = document.getElementById("image1");
// const image2 = document.getElementById("image2");
// const image3 = document.getElementById("image3");
// const image4 = document.getElementById("image4");

const attributes = [attribute1, attribute2, attribute3, attribute4];
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
                attributes[i-1].classList.add("transitionInFromUp");

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

    if(window.scrollY >= this.window.innerHeight + programmerSectionContainer.offsetHeight + 
      parseInt(window.getComputedStyle(programmerSectionContainer).marginTop) + parseInt(window.getComputedStyle(studentSectionContainer).
      marginTop) + schoolsDiv.offsetHeight + parseInt(window.getComputedStyle(roboticsDiv).marginTop) + roboticsIntroDiv.offsetHeight + 
      roboticsImgDiv.offsetHeight/2 - this.window.innerHeight/2 + parseInt(window.getComputedStyle(tahomaLogoTextDiv).marginTop) - roboticsImgDiv.offsetHeight) {
        roboticsImgDiv.style.position = "absolute";
        roboticsImgDiv.style.top = roboticsIntroDiv.offsetHeight + parseInt(window.getComputedStyle(tahomaLogoTextDiv).marginTop) - 
        roboticsImgDiv.offsetHeight/2 + "px";

    } else if(window.scrollY >= this.window.innerHeight + programmerSectionContainer.offsetHeight + 
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
    tahomaTSAContainer.style.height = tahomaTSAScrollingDiv.offsetHeight + scrollButtonsDiv.offsetHeight + 
    parseInt(scrollButtonsDiv.style.marginBottom) + tahomaTSATextDiv.offsetHeight + tahomaTSARowsContainer.offsetHeight + "px"/* + margin that comes before rows of pictures/descriptions + height of rows of pictures/descriptions*/;
    leaderSectionContainer.style.height = tahomaTSAContainer.offsetHeight + leaderImproveDiv.offsetHeight + "px"; /*just equals tahomaTSAContainer height FOR NOW. If more is added on, this needs to be changed.*/

    // End of Resizing divs for leaderSectionContainer and tahomaTSAContainer:

    programmerSectionContainer.style.marginTop = this.window.innerHeight + "px";
    studentSectionContainer.style.marginTop = this.window.innerHeight + "px";
    leaderSectionContainer.style.marginTop = this.window.innerHeight + "px";
    

}
window.addEventListener("scroll", stickSectionTitleDivs);
window.addEventListener("resize", stickSectionTitleDivs);

tahomaTSAScrollingDiv.style.height = (Math.max(tahomaTSALowerImageDiv1.offsetHeight, tahomaTSALowerImageDiv2.offsetHeight, 
tahomaTSALowerImageDiv3.offsetHeight) + "px");
tahomaTSAContainer.style.height = tahomaTSAScrollingDiv.offsetHeight + scrollButtonsDiv.offsetHeight + 
parseInt(scrollButtonsDiv.style.marginBottom) + tahomaTSATextDiv.offsetHeight + tahomaTSARowsContainer.offsetHeight + "px"/* + margin that comes before rows of pictures/descriptions + height of rows of pictures/descriptions*/;
leaderSectionContainer.style.height = tahomaTSAContainer.offsetHeight + leaderImproveDiv.offsetHeight + parseInt(leaderImproveDiv.marginBottom) + "px"; /*just equals tahomaTSAContainer height FOR NOW. If more is added on, this needs to be changed.*/


var scrollTotal = 0;
var lastScrolledUp = false;

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

var lastScrollTop = 0;
function scrolling(event) {
    var deltaY = event.deltaY;
    var direction = Math.sign(deltaY);
    var amount = Math.abs(deltaY);

    if(deltaY == null) {
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
            // console.log("Scrolling down by " + amount);
            scrollTotal += amount;
            scrollDown();
    
            lastScrolledUp = false;
        }
    
        if(direction < 0) {
            // console.log("Scrolling up by " + amount);
            // scrollTotal += amount;
            scrollUp();
    
            lastScrolledUp = true;
        }
    }

}

const interval = setInterval(function() {
    if(scrollTotal == 0 && selectedAttribute != attributes[attributes.length-1]) {
        scrollText.classList = [];
        scrollText.offsetHeight;
        scrollText.classList.add("scrollBump");
    }
    scrollTotal = 0;
}, 5000);

window.addEventListener("wheel", scrolling);
window.onscroll = (event) => {
    scrolling(event);
};


// Start of elements entering the screen and gaining animations

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom >= window.innerHeight - 900 &&
        rect.top >= window.innerHeight - element.offsetHeight - 900 // -500 does not work???
    );
}

var seenEntranceAnimation = [false, false, false, false, false, false];
const elements = document.querySelectorAll('.notAllDiv, .usgStudiosImageDiv, .usgStudiosGroupImageDiv, .moreText, .roboticsContributorText, .roboticsGroupImgDiv');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.9
}
const callbacks = (entries) => {
  entries.forEach(entry => {
    // console.log(seenEntranceAnimation[Array.from(elements).findIndex(node => node === entry.target)] + " " + !entry.isIntersecting + " " + isInViewport(entry.target) + " " + lastScrolledUp);
    if(entry.isIntersecting && !seenEntranceAnimation[Array.from(elements).findIndex(node => node === entry.target)]){

        requestAnimationFrame(() => {
            entry.target.classList.remove('fadeUpReverse');
            requestAnimationFrame(() => {
                entry.target.classList.add('fadeUp');
            });
        });

        seenEntranceAnimation[Array.from(elements).findIndex(node => node === entry.target)] = true;
    } else if(seenEntranceAnimation[Array.from(elements).findIndex(node => node === entry.target)] && !entry.isIntersecting && isInViewport(entry.target) && lastScrolledUp) {
        seenEntranceAnimation[Array.from(elements).findIndex(node => node === entry.target)] = false;

        requestAnimationFrame(() => {
            entry.target.classList.remove('fadeUp');
            requestAnimationFrame(() => {
                entry.target.classList.add('fadeUpReverse');
            });
        });

    }
  });
}
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
  observer.observe(element);
});

var aSeenEntranceAnimation = false;
const aElements = document.querySelectorAll('.usgStudiosImageTextDiv');
const aOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.9
}
const aCallbacks = (entries) => {
  entries.forEach(entry => {
    // console.log(aSeenEntranceAnimation + " " + !entry.isIntersecting + " " + isInViewport(entry.target) + " " + lastScrolledUp);
    if(entry.isIntersecting && !aSeenEntranceAnimation){

        requestAnimationFrame(() => {
            entry.target.classList.remove('fadeInReverse');
            requestAnimationFrame(() => {
                entry.target.classList.add('fadeIn');
            });
        });
        
        aSeenEntranceAnimation = true;
    } else if(aSeenEntranceAnimation && !entry.isIntersecting && isInViewport(entry.target) && lastScrolledUp) {
        aSeenEntranceAnimation = false;

        requestAnimationFrame(() => {
            entry.target.classList.remove('fadeIn');
            requestAnimationFrame(() => {
                entry.target.classList.add('fadeInReverse');
            });
        });

    }
  });
}
let aObserver = new IntersectionObserver(aCallbacks, aOptions);
aElements.forEach(element => {
    aObserver.observe(element);
});

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

        // console.log("Animate in!");

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

        bSeenEntranceAnimation[Array.from(bElements).findIndex(node => node === entry.target)] = true;
    } else if((entry.target == Array.from(bElements)[0] || entry.target == Array.from(bElements)[2]) && 
    bSeenEntranceAnimation[Array.from(bElements).findIndex(node => node === entry.target)] && !entry.isIntersecting && 
    isInViewport(entry.target) && lastScrolledUp) {

        // console.log("Animate out!");

        requestAnimationFrame(() => {
            if(entry.target == Array.from(bElements)[0]) {
                Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target) + 1].classList.add('transitionInFromUpButtonReverse');
            } else {
                Array.from(bElements)[Array.from(bElements).findIndex(node => node === entry.target) + 1].classList.add('transitionInFromUpMoreThanReverse');
            }
            bIsAnimating[Array.from(bElements).findIndex(node => node === entry.target)] = true;
            bSeenEntranceAnimation[Array.from(bElements).findIndex(node => node === entry.target)] = false;
        });

        setTimeout(function() {
            bIsAnimating[Array.from(bElements).findIndex(node => node === entry.target)] = false;
            if(isInViewport(entry.target) && !bSeenEntranceAnimation[Array.from(bElements).findIndex(node => node === entry.target)] && 
            !lastScrolledUp) {
                console.log("ViewPort function!");
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

var cSeenEntranceAnimation = false;
const cElements = document.querySelectorAll('.roboticsInText');
const cOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.9
}
const cCallbacks = (entries) => {
  entries.forEach(entry => {
    // console.log(cSeenEntranceAnimation + " " + !entry.isIntersecting + " " + isInViewport(entry.target) + " " + lastScrolledUp);
    if(entry.isIntersecting && !cSeenEntranceAnimation){

        requestAnimationFrame(() => {
            entry.target.classList.remove('fadeInDelay15Reverse');
            requestAnimationFrame(() => {
                entry.target.classList.add('fadeInDelay15');
            });
        });

        cSeenEntranceAnimation = true;
    } else if(cSeenEntranceAnimation && !entry.isIntersecting && isInViewport(entry.target) && lastScrolledUp) {
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
    } else if(dSeenEntranceAnimation && !entry.isIntersecting && isInViewport(entry.target) && lastScrolledUp) {
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
    } else if(eSeenEntranceAnimation && !entry.isIntersecting && isInViewport(entry.target) && lastScrolledUp) {
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

var fSeenEntranceAnimation = false;
const fElements = document.querySelectorAll('.dedicationText');
const fOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.9
}
const fCallbacks = (entries) => {
  entries.forEach(entry => {

    // console.log(fSeenEntranceAnimation + " " + !entry.isIntersecting + " " + isInViewport(entry.target) + " " + lastScrolledUp);
    if(entry.isIntersecting && !fSeenEntranceAnimation){

        // entry.target.classList.remove('fadeUpDedReverse');
        // entry.target.classList.add('fadeUpDed');
        // console.log("Animated!");

        requestAnimationFrame(() => {
            entry.target.classList.remove('fadeUpDedReverse');
            requestAnimationFrame(() => {
                entry.target.classList.add('fadeUpDed');
                console.log("Animated!");
            });
        });

        fSeenEntranceAnimation = true;
    } else if(fSeenEntranceAnimation && !entry.isIntersecting && isInViewport(entry.target) && lastScrolledUp) {
        fSeenEntranceAnimation = false;

        requestAnimationFrame(() => {
            entry.target.classList.remove('fadeUpDed');
            requestAnimationFrame(() => {
                entry.target.classList.add('fadeUpDedReverse');
                console.log("Animated reverse!");
            });
        });

    }
  });
}
let fObserver = new IntersectionObserver(fCallbacks, fOptions);
fElements.forEach(element => {
    fObserver.observe(element);
});

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

    }

    // if(entry.isIntersecting && !gSeenEntranceAnimation){

    //     requestAnimationFrame(() => {
    //         entry.target.classList.remove('transitionInFromUpImpReverse');
    //         requestAnimationFrame(() => {
    //             entry.target.classList.add('transitionInFromUpImp');
    //         });
    //     });

    //     gSeenEntranceAnimation = true;
    // } else if(gSeenEntranceAnimation && !entry.isIntersecting && isInViewport(entry.target) && lastScrolledUp) {
    //     gSeenEntranceAnimation = false;

    //     requestAnimationFrame(() => {
    //         entry.target.classList.remove('transitionInFromUpImp');
    //         requestAnimationFrame(() => {
    //             entry.target.classList.add('transitionInFromUpImpReverse');
    //         });
    //     });

    // }
    
  });
}
let gObserver = new IntersectionObserver(gCallbacks, gOptions);
gElements.forEach(element => {
    gObserver.observe(element);
});
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