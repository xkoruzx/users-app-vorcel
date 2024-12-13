import { User } from '../entities/user.entity';
export declare const formatUserResponse: (user: User) => {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    country: string;
    fullName: string;
    createdAt: Date;
    updatedAt: Date;
};
export declare const validateAge: (age: number) => boolean;
