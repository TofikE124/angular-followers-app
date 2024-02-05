export const loggerInterceptor = (req, next) => {
    console.log(`Request is on its way to ${req}`);
    return next(req);
};
//# sourceMappingURL=logger.interceptor.js.map