function page1Animation() {
  var tl = gsap.timeline()
  tl.from("nav h1, nav h4, nav button", {
    y: -40,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.15
  })
  tl.from(".center-part1 h1", {
    x: -300,
    opacity: 0,
    duration: 0.5,
  })
  tl.from(".center-part1 p", {
    x: -200,
    opacity: 0,
    duration: 0.4,
  })
  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4
  })
  tl.from(".center-part2 img", {
    opacity: 0,
    duration: 0.8,
    x: 200
  }, "-=0.7")
  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  })
}

function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top -60%",
      scrub: 2
    }
  })
  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  })
  tl2.from(".elem.line1.left", {
    x: -300,
    opacity: 0,
    duration: 1,
  }, "anim1")
  tl2.from(".elem.line1.right", {
    x: 300,
    opacity: 0,
    duration: 1,
  }, "anim1")
  tl2.from(".elem.line2.left", {
    x: -300,
    opacity: 0,
    duration: 1,
  }, "anim2")
  tl2.from(".elem.line2.right", {
    x: 300,
    opacity: 0,
    duration: 1,
  }, "anim2")
}

function page3Animation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      start: "top 50%",
      end: "top 0%",
      scrub: 2,
    }
  })
  tl3.from(".banner",{
    y:180,
    opacity:0,
    duration:1
  })
  tl3.from(".banner h2, .banner p, .banner button", {
    y: 40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15
  })
  tl3.from(".right-content img", {
    x:100,
    opacity: 0,
    duration: 0.8,
  },"-=0.7")
}

function page4Animation() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section4",
      scroller: "body",
      start: "top 50%",
      end: "top 0%",
      scrub: 2,
    }})
  tl4.from(".case-study", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  })
  tl4.from(".more",{
    y:180,
    opacity:0,
    duration:1
  })
  tl4.from(".more-content p, .more-content h4, .more-content i", {
    y: 40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15
  })
  tl4.from(".line", {
    x:-60,
    opacity: 0,
    duration: 0.8,
  },"-=1")
}

page1Animation()

page2Animation()

page3Animation()

page4Animation()