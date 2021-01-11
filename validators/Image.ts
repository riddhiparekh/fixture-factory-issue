import "reflect-metadata";
import { IsJSON, IsNumber, IsOptional, IsString } from "class-validator";
import { BaseEntity } from "./BaseEntity";
import { Fixture } from "class-fixtures-factory";

export class Image extends BaseEntity {
  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  url: string;

  @IsNumber()
  @IsOptional()
  width?: number;

  @IsNumber()
  @IsOptional()
  height?: number;

  // TODO: define some fixed sizes.
  @IsJSON()
  @IsOptional()
  @Fixture({ ignore: true })
  sizes?: {};
}
