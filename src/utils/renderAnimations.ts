import gsap from "gsap"

const percentage = (partialValue: number, totalValue: number) => {
  return (100 * partialValue) / totalValue
}

export const homeAnimation = () => {
  const blink = gsap.timeline({
    repeat: -1,
    repeatDelay: 5,
    paused: true,
  })
  blink.to("#closed-eyes", { opacity: 1, duration: 0.01 }, 0)
  blink.to("#eyes", { opacity: 0, duration: 0.01 }, 0)
  blink.to("#closed-eyes", { opacity: 0, duration: 0.01 }, 0.15)
  blink.to("#eyes", { opacity: 1, duration: 0.01 }, 0.15)

  const faceTimeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
    delay: 5,
    repeatDelay: 5,
    paused: true,
  })
  faceTimeline.to(
    "#fabio-head",
    {
      yPercent: 3,
      rotate: 3,
      x: 12,
      duration: 1,
    },
    0
  )
  faceTimeline.to(
    "#eyes-group",
    {
      yPercent: 50,
      duration: 1,
    },
    0
  )
  faceTimeline.to(
    "#glasses",
    {
      yPercent: 15,
      duration: 1,
    },
    0
  )
  faceTimeline.to(
    "#ears",
    {
      yPercent: 10,
      duration: 1,
    },
    0
  )
  faceTimeline.to(
    "#eyebrows",
    {
      yPercent: 120,
      duration: 1,
    },
    0
  )
  faceTimeline.to(
    "#nose",
    {
      yPercent: 80,
      duration: 1,
    },
    0
  )
  faceTimeline.to(
    "#mouth",
    {
      yPercent: 80,
      duration: 1,
    },
    0
  )
  faceTimeline.to(
    "#ears",
    {
      yPercent: 5,
      duration: 1,
    },
    0
  )
  faceTimeline.to(
    "#beard",
    {
      yPercent: 3,
    },
    0
  )
  faceTimeline.to("#eye-iris-left", { xPercent: 10 }, 0)

  const phoebeTl = gsap.timeline({
    repeat: -1,
    repeatDelay: 5,
  })

  phoebeTl.to("#phoebe-closed-eyes", { opacity: 1, duration: 0.01 }, 0)
  phoebeTl.to("#phoebe-eyes", { opacity: 0, duration: 0.01 }, 0)
  phoebeTl.to("#phoebe-closed-eyes", { opacity: 0, duration: 0.01 }, 0.15)
  phoebeTl.to("#phoebe-eyes", { opacity: 1, duration: 0.01 }, 0.15)
  // phoebeTl.play()

  const mainTimeline = gsap.timeline({
    onComplete: addMouseEvent,
    delay: 1,
  })

  mainTimeline.to("#me", {
    opacity: 1,
  })

  let positionX: number
  let positionY: number
  let storedPositionX: any
  let storedPositionY: any
  let windowHeight: number
  let windowWidth: number

  const animatePhoebeFace = () => {
    if (!positionX) return
    if (storedPositionX === positionX && storedPositionY === positionY) return

    const x = percentage(positionX, windowWidth) - 50
    const y = percentage(positionY, windowHeight) - 50

    gsap.to("#phoebe_head", {
      yPercent: y / 30,
      xPercent: x / 30,
    })

    gsap.to("#phoebe-eyes-container", {
      yPercent: y / 20,
      xPercent: x / 20,
    })

    gsap.to(".phoebe-eye-iris", {
      yPercent: y,
      xPercent: x,
      ease: "circ.out",
    })

    gsap.to("#phoebe-face-details", {
      yPercent: y / 20,
      xPercent: x / 20,
    })

    storedPositionX = positionX
    storedPositionY = positionY
  }

  const updateMouseCoords = (event: MouseEvent) => {
    positionX = event.clientX
    positionY = event.clientY
  }

  function addMouseEvent() {
    const safeToAnimate = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    ).matches

    if (safeToAnimate) {
      window.addEventListener("mousemove", updateMouseCoords)
      gsap.ticker.add(animatePhoebeFace)
      blink.play()
      faceTimeline.play()
    }
  }
  // update if browser resizes
  const updateWindowSize = () => {
    windowHeight = window.innerHeight
    windowWidth = window.innerWidth
  }
  updateWindowSize()
  window.addEventListener("resize", updateWindowSize)
}
