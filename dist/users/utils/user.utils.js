"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAge = exports.formatUserResponse = void 0;
const formatUserResponse = (user) => {
    const { id, firstName, lastName, email, age, country, createdAt, updatedAt } = user;
    return {
        id,
        firstName,
        lastName,
        email,
        age,
        country,
        fullName: `${firstName} ${lastName}`,
        createdAt,
        updatedAt
    };
};
exports.formatUserResponse = formatUserResponse;
const validateAge = (age) => {
    return age >= 0 && age <= 120;
};
exports.validateAge = validateAge;
//# sourceMappingURL=user.utils.js.map