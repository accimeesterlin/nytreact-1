import axios from "axios";

export default {
    // Get all articles
    getArticles: () => {
        return axios.get("/api/articles");
    },
    // Get single article with given id
    getArticle: id => {
        return axios.get("/api/articles/" + id);
    },
    // Delete article with given id
    deleteArticle: id => {
        return axios.delete("/api/articles/" + id);
    },
    // Save article to favorites
    favArticle: articleData => {
        return axios.post("/api/articles/favorites", articleData);
    },
    // Remove article from favorites
    removeFavArticle: (id) => {
        return axios.delete("/api/articles/favorites" + id);
    }
};