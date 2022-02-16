import axios from "axios";


const instance = axios.create({
    baseURL: "https://pixabay.com/api/",
    params: {
        "key": "25421427-490801345e4f25142920ea2db",
        "per_page":12,
        "image_type":"photo",
        "orientation":"horizontal"
    }
})

export const searchPosts = async (page = 1, q = "") => {
    const {data} = await instance.get("/", {
        params: {
            page,
            q
        }
    });
    return data;
}
