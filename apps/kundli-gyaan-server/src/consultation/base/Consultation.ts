/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Astrologer } from "../../astrologer/base/Astrologer";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Prediction } from "../../prediction/base/Prediction";
import { Report } from "../../report/base/Report";
import { EnumConsultationStatus } from "./EnumConsultationStatus";
import { User } from "../../user/base/User";

@ObjectType()
class Consultation {
  @ApiProperty({
    required: false,
    type: () => Astrologer,
  })
  @ValidateNested()
  @Type(() => Astrologer)
  @IsOptional()
  astrologer?: Astrologer | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Prediction],
  })
  @ValidateNested()
  @Type(() => Prediction)
  @IsOptional()
  predictions?: Array<Prediction>;

  @ApiProperty({
    required: false,
    type: () => [Report],
  })
  @ValidateNested()
  @Type(() => Report)
  @IsOptional()
  reports?: Array<Report>;

  @ApiProperty({
    required: false,
    enum: EnumConsultationStatus,
  })
  @IsEnum(EnumConsultationStatus)
  @IsOptional()
  @Field(() => EnumConsultationStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  time!: Date | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { Consultation as Consultation };