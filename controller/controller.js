const { Testusers } = require("../models/model");

// Add The User In Mongoose Database
async function handlenewUser(req, res) {
  try {
    const { fullName, Age, phoneNumber } = req.body;
    const entry = await Testusers.create({
      fullName: fullName,
      Age: Age,
      phoneNumber:phoneNumber,
    });
    console.log("User saved successfully:", entry);
    res.status(201).json({ message: "User created successfully", data: entry });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "Internal server error user not registered" });
  }
}

// handle Fetching All Users From Mongoose Database
async function getAllUsersFromDB(req, res) {
  try {
    const allUsers = await Testusers.find({});
    console.log("All users:", allUsers);
    const userListHTML = `<ul>${allUsers
      .map(
        (user) =>
          `<li>${user.fullName} - Age: ${user.Age} : Phone: ${user.phoneNumber} </li>`
      )
      .join("")} </ul>`;
    return res.send(userListHTML);
  } catch (error) {
    console.error("Error retrieving users:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
// handle The Update Users 
async function handleUpadeUserById(req, res) {
  const body = req.body;
  const updateUser = await Testusers.findByIdAndUpdate(
    req.params.id,
    {
      fullName: body.fullName,
      Age: body.Age,
      phoneNumber: body.phoneNumber,
    },
    { new: true }
  );

  if (!updateUser) {
    return res.status(404).json({ mg: "user not found" });
  }

  console.log(`user update sucess id - ${req.params.id}`);
  return res
    .status(200)
    .json({ msg: `user Sucessfully Upadted ${req.params.id}` });
}

// Fetch The Individual User From Mongoose Database By Id
async function getUserFromId(req, res) {
  const getuser = await Testusers.findById(req.params.id);
  const html = `<ul>
    
    <li>NAME - ${getuser.fullName}</li>
    <li>AGE - ${getuser.Age}</li>
    <li>PHONE - ${getuser.phoneNumber}</li>
    
    </ul>`;
  return res.status(200).send(html);
}

// Handle The Delete User Function
async function handleDeleteUser(req, res) {
  const body = req.body;
  const userToDelete = await Testusers.findById(req.params.id);

  if (!userToDelete) {
      return res.status(404).json({ error: "User not found" });
  }

  const delUser = await Testusers.findByIdAndDelete(req.params.id);
  if (!delUser) {
    return res.status(500).json({ error: "Failed to delete user" });
  }

  const html = `<ul>
    <li>UserID - ${req.params.id}  </li>
     <li>USER - ${userToDelete.fullName} is Deleted </li>
      </ul>`;
  console.log(
    `User ID - ${req.params.id} (${userToDelete.fullName}) is deleted`
  );
  return res.status(200).send(html);
}


// Export All The Functon for Router
module.exports = {
  handlenewUser,
  getAllUsersFromDB,
  handleUpadeUserById,
  getUserFromId,
  handleDeleteUser,
};
