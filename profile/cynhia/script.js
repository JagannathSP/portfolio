// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main '),
    smooth: true
});
function firstPageAnim(){
    var tl =gsap.timeline();

    tl.from("#nav", {
        y: '-40',
        opacity:0,
        duration: 1,
        ease: Expo.easeInOUt
    })
    .to(".boundingelem",{
        y:0,
        ease: Expo.easeInOut,
        duration:2,
        stagger: 0.2
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOUt
    })
}

function circleSquiz(){
    var xprev =0;
    var yprev =0;
    window.addEventListener("mousemove",function(dets){

        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        xprev = dets.clientX;
        yprev = dets.clientY;
       
    })
};
circleSquiz();
function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
};




function imgHover(){
    gsap.from("#about",{
        x: 100,
       
        duration: 1,
        delay:2,
        ease: Expo.easeInOUt
    })
};
imgHover()


firstPageAnim();
circleMouseFollower();