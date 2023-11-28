import User from "../models/user.model.js";

export const signUp = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json("User Created succesfully");
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const validUser = await User.findOne({ username });
    if (!validUser) return res.status(404).json({ error: "User Not Found!" });
    if (password !== validUser.password)
      return res.status(404).json({ error: "Invalid Credential!" });

    res.status(200).json({message : "Sign in success"})

  } catch (error) {
    next(error);
  }
};
