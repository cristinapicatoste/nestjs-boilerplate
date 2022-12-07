import { IsString, MinLength, IsEmail, Matches, IsNotEmpty } from 'class-validator';

export class AuthCredentialsDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password must include a character, a number and a symbol. Mínum 8 char'})
    credentials: string;
}