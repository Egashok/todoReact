const {Task} = require('../models/models')
const ApiError = require('../error/ApiError');

class TaskController {
    async create(req, res) {
        let {date,title,main,time} = req.body
        const task = await Task.create({date,title,main,time})

        return res.json(task)
    }

    async getAll(req, res) {
        let {date} = req.params
        let  task = await Task.findAll(
            {
                where: {date}   
            },
        )
        return res.json(task)
        }
        

    async getOne(req, res) {
    let {id} = req.params
    const task = await Task.findOne(
        {
            where: {id}
        },
    )
    return res.json(task)
    }
}



module.exports=new TaskController()