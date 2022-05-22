import {ObjectType, Field} from '@nestjs/graphql';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@ObjectType()
@Entity()
export class Url {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    name: string;

    @Column()
    @Field(() => String)
    shortUrl: string;

    @Column({unique: true})
    @Field(() => String)
    longUrl: string;

    @Column({nullable: true})
    @Field(() => String)
    customUrl?: string;

    @Column({default: 0})
    @Field(() => Number)
    clicks: number;
}
