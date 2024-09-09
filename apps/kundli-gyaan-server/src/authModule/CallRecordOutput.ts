import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("CallRecordOutputObject")
class CallRecordOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    id!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    userId!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    astrologerId!: string;

    @Field(() => Date)
    @Type(() => Date)
    callStart!: Date;

    @Field(() => Date)
    @Type(() => Date)
    callEnd!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    description!: string;

    @Field(() => Date)
    @Type(() => Date)
    createdAt!: Date;

    @Field(() => Date)
    @Type(() => Date)
    updatedAt!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    id!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    userId!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    astrologerId!: string;

    @Field(() => Date)
    @Type(() => Date)
    callStart!: Date;

    @Field(() => Date)
    @Type(() => Date)
    callEnd!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    description!: string;

    @Field(() => Date)
    @Type(() => Date)
    createdAt!: Date;

    @Field(() => Date)
    @Type(() => Date)
    updatedAt!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    id!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    userId!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    astrologerId!: string;

    @Field(() => Date)
    @Type(() => Date)
    callStart!: Date;

    @Field(() => Date)
    @Type(() => Date)
    callEnd!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    description!: string;
}

export { CallRecordOutput as CallRecordOutput };