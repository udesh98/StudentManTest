const router = require('express').Router();
let Student = require("../models/Student");

//Insert student
router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
        res.json("Student Added");
    }).catch((err)=>{
        console.log(err);
    })
})

//View all students
router.route("/").get((req,res)=>{
    Student.find().then((x)=>{
        res.json(x);
    }).catch((err)=>{
        console.log(err);
    })
})

//Update student (with async function)
router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {name, age, gender} = req.body;       //Destructuring

    const updateStudent = {
        name,
        age,
        gender
    }

    await Student.findByIdAndUpdate(userId, updateStudent).then((up)=>{
        res.status(200).send({status: "User updated!", user: up});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data!", error: err.message});
    })
    // res.status(200).send({status: "User updated!", user: update});
})

//Delete student
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    const student = await Student.findByIdAndDelete(userId).then((stu)=>{
        res.status(200).send({status: "User deleted!", user: stu});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with deletion!", error: err.message});
    })
})

//Select a particular user
router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user = await Student.findById(userId).then((user)=>{
        res.status(200).send({status: "User fetched!", user: user});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with selection!", error: err.message});
    })
})

//  http://localhost:8070/student

module.exports = router;