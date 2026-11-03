const apiClient = require('../Utils/ApiClient');

class AuthAPI {

    async login(request) {

        return await apiClient.post(
            request,
            'https://dummyjson.com/auth/login',
            {
                username: 'emilys',
                password: 'emilyspass'
            }
        );

    }

}

module.exports = new AuthAPI();

module.exports = new AuthAPI();