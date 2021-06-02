import * as React from "react"
import gsap from "gsap"

const TeaCup = () => {
  React.useEffect(() => {
    const smokeTl = gsap.timeline({
      repeat: -1,
      paused: true,
    })
    smokeTl.fromTo(
      ".smoke1",
      { strokeDasharray: 27, strokeDashoffset: 27, opacity: 0.5 },
      {
        strokeDasharray: 27,
        strokeDashoffset: 81,
        opacity: 0,
        duration: 5,
      },
      1
    )
    smokeTl.fromTo(
      ".smoke2",
      { strokeDasharray: 27, strokeDashoffset: 27, opacity: 0.5 },
      {
        strokeDasharray: 27,
        strokeDashoffset: 81,
        opacity: 0,
        duration: 5,
      },
      1.5
    )
    smokeTl.fromTo(
      ".smoke4",
      { strokeDasharray: 27, strokeDashoffset: 27, opacity: 0.5 },
      {
        strokeDasharray: 27,
        strokeDashoffset: -27,
        opacity: 0,
        duration: 5,
      },
      2
    )
    smokeTl.fromTo(
      ".smoke3",
      { strokeDasharray: 27, strokeDashoffset: 27, opacity: 0.5 },
      {
        strokeDasharray: 27,
        strokeDashoffset: -27,
        opacity: 0,
        duration: 5,
      },
      2.5
    )
    smokeTl.fromTo(
      ".smoke5",
      { strokeDasharray: 27, strokeDashoffset: 27, opacity: 0.5 },
      {
        strokeDasharray: 27,
        strokeDashoffset: 81,
        opacity: 0,
        duration: 5,
      },
      3
    )

    smokeTl.play()
  })
  return (
    <g id="tea-cup" clipPath="url(#clip3)">
      <path
        id="Vector_79"
        d="M777 428.136H756.125V432.415H777V428.136Z"
        fill="#EDE9D9"
      />
      <g id="Group_11">
        <path
          id="Vector_80"
          d="M777 432.415H756.125V428.992L769.246 431.131L777 432.415Z"
          fill="#D8D2BA"
        />
        <path
          id="Vector_81"
          d="M745.687 461.653C745.687 462.794 744.643 463.793 743.451 463.793H710.647C709.454 463.793 708.41 462.794 708.41 461.653C708.41 460.512 709.454 459.514 710.647 459.514H743.451C744.643 459.514 745.687 460.512 745.687 461.653Z"
          fill="#D8D2BA"
        />
      </g>
      <path
        id="Vector_82"
        d="M727.049 461.225C749.86 461.225 768.352 460.076 768.352 458.658C768.352 457.24 749.86 456.091 727.049 456.091C704.238 456.091 685.746 457.24 685.746 458.658C685.746 460.076 704.238 461.225 727.049 461.225Z"
        fill="#EDE9D9"
      />
      <path
        id="Vector_83"
        d="M693.499 416.726V431.987C693.499 446.107 705.279 458.088 719.891 458.088H731.82C746.582 458.088 759.107 446.107 759.107 431.987V416.726H693.499Z"
        fill="#FFFCEE"
      />
      <path
        id="Vector_84"
        d="M720.339 458.088H731.969C746.582 458.088 759.107 446.107 759.107 431.987V416.726H715.866"
        fill="#EDE9D9"
      />
      <path
        id="Vector_85"
        d="M720.339 458.088H731.969C746.582 458.088 759.107 446.107 759.107 431.987V416.726H747.178"
        fill="#D8D2BA"
      />
      <path
        id="Vector_86"
        d="M771.036 428.136H776.553C774.316 421.005 766.413 416.869 758.958 416.726V421.005C763.58 421.005 769.097 423.857 771.036 428.136Z"
        fill="#FFFCEE"
      />
      <path
        id="Vector_87"
        d="M759.107 416.726C759.107 417.297 743.749 417.724 726.005 417.724C708.112 417.724 693.499 417.297 693.499 416.726C693.499 416.156 708.112 415.87 726.005 415.87C743.749 415.87 759.107 416.156 759.107 416.726Z"
        fill="black"
      />
      <path
        id="Vector_88"
        d="M717.357 425.284H700.955V443.825H717.357V425.284Z"
        fill="black"
      />
      <path
        id="Vector_89"
        d="M700.955 425.284H717.357V443.825"
        fill="#3A3428"
      />
      <path
        id="Vector_90"
        d="M709.901 423.144C709.901 423.715 709.603 424.285 709.156 424.285C708.708 424.285 708.41 423.715 708.41 423.144V417.867C708.41 417.297 708.708 416.726 709.156 416.726C709.603 416.726 709.901 417.297 709.901 417.867V423.144Z"
        fill="#F2B233"
      />
      <path
        id="Vector_91"
        d="M704.086 426.995C705.13 431.559 701.7 434.84 704.981 438.976C706.919 441.258 710.199 441.258 713.927 440.83C715.567 437.692 716.909 434.697 715.269 432.13C712.585 427.851 708.112 429.705 704.086 426.995Z"
        fill="#82C60A"
      />
      <path
        id="Vector_92"
        d="M713.927 440.972C715.716 437.835 716.909 434.84 715.418 432.272C712.734 427.851 708.112 429.562 704.086 426.995"
        fill="#5EA304"
      />
      <g id="Group_12">
        <path
          id="Vector_93"
          d="M708.41 433.271H705.13L709.006 433.984L709.752 430.276L708.41 433.271Z"
          fill="#74B208"
        />
        <path
          id="Vector_94"
          d="M711.69 437.835L708.41 437.977L712.287 438.69L713.032 434.982L711.69 437.835Z"
          fill="#74B208"
        />
        <path
          id="Vector_95"
          d="M710.05 435.553H706.323L710.647 436.408L711.541 432.272L710.05 435.553Z"
          fill="#74B208"
        />
      </g>
      <path
        id="Vector_96"
        d="M710.953 457.766C710.935 457.294 706.651 457.057 701.383 457.238C696.116 457.419 691.86 457.949 691.878 458.421C691.895 458.894 696.18 459.13 701.447 458.949C706.715 458.768 710.971 458.238 710.953 457.766Z"
        fill="#FFFCEE"
      />
      <g id="smokes">
        <path
          className="smoke smoke1"
          opacity="0"
          d="M706.84 387.219L704.254 390.396C702.389 392.687 702.824 396.078 705.209 397.84V397.84C707.29 399.378 707.927 402.207 706.703 404.476L703.326 410.74"
          stroke="#D5D5D5"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          className="smoke smoke2"
          opacity="0"
          d="M715.934 382.91L713.348 386.087C711.483 388.378 711.918 391.769 714.303 393.531V393.531C716.384 395.068 717.021 397.898 715.797 400.167L712.419 406.431"
          stroke="#D5D5D5"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          className="smoke smoke3"
          opacity="0"
          d="M722.234 409.898L724.685 406.624C726.452 404.264 725.876 400.893 723.419 399.223V399.223C721.275 397.767 720.52 394.964 721.647 392.65L724.76 386.262"
          stroke="#D5D5D5"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          className="smoke smoke4"
          opacity="0"
          d="M731.836 406.728L734.687 403.766C736.742 401.629 736.601 398.215 734.376 396.272V396.272C732.434 394.576 732.042 391.705 733.457 389.54L737.362 383.564"
          stroke="#D5D5D5"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          className="smoke smoke5"
          opacity="0"
          d="M743.708 387.489L742.756 391.43C742.072 394.265 743.948 397.138 746.902 397.779V397.779C749.478 398.338 751.293 400.624 751.182 403.171L750.874 410.238"
          stroke="#D5D5D5"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </g>
  )
}

export default TeaCup
