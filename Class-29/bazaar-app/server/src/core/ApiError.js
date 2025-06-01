export class BadRequestError extends Error{
    constructor(message='Bad Request error') {
        super(message);
        this.status = 400;
    }
}

export class NotFoundError extends Error{
    constructor(message='Not found error') {
        super(message);
        this.status = 404;
    }
}

export class AuthenticationError extends Error{
    constructor(message='Not found error') {
        super(message);
        this.status = 401;
    }
}

export class ForbiddenError extends Error{
    constructor(message='Forbidden Error') {
        super(message);
        this.status = 403;
    }
}

