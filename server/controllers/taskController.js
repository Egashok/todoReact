const { Task } = require('../models/models')
const ApiError = require('../error/ApiError');

class TaskController {
    async create(req, res) {

        try {

            let { date, title, main, time } = req.body
            const task = await Task.create({ date, title, main, time })

            return res.json(task)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }


    }
    async remove(req, res) {
        let itemId  = req.params;

        try {
            const deletedItem = await Task.destroy(
                {
                    where: itemId
                },
            )

            if (!deletedItem) {
                return res.status(404).json({ message: 'Элемент не найден' });
            }

            res.status(200).json({ message: 'Элемент успешно удален' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ошибка сервера' });
        }
    };

    async getAll(req, res) {
        let { date } = req.params
        let task = await Task.findAll(
            {
                where: { date }
            },
        )
        return res.json(task)
    }


    async getOne(req, res) {
        let { id } = req.params
        const task = await Task.findOne(
            {
                where: { id }
            },
        )
        return res.json(task)
    }
}



module.exports = new TaskController()