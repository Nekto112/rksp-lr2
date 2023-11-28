import React from "react";
import navigationBar from "../pages/navigationBar";
import headerPage from "../pages/headerPage";

class HeaderComponent extends React.Component  {
    constructor(props) {
        super(props);
    }

    render() {
        return headerPage();
    }
};
 
export default HeaderComponent;