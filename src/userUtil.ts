import bcrypt from 'bcrypt';

export const hash = async (data) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(data, salt);
  return hashed;
}

export const isCorrectPassowrd = async (a, b) => {
  return await bcrypt.compare(a, b);
}
