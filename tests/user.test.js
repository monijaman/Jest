const { fetchUserData } = require('../user');
const axios = require('axios');

jest.mock('axios'); // Mock the axios library

describe('fetchUserData', () => {
    const mockUserData = {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
    };

    beforeEach(() => {
        jest.clearAllMocks(); // Clear previous mocks before each test
    });

    it('should fetch user data successfully', async () => {
        // Mock axios response
        axios.get.mockResolvedValueOnce({ data: mockUserData });

        const userId = 1;
        const result = await fetchUserData(userId);

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
        expect(result).toEqual(mockUserData);
    });

    it('should throw an error if no userId is provided', async () => {
        await expect(fetchUserData()).rejects.toThrow("User ID is required");
        expect(axios.get).not.toHaveBeenCalled();
    });

    it('should handle network errors gracefully', async () => {
        axios.get.mockRejectedValueOnce(new Error("Network Error"));

        const userId = 1;
        await expect(fetchUserData(userId)).rejects.toThrow("Network Error");
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
    });
});
