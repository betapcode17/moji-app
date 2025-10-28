import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
     const { username, password, email, firstName, lastName } = req.body;
     if(!username  || !password || !email || !lastName || !firstName)






  } catch (error) {}
};
