import React from "react";
import loadPage from "../pages/loadPage";
import errorPage from "../pages/errorPage";
import fishCatalogPage from "../pages/fishCatalogPage";

class FishCatalogComponent extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            fishs: {}
        };
    }

    componentDidMount() {
        fetch('http://localhost:8000/fishs')
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    fishs: result
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
        const { error, isLoaded, fishs } = this.state;
        if (error) {
            return errorPage(error);
        } else if (!isLoaded) {
            return loadPage();
        } else {
            return fishCatalogPage(fishs);
        }
    }
};
 
export default FishCatalogComponent;