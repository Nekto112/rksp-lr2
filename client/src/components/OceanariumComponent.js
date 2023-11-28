import React from "react";
import oceanariumPage from "../pages/oceanariumPage";
import loadPage from "../pages/loadPage";
import errorPage from "../pages/errorPage";

class OceanariumComponent extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            oceanarium: {}
        };
    }

    componentDidMount() {
        const queryParameters = new URLSearchParams(window.location.search);
        const id = queryParameters.get("id");
        
        fetch('http://localhost:8000/oceanariums/'+id)
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    oceanarium: result
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
        const { error, isLoaded, oceanarium } = this.state;
        if (error) {
            return errorPage(error);
        } else if (!isLoaded) {
            return loadPage();
        } else {
            return oceanariumPage(oceanarium);
        }
    }
};
 
export default OceanariumComponent;