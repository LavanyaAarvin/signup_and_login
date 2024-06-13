const express = require('express');
const sequelize = require('./database/db')
const Profile = require('./model/profile')

sequelize.sync().then(() => console.log("Database is connected...!!!!"));

const app = express();

app.use(express.json())

app.post('/users', async (req, res) => {
    console.log(".....1....");
    console.log("req.body >>>>> :", req.body);
    await Profile.create(req.body).then(() => {
        res.send("User Created successfully...!!!")
    })
})

app.get('/users', async (req, res) => {
    const users = await Profile.findAll();
    res.send(users)
})


app.get('/users/:id', async (req, res) => {
    const getUserId = req.params.id;
    const users = await Profile.findOne({
        where: {id: getUserId}
    })
    res.send(users)
})

app.put('/users/:id', async (req, res) => {
    const id = req.params.id;
    const users = await Profile.findOne({
        where: {id: id}
    })
    users.applicationName = req.body.applicationName;
    users.applicationOwner = req.body.applicationOwner;
    users.is_active = req.body.is_active

    await users.save();
    res.send("User Updated Successfully ...!!!")

})

app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    await Profile.destroy({
        where: {id: id}
    })
    res.send("User Deleted Successfully...!!")
})



app.listen(8001, () => {
    console.log("App is running");
})

