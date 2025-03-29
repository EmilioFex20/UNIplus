import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Método no permitido" });

  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });

  await connectToDatabase();

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Usuario no encontrado" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({ message: "Contraseña incorrecta" });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 604800,
      sameSite: "strict",
      path: "/",
    })
  );

  res.status(200).json({ message: "Inicio de sesión exitoso" });
}
