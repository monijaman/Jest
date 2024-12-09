const axios = require('axios');

async function fetchUserData(userId) {
    if (!userId) throw new Error("User ID is required");

    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
}

module.exports = { fetchUserData };
