import * as React from "react";
import { MouseEventHandler, CSSProperties } from "react";

const Icon = (props: {
  width: number;
  height: number;
  style?: CSSProperties;
  onClick: MouseEventHandler<HTMLDivElement>;
  className: string;
}) => (
  <div
    style={{
      width: props.width + "em",
      height: props.height + "em",
      ...props.style,
    }}
    onClick={props.onClick}
    className={props.className}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={"100%"}
      height={"100%"}
      viewBox="0 0 512 512"
    >
      <defs>
        <style>
          {
            ".cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:20px}"
          }
        </style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g
          id="E421_Back_buttons_multimedia_play_stop"
          data-name="E421, Back, buttons, multimedia, play, stop"
        >
          <circle cx={256} cy={256} r={246} className="cls-1" />
          <path
            d="M352.26 256H170.43M223.91 202.52 170.44 256l53.47 53.48"
            className="cls-1"
          />
        </g>
      </g>
    </svg>
  </div>
);
export default Icon;
