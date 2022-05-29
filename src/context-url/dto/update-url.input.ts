import {InputType, Field, PartialType} from '@nestjs/graphql';
import {CreateUrlInput} from "./create-url.input";

@InputType()
export class UpdateUrlInput extends PartialType(CreateUrlInput) {
    @Field(() => String)
    id: string;
}
