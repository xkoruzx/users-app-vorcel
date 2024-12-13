import { IsString, IsEmail, IsNumber, IsNotEmpty, Min, Max, Length } from 'class-validator';
import { USER_VALIDATION } from '../constants/validation.constants';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(USER_VALIDATION.NAME.MIN_LENGTH, USER_VALIDATION.NAME.MAX_LENGTH)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Length(USER_VALIDATION.NAME.MIN_LENGTH, USER_VALIDATION.NAME.MAX_LENGTH)
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @Length(1, USER_VALIDATION.EMAIL.MAX_LENGTH)
  email: string;

  @IsNumber()
  @Min(USER_VALIDATION.AGE.MIN)
  @Max(USER_VALIDATION.AGE.MAX)
  age: number;

  @IsString()
  @IsNotEmpty()
  country: string;
}