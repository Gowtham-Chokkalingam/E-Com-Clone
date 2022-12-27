import User from "../model/userSchema.js";

export const userSignup = async (req, res) => {
  console.log('userSignup:', req.body)
  try {
    const userExist = await User.findOne({ email: req.body.email});
    console.log('userExist:', userExist)
    

    if (userExist) {
      return res.status(401).json({ message: `Usernamer ${req.body.username} alredy exist` });
    }

    const user = req.body;
    console.log('user:', user)

    const newUser = new User(user);

    await newUser.save();

    res.status(200).json({ message: user, success:true });
  } catch (error) {
    console.log("Error at backend SignupAPI Route", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('eq.body:', req.body)

    const userExist = await User.findOne({ email: username, password: password });

    if (userExist) {
      return res.status(200).json({data:userExist});
    }else{

        return res.status(401).json("Invalid Login")
    }
  } catch (error) {
    console.log('error:', error.message)

    res.status(500).json("Login API Error",error.message)

  }
};
