import React from "react";
import iconSvg from "../assets/svg/logo.svg";

interface IconProps {
    /**
     * Style for icon
     */
    style?: any;
}

function Icon(props: IconProps) {
    return (
        <div>
            <img src={iconSvg} alt="Icon" style={props.style} />
        </div>
    );
}

export default Icon;
