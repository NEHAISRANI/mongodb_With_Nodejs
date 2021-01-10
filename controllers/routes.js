const Employee=require('../model/coursemodel')


//get employee data

const index=(req,res,next)=>{
    Employee.find()
    .then(name=>{
        res.json({
            name
        })
    })
    .catch(error=>{
        res.json({
            message:"an error occured"
        })
    })
}

//post employee data
const store=(req,res,next)=>{
    console.log(req.body)
    let employee=new Employee({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    }) 
    employee.save()
    .then(response =>{  
        res.json({  
            message:'employee added sucessfully'
        })
    })
    .catch(error=>{
        res.json({
            message:'an error occcured'
        })
    })
}

//update employee data by id
const update=(req,res,next)=>{
    let employeeID=req.body.employeeID

    let updateData={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    }

    Employee.findByIdUpdate(employeeID,{$set:updateData})
    .then(()=>{
        res.json({
            message:'Employee update sucessfully'
        })
    })
    .catch(error =>{
        res.json({
            message:'an error occured'
        })
    })
}

// delete employee data by id
const destroy=(req,res,next)=>{
    let employeeID=req.body.employeeID
    Employee.findOneAndRemove(employeeID)
    .then(()=>{
        req.json({
            message:'employee deleted sucessfully!'
        })
    })
    .catch(error=>{
        res.json({
            message:'an error occures!'
    })
})
}
  
module.exports={
    index,
    store,
    update,
    destroy

} 