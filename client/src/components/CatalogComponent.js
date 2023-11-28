import React from "react";
import loadPage from "../pages/loadPage";
import errorPage from "../pages/errorPage";
import catalogPage from "../pages/catalogPage";

class CatalogComponent extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            oceanariums: {}
        };
    }

    componentDidMount() {        
        fetch('http://localhost:8000/oceanariums')
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    oceanariums: result
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
        const { error, isLoaded, oceanariums } = this.state;
        if (error) {
            return errorPage(error);
        } else if (!isLoaded) {
            return loadPage();
        } else {
            return catalogPage(oceanariums);
        }
    }
};
 
export default CatalogComponent;