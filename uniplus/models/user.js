import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  coursesCompleted: {type:Number,default: 0, required:false},
  modulesCompleted: {type:Number,default: 0, required:false},
  economiaState:{type: Number, default: 0,required: false },
  finanzasState:{type: Number, default: 0,required: false },
  creatividadState:{type: Number, default: 0,required: false },
  SaludState:{type: Number, default: 0,required: false },
  DesarrolloState:{type: Number, default: 0,required: false },
  tecnologiaState:{type: Number, default: 0,required: false },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
