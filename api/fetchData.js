export default async function handler(req, res) {
    const API_KEY = process.env.SECRET_API_KEY; // Securely stored on the backend
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
    const data = await response.json();
    
    res.status(200).json(data);
}
