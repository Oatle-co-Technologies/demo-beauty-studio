import { useId } from "react";
import rose from "../assets/divider-rose.png";
import "./RoseDivider.css";

export default function RoseDivider() {
  const tintId = useId();
  return <div className="rose-divider" aria-hidden="true">
    <svg viewBox="0 0 1200 100" preserveAspectRatio="none" focusable="false">
      <defs>
        <filter id={tintId} colorInterpolationFilters="sRGB">
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="linear" slope="0.501176" intercept="0.334118" />
            <feFuncG type="linear" slope="0.327059" intercept="0.218039" />
            <feFuncB type="linear" slope="0.357647" intercept="0.238431" />
          </feComponentTransfer>
        </filter>
      </defs>
      <path d="M 4 58 C 85 12, 155 28, 230 57 S 340 90, 414 53 S 507 24, 584 48 S 690 61, 738 50 M 798 50 C 873 37, 907 70, 1010 60 S 1165 61, 1196 28" />
    </svg>
    <img style={{ filter: `url(#${tintId})` }} src={rose} alt="" width="1280" height="1280" />
  </div>;
}
