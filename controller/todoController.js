import { TodoModel } from "../models/todo-model.js";



export const getTodo = (req,res) =>{
    TodoModel.findAll()
    .then((data)=>{
      res.status(200).send(data)
    })
    .catch((err)=>console.log(err))
 }

 export const getTodoById = (req,res) =>{
    const id = req.params.id;
    TodoModel.findByPk(id)
    .then((data)=>res.status(200).send(data || 'Todo item not found'))
    .catch((err)=>console.log(err))
 }

export const postTodo = (req,res) =>{
    TodoModel.create({
        task_name:req.body.task_name,
        priority:req.body.priority
    })
    .then(()=>res.status(201).send({
        message:"Todo added"
    }))
    .catch(err=>console.log(err))
}

export const deleteTodo = (req,res)=>{
    const id = parseInt(req.params.id);
    TodoModel.destroy({where:{id:id}})
    .then(()=>res.status(201).send({
        message:"Todo item deleted"
    }))
    .catch((err)=>console.log(err));
}

export const updateTodo = (req,res) =>{
    const id = parseInt(req.params.id);
    TodoModel.update({ 
        task_name:req.body.task_name,
        priority:req.body.priority
     }, {
        where: {
        id:id
        }
      })
      .then(()=>res.send("Todo updated"))
      .catch((err)=>console.log(err))
}

export const getSearchText = (req,res) =>{
    const searchTxt = req.query.title;
    res.send(`The search Text is ${searchTxt}`);
    /* const results = await Model.findAll({
        where: {
          someAttribute: {
            [Op.like]: `%${searchQuery}%`
          }
        }
      }); */
}