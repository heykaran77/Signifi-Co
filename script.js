function homeAnimation() {
  gsap.set(".slide-marquee", { scale: 5 });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      scrub: 2,
      start: "top top",
      end: "bottom botom",
    },
  });

  tl.to(
    ".video-div",
    {
      "--clip": "0%",
      ease: "ease-out",
    },
    "home"
  )
    .to(
      ".slide-marquee",
      {
        scale: 1,
        ease: "ease-out",
      },
      "home"
    )
    .to(
      ".left-dir",
      {
        xPercent: -15,
        ease: Power2,
        stagger: 0.02,
      },
      "scroll-text"
    )
    .to(
      ".right-dir",
      {
        xPercent: 15,
        ease: Power2,
        stagger: 0.05,
      },
      "scroll-text"
    );
}

function horizontalAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      scrub: 2,
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
    },
    xPercent: -200,
    ease: Power2,
  });
}

function teamAnimation() {
  document.querySelectorAll(".list-elem").forEach(function (el) {
    el.addEventListener("mousemove", (dets) => {
      gsap.to(el.querySelector(".picture"), {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        x: gsap.utils.mapRange(0, window.innerWidth, -220, 220, dets.clientX),
        y: gsap.utils.mapRange(0, window.innerWidth, -50, 50, dets.clientY),
        ease: Power4,
      });
    });

    el.addEventListener("mouseleave", (dets) => {
      gsap.to(el.querySelector(".picture"), {
        opacity: 0,
        scale: 0,
        duration: 0.2,
        ease: Power4,
      });
    });
  });
}

function paraAnimation() {
  clutter = "";
  document
    .querySelector(".text-para")
    .textContent.split("")
    .forEach((el) => {
      clutter += `<span>${el}</span>`;
    });
  document.querySelector(".text-para").innerHTML = clutter;
  gsap.set(".text-para span", { opacity: 0.1 });
  gsap.to(".text-para span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 30%",
      end: "bottom 70%",
      scrub: 1,
    },
    opacity: 1,
    stagger: 0.05,
    ease: "ease-out",
  });
}

function locoScroll() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

function capsulesAnimation() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      scrub: 2,
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
    },
    y: 0,
    ease: Power4,
  });
}

function handleTheme() {
  document.querySelectorAll(".section").forEach((e) => {
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
      onEnterBack: () => {
        document.body.setAttribute("theme", e.dataset.color);
      },
    });
  });
}

// function linkAnimation() {
//   clutter = "";
//   document
//     .querySelector(".sol-btn-con")
//     .textContent.split("")
//     .forEach((e) => {
//       if (e === " ") clutter += `<span class = "inline-block">&nbsp;</span>`;
//       clutter += `<span class = "inline-block">${e}</span>`;
//     });
//   document.querySelector(".sol-btn-con").innerHTML = clutter;

//   document.querySelector(".sol-btn").addEventListener("mouseenter", () => {
//     gsap.to(".sol-btn-con span", {
//       y: -24,
//       stagger: 0.02,
//       ease: Power2,
//     });
//   });
// }

handleTheme();
locoScroll();
// linkAnimation();
homeAnimation();
horizontalAnimation();
teamAnimation();
paraAnimation();
capsulesAnimation();
