gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    markers:true,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})

gsap.from("#aboutus img, #aboutusin", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#aboutus",
        scroller: "body",
        
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
});
gsap.from(".card", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        stagger:0.1,
       
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
});

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:1

    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:1,
       

    }
})

gsap.from(".last h1",{
    y:50,
    scrollTrigger:{
        trigger:".last h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})