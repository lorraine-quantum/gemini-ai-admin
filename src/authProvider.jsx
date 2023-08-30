const authProvider = {
    login: ({ username, password }) => {
        const request = new Request('https://api.geminiaitrades.com/admin/auth/login', {
            // const request = new Request('http://localhost:3000/admin/auth/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('username', JSON.stringify(auth));
                // res.cookie('token', JSON.stringify(auth), { maxAge: 900000, httpOnly: true });
                document.cookie = 'token=' + JSON.stringify(auth)
            })
            .catch((e) => {
                throw new Error(e.message)
            });
    },
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem('username') ? Promise.resolve() : Promise.reject(),
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    getIdentity: () =>
        Promise.resolve({
            id: 'user',
            fullName: 'Admin',
        }),
    getPermissions: () => Promise.resolve(''),
};

export default authProvider;