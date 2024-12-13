import { User } from '../entities/user.entity';

export const formatUserResponse = (user: User) => {
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

export const validateAge = (age: number): boolean => {
  return age >= 0 && age <= 120;
};