export const fakeAuth = {
    isAuthenticated: false,
    user: null,
    password: null,
    authenticate(user, password, cb) {
        this.isAuthenticated = true;
        this.user = user;
        this.password = password;
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}