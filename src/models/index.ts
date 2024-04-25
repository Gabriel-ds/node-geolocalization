// import 'reflect-metadata';

// import { Ref, prop } from '@typegoose/typegoose';
// import * as mongoose from 'mongoose';

// import ObjectId = mongoose.Types.ObjectId;

// class Job {
//     @prop()
//     public title?: string;

//     @prop()
//     public position?: string;
// }

// class Car {
//     @prop()
//     public model?: string;
// }

// class User {
//     @prop()
//     public name?: string;

//     @prop({ required: true })
//     public age!: number; // This is a single Primitive

//     @prop({ type: () => [String] })
//     public preferences?: string[]; // This is a Primitive Array

//     @prop()
//     public mainJob?: Job; // This is a single SubDocument

//     @prop({ type: () => [Job] })
//     public jobs?: Job[]; // This is a SubDocument Array

//     @prop({ ref: () => Car })
//     public mainCar?: Ref<Car>; // This is a single Reference

//     @prop({ ref: () => [Car] })
//     public cars?: Ref<Car>[]; // This is a Reference Array
// }