import * as React from "react"
import styled from "styled-components"
import gsap from "gsap"

const CustomSvg = styled.svg`
  width: 110px;
  max-width: 90vw;
  fill: none;
`

function Logo({ isDarkMode }: { isDarkMode: boolean }) {
  const strokeColor = isDarkMode ? "#fff" : "#434343"

  React.useEffect(() => {
    const logoAnimation = gsap.to(".letter", {
      opacity: 1,
      stagger: 0.1,
      paused: true,
      ease: "circ.out",
    })

    logoAnimation.play()
  }, [])

  return (
    <CustomSvg viewBox="0 0 109 30">
      <g id="tetsuo-logo">
        <path
          className="letter"
          id="t1"
          d="M1 9C15.1137 4.75321 22.7823 3.22691 37.5 1"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0"
        />
        <path
          className="letter"
          opacity="0"
          id="t2"
          d="M7 28.5C7 23.5 15.5 5 18 5"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="letter"
          opacity="0"
          id="e1"
          d="M39.4205 24.9073C39.9216 24.6751 40.1395 24.0806 39.9073 23.5795C39.6751 23.0784 39.0806 22.8605 38.5796 23.0927L39.4205 24.9073ZM35.0145 12.3575C35.4881 12.0733 35.6417 11.4591 35.3575 10.9855C35.0734 10.5119 34.4591 10.3584 33.9855 10.6425L35.0145 12.3575ZM38.5796 23.0927C33.5069 25.4434 29.7104 26.4447 27.1534 26.5318C25.8755 26.5754 24.9824 26.3878 24.4039 26.0956C23.8564 25.8191 23.5805 25.4489 23.4702 25.0075C23.3505 24.5287 23.3979 23.8458 23.7571 22.9444C24.1136 22.0496 24.7519 21.0065 25.7066 19.858C27.6151 17.5618 30.7058 14.9427 35.0145 12.3575L33.9855 10.6425C29.5442 13.3073 26.26 16.0632 24.1685 18.5795C23.1231 19.8373 22.3551 21.0598 21.8992 22.2041C21.4459 23.3417 21.2746 24.4713 21.5299 25.4925C21.7945 26.5511 22.4874 27.3684 23.5024 27.8809C24.4863 28.3778 25.7495 28.5809 27.2216 28.5307C30.1646 28.4303 34.2431 27.3066 39.4205 24.9073L38.5796 23.0927Z"
          fill={strokeColor}
        />
        <path
          className="letter"
          opacity="0"
          id="e2"
          d="M24 21.5C37 17.5 40.5 11.5 34.5 11.5"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="letter"
          opacity="0"
          id="t3"
          d="M42.5 27.5C45.2131 17.7784 46.5532 13.6006 50.5 3"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="letter"
          opacity="0"
          id="t4"
          d="M40 16.5C45.2312 14.5432 47.3858 14.4273 56.5 14"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="letter"
          opacity="0"
          id="s"
          d="M68.5 9.5C68.5 9.5 57.5 14 58.5 16C59.5 18 67.5 17.5 68.5 20C69.5 22.5 56 27.5 56 27.5"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="letter"
          opacity="0"
          id="u1"
          d="M78.5 14C66.5 30 73.5 31.5 88.5 14"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="letter"
          opacity="0"
          id="u2"
          d="M91.5624 28.4981C92.1136 28.4636 92.5325 27.9888 92.498 27.4376C92.4636 26.8864 91.9888 26.4675 91.4376 26.5019L91.5624 28.4981ZM87.6537 13.4673C86.2226 15.7406 85.166 17.8028 84.5252 19.6208C83.8892 21.425 83.6316 23.0758 83.9071 24.4838C84.1943 25.9515 85.0475 27.0749 86.4203 27.7554C87.7393 28.4092 89.4795 28.6282 91.5624 28.4981L91.4376 26.5019C89.5205 26.6218 88.1818 26.3964 87.3086 25.9635C86.489 25.5572 86.0365 24.9515 85.8699 24.0997C85.6915 23.1883 85.832 21.9294 86.4114 20.2857C86.986 18.6557 87.962 16.7318 89.3463 14.5327L87.6537 13.4673Z"
          fill={strokeColor}
        />
        <path
          className="letter"
          opacity="0"
          id="o1"
          d="M103 14C98.5 15.5 91.5 25.5 97 27.5"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="letter"
          opacity="0"
          id="o2"
          d="M102.699 13.0465C102.172 13.2128 101.88 13.7746 102.046 14.3012C102.213 14.8279 102.774 15.12 103.301 14.9537L102.699 13.0465ZM97.2169 26.5239C96.6778 26.4041 96.1436 26.744 96.0238 27.2831C95.904 27.8223 96.2439 28.3565 96.7831 28.4763L97.2169 26.5239ZM103.301 14.9537C104.379 14.6134 105.097 14.622 105.551 14.7584C105.966 14.8834 106.243 15.1389 106.427 15.541C106.842 16.4489 106.755 18.0937 106.006 20.0112C105.278 21.8761 104.012 23.7561 102.439 25.0372C100.875 26.3111 99.0854 26.9391 97.2169 26.5239L96.7831 28.4763C99.4146 29.0611 101.813 28.1265 103.702 26.5879C105.582 25.0565 107.035 22.874 107.869 20.7389C108.682 18.6564 109.002 16.3638 108.245 14.7092C107.843 13.83 107.14 13.148 106.127 12.8433C105.153 12.55 103.996 12.6368 102.699 13.0465L103.301 14.9537Z"
          fill={strokeColor}
        />
      </g>
    </CustomSvg>
  )
}

export default Logo
