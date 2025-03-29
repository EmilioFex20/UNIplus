import { connectToDatabase } from "@/lib/db";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Método no permitido" });

  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });

  await connectToDatabase();

  const userExists = await User.findOne({ email });
  if (userExists)
    return res.status(400).json({ message: "El usuario ya existe" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword });

  await newUser.save();
  res.status(201).json({ message: "Usuario creado correctamente" });
}
