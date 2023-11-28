import React from "react";
import loadPage from "../pages/loadPage";
import errorPage from "../pages/errorPage";
import molluscPage from "../pages/molluscPage";

class MolluscComponent extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            mollusc: {}
        };
    }

    componentDidMount() {
        const queryParameters = new URLSearchParams(window.location.search);
        const id = queryParameters.get("id");
        
        fetch('http://localhost:8000/molluscs/'+id)
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    mollusc: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, mollusc } = this.state;
        if (error) {
            return errorPage(error);
        } else if (!isLoaded) {
            return loadPage();
        } else {
            return molluscPage(mollusc, mollusc.oceanariums);
        }
    }
};
 
export default MolluscComponent;