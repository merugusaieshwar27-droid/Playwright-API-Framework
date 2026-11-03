const { test, expect } = require('@playwright/test');

const AuthAPI = require('../api/AuthAPI');
const UserAPI = require('../api/UserAPI');

test('Get Users Using Framework', async ({ request }) => {

    const loginResponse =
        await AuthAPI.login(request);

    expect(loginResponse.status())
        .toBe(200);

    const loginBody =
        await loginResponse.json();

    const token =
        loginBody.accessToken;

    const usersResponse =
        await UserAPI.getUsers(
            request,
            token
        );

    expect(usersResponse.status())
        .toBe(200);

});
