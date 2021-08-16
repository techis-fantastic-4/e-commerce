import axios from "axios";

var baseURL;
if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === "PRODUCTION") {
    baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
    baseURL = "http://127.0.0.1:8000";
}

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default class API {
    /////////////////////////
    // Users
    /////////////////////////
    signUp = async (user_name, email, password) => {
        const formData = new FormData();
        formData.append("user_name", user_name);
        formData.append("email", email);
        formData.append("password", password);
        const savedPost = await api
            .post("/users/signup/", formData)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return savedPost
    }
    signIn = async (email, password) => {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        const savedPost = await api
            .post("/users/signin/", formData)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return savedPost
    }
    getUsers = async (token) => {
        const posts = await api
            .get("/users/", {
                data: {},
                headers: {
                    "Authorization": token,
                }
            })
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return posts
    }
    /////////////////////////
    // Posts
    /////////////////////////
    getPosts = async () => {
        const posts = await api
            .get("/posts/")
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return posts
    }
    addPost = async (name, body, image) => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("body", body);
        formData.append("image", image);
        const savedPost = await api
            .post("/posts/add/", formData)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return savedPost
    }
    deletePost = async (id) => {
        const response = await api
            .delete("/posts/delete/" + id + "/")
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return response
    }


    /////////////////////////
    // Products
    /////////////////////////
    getProducts = async (page, category_name) => {
        let url = "/products/?page=" + page;
        if (category_name) {
            url += '&category_name=' + category_name;
        }
        const products = await api
            .get(url)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return products
    }
    getProduct = async (id) => {
        const product = await api
            .get("/products/" + id + "/")
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return product
    }
    
    /////////////////////////
    // Cart
    /////////////////////////

    /////////////////////////
    /// Wishlist 
    ////////////////////////
    getWishlist = async (token, page) => {

        const wishlist = await api
            .get("/wishlists/?page"+ page, {               
                data: {},
                headers: {
                    "Authorization": token,
                }
            })
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return wishlist
    }

    deleteWishlist = async (token, id) => {
        const response = await api
            .delete("/wishlists/delete/" + id + "/", {
                data: {},
                headers: {
                    "Authorization": token,
                }
            })
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                throw new Error(error)
            })
        return response
    }
}
