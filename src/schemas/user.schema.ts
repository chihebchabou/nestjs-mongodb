import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface UserInterface extends Document {
  username: string;
  displayName?: string;
  avatarUrl?: string;
  logId(): void; // Custom method signature
}

@Schema({ timestamps: true })
export class User {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ required: false })
  displayName?: string;

  @Prop({ required: false })
  avatarUrl?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Add a custom methods
UserSchema.methods.logId = function () {
  console.log(this.id);
};
