Loco();
Anim();
VideoPlay();
function VideoPlay(){
    document.querySelectorAll("#page1 video").forEach((elem)=>{
        gsap.to(elem,{
            scrollTrigger:{
                trigger:"#page1",
                scroller:"#main",
                // markers:true,
                start:"top -30%",
                scrub:true,
                
            },
            onStart:function(){
                elem.play();
                console.log(elem);
            }
        })
    })
}
function Loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}


function Anim(){
    gsap.to(".page1-desktop",{
        scrollTrigger:{
            trigger:".page1-desktop",
            scroller:"#main",
            pin:true,
            scrub:true,
            start:"top -55%",
            end:"top -220%",
        }
    });
    gsap.to(".page1-responsive",{
        scrollTrigger:{
            trigger:".page1-responsive",
            scroller:"#main",
            pin:true,
            scrub:true,
            start:"top -20%",
            end:"top -220%",
        }
    });
    gsap.to(".page1-center",{
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            scrub:true,
            start:"top -20%",
            end:"top -60%",
        },
        top:"-21.5%"
    });
    // page 1 desktop devices
    gsap.to(".page1-left",{
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            scrub:true,
            start:"top -55%",
            end:"top -200%",
        },
        left:"-37%"
    });

    // page 1 mobile devices
    gsap.to(".page1-left",{
        scrollTrigger:{
            trigger:".page1-responsive",
            scroller:"#main",
            scrub:true,
            start:"top -20%",
            end:"top -200%",
        },
        top:"-15.5%"
    });gsap.to(".page1-left",{
        scrollTrigger:{
            trigger:".page1-responsive",
            scroller:"#main",
            scrub:true,
            start:"top -30%",
            end:"top -200%",
            // markers:true
        },
        left:"-37%",
    });

    // page 1 desktop devices
    gsap.to(".page1-right",{
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            scrub:true,
            start:"top -55%",
            end:"top -200%",
            // markers:true
        },
        right:"-37%"
    });

    // page 1 mobile devices
    gsap.to(".page1-right",{
        scrollTrigger:{
            trigger:".page1-responsive",
            scroller:"#main",
            scrub:true,
            start:"top -20%",
            end:"top -200%",
            // markers:true
        },
        top:"-15.5%"
    });
    gsap.to(".page1-right",{
        scrollTrigger:{
            trigger:".page1-responsive",
            scroller:"#main",
            scrub:true,
            start:"top -30%",
            end:"top -200%",
            // markers:true
        },
        right:"-37%"
    });
    
    gsap.to(".page1-center",{
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            scrub:true,
            start:"top -55%",
            end:"top -200%",
            // markers:true
        },
        width:"100%",
    });
    gsap.to(".container2",{
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            scrub:2,
            start:"top -30%",
            end:"top -150%",
            // markers:true
        },
        top:"-10%"
    });gsap.to(".container",{
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            scrub:2,
            start:"top -15%",
            end:"top -150%",
            // markers:true
        },
        top:"-10%"
    });

}

// page 2 
var tl1 = gsap.timeline();
tl1.to("#page1,#page2",{
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 20%",
        scrub:true,
    },
    backgroundColor:"black",
})
gsap.to("#page3",{
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 10%",
        end:"top 1%",
        scrub:true,
    },
    backgroundColor:"white",
    color:"black"
})

document.querySelector("#page2 img").addEventListener("click",()=>{
    document.querySelector("#page2 video").play();
    document.querySelector("#page2 img").style.display = "none";
})

Page3();
function Page3(){
    document.querySelectorAll(".page3-card").forEach((elem)=>{
        var imgPage3 = elem.querySelector(".page3-card img");
        var videoPage3 = elem.querySelector(".page3-card video");
        imgPage3.addEventListener("click",()=>{
            videoPage3.play();
            imgPage3.style.display = "none";
        });
        videoPage3.addEventListener("click",()=>{
            videoPage3.pause();
            imgPage3.style.display = "block";
        })
    })
}

Page6()
function Page6(){
    gsap.to(".page6-bottom",{
        scrollTrigger:{
            trigger:".page6-bottom",
            scroller:"#main",
            scrub:true,
            start:"top 90%",
            end:"top -50%",
            // markers:true
        },
        right:"0"
    })
}

Mouse();
function Mouse(){
    var mouse = document.querySelector("#mouse");
    window.addEventListener("mousemove",dets=>{
        let y = mouse.offsetHeight;
        let x = mouse.offsetWidth;
        // mouse.style.left = `${dets.x - x/2}px`
        // mouse.style.top = `${dets.y - y/2}px`
        gsap.to(mouse,{
            left:`${dets.x - x/2}px`,
            top:`${dets.y - y/2}px`,
            // duration:.4,
        })
        // document.querySelector("#mouse").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
    })
    var page6Cover = document.querySelectorAll(".page6-cover");
    document.querySelectorAll("video,h1,img").forEach(imgs=>{
        imgs.addEventListener("mouseenter",()=>{
            mouse.style.scale = "7"
        });
        imgs.addEventListener("mouseleave",()=>{
            mouse.style.scale = "1"
        });
    })
    page6Cover.forEach(imgs=>{
        imgs.addEventListener("mouseenter",()=>{
            mouse.style.scale = "7"
        });
        imgs.addEventListener("mouseleave",()=>{
            mouse.style.scale = "1"
        });
    })
}

