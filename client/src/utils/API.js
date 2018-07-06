import axios from "axios";

export default {
    // Get all articles
    getArticles: () => {
        return axios.get("/api/articles");
    },
    // Get single article with given id
    getArticle: () => {
        return axios.get("/api/articles/" + id);
    },
    // Delete article with given id
    deleteArticle: () => {
        return axios.delete("/api/articles/" + id);
    },
    // Save article to database/favorites
    saveArticle: articleData => {
        return axios.post("/api/favorites/articles", articleData);
    }
}