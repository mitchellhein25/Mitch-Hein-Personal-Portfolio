//-----------------------Interactive Resume----------------------//

function hideToggle(section) {
    if (section.hidden == false) {
        section.hidden = true;
    } else {
        section.hidden = false;
    }
};

//------------------------Career Objective----------------------//
var objHidden = document.getElementById("obj-hidden");
var obj = document.getElementById("obj");

obj.addEventListener("click", function () {
    hideToggle(objHidden);
});

//-----------------------Work Experience -------------------------//
var workHidden = document.getElementById("work-hidden");
var work = document.getElementById("work");

work.addEventListener("click", function() {
    hideToggle(workHidden);
});

var work1Bullets = document.getElementById("work-1-bullets");
var showDetailsWork1 = document.getElementById("show-details-work-1");

showDetailsWork1.addEventListener("click", function() {
    hideToggle(work1Bullets);
    if (work1Bullets.hidden == false) {
        showDetailsWork1.textContent = "Hide details"
    } else {
        showDetailsWork1.textContent = "Show details"
    }
});

var work2Bullets = document.getElementById("work-2-bullets");
var showDetailsWork2 = document.getElementById("show-details-work-2");

showDetailsWork2.addEventListener("click", function() {
    hideToggle(work2Bullets);
    if (work1Bullets.hidden == false) {
        showDetailsWork2.textContent = "Hide details"
    } else {
        showDetailsWork2.textContent = "Show details"
    }
});

var work3Bullets = document.getElementById("work-3-bullets");
var showDetailsWork3 = document.getElementById("show-details-work-3");

showDetailsWork3.addEventListener("click", function() {
    hideToggle(work3Bullets);
    if (work1Bullets.hidden == false) {
        showDetailsWork3.textContent = "Hide details"
    } else {
        showDetailsWork3.textContent = "Show details"
    }
});

//-----------------------Education -------------------------//

var eduHidden = document.getElementById("edu-hidden");
var edu = document.getElementById("edu");

edu.addEventListener("click", function() {
    hideToggle(eduHidden);
});

//------------------------Skills---------------------------//
var skillsHidden = document.getElementById("skills-hidden");
var skills = document.getElementById("skills");

skills.addEventListener("click", function() {
    hideToggle(skillsHidden);
});