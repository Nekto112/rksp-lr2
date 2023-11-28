import React from "react";
import loadPage from "../pages/loadPage";
import errorPage from "../pages/errorPage";
import molluscCatalogPage from "../pages/molluscCatalogPage";

class MolluscCatalogComponent extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            mollusc: {}
        };
    }

    componentDidMount() {
        fetch('http://localhost:8000/molluscs/incmplete/0')
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
            return molluscCatalogPage(mollusc);
        }
    }
};
 
export default MolluscCatalogComponent;