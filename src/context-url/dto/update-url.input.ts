import {InputType, Field, PartialType} from '@nestjs/graphql';
import {CreateUrlInput} from "./create-url.input";

@InputType()
export class UpdateUserInput extends PartialType(CreateUrlInput) {
    @Field(() => String)
    id: string;
}
