import React from "react";
import oceanariumPage from "../pages/oceanariumPage";
import loadPage from "../pages/loadPage";
import errorPage from "../pages/errorPage";
import fishPage from "../pages/fishPage";

class FishComponent extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            fish: {}
        };
    }

    componentDidMount() {
        const queryParameters = new URLSearchParams(window.location.search);
        const id = queryParameters.get("id");
        
        fetch('http://localhost:8000/fishs/'+id)
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    fish: result
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
        const { error, isLoaded, fish } = this.state;
        if (error) {
            return errorPage(error);
        } else if (!isLoaded) {
            return loadPage();
        } else {
            return fishPage(fish, fish.oceanariums);
        }
    }
};
 
export default FishComponent;