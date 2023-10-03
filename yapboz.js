var egitimbutton = document.getElementById('egitimbutton');
var educationfirst = document.getElementById('yapbozsecond');
var kurumsalbutton = document.getElementById('kurumsalbutton');
var bireyselbutton = document.getElementById('bireyselbutton');
var downarrow = document.getElementById('downarrow');
var kurumsalfirst = document.getElementById('yapbozthird');

egitimbutton.addEventListener('click', function() {
    var educationfirstdisplay = window.getComputedStyle(educationfirst).display;
    if (educationfirstdisplay === "none") {
        kurumsalfirst.style.display = "none";
        educationfirst.style.display = "flex";

        if (window.getComputedStyle(downarrow).display === "none"){
            downarrow.style.display = "flex";
        }

        if (window.getComputedStyle(egitimbutton).display === "block"){
            egitimbutton.style.display = "none";
        }

        kurumsalbutton.style.display = "block";
        bireyselbutton.style.display = "block";

    } else {

    }
});

kurumsalbutton.addEventListener('click', function(){
    var kurumsalfirstdisplay = window.getComputedStyle(kurumsalfirst).display;
    if (kurumsalfirstdisplay === "none") {
        educationfirst.style.display = "none";
        kurumsalfirst.style.display = "flex";

        if (window.getComputedStyle(downarrow).display === "none"){
            downarrow.style.display = "flex";
        }

        if (window.getComputedStyle(kurumsalbutton).display === "block"){
            kurumsalbutton.style.display = "none";
        }

        egitimbutton.style.display = "block";
        bireyselbutton.style.display = "block";
    }
});