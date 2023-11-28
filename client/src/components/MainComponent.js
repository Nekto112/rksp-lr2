import React from "react";
import loadPage from "../pages/loadPage";
import errorPage from "../pages/errorPage";
import mainPage from "../pages/mainPage";

class MainComponent extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            oceanarium: {},
            fish: {}
        };
    }

    componentDidMount() {
        fetch('http://localhost:8000/oceanariums')
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

        fetch('http://localhost:8000/fishs/2')
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
        const { error, isLoaded, oceanarium, fish } = this.state;
        if (error) {
            return errorPage(error);
        } else if (!isLoaded) {
            return loadPage();
        } else {
            return mainPage(oceanarium, fish);
        }
    }
};
 
export default MainComponent;