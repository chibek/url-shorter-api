import {ObjectType, Field} from '@nestjs/graphql';
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

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

    @Column({nullable: true, default: null})
    @Field({nullable: true})
    customUrl?: string;

    @Column({default: 0})
    @Field(() => Number)
    clicks: number;

    @CreateDateColumn()
    @Field(() => Number)
    created_at: Date;

    @UpdateDateColumn()
    @Field(() => Number)
    updated_at: Date;
}
