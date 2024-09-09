/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AstrologerWhereUniqueInput } from "./AstrologerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteAstrologerArgs {
  @ApiProperty({
    required: true,
    type: () => AstrologerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AstrologerWhereUniqueInput)
  @Field(() => AstrologerWhereUniqueInput, { nullable: false })
  where!: AstrologerWhereUniqueInput;
}

export { DeleteAstrologerArgs as DeleteAstrologerArgs };