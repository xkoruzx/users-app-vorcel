"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateEmailException = exports.UserNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class UserNotFoundException extends common_1.HttpException {
    constructor(id) {
        super(`User with ID ${id} not found`, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.UserNotFoundException = UserNotFoundException;
class DuplicateEmailException extends common_1.HttpException {
    constructor(email) {
        super(`User with email ${email} already exists`, common_1.HttpStatus.CONFLICT);
    }
}
exports.DuplicateEmailException = DuplicateEmailException;
//# sourceMappingURL=user.exceptions.js.map