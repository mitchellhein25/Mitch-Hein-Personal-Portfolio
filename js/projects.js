function hideToggle(section) {
    if (section.hidden == false) {
        section.hidden = true;
    } else {
        section.hidden = false;
    }
};

//------------------------Career Objective----------------------//
var scrapeHidden = document.getElementById("scrape-hidden");
var scrapers = document.getElementById("scrapers");

scrapers.addEventListener("click", function () {
    hideToggle(scrapeHidden);
});

var extractHidden = document.getElementById("extract-hidden");
var extract = document.getElementById("extract");

extract.addEventListener("click", function () {
    hideToggle(extractHidden);
});