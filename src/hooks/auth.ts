export const useAuth = () => {
    const token = localStorage.getItem('accessToken');
    const authorize = token ? 'isAuthorized' : 'isUnauthorized';
    const akses = new Array(50).fill(true);

    return { authorize, akses };
};
