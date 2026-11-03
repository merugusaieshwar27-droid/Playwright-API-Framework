class ApiClient {

    async get(request, url, headers = {}) {
        return await request.get(url, {
            headers
        });
    }

    async post(request, url, data, headers = {}) {
        return await request.post(url, {
            data,
            headers
        });
    }

    async put(request, url, data, headers = {}) {
        return await request.put(url, {
            data,
            headers
        });
    }

    async delete(request, url, headers = {}) {
        return await request.delete(url, {
            headers
        });
    }
}

module.exports = new ApiClient();