import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  coursesCompleted: {type:Number,default: 0, required:false},
  modulesCompleted: {type:Number,default: 0, required:false},
  economiaState:{type: String, default: "/",required: false },
  finanzasState:{type: String, default: "/",required: false },
  creatividadState:{type: String, default: "/",required: false },
  saludState:{type: String, default: "/",required: false },
  desarrolloState:{type: String, default: "/",required: false },
  tecnologiaState:{type: String, default: "/",required: false }
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
