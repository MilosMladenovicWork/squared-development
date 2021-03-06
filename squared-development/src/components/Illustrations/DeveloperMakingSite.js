import React, { useRef } from "react"
import VisibilitySensor from "react-visibility-sensor"

import styled from "styled-components"

const AccentColorPathFill = styled.path`
  fill: ${props =>
    props.fillColor
      ? props.theme.colors[props.fillColor]
        ? props.theme.colors[props.fillColor]
        : props.theme.colors.primary
      : props.theme.colors.primary};
`

const AccentColorPathStroke = styled.path`
  stroke: ${props =>
    props.fillColor
      ? props.theme.colors[props.fillColor]
        ? props.theme.colors[props.fillColor]
        : props.theme.colors.primary
      : props.theme.colors.primary};
`

const DeveloperMakingSite = ({ fillColor }) => {
  const svg = useRef(null)

  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => {
        if (isVisible) {
          svg.current && svg.current.unpauseAnimations()
        } else {
          svg.current && svg.current.pauseAnimations()
        }
        return (
          <svg
            ref={svg}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            viewBox="0 0 791.689 469.24"
            data-testid="developer-making-site"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.5"
                x2="0.5"
                y1="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="gray" stopOpacity="0.251"></stop>
                <stop offset="0.54" stopColor="gray" stopOpacity="0.122"></stop>
                <stop offset="1" stopColor="gray" stopOpacity="0.102"></stop>
              </linearGradient>
              <linearGradient
                id="linear-gradient-2"
                x1="0.5"
                x2="0.5"
                xlinkHref="#linear-gradient"
              ></linearGradient>
              <linearGradient
                id="linear-gradient-3"
                x1="0.5"
                x2="0.5"
                y1="1.001"
                y2="-0.002"
                xlinkHref="#linear-gradient"
              ></linearGradient>
            </defs>
            <g data-name="Group 48" transform="translate(-1038.947 -286)">
              <path
                fill="#e7ebed"
                d="M153.132 363.875c2.379-.832 4.907-1.622 7.394-1.189 4.159.724 7.078 4.666 8.318 8.717s1.2 8.318 1.988 12.477 2.678 8.459 6.4 10.447 8.126 1.206 12.26.724a77.421 77.421 0 0116.328-.15c4.558.441 9.915 1.98 11.254 6.363 1.1 3.577-1.081 7.228-2.5 10.68-2.712 6.455-2.928 14.082.175 20.353s9.391 10.946 12.019 17.567a8.684 8.684 0 01.632 5.3 9.665 9.665 0 01-1.88 3.41c-2.063 2.653-4.525 4.991-6.4 7.785-3.918 5.822-4.991 13.059-5.44 20.054a146.228 146.228 0 00.116 20.653c-5.107-1.664-10.746-.183-16.012-1.273-11.2-2.312-18.2-15.571-29.611-16.378-5.4-.383-11.2 2.163-16.02-.308a12.094 12.094 0 01-5.124-5.822 20.661 20.661 0 01-1.314-13.891c.832-3.211 2.5-6.355 2.171-9.657-.274-2.828-1.971-5.323-3.918-7.394-5.548-5.889-13.6-9.49-17.584-16.536a18.839 18.839 0 012.237-21.2 55.651 55.651 0 004.034-4.383c1.913-2.695 2.5-6.1 2.753-9.4.549-7.91-.832-16.286 1.755-23.972 2.328-6.952 9.414-10.652 15.969-12.977z"
                data-name="Path 22"
                opacity="0.6"
                transform="translate(914.889 104.466)"
              ></path>
              <AccentColorPathStroke
                fillColor={fillColor}
                fill="none"
                data-testid="path-stroke"
                stroke="#f64e3e"
                strokeMiterlimit="10"
                strokeWidth="1"
                d="M1068.137 468.573s22.716 126.154 52.21 141.2"
                data-name="Path 23"
                opacity="0.6"
              ></AccentColorPathStroke>
              <AccentColorPathStroke
                fillColor={fillColor}
                fill="none"
                stroke="#f64e3e"
                strokeMiterlimit="10"
                strokeWidth="1"
                d="M1131.334 503.491s-24.329 3.327-48.633 28.322"
                data-name="Path 24"
                opacity="0.6"
              ></AccentColorPathStroke>
              <AccentColorPathStroke
                fillColor={fillColor}
                fill="none"
                stroke="#f64e3e"
                strokeMiterlimit="10"
                strokeWidth="1"
                d="M1086.976 546.468a63.074 63.074 0 00-47.976-15.2"
                data-name="Path 25"
                opacity="0.6"
              ></AccentColorPathStroke>
              <AccentColorPathStroke
                fillColor={fillColor}
                fill="none"
                stroke="#f64e3e"
                strokeMiterlimit="10"
                strokeWidth="1"
                d="M1142.048 554.428s-34.169 2.9-46.82 16.02"
                data-name="Path 26"
                opacity="0.6"
              ></AccentColorPathStroke>
              <AccentColorPathStroke
                fillColor={fillColor}
                fill="none"
                stroke="#f64e3e"
                strokeMiterlimit="10"
                strokeWidth="1"
                d="M1100.343 582.669s-19.131-3.327-36.789 7.943"
                data-name="Path 27"
                opacity="0.6"
              ></AccentColorPathStroke>
              <path
                fill="#e7ebed"
                d="M980.37 244.575c-3.818-1.356-7.869-2.6-11.853-1.9-6.654 1.164-11.345 7.486-13.308 13.965s-1.921 13.391-3.186 20.046-4.292 13.549-10.264 16.743-13.025 1.93-19.655 1.164a124.106 124.106 0 00-26.151-.275c-7.311.707-15.887 3.177-18.033 10.2-1.755 5.739 1.73 11.578 4.059 17.109 4.35 10.339 4.7 22.574-.283 32.63-5.065 10.231-15.055 17.55-19.264 28.155-1.065 2.695-1.738 5.681-1.015 8.484a15.5 15.5 0 003.019 5.473c3.327 4.259 7.253 8.01 10.264 12.477 6.28 9.316 7.985 20.927 8.717 32.14a234.39 234.39 0 01-.183 33.1c8.185-2.695 17.234-.291 25.668-2.03 17.958-3.7 29.17-24.953 47.461-26.251 8.65-.607 17.958 3.46 25.677-.5 3.76-1.93 6.43-5.531 8.218-9.366a33.121 33.121 0 001.988-22.208c-1.356-5.149-3.992-10.181-3.477-15.479.441-4.533 3.152-8.534 6.28-11.844 8.892-9.441 21.8-15.213 28.189-26.5a30.205 30.205 0 00-3.585-33.986c-2.113-2.387-4.625-4.433-6.471-7.028-3.069-4.317-4.051-9.773-4.417-15.063-.873-12.684 1.281-26.1-2.82-38.419-3.745-11.222-15.095-17.152-25.575-20.837z"
                data-name="Path 28"
                opacity="0.51"
                transform="translate(790.902 124.668)"
              ></path>
              <AccentColorPathStroke
                fillColor={fillColor}
                fill="none"
                stroke="#f64e3e"
                strokeMiterlimit="10"
                strokeWidth="1"
                d="M1771.053 369.576s-36.4 202.211-83.69 226.324"
                data-name="Path 29"
                opacity="0.6"
              ></AccentColorPathStroke>
              <AccentColorPathStroke
                fillColor={fillColor}
                fill="none"
                stroke="#f64e3e"
                strokeMiterlimit="10"
                strokeWidth="1"
                d="M1669.755 425.546s38.993 5.357 77.953 45.406"
                data-name="Path 30"
              ></AccentColorPathStroke>
              <AccentColorPathStroke
                fillColor={fillColor}
                fill="none"
                stroke="#f64e3e"
                strokeMiterlimit="10"
                strokeWidth="1"
                d="M1740.854 494.433s30.019-29.353 76.9-24.362"
                data-name="Path 31"
                opacity="0.6"
              ></AccentColorPathStroke>
              <AccentColorPathStroke
                fillColor={fillColor}
                fill="none"
                stroke="#f64e3e"
                strokeMiterlimit="10"
                strokeWidth="1"
                d="M1652.629 507.192s54.764 4.65 75.042 25.685"
                data-name="Path 32"
              ></AccentColorPathStroke>
              <AccentColorPathStroke
                fillColor={fillColor}
                fill="none"
                stroke="#f64e3e"
                strokeMiterlimit="10"
                strokeWidth="1"
                d="M1719.436 552.457s30.684-5.373 58.972 12.726"
                data-name="Path 33"
                opacity="0.6"
              ></AccentColorPathStroke>
              <path
                fill="url(#linear-gradient)"
                d="M74.91 0v411.892h604.637V0z"
                data-name="Path 34"
                transform="translate(1026.356 286)"
              ></path>
              <path
                fill="#fff"
                d="M0 0H589.266V385.749H0z"
                data-name="Rectangle 46"
                transform="translate(1110.232 304.69)"
              ></path>
              <path
                fill="#eee"
                d="M0 0H589.266V28.38H0z"
                data-name="Rectangle 47"
                transform="translate(1110.232 286.341)"
              ></path>
              <circle
                cx="6.879"
                cy="6.879"
                r="6.879"
                fill="#ff5252"
                data-name="Ellipse 37"
                transform="translate(1125.778 293.22)"
              ></circle>
              <circle
                cx="6.879"
                cy="6.879"
                r="6.879"
                fill="#ff0"
                data-name="Ellipse 38"
                transform="translate(1144.701 293.22)"
              ></circle>
              <circle
                cx="6.879"
                cy="6.879"
                r="6.879"
                fill="#69f0ae"
                data-name="Ellipse 39"
                transform="translate(1163.624 293.22)"
              ></circle>
              <AccentColorPathFill
                fillColor={fillColor}
                data-testid="path-fill"
                fill="#f64e3e"
                d="M0 0H219.587V9.149H0z"
                data-name="Rectangle 48"
                opacity="0.5"
                transform="translate(1132.815 360.177)"
              >
                <animate
                  fill="freeze"
                  attributeName="opacity"
                  attributeType="XML"
                  dur={`12s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                  values="
                  0.75;
                  0;
                  0.75;
                "
                  from=""
                  to=""
                ></animate>
              </AccentColorPathFill>
              <AccentColorPathFill
                fillColor={fillColor}
                fill="#f64e3e"
                d="M0 0H219.587V9.149H0z"
                data-name="Rectangle 49"
                opacity="0.5"
                transform="translate(1132.815 378.476)"
              >
                <animate
                  fill="freeze"
                  attributeName="opacity"
                  attributeType="XML"
                  dur={`6s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                  values="
                  0.75;
                  0;
                  0.75;
                "
                  from=""
                  to=""
                ></animate>
              </AccentColorPathFill>
              <AccentColorPathFill
                fillColor={fillColor}
                fill="#f64e3e"
                d="M0 0H219.587V9.149H0z"
                data-name="Rectangle 50"
                opacity="0.5"
                transform="translate(1132.815 396.775)"
              >
                <animate
                  fill="freeze"
                  attributeName="opacity"
                  attributeType="XML"
                  dur={`10s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                  values="
                  0.75;
                  0;
                  0.75;
                "
                  from=""
                  to=""
                ></animate>
              </AccentColorPathFill>
              <AccentColorPathFill
                fillColor={fillColor}
                fill="#f64e3e"
                d="M0 0H143.896V9.149H0z"
                data-name="Rectangle 51"
                opacity="0.5"
                transform="translate(1208.506 415.074)"
              >
                <animate
                  fill="freeze"
                  attributeName="opacity"
                  attributeType="XML"
                  dur={`8s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                  values="
                  0.75;
                  0;
                  0.75;
                "
                  from=""
                  to=""
                ></animate>
              </AccentColorPathFill>
              <AccentColorPathFill
                fillColor={fillColor}
                fill="#f64e3e"
                d="M0 0H115.616V9.149H0z"
                data-name="Rectangle 52"
                opacity="0.5"
                transform="translate(1132.815 433.373)"
              >
                <animate
                  fill="freeze"
                  attributeName="opacity"
                  attributeType="XML"
                  dur={`6s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                  values="
                  0.75;
                  0;
                  0.75;
                "
                  from=""
                  to=""
                ></animate>
              </AccentColorPathFill>
              <AccentColorPathFill
                fillColor={fillColor}
                fill="#f64e3e"
                d="M0 0H88.999V9.149H0z"
                data-name="Rectangle 53"
                opacity="0.5"
                transform="translate(1195.198 451.672)"
              >
                <animate
                  fill="freeze"
                  attributeName="opacity"
                  attributeType="XML"
                  dur={`8s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                  values="
                  0.75;
                  0;
                  0.75;
                "
                  from=""
                  to=""
                ></animate>
              </AccentColorPathFill>

              <path
                fill="url(#linear-gradient-2)"
                d="M1038.171 461.6a3.917 3.917 0 00.832-2.4v-.067c0-.017.05-.175.075-.258v-.108a2.373 2.373 0 000-.241v-.1a1.68 1.68 0 000-.3c-.491-3.327-20.262-25-25.2-51.445a46.754 46.754 0 00-2.437-8.426 11.643 11.643 0 00-.266-4.076c-.832-3.385-2.5-6.82-1.664-10.2a8.248 8.248 0 01.458-1.289 50.4 50.4 0 002.853-4.733 11.439 11.439 0 00.832-1.663c3.036-8-6.363-16.261-4.633-24.612.749-3.618 3.552-6.779 3.477-10.464-.091-4.217-3.968-7.486-7.993-9.05s-8.459-2.013-12.41-3.76c-8.659-3.834-13.4-13.092-21.3-18.241-10.039-6.529-23.14-5.365-35.175-3.676a2.437 2.437 0 00-1.846 1.364h-.116c-.091.266-.2.524-.316.782-1.664 2.836-4.467 4.991-7.236 6.979-3.377 2.379-7 4.724-9.058 8.251a17.546 17.546 0 00-.79 1.505c-4.492 8.01.907 11.47 7.486 13.391a20.716 20.716 0 00-.3 3.469c0 11.645 9.74 21.152 21.742 21.152a22.519 22.519 0 002.836-.183l.7.457h.158a13.171 13.171 0 014.991 6.014L946.893 375s.283.732.7 1.9l-27.4 12.626c-10.38.482-27.182-32.214-27.182-32.214s-2.5-18.748-11.37-22.117c-2.678-1.015-3.743 1.106-3.926 4.566-3.968 4.159 2.695 27.515 2.695 27.515l21.252 37.5c1.98 3.843 2.5 6.247 11.861 7.694 7.711 1.181 31.732-7.353 40.091-10.447l.391 3.327a19.487 19.487 0 00-1.264 7.96c0 6.13 2.737 15.047 16.095 22.15 0 0 13.791 17.825 12.26 34.651 0 0 .665.7 1.73 1.614-.15 4.741-.832 10.588-3.219 12.867a1.272 1.272 0 00-.374 1.181 1.206 1.206 0 00.582 1.289l-17.409 30.484c-.649.832-1.306 1.664-1.98 2.5a89.228 89.228 0 01-10.726 11.432c-2.9 2.587-5.922 5.415-6.521 6.471-.923 1.664-3.244 7.028-2.262 11.462a59.889 59.889 0 011.547 16.419l-2.254 39.434a102.863 102.863 0 01-3.119 13.017h-.341s-8.4 10.1-21.742 12.477-12.851 9.149-8.9 10.1 51.894-.965 51.894-.965 1.813-3.535 1.314-6.762c15.3-1.472 36.506-3.968 36.506-3.968s2.9-6.979-1.314-10.023a9.848 9.848 0 01-3.377-4.8c-.25-1.065-.524-2.279-.79-3.552-.067-.624-.067-1.006-.067-1.006h-.141c-.74-3.718-1.331-7.7-.99-9.79 1.239-5.531 4.45-37.5-3.46-46.637-3.593-4.159-3.1-8.883-1.505-12.826 9.49-6.213 22.765-19.58 30.443-27.665.432.358.832.715 1.206 1.073l.25.241s26.126-12.934 26.234-35.766a35.192 35.192 0 00-4.142-16.81zm-83.684 161.065a13.426 13.426 0 01.091-2.5l-.832-.091c.482-3.627 1.664-7.686 4.309-10.489a89.085 89.085 0 009.515-26.35l4.8 18.158s.482 3.76.615 7.735h-.085a40.553 40.553 0 01-18.413 13.537z"
                data-name="Path 35"
                opacity="0.5"
                transform="translate(788.322 114.12)"
              ></path>
              <path
                fill="#fdb797"
                d="M977.261 394.223s-11.736 4.225-18.3 11.27c0 0-31.932 12.676-40.856 11.27s-9.391-3.76-11.27-7.486l-20.2-36.6s-8.451-30.526 0-27.24 10.813 21.626 10.813 21.626S913.423 399 923.28 398.532l26.741-12.743s6.105-8.925 8.925-8.451 18.315 16.885 18.315 16.885z"
                data-name="Path 36"
                transform="translate(787.24 107.388)"
              ></path>
              <g
                data-name="Group 4"
                opacity="0.05"
                transform="translate(1670.124 452.58)"
              >
                <path
                  d="M977.261 394.223s-11.736 4.225-18.3 11.27c0 0-31.932 12.676-40.856 11.27s-9.391-3.76-11.27-7.486l-20.2-36.6s-8.451-30.526 0-27.24 10.813 21.626 10.813 21.626S913.423 399 923.28 398.532l26.741-12.743s6.105-8.925 8.925-8.451 18.315 16.885 18.315 16.885z"
                  data-name="Path 37"
                  transform="translate(-882.884 -345.193)"
                ></path>
              </g>
              <path
                fill="#f9ce43"
                d="M971.276 383.083l-9.366 7.353s4.683 12.252 3.51 16.544 18.731-6.737 18.731-6.737l-8.193-18.382z"
                data-name="Path 38"
                transform="translate(773.945 101.219)"
              ></path>
              <g
                data-name="Group 5"
                opacity="0.05"
                transform="translate(1735.855 483.079)"
              >
                <path
                  d="M971.276 383.083l-9.366 7.353s4.683 12.252 3.51 16.544 18.731-6.737 18.731-6.737l-8.193-18.382z"
                  data-name="Path 39"
                  transform="translate(-961.91 -381.86)"
                ></path>
              </g>
              <path
                fill="#fdb797"
                d="M953.73 370.643s20.894 6.812 11.27 18.781l30.052-14.556s-12.676.94-20.661-18.3z"
                data-name="Path 40"
                transform="translate(775.321 105.474)"
              ></path>
              <path
                fill="#fdb797"
                d="M995.926 520.85L970.1 567.338l17.384 67.589s1.88 15.03-.94 16.436h19.721s-3.8-13.308-2.82-17.841c1.173-5.4 4.225-36.6-3.327-45.548s3.76-20.661 3.76-20.661l22.541-35.691z"
                data-name="Path 41"
                transform="translate(772.567 77.837)"
              ></path>
              <g
                data-name="Group 6"
                opacity="0.05"
                transform="translate(1742.667 598.687)"
              >
                <path
                  d="M995.926 520.85L970.1 567.338l17.384 67.589s1.88 15.03-.94 16.436h19.721s-3.518-13.383-2.82-17.841 4.225-36.6-3.327-45.548 3.76-20.661 3.76-20.661l22.541-35.691z"
                  data-name="Path 42"
                  transform="translate(-970.1 -520.85)"
                ></path>
              </g>
              <path
                fill="#0d134d"
                d="M985.567 667.12s-7.153 10.539-19.63 13.882-11.462 9.865-7.644 10.5 49.074-4.849 49.074-4.849 2.753-6.812-1.248-9.79-4.026-9.149-4.026-9.149z"
                data-name="Path 43"
                transform="translate(774.983 53.229)"
              ></path>
              <g
                data-name="Group 7"
                opacity="0.1"
                transform="translate(1766.564 579.897)"
              >
                <path
                  d="M1002.174 498.26s1.115 15.271-2.953 19.28a1.231 1.231 0 00.25 1.98l12.094 6.446 10.813-20.661z"
                  data-name="Path 44"
                  transform="translate(-998.83 -498.26)"
                ></path>
              </g>
              <path
                fill="#e23553"
                d="M1002.174 497.7s1.115 15.271-2.953 19.28a1.231 1.231 0 00.25 1.98l12.094 6.446 10.813-20.661z"
                data-name="Path 45"
                transform="translate(767.734 81.731)"
              ></path>
              <g
                data-name="Group 8"
                opacity="0.84"
                transform="translate(1766.564 580.263)"
              >
                <path
                  fill="#e7ebed"
                  d="M1002.174 498.7s1.115 15.271-2.953 19.28a1.231 1.231 0 00.25 1.98l12.094 6.446 10.813-20.661z"
                  data-name="Path 46"
                  transform="translate(-998.83 -498.7)"
                ></path>
              </g>
              <path
                fill="#fdb797"
                d="M993.824 533.83s-6.979 4.658-21.626 23.83a86.257 86.257 0 01-10.189 11.171c-2.753 2.5-5.623 5.29-6.2 6.321-.882 1.589-3.086 6.87-2.146 11.2a60.1 60.1 0 011.472 16.036L953 640.9s-2.82 17.376-6.571 19.255l19.255 3.327s-1.406-12.21 4.225-18.3c0 0 13.15-22.541 9.865-47.9 0 0-1.406-11.27 11.27-17.376s38.511-35.691 38.511-35.691z"
                data-name="Path 47"
                transform="translate(776.55 75.653)"
              ></path>
              <path
                fill="#0d134d"
                d="M943.982 677.8s-7.985 9.865-20.661 12.21-12.21 8.925-8.451 9.865 49.307-.94 49.307-.94 3.327-6.571-.466-9.865-2.82-9.391-2.82-9.391z"
                data-name="Path 48"
                transform="translate(782.25 51.433)"
              ></path>
              <g
                data-name="Group 9"
                opacity="0.1"
                transform="translate(1767.752 572.386)"
              >
                <path
                  d="M1014.827 501.44s-5.731 19.247-12.992 24.853a.932.932 0 00.241 1.622c6.005 2.188 25.3 9.557 32.006 16.261l.233.233s40.15-20.428 18.548-55.18z"
                  data-name="Path 49"
                  transform="translate(-1001.461 -489.23)"
                ></path>
              </g>
              <path
                fill="#e7ebed"
                d="M1014.827 500.88s-5.731 19.247-12.992 24.853a.932.932 0 00.241 1.622c6.005 2.188 25.3 9.557 32.006 16.261l.233.233s40.15-20.428 18.548-55.179z"
                data-name="Path 50"
                transform="translate(767.292 83.25)"
              ></path>
              <g
                data-name="Group 10"
                opacity="0.1"
                transform="translate(1739.465 479.361)"
              >
                <path
                  d="M975.932 386.722a36.739 36.739 0 01-9.682 4.625l3.227 28.721s-7.544 16.885 14.032 28.679c0 0 13.1 17.409 11.645 33.845 0 0 7.028 7.536 11.728 5.664s.466.94 1.406.474 2.811 3.767 17.376.042 24.953-13.549 24.462-16.843-19.189-24.471-23.822-50.314-32.289-44.225-32.289-44.225-.915.507-2.5 1.181a109.353 109.353 0 00-15.583 8.151z"
                  data-name="Path 51"
                  transform="translate(-966.25 -377.39)"
                ></path>
              </g>
              <g
                data-name="Group 11"
                opacity="0.1"
                transform="translate(1767.757 571.92)"
              >
                <path
                  d="M1001.469 534a.915.915 0 00.607.94c5.174 1.888 20.212 7.619 28.563 13.458-7.228-5.839-22.607-11.898-29.17-14.398z"
                  data-name="Path 52"
                  transform="translate(-1001.466 -496.296)"
                ></path>
                <path
                  d="M1059.18 488.67l-.832.283c18.457 32.264-16.3 51.753-19.339 53.375a15.52 15.52 0 011.431 1.289l.233.233s40.108-20.429 18.507-55.18z"
                  data-name="Path 53"
                  transform="translate(-1007.782 -488.67)"
                ></path>
              </g>
              <path
                fill="#121212"
                d="M1025.778 487.611c-14.556 3.76-16.436-.466-17.376 0s3.327-2.346-1.406-.466-11.736-5.639-11.736-5.639c.067-.832.1-1.605.1-2.412.05-15.7-11.878-31.4-11.878-31.4-21.626-11.736-14.09-28.646-14.09-28.646l-.882-7.7-2.42-21.01a36.7 36.7 0 009.665-4.641 109.939 109.939 0 0115.562-8.185c1.589-.682 2.5-1.189 2.5-1.189s27.706 18.3 32.439 44.142 23.481 46.962 23.947 50.247-9.869 13.139-24.425 16.899z"
                data-name="Path 54"
                transform="translate(773.242 102.151)"
              ></path>
              <g
                data-name="Group 12"
                opacity="0.1"
                transform="translate(1729.517 462.501)"
              >
                <path
                  d="M974.951 357.12l-20.661 14.09a35.151 35.151 0 018.06 4.017c7.037-.99 11.345-6.03 14.248-12.235-1.131-1.813-.632-3.435-1.647-5.872z"
                  data-name="Path 55"
                  transform="translate(-954.29 -357.12)"
                ></path>
              </g>
              <circle
                cx="20.661"
                cy="20.661"
                r="20.661"
                fill="#fdb797"
                data-name="Ellipse 40"
                transform="translate(1713.556 439.029)"
              ></circle>
              <g
                data-name="Group 13"
                opacity="0.1"
                transform="translate(1739.374 491.255)"
              >
                <path
                  d="M1029.072 487.851c-14.556 3.76-16.436-.466-17.376 0s3.327-2.346-1.406-.466-11.736-5.639-11.736-5.639c.067-.832.1-1.605.1-2.412.058-15.679-11.844-31.4-11.844-31.4-21.626-11.736-14.09-28.646-14.09-28.646l-.873-7.711-2.287-19.888a22.741 22.741 0 01-3.419 1.223l2.379 21.019.89 7.7s-7.486 16.91 14.09 28.646c0 0 11.9 15.72 11.844 31.4a19.3 19.3 0 01-.1 2.412s7.045 7.486 11.736 5.639.466.94 1.406.466 2.82 3.76 17.376 0a50.43 50.43 0 0018.191-8.908 51.2 51.2 0 01-14.881 6.565z"
                  data-name="Path 56"
                  transform="translate(-966.14 -391.69)"
                ></path>
              </g>
              <path
                fill="#fdb797"
                d="M975.851 399.143s-11.736 4.225-18.3 11.27c0 0-31.932 12.676-40.856 11.27s-9.391-3.76-11.27-7.486l-20.2-36.6s-8.451-30.526 0-27.24 10.813 21.626 10.813 21.626 15.97 31.932 25.826 31.466l26.75-12.759s6.105-8.925 8.925-8.451 18.312 16.904 18.312 16.904z"
                data-name="Path 57"
                transform="translate(787.477 106.56)"
              ></path>
              <g
                data-name="Group 14"
                opacity="0.1"
                transform="translate(1734.689 488.496)"
              >
                <path
                  d="M973.294 388.387s-9.74-.89-12.56 11.32 21.626 19.721 21.626 19.721l13.15-18.3z"
                  data-name="Path 58"
                  transform="translate(-960.508 -388.373)"
                ></path>
              </g>
              <path
                fill="#121212"
                d="M973.864 388.387s-9.74-.89-12.56 11.32 21.626 19.721 21.626 19.721l13.15-18.3z"
                data-name="Path 59"
                transform="translate(774.085 100.123)"
              ></path>
              <g
                data-name="Group 15"
                opacity="0.1"
                transform="translate(1739.365 478.471)"
              >
                <path
                  d="M970.738 391a25.211 25.211 0 01-4.608 1.78l.083.707a48.567 48.567 0 004.525-2.487z"
                  data-name="Path 60"
                  transform="translate(-966.13 -378.79)"
                ></path>
                <path
                  d="M1052.814 470.709c-.466-3.327-19.255-24.421-23.947-50.247s-32.439-44.142-32.439-44.142-.915.507-2.5 1.189a112.645 112.645 0 00-12.293 6.2q3.951-2.079 8.068-3.843c1.589-.682 2.5-1.189 2.5-1.189s27.706 18.3 32.439 44.142 23.481 46.962 23.947 50.247c.3 2.071-3.7 6.754-10.347 10.88 9.124-4.537 14.93-10.758 14.572-13.237z"
                  data-name="Path 61"
                  transform="translate(-968.739 -376.32)"
                ></path>
              </g>
              <path
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="1"
                d="M1753.53 488.702s12.144 6.014 14.431 17.575"
                data-name="Path 62"
                opacity="0.1"
              ></path>
              <g
                data-name="Group 16"
                opacity="0.1"
                transform="translate(1705.193 424.823)"
              >
                <path
                  d="M943.689 345.523c1.938.433 4.1 1.04 5.057 2.778.69 1.264.566 2.853 1.239 4.159 1.73 3.261 6.8 2.138 9.981 4.051 5.822 3.51 2.021 14.456 7.819 17.983 1.09.665 2.379.932 3.5 1.539 4.9 2.678 4.209 9.765 3.327 15.28s.166 13.059 5.7 13.841c3.044.424 6.463-1.589 9.025.1 1.339.882 1.946 2.5 3.069 3.668a5.589 5.589 0 006.005 1.239c1.88-.782 3.236-2.57 5.19-3.144 3.144-.923 6.654 1.622 9.682.449s3.718-5.548 2.936-8.85-2.379-6.654-1.547-9.981c.69-2.745 2.936-4.841 3.918-7.486 2.878-7.81-6.047-15.878-4.4-24.038.715-3.535 3.377-6.654 3.327-10.222-.083-4.159-3.767-7.311-7.6-8.842s-8.043-1.963-11.794-3.668c-8.226-3.743-12.726-12.793-20.245-17.816a28.389 28.389 0 00-11.137-4.275 36.515 36.515 0 00-29.062 7.9c-.74.6-1.5 1.164-2.262 1.713-3.211 2.321-6.654 4.608-8.609 8.052-7.14 12.426 9.254 13.847 16.881 15.57z"
                  data-name="Path 63"
                  transform="translate(-925.046 -311.822)"
                ></path>
              </g>
              <AccentColorPathFill
                fillColor={fillColor}
                fill="#f64e3e"
                d="M944.389 344.115c1.938.433 4.1 1.04 5.057 2.778.69 1.264.566 2.853 1.239 4.159 1.73 3.261 6.8 2.138 9.981 4.051 5.822 3.51 2.021 14.456 7.819 17.983 1.09.665 2.379.932 3.5 1.539 4.9 2.678 4.209 9.765 3.327 15.28s.166 13.059 5.7 13.841c3.044.424 6.463-1.589 9.025.1 1.339.882 1.946 2.5 3.069 3.668a5.589 5.589 0 006.005 1.239c1.88-.782 3.236-2.57 5.19-3.144 3.144-.923 6.654 1.622 9.682.449s3.718-5.548 2.936-8.85-2.379-6.654-1.547-9.981c.69-2.745 2.936-4.841 3.918-7.486 2.878-7.81-6.047-15.878-4.4-24.038.715-3.535 3.377-6.654 3.327-10.222-.083-4.159-3.767-7.311-7.6-8.842s-8.043-1.963-11.794-3.668c-8.226-3.743-12.726-12.793-20.245-17.816a27.864 27.864 0 00-10.064-4.076 36.539 36.539 0 00-30.16 7.719 33.79 33.79 0 01-2.238 1.664c-3.211 2.321-6.654 4.608-8.609 8.052-7.139 12.457 9.263 13.886 16.882 15.601z"
                data-name="Path 64"
                transform="translate(780.029 113.237)"
              ></AccentColorPathFill>
              <AccentColorPathFill
                fillColor={fillColor}
                fill="#f64e3e"
                d="M0 0H258.68V148.886H0z"
                data-name="Rectangle 54"
                opacity="0.5"
                transform="translate(1381.514 424.223)"
              >
                <animate
                  fill="freeze"
                  attributeName="opacity"
                  attributeType="XML"
                  dur={`16s`}
                  begin={`1s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                  values="
                  0.75;
                  0.25;
                  0.75;
                "
                  from=""
                  to=""
                ></animate>
              </AccentColorPathFill>
              <g data-name="image">
                <path
                  fill="#eee"
                  d="M0 0H258.68V148.886H0z"
                  data-name="Rectangle 55"
                  transform="translate(1412.289 438.363)"
                ></path>
                <AccentColorPathFill
                  fillColor={fillColor}
                  fill="#f64e3e"
                  d="M717.628 498.971H572.9V471.7c35.358-16.53 89.764-25.813 144.728 27.271z"
                  data-name="Path 65"
                  transform="translate(839.389 88.279)"
                ></AccentColorPathFill>
                <g
                  data-name="Group 17"
                  opacity="0.1"
                  transform="translate(1488.812 547.057)"
                >
                  <path
                    d="M845.394 495.07v3.9H664.9v-.832s88.816-86.478 180.494-3.068z"
                    data-name="Path 66"
                    transform="translate(-664.9 -458.778)"
                  ></path>
                </g>
                <AccentColorPathFill
                  fillColor={fillColor}
                  fill="#f64e3e"
                  d="M847.394 495.07v3.9H666.9v-.832s88.816-86.478 180.494-3.068z"
                  data-name="Path 67"
                  transform="translate(823.575 88.279)"
                ></AccentColorPathFill>
                <AccentColorPathFill
                  fillColor={fillColor}
                  as="circle"
                  cx="13.308"
                  cy="13.308"
                  r="13.308"
                  fill="#f64e3e"
                  data-name="Ellipse 41"
                  transform="translate(1428.925 451.672)"
                ></AccentColorPathFill>
                <path
                  fill="#f4f4f4"
                  d="M742.346 347.93c-1.522 0-3.219 0-4.375.091a5.322 5.322 0 00-1.514.308l-7.827 2.811c6.321.158 12.917.108 19.4.058l36.332-.283c3.71 0 7.6-.067 10.688-.283 2.071-.15 3.593-.366 5.506-.532 6.879-.615 16.9-.5 25.86-.466s19.771-.2 22.923-1.1h-19.23c-2.071 0-4.25 0-6.08-.1-2.138-.125-3.443-.358-5.323-.524-3.111-.266-7.4-.3-11.4-.316-21.916-.088-43.559.428-64.96.336z"
                  data-name="Path 68"
                  transform="translate(813.19 106.985)"
                ></path>
                <path
                  fill="#f4f4f4"
                  d="M770.4 367.363h-.948a1.156 1.156 0 00-.333.067l-1.664.607h4.2l7.869-.058c.832 0 1.664 0 2.312-.058.449 0 .782-.083 1.189-.116 1.489-.133 3.66-.108 5.606-.1a30.544 30.544 0 004.991-.241h-5.473a11.336 11.336 0 01-1.156-.116c-.674-.058-1.605-.067-2.5-.067-4.731-.001-9.422.107-14.093.082z"
                  data-name="Path 69"
                  transform="translate(806.658 103.672)"
                ></path>
                <path
                  fill="#f4f4f4"
                  d="M703.4 395.363h-.948a1.155 1.155 0 00-.333.067l-1.664.607h4.2l7.869-.058c.832 0 1.664 0 2.312-.058.449 0 .782-.083 1.189-.116 1.489-.133 3.66-.108 5.606-.1a30.544 30.544 0 004.991-.241h-5.473a11.339 11.339 0 01-1.156-.116c-.674-.058-1.605-.067-2.5-.067-4.731-.001-9.422.107-14.093.082z"
                  data-name="Path 70"
                  transform="translate(817.929 98.961)"
                ></path>
                <AccentColorPathFill
                  fillColor={fillColor}
                  fill="#f64e3e"
                  d="M665.1 480.125h-6.255s-1.955-68.4 6.255-89.515h1.564s-5.47 77.396-1.564 89.515z"
                  data-name="Path 71"
                  transform="translate(824.964 99.747)"
                ></AccentColorPathFill>
                <AccentColorPathFill
                  fillColor={fillColor}
                  fill="#f64e3e"
                  d="M657.123 379.427s-5.082 14.074-2.737 20.328c0 0 3.518-12.9 7.619-14.855s8.4 14.855 8.4 14.855 2.346-10.555-1.955-19.131c0 0 8.6 4.691 12.9 13.683 0 0 .782-5.822-9.382-17.983 0 0 8.991 2.346 14.855 7.819 0 0 1.955-4.3-10.164-11.337 0 0 1.564-5.082 10.946-2.737 0 0 0-6.654-14.855-5.473 0 0 0-4.3 9.773-3.518 0 0 0-5.473-11.337-3.518 0 0 2.346-3.518 3.909-4.3a7.861 7.861 0 00-5.473 1.564s.391-7.037-5.473-9.773l-.782 9.773s-6.571-7.744-5.082-6.255a17.145 17.145 0 011.176 7.431s-6.654-5.473-14.855.391c0 0 10.164.782 11.728 4.3 0 0-8.6-1.564-10.555-.391 0 0 6.654 2.346 6.255 3.909 0 0-11.728 0-13.308 4.3 0 0 12.119 1.564 12.9 2.737 0 0-14.073 10.164-14.855 12.9 0 0 14.464-8.6 16.81-8.6s-10.555 12.477-9.773 15.637c.032-.028 10.62-12.538 13.315-11.756z"
                  data-name="Path 72"
                  transform="translate(828.644 107.412)"
                ></AccentColorPathFill>
                <AccentColorPathFill
                  fillColor={fillColor}
                  fill="#f64e3e"
                  d="M758.918 481.318h4.774s1.5-52.26-4.774-68.388h-1.2s4.194 59.114 1.2 68.388z"
                  data-name="Path 73"
                  transform="translate(808.296 95.992)"
                ></AccentColorPathFill>
                <AccentColorPathFill
                  fillColor={fillColor}
                  fill="#f64e3e"
                  d="M758.4 404.387s3.884 10.755 2.088 15.529c0 0-2.687-9.856-5.822-11.345s-6.421 11.345-6.421 11.345-1.788-8.06 1.5-14.631a25.959 25.959 0 00-9.856 10.455s-.6-4.483 7.17-13.741c0 0-6.87 1.788-11.345 5.972 0 0-1.5-3.285 7.769-8.659 0 0-1.2-3.884-8.359-2.088 0 0 0-5.074 11.345-4.159 0 0 0-3.285-7.486-2.687 0 0 0-4.159 8.659-2.687 0 0-1.788-2.687-2.986-3.285a6.005 6.005 0 014.159 1.2s-.3-5.373 4.159-7.486l.6 7.486s4.991-5.914 3.884-4.774a13.1 13.1 0 00-.9 5.673s5.074-4.159 11.345.3c0 0-7.769.6-8.958 3.285 0 0 6.571-1.2 8.06-.3 0 0-5.074 1.788-4.774 2.986 0 0 8.958 0 10.156 3.286 0 0-9.258 1.2-9.856 2.088 0 0 10.755 7.769 11.345 9.856 0 0-11.046-6.571-12.843-6.571s8.06 9.557 7.486 11.944c.038-.034-8.019-9.579-10.119-8.992z"
                  data-name="Path 74"
                  transform="translate(812.099 101.848)"
                ></AccentColorPathFill>
                <AccentColorPathFill
                  fillColor={fillColor}
                  fill="#f64e3e"
                  d="M827.74 474.3h2.96s.923-32.364-2.961-42.354H827s2.587 36.643.74 42.354z"
                  data-name="Path 75"
                  transform="translate(796.641 92.792)"
                ></AccentColorPathFill>
                <AccentColorPathFill
                  fillColor={fillColor}
                  fill="#f64e3e"
                  d="M827.421 426.656s2.4 6.654 1.3 9.615c0 0-1.664-6.105-3.61-7.029s-3.976 7.029-3.976 7.029-1.106-4.991.923-9.066a16.078 16.078 0 00-6.105 6.471s-.366-2.778 4.442-8.509a18.765 18.765 0 00-7.028 3.7s-.923-2.038 4.808-5.365c0 0-.74-2.4-5.182-1.3 0 0 0-3.144 7.028-2.587 0 0 0-2.038-4.625-1.664 0 0 0-2.587 5.365-1.664a8.124 8.124 0 00-1.846-2.038 3.718 3.718 0 012.587.74s-.183-3.327 2.587-4.625l.366 4.625s3.111-3.66 2.4-2.961a8.109 8.109 0 00-.557 3.51 5.764 5.764 0 017.029.183s-4.808.366-5.548 2.038c0 0 4.067-.74 4.991-.183 0 0-3.144 1.106-2.961 1.846 0 0 5.548 0 6.288 2.038 0 0-5.731.74-6.105 1.3 0 0 6.654 4.808 7.028 6.105 0 0-6.845-4.067-7.952-4.067s4.991 5.922 4.625 7.394c.016.008-4.983-5.91-6.272-5.536z"
                  data-name="Path 76"
                  transform="translate(798.998 96.423)"
                ></AccentColorPathFill>
                <path
                  fill="url(#linear-gradient-3)"
                  d="M694.481 436.089l-.624-3.327a1.8 1.8 0 00-.566-1.306l-2.886-1.414a3.267 3.267 0 01-.516-.832l.05-.075a1.729 1.729 0 00.333-.674 1.138 1.138 0 000-.191h.042a1.073 1.073 0 001.189-.832v-.075a1.073 1.073 0 01-.973.832 2.944 2.944 0 001.306-2.445v-.125a1.065 1.065 0 00.491-.715v-.075a1.064 1.064 0 01-.507.665 2.927 2.927 0 00-.183-.832h.075a1.073 1.073 0 001.073-1.073v-.075a1.073 1.073 0 01-1.065 1h-.133v-.05a1.755 1.755 0 001.231-1.422v-.075a1.066 1.066 0 01-.216.574 1.073 1.073 0 00-2.113-.316l-.191-.108a1.073 1.073 0 01.965-.782h-.075a1.073 1.073 0 00-1.023.724 2.945 2.945 0 00-3.71 1.065c-.225.166-.516.408-.507.616a2.035 2.035 0 00-.258.316 4.076 4.076 0 00-.333 2.221 2.354 2.354 0 01-.765 2.038 1.015 1.015 0 00.782 0 3.013 3.013 0 00.69-.408 1.547 1.547 0 00.491-.474v-.039a2.433 2.433 0 00.441.233c.058.5.075 1.073-.15 1.264l.042-.091a2.7 2.7 0 01-1.871.532 2.337 2.337 0 00-1.938 1.248l-.907 3.785v.134a.291.291 0 00.216.208l.283.075a5.871 5.871 0 01-.191 1.921 16.411 16.411 0 00-.324 2.828c.067.474.183 2.944.241 4.117a12.173 12.173 0 00-.241 1.214l-1.339 8.035s-1 6.43-.948 8.376l-.175 1.123s-2.72 3.41-1.921 3.893 2.03.69 3.2-1.123a2.935 2.935 0 01.749-1.123 1.1 1.1 0 00.374-.94l-.083-.832.141.05h.083a27.727 27.727 0 001.189-7.486s2.5-8.833 4.367-10.222v-.058l.175-.083.4 8.559-.408 9.432-.091.566s-2.72 3.41-1.921 3.893 2.03.69 3.2-1.123a2.936 2.936 0 01.749-1.123 1.1 1.1 0 00.374-.94l-.125-1.248c.466-1.589 1.664-6.163 1.173-8.817l.832-5.639c.832-.94.724-3.327.724-3.327.657-1.372.832-6.754.832-6.754l.166-2.662a2.209 2.209 0 01.374 0h.133v-.05a.25.25 0 00.058-.075h.05v-.07zm-2.329 5.406q-.112-.274-.25-.549h-.067v-.067a.323.323 0 010-.067v-.067a2.3 2.3 0 00.1-.274 1.039 1.039 0 00.158-.574 5.438 5.438 0 01.059 1.603zm-.25-2.279l-.166-1.78.05-.141.225 2.262zm-7.885.241a.624.624 0 00-.15.482V440a2.018 2.018 0 00.075.532l-.258 1.115v-2.129a4.708 4.708 0 00.449-.715 1.164 1.164 0 01-.117.657z"
                  data-name="Path 77"
                  transform="translate(821.771 94.409)"
                ></path>
                <path
                  fill="#72351c"
                  d="M687.115 426.254a3.926 3.926 0 00-.324 2.138 2.271 2.271 0 01-.74 1.963.981.981 0 00.757 0 2.9 2.9 0 00.665-.391 1.488 1.488 0 00.474-.457 1.763 1.763 0 00.108-.907 9.619 9.619 0 01.141-1.622c.05-.333.366-1.239 0-1.414s-.923.436-1.081.69z"
                  data-name="Path 78"
                  transform="translate(820.354 93.872)"
                ></path>
                <path
                  fill="#333"
                  d="M680.266 468.871l-.258 1.664s-2.62 3.327-1.846 3.751 1.955.665 3.086-1.081a2.828 2.828 0 01.715-1.081 1.056 1.056 0 00.358-.907l-.258-2.537z"
                  data-name="Path 79"
                  transform="translate(821.705 86.613)"
                ></path>
                <path
                  fill="#333"
                  d="M689.746 469.661l-.258 1.664s-2.62 3.327-1.846 3.751 1.955.665 3.086-1.081a2.828 2.828 0 01.715-1.081 1.056 1.056 0 00.358-.907l-.258-2.537z"
                  data-name="Path 80"
                  transform="translate(820.11 86.48)"
                ></path>
                <path
                  fill="#4d8af0"
                  d="M684.508 445.632s-1.231.89-1.664 3.984l-1.289 7.744s-1.09 7.02-.89 8.368l2.179.749a26.794 26.794 0 001.148-7.195s2.62-9.332 4.458-9.981l.391 8.243-.416 9.274 1.863.374s1.888-5.906 1.289-9.033l.973-6.654a9.937 9.937 0 00-.433-6.654z"
                  data-name="Path 81"
                  transform="translate(821.264 90.622)"
                ></path>
                <g
                  data-name="Group 18"
                  opacity="0.1"
                  transform="translate(1503.942 535.514)"
                >
                  <path
                    d="M688.671 450.321v-.141c-1.838.657-4.458 9.981-4.458 9.981a26.211 26.211 0 01-1.123 7.12l.233.083a26.8 26.8 0 001.148-7.195c-.009.009 2.387-8.475 4.2-9.848z"
                    data-name="Path 82"
                    transform="translate(-683.09 -445.788)"
                  ></path>
                  <path
                    d="M694.109 444.9h-.25a9.849 9.849 0 01.416 6.6l-.973 6.654c.574 2.961-1.1 8.409-1.273 8.983l.241.05s1.888-5.906 1.289-9.033l.973-6.654a9.748 9.748 0 00-.423-6.6z"
                    data-name="Path 83"
                    transform="translate(-684.594 -444.9)"
                  ></path>
                </g>
                <path
                  fill="#f55f44"
                  d="M683.28 438.434a.275.275 0 00.216.275 4.308 4.308 0 011.664.832c.915.715-.973-1.431-.973-1.431l-.632.141-.258.233z"
                  data-name="Path 84"
                  transform="translate(820.82 91.756)"
                ></path>
                <path
                  d="M683.28 438.434a.275.275 0 00.216.275 4.308 4.308 0 011.664.832c.915.715-.973-1.431-.973-1.431l-.632.141-.258.233z"
                  data-name="Path 85"
                  opacity="0.1"
                  transform="translate(820.82 91.756)"
                ></path>
                <path
                  fill="#f55f44"
                  d="M694.1 440.49a5.823 5.823 0 012.6-1.023.241.241 0 00.241-.241 2.072 2.072 0 00-2.841 1.264z"
                  data-name="Path 86"
                  transform="translate(819 91.597)"
                ></path>
                <path
                  d="M696.936 439.217s-2.179-.832-2.836 1.264c0 0 1.605-1.231 2.72-1.031"
                  data-name="Path 87"
                  opacity="0.1"
                  transform="translate(819 91.597)"
                ></path>
                <circle
                  cx="2.836"
                  cy="2.836"
                  r="2.836"
                  fill="#72351c"
                  data-name="Ellipse 42"
                  transform="translate(1507.735 517.955)"
                ></circle>
                <path
                  fill="#fdb797"
                  d="M688.545 429.282s.4 1.664 0 2-1.206.973-.6 1.464 2.778 1.323 3.5.915 1.547-.283 1.347-1.115-1.78-.657-1.8-4.791z"
                  data-name="Path 88"
                  transform="translate(820.072 93.497)"
                ></path>
                <path
                  d="M683.781 437.9a10.384 10.384 0 01-.175 2.695 15.812 15.812 0 00-.316 2.72c.083.6.258 4.558.258 4.558s-.316 3.468 1.372 3.152-.258-3.959-.258-3.959l.083-4.733a4.417 4.417 0 00.832-2.121c.123-1.139-1.796-2.312-1.796-2.312z"
                  data-name="Path 89"
                  opacity="0.1"
                  transform="translate(820.818 91.791)"
                ></path>
                <path
                  fill="#fdb797"
                  d="M683.751 437.9a10.384 10.384 0 01-.175 2.695 15.794 15.794 0 00-.316 2.72c.083.6.258 4.558.258 4.558s-.316 3.468 1.372 3.152-.258-3.959-.258-3.959l.083-4.733a4.418 4.418 0 00.832-2.121c.117-1.139-1.796-2.312-1.796-2.312z"
                  data-name="Path 90"
                  transform="translate(820.823 91.791)"
                ></path>
                <path
                  d="M696.19 438.21l-.233 3.7s-.141 5.19-.774 6.5c0 0 .175 3.643-1.522 3.552s.283-3.984.283-3.984.907-4.051.441-5.332l-.441-4.442z"
                  data-name="Path 91"
                  opacity="0.1"
                  transform="translate(819.189 91.739)"
                ></path>
                <path
                  fill="#fdb797"
                  d="M696.22 438.21l-.233 3.7s-.141 5.19-.774 6.5c0 0 .175 3.643-1.522 3.552s.283-3.984.283-3.984.907-4.051.441-5.332l-.441-4.442z"
                  data-name="Path 92"
                  transform="translate(819.184 91.739)"
                ></path>
                <path
                  d="M689.069 433.584s1.372.632 2.121-1.248l2.786 1.364a1.738 1.738 0 01.541 1.264l.6 3.211a2.053 2.053 0 00-2.67 1.206l.175 1.8a1.947 1.947 0 01-.091 1.347.3.3 0 000 .241.882.882 0 01-.832 1.148 16.916 16.916 0 00-2.238.175c-.6.175-2.412-.341-3.011 0s-1.863-.258-1.863-.258l.341-1.464s-.233-.715.058-.973.116-2.5-.141-3.127c0 0-1.031-.973-1.664-.832l.832-3.7a2.246 2.246 0 011.863-1.206 2.612 2.612 0 001.8-.516s-.62 1.368 1.393 1.568z"
                  data-name="Path 93"
                  opacity="0.1"
                  transform="translate(820.836 92.781)"
                ></path>
                <path
                  d="M689.21 433.5c.374.1 1.372.208 1.971-1.3l2.786 1.364a1.738 1.738 0 01.541 1.264l.6 3.211a2.053 2.053 0 00-2.67 1.206l.175 1.8.116.358a1.023 1.023 0 01-.141.915.324.324 0 00-.058.333.882.882 0 01-.832 1.148 16.916 16.916 0 00-2.238.175c-.6.175-2.412-.341-3.011 0s-1.863-.258-1.863-.258l.341-1.464s-.233-.715.058-.973.116-2.5-.141-3.127c0 0-1.031-.973-1.664-.832l.832-3.7a2.246 2.246 0 011.863-1.206 2.612 2.612 0 001.8-.516s-.674 1.231 1.1 1.5z"
                  data-name="Path 94"
                  opacity="0.1"
                  transform="translate(820.836 92.801)"
                ></path>
                <path
                  fill="#f55f44"
                  d="M689.209 433.564c.374.1 1.372.208 1.971-1.3l2.786 1.364a1.738 1.738 0 01.541 1.264l.6 3.211a2.053 2.053 0 00-2.67 1.206l.175 1.8a1.947 1.947 0 01-.092 1.347.3.3 0 000 .241.882.882 0 01-.832 1.148 16.909 16.909 0 00-2.237.175c-.6.175-2.412-.341-3.011 0s-1.863-.258-1.863-.258l.341-1.464s-.233-.715.058-.973.116-2.5-.141-3.127c0 0-1.031-.973-1.663-.832l.832-3.7a2.246 2.246 0 011.863-1.206 2.612 2.612 0 001.8-.516s-.674 1.231 1.1 1.5z"
                  data-name="Path 95"
                  transform="translate(820.838 92.792)"
                ></path>
                <path
                  d="M691.207 427.94l-2.437 1.522a7.908 7.908 0 01.141.832 2.345 2.345 0 00.873.166 2.5 2.5 0 001.58-.715 9.467 9.467 0 01-.158-1.8z"
                  data-name="Path 96"
                  opacity="0.1"
                  transform="translate(819.896 93.467)"
                ></path>
                <circle
                  cx="2.354"
                  cy="2.354"
                  r="2.354"
                  fill="#fdb797"
                  data-name="Ellipse 43"
                  transform="translate(1507.277 519.036)"
                ></circle>
                <circle
                  cx="1.031"
                  cy="1.031"
                  r="1.031"
                  fill="#72351c"
                  data-name="Ellipse 44"
                  transform="translate(1512.068 517.523)"
                ></circle>
                <path
                  fill="#72351c"
                  d="M694.131 425.627a1.031 1.031 0 01-1.031-.957v.075a1.031 1.031 0 002.063 0v-.075a1.031 1.031 0 01-1.032.957z"
                  data-name="Path 97"
                  transform="translate(819.168 94.017)"
                ></path>
                <path
                  fill="#72351c"
                  d="M693.458 426.771a1.031 1.031 0 01-.832-1.131v.066a1.032 1.032 0 102.03.374v-.075a1.031 1.031 0 01-1.2.765z"
                  data-name="Path 98"
                  transform="translate(819.25 93.854)"
                ></path>
                <path
                  fill="#72351c"
                  d="M692.5 429.771a1.031 1.031 0 01-.832-1.131v.067a1.032 1.032 0 002.03.374v-.075a1.031 1.031 0 01-1.2.765z"
                  data-name="Path 99"
                  transform="translate(819.412 93.349)"
                ></path>
                <path
                  fill="#72351c"
                  d="M694.131 424.965A1.031 1.031 0 01693.1 424v.075a1.031 1.031 0 002.063 0V424a1.031 1.031 0 01-1.032.965z"
                  data-name="Path 100"
                  transform="translate(819.167 94.13)"
                ></path>
                <path
                  fill="#72351c"
                  d="M692.583 424.283a1.031 1.031 0 01.973-1.023h-.075a1.031 1.031 0 100 2.063h.075a1.031 1.031 0 01-.973-1.04z"
                  data-name="Path 101"
                  transform="translate(819.277 94.254)"
                ></path>
                <path
                  d="M693.851 436.19a3.719 3.719 0 010 1.547s-.141 1.347.083 1.58"
                  data-name="Path 102"
                  opacity="0.1"
                  transform="translate(819.049 92.079)"
                ></path>
                <path
                  d="M685.471 436.57a3.719 3.719 0 010 1.547s-.141 1.347.083 1.58"
                  data-name="Path 103"
                  opacity="0.1"
                  transform="translate(820.458 92.015)"
                ></path>
                <path
                  d="M685.41 443.208a1.023 1.023 0 00.69 0 1.431 1.431 0 01.832 0"
                  data-name="Path 104"
                  opacity="0.1"
                  transform="translate(820.461 90.909)"
                ></path>
                <path
                  d="M685.83 440.7a5.948 5.948 0 002.379-.374s2.928.715 3.76.2"
                  data-name="Path 105"
                  opacity="0.1"
                  transform="translate(820.391 91.383)"
                ></path>
                <rect
                  width="1.805"
                  height="1.115"
                  fill="#fdb797"
                  data-name="Rectangle 56"
                  rx="0.557"
                  transform="translate(1504.091 544.447)"
                ></rect>
                <path
                  fill="#f0e4e4"
                  d="M683.28 455.992l.965-.042.832.133h-.291z"
                  data-name="Path 106"
                  transform="translate(820.82 88.755)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M691.1 450.39h.965l.832.083h-.291z"
                  data-name="Path 107"
                  transform="translate(819.504 89.69)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M691.1 450.63h.965l.832.083h-.291z"
                  data-name="Path 108"
                  transform="translate(819.504 89.65)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M691.1 450.88h.965l.832.083h-.291z"
                  data-name="Path 109"
                  transform="translate(819.504 89.608)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M691.1 451.12h.965l.832.083h-.291z"
                  data-name="Path 110"
                  transform="translate(819.504 89.567)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M683.28 456.93h.965l.832.1h-.291z"
                  data-name="Path 111"
                  transform="translate(820.82 88.59)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M683.28 456.81h.965l.832.1h-.291z"
                  data-name="Path 112"
                  transform="translate(820.82 88.61)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M683.28 456.69h.965l.832.1h-.291z"
                  data-name="Path 113"
                  transform="translate(820.82 88.63)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M683.28 456.57h.965l.832.1h-.291z"
                  data-name="Path 114"
                  transform="translate(820.82 88.651)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M683.28 455.812l.965-.042.832.133h-.291z"
                  data-name="Path 115"
                  transform="translate(820.82 88.785)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M683.28 455.6l.965-.042.832.133h-.291z"
                  data-name="Path 116"
                  transform="translate(820.82 88.82)"
                ></path>
                <path
                  d="M690.4 425.892a5.69 5.69 0 00.333 2.6 3.086 3.086 0 01-.125 2.5.832.832 0 00.732-.183 2.835 2.835 0 00.532-.624 1.662 1.662 0 00.324-.649 2.569 2.569 0 00-.166-1.1 14.139 14.139 0 01-.349-1.938c-.05-.4 0-1.547-.449-1.664s-.745.726-.832 1.058z"
                  data-name="Path 117"
                  opacity="0.1"
                  transform="translate(819.626 93.992)"
                ></path>
                <path
                  fill="#72351c"
                  d="M690.474 425.862a5.689 5.689 0 00.333 2.6 3.086 3.086 0 01-.125 2.5.832.832 0 00.732-.183 2.837 2.837 0 00.532-.624 1.664 1.664 0 00.324-.649 2.57 2.57 0 00-.166-1.1 14.136 14.136 0 01-.349-1.938c-.05-.4 0-1.547-.449-1.664s-.749.717-.832 1.058z"
                  data-name="Path 118"
                  transform="translate(819.615 93.997)"
                ></path>
                <path
                  d="M688.988 426.37c.2.208.241.516.408.749a1.472 1.472 0 001.164.466.657.657 0 01.341.075c.183.116.191.383.308.566a.665.665 0 00.973 0 1.605 1.605 0 00.374-1.023 6.409 6.409 0 000-1.239 1.9 1.9 0 00-.524-1.264 2.212 2.212 0 00-.923-.4 2.736 2.736 0 00-1.422-.108 2.564 2.564 0 00-.649.324q-.424.275-.832.557c-.308.216-.89.649-.324.882.358.165.807.09 1.106.415z"
                  data-name="Path 119"
                  opacity="0.1"
                  transform="translate(820.085 94.106)"
                ></path>
                <path
                  fill="#72351c"
                  d="M689.058 426.33c.2.208.241.516.408.749a1.472 1.472 0 001.164.466.657.657 0 01.341.075c.183.116.191.383.308.566a.665.665 0 00.973 0 1.605 1.605 0 00.374-1.023 6.408 6.408 0 000-1.239 1.9 1.9 0 00-.524-1.264 2.213 2.213 0 00-.923-.4 2.737 2.737 0 00-1.422-.108 2.56 2.56 0 00-.649.324q-.424.275-.832.557c-.308.216-.89.649-.324.882.358.165.832.098 1.106.415z"
                  data-name="Path 120"
                  transform="translate(820.074 94.113)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M691.17 450.39h.965l.832.083h-.274z"
                  data-name="Path 121"
                  transform="translate(819.492 89.69)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M691.17 450.63h.965l.832.083h-.274z"
                  data-name="Path 122"
                  transform="translate(819.492 89.65)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M691.17 450.88h.965l.832.083h-.274z"
                  data-name="Path 123"
                  transform="translate(819.492 89.608)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M691.17 451.12h.965l.832.083h-.274z"
                  data-name="Path 124"
                  transform="translate(819.492 89.567)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M690.67 464.39h.965l.832.083h-.291z"
                  data-name="Path 125"
                  transform="translate(819.576 87.335)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M690.67 464.64h.965l.832.083h-.291z"
                  data-name="Path 126"
                  transform="translate(819.576 87.293)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M690.67 464.88h.965l.832.083h-.291z"
                  data-name="Path 127"
                  transform="translate(819.576 87.253)"
                ></path>
                <path
                  fill="#f0e4e4"
                  d="M690.67 465.12h.965l.832.083h-.291z"
                  data-name="Path 128"
                  transform="translate(819.576 87.212)"
                ></path>
              </g>
            </g>
          </svg>
        )
      }}
    </VisibilitySensor>
  )
}

export default DeveloperMakingSite
