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
        fetch('http://localhost:8000/oceanariums/1')
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