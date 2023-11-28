import React from "react";
import navigationBar from "../pages/navigationBar";

class NavigationBarComponent extends React.Component  {
    constructor(props) {
        super(props);
    }

    render() {
        return navigationBar();
    }
};
 
export default NavigationBarComponent;