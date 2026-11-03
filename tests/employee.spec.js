const { test, expect } = require('@playwright/test');

test('Get Users API', async ({ request }) => {

    const loginResponse = await request.post(
        'https://dummyjson.com/auth/login',
        {
            data: {
                username: 'emilys',
                password: 'emilyspass'
            }
        }
    );

    expect(loginResponse.status()).toBe(200);

    const loginBody = await loginResponse.json();
    const token = loginBody.accessToken;

    console.log('Token:', token);

    const usersResponse = await request.get(
        'https://dummyjson.com/users',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    expect(usersResponse.status()).toBe(200);

    const usersBody = await usersResponse.json();

    expect(usersBody.users.length)
        .toBeGreaterThan(0);

    expect(usersBody.users[0].id)
        .toBeGreaterThan(0);

    expect(usersBody.users[0].firstName)
        .toBeTruthy();

    expect(usersBody.users[0].email)
        .toContain('@');

    console.log('Users Count:', usersBody.users.length);

});

test('Create User', async ({ request }) => {

    const response = await request.post(
        'https://reqres.in/api/users',
        {
            data: {
                name: 'Sai',
                job: 'Sr QA'
            }
        }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    console.log(body);

    expect(body.name)
        .toBe('Sai');

    expect(body.job)
        .toBe('Sr QA');

    expect(body.id)
        .toBeTruthy();

});

test('Update User', async ({ request }) => {

    const response = await request.put(
        'https://reqres.in/api/users/2',
        {
            data: {
                name: 'Sai Updated',
                job: 'Lead QA'
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body.name)
        .toBe('Sai Updated');

    expect(body.job)
        .toBe('Lead QA');

});

test('Delete User', async ({ request }) => {

    const response = await request.delete(
        'https://reqres.in/api/users/2'
    );

    console.log(
        'Delete Status:',
        response.status()
    );

    expect(response.status())
        .toBe(204);

});