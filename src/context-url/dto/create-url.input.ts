import {InputType, Field} from '@nestjs/graphql';

@InputType()
export class CreateUrlInput {
    @Field(() => String)
    name: string;

    @Field(() => String)
    longUrl: string;

    @Field({nullable: true})
    customUrl?: string;
}
