import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import * as Scalars from 'graphql-scalars';
import { registerEnumType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    password = "password",
    role = "role",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum PurchaseScalarFieldEnum {
    id = "id",
    customerId = "customerId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum Role {
    ADMIN = "ADMIN",
    STAFF = "STAFF"
}

export enum Rank {
    ONE = "ONE",
    TWO = "TWO",
    THREE = "THREE",
    FOUR = "FOUR",
    FIVE = "FIVE"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum OS {
    FREEDOS = "FREEDOS",
    WINDOWS = "WINDOWS",
    MACOS = "MACOS",
    LINUX = "LINUX",
    ANDROID = "ANDROID"
}

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export enum PriceMapScalarFieldEnum {
    id = "id",
    price = "price",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum PostScalarFieldEnum {
    id = "id",
    title = "title",
    authorId = "authorId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum PersonScalarFieldEnum {
    id = "id",
    fullname = "fullname",
    gender = "gender",
    phone = "phone",
    email = "email",
    address = "address",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum PassageScalarFieldEnum {
    id = "id",
    header = "header",
    content = "content",
    postId = "postId"
}

export enum LaptopScalarFieldEnum {
    id = "id",
    brand = "brand",
    model = "model",
    material = "material",
    display = "display",
    cpu = "cpu",
    ram = "ram",
    graphicCard = "graphicCard",
    ports = "ports",
    wifi = "wifi",
    storage = "storage",
    webcam = "webcam",
    fans = "fans",
    speakers = "speakers",
    keyboard = "keyboard",
    security = "security",
    adapter = "adapter",
    specialFeatures = "specialFeatures",
    dimensionsAndWeight = "dimensionsAndWeight",
    releaseDate = "releaseDate",
    os = "os",
    priceMapId = "priceMapId",
    discountId = "discountId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum DiscountScalarFieldEnum {
    id = "id",
    value = "value",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum CustomerScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum CommentScalarFieldEnum {
    id = "id",
    rank = "rank",
    content = "content",
    authorId = "authorId",
    isStaff = "isStaff",
    laptopId = "laptopId",
    commentId = "commentId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined })
registerEnumType(CustomerScalarFieldEnum, { name: 'CustomerScalarFieldEnum', description: undefined })
registerEnumType(DiscountScalarFieldEnum, { name: 'DiscountScalarFieldEnum', description: undefined })
registerEnumType(LaptopScalarFieldEnum, { name: 'LaptopScalarFieldEnum', description: undefined })
registerEnumType(PassageScalarFieldEnum, { name: 'PassageScalarFieldEnum', description: undefined })
registerEnumType(PersonScalarFieldEnum, { name: 'PersonScalarFieldEnum', description: undefined })
registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined })
registerEnumType(PriceMapScalarFieldEnum, { name: 'PriceMapScalarFieldEnum', description: undefined })
registerEnumType(Gender, { name: 'Gender', description: undefined })
registerEnumType(OS, { name: 'OS', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(Rank, { name: 'Rank', description: undefined })
registerEnumType(Role, { name: 'Role', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(PurchaseScalarFieldEnum, { name: 'PurchaseScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateComment {
    @Field(() => CommentCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CommentCountAggregate>;
    @Field(() => CommentAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CommentAvgAggregate>;
    @Field(() => CommentSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CommentSumAggregate>;
    @Field(() => CommentMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CommentMinAggregate>;
    @Field(() => CommentMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CommentMaxAggregate>;
}

@ArgsType()
export class CommentAggregateArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithRelationInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CommentWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CommentCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CommentCountAggregateInput>;
    @Field(() => CommentAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CommentAvgAggregateInput>;
    @Field(() => CommentSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CommentSumAggregateInput>;
    @Field(() => CommentMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CommentMinAggregateInput>;
    @Field(() => CommentMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CommentMaxAggregateInput>;
}

@InputType()
export class CommentAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    laptopId?: true;
    @Field(() => Boolean, {nullable:true})
    commentId?: true;
}

@ObjectType()
export class CommentAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    laptopId?: number;
    @Field(() => Float, {nullable:true})
    commentId?: number;
}

@InputType()
export class CommentAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    laptopId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    commentId?: keyof typeof SortOrder;
}

@InputType()
export class CommentCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    rank?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    isStaff?: true;
    @Field(() => Boolean, {nullable:true})
    laptopId?: true;
    @Field(() => Boolean, {nullable:true})
    commentId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CommentCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    rank!: number;
    @Field(() => Int, {nullable:false})
    content!: number;
    @Field(() => Int, {nullable:false})
    authorId!: number;
    @Field(() => Int, {nullable:false})
    isStaff!: number;
    @Field(() => Int, {nullable:false})
    laptopId!: number;
    @Field(() => Int, {nullable:false})
    commentId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CommentCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rank?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isStaff?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    laptopId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    commentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class CommentCount {
    @Field(() => Int, {nullable:false})
    comments!: number;
}

@InputType()
export class CommentCreateManyAuthorInputEnvelope {
    @Field(() => [CommentCreateManyAuthorInput], {nullable:false})
    data!: Array<CommentCreateManyAuthorInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CommentCreateManyAuthorInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Rank, {nullable:true})
    rank?: keyof typeof Rank;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(400)
    content!: string;
    @Field(() => Boolean, {nullable:true})
    isStaff?: boolean;
    @Field(() => Int, {nullable:false})
    laptopId!: number;
    @Field(() => Int, {nullable:true})
    commentId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CommentCreateManyCommentInputEnvelope {
    @Field(() => [CommentCreateManyCommentInput], {nullable:false})
    data!: Array<CommentCreateManyCommentInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CommentCreateManyCommentInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Rank, {nullable:true})
    rank?: keyof typeof Rank;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(400)
    content!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    authorId!: string;
    @Field(() => Boolean, {nullable:true})
    isStaff?: boolean;
    @Field(() => Int, {nullable:false})
    laptopId!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CommentCreateManyLaptopInputEnvelope {
    @Field(() => [CommentCreateManyLaptopInput], {nullable:false})
    data!: Array<CommentCreateManyLaptopInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CommentCreateManyLaptopInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Rank, {nullable:true})
    rank?: keyof typeof Rank;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(400)
    content!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    authorId!: string;
    @Field(() => Boolean, {nullable:true})
    isStaff?: boolean;
    @Field(() => Int, {nullable:true})
    commentId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CommentCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Rank, {nullable:true})
    rank?: keyof typeof Rank;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(400)
    content!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    authorId!: string;
    @Field(() => Boolean, {nullable:true})
    isStaff?: boolean;
    @Field(() => Int, {nullable:false})
    laptopId!: number;
    @Field(() => Int, {nullable:true})
    commentId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CommentCreateNestedManyWithoutAuthorInput {
    @Field(() => [CommentCreateWithoutAuthorInput], {nullable:true})
    create?: Array<CommentCreateWithoutAuthorInput>;
    @Field(() => [CommentCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutAuthorInput>;
    @Field(() => CommentCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof CommentCreateManyAuthorInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;
}

@InputType()
export class CommentCreateNestedManyWithoutCommentInput {
    @Field(() => [CommentCreateWithoutCommentInput], {nullable:true})
    create?: Array<CommentCreateWithoutCommentInput>;
    @Field(() => [CommentCreateOrConnectWithoutCommentInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutCommentInput>;
    @Field(() => CommentCreateManyCommentInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof CommentCreateManyCommentInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;
}

@InputType()
export class CommentCreateNestedManyWithoutLaptopInput {
    @Field(() => [CommentCreateWithoutLaptopInput], {nullable:true})
    create?: Array<CommentCreateWithoutLaptopInput>;
    @Field(() => [CommentCreateOrConnectWithoutLaptopInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutLaptopInput>;
    @Field(() => CommentCreateManyLaptopInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof CommentCreateManyLaptopInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;
}

@InputType()
export class CommentCreateNestedOneWithoutCommentsInput {
    @Field(() => CommentCreateWithoutCommentsInput, {nullable:true})
    create?: InstanceType<typeof CommentCreateWithoutCommentsInput>;
    @Field(() => CommentCreateOrConnectWithoutCommentsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CommentCreateOrConnectWithoutCommentsInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CommentWhereUniqueInput>;
}

@InputType()
export class CommentCreateOrConnectWithoutAuthorInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CommentWhereUniqueInput>;
    @Field(() => CommentCreateWithoutAuthorInput, {nullable:false})
    create!: InstanceType<typeof CommentCreateWithoutAuthorInput>;
}

@InputType()
export class CommentCreateOrConnectWithoutCommentInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CommentWhereUniqueInput>;
    @Field(() => CommentCreateWithoutCommentInput, {nullable:false})
    create!: InstanceType<typeof CommentCreateWithoutCommentInput>;
}

@InputType()
export class CommentCreateOrConnectWithoutCommentsInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CommentWhereUniqueInput>;
    @Field(() => CommentCreateWithoutCommentsInput, {nullable:false})
    create!: InstanceType<typeof CommentCreateWithoutCommentsInput>;
}

@InputType()
export class CommentCreateOrConnectWithoutLaptopInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CommentWhereUniqueInput>;
    @Field(() => CommentCreateWithoutLaptopInput, {nullable:false})
    create!: InstanceType<typeof CommentCreateWithoutLaptopInput>;
}

@InputType()
export class CommentCreateWithoutAuthorInput {
    @Field(() => Rank, {nullable:true})
    rank?: keyof typeof Rank;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(400)
    content!: string;
    @Field(() => Boolean, {nullable:true})
    isStaff?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => LaptopCreateNestedOneWithoutCommentsInput, {nullable:false})
    laptop!: InstanceType<typeof LaptopCreateNestedOneWithoutCommentsInput>;
    @Field(() => CommentCreateNestedOneWithoutCommentsInput, {nullable:true})
    comment?: InstanceType<typeof CommentCreateNestedOneWithoutCommentsInput>;
    @Field(() => CommentCreateNestedManyWithoutCommentInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutCommentInput>;
}

@InputType()
export class CommentCreateWithoutCommentInput {
    @Field(() => Rank, {nullable:true})
    rank?: keyof typeof Rank;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(400)
    content!: string;
    @Field(() => Boolean, {nullable:true})
    isStaff?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PersonCreateNestedOneWithoutCommentsInput, {nullable:false})
    author!: InstanceType<typeof PersonCreateNestedOneWithoutCommentsInput>;
    @Field(() => LaptopCreateNestedOneWithoutCommentsInput, {nullable:false})
    laptop!: InstanceType<typeof LaptopCreateNestedOneWithoutCommentsInput>;
    @Field(() => CommentCreateNestedManyWithoutCommentInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutCommentInput>;
}

@InputType()
export class CommentCreateWithoutCommentsInput {
    @Field(() => Rank, {nullable:true})
    rank?: keyof typeof Rank;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(400)
    content!: string;
    @Field(() => Boolean, {nullable:true})
    isStaff?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PersonCreateNestedOneWithoutCommentsInput, {nullable:false})
    author!: InstanceType<typeof PersonCreateNestedOneWithoutCommentsInput>;
    @Field(() => LaptopCreateNestedOneWithoutCommentsInput, {nullable:false})
    laptop!: InstanceType<typeof LaptopCreateNestedOneWithoutCommentsInput>;
    @Field(() => CommentCreateNestedOneWithoutCommentsInput, {nullable:true})
    comment?: InstanceType<typeof CommentCreateNestedOneWithoutCommentsInput>;
}

@InputType()
export class CommentCreateWithoutLaptopInput {
    @Field(() => Rank, {nullable:true})
    rank?: keyof typeof Rank;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(400)
    content!: string;
    @Field(() => Boolean, {nullable:true})
    isStaff?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PersonCreateNestedOneWithoutCommentsInput, {nullable:false})
    author!: InstanceType<typeof PersonCreateNestedOneWithoutCommentsInput>;
    @Field(() => CommentCreateNestedOneWithoutCommentsInput, {nullable:true})
    comment?: InstanceType<typeof CommentCreateNestedOneWithoutCommentsInput>;
    @Field(() => CommentCreateNestedManyWithoutCommentInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutCommentInput>;
}

@InputType()
export class CommentCreateInput {
    @Field(() => Rank, {nullable:true})
    rank?: keyof typeof Rank;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(400)
    content!: string;
    @Field(() => Boolean, {nullable:true})
    isStaff?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PersonCreateNestedOneWithoutCommentsInput, {nullable:false})
    author!: InstanceType<typeof PersonCreateNestedOneWithoutCommentsInput>;
    @Field(() => LaptopCreateNestedOneWithoutCommentsInput, {nullable:false})
    laptop!: InstanceType<typeof LaptopCreateNestedOneWithoutCommentsInput>;
    @Field(() => CommentCreateNestedOneWithoutCommentsInput, {nullable:true})
    comment?: InstanceType<typeof CommentCreateNestedOneWithoutCommentsInput>;
    @Field(() => CommentCreateNestedManyWithoutCommentInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutCommentInput>;
}

@ArgsType()
export class CommentGroupByArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithAggregationInput>;
    @Field(() => [CommentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CommentScalarFieldEnum>;
    @Field(() => CommentScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CommentScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CommentCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CommentCountAggregateInput>;
    @Field(() => CommentAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CommentAvgAggregateInput>;
    @Field(() => CommentSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CommentSumAggregateInput>;
    @Field(() => CommentMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CommentMinAggregateInput>;
    @Field(() => CommentMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CommentMaxAggregateInput>;
}

@ObjectType()
export class CommentGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Rank, {nullable:false})
    rank!: keyof typeof Rank;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    authorId!: string;
    @Field(() => Boolean, {nullable:false})
    isStaff!: boolean;
    @Field(() => Int, {nullable:false})
    laptopId!: number;
    @Field(() => Int, {nullable:true})
    commentId?: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => CommentCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CommentCountAggregate>;
    @Field(() => CommentAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof CommentAvgAggregate>;
    @Field(() => CommentSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof CommentSumAggregate>;
    @Field(() => CommentMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CommentMinAggregate>;
    @Field(() => CommentMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CommentMaxAggregate>;
}

@InputType()
export class CommentListRelationFilter {
    @Field(() => CommentWhereInput, {nullable:true})
    every?: InstanceType<typeof CommentWhereInput>;
    @Field(() => CommentWhereInput, {nullable:true})
    some?: InstanceType<typeof CommentWhereInput>;
    @Field(() => CommentWhereInput, {nullable:true})
    none?: InstanceType<typeof CommentWhereInput>;
}

@InputType()
export class CommentMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    rank?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    isStaff?: true;
    @Field(() => Boolean, {nullable:true})
    laptopId?: true;
    @Field(() => Boolean, {nullable:true})
    commentId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CommentMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Rank, {nullable:true})
    rank?: keyof typeof Rank;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    authorId?: string;
    @Field(() => Boolean, {nullable:true})
    isStaff?: boolean;
    @Field(() => Int, {nullable:true})
    laptopId?: number;
    @Field(() => Int, {nullable:true})
    commentId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CommentMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rank?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isStaff?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    laptopId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    commentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CommentMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    rank?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    isStaff?: true;
    @Field(() => Boolean, {nullable:true})
    laptopId?: true;
    @Field(() => Boolean, {nullable:true})
    commentId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CommentMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Rank, {nullable:true})
    rank?: keyof typeof Rank;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    authorId?: string;
    @Field(() => Boolean, {nullable:true})
    isStaff?: boolean;
    @Field(() => Int, {nullable:true})
    laptopId?: number;
    @Field(() => Int, {nullable:true})
    commentId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CommentMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rank?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isStaff?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    laptopId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    commentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CommentOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class CommentOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rank?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isStaff?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    laptopId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    commentId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => CommentCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CommentCountOrderByAggregateInput>;
    @Field(() => CommentAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof CommentAvgOrderByAggregateInput>;
    @Field(() => CommentMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CommentMaxOrderByAggregateInput>;
    @Field(() => CommentMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CommentMinOrderByAggregateInput>;
    @Field(() => CommentSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof CommentSumOrderByAggregateInput>;
}

@InputType()
export class CommentOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rank?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => PersonOrderByWithRelationInput, {nullable:true})
    author?: InstanceType<typeof PersonOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    isStaff?: keyof typeof SortOrder;
    @Field(() => LaptopOrderByWithRelationInput, {nullable:true})
    laptop?: InstanceType<typeof LaptopOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    laptopId?: keyof typeof SortOrder;
    @Field(() => CommentOrderByWithRelationInput, {nullable:true})
    comment?: InstanceType<typeof CommentOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    commentId?: keyof typeof SortOrder;
    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: InstanceType<typeof CommentOrderByRelationAggregateInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CommentRelationFilter {
    @Field(() => CommentWhereInput, {nullable:true})
    is?: InstanceType<typeof CommentWhereInput>;
    @Field(() => CommentWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CommentWhereInput>;
}

@InputType()
export class CommentScalarWhereWithAggregatesInput {
    @Field(() => [CommentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CommentScalarWhereWithAggregatesInput>;
    @Field(() => [CommentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CommentScalarWhereWithAggregatesInput>;
    @Field(() => [CommentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CommentScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => EnumRankWithAggregatesFilter, {nullable:true})
    rank?: InstanceType<typeof EnumRankWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    authorId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isStaff?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    laptopId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    commentId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class CommentScalarWhereInput {
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    AND?: Array<CommentScalarWhereInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    OR?: Array<CommentScalarWhereInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    NOT?: Array<CommentScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => EnumRankFilter, {nullable:true})
    rank?: InstanceType<typeof EnumRankFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    authorId?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isStaff?: InstanceType<typeof BoolFilter>;
    @Field(() => IntFilter, {nullable:true})
    laptopId?: InstanceType<typeof IntFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    commentId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class CommentSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    laptopId?: true;
    @Field(() => Boolean, {nullable:true})
    commentId?: true;
}

@ObjectType()
export class CommentSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    laptopId?: number;
    @Field(() => Int, {nullable:true})
    commentId?: number;
}

@InputType()
export class CommentSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    laptopId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    commentId?: keyof typeof SortOrder;
}

@InputType()
export class CommentUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [CommentCreateWithoutAuthorInput], {nullable:true})
    create?: Array<CommentCreateWithoutAuthorInput>;
    @Field(() => [CommentCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutAuthorInput>;
    @Field(() => CommentCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof CommentCreateManyAuthorInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;
}

@InputType()
export class CommentUncheckedCreateNestedManyWithoutCommentInput {
    @Field(() => [CommentCreateWithoutCommentInput], {nullable:true})
    create?: Array<CommentCreateWithoutCommentInput>;
    @Field(() => [CommentCreateOrConnectWithoutCommentInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutCommentInput>;
    @Field(() => CommentCreateManyCommentInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof CommentCreateManyCommentInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;
}

@InputType()
export class CommentUncheckedCreateNestedManyWithoutLaptopInput {
    @Field(() => [CommentCreateWithoutLaptopInput], {nullable:true})
    create?: Array<CommentCreateWithoutLaptopInput>;
    @Field(() => [CommentCreateOrConnectWithoutLaptopInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutLaptopInput>;
    @Field(() => CommentCreateManyLaptopInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof CommentCreateManyLaptopInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;
}

@InputType()
export class CommentUncheckedCreateWithoutAuthorInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Rank, {nullable:true})
    rank?: keyof typeof Rank;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(400)
    content!: string;
    @Field(() => Boolean, {nullable:true})
    isStaff?: boolean;
    @Field(() => Int, {nullable:false})
    laptopId!: number;
    @Field(() => Int, {nullable:true})
    commentId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutCommentInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutCommentInput>;
}

@InputType()
export class CommentUncheckedCreateWithoutCommentInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Rank, {nullable:true})
    rank?: keyof typeof Rank;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(400)
    content!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    authorId!: string;
    @Field(() => Boolean, {nullable:true})
    isStaff?: boolean;
    @Field(() => Int, {nullable:false})
    laptopId!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutCommentInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutCommentInput>;
}

@InputType()
export class CommentUncheckedCreateWithoutCommentsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Rank, {nullable:true})
    rank?: keyof typeof Rank;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(400)
    content!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    authorId!: string;
    @Field(() => Boolean, {nullable:true})
    isStaff?: boolean;
    @Field(() => Int, {nullable:false})
    laptopId!: number;
    @Field(() => Int, {nullable:true})
    commentId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CommentUncheckedCreateWithoutLaptopInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Rank, {nullable:true})
    rank?: keyof typeof Rank;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(400)
    content!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    authorId!: string;
    @Field(() => Boolean, {nullable:true})
    isStaff?: boolean;
    @Field(() => Int, {nullable:true})
    commentId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutCommentInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutCommentInput>;
}

@InputType()
export class CommentUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Rank, {nullable:true})
    rank?: keyof typeof Rank;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(400)
    content!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    authorId!: string;
    @Field(() => Boolean, {nullable:true})
    isStaff?: boolean;
    @Field(() => Int, {nullable:false})
    laptopId!: number;
    @Field(() => Int, {nullable:true})
    commentId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutCommentInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutCommentInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutAuthorInput {
    @Field(() => [CommentCreateWithoutAuthorInput], {nullable:true})
    create?: Array<CommentCreateWithoutAuthorInput>;
    @Field(() => [CommentCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutAuthorInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => CommentCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof CommentCreateManyAuthorInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    set?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    disconnect?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    delete?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<CommentUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutCommentInput {
    @Field(() => [CommentCreateWithoutCommentInput], {nullable:true})
    create?: Array<CommentCreateWithoutCommentInput>;
    @Field(() => [CommentCreateOrConnectWithoutCommentInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutCommentInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutCommentInput], {nullable:true})
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutCommentInput>;
    @Field(() => CommentCreateManyCommentInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof CommentCreateManyCommentInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    set?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    disconnect?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    delete?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutCommentInput], {nullable:true})
    update?: Array<CommentUpdateWithWhereUniqueWithoutCommentInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutCommentInput], {nullable:true})
    updateMany?: Array<CommentUpdateManyWithWhereWithoutCommentInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutCommentsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumRankFieldUpdateOperationsInput, {nullable:true})
    rank?: InstanceType<typeof EnumRankFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isStaff?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    laptopId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    commentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutLaptopInput {
    @Field(() => [CommentCreateWithoutLaptopInput], {nullable:true})
    create?: Array<CommentCreateWithoutLaptopInput>;
    @Field(() => [CommentCreateOrConnectWithoutLaptopInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutLaptopInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutLaptopInput], {nullable:true})
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutLaptopInput>;
    @Field(() => CommentCreateManyLaptopInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof CommentCreateManyLaptopInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    set?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    disconnect?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    delete?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutLaptopInput], {nullable:true})
    update?: Array<CommentUpdateWithWhereUniqueWithoutLaptopInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutLaptopInput], {nullable:true})
    updateMany?: Array<CommentUpdateManyWithWhereWithoutLaptopInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumRankFieldUpdateOperationsInput, {nullable:true})
    rank?: InstanceType<typeof EnumRankFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isStaff?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    laptopId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    commentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUncheckedUpdateWithoutAuthorInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumRankFieldUpdateOperationsInput, {nullable:true})
    rank?: InstanceType<typeof EnumRankFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isStaff?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    laptopId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    commentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutCommentInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutCommentInput>;
}

@InputType()
export class CommentUncheckedUpdateWithoutCommentInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumRankFieldUpdateOperationsInput, {nullable:true})
    rank?: InstanceType<typeof EnumRankFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isStaff?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    laptopId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutCommentInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutCommentInput>;
}

@InputType()
export class CommentUncheckedUpdateWithoutCommentsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumRankFieldUpdateOperationsInput, {nullable:true})
    rank?: InstanceType<typeof EnumRankFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isStaff?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    laptopId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    commentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUncheckedUpdateWithoutLaptopInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumRankFieldUpdateOperationsInput, {nullable:true})
    rank?: InstanceType<typeof EnumRankFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isStaff?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    commentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutCommentInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutCommentInput>;
}

@InputType()
export class CommentUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumRankFieldUpdateOperationsInput, {nullable:true})
    rank?: InstanceType<typeof EnumRankFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isStaff?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    laptopId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    commentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutCommentInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutCommentInput>;
}

@InputType()
export class CommentUpdateManyMutationInput {
    @Field(() => EnumRankFieldUpdateOperationsInput, {nullable:true})
    rank?: InstanceType<typeof EnumRankFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isStaff?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUpdateManyWithWhereWithoutAuthorInput {
    @Field(() => CommentScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof CommentScalarWhereInput>;
    @Field(() => CommentUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof CommentUpdateManyMutationInput>;
}

@InputType()
export class CommentUpdateManyWithWhereWithoutCommentInput {
    @Field(() => CommentScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof CommentScalarWhereInput>;
    @Field(() => CommentUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof CommentUpdateManyMutationInput>;
}

@InputType()
export class CommentUpdateManyWithWhereWithoutLaptopInput {
    @Field(() => CommentScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof CommentScalarWhereInput>;
    @Field(() => CommentUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof CommentUpdateManyMutationInput>;
}

@InputType()
export class CommentUpdateManyWithoutAuthorInput {
    @Field(() => [CommentCreateWithoutAuthorInput], {nullable:true})
    create?: Array<CommentCreateWithoutAuthorInput>;
    @Field(() => [CommentCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutAuthorInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => CommentCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof CommentCreateManyAuthorInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    set?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    disconnect?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    delete?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<CommentUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUpdateManyWithoutCommentInput {
    @Field(() => [CommentCreateWithoutCommentInput], {nullable:true})
    create?: Array<CommentCreateWithoutCommentInput>;
    @Field(() => [CommentCreateOrConnectWithoutCommentInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutCommentInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutCommentInput], {nullable:true})
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutCommentInput>;
    @Field(() => CommentCreateManyCommentInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof CommentCreateManyCommentInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    set?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    disconnect?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    delete?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutCommentInput], {nullable:true})
    update?: Array<CommentUpdateWithWhereUniqueWithoutCommentInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutCommentInput], {nullable:true})
    updateMany?: Array<CommentUpdateManyWithWhereWithoutCommentInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUpdateManyWithoutLaptopInput {
    @Field(() => [CommentCreateWithoutLaptopInput], {nullable:true})
    create?: Array<CommentCreateWithoutLaptopInput>;
    @Field(() => [CommentCreateOrConnectWithoutLaptopInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutLaptopInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutLaptopInput], {nullable:true})
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutLaptopInput>;
    @Field(() => CommentCreateManyLaptopInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof CommentCreateManyLaptopInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    set?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    disconnect?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    delete?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutLaptopInput], {nullable:true})
    update?: Array<CommentUpdateWithWhereUniqueWithoutLaptopInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutLaptopInput], {nullable:true})
    updateMany?: Array<CommentUpdateManyWithWhereWithoutLaptopInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUpdateOneWithoutCommentsInput {
    @Field(() => CommentCreateWithoutCommentsInput, {nullable:true})
    create?: InstanceType<typeof CommentCreateWithoutCommentsInput>;
    @Field(() => CommentCreateOrConnectWithoutCommentsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CommentCreateOrConnectWithoutCommentsInput>;
    @Field(() => CommentUpsertWithoutCommentsInput, {nullable:true})
    upsert?: InstanceType<typeof CommentUpsertWithoutCommentsInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CommentWhereUniqueInput>;
    @Field(() => CommentUpdateWithoutCommentsInput, {nullable:true})
    update?: InstanceType<typeof CommentUpdateWithoutCommentsInput>;
}

@InputType()
export class CommentUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CommentWhereUniqueInput>;
    @Field(() => CommentUpdateWithoutAuthorInput, {nullable:false})
    data!: InstanceType<typeof CommentUpdateWithoutAuthorInput>;
}

@InputType()
export class CommentUpdateWithWhereUniqueWithoutCommentInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CommentWhereUniqueInput>;
    @Field(() => CommentUpdateWithoutCommentInput, {nullable:false})
    data!: InstanceType<typeof CommentUpdateWithoutCommentInput>;
}

@InputType()
export class CommentUpdateWithWhereUniqueWithoutLaptopInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CommentWhereUniqueInput>;
    @Field(() => CommentUpdateWithoutLaptopInput, {nullable:false})
    data!: InstanceType<typeof CommentUpdateWithoutLaptopInput>;
}

@InputType()
export class CommentUpdateWithoutAuthorInput {
    @Field(() => EnumRankFieldUpdateOperationsInput, {nullable:true})
    rank?: InstanceType<typeof EnumRankFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isStaff?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => LaptopUpdateOneRequiredWithoutCommentsInput, {nullable:true})
    laptop?: InstanceType<typeof LaptopUpdateOneRequiredWithoutCommentsInput>;
    @Field(() => CommentUpdateOneWithoutCommentsInput, {nullable:true})
    comment?: InstanceType<typeof CommentUpdateOneWithoutCommentsInput>;
    @Field(() => CommentUpdateManyWithoutCommentInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutCommentInput>;
}

@InputType()
export class CommentUpdateWithoutCommentInput {
    @Field(() => EnumRankFieldUpdateOperationsInput, {nullable:true})
    rank?: InstanceType<typeof EnumRankFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isStaff?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PersonUpdateOneRequiredWithoutCommentsInput, {nullable:true})
    author?: InstanceType<typeof PersonUpdateOneRequiredWithoutCommentsInput>;
    @Field(() => LaptopUpdateOneRequiredWithoutCommentsInput, {nullable:true})
    laptop?: InstanceType<typeof LaptopUpdateOneRequiredWithoutCommentsInput>;
    @Field(() => CommentUpdateManyWithoutCommentInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutCommentInput>;
}

@InputType()
export class CommentUpdateWithoutCommentsInput {
    @Field(() => EnumRankFieldUpdateOperationsInput, {nullable:true})
    rank?: InstanceType<typeof EnumRankFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isStaff?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PersonUpdateOneRequiredWithoutCommentsInput, {nullable:true})
    author?: InstanceType<typeof PersonUpdateOneRequiredWithoutCommentsInput>;
    @Field(() => LaptopUpdateOneRequiredWithoutCommentsInput, {nullable:true})
    laptop?: InstanceType<typeof LaptopUpdateOneRequiredWithoutCommentsInput>;
    @Field(() => CommentUpdateOneWithoutCommentsInput, {nullable:true})
    comment?: InstanceType<typeof CommentUpdateOneWithoutCommentsInput>;
}

@InputType()
export class CommentUpdateWithoutLaptopInput {
    @Field(() => EnumRankFieldUpdateOperationsInput, {nullable:true})
    rank?: InstanceType<typeof EnumRankFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isStaff?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PersonUpdateOneRequiredWithoutCommentsInput, {nullable:true})
    author?: InstanceType<typeof PersonUpdateOneRequiredWithoutCommentsInput>;
    @Field(() => CommentUpdateOneWithoutCommentsInput, {nullable:true})
    comment?: InstanceType<typeof CommentUpdateOneWithoutCommentsInput>;
    @Field(() => CommentUpdateManyWithoutCommentInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutCommentInput>;
}

@InputType()
export class CommentUpdateInput {
    @Field(() => EnumRankFieldUpdateOperationsInput, {nullable:true})
    rank?: InstanceType<typeof EnumRankFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isStaff?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PersonUpdateOneRequiredWithoutCommentsInput, {nullable:true})
    author?: InstanceType<typeof PersonUpdateOneRequiredWithoutCommentsInput>;
    @Field(() => LaptopUpdateOneRequiredWithoutCommentsInput, {nullable:true})
    laptop?: InstanceType<typeof LaptopUpdateOneRequiredWithoutCommentsInput>;
    @Field(() => CommentUpdateOneWithoutCommentsInput, {nullable:true})
    comment?: InstanceType<typeof CommentUpdateOneWithoutCommentsInput>;
    @Field(() => CommentUpdateManyWithoutCommentInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutCommentInput>;
}

@InputType()
export class CommentUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CommentWhereUniqueInput>;
    @Field(() => CommentUpdateWithoutAuthorInput, {nullable:false})
    update!: InstanceType<typeof CommentUpdateWithoutAuthorInput>;
    @Field(() => CommentCreateWithoutAuthorInput, {nullable:false})
    create!: InstanceType<typeof CommentCreateWithoutAuthorInput>;
}

@InputType()
export class CommentUpsertWithWhereUniqueWithoutCommentInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CommentWhereUniqueInput>;
    @Field(() => CommentUpdateWithoutCommentInput, {nullable:false})
    update!: InstanceType<typeof CommentUpdateWithoutCommentInput>;
    @Field(() => CommentCreateWithoutCommentInput, {nullable:false})
    create!: InstanceType<typeof CommentCreateWithoutCommentInput>;
}

@InputType()
export class CommentUpsertWithWhereUniqueWithoutLaptopInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CommentWhereUniqueInput>;
    @Field(() => CommentUpdateWithoutLaptopInput, {nullable:false})
    update!: InstanceType<typeof CommentUpdateWithoutLaptopInput>;
    @Field(() => CommentCreateWithoutLaptopInput, {nullable:false})
    create!: InstanceType<typeof CommentCreateWithoutLaptopInput>;
}

@InputType()
export class CommentUpsertWithoutCommentsInput {
    @Field(() => CommentUpdateWithoutCommentsInput, {nullable:false})
    update!: InstanceType<typeof CommentUpdateWithoutCommentsInput>;
    @Field(() => CommentCreateWithoutCommentsInput, {nullable:false})
    create!: InstanceType<typeof CommentCreateWithoutCommentsInput>;
}

@InputType()
export class CommentWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class CommentWhereInput {
    @Field(() => [CommentWhereInput], {nullable:true})
    AND?: Array<CommentWhereInput>;
    @Field(() => [CommentWhereInput], {nullable:true})
    OR?: Array<CommentWhereInput>;
    @Field(() => [CommentWhereInput], {nullable:true})
    NOT?: Array<CommentWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => EnumRankFilter, {nullable:true})
    rank?: InstanceType<typeof EnumRankFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => PersonWhereInput, {nullable:true})
    author?: InstanceType<typeof PersonWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    authorId?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isStaff?: InstanceType<typeof BoolFilter>;
    @Field(() => LaptopWhereInput, {nullable:true})
    laptop?: InstanceType<typeof LaptopWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    laptopId?: InstanceType<typeof IntFilter>;
    @Field(() => CommentWhereInput, {nullable:true})
    comment?: InstanceType<typeof CommentWhereInput>;
    @Field(() => IntNullableFilter, {nullable:true})
    commentId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: InstanceType<typeof CommentListRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Comment {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Rank, {nullable:false,defaultValue:'FIVE'})
    rank!: keyof typeof Rank;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Person, {nullable:false})
    author?: InstanceType<typeof Person>;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    authorId!: string;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isStaff!: boolean;
    @Field(() => Laptop, {nullable:false})
    laptop?: InstanceType<typeof Laptop>;
    @Field(() => Int, {nullable:false})
    laptopId!: number;
    @Field(() => Comment, {nullable:true})
    comment?: InstanceType<typeof Comment> | null;
    @Field(() => Int, {nullable:true})
    commentId!: number | null;
    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => CommentCount, {nullable:false})
    _count?: InstanceType<typeof CommentCount>;
}

@ArgsType()
export class CreateManyCommentArgs {
    @Field(() => [CommentCreateManyInput], {nullable:false})
    data!: Array<CommentCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCommentArgs {
    @Field(() => CommentCreateInput, {nullable:false})
    data!: InstanceType<typeof CommentCreateInput>;
}

@ArgsType()
export class DeleteManyCommentArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    where?: InstanceType<typeof CommentWhereInput>;
}

@ArgsType()
export class DeleteOneCommentArgs {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CommentWhereUniqueInput>;
}

@ArgsType()
export class FindFirstCommentArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithRelationInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CommentWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CommentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CommentScalarFieldEnum>;
}

@ArgsType()
export class FindManyCommentArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithRelationInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CommentWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CommentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CommentScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCommentArgs {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CommentWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyCommentArgs {
    @Field(() => CommentUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof CommentUpdateManyMutationInput>;
    @Field(() => CommentWhereInput, {nullable:true})
    where?: InstanceType<typeof CommentWhereInput>;
}

@ArgsType()
export class UpdateOneCommentArgs {
    @Field(() => CommentUpdateInput, {nullable:false})
    data!: InstanceType<typeof CommentUpdateInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CommentWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneCommentArgs {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CommentWhereUniqueInput>;
    @Field(() => CommentCreateInput, {nullable:false})
    create!: InstanceType<typeof CommentCreateInput>;
    @Field(() => CommentUpdateInput, {nullable:false})
    update!: InstanceType<typeof CommentUpdateInput>;
}

@ObjectType()
export class AggregateCustomer {
    @Field(() => CustomerCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CustomerCountAggregate>;
    @Field(() => CustomerMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CustomerMinAggregate>;
    @Field(() => CustomerMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CustomerMaxAggregate>;
}

@ArgsType()
export class CreateManyCustomerArgs {
    @Field(() => [CustomerCreateManyInput], {nullable:false})
    data!: Array<CustomerCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCustomerArgs {
    @Field(() => CustomerCreateInput, {nullable:false})
    data!: InstanceType<typeof CustomerCreateInput>;
}

@ArgsType()
export class CustomerAggregateArgs {
    @Field(() => CustomerWhereInput, {nullable:true})
    where?: InstanceType<typeof CustomerWhereInput>;
    @Field(() => [CustomerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CustomerOrderByWithRelationInput>;
    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CustomerWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CustomerCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CustomerCountAggregateInput>;
    @Field(() => CustomerMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CustomerMinAggregateInput>;
    @Field(() => CustomerMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CustomerMaxAggregateInput>;
}

@InputType()
export class CustomerCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CustomerCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CustomerCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class CustomerCount {
    @Field(() => Int, {nullable:false})
    purchases!: number;
}

@InputType()
export class CustomerCreateManyInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CustomerCreateNestedOneWithoutProfileInput {
    @Field(() => CustomerCreateWithoutProfileInput, {nullable:true})
    create?: InstanceType<typeof CustomerCreateWithoutProfileInput>;
    @Field(() => CustomerCreateOrConnectWithoutProfileInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CustomerCreateOrConnectWithoutProfileInput>;
    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
}

@InputType()
export class CustomerCreateNestedOneWithoutPurchasesInput {
    @Field(() => CustomerCreateWithoutPurchasesInput, {nullable:true})
    create?: InstanceType<typeof CustomerCreateWithoutPurchasesInput>;
    @Field(() => CustomerCreateOrConnectWithoutPurchasesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CustomerCreateOrConnectWithoutPurchasesInput>;
    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
}

@InputType()
export class CustomerCreateOrConnectWithoutProfileInput {
    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CustomerWhereUniqueInput>;
    @Field(() => CustomerCreateWithoutProfileInput, {nullable:false})
    create!: InstanceType<typeof CustomerCreateWithoutProfileInput>;
}

@InputType()
export class CustomerCreateOrConnectWithoutPurchasesInput {
    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CustomerWhereUniqueInput>;
    @Field(() => CustomerCreateWithoutPurchasesInput, {nullable:false})
    create!: InstanceType<typeof CustomerCreateWithoutPurchasesInput>;
}

@InputType()
export class CustomerCreateWithoutProfileInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PurchaseCreateNestedManyWithoutCustomerInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseCreateNestedManyWithoutCustomerInput>;
}

@InputType()
export class CustomerCreateWithoutPurchasesInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PersonCreateNestedOneWithoutCustomerInput, {nullable:false})
    profile!: InstanceType<typeof PersonCreateNestedOneWithoutCustomerInput>;
}

@InputType()
export class CustomerCreateInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PersonCreateNestedOneWithoutCustomerInput, {nullable:false})
    profile!: InstanceType<typeof PersonCreateNestedOneWithoutCustomerInput>;
    @Field(() => PurchaseCreateNestedManyWithoutCustomerInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseCreateNestedManyWithoutCustomerInput>;
}

@ArgsType()
export class CustomerGroupByArgs {
    @Field(() => CustomerWhereInput, {nullable:true})
    where?: InstanceType<typeof CustomerWhereInput>;
    @Field(() => [CustomerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CustomerOrderByWithAggregationInput>;
    @Field(() => [CustomerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CustomerScalarFieldEnum>;
    @Field(() => CustomerScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CustomerScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CustomerCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CustomerCountAggregateInput>;
    @Field(() => CustomerMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CustomerMinAggregateInput>;
    @Field(() => CustomerMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CustomerMaxAggregateInput>;
}

@ObjectType()
export class CustomerGroupBy {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => CustomerCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CustomerCountAggregate>;
    @Field(() => CustomerMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CustomerMinAggregate>;
    @Field(() => CustomerMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CustomerMaxAggregate>;
}

@InputType()
export class CustomerMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CustomerMaxAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CustomerMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CustomerMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class CustomerMinAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CustomerMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CustomerOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => CustomerCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CustomerCountOrderByAggregateInput>;
    @Field(() => CustomerMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CustomerMaxOrderByAggregateInput>;
    @Field(() => CustomerMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CustomerMinOrderByAggregateInput>;
}

@InputType()
export class CustomerOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => PersonOrderByWithRelationInput, {nullable:true})
    profile?: InstanceType<typeof PersonOrderByWithRelationInput>;
    @Field(() => PurchaseOrderByRelationAggregateInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseOrderByRelationAggregateInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class CustomerRelationFilter {
    @Field(() => CustomerWhereInput, {nullable:true})
    is?: InstanceType<typeof CustomerWhereInput>;
    @Field(() => CustomerWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CustomerWhereInput>;
}

@InputType()
export class CustomerScalarWhereWithAggregatesInput {
    @Field(() => [CustomerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CustomerScalarWhereWithAggregatesInput>;
    @Field(() => [CustomerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CustomerScalarWhereWithAggregatesInput>;
    @Field(() => [CustomerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CustomerScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class CustomerUncheckedCreateNestedOneWithoutProfileInput {
    @Field(() => CustomerCreateWithoutProfileInput, {nullable:true})
    create?: InstanceType<typeof CustomerCreateWithoutProfileInput>;
    @Field(() => CustomerCreateOrConnectWithoutProfileInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CustomerCreateOrConnectWithoutProfileInput>;
    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
}

@InputType()
export class CustomerUncheckedCreateWithoutProfileInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PurchaseUncheckedCreateNestedManyWithoutCustomerInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseUncheckedCreateNestedManyWithoutCustomerInput>;
}

@InputType()
export class CustomerUncheckedCreateWithoutPurchasesInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class CustomerUncheckedCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PurchaseUncheckedCreateNestedManyWithoutCustomerInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseUncheckedCreateNestedManyWithoutCustomerInput>;
}

@InputType()
export class CustomerUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CustomerUncheckedUpdateOneWithoutProfileInput {
    @Field(() => CustomerCreateWithoutProfileInput, {nullable:true})
    create?: InstanceType<typeof CustomerCreateWithoutProfileInput>;
    @Field(() => CustomerCreateOrConnectWithoutProfileInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CustomerCreateOrConnectWithoutProfileInput>;
    @Field(() => CustomerUpsertWithoutProfileInput, {nullable:true})
    upsert?: InstanceType<typeof CustomerUpsertWithoutProfileInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
    @Field(() => CustomerUpdateWithoutProfileInput, {nullable:true})
    update?: InstanceType<typeof CustomerUpdateWithoutProfileInput>;
}

@InputType()
export class CustomerUncheckedUpdateWithoutProfileInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PurchaseUncheckedUpdateManyWithoutCustomerInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseUncheckedUpdateManyWithoutCustomerInput>;
}

@InputType()
export class CustomerUncheckedUpdateWithoutPurchasesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CustomerUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PurchaseUncheckedUpdateManyWithoutCustomerInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseUncheckedUpdateManyWithoutCustomerInput>;
}

@InputType()
export class CustomerUpdateManyMutationInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CustomerUpdateOneRequiredWithoutPurchasesInput {
    @Field(() => CustomerCreateWithoutPurchasesInput, {nullable:true})
    create?: InstanceType<typeof CustomerCreateWithoutPurchasesInput>;
    @Field(() => CustomerCreateOrConnectWithoutPurchasesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CustomerCreateOrConnectWithoutPurchasesInput>;
    @Field(() => CustomerUpsertWithoutPurchasesInput, {nullable:true})
    upsert?: InstanceType<typeof CustomerUpsertWithoutPurchasesInput>;
    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
    @Field(() => CustomerUpdateWithoutPurchasesInput, {nullable:true})
    update?: InstanceType<typeof CustomerUpdateWithoutPurchasesInput>;
}

@InputType()
export class CustomerUpdateOneWithoutProfileInput {
    @Field(() => CustomerCreateWithoutProfileInput, {nullable:true})
    create?: InstanceType<typeof CustomerCreateWithoutProfileInput>;
    @Field(() => CustomerCreateOrConnectWithoutProfileInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof CustomerCreateOrConnectWithoutProfileInput>;
    @Field(() => CustomerUpsertWithoutProfileInput, {nullable:true})
    upsert?: InstanceType<typeof CustomerUpsertWithoutProfileInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof CustomerWhereUniqueInput>;
    @Field(() => CustomerUpdateWithoutProfileInput, {nullable:true})
    update?: InstanceType<typeof CustomerUpdateWithoutProfileInput>;
}

@InputType()
export class CustomerUpdateWithoutProfileInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PurchaseUpdateManyWithoutCustomerInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseUpdateManyWithoutCustomerInput>;
}

@InputType()
export class CustomerUpdateWithoutPurchasesInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PersonUpdateOneRequiredWithoutCustomerInput, {nullable:true})
    profile?: InstanceType<typeof PersonUpdateOneRequiredWithoutCustomerInput>;
}

@InputType()
export class CustomerUpdateInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PersonUpdateOneRequiredWithoutCustomerInput, {nullable:true})
    profile?: InstanceType<typeof PersonUpdateOneRequiredWithoutCustomerInput>;
    @Field(() => PurchaseUpdateManyWithoutCustomerInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseUpdateManyWithoutCustomerInput>;
}

@InputType()
export class CustomerUpsertWithoutProfileInput {
    @Field(() => CustomerUpdateWithoutProfileInput, {nullable:false})
    update!: InstanceType<typeof CustomerUpdateWithoutProfileInput>;
    @Field(() => CustomerCreateWithoutProfileInput, {nullable:false})
    create!: InstanceType<typeof CustomerCreateWithoutProfileInput>;
}

@InputType()
export class CustomerUpsertWithoutPurchasesInput {
    @Field(() => CustomerUpdateWithoutPurchasesInput, {nullable:false})
    update!: InstanceType<typeof CustomerUpdateWithoutPurchasesInput>;
    @Field(() => CustomerCreateWithoutPurchasesInput, {nullable:false})
    create!: InstanceType<typeof CustomerCreateWithoutPurchasesInput>;
}

@InputType()
export class CustomerWhereUniqueInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
}

@InputType()
export class CustomerWhereInput {
    @Field(() => [CustomerWhereInput], {nullable:true})
    AND?: Array<CustomerWhereInput>;
    @Field(() => [CustomerWhereInput], {nullable:true})
    OR?: Array<CustomerWhereInput>;
    @Field(() => [CustomerWhereInput], {nullable:true})
    NOT?: Array<CustomerWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => PersonWhereInput, {nullable:true})
    profile?: InstanceType<typeof PersonWhereInput>;
    @Field(() => PurchaseListRelationFilter, {nullable:true})
    purchases?: InstanceType<typeof PurchaseListRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Customer {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Person, {nullable:false})
    profile?: InstanceType<typeof Person>;
    @Field(() => [Purchase], {nullable:true})
    purchases?: Array<Purchase>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => CustomerCount, {nullable:false})
    _count?: InstanceType<typeof CustomerCount>;
}

@ArgsType()
export class DeleteManyCustomerArgs {
    @Field(() => CustomerWhereInput, {nullable:true})
    where?: InstanceType<typeof CustomerWhereInput>;
}

@ArgsType()
export class DeleteOneCustomerArgs {
    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CustomerWhereUniqueInput>;
}

@ArgsType()
export class FindFirstCustomerArgs {
    @Field(() => CustomerWhereInput, {nullable:true})
    where?: InstanceType<typeof CustomerWhereInput>;
    @Field(() => [CustomerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CustomerOrderByWithRelationInput>;
    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CustomerWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CustomerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CustomerScalarFieldEnum>;
}

@ArgsType()
export class FindManyCustomerArgs {
    @Field(() => CustomerWhereInput, {nullable:true})
    where?: InstanceType<typeof CustomerWhereInput>;
    @Field(() => [CustomerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CustomerOrderByWithRelationInput>;
    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CustomerWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CustomerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CustomerScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCustomerArgs {
    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CustomerWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyCustomerArgs {
    @Field(() => CustomerUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof CustomerUpdateManyMutationInput>;
    @Field(() => CustomerWhereInput, {nullable:true})
    where?: InstanceType<typeof CustomerWhereInput>;
}

@ArgsType()
export class UpdateOneCustomerArgs {
    @Field(() => CustomerUpdateInput, {nullable:false})
    data!: InstanceType<typeof CustomerUpdateInput>;
    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CustomerWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneCustomerArgs {
    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof CustomerWhereUniqueInput>;
    @Field(() => CustomerCreateInput, {nullable:false})
    create!: InstanceType<typeof CustomerCreateInput>;
    @Field(() => CustomerUpdateInput, {nullable:false})
    update!: InstanceType<typeof CustomerUpdateInput>;
}

@ObjectType()
export class AggregateDiscount {
    @Field(() => DiscountCountAggregate, {nullable:true})
    _count?: InstanceType<typeof DiscountCountAggregate>;
    @Field(() => DiscountAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof DiscountAvgAggregate>;
    @Field(() => DiscountSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof DiscountSumAggregate>;
    @Field(() => DiscountMinAggregate, {nullable:true})
    _min?: InstanceType<typeof DiscountMinAggregate>;
    @Field(() => DiscountMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof DiscountMaxAggregate>;
}

@ArgsType()
export class CreateManyDiscountArgs {
    @Field(() => [DiscountCreateManyInput], {nullable:false})
    data!: Array<DiscountCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneDiscountArgs {
    @Field(() => DiscountCreateInput, {nullable:false})
    data!: InstanceType<typeof DiscountCreateInput>;
}

@ArgsType()
export class DeleteManyDiscountArgs {
    @Field(() => DiscountWhereInput, {nullable:true})
    where?: InstanceType<typeof DiscountWhereInput>;
}

@ArgsType()
export class DeleteOneDiscountArgs {
    @Field(() => DiscountWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof DiscountWhereUniqueInput>;
}

@ArgsType()
export class DiscountAggregateArgs {
    @Field(() => DiscountWhereInput, {nullable:true})
    where?: InstanceType<typeof DiscountWhereInput>;
    @Field(() => [DiscountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DiscountOrderByWithRelationInput>;
    @Field(() => DiscountWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof DiscountWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => DiscountCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof DiscountCountAggregateInput>;
    @Field(() => DiscountAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof DiscountAvgAggregateInput>;
    @Field(() => DiscountSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof DiscountSumAggregateInput>;
    @Field(() => DiscountMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof DiscountMinAggregateInput>;
    @Field(() => DiscountMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof DiscountMaxAggregateInput>;
}

@InputType()
export class DiscountAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    value?: true;
}

@ObjectType()
export class DiscountAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    value?: number;
}

@InputType()
export class DiscountAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;
}

@InputType()
export class DiscountCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    value?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class DiscountCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    value!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class DiscountCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class DiscountCount {
    @Field(() => Int, {nullable:false})
    laptops!: number;
}

@InputType()
export class DiscountCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    value?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class DiscountCreateNestedOneWithoutLaptopsInput {
    @Field(() => DiscountCreateWithoutLaptopsInput, {nullable:true})
    create?: InstanceType<typeof DiscountCreateWithoutLaptopsInput>;
    @Field(() => DiscountCreateOrConnectWithoutLaptopsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof DiscountCreateOrConnectWithoutLaptopsInput>;
    @Field(() => DiscountWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof DiscountWhereUniqueInput>;
}

@InputType()
export class DiscountCreateOrConnectWithoutLaptopsInput {
    @Field(() => DiscountWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof DiscountWhereUniqueInput>;
    @Field(() => DiscountCreateWithoutLaptopsInput, {nullable:false})
    create!: InstanceType<typeof DiscountCreateWithoutLaptopsInput>;
}

@InputType()
export class DiscountCreateWithoutLaptopsInput {
    @Field(() => Float, {nullable:true})
    value?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class DiscountCreateInput {
    @Field(() => Float, {nullable:true})
    value?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => LaptopCreateNestedManyWithoutDiscountInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopCreateNestedManyWithoutDiscountInput>;
}

@ArgsType()
export class DiscountGroupByArgs {
    @Field(() => DiscountWhereInput, {nullable:true})
    where?: InstanceType<typeof DiscountWhereInput>;
    @Field(() => [DiscountOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DiscountOrderByWithAggregationInput>;
    @Field(() => [DiscountScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DiscountScalarFieldEnum>;
    @Field(() => DiscountScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof DiscountScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => DiscountCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof DiscountCountAggregateInput>;
    @Field(() => DiscountAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof DiscountAvgAggregateInput>;
    @Field(() => DiscountSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof DiscountSumAggregateInput>;
    @Field(() => DiscountMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof DiscountMinAggregateInput>;
    @Field(() => DiscountMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof DiscountMaxAggregateInput>;
}

@ObjectType()
export class DiscountGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Float, {nullable:false})
    value!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => DiscountCountAggregate, {nullable:true})
    _count?: InstanceType<typeof DiscountCountAggregate>;
    @Field(() => DiscountAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof DiscountAvgAggregate>;
    @Field(() => DiscountSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof DiscountSumAggregate>;
    @Field(() => DiscountMinAggregate, {nullable:true})
    _min?: InstanceType<typeof DiscountMinAggregate>;
    @Field(() => DiscountMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof DiscountMaxAggregate>;
}

@InputType()
export class DiscountMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    value?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class DiscountMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    value?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class DiscountMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class DiscountMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    value?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class DiscountMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    value?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class DiscountMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class DiscountOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => DiscountCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof DiscountCountOrderByAggregateInput>;
    @Field(() => DiscountAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof DiscountAvgOrderByAggregateInput>;
    @Field(() => DiscountMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof DiscountMaxOrderByAggregateInput>;
    @Field(() => DiscountMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof DiscountMinOrderByAggregateInput>;
    @Field(() => DiscountSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof DiscountSumOrderByAggregateInput>;
}

@InputType()
export class DiscountOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;
    @Field(() => LaptopOrderByRelationAggregateInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopOrderByRelationAggregateInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class DiscountRelationFilter {
    @Field(() => DiscountWhereInput, {nullable:true})
    is?: InstanceType<typeof DiscountWhereInput>;
    @Field(() => DiscountWhereInput, {nullable:true})
    isNot?: InstanceType<typeof DiscountWhereInput>;
}

@InputType()
export class DiscountScalarWhereWithAggregatesInput {
    @Field(() => [DiscountScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DiscountScalarWhereWithAggregatesInput>;
    @Field(() => [DiscountScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DiscountScalarWhereWithAggregatesInput>;
    @Field(() => [DiscountScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DiscountScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    value?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class DiscountSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    value?: true;
}

@ObjectType()
export class DiscountSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    value?: number;
}

@InputType()
export class DiscountSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;
}

@InputType()
export class DiscountUncheckedCreateWithoutLaptopsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    value?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class DiscountUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    value?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => LaptopUncheckedCreateNestedManyWithoutDiscountInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopUncheckedCreateNestedManyWithoutDiscountInput>;
}

@InputType()
export class DiscountUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class DiscountUncheckedUpdateWithoutLaptopsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class DiscountUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => LaptopUncheckedUpdateManyWithoutDiscountInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopUncheckedUpdateManyWithoutDiscountInput>;
}

@InputType()
export class DiscountUpdateManyMutationInput {
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class DiscountUpdateOneWithoutLaptopsInput {
    @Field(() => DiscountCreateWithoutLaptopsInput, {nullable:true})
    create?: InstanceType<typeof DiscountCreateWithoutLaptopsInput>;
    @Field(() => DiscountCreateOrConnectWithoutLaptopsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof DiscountCreateOrConnectWithoutLaptopsInput>;
    @Field(() => DiscountUpsertWithoutLaptopsInput, {nullable:true})
    upsert?: InstanceType<typeof DiscountUpsertWithoutLaptopsInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => DiscountWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof DiscountWhereUniqueInput>;
    @Field(() => DiscountUpdateWithoutLaptopsInput, {nullable:true})
    update?: InstanceType<typeof DiscountUpdateWithoutLaptopsInput>;
}

@InputType()
export class DiscountUpdateWithoutLaptopsInput {
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class DiscountUpdateInput {
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => LaptopUpdateManyWithoutDiscountInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopUpdateManyWithoutDiscountInput>;
}

@InputType()
export class DiscountUpsertWithoutLaptopsInput {
    @Field(() => DiscountUpdateWithoutLaptopsInput, {nullable:false})
    update!: InstanceType<typeof DiscountUpdateWithoutLaptopsInput>;
    @Field(() => DiscountCreateWithoutLaptopsInput, {nullable:false})
    create!: InstanceType<typeof DiscountCreateWithoutLaptopsInput>;
}

@InputType()
export class DiscountWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    value?: number;
}

@InputType()
export class DiscountWhereInput {
    @Field(() => [DiscountWhereInput], {nullable:true})
    AND?: Array<DiscountWhereInput>;
    @Field(() => [DiscountWhereInput], {nullable:true})
    OR?: Array<DiscountWhereInput>;
    @Field(() => [DiscountWhereInput], {nullable:true})
    NOT?: Array<DiscountWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    value?: InstanceType<typeof FloatFilter>;
    @Field(() => LaptopListRelationFilter, {nullable:true})
    laptops?: InstanceType<typeof LaptopListRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Discount {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Float, {nullable:false,defaultValue:0})
    value!: number;
    @Field(() => [Laptop], {nullable:true})
    laptops?: Array<Laptop>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => DiscountCount, {nullable:false})
    _count?: InstanceType<typeof DiscountCount>;
}

@ArgsType()
export class FindFirstDiscountArgs {
    @Field(() => DiscountWhereInput, {nullable:true})
    where?: InstanceType<typeof DiscountWhereInput>;
    @Field(() => [DiscountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DiscountOrderByWithRelationInput>;
    @Field(() => DiscountWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof DiscountWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [DiscountScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DiscountScalarFieldEnum>;
}

@ArgsType()
export class FindManyDiscountArgs {
    @Field(() => DiscountWhereInput, {nullable:true})
    where?: InstanceType<typeof DiscountWhereInput>;
    @Field(() => [DiscountOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DiscountOrderByWithRelationInput>;
    @Field(() => DiscountWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof DiscountWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [DiscountScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DiscountScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueDiscountArgs {
    @Field(() => DiscountWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof DiscountWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyDiscountArgs {
    @Field(() => DiscountUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof DiscountUpdateManyMutationInput>;
    @Field(() => DiscountWhereInput, {nullable:true})
    where?: InstanceType<typeof DiscountWhereInput>;
}

@ArgsType()
export class UpdateOneDiscountArgs {
    @Field(() => DiscountUpdateInput, {nullable:false})
    data!: InstanceType<typeof DiscountUpdateInput>;
    @Field(() => DiscountWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof DiscountWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneDiscountArgs {
    @Field(() => DiscountWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof DiscountWhereUniqueInput>;
    @Field(() => DiscountCreateInput, {nullable:false})
    create!: InstanceType<typeof DiscountCreateInput>;
    @Field(() => DiscountUpdateInput, {nullable:false})
    update!: InstanceType<typeof DiscountUpdateInput>;
}

@ObjectType()
export class AggregateLaptop {
    @Field(() => LaptopCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LaptopCountAggregate>;
    @Field(() => LaptopAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof LaptopAvgAggregate>;
    @Field(() => LaptopSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof LaptopSumAggregate>;
    @Field(() => LaptopMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LaptopMinAggregate>;
    @Field(() => LaptopMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LaptopMaxAggregate>;
}

@ArgsType()
export class CreateManyLaptopArgs {
    @Field(() => [LaptopCreateManyInput], {nullable:false})
    data!: Array<LaptopCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneLaptopArgs {
    @Field(() => LaptopCreateInput, {nullable:false})
    data!: InstanceType<typeof LaptopCreateInput>;
}

@ArgsType()
export class DeleteManyLaptopArgs {
    @Field(() => LaptopWhereInput, {nullable:true})
    where?: InstanceType<typeof LaptopWhereInput>;
}

@ArgsType()
export class DeleteOneLaptopArgs {
    @Field(() => LaptopWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LaptopWhereUniqueInput>;
}

@ArgsType()
export class FindFirstLaptopArgs {
    @Field(() => LaptopWhereInput, {nullable:true})
    where?: InstanceType<typeof LaptopWhereInput>;
    @Field(() => [LaptopOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LaptopOrderByWithRelationInput>;
    @Field(() => LaptopWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LaptopScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LaptopScalarFieldEnum>;
}

@ArgsType()
export class FindManyLaptopArgs {
    @Field(() => LaptopWhereInput, {nullable:true})
    where?: InstanceType<typeof LaptopWhereInput>;
    @Field(() => [LaptopOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LaptopOrderByWithRelationInput>;
    @Field(() => LaptopWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LaptopScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LaptopScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueLaptopArgs {
    @Field(() => LaptopWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LaptopWhereUniqueInput>;
}

@ArgsType()
export class LaptopAggregateArgs {
    @Field(() => LaptopWhereInput, {nullable:true})
    where?: InstanceType<typeof LaptopWhereInput>;
    @Field(() => [LaptopOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LaptopOrderByWithRelationInput>;
    @Field(() => LaptopWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LaptopCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LaptopCountAggregateInput>;
    @Field(() => LaptopAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof LaptopAvgAggregateInput>;
    @Field(() => LaptopSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof LaptopSumAggregateInput>;
    @Field(() => LaptopMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LaptopMinAggregateInput>;
    @Field(() => LaptopMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LaptopMaxAggregateInput>;
}

@InputType()
export class LaptopAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    priceMapId?: true;
    @Field(() => Boolean, {nullable:true})
    discountId?: true;
}

@ObjectType()
export class LaptopAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    priceMapId?: number;
    @Field(() => Float, {nullable:true})
    discountId?: number;
}

@InputType()
export class LaptopAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    priceMapId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountId?: keyof typeof SortOrder;
}

@InputType()
export class LaptopCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    brand?: true;
    @Field(() => Boolean, {nullable:true})
    model?: true;
    @Field(() => Boolean, {nullable:true})
    material?: true;
    @Field(() => Boolean, {nullable:true})
    display?: true;
    @Field(() => Boolean, {nullable:true})
    cpu?: true;
    @Field(() => Boolean, {nullable:true})
    ram?: true;
    @Field(() => Boolean, {nullable:true})
    graphicCard?: true;
    @Field(() => Boolean, {nullable:true})
    ports?: true;
    @Field(() => Boolean, {nullable:true})
    wifi?: true;
    @Field(() => Boolean, {nullable:true})
    storage?: true;
    @Field(() => Boolean, {nullable:true})
    webcam?: true;
    @Field(() => Boolean, {nullable:true})
    fans?: true;
    @Field(() => Boolean, {nullable:true})
    speakers?: true;
    @Field(() => Boolean, {nullable:true})
    keyboard?: true;
    @Field(() => Boolean, {nullable:true})
    security?: true;
    @Field(() => Boolean, {nullable:true})
    adapter?: true;
    @Field(() => Boolean, {nullable:true})
    specialFeatures?: true;
    @Field(() => Boolean, {nullable:true})
    dimensionsAndWeight?: true;
    @Field(() => Boolean, {nullable:true})
    releaseDate?: true;
    @Field(() => Boolean, {nullable:true})
    os?: true;
    @Field(() => Boolean, {nullable:true})
    priceMapId?: true;
    @Field(() => Boolean, {nullable:true})
    discountId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class LaptopCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    brand!: number;
    @Field(() => Int, {nullable:false})
    model!: number;
    @Field(() => Int, {nullable:false})
    material!: number;
    @Field(() => Int, {nullable:false})
    display!: number;
    @Field(() => Int, {nullable:false})
    cpu!: number;
    @Field(() => Int, {nullable:false})
    ram!: number;
    @Field(() => Int, {nullable:false})
    graphicCard!: number;
    @Field(() => Int, {nullable:false})
    ports!: number;
    @Field(() => Int, {nullable:false})
    wifi!: number;
    @Field(() => Int, {nullable:false})
    storage!: number;
    @Field(() => Int, {nullable:false})
    webcam!: number;
    @Field(() => Int, {nullable:false})
    fans!: number;
    @Field(() => Int, {nullable:false})
    speakers!: number;
    @Field(() => Int, {nullable:false})
    keyboard!: number;
    @Field(() => Int, {nullable:false})
    security!: number;
    @Field(() => Int, {nullable:false})
    adapter!: number;
    @Field(() => Int, {nullable:false})
    specialFeatures!: number;
    @Field(() => Int, {nullable:false})
    dimensionsAndWeight!: number;
    @Field(() => Int, {nullable:false})
    releaseDate!: number;
    @Field(() => Int, {nullable:false})
    os!: number;
    @Field(() => Int, {nullable:false})
    priceMapId!: number;
    @Field(() => Int, {nullable:false})
    discountId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class LaptopCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    brand?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    model?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    material?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    display?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cpu?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ram?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    graphicCard?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ports?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    wifi?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    storage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    webcam?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fans?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    speakers?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    keyboard?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    security?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    adapter?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    specialFeatures?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dimensionsAndWeight?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    releaseDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    os?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    priceMapId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class LaptopCount {
    @Field(() => Int, {nullable:false})
    purchases!: number;
    @Field(() => Int, {nullable:false})
    posts!: number;
    @Field(() => Int, {nullable:false})
    comments!: number;
}

@InputType()
export class LaptopCreateManyDiscountInputEnvelope {
    @Field(() => [LaptopCreateManyDiscountInput], {nullable:false})
    data!: Array<LaptopCreateManyDiscountInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class LaptopCreateManyDiscountInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    brand?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    model?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    material?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    display?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    cpu?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ram?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    graphicCard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ports?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    wifi?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    storage?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    webcam?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    fans?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    speakers?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    keyboard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    security?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    adapter?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    specialFeatures?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    dimensionsAndWeight?: string;
    @Field(() => Date, {nullable:true})
    @Validator.MaxLength(255)
    releaseDate?: Date | string;
    @Field(() => OS, {nullable:true})
    os?: keyof typeof OS;
    @Field(() => Int, {nullable:true})
    priceMapId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LaptopCreateManyPriceMapInputEnvelope {
    @Field(() => [LaptopCreateManyPriceMapInput], {nullable:false})
    data!: Array<LaptopCreateManyPriceMapInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class LaptopCreateManyPriceMapInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    brand?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    model?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    material?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    display?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    cpu?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ram?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    graphicCard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ports?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    wifi?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    storage?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    webcam?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    fans?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    speakers?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    keyboard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    security?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    adapter?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    specialFeatures?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    dimensionsAndWeight?: string;
    @Field(() => Date, {nullable:true})
    @Validator.MaxLength(255)
    releaseDate?: Date | string;
    @Field(() => OS, {nullable:true})
    os?: keyof typeof OS;
    @Field(() => Int, {nullable:true})
    discountId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LaptopCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    brand?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    model?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    material?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    display?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    cpu?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ram?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    graphicCard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ports?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    wifi?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    storage?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    webcam?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    fans?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    speakers?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    keyboard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    security?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    adapter?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    specialFeatures?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    dimensionsAndWeight?: string;
    @Field(() => Date, {nullable:true})
    @Validator.MaxLength(255)
    releaseDate?: Date | string;
    @Field(() => OS, {nullable:true})
    os?: keyof typeof OS;
    @Field(() => Int, {nullable:true})
    priceMapId?: number;
    @Field(() => Int, {nullable:true})
    discountId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LaptopCreateNestedManyWithoutDiscountInput {
    @Field(() => [LaptopCreateWithoutDiscountInput], {nullable:true})
    create?: Array<LaptopCreateWithoutDiscountInput>;
    @Field(() => [LaptopCreateOrConnectWithoutDiscountInput], {nullable:true})
    connectOrCreate?: Array<LaptopCreateOrConnectWithoutDiscountInput>;
    @Field(() => LaptopCreateManyDiscountInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof LaptopCreateManyDiscountInputEnvelope>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    connect?: Array<LaptopWhereUniqueInput>;
}

@InputType()
export class LaptopCreateNestedManyWithoutPostsInput {
    @Field(() => [LaptopCreateWithoutPostsInput], {nullable:true})
    create?: Array<LaptopCreateWithoutPostsInput>;
    @Field(() => [LaptopCreateOrConnectWithoutPostsInput], {nullable:true})
    connectOrCreate?: Array<LaptopCreateOrConnectWithoutPostsInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    connect?: Array<LaptopWhereUniqueInput>;
}

@InputType()
export class LaptopCreateNestedManyWithoutPriceMapInput {
    @Field(() => [LaptopCreateWithoutPriceMapInput], {nullable:true})
    create?: Array<LaptopCreateWithoutPriceMapInput>;
    @Field(() => [LaptopCreateOrConnectWithoutPriceMapInput], {nullable:true})
    connectOrCreate?: Array<LaptopCreateOrConnectWithoutPriceMapInput>;
    @Field(() => LaptopCreateManyPriceMapInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof LaptopCreateManyPriceMapInputEnvelope>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    connect?: Array<LaptopWhereUniqueInput>;
}

@InputType()
export class LaptopCreateNestedManyWithoutPurchasesInput {
    @Field(() => [LaptopCreateWithoutPurchasesInput], {nullable:true})
    create?: Array<LaptopCreateWithoutPurchasesInput>;
    @Field(() => [LaptopCreateOrConnectWithoutPurchasesInput], {nullable:true})
    connectOrCreate?: Array<LaptopCreateOrConnectWithoutPurchasesInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    connect?: Array<LaptopWhereUniqueInput>;
}

@InputType()
export class LaptopCreateNestedOneWithoutCommentsInput {
    @Field(() => LaptopCreateWithoutCommentsInput, {nullable:true})
    create?: InstanceType<typeof LaptopCreateWithoutCommentsInput>;
    @Field(() => LaptopCreateOrConnectWithoutCommentsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof LaptopCreateOrConnectWithoutCommentsInput>;
    @Field(() => LaptopWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof LaptopWhereUniqueInput>;
}

@InputType()
export class LaptopCreateOrConnectWithoutCommentsInput {
    @Field(() => LaptopWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => LaptopCreateWithoutCommentsInput, {nullable:false})
    create!: InstanceType<typeof LaptopCreateWithoutCommentsInput>;
}

@InputType()
export class LaptopCreateOrConnectWithoutDiscountInput {
    @Field(() => LaptopWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => LaptopCreateWithoutDiscountInput, {nullable:false})
    create!: InstanceType<typeof LaptopCreateWithoutDiscountInput>;
}

@InputType()
export class LaptopCreateOrConnectWithoutPostsInput {
    @Field(() => LaptopWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => LaptopCreateWithoutPostsInput, {nullable:false})
    create!: InstanceType<typeof LaptopCreateWithoutPostsInput>;
}

@InputType()
export class LaptopCreateOrConnectWithoutPriceMapInput {
    @Field(() => LaptopWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => LaptopCreateWithoutPriceMapInput, {nullable:false})
    create!: InstanceType<typeof LaptopCreateWithoutPriceMapInput>;
}

@InputType()
export class LaptopCreateOrConnectWithoutPurchasesInput {
    @Field(() => LaptopWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => LaptopCreateWithoutPurchasesInput, {nullable:false})
    create!: InstanceType<typeof LaptopCreateWithoutPurchasesInput>;
}

@InputType()
export class LaptopCreateWithoutCommentsInput {
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    brand?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    model?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    material?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    display?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    cpu?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ram?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    graphicCard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ports?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    wifi?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    storage?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    webcam?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    fans?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    speakers?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    keyboard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    security?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    adapter?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    specialFeatures?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    dimensionsAndWeight?: string;
    @Field(() => Date, {nullable:true})
    @Validator.MaxLength(255)
    releaseDate?: Date | string;
    @Field(() => OS, {nullable:true})
    os?: keyof typeof OS;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PriceMapCreateNestedOneWithoutLaptopsInput, {nullable:true})
    priceMap?: InstanceType<typeof PriceMapCreateNestedOneWithoutLaptopsInput>;
    @Field(() => DiscountCreateNestedOneWithoutLaptopsInput, {nullable:true})
    discount?: InstanceType<typeof DiscountCreateNestedOneWithoutLaptopsInput>;
    @Field(() => PurchaseCreateNestedManyWithoutLaptopsInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseCreateNestedManyWithoutLaptopsInput>;
    @Field(() => PostCreateNestedManyWithoutLaptopsInput, {nullable:true})
    posts?: InstanceType<typeof PostCreateNestedManyWithoutLaptopsInput>;
}

@InputType()
export class LaptopCreateWithoutDiscountInput {
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    brand?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    model?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    material?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    display?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    cpu?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ram?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    graphicCard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ports?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    wifi?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    storage?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    webcam?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    fans?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    speakers?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    keyboard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    security?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    adapter?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    specialFeatures?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    dimensionsAndWeight?: string;
    @Field(() => Date, {nullable:true})
    @Validator.MaxLength(255)
    releaseDate?: Date | string;
    @Field(() => OS, {nullable:true})
    os?: keyof typeof OS;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PriceMapCreateNestedOneWithoutLaptopsInput, {nullable:true})
    priceMap?: InstanceType<typeof PriceMapCreateNestedOneWithoutLaptopsInput>;
    @Field(() => PurchaseCreateNestedManyWithoutLaptopsInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseCreateNestedManyWithoutLaptopsInput>;
    @Field(() => PostCreateNestedManyWithoutLaptopsInput, {nullable:true})
    posts?: InstanceType<typeof PostCreateNestedManyWithoutLaptopsInput>;
    @Field(() => CommentCreateNestedManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutLaptopInput>;
}

@InputType()
export class LaptopCreateWithoutPostsInput {
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    brand?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    model?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    material?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    display?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    cpu?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ram?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    graphicCard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ports?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    wifi?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    storage?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    webcam?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    fans?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    speakers?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    keyboard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    security?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    adapter?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    specialFeatures?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    dimensionsAndWeight?: string;
    @Field(() => Date, {nullable:true})
    @Validator.MaxLength(255)
    releaseDate?: Date | string;
    @Field(() => OS, {nullable:true})
    os?: keyof typeof OS;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PriceMapCreateNestedOneWithoutLaptopsInput, {nullable:true})
    priceMap?: InstanceType<typeof PriceMapCreateNestedOneWithoutLaptopsInput>;
    @Field(() => DiscountCreateNestedOneWithoutLaptopsInput, {nullable:true})
    discount?: InstanceType<typeof DiscountCreateNestedOneWithoutLaptopsInput>;
    @Field(() => PurchaseCreateNestedManyWithoutLaptopsInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseCreateNestedManyWithoutLaptopsInput>;
    @Field(() => CommentCreateNestedManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutLaptopInput>;
}

@InputType()
export class LaptopCreateWithoutPriceMapInput {
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    brand?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    model?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    material?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    display?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    cpu?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ram?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    graphicCard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ports?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    wifi?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    storage?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    webcam?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    fans?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    speakers?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    keyboard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    security?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    adapter?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    specialFeatures?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    dimensionsAndWeight?: string;
    @Field(() => Date, {nullable:true})
    @Validator.MaxLength(255)
    releaseDate?: Date | string;
    @Field(() => OS, {nullable:true})
    os?: keyof typeof OS;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => DiscountCreateNestedOneWithoutLaptopsInput, {nullable:true})
    discount?: InstanceType<typeof DiscountCreateNestedOneWithoutLaptopsInput>;
    @Field(() => PurchaseCreateNestedManyWithoutLaptopsInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseCreateNestedManyWithoutLaptopsInput>;
    @Field(() => PostCreateNestedManyWithoutLaptopsInput, {nullable:true})
    posts?: InstanceType<typeof PostCreateNestedManyWithoutLaptopsInput>;
    @Field(() => CommentCreateNestedManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutLaptopInput>;
}

@InputType()
export class LaptopCreateWithoutPurchasesInput {
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    brand?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    model?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    material?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    display?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    cpu?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ram?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    graphicCard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ports?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    wifi?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    storage?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    webcam?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    fans?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    speakers?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    keyboard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    security?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    adapter?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    specialFeatures?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    dimensionsAndWeight?: string;
    @Field(() => Date, {nullable:true})
    @Validator.MaxLength(255)
    releaseDate?: Date | string;
    @Field(() => OS, {nullable:true})
    os?: keyof typeof OS;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PriceMapCreateNestedOneWithoutLaptopsInput, {nullable:true})
    priceMap?: InstanceType<typeof PriceMapCreateNestedOneWithoutLaptopsInput>;
    @Field(() => DiscountCreateNestedOneWithoutLaptopsInput, {nullable:true})
    discount?: InstanceType<typeof DiscountCreateNestedOneWithoutLaptopsInput>;
    @Field(() => PostCreateNestedManyWithoutLaptopsInput, {nullable:true})
    posts?: InstanceType<typeof PostCreateNestedManyWithoutLaptopsInput>;
    @Field(() => CommentCreateNestedManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutLaptopInput>;
}

@InputType()
export class LaptopCreateInput {
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    brand?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    model?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    material?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    display?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    cpu?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ram?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    graphicCard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ports?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    wifi?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    storage?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    webcam?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    fans?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    speakers?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    keyboard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    security?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    adapter?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    specialFeatures?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    dimensionsAndWeight?: string;
    @Field(() => Date, {nullable:true})
    @Validator.MaxLength(255)
    releaseDate?: Date | string;
    @Field(() => OS, {nullable:true})
    os?: keyof typeof OS;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PriceMapCreateNestedOneWithoutLaptopsInput, {nullable:true})
    priceMap?: InstanceType<typeof PriceMapCreateNestedOneWithoutLaptopsInput>;
    @Field(() => DiscountCreateNestedOneWithoutLaptopsInput, {nullable:true})
    discount?: InstanceType<typeof DiscountCreateNestedOneWithoutLaptopsInput>;
    @Field(() => PurchaseCreateNestedManyWithoutLaptopsInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseCreateNestedManyWithoutLaptopsInput>;
    @Field(() => PostCreateNestedManyWithoutLaptopsInput, {nullable:true})
    posts?: InstanceType<typeof PostCreateNestedManyWithoutLaptopsInput>;
    @Field(() => CommentCreateNestedManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutLaptopInput>;
}

@ArgsType()
export class LaptopGroupByArgs {
    @Field(() => LaptopWhereInput, {nullable:true})
    where?: InstanceType<typeof LaptopWhereInput>;
    @Field(() => [LaptopOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LaptopOrderByWithAggregationInput>;
    @Field(() => [LaptopScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LaptopScalarFieldEnum>;
    @Field(() => LaptopScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof LaptopScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LaptopCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LaptopCountAggregateInput>;
    @Field(() => LaptopAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof LaptopAvgAggregateInput>;
    @Field(() => LaptopSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof LaptopSumAggregateInput>;
    @Field(() => LaptopMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LaptopMinAggregateInput>;
    @Field(() => LaptopMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LaptopMaxAggregateInput>;
}

@ObjectType()
export class LaptopGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    brand!: string;
    @Field(() => String, {nullable:false})
    model!: string;
    @Field(() => String, {nullable:false})
    material!: string;
    @Field(() => String, {nullable:false})
    display!: string;
    @Field(() => String, {nullable:false})
    cpu!: string;
    @Field(() => String, {nullable:false})
    ram!: string;
    @Field(() => String, {nullable:false})
    graphicCard!: string;
    @Field(() => String, {nullable:false})
    ports!: string;
    @Field(() => String, {nullable:false})
    wifi!: string;
    @Field(() => String, {nullable:false})
    storage!: string;
    @Field(() => String, {nullable:false})
    webcam!: string;
    @Field(() => String, {nullable:false})
    fans!: string;
    @Field(() => String, {nullable:false})
    speakers!: string;
    @Field(() => String, {nullable:false})
    keyboard!: string;
    @Field(() => String, {nullable:false})
    security!: string;
    @Field(() => String, {nullable:false})
    adapter!: string;
    @Field(() => String, {nullable:false})
    specialFeatures!: string;
    @Field(() => String, {nullable:false})
    dimensionsAndWeight!: string;
    @Field(() => Date, {nullable:false})
    releaseDate!: Date | string;
    @Field(() => OS, {nullable:false})
    os!: keyof typeof OS;
    @Field(() => Int, {nullable:true})
    priceMapId?: number;
    @Field(() => Int, {nullable:true})
    discountId?: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => LaptopCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LaptopCountAggregate>;
    @Field(() => LaptopAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof LaptopAvgAggregate>;
    @Field(() => LaptopSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof LaptopSumAggregate>;
    @Field(() => LaptopMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LaptopMinAggregate>;
    @Field(() => LaptopMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LaptopMaxAggregate>;
}

@InputType()
export class LaptopListRelationFilter {
    @Field(() => LaptopWhereInput, {nullable:true})
    every?: InstanceType<typeof LaptopWhereInput>;
    @Field(() => LaptopWhereInput, {nullable:true})
    some?: InstanceType<typeof LaptopWhereInput>;
    @Field(() => LaptopWhereInput, {nullable:true})
    none?: InstanceType<typeof LaptopWhereInput>;
}

@InputType()
export class LaptopMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    brand?: true;
    @Field(() => Boolean, {nullable:true})
    model?: true;
    @Field(() => Boolean, {nullable:true})
    material?: true;
    @Field(() => Boolean, {nullable:true})
    display?: true;
    @Field(() => Boolean, {nullable:true})
    cpu?: true;
    @Field(() => Boolean, {nullable:true})
    ram?: true;
    @Field(() => Boolean, {nullable:true})
    graphicCard?: true;
    @Field(() => Boolean, {nullable:true})
    ports?: true;
    @Field(() => Boolean, {nullable:true})
    wifi?: true;
    @Field(() => Boolean, {nullable:true})
    storage?: true;
    @Field(() => Boolean, {nullable:true})
    webcam?: true;
    @Field(() => Boolean, {nullable:true})
    fans?: true;
    @Field(() => Boolean, {nullable:true})
    speakers?: true;
    @Field(() => Boolean, {nullable:true})
    keyboard?: true;
    @Field(() => Boolean, {nullable:true})
    security?: true;
    @Field(() => Boolean, {nullable:true})
    adapter?: true;
    @Field(() => Boolean, {nullable:true})
    specialFeatures?: true;
    @Field(() => Boolean, {nullable:true})
    dimensionsAndWeight?: true;
    @Field(() => Boolean, {nullable:true})
    releaseDate?: true;
    @Field(() => Boolean, {nullable:true})
    os?: true;
    @Field(() => Boolean, {nullable:true})
    priceMapId?: true;
    @Field(() => Boolean, {nullable:true})
    discountId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class LaptopMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    brand?: string;
    @Field(() => String, {nullable:true})
    model?: string;
    @Field(() => String, {nullable:true})
    material?: string;
    @Field(() => String, {nullable:true})
    display?: string;
    @Field(() => String, {nullable:true})
    cpu?: string;
    @Field(() => String, {nullable:true})
    ram?: string;
    @Field(() => String, {nullable:true})
    graphicCard?: string;
    @Field(() => String, {nullable:true})
    ports?: string;
    @Field(() => String, {nullable:true})
    wifi?: string;
    @Field(() => String, {nullable:true})
    storage?: string;
    @Field(() => String, {nullable:true})
    webcam?: string;
    @Field(() => String, {nullable:true})
    fans?: string;
    @Field(() => String, {nullable:true})
    speakers?: string;
    @Field(() => String, {nullable:true})
    keyboard?: string;
    @Field(() => String, {nullable:true})
    security?: string;
    @Field(() => String, {nullable:true})
    adapter?: string;
    @Field(() => String, {nullable:true})
    specialFeatures?: string;
    @Field(() => String, {nullable:true})
    dimensionsAndWeight?: string;
    @Field(() => Date, {nullable:true})
    releaseDate?: Date | string;
    @Field(() => OS, {nullable:true})
    os?: keyof typeof OS;
    @Field(() => Int, {nullable:true})
    priceMapId?: number;
    @Field(() => Int, {nullable:true})
    discountId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LaptopMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    brand?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    model?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    material?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    display?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cpu?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ram?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    graphicCard?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ports?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    wifi?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    storage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    webcam?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fans?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    speakers?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    keyboard?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    security?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    adapter?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    specialFeatures?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dimensionsAndWeight?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    releaseDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    os?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    priceMapId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class LaptopMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    brand?: true;
    @Field(() => Boolean, {nullable:true})
    model?: true;
    @Field(() => Boolean, {nullable:true})
    material?: true;
    @Field(() => Boolean, {nullable:true})
    display?: true;
    @Field(() => Boolean, {nullable:true})
    cpu?: true;
    @Field(() => Boolean, {nullable:true})
    ram?: true;
    @Field(() => Boolean, {nullable:true})
    graphicCard?: true;
    @Field(() => Boolean, {nullable:true})
    ports?: true;
    @Field(() => Boolean, {nullable:true})
    wifi?: true;
    @Field(() => Boolean, {nullable:true})
    storage?: true;
    @Field(() => Boolean, {nullable:true})
    webcam?: true;
    @Field(() => Boolean, {nullable:true})
    fans?: true;
    @Field(() => Boolean, {nullable:true})
    speakers?: true;
    @Field(() => Boolean, {nullable:true})
    keyboard?: true;
    @Field(() => Boolean, {nullable:true})
    security?: true;
    @Field(() => Boolean, {nullable:true})
    adapter?: true;
    @Field(() => Boolean, {nullable:true})
    specialFeatures?: true;
    @Field(() => Boolean, {nullable:true})
    dimensionsAndWeight?: true;
    @Field(() => Boolean, {nullable:true})
    releaseDate?: true;
    @Field(() => Boolean, {nullable:true})
    os?: true;
    @Field(() => Boolean, {nullable:true})
    priceMapId?: true;
    @Field(() => Boolean, {nullable:true})
    discountId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class LaptopMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    brand?: string;
    @Field(() => String, {nullable:true})
    model?: string;
    @Field(() => String, {nullable:true})
    material?: string;
    @Field(() => String, {nullable:true})
    display?: string;
    @Field(() => String, {nullable:true})
    cpu?: string;
    @Field(() => String, {nullable:true})
    ram?: string;
    @Field(() => String, {nullable:true})
    graphicCard?: string;
    @Field(() => String, {nullable:true})
    ports?: string;
    @Field(() => String, {nullable:true})
    wifi?: string;
    @Field(() => String, {nullable:true})
    storage?: string;
    @Field(() => String, {nullable:true})
    webcam?: string;
    @Field(() => String, {nullable:true})
    fans?: string;
    @Field(() => String, {nullable:true})
    speakers?: string;
    @Field(() => String, {nullable:true})
    keyboard?: string;
    @Field(() => String, {nullable:true})
    security?: string;
    @Field(() => String, {nullable:true})
    adapter?: string;
    @Field(() => String, {nullable:true})
    specialFeatures?: string;
    @Field(() => String, {nullable:true})
    dimensionsAndWeight?: string;
    @Field(() => Date, {nullable:true})
    releaseDate?: Date | string;
    @Field(() => OS, {nullable:true})
    os?: keyof typeof OS;
    @Field(() => Int, {nullable:true})
    priceMapId?: number;
    @Field(() => Int, {nullable:true})
    discountId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LaptopMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    brand?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    model?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    material?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    display?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cpu?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ram?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    graphicCard?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ports?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    wifi?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    storage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    webcam?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fans?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    speakers?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    keyboard?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    security?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    adapter?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    specialFeatures?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dimensionsAndWeight?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    releaseDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    os?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    priceMapId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class LaptopOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class LaptopOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    brand?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    model?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    material?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    display?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cpu?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ram?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    graphicCard?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ports?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    wifi?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    storage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    webcam?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fans?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    speakers?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    keyboard?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    security?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    adapter?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    specialFeatures?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dimensionsAndWeight?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    releaseDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    os?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    priceMapId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => LaptopCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LaptopCountOrderByAggregateInput>;
    @Field(() => LaptopAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof LaptopAvgOrderByAggregateInput>;
    @Field(() => LaptopMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LaptopMaxOrderByAggregateInput>;
    @Field(() => LaptopMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LaptopMinOrderByAggregateInput>;
    @Field(() => LaptopSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof LaptopSumOrderByAggregateInput>;
}

@InputType()
export class LaptopOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    brand?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    model?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    material?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    display?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cpu?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ram?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    graphicCard?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    ports?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    wifi?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    storage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    webcam?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fans?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    speakers?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    keyboard?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    security?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    adapter?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    specialFeatures?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    dimensionsAndWeight?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    releaseDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    os?: keyof typeof SortOrder;
    @Field(() => PriceMapOrderByWithRelationInput, {nullable:true})
    priceMap?: InstanceType<typeof PriceMapOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    priceMapId?: keyof typeof SortOrder;
    @Field(() => DiscountOrderByWithRelationInput, {nullable:true})
    discount?: InstanceType<typeof DiscountOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    discountId?: keyof typeof SortOrder;
    @Field(() => PurchaseOrderByRelationAggregateInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseOrderByRelationAggregateInput>;
    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    posts?: InstanceType<typeof PostOrderByRelationAggregateInput>;
    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: InstanceType<typeof CommentOrderByRelationAggregateInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class LaptopRelationFilter {
    @Field(() => LaptopWhereInput, {nullable:true})
    is?: InstanceType<typeof LaptopWhereInput>;
    @Field(() => LaptopWhereInput, {nullable:true})
    isNot?: InstanceType<typeof LaptopWhereInput>;
}

@InputType()
export class LaptopScalarWhereWithAggregatesInput {
    @Field(() => [LaptopScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LaptopScalarWhereWithAggregatesInput>;
    @Field(() => [LaptopScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LaptopScalarWhereWithAggregatesInput>;
    @Field(() => [LaptopScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LaptopScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    brand?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    model?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    material?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    display?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    cpu?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ram?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    graphicCard?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ports?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    wifi?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    storage?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    webcam?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fans?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    speakers?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    keyboard?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    security?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    adapter?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    specialFeatures?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => EnumOSWithAggregatesFilter, {nullable:true})
    os?: InstanceType<typeof EnumOSWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    priceMapId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    discountId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class LaptopScalarWhereInput {
    @Field(() => [LaptopScalarWhereInput], {nullable:true})
    AND?: Array<LaptopScalarWhereInput>;
    @Field(() => [LaptopScalarWhereInput], {nullable:true})
    OR?: Array<LaptopScalarWhereInput>;
    @Field(() => [LaptopScalarWhereInput], {nullable:true})
    NOT?: Array<LaptopScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    brand?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    model?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    material?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    display?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    cpu?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    ram?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    graphicCard?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    ports?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    wifi?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    storage?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    webcam?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    fans?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    speakers?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    keyboard?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    security?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    adapter?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    specialFeatures?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => EnumOSFilter, {nullable:true})
    os?: InstanceType<typeof EnumOSFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    priceMapId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => IntNullableFilter, {nullable:true})
    discountId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class LaptopSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    priceMapId?: true;
    @Field(() => Boolean, {nullable:true})
    discountId?: true;
}

@ObjectType()
export class LaptopSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    priceMapId?: number;
    @Field(() => Int, {nullable:true})
    discountId?: number;
}

@InputType()
export class LaptopSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    priceMapId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountId?: keyof typeof SortOrder;
}

@InputType()
export class LaptopUncheckedCreateNestedManyWithoutDiscountInput {
    @Field(() => [LaptopCreateWithoutDiscountInput], {nullable:true})
    create?: Array<LaptopCreateWithoutDiscountInput>;
    @Field(() => [LaptopCreateOrConnectWithoutDiscountInput], {nullable:true})
    connectOrCreate?: Array<LaptopCreateOrConnectWithoutDiscountInput>;
    @Field(() => LaptopCreateManyDiscountInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof LaptopCreateManyDiscountInputEnvelope>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    connect?: Array<LaptopWhereUniqueInput>;
}

@InputType()
export class LaptopUncheckedCreateNestedManyWithoutPriceMapInput {
    @Field(() => [LaptopCreateWithoutPriceMapInput], {nullable:true})
    create?: Array<LaptopCreateWithoutPriceMapInput>;
    @Field(() => [LaptopCreateOrConnectWithoutPriceMapInput], {nullable:true})
    connectOrCreate?: Array<LaptopCreateOrConnectWithoutPriceMapInput>;
    @Field(() => LaptopCreateManyPriceMapInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof LaptopCreateManyPriceMapInputEnvelope>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    connect?: Array<LaptopWhereUniqueInput>;
}

@InputType()
export class LaptopUncheckedCreateWithoutCommentsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    brand?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    model?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    material?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    display?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    cpu?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ram?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    graphicCard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ports?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    wifi?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    storage?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    webcam?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    fans?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    speakers?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    keyboard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    security?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    adapter?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    specialFeatures?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    dimensionsAndWeight?: string;
    @Field(() => Date, {nullable:true})
    @Validator.MaxLength(255)
    releaseDate?: Date | string;
    @Field(() => OS, {nullable:true})
    os?: keyof typeof OS;
    @Field(() => Int, {nullable:true})
    priceMapId?: number;
    @Field(() => Int, {nullable:true})
    discountId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class LaptopUncheckedCreateWithoutDiscountInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    brand?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    model?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    material?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    display?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    cpu?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ram?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    graphicCard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ports?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    wifi?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    storage?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    webcam?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    fans?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    speakers?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    keyboard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    security?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    adapter?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    specialFeatures?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    dimensionsAndWeight?: string;
    @Field(() => Date, {nullable:true})
    @Validator.MaxLength(255)
    releaseDate?: Date | string;
    @Field(() => OS, {nullable:true})
    os?: keyof typeof OS;
    @Field(() => Int, {nullable:true})
    priceMapId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutLaptopInput>;
}

@InputType()
export class LaptopUncheckedCreateWithoutPostsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    brand?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    model?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    material?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    display?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    cpu?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ram?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    graphicCard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ports?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    wifi?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    storage?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    webcam?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    fans?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    speakers?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    keyboard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    security?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    adapter?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    specialFeatures?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    dimensionsAndWeight?: string;
    @Field(() => Date, {nullable:true})
    @Validator.MaxLength(255)
    releaseDate?: Date | string;
    @Field(() => OS, {nullable:true})
    os?: keyof typeof OS;
    @Field(() => Int, {nullable:true})
    priceMapId?: number;
    @Field(() => Int, {nullable:true})
    discountId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutLaptopInput>;
}

@InputType()
export class LaptopUncheckedCreateWithoutPriceMapInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    brand?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    model?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    material?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    display?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    cpu?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ram?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    graphicCard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ports?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    wifi?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    storage?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    webcam?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    fans?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    speakers?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    keyboard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    security?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    adapter?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    specialFeatures?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    dimensionsAndWeight?: string;
    @Field(() => Date, {nullable:true})
    @Validator.MaxLength(255)
    releaseDate?: Date | string;
    @Field(() => OS, {nullable:true})
    os?: keyof typeof OS;
    @Field(() => Int, {nullable:true})
    discountId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutLaptopInput>;
}

@InputType()
export class LaptopUncheckedCreateWithoutPurchasesInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    brand?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    model?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    material?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    display?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    cpu?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ram?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    graphicCard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ports?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    wifi?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    storage?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    webcam?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    fans?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    speakers?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    keyboard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    security?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    adapter?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    specialFeatures?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    dimensionsAndWeight?: string;
    @Field(() => Date, {nullable:true})
    @Validator.MaxLength(255)
    releaseDate?: Date | string;
    @Field(() => OS, {nullable:true})
    os?: keyof typeof OS;
    @Field(() => Int, {nullable:true})
    priceMapId?: number;
    @Field(() => Int, {nullable:true})
    discountId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutLaptopInput>;
}

@InputType()
export class LaptopUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    brand?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    model?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    material?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    display?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    cpu?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ram?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    graphicCard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    ports?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    wifi?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    storage?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    webcam?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    fans?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    speakers?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    keyboard?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    security?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    adapter?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    specialFeatures?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    dimensionsAndWeight?: string;
    @Field(() => Date, {nullable:true})
    @Validator.MaxLength(255)
    releaseDate?: Date | string;
    @Field(() => OS, {nullable:true})
    os?: keyof typeof OS;
    @Field(() => Int, {nullable:true})
    priceMapId?: number;
    @Field(() => Int, {nullable:true})
    discountId?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutLaptopInput>;
}

@InputType()
export class LaptopUncheckedUpdateManyWithoutDiscountInput {
    @Field(() => [LaptopCreateWithoutDiscountInput], {nullable:true})
    create?: Array<LaptopCreateWithoutDiscountInput>;
    @Field(() => [LaptopCreateOrConnectWithoutDiscountInput], {nullable:true})
    connectOrCreate?: Array<LaptopCreateOrConnectWithoutDiscountInput>;
    @Field(() => [LaptopUpsertWithWhereUniqueWithoutDiscountInput], {nullable:true})
    upsert?: Array<LaptopUpsertWithWhereUniqueWithoutDiscountInput>;
    @Field(() => LaptopCreateManyDiscountInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof LaptopCreateManyDiscountInputEnvelope>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    set?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    disconnect?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    delete?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    connect?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopUpdateWithWhereUniqueWithoutDiscountInput], {nullable:true})
    update?: Array<LaptopUpdateWithWhereUniqueWithoutDiscountInput>;
    @Field(() => [LaptopUpdateManyWithWhereWithoutDiscountInput], {nullable:true})
    updateMany?: Array<LaptopUpdateManyWithWhereWithoutDiscountInput>;
    @Field(() => [LaptopScalarWhereInput], {nullable:true})
    deleteMany?: Array<LaptopScalarWhereInput>;
}

@InputType()
export class LaptopUncheckedUpdateManyWithoutLaptopsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    model?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    material?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    display?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cpu?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ram?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    graphicCard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ports?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    wifi?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    webcam?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fans?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    speakers?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyboard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    security?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    adapter?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    specialFeatures?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumOSFieldUpdateOperationsInput, {nullable:true})
    os?: InstanceType<typeof EnumOSFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class LaptopUncheckedUpdateManyWithoutPriceMapInput {
    @Field(() => [LaptopCreateWithoutPriceMapInput], {nullable:true})
    create?: Array<LaptopCreateWithoutPriceMapInput>;
    @Field(() => [LaptopCreateOrConnectWithoutPriceMapInput], {nullable:true})
    connectOrCreate?: Array<LaptopCreateOrConnectWithoutPriceMapInput>;
    @Field(() => [LaptopUpsertWithWhereUniqueWithoutPriceMapInput], {nullable:true})
    upsert?: Array<LaptopUpsertWithWhereUniqueWithoutPriceMapInput>;
    @Field(() => LaptopCreateManyPriceMapInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof LaptopCreateManyPriceMapInputEnvelope>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    set?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    disconnect?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    delete?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    connect?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopUpdateWithWhereUniqueWithoutPriceMapInput], {nullable:true})
    update?: Array<LaptopUpdateWithWhereUniqueWithoutPriceMapInput>;
    @Field(() => [LaptopUpdateManyWithWhereWithoutPriceMapInput], {nullable:true})
    updateMany?: Array<LaptopUpdateManyWithWhereWithoutPriceMapInput>;
    @Field(() => [LaptopScalarWhereInput], {nullable:true})
    deleteMany?: Array<LaptopScalarWhereInput>;
}

@InputType()
export class LaptopUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    model?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    material?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    display?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cpu?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ram?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    graphicCard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ports?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    wifi?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    webcam?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fans?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    speakers?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyboard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    security?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    adapter?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    specialFeatures?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumOSFieldUpdateOperationsInput, {nullable:true})
    os?: InstanceType<typeof EnumOSFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    priceMapId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class LaptopUncheckedUpdateWithoutCommentsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    model?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    material?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    display?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cpu?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ram?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    graphicCard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ports?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    wifi?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    webcam?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fans?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    speakers?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyboard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    security?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    adapter?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    specialFeatures?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumOSFieldUpdateOperationsInput, {nullable:true})
    os?: InstanceType<typeof EnumOSFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    priceMapId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class LaptopUncheckedUpdateWithoutDiscountInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    model?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    material?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    display?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cpu?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ram?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    graphicCard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ports?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    wifi?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    webcam?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fans?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    speakers?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyboard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    security?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    adapter?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    specialFeatures?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumOSFieldUpdateOperationsInput, {nullable:true})
    os?: InstanceType<typeof EnumOSFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    priceMapId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutLaptopInput>;
}

@InputType()
export class LaptopUncheckedUpdateWithoutPostsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    model?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    material?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    display?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cpu?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ram?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    graphicCard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ports?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    wifi?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    webcam?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fans?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    speakers?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyboard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    security?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    adapter?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    specialFeatures?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumOSFieldUpdateOperationsInput, {nullable:true})
    os?: InstanceType<typeof EnumOSFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    priceMapId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutLaptopInput>;
}

@InputType()
export class LaptopUncheckedUpdateWithoutPriceMapInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    model?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    material?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    display?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cpu?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ram?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    graphicCard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ports?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    wifi?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    webcam?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fans?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    speakers?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyboard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    security?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    adapter?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    specialFeatures?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumOSFieldUpdateOperationsInput, {nullable:true})
    os?: InstanceType<typeof EnumOSFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutLaptopInput>;
}

@InputType()
export class LaptopUncheckedUpdateWithoutPurchasesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    model?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    material?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    display?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cpu?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ram?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    graphicCard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ports?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    wifi?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    webcam?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fans?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    speakers?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyboard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    security?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    adapter?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    specialFeatures?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumOSFieldUpdateOperationsInput, {nullable:true})
    os?: InstanceType<typeof EnumOSFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    priceMapId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutLaptopInput>;
}

@InputType()
export class LaptopUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    model?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    material?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    display?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cpu?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ram?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    graphicCard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ports?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    wifi?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    webcam?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fans?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    speakers?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyboard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    security?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    adapter?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    specialFeatures?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumOSFieldUpdateOperationsInput, {nullable:true})
    os?: InstanceType<typeof EnumOSFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    priceMapId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    discountId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutLaptopInput>;
}

@InputType()
export class LaptopUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    model?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    material?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    display?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cpu?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ram?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    graphicCard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ports?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    wifi?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    webcam?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fans?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    speakers?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyboard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    security?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    adapter?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    specialFeatures?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumOSFieldUpdateOperationsInput, {nullable:true})
    os?: InstanceType<typeof EnumOSFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class LaptopUpdateManyWithWhereWithoutDiscountInput {
    @Field(() => LaptopScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof LaptopScalarWhereInput>;
    @Field(() => LaptopUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof LaptopUpdateManyMutationInput>;
}

@InputType()
export class LaptopUpdateManyWithWhereWithoutPostsInput {
    @Field(() => LaptopScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof LaptopScalarWhereInput>;
    @Field(() => LaptopUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof LaptopUpdateManyMutationInput>;
}

@InputType()
export class LaptopUpdateManyWithWhereWithoutPriceMapInput {
    @Field(() => LaptopScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof LaptopScalarWhereInput>;
    @Field(() => LaptopUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof LaptopUpdateManyMutationInput>;
}

@InputType()
export class LaptopUpdateManyWithWhereWithoutPurchasesInput {
    @Field(() => LaptopScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof LaptopScalarWhereInput>;
    @Field(() => LaptopUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof LaptopUpdateManyMutationInput>;
}

@InputType()
export class LaptopUpdateManyWithoutDiscountInput {
    @Field(() => [LaptopCreateWithoutDiscountInput], {nullable:true})
    create?: Array<LaptopCreateWithoutDiscountInput>;
    @Field(() => [LaptopCreateOrConnectWithoutDiscountInput], {nullable:true})
    connectOrCreate?: Array<LaptopCreateOrConnectWithoutDiscountInput>;
    @Field(() => [LaptopUpsertWithWhereUniqueWithoutDiscountInput], {nullable:true})
    upsert?: Array<LaptopUpsertWithWhereUniqueWithoutDiscountInput>;
    @Field(() => LaptopCreateManyDiscountInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof LaptopCreateManyDiscountInputEnvelope>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    set?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    disconnect?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    delete?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    connect?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopUpdateWithWhereUniqueWithoutDiscountInput], {nullable:true})
    update?: Array<LaptopUpdateWithWhereUniqueWithoutDiscountInput>;
    @Field(() => [LaptopUpdateManyWithWhereWithoutDiscountInput], {nullable:true})
    updateMany?: Array<LaptopUpdateManyWithWhereWithoutDiscountInput>;
    @Field(() => [LaptopScalarWhereInput], {nullable:true})
    deleteMany?: Array<LaptopScalarWhereInput>;
}

@InputType()
export class LaptopUpdateManyWithoutPostsInput {
    @Field(() => [LaptopCreateWithoutPostsInput], {nullable:true})
    create?: Array<LaptopCreateWithoutPostsInput>;
    @Field(() => [LaptopCreateOrConnectWithoutPostsInput], {nullable:true})
    connectOrCreate?: Array<LaptopCreateOrConnectWithoutPostsInput>;
    @Field(() => [LaptopUpsertWithWhereUniqueWithoutPostsInput], {nullable:true})
    upsert?: Array<LaptopUpsertWithWhereUniqueWithoutPostsInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    set?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    disconnect?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    delete?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    connect?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopUpdateWithWhereUniqueWithoutPostsInput], {nullable:true})
    update?: Array<LaptopUpdateWithWhereUniqueWithoutPostsInput>;
    @Field(() => [LaptopUpdateManyWithWhereWithoutPostsInput], {nullable:true})
    updateMany?: Array<LaptopUpdateManyWithWhereWithoutPostsInput>;
    @Field(() => [LaptopScalarWhereInput], {nullable:true})
    deleteMany?: Array<LaptopScalarWhereInput>;
}

@InputType()
export class LaptopUpdateManyWithoutPriceMapInput {
    @Field(() => [LaptopCreateWithoutPriceMapInput], {nullable:true})
    create?: Array<LaptopCreateWithoutPriceMapInput>;
    @Field(() => [LaptopCreateOrConnectWithoutPriceMapInput], {nullable:true})
    connectOrCreate?: Array<LaptopCreateOrConnectWithoutPriceMapInput>;
    @Field(() => [LaptopUpsertWithWhereUniqueWithoutPriceMapInput], {nullable:true})
    upsert?: Array<LaptopUpsertWithWhereUniqueWithoutPriceMapInput>;
    @Field(() => LaptopCreateManyPriceMapInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof LaptopCreateManyPriceMapInputEnvelope>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    set?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    disconnect?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    delete?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    connect?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopUpdateWithWhereUniqueWithoutPriceMapInput], {nullable:true})
    update?: Array<LaptopUpdateWithWhereUniqueWithoutPriceMapInput>;
    @Field(() => [LaptopUpdateManyWithWhereWithoutPriceMapInput], {nullable:true})
    updateMany?: Array<LaptopUpdateManyWithWhereWithoutPriceMapInput>;
    @Field(() => [LaptopScalarWhereInput], {nullable:true})
    deleteMany?: Array<LaptopScalarWhereInput>;
}

@InputType()
export class LaptopUpdateManyWithoutPurchasesInput {
    @Field(() => [LaptopCreateWithoutPurchasesInput], {nullable:true})
    create?: Array<LaptopCreateWithoutPurchasesInput>;
    @Field(() => [LaptopCreateOrConnectWithoutPurchasesInput], {nullable:true})
    connectOrCreate?: Array<LaptopCreateOrConnectWithoutPurchasesInput>;
    @Field(() => [LaptopUpsertWithWhereUniqueWithoutPurchasesInput], {nullable:true})
    upsert?: Array<LaptopUpsertWithWhereUniqueWithoutPurchasesInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    set?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    disconnect?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    delete?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopWhereUniqueInput], {nullable:true})
    connect?: Array<LaptopWhereUniqueInput>;
    @Field(() => [LaptopUpdateWithWhereUniqueWithoutPurchasesInput], {nullable:true})
    update?: Array<LaptopUpdateWithWhereUniqueWithoutPurchasesInput>;
    @Field(() => [LaptopUpdateManyWithWhereWithoutPurchasesInput], {nullable:true})
    updateMany?: Array<LaptopUpdateManyWithWhereWithoutPurchasesInput>;
    @Field(() => [LaptopScalarWhereInput], {nullable:true})
    deleteMany?: Array<LaptopScalarWhereInput>;
}

@InputType()
export class LaptopUpdateOneRequiredWithoutCommentsInput {
    @Field(() => LaptopCreateWithoutCommentsInput, {nullable:true})
    create?: InstanceType<typeof LaptopCreateWithoutCommentsInput>;
    @Field(() => LaptopCreateOrConnectWithoutCommentsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof LaptopCreateOrConnectWithoutCommentsInput>;
    @Field(() => LaptopUpsertWithoutCommentsInput, {nullable:true})
    upsert?: InstanceType<typeof LaptopUpsertWithoutCommentsInput>;
    @Field(() => LaptopWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => LaptopUpdateWithoutCommentsInput, {nullable:true})
    update?: InstanceType<typeof LaptopUpdateWithoutCommentsInput>;
}

@InputType()
export class LaptopUpdateWithWhereUniqueWithoutDiscountInput {
    @Field(() => LaptopWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => LaptopUpdateWithoutDiscountInput, {nullable:false})
    data!: InstanceType<typeof LaptopUpdateWithoutDiscountInput>;
}

@InputType()
export class LaptopUpdateWithWhereUniqueWithoutPostsInput {
    @Field(() => LaptopWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => LaptopUpdateWithoutPostsInput, {nullable:false})
    data!: InstanceType<typeof LaptopUpdateWithoutPostsInput>;
}

@InputType()
export class LaptopUpdateWithWhereUniqueWithoutPriceMapInput {
    @Field(() => LaptopWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => LaptopUpdateWithoutPriceMapInput, {nullable:false})
    data!: InstanceType<typeof LaptopUpdateWithoutPriceMapInput>;
}

@InputType()
export class LaptopUpdateWithWhereUniqueWithoutPurchasesInput {
    @Field(() => LaptopWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => LaptopUpdateWithoutPurchasesInput, {nullable:false})
    data!: InstanceType<typeof LaptopUpdateWithoutPurchasesInput>;
}

@InputType()
export class LaptopUpdateWithoutCommentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    model?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    material?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    display?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cpu?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ram?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    graphicCard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ports?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    wifi?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    webcam?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fans?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    speakers?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyboard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    security?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    adapter?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    specialFeatures?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumOSFieldUpdateOperationsInput, {nullable:true})
    os?: InstanceType<typeof EnumOSFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PriceMapUpdateOneWithoutLaptopsInput, {nullable:true})
    priceMap?: InstanceType<typeof PriceMapUpdateOneWithoutLaptopsInput>;
    @Field(() => DiscountUpdateOneWithoutLaptopsInput, {nullable:true})
    discount?: InstanceType<typeof DiscountUpdateOneWithoutLaptopsInput>;
    @Field(() => PurchaseUpdateManyWithoutLaptopsInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseUpdateManyWithoutLaptopsInput>;
    @Field(() => PostUpdateManyWithoutLaptopsInput, {nullable:true})
    posts?: InstanceType<typeof PostUpdateManyWithoutLaptopsInput>;
}

@InputType()
export class LaptopUpdateWithoutDiscountInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    model?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    material?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    display?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cpu?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ram?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    graphicCard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ports?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    wifi?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    webcam?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fans?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    speakers?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyboard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    security?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    adapter?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    specialFeatures?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumOSFieldUpdateOperationsInput, {nullable:true})
    os?: InstanceType<typeof EnumOSFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PriceMapUpdateOneWithoutLaptopsInput, {nullable:true})
    priceMap?: InstanceType<typeof PriceMapUpdateOneWithoutLaptopsInput>;
    @Field(() => PurchaseUpdateManyWithoutLaptopsInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseUpdateManyWithoutLaptopsInput>;
    @Field(() => PostUpdateManyWithoutLaptopsInput, {nullable:true})
    posts?: InstanceType<typeof PostUpdateManyWithoutLaptopsInput>;
    @Field(() => CommentUpdateManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutLaptopInput>;
}

@InputType()
export class LaptopUpdateWithoutPostsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    model?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    material?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    display?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cpu?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ram?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    graphicCard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ports?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    wifi?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    webcam?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fans?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    speakers?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyboard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    security?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    adapter?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    specialFeatures?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumOSFieldUpdateOperationsInput, {nullable:true})
    os?: InstanceType<typeof EnumOSFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PriceMapUpdateOneWithoutLaptopsInput, {nullable:true})
    priceMap?: InstanceType<typeof PriceMapUpdateOneWithoutLaptopsInput>;
    @Field(() => DiscountUpdateOneWithoutLaptopsInput, {nullable:true})
    discount?: InstanceType<typeof DiscountUpdateOneWithoutLaptopsInput>;
    @Field(() => PurchaseUpdateManyWithoutLaptopsInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseUpdateManyWithoutLaptopsInput>;
    @Field(() => CommentUpdateManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutLaptopInput>;
}

@InputType()
export class LaptopUpdateWithoutPriceMapInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    model?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    material?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    display?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cpu?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ram?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    graphicCard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ports?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    wifi?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    webcam?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fans?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    speakers?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyboard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    security?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    adapter?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    specialFeatures?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumOSFieldUpdateOperationsInput, {nullable:true})
    os?: InstanceType<typeof EnumOSFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DiscountUpdateOneWithoutLaptopsInput, {nullable:true})
    discount?: InstanceType<typeof DiscountUpdateOneWithoutLaptopsInput>;
    @Field(() => PurchaseUpdateManyWithoutLaptopsInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseUpdateManyWithoutLaptopsInput>;
    @Field(() => PostUpdateManyWithoutLaptopsInput, {nullable:true})
    posts?: InstanceType<typeof PostUpdateManyWithoutLaptopsInput>;
    @Field(() => CommentUpdateManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutLaptopInput>;
}

@InputType()
export class LaptopUpdateWithoutPurchasesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    model?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    material?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    display?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cpu?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ram?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    graphicCard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ports?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    wifi?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    webcam?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fans?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    speakers?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyboard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    security?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    adapter?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    specialFeatures?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumOSFieldUpdateOperationsInput, {nullable:true})
    os?: InstanceType<typeof EnumOSFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PriceMapUpdateOneWithoutLaptopsInput, {nullable:true})
    priceMap?: InstanceType<typeof PriceMapUpdateOneWithoutLaptopsInput>;
    @Field(() => DiscountUpdateOneWithoutLaptopsInput, {nullable:true})
    discount?: InstanceType<typeof DiscountUpdateOneWithoutLaptopsInput>;
    @Field(() => PostUpdateManyWithoutLaptopsInput, {nullable:true})
    posts?: InstanceType<typeof PostUpdateManyWithoutLaptopsInput>;
    @Field(() => CommentUpdateManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutLaptopInput>;
}

@InputType()
export class LaptopUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brand?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    model?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    material?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    display?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cpu?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ram?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    graphicCard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ports?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    wifi?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    storage?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    webcam?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fans?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    speakers?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    keyboard?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    security?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    adapter?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    specialFeatures?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumOSFieldUpdateOperationsInput, {nullable:true})
    os?: InstanceType<typeof EnumOSFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PriceMapUpdateOneWithoutLaptopsInput, {nullable:true})
    priceMap?: InstanceType<typeof PriceMapUpdateOneWithoutLaptopsInput>;
    @Field(() => DiscountUpdateOneWithoutLaptopsInput, {nullable:true})
    discount?: InstanceType<typeof DiscountUpdateOneWithoutLaptopsInput>;
    @Field(() => PurchaseUpdateManyWithoutLaptopsInput, {nullable:true})
    purchases?: InstanceType<typeof PurchaseUpdateManyWithoutLaptopsInput>;
    @Field(() => PostUpdateManyWithoutLaptopsInput, {nullable:true})
    posts?: InstanceType<typeof PostUpdateManyWithoutLaptopsInput>;
    @Field(() => CommentUpdateManyWithoutLaptopInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutLaptopInput>;
}

@InputType()
export class LaptopUpsertWithWhereUniqueWithoutDiscountInput {
    @Field(() => LaptopWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => LaptopUpdateWithoutDiscountInput, {nullable:false})
    update!: InstanceType<typeof LaptopUpdateWithoutDiscountInput>;
    @Field(() => LaptopCreateWithoutDiscountInput, {nullable:false})
    create!: InstanceType<typeof LaptopCreateWithoutDiscountInput>;
}

@InputType()
export class LaptopUpsertWithWhereUniqueWithoutPostsInput {
    @Field(() => LaptopWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => LaptopUpdateWithoutPostsInput, {nullable:false})
    update!: InstanceType<typeof LaptopUpdateWithoutPostsInput>;
    @Field(() => LaptopCreateWithoutPostsInput, {nullable:false})
    create!: InstanceType<typeof LaptopCreateWithoutPostsInput>;
}

@InputType()
export class LaptopUpsertWithWhereUniqueWithoutPriceMapInput {
    @Field(() => LaptopWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => LaptopUpdateWithoutPriceMapInput, {nullable:false})
    update!: InstanceType<typeof LaptopUpdateWithoutPriceMapInput>;
    @Field(() => LaptopCreateWithoutPriceMapInput, {nullable:false})
    create!: InstanceType<typeof LaptopCreateWithoutPriceMapInput>;
}

@InputType()
export class LaptopUpsertWithWhereUniqueWithoutPurchasesInput {
    @Field(() => LaptopWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => LaptopUpdateWithoutPurchasesInput, {nullable:false})
    update!: InstanceType<typeof LaptopUpdateWithoutPurchasesInput>;
    @Field(() => LaptopCreateWithoutPurchasesInput, {nullable:false})
    create!: InstanceType<typeof LaptopCreateWithoutPurchasesInput>;
}

@InputType()
export class LaptopUpsertWithoutCommentsInput {
    @Field(() => LaptopUpdateWithoutCommentsInput, {nullable:false})
    update!: InstanceType<typeof LaptopUpdateWithoutCommentsInput>;
    @Field(() => LaptopCreateWithoutCommentsInput, {nullable:false})
    create!: InstanceType<typeof LaptopCreateWithoutCommentsInput>;
}

@InputType()
export class LaptopWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class LaptopWhereInput {
    @Field(() => [LaptopWhereInput], {nullable:true})
    AND?: Array<LaptopWhereInput>;
    @Field(() => [LaptopWhereInput], {nullable:true})
    OR?: Array<LaptopWhereInput>;
    @Field(() => [LaptopWhereInput], {nullable:true})
    NOT?: Array<LaptopWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    brand?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    model?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    material?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    display?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    cpu?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    ram?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    graphicCard?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    ports?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    wifi?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    storage?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    webcam?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    fans?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    speakers?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    keyboard?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    security?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    adapter?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    specialFeatures?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    dimensionsAndWeight?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    releaseDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => EnumOSFilter, {nullable:true})
    os?: InstanceType<typeof EnumOSFilter>;
    @Field(() => PriceMapWhereInput, {nullable:true})
    priceMap?: InstanceType<typeof PriceMapWhereInput>;
    @Field(() => IntNullableFilter, {nullable:true})
    priceMapId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => DiscountWhereInput, {nullable:true})
    discount?: InstanceType<typeof DiscountWhereInput>;
    @Field(() => IntNullableFilter, {nullable:true})
    discountId?: InstanceType<typeof IntNullableFilter>;
    @Field(() => PurchaseListRelationFilter, {nullable:true})
    purchases?: InstanceType<typeof PurchaseListRelationFilter>;
    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: InstanceType<typeof PostListRelationFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: InstanceType<typeof CommentListRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Laptop {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    brand!: string;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    model!: string;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    material!: string;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    display!: string;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    cpu!: string;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    ram!: string;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    graphicCard!: string;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    ports!: string;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    wifi!: string;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    storage!: string;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    webcam!: string;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    fans!: string;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    speakers!: string;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    keyboard!: string;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    security!: string;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    adapter!: string;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    specialFeatures!: string;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    dimensionsAndWeight!: string;
    @Field(() => Date, {nullable:false})
    releaseDate!: Date;
    @Field(() => OS, {nullable:false,defaultValue:'WINDOWS'})
    os!: keyof typeof OS;
    @Field(() => PriceMap, {nullable:true})
    priceMap?: InstanceType<typeof PriceMap> | null;
    @Field(() => Int, {nullable:true})
    priceMapId!: number | null;
    @Field(() => Discount, {nullable:true})
    discount?: InstanceType<typeof Discount> | null;
    @Field(() => Int, {nullable:true})
    discountId!: number | null;
    @Field(() => [Purchase], {nullable:true})
    purchases?: Array<Purchase>;
    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;
    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => LaptopCount, {nullable:false})
    _count?: InstanceType<typeof LaptopCount>;
}

@ArgsType()
export class UpdateManyLaptopArgs {
    @Field(() => LaptopUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof LaptopUpdateManyMutationInput>;
    @Field(() => LaptopWhereInput, {nullable:true})
    where?: InstanceType<typeof LaptopWhereInput>;
}

@ArgsType()
export class UpdateOneLaptopArgs {
    @Field(() => LaptopUpdateInput, {nullable:false})
    data!: InstanceType<typeof LaptopUpdateInput>;
    @Field(() => LaptopWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LaptopWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneLaptopArgs {
    @Field(() => LaptopWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof LaptopWhereUniqueInput>;
    @Field(() => LaptopCreateInput, {nullable:false})
    create!: InstanceType<typeof LaptopCreateInput>;
    @Field(() => LaptopUpdateInput, {nullable:false})
    update!: InstanceType<typeof LaptopUpdateInput>;
}

@ObjectType()
export class AggregatePassage {
    @Field(() => PassageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PassageCountAggregate>;
    @Field(() => PassageAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PassageAvgAggregate>;
    @Field(() => PassageSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PassageSumAggregate>;
    @Field(() => PassageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PassageMinAggregate>;
    @Field(() => PassageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PassageMaxAggregate>;
}

@ArgsType()
export class CreateManyPassageArgs {
    @Field(() => [PassageCreateManyInput], {nullable:false})
    data!: Array<PassageCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePassageArgs {
    @Field(() => PassageCreateInput, {nullable:false})
    data!: InstanceType<typeof PassageCreateInput>;
}

@ArgsType()
export class DeleteManyPassageArgs {
    @Field(() => PassageWhereInput, {nullable:true})
    where?: InstanceType<typeof PassageWhereInput>;
}

@ArgsType()
export class DeleteOnePassageArgs {
    @Field(() => PassageWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PassageWhereUniqueInput>;
}

@ArgsType()
export class FindFirstPassageArgs {
    @Field(() => PassageWhereInput, {nullable:true})
    where?: InstanceType<typeof PassageWhereInput>;
    @Field(() => [PassageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PassageOrderByWithRelationInput>;
    @Field(() => PassageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PassageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PassageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PassageScalarFieldEnum>;
}

@ArgsType()
export class FindManyPassageArgs {
    @Field(() => PassageWhereInput, {nullable:true})
    where?: InstanceType<typeof PassageWhereInput>;
    @Field(() => [PassageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PassageOrderByWithRelationInput>;
    @Field(() => PassageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PassageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PassageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PassageScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePassageArgs {
    @Field(() => PassageWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PassageWhereUniqueInput>;
}

@ArgsType()
export class PassageAggregateArgs {
    @Field(() => PassageWhereInput, {nullable:true})
    where?: InstanceType<typeof PassageWhereInput>;
    @Field(() => [PassageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PassageOrderByWithRelationInput>;
    @Field(() => PassageWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PassageWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PassageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PassageCountAggregateInput>;
    @Field(() => PassageAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PassageAvgAggregateInput>;
    @Field(() => PassageSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PassageSumAggregateInput>;
    @Field(() => PassageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PassageMinAggregateInput>;
    @Field(() => PassageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PassageMaxAggregateInput>;
}

@InputType()
export class PassageAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    postId?: true;
}

@ObjectType()
export class PassageAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    postId?: number;
}

@InputType()
export class PassageAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    postId?: keyof typeof SortOrder;
}

@InputType()
export class PassageCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    header?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    postId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PassageCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    header!: number;
    @Field(() => Int, {nullable:false})
    content!: number;
    @Field(() => Int, {nullable:false})
    postId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PassageCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    header?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    postId?: keyof typeof SortOrder;
}

@InputType()
export class PassageCreateManyPostInputEnvelope {
    @Field(() => [PassageCreateManyPostInput], {nullable:false})
    data!: Array<PassageCreateManyPostInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PassageCreateManyPostInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(150)
    header!: string;
    @Field(() => String, {nullable:false})
    content!: string;
}

@InputType()
export class PassageCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(150)
    header!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Int, {nullable:false})
    postId!: number;
}

@InputType()
export class PassageCreateNestedManyWithoutPostInput {
    @Field(() => [PassageCreateWithoutPostInput], {nullable:true})
    create?: Array<PassageCreateWithoutPostInput>;
    @Field(() => [PassageCreateOrConnectWithoutPostInput], {nullable:true})
    connectOrCreate?: Array<PassageCreateOrConnectWithoutPostInput>;
    @Field(() => PassageCreateManyPostInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PassageCreateManyPostInputEnvelope>;
    @Field(() => [PassageWhereUniqueInput], {nullable:true})
    connect?: Array<PassageWhereUniqueInput>;
}

@InputType()
export class PassageCreateOrConnectWithoutPostInput {
    @Field(() => PassageWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PassageWhereUniqueInput>;
    @Field(() => PassageCreateWithoutPostInput, {nullable:false})
    create!: InstanceType<typeof PassageCreateWithoutPostInput>;
}

@InputType()
export class PassageCreateWithoutPostInput {
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(150)
    header!: string;
    @Field(() => String, {nullable:false})
    content!: string;
}

@InputType()
export class PassageCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(150)
    header!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => PostCreateNestedOneWithoutPassagesInput, {nullable:false})
    post!: InstanceType<typeof PostCreateNestedOneWithoutPassagesInput>;
}

@ArgsType()
export class PassageGroupByArgs {
    @Field(() => PassageWhereInput, {nullable:true})
    where?: InstanceType<typeof PassageWhereInput>;
    @Field(() => [PassageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PassageOrderByWithAggregationInput>;
    @Field(() => [PassageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PassageScalarFieldEnum>;
    @Field(() => PassageScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PassageScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PassageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PassageCountAggregateInput>;
    @Field(() => PassageAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PassageAvgAggregateInput>;
    @Field(() => PassageSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PassageSumAggregateInput>;
    @Field(() => PassageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PassageMinAggregateInput>;
    @Field(() => PassageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PassageMaxAggregateInput>;
}

@ObjectType()
export class PassageGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    header!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Int, {nullable:false})
    postId!: number;
    @Field(() => PassageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PassageCountAggregate>;
    @Field(() => PassageAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PassageAvgAggregate>;
    @Field(() => PassageSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PassageSumAggregate>;
    @Field(() => PassageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PassageMinAggregate>;
    @Field(() => PassageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PassageMaxAggregate>;
}

@InputType()
export class PassageListRelationFilter {
    @Field(() => PassageWhereInput, {nullable:true})
    every?: InstanceType<typeof PassageWhereInput>;
    @Field(() => PassageWhereInput, {nullable:true})
    some?: InstanceType<typeof PassageWhereInput>;
    @Field(() => PassageWhereInput, {nullable:true})
    none?: InstanceType<typeof PassageWhereInput>;
}

@InputType()
export class PassageMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    header?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    postId?: true;
}

@ObjectType()
export class PassageMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    header?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Int, {nullable:true})
    postId?: number;
}

@InputType()
export class PassageMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    header?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    postId?: keyof typeof SortOrder;
}

@InputType()
export class PassageMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    header?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    postId?: true;
}

@ObjectType()
export class PassageMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    header?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Int, {nullable:true})
    postId?: number;
}

@InputType()
export class PassageMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    header?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    postId?: keyof typeof SortOrder;
}

@InputType()
export class PassageOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class PassageOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    header?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    postId?: keyof typeof SortOrder;
    @Field(() => PassageCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PassageCountOrderByAggregateInput>;
    @Field(() => PassageAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PassageAvgOrderByAggregateInput>;
    @Field(() => PassageMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PassageMaxOrderByAggregateInput>;
    @Field(() => PassageMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PassageMinOrderByAggregateInput>;
    @Field(() => PassageSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PassageSumOrderByAggregateInput>;
}

@InputType()
export class PassageOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    header?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;
    @Field(() => PostOrderByWithRelationInput, {nullable:true})
    post?: InstanceType<typeof PostOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    postId?: keyof typeof SortOrder;
}

@InputType()
export class PassageScalarWhereWithAggregatesInput {
    @Field(() => [PassageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PassageScalarWhereWithAggregatesInput>;
    @Field(() => [PassageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PassageScalarWhereWithAggregatesInput>;
    @Field(() => [PassageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PassageScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    header?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    postId?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class PassageScalarWhereInput {
    @Field(() => [PassageScalarWhereInput], {nullable:true})
    AND?: Array<PassageScalarWhereInput>;
    @Field(() => [PassageScalarWhereInput], {nullable:true})
    OR?: Array<PassageScalarWhereInput>;
    @Field(() => [PassageScalarWhereInput], {nullable:true})
    NOT?: Array<PassageScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    header?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    postId?: InstanceType<typeof IntFilter>;
}

@InputType()
export class PassageSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    postId?: true;
}

@ObjectType()
export class PassageSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    postId?: number;
}

@InputType()
export class PassageSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    postId?: keyof typeof SortOrder;
}

@InputType()
export class PassageUncheckedCreateNestedManyWithoutPostInput {
    @Field(() => [PassageCreateWithoutPostInput], {nullable:true})
    create?: Array<PassageCreateWithoutPostInput>;
    @Field(() => [PassageCreateOrConnectWithoutPostInput], {nullable:true})
    connectOrCreate?: Array<PassageCreateOrConnectWithoutPostInput>;
    @Field(() => PassageCreateManyPostInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PassageCreateManyPostInputEnvelope>;
    @Field(() => [PassageWhereUniqueInput], {nullable:true})
    connect?: Array<PassageWhereUniqueInput>;
}

@InputType()
export class PassageUncheckedCreateWithoutPostInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(150)
    header!: string;
    @Field(() => String, {nullable:false})
    content!: string;
}

@InputType()
export class PassageUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(150)
    header!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Int, {nullable:false})
    postId!: number;
}

@InputType()
export class PassageUncheckedUpdateManyWithoutPassagesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    header?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class PassageUncheckedUpdateManyWithoutPostInput {
    @Field(() => [PassageCreateWithoutPostInput], {nullable:true})
    create?: Array<PassageCreateWithoutPostInput>;
    @Field(() => [PassageCreateOrConnectWithoutPostInput], {nullable:true})
    connectOrCreate?: Array<PassageCreateOrConnectWithoutPostInput>;
    @Field(() => [PassageUpsertWithWhereUniqueWithoutPostInput], {nullable:true})
    upsert?: Array<PassageUpsertWithWhereUniqueWithoutPostInput>;
    @Field(() => PassageCreateManyPostInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PassageCreateManyPostInputEnvelope>;
    @Field(() => [PassageWhereUniqueInput], {nullable:true})
    set?: Array<PassageWhereUniqueInput>;
    @Field(() => [PassageWhereUniqueInput], {nullable:true})
    disconnect?: Array<PassageWhereUniqueInput>;
    @Field(() => [PassageWhereUniqueInput], {nullable:true})
    delete?: Array<PassageWhereUniqueInput>;
    @Field(() => [PassageWhereUniqueInput], {nullable:true})
    connect?: Array<PassageWhereUniqueInput>;
    @Field(() => [PassageUpdateWithWhereUniqueWithoutPostInput], {nullable:true})
    update?: Array<PassageUpdateWithWhereUniqueWithoutPostInput>;
    @Field(() => [PassageUpdateManyWithWhereWithoutPostInput], {nullable:true})
    updateMany?: Array<PassageUpdateManyWithWhereWithoutPostInput>;
    @Field(() => [PassageScalarWhereInput], {nullable:true})
    deleteMany?: Array<PassageScalarWhereInput>;
}

@InputType()
export class PassageUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    header?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    postId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class PassageUncheckedUpdateWithoutPostInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    header?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class PassageUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    header?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    postId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class PassageUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    header?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class PassageUpdateManyWithWhereWithoutPostInput {
    @Field(() => PassageScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof PassageScalarWhereInput>;
    @Field(() => PassageUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PassageUpdateManyMutationInput>;
}

@InputType()
export class PassageUpdateManyWithoutPostInput {
    @Field(() => [PassageCreateWithoutPostInput], {nullable:true})
    create?: Array<PassageCreateWithoutPostInput>;
    @Field(() => [PassageCreateOrConnectWithoutPostInput], {nullable:true})
    connectOrCreate?: Array<PassageCreateOrConnectWithoutPostInput>;
    @Field(() => [PassageUpsertWithWhereUniqueWithoutPostInput], {nullable:true})
    upsert?: Array<PassageUpsertWithWhereUniqueWithoutPostInput>;
    @Field(() => PassageCreateManyPostInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PassageCreateManyPostInputEnvelope>;
    @Field(() => [PassageWhereUniqueInput], {nullable:true})
    set?: Array<PassageWhereUniqueInput>;
    @Field(() => [PassageWhereUniqueInput], {nullable:true})
    disconnect?: Array<PassageWhereUniqueInput>;
    @Field(() => [PassageWhereUniqueInput], {nullable:true})
    delete?: Array<PassageWhereUniqueInput>;
    @Field(() => [PassageWhereUniqueInput], {nullable:true})
    connect?: Array<PassageWhereUniqueInput>;
    @Field(() => [PassageUpdateWithWhereUniqueWithoutPostInput], {nullable:true})
    update?: Array<PassageUpdateWithWhereUniqueWithoutPostInput>;
    @Field(() => [PassageUpdateManyWithWhereWithoutPostInput], {nullable:true})
    updateMany?: Array<PassageUpdateManyWithWhereWithoutPostInput>;
    @Field(() => [PassageScalarWhereInput], {nullable:true})
    deleteMany?: Array<PassageScalarWhereInput>;
}

@InputType()
export class PassageUpdateWithWhereUniqueWithoutPostInput {
    @Field(() => PassageWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PassageWhereUniqueInput>;
    @Field(() => PassageUpdateWithoutPostInput, {nullable:false})
    data!: InstanceType<typeof PassageUpdateWithoutPostInput>;
}

@InputType()
export class PassageUpdateWithoutPostInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    header?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class PassageUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    header?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => PostUpdateOneRequiredWithoutPassagesInput, {nullable:true})
    post?: InstanceType<typeof PostUpdateOneRequiredWithoutPassagesInput>;
}

@InputType()
export class PassageUpsertWithWhereUniqueWithoutPostInput {
    @Field(() => PassageWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PassageWhereUniqueInput>;
    @Field(() => PassageUpdateWithoutPostInput, {nullable:false})
    update!: InstanceType<typeof PassageUpdateWithoutPostInput>;
    @Field(() => PassageCreateWithoutPostInput, {nullable:false})
    create!: InstanceType<typeof PassageCreateWithoutPostInput>;
}

@InputType()
export class PassageWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class PassageWhereInput {
    @Field(() => [PassageWhereInput], {nullable:true})
    AND?: Array<PassageWhereInput>;
    @Field(() => [PassageWhereInput], {nullable:true})
    OR?: Array<PassageWhereInput>;
    @Field(() => [PassageWhereInput], {nullable:true})
    NOT?: Array<PassageWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    header?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => PostWhereInput, {nullable:true})
    post?: InstanceType<typeof PostWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    postId?: InstanceType<typeof IntFilter>;
}

@ObjectType()
export class Passage {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    header!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Post, {nullable:false})
    post?: InstanceType<typeof Post>;
    @Field(() => Int, {nullable:false})
    postId!: number;
}

@ArgsType()
export class UpdateManyPassageArgs {
    @Field(() => PassageUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PassageUpdateManyMutationInput>;
    @Field(() => PassageWhereInput, {nullable:true})
    where?: InstanceType<typeof PassageWhereInput>;
}

@ArgsType()
export class UpdateOnePassageArgs {
    @Field(() => PassageUpdateInput, {nullable:false})
    data!: InstanceType<typeof PassageUpdateInput>;
    @Field(() => PassageWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PassageWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnePassageArgs {
    @Field(() => PassageWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PassageWhereUniqueInput>;
    @Field(() => PassageCreateInput, {nullable:false})
    create!: InstanceType<typeof PassageCreateInput>;
    @Field(() => PassageUpdateInput, {nullable:false})
    update!: InstanceType<typeof PassageUpdateInput>;
}

@ObjectType()
export class AggregatePerson {
    @Field(() => PersonCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PersonCountAggregate>;
    @Field(() => PersonMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PersonMinAggregate>;
    @Field(() => PersonMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PersonMaxAggregate>;
}

@ArgsType()
export class CreateManyPersonArgs {
    @Field(() => [PersonCreateManyInput], {nullable:false})
    data!: Array<PersonCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePersonArgs {
    @Field(() => PersonCreateInput, {nullable:false})
    data!: InstanceType<typeof PersonCreateInput>;
}

@ArgsType()
export class DeleteManyPersonArgs {
    @Field(() => PersonWhereInput, {nullable:true})
    where?: InstanceType<typeof PersonWhereInput>;
}

@ArgsType()
export class DeleteOnePersonArgs {
    @Field(() => PersonWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PersonWhereUniqueInput>;
}

@ArgsType()
export class FindFirstPersonArgs {
    @Field(() => PersonWhereInput, {nullable:true})
    where?: InstanceType<typeof PersonWhereInput>;
    @Field(() => [PersonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PersonOrderByWithRelationInput>;
    @Field(() => PersonWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PersonWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PersonScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PersonScalarFieldEnum>;
}

@ArgsType()
export class FindManyPersonArgs {
    @Field(() => PersonWhereInput, {nullable:true})
    where?: InstanceType<typeof PersonWhereInput>;
    @Field(() => [PersonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PersonOrderByWithRelationInput>;
    @Field(() => PersonWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PersonWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PersonScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PersonScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePersonArgs {
    @Field(() => PersonWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PersonWhereUniqueInput>;
}

@ArgsType()
export class PersonAggregateArgs {
    @Field(() => PersonWhereInput, {nullable:true})
    where?: InstanceType<typeof PersonWhereInput>;
    @Field(() => [PersonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PersonOrderByWithRelationInput>;
    @Field(() => PersonWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PersonWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PersonCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PersonCountAggregateInput>;
    @Field(() => PersonMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PersonMinAggregateInput>;
    @Field(() => PersonMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PersonMaxAggregateInput>;
}

@InputType()
export class PersonCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    fullname?: true;
    @Field(() => Boolean, {nullable:true})
    gender?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    address?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PersonCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    fullname!: number;
    @Field(() => Int, {nullable:false})
    gender!: number;
    @Field(() => Int, {nullable:false})
    phone!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    address!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PersonCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fullname?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class PersonCount {
    @Field(() => Int, {nullable:false})
    comments!: number;
}

@InputType()
export class PersonCreateManyInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.Length(1, 60)
    fullname!: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:false})
    phone!: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    @Validator.MaxLength(30)
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    address?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PersonCreateNestedOneWithoutCommentsInput {
    @Field(() => PersonCreateWithoutCommentsInput, {nullable:true})
    create?: InstanceType<typeof PersonCreateWithoutCommentsInput>;
    @Field(() => PersonCreateOrConnectWithoutCommentsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof PersonCreateOrConnectWithoutCommentsInput>;
    @Field(() => PersonWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof PersonWhereUniqueInput>;
}

@InputType()
export class PersonCreateNestedOneWithoutCustomerInput {
    @Field(() => PersonCreateWithoutCustomerInput, {nullable:true})
    create?: InstanceType<typeof PersonCreateWithoutCustomerInput>;
    @Field(() => PersonCreateOrConnectWithoutCustomerInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof PersonCreateOrConnectWithoutCustomerInput>;
    @Field(() => PersonWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof PersonWhereUniqueInput>;
}

@InputType()
export class PersonCreateNestedOneWithoutUserInput {
    @Field(() => PersonCreateWithoutUserInput, {nullable:true})
    create?: InstanceType<typeof PersonCreateWithoutUserInput>;
    @Field(() => PersonCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof PersonCreateOrConnectWithoutUserInput>;
    @Field(() => PersonWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof PersonWhereUniqueInput>;
}

@InputType()
export class PersonCreateOrConnectWithoutCommentsInput {
    @Field(() => PersonWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PersonWhereUniqueInput>;
    @Field(() => PersonCreateWithoutCommentsInput, {nullable:false})
    create!: InstanceType<typeof PersonCreateWithoutCommentsInput>;
}

@InputType()
export class PersonCreateOrConnectWithoutCustomerInput {
    @Field(() => PersonWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PersonWhereUniqueInput>;
    @Field(() => PersonCreateWithoutCustomerInput, {nullable:false})
    create!: InstanceType<typeof PersonCreateWithoutCustomerInput>;
}

@InputType()
export class PersonCreateOrConnectWithoutUserInput {
    @Field(() => PersonWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PersonWhereUniqueInput>;
    @Field(() => PersonCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof PersonCreateWithoutUserInput>;
}

@InputType()
export class PersonCreateWithoutCommentsInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.Length(1, 60)
    fullname!: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:false})
    phone!: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    @Validator.MaxLength(30)
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    address?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutProfileInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutProfileInput>;
    @Field(() => CustomerCreateNestedOneWithoutProfileInput, {nullable:true})
    customer?: InstanceType<typeof CustomerCreateNestedOneWithoutProfileInput>;
}

@InputType()
export class PersonCreateWithoutCustomerInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.Length(1, 60)
    fullname!: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:false})
    phone!: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    @Validator.MaxLength(30)
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    address?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutProfileInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutProfileInput>;
    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class PersonCreateWithoutUserInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.Length(1, 60)
    fullname!: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:false})
    phone!: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    @Validator.MaxLength(30)
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    address?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CustomerCreateNestedOneWithoutProfileInput, {nullable:true})
    customer?: InstanceType<typeof CustomerCreateNestedOneWithoutProfileInput>;
    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class PersonCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.Length(1, 60)
    fullname!: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:false})
    phone!: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    @Validator.MaxLength(30)
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    address?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutProfileInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutProfileInput>;
    @Field(() => CustomerCreateNestedOneWithoutProfileInput, {nullable:true})
    customer?: InstanceType<typeof CustomerCreateNestedOneWithoutProfileInput>;
    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutAuthorInput>;
}

@ArgsType()
export class PersonGroupByArgs {
    @Field(() => PersonWhereInput, {nullable:true})
    where?: InstanceType<typeof PersonWhereInput>;
    @Field(() => [PersonOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PersonOrderByWithAggregationInput>;
    @Field(() => [PersonScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PersonScalarFieldEnum>;
    @Field(() => PersonScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PersonScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PersonCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PersonCountAggregateInput>;
    @Field(() => PersonMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PersonMinAggregateInput>;
    @Field(() => PersonMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PersonMaxAggregateInput>;
}

@ObjectType()
export class PersonGroupBy {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    fullname!: string;
    @Field(() => Gender, {nullable:false})
    gender!: keyof typeof Gender;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:false})
    phone!: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:false})
    address!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => PersonCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PersonCountAggregate>;
    @Field(() => PersonMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PersonMinAggregate>;
    @Field(() => PersonMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PersonMaxAggregate>;
}

@InputType()
export class PersonMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    fullname?: true;
    @Field(() => Boolean, {nullable:true})
    gender?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    address?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PersonMaxAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    fullname?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:true})
    phone?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    address?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PersonMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fullname?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PersonMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    fullname?: true;
    @Field(() => Boolean, {nullable:true})
    gender?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    address?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PersonMinAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    fullname?: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:true})
    phone?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    address?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PersonMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fullname?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PersonOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fullname?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PersonCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PersonCountOrderByAggregateInput>;
    @Field(() => PersonMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PersonMaxOrderByAggregateInput>;
    @Field(() => PersonMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PersonMinOrderByAggregateInput>;
}

@InputType()
export class PersonOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    fullname?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => CustomerOrderByWithRelationInput, {nullable:true})
    customer?: InstanceType<typeof CustomerOrderByWithRelationInput>;
    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: InstanceType<typeof CommentOrderByRelationAggregateInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PersonRelationFilter {
    @Field(() => PersonWhereInput, {nullable:true})
    is?: InstanceType<typeof PersonWhereInput>;
    @Field(() => PersonWhereInput, {nullable:true})
    isNot?: InstanceType<typeof PersonWhereInput>;
}

@InputType()
export class PersonScalarWhereWithAggregatesInput {
    @Field(() => [PersonScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PersonScalarWhereWithAggregatesInput>;
    @Field(() => [PersonScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PersonScalarWhereWithAggregatesInput>;
    @Field(() => [PersonScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PersonScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fullname?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumGenderWithAggregatesFilter, {nullable:true})
    gender?: InstanceType<typeof EnumGenderWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phone?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    address?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PersonUncheckedCreateWithoutCommentsInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.Length(1, 60)
    fullname!: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:false})
    phone!: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    @Validator.MaxLength(30)
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    address?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUncheckedCreateNestedOneWithoutProfileInput, {nullable:true})
    user?: InstanceType<typeof UserUncheckedCreateNestedOneWithoutProfileInput>;
    @Field(() => CustomerUncheckedCreateNestedOneWithoutProfileInput, {nullable:true})
    customer?: InstanceType<typeof CustomerUncheckedCreateNestedOneWithoutProfileInput>;
}

@InputType()
export class PersonUncheckedCreateWithoutCustomerInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.Length(1, 60)
    fullname!: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:false})
    phone!: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    @Validator.MaxLength(30)
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    address?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUncheckedCreateNestedOneWithoutProfileInput, {nullable:true})
    user?: InstanceType<typeof UserUncheckedCreateNestedOneWithoutProfileInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class PersonUncheckedCreateWithoutUserInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.Length(1, 60)
    fullname!: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:false})
    phone!: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    @Validator.MaxLength(30)
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    address?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CustomerUncheckedCreateNestedOneWithoutProfileInput, {nullable:true})
    customer?: InstanceType<typeof CustomerUncheckedCreateNestedOneWithoutProfileInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class PersonUncheckedCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.Length(1, 60)
    fullname!: string;
    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:false})
    phone!: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    @Validator.MaxLength(30)
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.MaxLength(255)
    address?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserUncheckedCreateNestedOneWithoutProfileInput, {nullable:true})
    user?: InstanceType<typeof UserUncheckedCreateNestedOneWithoutProfileInput>;
    @Field(() => CustomerUncheckedCreateNestedOneWithoutProfileInput, {nullable:true})
    customer?: InstanceType<typeof CustomerUncheckedCreateNestedOneWithoutProfileInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class PersonUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumGenderFieldUpdateOperationsInput, {nullable:true})
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PersonUncheckedUpdateWithoutCommentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumGenderFieldUpdateOperationsInput, {nullable:true})
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUncheckedUpdateOneWithoutProfileInput, {nullable:true})
    user?: InstanceType<typeof UserUncheckedUpdateOneWithoutProfileInput>;
    @Field(() => CustomerUncheckedUpdateOneWithoutProfileInput, {nullable:true})
    customer?: InstanceType<typeof CustomerUncheckedUpdateOneWithoutProfileInput>;
}

@InputType()
export class PersonUncheckedUpdateWithoutCustomerInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumGenderFieldUpdateOperationsInput, {nullable:true})
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUncheckedUpdateOneWithoutProfileInput, {nullable:true})
    user?: InstanceType<typeof UserUncheckedUpdateOneWithoutProfileInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutAuthorInput>;
}

@InputType()
export class PersonUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumGenderFieldUpdateOperationsInput, {nullable:true})
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CustomerUncheckedUpdateOneWithoutProfileInput, {nullable:true})
    customer?: InstanceType<typeof CustomerUncheckedUpdateOneWithoutProfileInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutAuthorInput>;
}

@InputType()
export class PersonUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumGenderFieldUpdateOperationsInput, {nullable:true})
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUncheckedUpdateOneWithoutProfileInput, {nullable:true})
    user?: InstanceType<typeof UserUncheckedUpdateOneWithoutProfileInput>;
    @Field(() => CustomerUncheckedUpdateOneWithoutProfileInput, {nullable:true})
    customer?: InstanceType<typeof CustomerUncheckedUpdateOneWithoutProfileInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutAuthorInput>;
}

@InputType()
export class PersonUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumGenderFieldUpdateOperationsInput, {nullable:true})
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PersonUpdateOneRequiredWithoutCommentsInput {
    @Field(() => PersonCreateWithoutCommentsInput, {nullable:true})
    create?: InstanceType<typeof PersonCreateWithoutCommentsInput>;
    @Field(() => PersonCreateOrConnectWithoutCommentsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof PersonCreateOrConnectWithoutCommentsInput>;
    @Field(() => PersonUpsertWithoutCommentsInput, {nullable:true})
    upsert?: InstanceType<typeof PersonUpsertWithoutCommentsInput>;
    @Field(() => PersonWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof PersonWhereUniqueInput>;
    @Field(() => PersonUpdateWithoutCommentsInput, {nullable:true})
    update?: InstanceType<typeof PersonUpdateWithoutCommentsInput>;
}

@InputType()
export class PersonUpdateOneRequiredWithoutCustomerInput {
    @Field(() => PersonCreateWithoutCustomerInput, {nullable:true})
    create?: InstanceType<typeof PersonCreateWithoutCustomerInput>;
    @Field(() => PersonCreateOrConnectWithoutCustomerInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof PersonCreateOrConnectWithoutCustomerInput>;
    @Field(() => PersonUpsertWithoutCustomerInput, {nullable:true})
    upsert?: InstanceType<typeof PersonUpsertWithoutCustomerInput>;
    @Field(() => PersonWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof PersonWhereUniqueInput>;
    @Field(() => PersonUpdateWithoutCustomerInput, {nullable:true})
    update?: InstanceType<typeof PersonUpdateWithoutCustomerInput>;
}

@InputType()
export class PersonUpdateOneRequiredWithoutUserInput {
    @Field(() => PersonCreateWithoutUserInput, {nullable:true})
    create?: InstanceType<typeof PersonCreateWithoutUserInput>;
    @Field(() => PersonCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof PersonCreateOrConnectWithoutUserInput>;
    @Field(() => PersonUpsertWithoutUserInput, {nullable:true})
    upsert?: InstanceType<typeof PersonUpsertWithoutUserInput>;
    @Field(() => PersonWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof PersonWhereUniqueInput>;
    @Field(() => PersonUpdateWithoutUserInput, {nullable:true})
    update?: InstanceType<typeof PersonUpdateWithoutUserInput>;
}

@InputType()
export class PersonUpdateWithoutCommentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumGenderFieldUpdateOperationsInput, {nullable:true})
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutProfileInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutProfileInput>;
    @Field(() => CustomerUpdateOneWithoutProfileInput, {nullable:true})
    customer?: InstanceType<typeof CustomerUpdateOneWithoutProfileInput>;
}

@InputType()
export class PersonUpdateWithoutCustomerInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumGenderFieldUpdateOperationsInput, {nullable:true})
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutProfileInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutProfileInput>;
    @Field(() => CommentUpdateManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutAuthorInput>;
}

@InputType()
export class PersonUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumGenderFieldUpdateOperationsInput, {nullable:true})
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CustomerUpdateOneWithoutProfileInput, {nullable:true})
    customer?: InstanceType<typeof CustomerUpdateOneWithoutProfileInput>;
    @Field(() => CommentUpdateManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutAuthorInput>;
}

@InputType()
export class PersonUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumGenderFieldUpdateOperationsInput, {nullable:true})
    gender?: InstanceType<typeof EnumGenderFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutProfileInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutProfileInput>;
    @Field(() => CustomerUpdateOneWithoutProfileInput, {nullable:true})
    customer?: InstanceType<typeof CustomerUpdateOneWithoutProfileInput>;
    @Field(() => CommentUpdateManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutAuthorInput>;
}

@InputType()
export class PersonUpsertWithoutCommentsInput {
    @Field(() => PersonUpdateWithoutCommentsInput, {nullable:false})
    update!: InstanceType<typeof PersonUpdateWithoutCommentsInput>;
    @Field(() => PersonCreateWithoutCommentsInput, {nullable:false})
    create!: InstanceType<typeof PersonCreateWithoutCommentsInput>;
}

@InputType()
export class PersonUpsertWithoutCustomerInput {
    @Field(() => PersonUpdateWithoutCustomerInput, {nullable:false})
    update!: InstanceType<typeof PersonUpdateWithoutCustomerInput>;
    @Field(() => PersonCreateWithoutCustomerInput, {nullable:false})
    create!: InstanceType<typeof PersonCreateWithoutCustomerInput>;
}

@InputType()
export class PersonUpsertWithoutUserInput {
    @Field(() => PersonUpdateWithoutUserInput, {nullable:false})
    update!: InstanceType<typeof PersonUpdateWithoutUserInput>;
    @Field(() => PersonCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof PersonCreateWithoutUserInput>;
}

@InputType()
export class PersonWhereUniqueInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:true})
    phone?: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    @Validator.MaxLength(30)
    email?: string;
}

@InputType()
export class PersonWhereInput {
    @Field(() => [PersonWhereInput], {nullable:true})
    AND?: Array<PersonWhereInput>;
    @Field(() => [PersonWhereInput], {nullable:true})
    OR?: Array<PersonWhereInput>;
    @Field(() => [PersonWhereInput], {nullable:true})
    NOT?: Array<PersonWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    fullname?: InstanceType<typeof StringFilter>;
    @Field(() => EnumGenderFilter, {nullable:true})
    gender?: InstanceType<typeof EnumGenderFilter>;
    @Field(() => StringFilter, {nullable:true})
    phone?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    email?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    address?: InstanceType<typeof StringFilter>;
    @Field(() => UserWhereInput, {nullable:true})
    user?: InstanceType<typeof UserWhereInput>;
    @Field(() => CustomerWhereInput, {nullable:true})
    customer?: InstanceType<typeof CustomerWhereInput>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: InstanceType<typeof CommentListRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Person {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    fullname!: string;
    @Field(() => Gender, {nullable:false,defaultValue:'MALE'})
    gender!: keyof typeof Gender;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:false})
    phone!: string;
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    email!: string | null;
    @Field(() => String, {nullable:false,defaultValue:'None'})
    address!: string;
    @Field(() => User, {nullable:true})
    user?: InstanceType<typeof User> | null;
    @Field(() => Customer, {nullable:true})
    customer?: InstanceType<typeof Customer> | null;
    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => PersonCount, {nullable:false})
    _count?: InstanceType<typeof PersonCount>;
}

@ArgsType()
export class UpdateManyPersonArgs {
    @Field(() => PersonUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PersonUpdateManyMutationInput>;
    @Field(() => PersonWhereInput, {nullable:true})
    where?: InstanceType<typeof PersonWhereInput>;
}

@ArgsType()
export class UpdateOnePersonArgs {
    @Field(() => PersonUpdateInput, {nullable:false})
    data!: InstanceType<typeof PersonUpdateInput>;
    @Field(() => PersonWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PersonWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnePersonArgs {
    @Field(() => PersonWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PersonWhereUniqueInput>;
    @Field(() => PersonCreateInput, {nullable:false})
    create!: InstanceType<typeof PersonCreateInput>;
    @Field(() => PersonUpdateInput, {nullable:false})
    update!: InstanceType<typeof PersonUpdateInput>;
}

@ObjectType()
export class AggregatePost {
    @Field(() => PostCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PostCountAggregate>;
    @Field(() => PostAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PostAvgAggregate>;
    @Field(() => PostSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PostSumAggregate>;
    @Field(() => PostMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PostMinAggregate>;
    @Field(() => PostMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PostMaxAggregate>;
}

@ArgsType()
export class CreateManyPostArgs {
    @Field(() => [PostCreateManyInput], {nullable:false})
    data!: Array<PostCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePostArgs {
    @Field(() => PostCreateInput, {nullable:false})
    data!: InstanceType<typeof PostCreateInput>;
}

@ArgsType()
export class DeleteManyPostArgs {
    @Field(() => PostWhereInput, {nullable:true})
    where?: InstanceType<typeof PostWhereInput>;
}

@ArgsType()
export class DeleteOnePostArgs {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PostWhereUniqueInput>;
}

@ArgsType()
export class FindFirstPostArgs {
    @Field(() => PostWhereInput, {nullable:true})
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithRelationInput>;
    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PostScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}

@ArgsType()
export class FindManyPostArgs {
    @Field(() => PostWhereInput, {nullable:true})
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithRelationInput>;
    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PostScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePostArgs {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PostWhereUniqueInput>;
}

@ArgsType()
export class PostAggregateArgs {
    @Field(() => PostWhereInput, {nullable:true})
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithRelationInput>;
    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PostCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PostCountAggregateInput>;
    @Field(() => PostAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PostAvgAggregateInput>;
    @Field(() => PostSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PostSumAggregateInput>;
    @Field(() => PostMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PostMinAggregateInput>;
    @Field(() => PostMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PostMaxAggregateInput>;
}

@InputType()
export class PostAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class PostAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class PostAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class PostCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PostCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    authorId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PostCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class PostCount {
    @Field(() => Int, {nullable:false})
    passages!: number;
    @Field(() => Int, {nullable:false})
    laptops!: number;
}

@InputType()
export class PostCreateManyAuthorInputEnvelope {
    @Field(() => [PostCreateManyAuthorInput], {nullable:false})
    data!: Array<PostCreateManyAuthorInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PostCreateManyAuthorInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(255)
    title!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PostCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(255)
    title!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    authorId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PostCreateNestedManyWithoutAuthorInput {
    @Field(() => [PostCreateWithoutAuthorInput], {nullable:true})
    create?: Array<PostCreateWithoutAuthorInput>;
    @Field(() => [PostCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    @Field(() => PostCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    connect?: Array<PostWhereUniqueInput>;
}

@InputType()
export class PostCreateNestedManyWithoutLaptopsInput {
    @Field(() => [PostCreateWithoutLaptopsInput], {nullable:true})
    create?: Array<PostCreateWithoutLaptopsInput>;
    @Field(() => [PostCreateOrConnectWithoutLaptopsInput], {nullable:true})
    connectOrCreate?: Array<PostCreateOrConnectWithoutLaptopsInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    connect?: Array<PostWhereUniqueInput>;
}

@InputType()
export class PostCreateNestedOneWithoutPassagesInput {
    @Field(() => PostCreateWithoutPassagesInput, {nullable:true})
    create?: InstanceType<typeof PostCreateWithoutPassagesInput>;
    @Field(() => PostCreateOrConnectWithoutPassagesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof PostCreateOrConnectWithoutPassagesInput>;
    @Field(() => PostWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof PostWhereUniqueInput>;
}

@InputType()
export class PostCreateOrConnectWithoutAuthorInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostCreateWithoutAuthorInput, {nullable:false})
    create!: InstanceType<typeof PostCreateWithoutAuthorInput>;
}

@InputType()
export class PostCreateOrConnectWithoutLaptopsInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostCreateWithoutLaptopsInput, {nullable:false})
    create!: InstanceType<typeof PostCreateWithoutLaptopsInput>;
}

@InputType()
export class PostCreateOrConnectWithoutPassagesInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostCreateWithoutPassagesInput, {nullable:false})
    create!: InstanceType<typeof PostCreateWithoutPassagesInput>;
}

@InputType()
export class PostCreateWithoutAuthorInput {
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(255)
    title!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PassageCreateNestedManyWithoutPostInput, {nullable:true})
    passages?: InstanceType<typeof PassageCreateNestedManyWithoutPostInput>;
    @Field(() => LaptopCreateNestedManyWithoutPostsInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopCreateNestedManyWithoutPostsInput>;
}

@InputType()
export class PostCreateWithoutLaptopsInput {
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(255)
    title!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PassageCreateNestedManyWithoutPostInput, {nullable:true})
    passages?: InstanceType<typeof PassageCreateNestedManyWithoutPostInput>;
    @Field(() => UserCreateNestedOneWithoutPostsInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutPostsInput>;
}

@InputType()
export class PostCreateWithoutPassagesInput {
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(255)
    title!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => LaptopCreateNestedManyWithoutPostsInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopCreateNestedManyWithoutPostsInput>;
    @Field(() => UserCreateNestedOneWithoutPostsInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutPostsInput>;
}

@InputType()
export class PostCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(255)
    title!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PassageCreateNestedManyWithoutPostInput, {nullable:true})
    passages?: InstanceType<typeof PassageCreateNestedManyWithoutPostInput>;
    @Field(() => LaptopCreateNestedManyWithoutPostsInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopCreateNestedManyWithoutPostsInput>;
    @Field(() => UserCreateNestedOneWithoutPostsInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutPostsInput>;
}

@ArgsType()
export class PostGroupByArgs {
    @Field(() => PostWhereInput, {nullable:true})
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithAggregationInput>;
    @Field(() => [PostScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PostScalarFieldEnum>;
    @Field(() => PostScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PostScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PostCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PostCountAggregateInput>;
    @Field(() => PostAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PostAvgAggregateInput>;
    @Field(() => PostSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PostSumAggregateInput>;
    @Field(() => PostMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PostMinAggregateInput>;
    @Field(() => PostMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PostMaxAggregateInput>;
}

@ObjectType()
export class PostGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    authorId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => PostCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PostCountAggregate>;
    @Field(() => PostAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PostAvgAggregate>;
    @Field(() => PostSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PostSumAggregate>;
    @Field(() => PostMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PostMinAggregate>;
    @Field(() => PostMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PostMaxAggregate>;
}

@InputType()
export class PostListRelationFilter {
    @Field(() => PostWhereInput, {nullable:true})
    every?: InstanceType<typeof PostWhereInput>;
    @Field(() => PostWhereInput, {nullable:true})
    some?: InstanceType<typeof PostWhereInput>;
    @Field(() => PostWhereInput, {nullable:true})
    none?: InstanceType<typeof PostWhereInput>;
}

@InputType()
export class PostMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PostMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    authorId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PostMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PostMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PostMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    authorId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PostMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PostOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class PostOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PostCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PostCountOrderByAggregateInput>;
    @Field(() => PostAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PostAvgOrderByAggregateInput>;
    @Field(() => PostMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PostMaxOrderByAggregateInput>;
    @Field(() => PostMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PostMinOrderByAggregateInput>;
    @Field(() => PostSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PostSumOrderByAggregateInput>;
}

@InputType()
export class PostOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => PassageOrderByRelationAggregateInput, {nullable:true})
    passages?: InstanceType<typeof PassageOrderByRelationAggregateInput>;
    @Field(() => LaptopOrderByRelationAggregateInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopOrderByRelationAggregateInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PostRelationFilter {
    @Field(() => PostWhereInput, {nullable:true})
    is?: InstanceType<typeof PostWhereInput>;
    @Field(() => PostWhereInput, {nullable:true})
    isNot?: InstanceType<typeof PostWhereInput>;
}

@InputType()
export class PostScalarWhereWithAggregatesInput {
    @Field(() => [PostScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PostScalarWhereWithAggregatesInput>;
    @Field(() => [PostScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PostScalarWhereWithAggregatesInput>;
    @Field(() => [PostScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PostScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    authorId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PostScalarWhereInput {
    @Field(() => [PostScalarWhereInput], {nullable:true})
    AND?: Array<PostScalarWhereInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    OR?: Array<PostScalarWhereInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    NOT?: Array<PostScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    authorId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class PostSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class PostSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class PostSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class PostUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [PostCreateWithoutAuthorInput], {nullable:true})
    create?: Array<PostCreateWithoutAuthorInput>;
    @Field(() => [PostCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    @Field(() => PostCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    connect?: Array<PostWhereUniqueInput>;
}

@InputType()
export class PostUncheckedCreateWithoutAuthorInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(255)
    title!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PassageUncheckedCreateNestedManyWithoutPostInput, {nullable:true})
    passages?: InstanceType<typeof PassageUncheckedCreateNestedManyWithoutPostInput>;
}

@InputType()
export class PostUncheckedCreateWithoutLaptopsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(255)
    title!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    authorId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PassageUncheckedCreateNestedManyWithoutPostInput, {nullable:true})
    passages?: InstanceType<typeof PassageUncheckedCreateNestedManyWithoutPostInput>;
}

@InputType()
export class PostUncheckedCreateWithoutPassagesInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(255)
    title!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    authorId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PostUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(255)
    title!: string;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    authorId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PassageUncheckedCreateNestedManyWithoutPostInput, {nullable:true})
    passages?: InstanceType<typeof PassageUncheckedCreateNestedManyWithoutPostInput>;
}

@InputType()
export class PostUncheckedUpdateManyWithoutAuthorInput {
    @Field(() => [PostCreateWithoutAuthorInput], {nullable:true})
    create?: Array<PostCreateWithoutAuthorInput>;
    @Field(() => [PostCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    @Field(() => [PostUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<PostUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => PostCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    set?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    disconnect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    delete?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    connect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<PostUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [PostUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<PostUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    deleteMany?: Array<PostScalarWhereInput>;
}

@InputType()
export class PostUncheckedUpdateManyWithoutPostsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PostUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PostUncheckedUpdateWithoutAuthorInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PassageUncheckedUpdateManyWithoutPostInput, {nullable:true})
    passages?: InstanceType<typeof PassageUncheckedUpdateManyWithoutPostInput>;
}

@InputType()
export class PostUncheckedUpdateWithoutLaptopsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PassageUncheckedUpdateManyWithoutPostInput, {nullable:true})
    passages?: InstanceType<typeof PassageUncheckedUpdateManyWithoutPostInput>;
}

@InputType()
export class PostUncheckedUpdateWithoutPassagesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PostUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PassageUncheckedUpdateManyWithoutPostInput, {nullable:true})
    passages?: InstanceType<typeof PassageUncheckedUpdateManyWithoutPostInput>;
}

@InputType()
export class PostUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PostUpdateManyWithWhereWithoutAuthorInput {
    @Field(() => PostScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof PostScalarWhereInput>;
    @Field(() => PostUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PostUpdateManyMutationInput>;
}

@InputType()
export class PostUpdateManyWithWhereWithoutLaptopsInput {
    @Field(() => PostScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof PostScalarWhereInput>;
    @Field(() => PostUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PostUpdateManyMutationInput>;
}

@InputType()
export class PostUpdateManyWithoutAuthorInput {
    @Field(() => [PostCreateWithoutAuthorInput], {nullable:true})
    create?: Array<PostCreateWithoutAuthorInput>;
    @Field(() => [PostCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    @Field(() => [PostUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<PostUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => PostCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    set?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    disconnect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    delete?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    connect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<PostUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [PostUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<PostUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    deleteMany?: Array<PostScalarWhereInput>;
}

@InputType()
export class PostUpdateManyWithoutLaptopsInput {
    @Field(() => [PostCreateWithoutLaptopsInput], {nullable:true})
    create?: Array<PostCreateWithoutLaptopsInput>;
    @Field(() => [PostCreateOrConnectWithoutLaptopsInput], {nullable:true})
    connectOrCreate?: Array<PostCreateOrConnectWithoutLaptopsInput>;
    @Field(() => [PostUpsertWithWhereUniqueWithoutLaptopsInput], {nullable:true})
    upsert?: Array<PostUpsertWithWhereUniqueWithoutLaptopsInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    set?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    disconnect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    delete?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    connect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostUpdateWithWhereUniqueWithoutLaptopsInput], {nullable:true})
    update?: Array<PostUpdateWithWhereUniqueWithoutLaptopsInput>;
    @Field(() => [PostUpdateManyWithWhereWithoutLaptopsInput], {nullable:true})
    updateMany?: Array<PostUpdateManyWithWhereWithoutLaptopsInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    deleteMany?: Array<PostScalarWhereInput>;
}

@InputType()
export class PostUpdateOneRequiredWithoutPassagesInput {
    @Field(() => PostCreateWithoutPassagesInput, {nullable:true})
    create?: InstanceType<typeof PostCreateWithoutPassagesInput>;
    @Field(() => PostCreateOrConnectWithoutPassagesInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof PostCreateOrConnectWithoutPassagesInput>;
    @Field(() => PostUpsertWithoutPassagesInput, {nullable:true})
    upsert?: InstanceType<typeof PostUpsertWithoutPassagesInput>;
    @Field(() => PostWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostUpdateWithoutPassagesInput, {nullable:true})
    update?: InstanceType<typeof PostUpdateWithoutPassagesInput>;
}

@InputType()
export class PostUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostUpdateWithoutAuthorInput, {nullable:false})
    data!: InstanceType<typeof PostUpdateWithoutAuthorInput>;
}

@InputType()
export class PostUpdateWithWhereUniqueWithoutLaptopsInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostUpdateWithoutLaptopsInput, {nullable:false})
    data!: InstanceType<typeof PostUpdateWithoutLaptopsInput>;
}

@InputType()
export class PostUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PassageUpdateManyWithoutPostInput, {nullable:true})
    passages?: InstanceType<typeof PassageUpdateManyWithoutPostInput>;
    @Field(() => LaptopUpdateManyWithoutPostsInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopUpdateManyWithoutPostsInput>;
}

@InputType()
export class PostUpdateWithoutLaptopsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PassageUpdateManyWithoutPostInput, {nullable:true})
    passages?: InstanceType<typeof PassageUpdateManyWithoutPostInput>;
    @Field(() => UserUpdateOneRequiredWithoutPostsInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutPostsInput>;
}

@InputType()
export class PostUpdateWithoutPassagesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => LaptopUpdateManyWithoutPostsInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopUpdateManyWithoutPostsInput>;
    @Field(() => UserUpdateOneRequiredWithoutPostsInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutPostsInput>;
}

@InputType()
export class PostUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PassageUpdateManyWithoutPostInput, {nullable:true})
    passages?: InstanceType<typeof PassageUpdateManyWithoutPostInput>;
    @Field(() => LaptopUpdateManyWithoutPostsInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopUpdateManyWithoutPostsInput>;
    @Field(() => UserUpdateOneRequiredWithoutPostsInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutPostsInput>;
}

@InputType()
export class PostUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostUpdateWithoutAuthorInput, {nullable:false})
    update!: InstanceType<typeof PostUpdateWithoutAuthorInput>;
    @Field(() => PostCreateWithoutAuthorInput, {nullable:false})
    create!: InstanceType<typeof PostCreateWithoutAuthorInput>;
}

@InputType()
export class PostUpsertWithWhereUniqueWithoutLaptopsInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostUpdateWithoutLaptopsInput, {nullable:false})
    update!: InstanceType<typeof PostUpdateWithoutLaptopsInput>;
    @Field(() => PostCreateWithoutLaptopsInput, {nullable:false})
    create!: InstanceType<typeof PostCreateWithoutLaptopsInput>;
}

@InputType()
export class PostUpsertWithoutPassagesInput {
    @Field(() => PostUpdateWithoutPassagesInput, {nullable:false})
    update!: InstanceType<typeof PostUpdateWithoutPassagesInput>;
    @Field(() => PostCreateWithoutPassagesInput, {nullable:false})
    create!: InstanceType<typeof PostCreateWithoutPassagesInput>;
}

@InputType()
export class PostWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class PostWhereInput {
    @Field(() => [PostWhereInput], {nullable:true})
    AND?: Array<PostWhereInput>;
    @Field(() => [PostWhereInput], {nullable:true})
    OR?: Array<PostWhereInput>;
    @Field(() => [PostWhereInput], {nullable:true})
    NOT?: Array<PostWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => PassageListRelationFilter, {nullable:true})
    passages?: InstanceType<typeof PassageListRelationFilter>;
    @Field(() => LaptopListRelationFilter, {nullable:true})
    laptops?: InstanceType<typeof LaptopListRelationFilter>;
    @Field(() => UserWhereInput, {nullable:true})
    author?: InstanceType<typeof UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    authorId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Post {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => [Passage], {nullable:true})
    passages?: Array<Passage>;
    @Field(() => [Laptop], {nullable:true})
    laptops?: Array<Laptop>;
    @Field(() => User, {nullable:false})
    author?: InstanceType<typeof User>;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    authorId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => PostCount, {nullable:false})
    _count?: InstanceType<typeof PostCount>;
}

@ArgsType()
export class UpdateManyPostArgs {
    @Field(() => PostUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PostUpdateManyMutationInput>;
    @Field(() => PostWhereInput, {nullable:true})
    where?: InstanceType<typeof PostWhereInput>;
}

@ArgsType()
export class UpdateOnePostArgs {
    @Field(() => PostUpdateInput, {nullable:false})
    data!: InstanceType<typeof PostUpdateInput>;
    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PostWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnePostArgs {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostCreateInput, {nullable:false})
    create!: InstanceType<typeof PostCreateInput>;
    @Field(() => PostUpdateInput, {nullable:false})
    update!: InstanceType<typeof PostUpdateInput>;
}

@ObjectType()
export class AggregatePriceMap {
    @Field(() => PriceMapCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PriceMapCountAggregate>;
    @Field(() => PriceMapAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PriceMapAvgAggregate>;
    @Field(() => PriceMapSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PriceMapSumAggregate>;
    @Field(() => PriceMapMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PriceMapMinAggregate>;
    @Field(() => PriceMapMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PriceMapMaxAggregate>;
}

@ArgsType()
export class CreateManyPriceMapArgs {
    @Field(() => [PriceMapCreateManyInput], {nullable:false})
    data!: Array<PriceMapCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePriceMapArgs {
    @Field(() => PriceMapCreateInput, {nullable:false})
    data!: InstanceType<typeof PriceMapCreateInput>;
}

@ArgsType()
export class DeleteManyPriceMapArgs {
    @Field(() => PriceMapWhereInput, {nullable:true})
    where?: InstanceType<typeof PriceMapWhereInput>;
}

@ArgsType()
export class DeleteOnePriceMapArgs {
    @Field(() => PriceMapWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PriceMapWhereUniqueInput>;
}

@ArgsType()
export class FindFirstPriceMapArgs {
    @Field(() => PriceMapWhereInput, {nullable:true})
    where?: InstanceType<typeof PriceMapWhereInput>;
    @Field(() => [PriceMapOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PriceMapOrderByWithRelationInput>;
    @Field(() => PriceMapWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PriceMapWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PriceMapScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PriceMapScalarFieldEnum>;
}

@ArgsType()
export class FindManyPriceMapArgs {
    @Field(() => PriceMapWhereInput, {nullable:true})
    where?: InstanceType<typeof PriceMapWhereInput>;
    @Field(() => [PriceMapOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PriceMapOrderByWithRelationInput>;
    @Field(() => PriceMapWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PriceMapWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PriceMapScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PriceMapScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePriceMapArgs {
    @Field(() => PriceMapWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PriceMapWhereUniqueInput>;
}

@ArgsType()
export class PriceMapAggregateArgs {
    @Field(() => PriceMapWhereInput, {nullable:true})
    where?: InstanceType<typeof PriceMapWhereInput>;
    @Field(() => [PriceMapOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PriceMapOrderByWithRelationInput>;
    @Field(() => PriceMapWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PriceMapWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PriceMapCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PriceMapCountAggregateInput>;
    @Field(() => PriceMapAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PriceMapAvgAggregateInput>;
    @Field(() => PriceMapSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PriceMapSumAggregateInput>;
    @Field(() => PriceMapMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PriceMapMinAggregateInput>;
    @Field(() => PriceMapMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PriceMapMaxAggregateInput>;
}

@InputType()
export class PriceMapAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
}

@ObjectType()
export class PriceMapAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Scalars.GraphQLCurrency, {nullable:true})
    price?: number;
}

@InputType()
export class PriceMapAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
}

@InputType()
export class PriceMapCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PriceMapCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PriceMapCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class PriceMapCount {
    @Field(() => Int, {nullable:false})
    laptops!: number;
}

@InputType()
export class PriceMapCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Scalars.GraphQLCurrency, {nullable:true})
    price?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PriceMapCreateNestedOneWithoutLaptopsInput {
    @Field(() => PriceMapCreateWithoutLaptopsInput, {nullable:true})
    create?: InstanceType<typeof PriceMapCreateWithoutLaptopsInput>;
    @Field(() => PriceMapCreateOrConnectWithoutLaptopsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof PriceMapCreateOrConnectWithoutLaptopsInput>;
    @Field(() => PriceMapWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof PriceMapWhereUniqueInput>;
}

@InputType()
export class PriceMapCreateOrConnectWithoutLaptopsInput {
    @Field(() => PriceMapWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PriceMapWhereUniqueInput>;
    @Field(() => PriceMapCreateWithoutLaptopsInput, {nullable:false})
    create!: InstanceType<typeof PriceMapCreateWithoutLaptopsInput>;
}

@InputType()
export class PriceMapCreateWithoutLaptopsInput {
    @Field(() => Scalars.GraphQLCurrency, {nullable:true})
    price?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PriceMapCreateInput {
    @Field(() => Scalars.GraphQLCurrency, {nullable:true})
    price?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => LaptopCreateNestedManyWithoutPriceMapInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopCreateNestedManyWithoutPriceMapInput>;
}

@ArgsType()
export class PriceMapGroupByArgs {
    @Field(() => PriceMapWhereInput, {nullable:true})
    where?: InstanceType<typeof PriceMapWhereInput>;
    @Field(() => [PriceMapOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PriceMapOrderByWithAggregationInput>;
    @Field(() => [PriceMapScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PriceMapScalarFieldEnum>;
    @Field(() => PriceMapScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PriceMapScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PriceMapCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PriceMapCountAggregateInput>;
    @Field(() => PriceMapAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PriceMapAvgAggregateInput>;
    @Field(() => PriceMapSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PriceMapSumAggregateInput>;
    @Field(() => PriceMapMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PriceMapMinAggregateInput>;
    @Field(() => PriceMapMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PriceMapMaxAggregateInput>;
}

@ObjectType()
export class PriceMapGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Scalars.GraphQLCurrency, {nullable:false})
    price!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => PriceMapCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PriceMapCountAggregate>;
    @Field(() => PriceMapAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PriceMapAvgAggregate>;
    @Field(() => PriceMapSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PriceMapSumAggregate>;
    @Field(() => PriceMapMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PriceMapMinAggregate>;
    @Field(() => PriceMapMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PriceMapMaxAggregate>;
}

@InputType()
export class PriceMapMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PriceMapMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Scalars.GraphQLCurrency, {nullable:true})
    price?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PriceMapMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PriceMapMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PriceMapMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Scalars.GraphQLCurrency, {nullable:true})
    price?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PriceMapMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PriceMapOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PriceMapCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PriceMapCountOrderByAggregateInput>;
    @Field(() => PriceMapAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PriceMapAvgOrderByAggregateInput>;
    @Field(() => PriceMapMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PriceMapMaxOrderByAggregateInput>;
    @Field(() => PriceMapMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PriceMapMinOrderByAggregateInput>;
    @Field(() => PriceMapSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PriceMapSumOrderByAggregateInput>;
}

@InputType()
export class PriceMapOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => LaptopOrderByRelationAggregateInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopOrderByRelationAggregateInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PriceMapRelationFilter {
    @Field(() => PriceMapWhereInput, {nullable:true})
    is?: InstanceType<typeof PriceMapWhereInput>;
    @Field(() => PriceMapWhereInput, {nullable:true})
    isNot?: InstanceType<typeof PriceMapWhereInput>;
}

@InputType()
export class PriceMapScalarWhereWithAggregatesInput {
    @Field(() => [PriceMapScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PriceMapScalarWhereWithAggregatesInput>;
    @Field(() => [PriceMapScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PriceMapScalarWhereWithAggregatesInput>;
    @Field(() => [PriceMapScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PriceMapScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    price?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PriceMapSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
}

@ObjectType()
export class PriceMapSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Scalars.GraphQLCurrency, {nullable:true})
    price?: number;
}

@InputType()
export class PriceMapSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
}

@InputType()
export class PriceMapUncheckedCreateWithoutLaptopsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Scalars.GraphQLCurrency, {nullable:true})
    price?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PriceMapUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Scalars.GraphQLCurrency, {nullable:true})
    price?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => LaptopUncheckedCreateNestedManyWithoutPriceMapInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopUncheckedCreateNestedManyWithoutPriceMapInput>;
}

@InputType()
export class PriceMapUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PriceMapUncheckedUpdateWithoutLaptopsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PriceMapUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => LaptopUncheckedUpdateManyWithoutPriceMapInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopUncheckedUpdateManyWithoutPriceMapInput>;
}

@InputType()
export class PriceMapUpdateManyMutationInput {
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PriceMapUpdateOneWithoutLaptopsInput {
    @Field(() => PriceMapCreateWithoutLaptopsInput, {nullable:true})
    create?: InstanceType<typeof PriceMapCreateWithoutLaptopsInput>;
    @Field(() => PriceMapCreateOrConnectWithoutLaptopsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof PriceMapCreateOrConnectWithoutLaptopsInput>;
    @Field(() => PriceMapUpsertWithoutLaptopsInput, {nullable:true})
    upsert?: InstanceType<typeof PriceMapUpsertWithoutLaptopsInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => PriceMapWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof PriceMapWhereUniqueInput>;
    @Field(() => PriceMapUpdateWithoutLaptopsInput, {nullable:true})
    update?: InstanceType<typeof PriceMapUpdateWithoutLaptopsInput>;
}

@InputType()
export class PriceMapUpdateWithoutLaptopsInput {
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PriceMapUpdateInput {
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    price?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => LaptopUpdateManyWithoutPriceMapInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopUpdateManyWithoutPriceMapInput>;
}

@InputType()
export class PriceMapUpsertWithoutLaptopsInput {
    @Field(() => PriceMapUpdateWithoutLaptopsInput, {nullable:false})
    update!: InstanceType<typeof PriceMapUpdateWithoutLaptopsInput>;
    @Field(() => PriceMapCreateWithoutLaptopsInput, {nullable:false})
    create!: InstanceType<typeof PriceMapCreateWithoutLaptopsInput>;
}

@InputType()
export class PriceMapWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Scalars.GraphQLCurrency, {nullable:true})
    price?: number;
}

@InputType()
export class PriceMapWhereInput {
    @Field(() => [PriceMapWhereInput], {nullable:true})
    AND?: Array<PriceMapWhereInput>;
    @Field(() => [PriceMapWhereInput], {nullable:true})
    OR?: Array<PriceMapWhereInput>;
    @Field(() => [PriceMapWhereInput], {nullable:true})
    NOT?: Array<PriceMapWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    price?: InstanceType<typeof FloatFilter>;
    @Field(() => LaptopListRelationFilter, {nullable:true})
    laptops?: InstanceType<typeof LaptopListRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class PriceMap {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Scalars.GraphQLCurrency, {nullable:false,defaultValue:0})
    price!: number;
    @Field(() => [Laptop], {nullable:true})
    laptops?: Array<Laptop>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => PriceMapCount, {nullable:false})
    _count?: InstanceType<typeof PriceMapCount>;
}

@ArgsType()
export class UpdateManyPriceMapArgs {
    @Field(() => PriceMapUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PriceMapUpdateManyMutationInput>;
    @Field(() => PriceMapWhereInput, {nullable:true})
    where?: InstanceType<typeof PriceMapWhereInput>;
}

@ArgsType()
export class UpdateOnePriceMapArgs {
    @Field(() => PriceMapUpdateInput, {nullable:false})
    data!: InstanceType<typeof PriceMapUpdateInput>;
    @Field(() => PriceMapWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PriceMapWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnePriceMapArgs {
    @Field(() => PriceMapWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PriceMapWhereUniqueInput>;
    @Field(() => PriceMapCreateInput, {nullable:false})
    create!: InstanceType<typeof PriceMapCreateInput>;
    @Field(() => PriceMapUpdateInput, {nullable:false})
    update!: InstanceType<typeof PriceMapUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class BoolFieldUpdateOperationsInput {
    @Field(() => Boolean, {nullable:true})
    set?: boolean;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class EnumGenderFieldUpdateOperationsInput {
    @Field(() => Gender, {nullable:true})
    set?: keyof typeof Gender;
}

@InputType()
export class EnumGenderFilter {
    @Field(() => Gender, {nullable:true})
    equals?: keyof typeof Gender;
    @Field(() => [Gender], {nullable:true})
    in?: Array<keyof typeof Gender>;
    @Field(() => [Gender], {nullable:true})
    notIn?: Array<keyof typeof Gender>;
    @Field(() => NestedEnumGenderFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumGenderFilter>;
}

@InputType()
export class EnumGenderWithAggregatesFilter {
    @Field(() => Gender, {nullable:true})
    equals?: keyof typeof Gender;
    @Field(() => [Gender], {nullable:true})
    in?: Array<keyof typeof Gender>;
    @Field(() => [Gender], {nullable:true})
    notIn?: Array<keyof typeof Gender>;
    @Field(() => NestedEnumGenderWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumGenderWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumGenderFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumGenderFilter>;
    @Field(() => NestedEnumGenderFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumGenderFilter>;
}

@InputType()
export class EnumOSFieldUpdateOperationsInput {
    @Field(() => OS, {nullable:true})
    set?: keyof typeof OS;
}

@InputType()
export class EnumOSFilter {
    @Field(() => OS, {nullable:true})
    equals?: keyof typeof OS;
    @Field(() => [OS], {nullable:true})
    in?: Array<keyof typeof OS>;
    @Field(() => [OS], {nullable:true})
    notIn?: Array<keyof typeof OS>;
    @Field(() => NestedEnumOSFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumOSFilter>;
}

@InputType()
export class EnumOSWithAggregatesFilter {
    @Field(() => OS, {nullable:true})
    equals?: keyof typeof OS;
    @Field(() => [OS], {nullable:true})
    in?: Array<keyof typeof OS>;
    @Field(() => [OS], {nullable:true})
    notIn?: Array<keyof typeof OS>;
    @Field(() => NestedEnumOSWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumOSWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumOSFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumOSFilter>;
    @Field(() => NestedEnumOSFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumOSFilter>;
}

@InputType()
export class EnumRankFieldUpdateOperationsInput {
    @Field(() => Rank, {nullable:true})
    set?: keyof typeof Rank;
}

@InputType()
export class EnumRankFilter {
    @Field(() => Rank, {nullable:true})
    equals?: keyof typeof Rank;
    @Field(() => [Rank], {nullable:true})
    in?: Array<keyof typeof Rank>;
    @Field(() => [Rank], {nullable:true})
    notIn?: Array<keyof typeof Rank>;
    @Field(() => NestedEnumRankFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRankFilter>;
}

@InputType()
export class EnumRankWithAggregatesFilter {
    @Field(() => Rank, {nullable:true})
    equals?: keyof typeof Rank;
    @Field(() => [Rank], {nullable:true})
    in?: Array<keyof typeof Rank>;
    @Field(() => [Rank], {nullable:true})
    notIn?: Array<keyof typeof Rank>;
    @Field(() => NestedEnumRankWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRankWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumRankFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumRankFilter>;
    @Field(() => NestedEnumRankFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumRankFilter>;
}

@InputType()
export class EnumRoleFieldUpdateOperationsInput {
    @Field(() => Role, {nullable:true})
    set?: keyof typeof Role;
}

@InputType()
export class EnumRoleFilter {
    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class EnumRoleWithAggregatesFilter {
    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;
    @Field(() => NestedEnumRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumRoleFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class FloatFieldUpdateOperationsInput {
    @Field(() => Float, {nullable:true})
    set?: number;
    @Field(() => Float, {nullable:true})
    increment?: number;
    @Field(() => Float, {nullable:true})
    decrement?: number;
    @Field(() => Float, {nullable:true})
    multiply?: number;
    @Field(() => Float, {nullable:true})
    divide?: number;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class FloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _min?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _max?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class IntNullableWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedBoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedBoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedEnumGenderFilter {
    @Field(() => Gender, {nullable:true})
    equals?: keyof typeof Gender;
    @Field(() => [Gender], {nullable:true})
    in?: Array<keyof typeof Gender>;
    @Field(() => [Gender], {nullable:true})
    notIn?: Array<keyof typeof Gender>;
    @Field(() => NestedEnumGenderFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumGenderFilter>;
}

@InputType()
export class NestedEnumGenderWithAggregatesFilter {
    @Field(() => Gender, {nullable:true})
    equals?: keyof typeof Gender;
    @Field(() => [Gender], {nullable:true})
    in?: Array<keyof typeof Gender>;
    @Field(() => [Gender], {nullable:true})
    notIn?: Array<keyof typeof Gender>;
    @Field(() => NestedEnumGenderWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumGenderWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumGenderFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumGenderFilter>;
    @Field(() => NestedEnumGenderFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumGenderFilter>;
}

@InputType()
export class NestedEnumOSFilter {
    @Field(() => OS, {nullable:true})
    equals?: keyof typeof OS;
    @Field(() => [OS], {nullable:true})
    in?: Array<keyof typeof OS>;
    @Field(() => [OS], {nullable:true})
    notIn?: Array<keyof typeof OS>;
    @Field(() => NestedEnumOSFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumOSFilter>;
}

@InputType()
export class NestedEnumOSWithAggregatesFilter {
    @Field(() => OS, {nullable:true})
    equals?: keyof typeof OS;
    @Field(() => [OS], {nullable:true})
    in?: Array<keyof typeof OS>;
    @Field(() => [OS], {nullable:true})
    notIn?: Array<keyof typeof OS>;
    @Field(() => NestedEnumOSWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumOSWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumOSFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumOSFilter>;
    @Field(() => NestedEnumOSFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumOSFilter>;
}

@InputType()
export class NestedEnumRankFilter {
    @Field(() => Rank, {nullable:true})
    equals?: keyof typeof Rank;
    @Field(() => [Rank], {nullable:true})
    in?: Array<keyof typeof Rank>;
    @Field(() => [Rank], {nullable:true})
    notIn?: Array<keyof typeof Rank>;
    @Field(() => NestedEnumRankFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRankFilter>;
}

@InputType()
export class NestedEnumRankWithAggregatesFilter {
    @Field(() => Rank, {nullable:true})
    equals?: keyof typeof Rank;
    @Field(() => [Rank], {nullable:true})
    in?: Array<keyof typeof Rank>;
    @Field(() => [Rank], {nullable:true})
    notIn?: Array<keyof typeof Rank>;
    @Field(() => NestedEnumRankWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRankWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumRankFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumRankFilter>;
    @Field(() => NestedEnumRankFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumRankFilter>;
}

@InputType()
export class NestedEnumRoleFilter {
    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class NestedEnumRoleWithAggregatesFilter {
    @Field(() => Role, {nullable:true})
    equals?: keyof typeof Role;
    @Field(() => [Role], {nullable:true})
    in?: Array<keyof typeof Role>;
    @Field(() => [Role], {nullable:true})
    notIn?: Array<keyof typeof Role>;
    @Field(() => NestedEnumRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumRoleFilter>;
    @Field(() => NestedEnumRoleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedFloatNullableFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}

@InputType()
export class NestedFloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _min?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _max?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntNullableWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableIntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregatePurchase {
    @Field(() => PurchaseCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PurchaseCountAggregate>;
    @Field(() => PurchaseAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PurchaseAvgAggregate>;
    @Field(() => PurchaseSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PurchaseSumAggregate>;
    @Field(() => PurchaseMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PurchaseMinAggregate>;
    @Field(() => PurchaseMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PurchaseMaxAggregate>;
}

@ArgsType()
export class CreateManyPurchaseArgs {
    @Field(() => [PurchaseCreateManyInput], {nullable:false})
    data!: Array<PurchaseCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePurchaseArgs {
    @Field(() => PurchaseCreateInput, {nullable:false})
    data!: InstanceType<typeof PurchaseCreateInput>;
}

@ArgsType()
export class DeleteManyPurchaseArgs {
    @Field(() => PurchaseWhereInput, {nullable:true})
    where?: InstanceType<typeof PurchaseWhereInput>;
}

@ArgsType()
export class DeleteOnePurchaseArgs {
    @Field(() => PurchaseWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PurchaseWhereUniqueInput>;
}

@ArgsType()
export class FindFirstPurchaseArgs {
    @Field(() => PurchaseWhereInput, {nullable:true})
    where?: InstanceType<typeof PurchaseWhereInput>;
    @Field(() => [PurchaseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PurchaseOrderByWithRelationInput>;
    @Field(() => PurchaseWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PurchaseWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PurchaseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PurchaseScalarFieldEnum>;
}

@ArgsType()
export class FindManyPurchaseArgs {
    @Field(() => PurchaseWhereInput, {nullable:true})
    where?: InstanceType<typeof PurchaseWhereInput>;
    @Field(() => [PurchaseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PurchaseOrderByWithRelationInput>;
    @Field(() => PurchaseWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PurchaseWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PurchaseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PurchaseScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePurchaseArgs {
    @Field(() => PurchaseWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PurchaseWhereUniqueInput>;
}

@ArgsType()
export class PurchaseAggregateArgs {
    @Field(() => PurchaseWhereInput, {nullable:true})
    where?: InstanceType<typeof PurchaseWhereInput>;
    @Field(() => [PurchaseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PurchaseOrderByWithRelationInput>;
    @Field(() => PurchaseWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PurchaseWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PurchaseCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PurchaseCountAggregateInput>;
    @Field(() => PurchaseAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PurchaseAvgAggregateInput>;
    @Field(() => PurchaseSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PurchaseSumAggregateInput>;
    @Field(() => PurchaseMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PurchaseMinAggregateInput>;
    @Field(() => PurchaseMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PurchaseMaxAggregateInput>;
}

@InputType()
export class PurchaseAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class PurchaseAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class PurchaseAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class PurchaseCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    customerId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PurchaseCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    customerId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PurchaseCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class PurchaseCount {
    @Field(() => Int, {nullable:false})
    laptops!: number;
}

@InputType()
export class PurchaseCreateManyCustomerInputEnvelope {
    @Field(() => [PurchaseCreateManyCustomerInput], {nullable:false})
    data!: Array<PurchaseCreateManyCustomerInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PurchaseCreateManyCustomerInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PurchaseCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    customerId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PurchaseCreateNestedManyWithoutCustomerInput {
    @Field(() => [PurchaseCreateWithoutCustomerInput], {nullable:true})
    create?: Array<PurchaseCreateWithoutCustomerInput>;
    @Field(() => [PurchaseCreateOrConnectWithoutCustomerInput], {nullable:true})
    connectOrCreate?: Array<PurchaseCreateOrConnectWithoutCustomerInput>;
    @Field(() => PurchaseCreateManyCustomerInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PurchaseCreateManyCustomerInputEnvelope>;
    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    connect?: Array<PurchaseWhereUniqueInput>;
}

@InputType()
export class PurchaseCreateNestedManyWithoutLaptopsInput {
    @Field(() => [PurchaseCreateWithoutLaptopsInput], {nullable:true})
    create?: Array<PurchaseCreateWithoutLaptopsInput>;
    @Field(() => [PurchaseCreateOrConnectWithoutLaptopsInput], {nullable:true})
    connectOrCreate?: Array<PurchaseCreateOrConnectWithoutLaptopsInput>;
    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    connect?: Array<PurchaseWhereUniqueInput>;
}

@InputType()
export class PurchaseCreateOrConnectWithoutCustomerInput {
    @Field(() => PurchaseWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PurchaseWhereUniqueInput>;
    @Field(() => PurchaseCreateWithoutCustomerInput, {nullable:false})
    create!: InstanceType<typeof PurchaseCreateWithoutCustomerInput>;
}

@InputType()
export class PurchaseCreateOrConnectWithoutLaptopsInput {
    @Field(() => PurchaseWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PurchaseWhereUniqueInput>;
    @Field(() => PurchaseCreateWithoutLaptopsInput, {nullable:false})
    create!: InstanceType<typeof PurchaseCreateWithoutLaptopsInput>;
}

@InputType()
export class PurchaseCreateWithoutCustomerInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => LaptopCreateNestedManyWithoutPurchasesInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopCreateNestedManyWithoutPurchasesInput>;
}

@InputType()
export class PurchaseCreateWithoutLaptopsInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CustomerCreateNestedOneWithoutPurchasesInput, {nullable:false})
    customer!: InstanceType<typeof CustomerCreateNestedOneWithoutPurchasesInput>;
}

@InputType()
export class PurchaseCreateInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CustomerCreateNestedOneWithoutPurchasesInput, {nullable:false})
    customer!: InstanceType<typeof CustomerCreateNestedOneWithoutPurchasesInput>;
    @Field(() => LaptopCreateNestedManyWithoutPurchasesInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopCreateNestedManyWithoutPurchasesInput>;
}

@ArgsType()
export class PurchaseGroupByArgs {
    @Field(() => PurchaseWhereInput, {nullable:true})
    where?: InstanceType<typeof PurchaseWhereInput>;
    @Field(() => [PurchaseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PurchaseOrderByWithAggregationInput>;
    @Field(() => [PurchaseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PurchaseScalarFieldEnum>;
    @Field(() => PurchaseScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PurchaseScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PurchaseCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PurchaseCountAggregateInput>;
    @Field(() => PurchaseAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PurchaseAvgAggregateInput>;
    @Field(() => PurchaseSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PurchaseSumAggregateInput>;
    @Field(() => PurchaseMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PurchaseMinAggregateInput>;
    @Field(() => PurchaseMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PurchaseMaxAggregateInput>;
}

@ObjectType()
export class PurchaseGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    customerId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => PurchaseCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PurchaseCountAggregate>;
    @Field(() => PurchaseAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PurchaseAvgAggregate>;
    @Field(() => PurchaseSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PurchaseSumAggregate>;
    @Field(() => PurchaseMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PurchaseMinAggregate>;
    @Field(() => PurchaseMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PurchaseMaxAggregate>;
}

@InputType()
export class PurchaseListRelationFilter {
    @Field(() => PurchaseWhereInput, {nullable:true})
    every?: InstanceType<typeof PurchaseWhereInput>;
    @Field(() => PurchaseWhereInput, {nullable:true})
    some?: InstanceType<typeof PurchaseWhereInput>;
    @Field(() => PurchaseWhereInput, {nullable:true})
    none?: InstanceType<typeof PurchaseWhereInput>;
}

@InputType()
export class PurchaseMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    customerId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PurchaseMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    customerId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PurchaseMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PurchaseMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    customerId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class PurchaseMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    customerId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PurchaseMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PurchaseOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class PurchaseOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => PurchaseCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PurchaseCountOrderByAggregateInput>;
    @Field(() => PurchaseAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PurchaseAvgOrderByAggregateInput>;
    @Field(() => PurchaseMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PurchaseMaxOrderByAggregateInput>;
    @Field(() => PurchaseMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PurchaseMinOrderByAggregateInput>;
    @Field(() => PurchaseSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PurchaseSumOrderByAggregateInput>;
}

@InputType()
export class PurchaseOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => CustomerOrderByWithRelationInput, {nullable:true})
    customer?: InstanceType<typeof CustomerOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;
    @Field(() => LaptopOrderByRelationAggregateInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopOrderByRelationAggregateInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PurchaseScalarWhereWithAggregatesInput {
    @Field(() => [PurchaseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PurchaseScalarWhereWithAggregatesInput>;
    @Field(() => [PurchaseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PurchaseScalarWhereWithAggregatesInput>;
    @Field(() => [PurchaseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PurchaseScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    customerId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PurchaseScalarWhereInput {
    @Field(() => [PurchaseScalarWhereInput], {nullable:true})
    AND?: Array<PurchaseScalarWhereInput>;
    @Field(() => [PurchaseScalarWhereInput], {nullable:true})
    OR?: Array<PurchaseScalarWhereInput>;
    @Field(() => [PurchaseScalarWhereInput], {nullable:true})
    NOT?: Array<PurchaseScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    customerId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class PurchaseSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class PurchaseSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class PurchaseSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class PurchaseUncheckedCreateNestedManyWithoutCustomerInput {
    @Field(() => [PurchaseCreateWithoutCustomerInput], {nullable:true})
    create?: Array<PurchaseCreateWithoutCustomerInput>;
    @Field(() => [PurchaseCreateOrConnectWithoutCustomerInput], {nullable:true})
    connectOrCreate?: Array<PurchaseCreateOrConnectWithoutCustomerInput>;
    @Field(() => PurchaseCreateManyCustomerInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PurchaseCreateManyCustomerInputEnvelope>;
    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    connect?: Array<PurchaseWhereUniqueInput>;
}

@InputType()
export class PurchaseUncheckedCreateWithoutCustomerInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PurchaseUncheckedCreateWithoutLaptopsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    customerId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PurchaseUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    customerId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PurchaseUncheckedUpdateManyWithoutCustomerInput {
    @Field(() => [PurchaseCreateWithoutCustomerInput], {nullable:true})
    create?: Array<PurchaseCreateWithoutCustomerInput>;
    @Field(() => [PurchaseCreateOrConnectWithoutCustomerInput], {nullable:true})
    connectOrCreate?: Array<PurchaseCreateOrConnectWithoutCustomerInput>;
    @Field(() => [PurchaseUpsertWithWhereUniqueWithoutCustomerInput], {nullable:true})
    upsert?: Array<PurchaseUpsertWithWhereUniqueWithoutCustomerInput>;
    @Field(() => PurchaseCreateManyCustomerInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PurchaseCreateManyCustomerInputEnvelope>;
    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    set?: Array<PurchaseWhereUniqueInput>;
    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    disconnect?: Array<PurchaseWhereUniqueInput>;
    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    delete?: Array<PurchaseWhereUniqueInput>;
    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    connect?: Array<PurchaseWhereUniqueInput>;
    @Field(() => [PurchaseUpdateWithWhereUniqueWithoutCustomerInput], {nullable:true})
    update?: Array<PurchaseUpdateWithWhereUniqueWithoutCustomerInput>;
    @Field(() => [PurchaseUpdateManyWithWhereWithoutCustomerInput], {nullable:true})
    updateMany?: Array<PurchaseUpdateManyWithWhereWithoutCustomerInput>;
    @Field(() => [PurchaseScalarWhereInput], {nullable:true})
    deleteMany?: Array<PurchaseScalarWhereInput>;
}

@InputType()
export class PurchaseUncheckedUpdateManyWithoutPurchasesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PurchaseUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    customerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PurchaseUncheckedUpdateWithoutCustomerInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PurchaseUncheckedUpdateWithoutLaptopsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    customerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PurchaseUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    customerId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PurchaseUpdateManyMutationInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PurchaseUpdateManyWithWhereWithoutCustomerInput {
    @Field(() => PurchaseScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof PurchaseScalarWhereInput>;
    @Field(() => PurchaseUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PurchaseUpdateManyMutationInput>;
}

@InputType()
export class PurchaseUpdateManyWithWhereWithoutLaptopsInput {
    @Field(() => PurchaseScalarWhereInput, {nullable:false})
    where!: InstanceType<typeof PurchaseScalarWhereInput>;
    @Field(() => PurchaseUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PurchaseUpdateManyMutationInput>;
}

@InputType()
export class PurchaseUpdateManyWithoutCustomerInput {
    @Field(() => [PurchaseCreateWithoutCustomerInput], {nullable:true})
    create?: Array<PurchaseCreateWithoutCustomerInput>;
    @Field(() => [PurchaseCreateOrConnectWithoutCustomerInput], {nullable:true})
    connectOrCreate?: Array<PurchaseCreateOrConnectWithoutCustomerInput>;
    @Field(() => [PurchaseUpsertWithWhereUniqueWithoutCustomerInput], {nullable:true})
    upsert?: Array<PurchaseUpsertWithWhereUniqueWithoutCustomerInput>;
    @Field(() => PurchaseCreateManyCustomerInputEnvelope, {nullable:true})
    createMany?: InstanceType<typeof PurchaseCreateManyCustomerInputEnvelope>;
    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    set?: Array<PurchaseWhereUniqueInput>;
    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    disconnect?: Array<PurchaseWhereUniqueInput>;
    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    delete?: Array<PurchaseWhereUniqueInput>;
    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    connect?: Array<PurchaseWhereUniqueInput>;
    @Field(() => [PurchaseUpdateWithWhereUniqueWithoutCustomerInput], {nullable:true})
    update?: Array<PurchaseUpdateWithWhereUniqueWithoutCustomerInput>;
    @Field(() => [PurchaseUpdateManyWithWhereWithoutCustomerInput], {nullable:true})
    updateMany?: Array<PurchaseUpdateManyWithWhereWithoutCustomerInput>;
    @Field(() => [PurchaseScalarWhereInput], {nullable:true})
    deleteMany?: Array<PurchaseScalarWhereInput>;
}

@InputType()
export class PurchaseUpdateManyWithoutLaptopsInput {
    @Field(() => [PurchaseCreateWithoutLaptopsInput], {nullable:true})
    create?: Array<PurchaseCreateWithoutLaptopsInput>;
    @Field(() => [PurchaseCreateOrConnectWithoutLaptopsInput], {nullable:true})
    connectOrCreate?: Array<PurchaseCreateOrConnectWithoutLaptopsInput>;
    @Field(() => [PurchaseUpsertWithWhereUniqueWithoutLaptopsInput], {nullable:true})
    upsert?: Array<PurchaseUpsertWithWhereUniqueWithoutLaptopsInput>;
    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    set?: Array<PurchaseWhereUniqueInput>;
    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    disconnect?: Array<PurchaseWhereUniqueInput>;
    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    delete?: Array<PurchaseWhereUniqueInput>;
    @Field(() => [PurchaseWhereUniqueInput], {nullable:true})
    connect?: Array<PurchaseWhereUniqueInput>;
    @Field(() => [PurchaseUpdateWithWhereUniqueWithoutLaptopsInput], {nullable:true})
    update?: Array<PurchaseUpdateWithWhereUniqueWithoutLaptopsInput>;
    @Field(() => [PurchaseUpdateManyWithWhereWithoutLaptopsInput], {nullable:true})
    updateMany?: Array<PurchaseUpdateManyWithWhereWithoutLaptopsInput>;
    @Field(() => [PurchaseScalarWhereInput], {nullable:true})
    deleteMany?: Array<PurchaseScalarWhereInput>;
}

@InputType()
export class PurchaseUpdateWithWhereUniqueWithoutCustomerInput {
    @Field(() => PurchaseWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PurchaseWhereUniqueInput>;
    @Field(() => PurchaseUpdateWithoutCustomerInput, {nullable:false})
    data!: InstanceType<typeof PurchaseUpdateWithoutCustomerInput>;
}

@InputType()
export class PurchaseUpdateWithWhereUniqueWithoutLaptopsInput {
    @Field(() => PurchaseWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PurchaseWhereUniqueInput>;
    @Field(() => PurchaseUpdateWithoutLaptopsInput, {nullable:false})
    data!: InstanceType<typeof PurchaseUpdateWithoutLaptopsInput>;
}

@InputType()
export class PurchaseUpdateWithoutCustomerInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => LaptopUpdateManyWithoutPurchasesInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopUpdateManyWithoutPurchasesInput>;
}

@InputType()
export class PurchaseUpdateWithoutLaptopsInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CustomerUpdateOneRequiredWithoutPurchasesInput, {nullable:true})
    customer?: InstanceType<typeof CustomerUpdateOneRequiredWithoutPurchasesInput>;
}

@InputType()
export class PurchaseUpdateInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CustomerUpdateOneRequiredWithoutPurchasesInput, {nullable:true})
    customer?: InstanceType<typeof CustomerUpdateOneRequiredWithoutPurchasesInput>;
    @Field(() => LaptopUpdateManyWithoutPurchasesInput, {nullable:true})
    laptops?: InstanceType<typeof LaptopUpdateManyWithoutPurchasesInput>;
}

@InputType()
export class PurchaseUpsertWithWhereUniqueWithoutCustomerInput {
    @Field(() => PurchaseWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PurchaseWhereUniqueInput>;
    @Field(() => PurchaseUpdateWithoutCustomerInput, {nullable:false})
    update!: InstanceType<typeof PurchaseUpdateWithoutCustomerInput>;
    @Field(() => PurchaseCreateWithoutCustomerInput, {nullable:false})
    create!: InstanceType<typeof PurchaseCreateWithoutCustomerInput>;
}

@InputType()
export class PurchaseUpsertWithWhereUniqueWithoutLaptopsInput {
    @Field(() => PurchaseWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PurchaseWhereUniqueInput>;
    @Field(() => PurchaseUpdateWithoutLaptopsInput, {nullable:false})
    update!: InstanceType<typeof PurchaseUpdateWithoutLaptopsInput>;
    @Field(() => PurchaseCreateWithoutLaptopsInput, {nullable:false})
    create!: InstanceType<typeof PurchaseCreateWithoutLaptopsInput>;
}

@InputType()
export class PurchaseWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class PurchaseWhereInput {
    @Field(() => [PurchaseWhereInput], {nullable:true})
    AND?: Array<PurchaseWhereInput>;
    @Field(() => [PurchaseWhereInput], {nullable:true})
    OR?: Array<PurchaseWhereInput>;
    @Field(() => [PurchaseWhereInput], {nullable:true})
    NOT?: Array<PurchaseWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => CustomerWhereInput, {nullable:true})
    customer?: InstanceType<typeof CustomerWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    customerId?: InstanceType<typeof StringFilter>;
    @Field(() => LaptopListRelationFilter, {nullable:true})
    laptops?: InstanceType<typeof LaptopListRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Purchase {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Customer, {nullable:false})
    customer?: InstanceType<typeof Customer>;
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    customerId!: string;
    @Field(() => [Laptop], {nullable:true})
    laptops?: Array<Laptop>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => PurchaseCount, {nullable:false})
    _count?: InstanceType<typeof PurchaseCount>;
}

@ArgsType()
export class UpdateManyPurchaseArgs {
    @Field(() => PurchaseUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof PurchaseUpdateManyMutationInput>;
    @Field(() => PurchaseWhereInput, {nullable:true})
    where?: InstanceType<typeof PurchaseWhereInput>;
}

@ArgsType()
export class UpdateOnePurchaseArgs {
    @Field(() => PurchaseUpdateInput, {nullable:false})
    data!: InstanceType<typeof PurchaseUpdateInput>;
    @Field(() => PurchaseWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PurchaseWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnePurchaseArgs {
    @Field(() => PurchaseWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof PurchaseWhereUniqueInput>;
    @Field(() => PurchaseCreateInput, {nullable:false})
    create!: InstanceType<typeof PurchaseCreateInput>;
    @Field(() => PurchaseUpdateInput, {nullable:false})
    update!: InstanceType<typeof PurchaseUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @HideField()
    password!: number;
    @Field(() => Int, {nullable:false})
    role!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    posts!: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.Length(1, 20)
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateNestedOneWithoutPostsInput {
    @Field(() => UserCreateWithoutPostsInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutPostsInput>;
    @Field(() => UserCreateOrConnectWithoutPostsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPostsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutProfileInput {
    @Field(() => UserCreateWithoutProfileInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutProfileInput>;
    @Field(() => UserCreateOrConnectWithoutProfileInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProfileInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutPostsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutPostsInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutPostsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutProfileInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutProfileInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutProfileInput>;
}

@InputType()
export class UserCreateWithoutPostsInput {
    @Field(() => String, {nullable:false})
    @Validator.Length(1, 20)
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PersonCreateNestedOneWithoutUserInput, {nullable:false})
    profile!: InstanceType<typeof PersonCreateNestedOneWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutProfileInput {
    @Field(() => String, {nullable:false})
    @Validator.Length(1, 20)
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: InstanceType<typeof PostCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.Length(1, 20)
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PersonCreateNestedOneWithoutUserInput, {nullable:false})
    profile!: InstanceType<typeof PersonCreateNestedOneWithoutUserInput>;
    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: InstanceType<typeof PostCreateNestedManyWithoutAuthorInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @HideField()
    password!: string;
    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @HideField()
    password?: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
    @HideField()
    password?: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => PersonOrderByWithRelationInput, {nullable:true})
    profile?: InstanceType<typeof PersonOrderByWithRelationInput>;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    posts?: InstanceType<typeof PostOrderByRelationAggregateInput>;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumRoleWithAggregatesFilter, {nullable:true})
    role?: InstanceType<typeof EnumRoleWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateNestedOneWithoutProfileInput {
    @Field(() => UserCreateWithoutProfileInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutProfileInput>;
    @Field(() => UserCreateOrConnectWithoutProfileInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProfileInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserUncheckedCreateWithoutPostsInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.Length(1, 20)
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUncheckedCreateWithoutProfileInput {
    @Field(() => String, {nullable:false})
    @Validator.Length(1, 20)
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: InstanceType<typeof PostUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.Length(1, 20)
    password!: string;
    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: InstanceType<typeof PostUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateOneWithoutProfileInput {
    @Field(() => UserCreateWithoutProfileInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutProfileInput>;
    @Field(() => UserCreateOrConnectWithoutProfileInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProfileInput>;
    @Field(() => UserUpsertWithoutProfileInput, {nullable:true})
    upsert?: InstanceType<typeof UserUpsertWithoutProfileInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutProfileInput, {nullable:true})
    update?: InstanceType<typeof UserUpdateWithoutProfileInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutPostsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutProfileInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PostUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    posts?: InstanceType<typeof PostUncheckedUpdateManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PostUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    posts?: InstanceType<typeof PostUncheckedUpdateManyWithoutAuthorInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutPostsInput {
    @Field(() => UserCreateWithoutPostsInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutPostsInput>;
    @Field(() => UserCreateOrConnectWithoutPostsInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPostsInput>;
    @Field(() => UserUpsertWithoutPostsInput, {nullable:true})
    upsert?: InstanceType<typeof UserUpsertWithoutPostsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutPostsInput, {nullable:true})
    update?: InstanceType<typeof UserUpdateWithoutPostsInput>;
}

@InputType()
export class UserUpdateOneWithoutProfileInput {
    @Field(() => UserCreateWithoutProfileInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutProfileInput>;
    @Field(() => UserCreateOrConnectWithoutProfileInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProfileInput>;
    @Field(() => UserUpsertWithoutProfileInput, {nullable:true})
    upsert?: InstanceType<typeof UserUpsertWithoutProfileInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutProfileInput, {nullable:true})
    update?: InstanceType<typeof UserUpdateWithoutProfileInput>;
}

@InputType()
export class UserUpdateWithoutPostsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PersonUpdateOneRequiredWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof PersonUpdateOneRequiredWithoutUserInput>;
}

@InputType()
export class UserUpdateWithoutProfileInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PostUpdateManyWithoutAuthorInput, {nullable:true})
    posts?: InstanceType<typeof PostUpdateManyWithoutAuthorInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PersonUpdateOneRequiredWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof PersonUpdateOneRequiredWithoutUserInput>;
    @Field(() => PostUpdateManyWithoutAuthorInput, {nullable:true})
    posts?: InstanceType<typeof PostUpdateManyWithoutAuthorInput>;
}

@InputType()
export class UserUpsertWithoutPostsInput {
    @Field(() => UserUpdateWithoutPostsInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateWithoutPostsInput>;
    @Field(() => UserCreateWithoutPostsInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutPostsInput>;
}

@InputType()
export class UserUpsertWithoutProfileInput {
    @Field(() => UserUpdateWithoutProfileInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateWithoutProfileInput>;
    @Field(() => UserCreateWithoutProfileInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutProfileInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => Scalars.GraphQLUUID, {nullable:true})
    id?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => PersonWhereInput, {nullable:true})
    profile?: InstanceType<typeof PersonWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => EnumRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumRoleFilter>;
    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: InstanceType<typeof PostListRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class User {
    @Field(() => Scalars.GraphQLUUID, {nullable:false})
    id!: string;
    @Field(() => Person, {nullable:false})
    profile?: InstanceType<typeof Person>;
    @HideField()
    password!: string;
    @Field(() => Role, {nullable:false,defaultValue:'STAFF'})
    role!: keyof typeof Role;
    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}
