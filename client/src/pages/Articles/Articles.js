import React, { Component } from "react";
import API from "../../utils/API";

class Articles extends Component {
    state = {
        articles: [],
        title: "",
        date: "",
        url: ""
    };

    componentDidMount() {
        this.loadArticles();
    };

    loadArticles = () => {
        API.getArticles()
            .then(res => 
                this.setState( { articles: res.data, title: "", date: "", url: "" })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
            { this.state.articles.length ? (<h3>Articles to Display</h3>) : (<h3>No Articles to Display</h3>) }
            </div>
        )
}};

export default Articles;