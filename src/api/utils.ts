import bcrypt from "bcryptjs";

export function generateSessionKey() {
  const key = String(Math.random() * 1000 + Math.random() * 1000);
  return bcrypt.hashSync(key, 10);
}
