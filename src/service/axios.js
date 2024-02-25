// Import Axios
import axios from 'axios';

// Create an instance for GET requests
const axiosGet = axios.create({
  baseURL: 'http://localhost:4000', 
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json', 
    
  }
});

// Create an instance for POST requests
const axiosPost = axios.create({
  baseURL: 'https://api.example.com', 
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json', 
    
  }
});

export { axiosGet, axiosPost };