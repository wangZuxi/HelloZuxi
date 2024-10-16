



const mySplineViewer = document.getElementById('🎯');
    
mySplineViewer.addEventListener('load-complete', (e) => {
	console.log('loading started', e.detail.url);
    var shadowRoot = document.querySelector('spline-viewer').shadowRoot;
    shadowRoot.querySelector('#logo').remove();

    setTimeout(()=>{
        document.getElementById("loadingScreen").style.opacity = "0";
        document.getElementById("loadingScreen").style.marginTop = "-105vw";
        document.querySelector("html").style.overflowY = "auto";

        
        document.getElementById("introh1").style.fontSize = "9vw";
        document.getElementById("introh1").style.margin = "4vh 5vw 0";
    }, 100);
});

window.onload = function(){
    window.scrollTo(0, 0);
}


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}




var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    var st = window.scrollY || window.pageYOffSet;  // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
        
        // downscroll code
        this.document.querySelector(".navbar").style.opacity = "0";
        setTimeout(()=>{this.document.querySelector(".navbar").style.position = "absolute";}, 400)
        

        if(isInViewport(this.document.getElementById("projectsLine"))){
            this.document.querySelector("html").style.backgroundColor = "#e8cc79";
            this.document.getElementById("projectsH2").style.fontSize = "5vw";
            this.document.getElementById("projectsH2").style.margin = "0vh 6vw 0";
            this.document.getElementById("projectsH2").style.color = "#4b698d";

            setTimeout(()=>{
            this.document.querySelectorAll(".projRow > .col").forEach(element => {
                element.style.margin = "0 0.4vw 0";
            });
            }, 300);   
        }







    } else if (st < lastScrollTop) {
        
        // upscroll code
        this.document.querySelector(".navbar").style.position = "fixed";
        this.document.querySelector(".navbar").style.opacity = "1";
        


        if(isInViewport(this.document.getElementById("projectsLine"))){
            this.document.querySelector("html").style.backgroundColor = "#da4575";
            this.document.getElementById("projectsH2").style.color = "antiquewhite";
        }




    } // else was horizontal scroll
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


