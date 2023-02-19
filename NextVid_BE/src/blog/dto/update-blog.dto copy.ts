import { IsString, IsBoolean, IsOptional } from 'class-validator'
import { AccessMod } from 'src/common/enum';

export class UpdateBlogDto {
  @IsOptional()
  @IsString()
  caption: string;

  @IsOptional()
  @IsString()
  topic: string;  //enum

  @IsOptional()
  @IsString()
  access_modifier: AccessMod;  //enum

  @IsOptional()
  @IsBoolean()
  allow_comment: boolean;  // enum
} 

