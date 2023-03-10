import { IsString, MinLength, MaxLength, Matches } from "class-validator";

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  // @MaxLength(20)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20) 
  // @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  password: string
} 