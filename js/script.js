window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.background = "white";
        document.getElementById("navbar").style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 30px 35px -5px";
        document.getElementById("navbar").style.boxShadow = "rgba(0, 0, 0, 0.04) 0px 20px 20px -5px";
    } else {
        document.getElementById("navbar").style.background = "";
        document.getElementById("navbar").style.boxShadow = "";
        document.getElementById("navbar").style.boxShadow = "";
    }
}