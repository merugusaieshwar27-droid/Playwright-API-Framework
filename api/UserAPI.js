const apiClient = require('../Utils/ApiClient');

class UserAPI {

    async getUsers(request, token) {

        return await apiClient.get(
            request,
            'https://dummyjson.com/users',
            {
                Authorization: `Bearer ${token}`
            }
        );

    }

}

module.exports = new UserAPI();