import "reflect-metadata";
import { IsDate, IsOptional, IsString, validate } from "class-validator";
import { classToPlain } from "class-transformer";
import { isUndefined, omitBy } from "lodash";

export abstract class BaseEntity {
  @IsString()
  @IsOptional()
  legacyId?: string;

  @IsDate()
  @IsOptional()
  created?: Date;

  @IsDate()
  @IsOptional()
  lastUpdated?: Date;

  validate() {
    return validate(this);
  }

  toJSON() {
    return omitBy(classToPlain(this), isUndefined);
  }
}
