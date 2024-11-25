var isMobile = !!navigator.userAgent.match(/iphone|android|samsung|galaxy|pixel|blackberry/ig) || false;

const project1Button1El = document.getElementById("project1Button1");
const project1Button2El = document.getElementById("project1Button2");
const project1Button3El = document.getElementById("project1Button3");

const project1Buttons = [project1Button1El, project1Button2El, project1Button3El];

var selectedButton = project1Button1El;
if(isMobile) {
    project1Button1El.classList.add("selectButtonMobile");
} else {
    project1Button1El.classList.add("selectButton");
}

const project1Section1 = document.getElementById("project1ImageTextDiv1");
const project1Section2 = document.getElementById("project1ImageTextDiv2");
const project1Section3 = document.getElementById("project1ImageTextDiv3");

const project1Sections = [project1Section1, project1Section2, project1Section3];

var selectedSection = project1Section1;

const interval = setInterval(function() {
    rightArrow();
}, 5000);

function rightArrow() {
    for(let i = 0; i < project1Sections.length; i++) {
        if(project1Sections[i] == selectedSection) {
            if(i == project1Sections.length-1) {
                changeSection(project1Sections[0]);
                selectedButton = project1Buttons[0];
                if(isMobile) {
                    project1Button1El.classList.add("selectButtonMobile");
                } else {
                    project1Button1El.classList.add("selectButton");
                }
                unselectButtons();

                selectedSection = project1Sections[0];
            } else {
                changeSection(project1Sections[i+1]);
                selectedButton = project1Buttons[i+1];
                if(isMobile) {
                    project1Buttons[i+1].classList.add("selectButtonMobile");
                } else {
                    project1Buttons[i+1].classList.add("selectButton");
                }
                unselectButtons();

                selectedSection = project1Sections[i+1];
            }
            break;
        }
    }
}

function project1Button1() {
    if(selectedButton != project1Button1El) {
        clearInterval(interval);
    }
    
    changeSection(project1Section1);
    selectedButton = document.getElementById("project1Button1");
    if(isMobile) {
        project1Button1El.classList.add("selectButtonMobile");
    } else {
        project1Button1El.classList.add("selectButton");
    }
    unselectButtons();
}
function project1Button2() {
    if(selectedButton != project1Button2El) {
        clearInterval(interval);
    }

    changeSection(project1Section2);
    selectedButton = document.getElementById("project1Button2");
    if(isMobile) {
        project1Button2El.classList.add("selectButtonMobile");
    } else {
        project1Button2El.classList.add("selectButton");
    }
    unselectButtons();
}
function project1Button3() {
    if(selectedButton != project1Button3El) {
        clearInterval(interval);
    }

    changeSection(project1Section3);
    selectedButton = document.getElementById("project1Button3");
    if(isMobile) {
        project1Button3El.classList.add("selectButtonMobile");
    } else {
        project1Button3El.classList.add("selectButton");
    }
    unselectButtons();
}

function changeSection(section) {
    var index;
    for(let j = 0; j < project1Sections.length; j++) {
        if(project1Sections[j] == selectedSection) {
            index = j;
        }
    }
    for(let i = 0; i < project1Sections.length; i++) {
        if(project1Sections[i] == section) {
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
    for(let i = 0; i < project1Buttons.length; i++) {
        if(project1Buttons[i] != selectedButton && !isMobile) {
            project1Buttons[i].classList.remove("selectButton");
        } else if(project1Buttons[i] != selectedButton && isMobile) {
            project1Buttons[i].classList.remove("selectButtonMobile");
        }
    }
}