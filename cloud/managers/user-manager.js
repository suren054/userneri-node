const mongoose = require("mongoose");
const User = require("../models/user");

class UserManager {
    static async allUsers(req, res) {
        User.find().then((user) => {
            res.send(user);
        });
    }

    static async editUser(req, res) {
        await User.findOneAndUpdate({ _id: req.body.data.id }, {
            firstname: req.body.data.firstname,
            lastname: req.body.data.lastname,
            email: req.body.data.email,
            role: req.body.data.role,
        }, { new: true });
        let users = await User.find()
        res.send(users)
    }
    static async deleteUser(req, res) {
        let currentUser = await User.findOne({ _id: req.body.userId });
        await User.deleteOne({ _id: currentUser._id });
    }

    static async addNewUser(req, res) {
        let user
        if (req.body.data.role == 'Art Manager') {

            user = new User({
                firstname: req.body.data.firstname,
                lastname: req.body.data.lastname,
                email: req.body.data.email,
                role: req.body.data.role,
                art_manager: true
            });
        } else {
            user = new User({
                firstname: req.body.data.firstname,
                lastname: req.body.data.lastname,
                email: req.body.data.email,
                role: req.body.data.role,
            });
        }
        user.save((err, res) => {
            if (!err) {
                console.log(res);
            } else {
                console.log(err);
            }
        });


        res.send(user)
    }
    static async filterByRole(req, res) {
        let users
        if (req.body.role === "all") {
            users = await User.find();
        } else {
            users = await User.find({ role: req.body.role });
        }
        res.send(users);
    }
    static async inputSearch(req, res) {
        let users = await User.find({
            $or: [{ firstname: { $regex: req.body.text } },
                { lastname: { $regex: req.body.text } },
                { email: { $regex: req.body.text } },
                { role: { $regex: req.body.text } }
            ]
        });
        res.send(users)
    }
}

module.exports = UserManager;