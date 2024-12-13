import { HttpException } from '@nestjs/common';
export declare class UserNotFoundException extends HttpException {
    constructor(id: number);
}
export declare class DuplicateEmailException extends HttpException {
    constructor(email: string);
}
