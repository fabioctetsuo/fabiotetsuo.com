import * as React from "react"
import gsap from "gsap"
import "./styles.css"

function Me() {
  const leftEye = React.useRef(null)
  const rightEye = React.useRef(null)
  const closedLeftEye = React.useRef(null)
  const closedRightEye = React.useRef(null)

  React.useEffect(() => {
    const meTl = gsap.timeline({
      onComplete: addMouseEvent,
      delay: 1,
    })

    gsap.set(".bg", { transformOrigin: "50% 50%" })
    gsap.set(".ear-right", { transformOrigin: "0% 50%" })
    gsap.set(".ear-left", { transformOrigin: "100% 50%" })
    gsap.set(".me", { opacity: 1 })

    meTl
      .from(
        ".me",
        {
          duration: 1,
          yPercent: 110,
          ease: "elastic.out(0.5, 0.4)",
        },
        0.5
      )
      .from(
        ".head , .hair",
        {
          duration: 0.9,
          yPercent: 20,
          ease: "elastic.out(0.58, 0.25)",
        },
        0.6
      )
      .from(
        ".ear-right",
        {
          duration: 1,
          rotate: 15,
          yPercent: 5,
          ease: "elastic.out(0.5, 0.2)",
        },
        0.7
      )
      .from(
        ".ear-left",
        {
          duration: 1,
          rotate: -15,
          yPercent: 5,
          ease: "elastic.out(0.5, 0.2)",
        },
        0.7
      )
      .to(
        ".glasses",
        {
          duration: 1,
          keyframes: [{ yPercent: -10 }, { yPercent: -0 }],
          ease: "elastic.out(0.5, 0.2)",
        },
        0.75
      )
      .from(
        ".eyebrow-right , .eyebrow-left",
        {
          duration: 1,
          yPercent: 300,
          ease: "elastic.out(0.5, 0.2)",
        },
        0.7
      )
      .to(
        ".eye-right , .eye-left",
        {
          duration: 0.01,
          opacity: 1,
        },
        0.85
      )
      .to(
        ".eye-right-2 , .eye-left-2",
        {
          duration: 0.01,
          opacity: 0,
        },
        0.85
      )

    const blink = gsap.timeline({
      repeat: -1,
      repeatDelay: 5,
      paused: true,
    })

    blink
      .to(
        ".eye-right, .eye-left",
        {
          duration: 0.01,
          opacity: 0,
        },
        0
      )
      .to(
        ".eye-right-2, .eye-left-2",
        {
          duration: 0.01,
          opacity: 1,
        },
        0
      )
      .to(
        ".eye-right, .eye-left",
        {
          duration: 0.01,
          opacity: 1,
        },
        0.15
      )
      .to(
        ".eye-right-2 , .eye-left-2",
        {
          duration: 0.01,
          opacity: 0,
        },
        0.15
      )

    let xPosition
    let yPosition

    let height
    let width

    function percentage(partialValue, totalValue) {
      return (100 * partialValue) / totalValue
    }

    function updateScreenCoords(event) {
      xPosition = event.clientX
      yPosition = event.clientY
    }

    let storedXPosition = 0
    let storedYPosition = 0

    // gsap can use queryselector in the quick setter but this is better for performance as it touches the DOM less
    const dom = {
      face: document.querySelector(".face"),
      eye: document.querySelectorAll(".eye"),
      innerFace: document.querySelector(".inner-face"),
      hairFront: document.querySelector(".hair-front"),
      hairBack: document.querySelector(".hair-back"),
      ear: document.querySelectorAll(".ear"),
      eyebrowLeft: document.querySelector(".eyebrow-left"),
      eyebrowRight: document.querySelector(".eyebrow-right"),
      goatee: document.querySelector(".goatee"),
    }

    function animateFace() {
      if (!xPosition) return
      // important, only recalculating if the value changes
      if (storedXPosition === xPosition && storedYPosition === yPosition) return

      // range from -50 to 50
      let x = percentage(xPosition, width) - 50
      let y = percentage(yPosition, height) - 50

      // range from -20 to 80
      let yHigh = percentage(yPosition, height) - 20
      // range from -80 to 20
      let yLow = percentage(yPosition, height) - 80

      gsap.to(dom.face, {
        yPercent: yLow / 30,
        xPercent: x / 30,
      })
      gsap.to(dom.eye, {
        yPercent: yHigh / 3,
        xPercent: x / 2,
      })
      gsap.to(dom.innerFace, {
        yPercent: y / 6,
        xPercent: x / 8,
      })
      gsap.to(dom.hairFront, {
        yPercent: yHigh / 15,
        xPercent: x / 200,
      })
      gsap.to(dom.hairBack, {
        yPercent: (yLow / 20) * -1,
        xPercent: (x / 20) * -1,
      })
      gsap.to(dom.ear, {
        yPercent: (y / 1.5) * -1,
        xPercent: (x / 10) * -1,
      })
      gsap.to([dom.eyebrowLeft, dom.eyebrowRight], {
        yPercent: y * 2.5,
      })
      gsap.to(dom.goatee, {
        yPercent: (y / 1) * -1,
      })

      storedXPosition = xPosition
      storedYPosition = yPosition
    }

    // function being called at the end of main timeline
    function addMouseEvent() {
      const safeToAnimate = window.matchMedia(
        "(prefers-reduced-motion: no-preference)"
      ).matches

      if (safeToAnimate) {
        window.addEventListener("mousemove", updateScreenCoords)

        // gsap's RAF, falls back to set timeout
        gsap.ticker.add(animateFace)

        blink.play()
      }
    }

    // update if browser resizes
    function updateWindowSize() {
      height = window.innerHeight
      width = window.innerWidth
    }
    updateWindowSize()
    window.addEventListener("resize", updateWindowSize)
  }, [])

  return (
    <svg viewBox="0 0 500 400" style={{ width: "500px", maxWidth: "90vw" }}>
      <path
        id="background"
        className="st0 bg"
        d="M191.03,97.92l61.53-34.11c55.22-30.61,124.52-25.08,172.86,15.14
        c38.37,31.92,62.22,80.26,59.63,134.22l-0.33,6.83c-3.54,73.8-73.18,142.12-148.3,161.77c-13.87,3.63,1.24,2.02-13.07,1.97
        l-146.69,1.23c-83.99,0.4-143.3-51.46-158.42-135.11l0,0C3.19,166.54,49.11,134.88,127.46,120.71
        C149.81,116.67,171.27,108.87,191.03,97.92z"
      />
      <g className="me">
        <path
          id="body"
          className="st1"
          d="M168.17,384.97c-3.29,0.03-5.97-2.63-5.97-5.92v-37.73c0-20.78,21.06-37.62,47.05-37.62h83.29
          c25.58,0,46.32,16.58,46.32,37.03v37.01c0,3.25-2.62,5.9-5.88,5.92L168.17,384.97z"
        />
        <path
          id="neck"
          className="st2"
          d="M284.43,317.48c-6.38,13.98-62,11.87-67.1-0.79v-62.51h67.1V317.48z"
        />
        <g className="face">
          <linearGradient
            id="hair-back_1_"
            gradientUnits="userSpaceOnUse"
            x1="250.8976"
            y1="287.8119"
            x2="249.4442"
            y2="103.9765"
          >
            <stop offset="0.532" style={{ stopColor: "#e2e2e2" }} />
            <stop offset="0.7986" style={{ stopColor: "#525250" }} />
            <stop offset="0.9083" style={{ stopColor: "#000000" }} />
          </linearGradient>
          <path
            className="st3 hair-back"
            d="M158.02,192.36v-53.77c0-52.31,4.68-89.97,88.03-94.72h6.03c92.33,2.91,89.78,43.25,89.78,96.6
		        v51.89H158.02z"
          />
          <path
            className="st3 hair-back"
            d="M158.02,192.36v-53.77c0-52.31,39.41-94.72,88.03-94.72h6.03c49.58,0,89.78,43.25,89.78,96.6
            v51.89H158.02z"
          />
          <path
            id="head"
            className="st2 head"
            d="M250.42,283.98L250.42,283.98c-45.83,0-82.98-37.15-82.98-82.98v-65.35
            c0-45.83,37.15-82.98,82.98-82.98h0c45.83,0,82.98,37.15,82.98,82.98V201C333.4,246.83,296.25,283.98,250.42,283.98z"
          />
          <g id="ears">
            <ellipse
              id="ear-right"
              className="st2 ear-right ear"
              cx="162.23"
              cy="192.36"
              rx="14.43"
              ry="19.92"
            />
            <ellipse
              id="ear-left"
              className="st2 ear-left ear"
              cx="337.77"
              cy="192.36"
              rx="14.43"
              ry="19.92"
            />
          </g>
          <path
            id="hair-front"
            className="st4 hair-front"
            d="M167.81,132.97l14.32-20.99c1.05-1.25,3.49-7.94,3.49-9.75l0.74-16.11
            c0-3.65,3.89-8.27,6.8-8.27c34.35,2.96,78.92,2.24,113.8-0.85c2.91,0,6.62,3.82,6.62,7.47l0.37,17.12c0,1.98,1.17,7.22,2.39,8.48
            l16.9,21.4c0.94,0.97,2.13,1.5,3.35,1.5h4.04c0.68,0,1.23-0.53,1.23-1.19v-15.01c0-45.3-23.5-67.83-55.12-86.57l-10.64-7.14
            c-0.8-0.54-1.9,0-1.93,0.95l-0.03,0.98c-0.03,1.06-1.38,1.56-2.13,0.78l-4.46-4.63c-0.67-0.7-1.88-0.38-2.1,0.55l-0.67,2.89
            c-0.21,0.9-1.35,1.24-2.04,0.61l-6.69-6.13c-0.71-0.65-1.89-0.27-2.06,0.66l-1.04,5.86c-0.17,0.96-1.39,1.33-2.09,0.63l-5.32-5.27
            c-0.66-0.65-1.79-0.38-2.06,0.49l-1.94,6.31c-0.27,0.87-1.39,1.14-2.05,0.5l-3.16-3.07c-1.29-1.25-3.48-0.66-3.93,1.05l-0.36,1.37
            c-0.04,0.16-0.12,0.32-0.23,0.45c-3.73,4.67-9.06,7.94-15.05,8.99c-33.12,5.78-58.58,41.34-58.72,84.34l-0.03,10.38
            c0,0.66,0.55,1.2,1.23,1.2h6.88C167.48,132.97,166.83,134.13,167.81,132.97z"
          />
          <g className="inner-face">
            <g className="eyes">
              <ellipse
                id="eye-right"
                className="st5 eye-right eye"
                ref={rightEye}
                cx="217.32"
                cy="159.67"
                rx="6.38"
                ry="8.65"
              />
              <ellipse
                id="eye-left"
                className="st5 eye-left eye"
                ref={leftEye}
                cx="284.43"
                cy="159.67"
                rx="6.38"
                ry="8.65"
              />
            </g>
            <g className="eyes_2">
              <path
                id="eye-right-2"
                ref={closedRightEye}
                opacity="0"
                className="st6 eye-right-2 eye"
                d="M206.87,159.67c6.66,3.8,13.49,3.9,20.51,0"
              />
              <path
                id="eye-left-2"
                ref={closedLeftEye}
                opacity="0"
                className="st6 eye-left-2 eye"
                d="M274.24,159.67c6.89,3.69,13.54,4.02,19.87,0"
              />
            </g>
            <g className="glasses">
              <circle className="st7" cx="214.34" cy="164.95" r="31.68" />
              <circle className="st7" cx="289.53" cy="165.47" r="31.68" />
              <path
                className="st7"
                d="M244.24,154.44c5.2-2.46,10.39-2.46,15.59,0"
              />
            </g>
            <path
              id="nose"
              className="st8 nose"
              d="M243.24,200.64c5.2,3.52,10.39,3.52,15.59,0"
            />
            <path
              id="mouth"
              className="st8 mouth"
              d="M232.12,228.65c13.12,8.93,25.97,9.35,38.51,0"
            />
            <g className="eyebrows">
              <path
                id="eyebrow-right"
                className="st9 eyebrow-right"
                d="M203.52,127.48c7.53-5.74,19.55-4.11,25.32,0"
              />
              <path
                id="eyebrow-left"
                className="st9 eyebrow-left"
                d="M272.77,128.48c7.53-5.74,19.55-4.11,25.32,0"
              />
            </g>
            <g className="beard">
              <path
                className="st10 mustache"
                d="M215.42,213.44l26.49-6.3c2.85-0.64,5.46-0.22,8.03,1.31l2.09,2.57l2.24-2.79c2.22-1.35,5.56-2.22,7.32-1.2
                l27.29,5.72c2.14,0.48,2.66,3.67,0.8,4.95c-14.54,9.97-29.18,8.74-37.64,0.04c-11.08,8.57-24.06,10.54-37.21-1.67
                C213.96,215.27,214.31,213.68,215.42,213.44z"
              />
              <path
                className="st10 goatee"
                d="M227.38,280.74c7.96-3.29,15.15-7.9,21.32-14.24c2.54-1.7,5.98-1.6,8.4,0.24
                c5.56,5.91,11.76,10.72,18.75,14.2C263.98,293.17,241.73,292.9,227.38,280.74z"
              />
            </g>
          </g>
        </g>
      </g>
      <g id="decoration">
        <circle className="st11" cx="52.77" cy="142.27" r="10.32" />
        <circle className="st12" cx="66.96" cy="118.12" r="9.36" />
        <circle className="st13" cx="82.19" cy="129.64" r="5.87" />
        <circle className="st14" cx="413.11" cy="345" r="8.97" />
      </g>
    </svg>
  )
}

export default Me
