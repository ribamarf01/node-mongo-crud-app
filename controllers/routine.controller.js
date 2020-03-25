const Routine = require('../models/routine.model')

exports.test = async (req, res) => {
    await res.send("Ola controller")
}

exports.index = async (req, res) => {
    const routine = await Routine.find()
    
    return res.json(routine)
}

exports.create = (req, res) => {
    const routine = new Routine({
        title: req.body.title,
        desc: req.body.desc,
    })
    routine.save((err) => {
        if(err) return err

        res.send("Registro feito com sucesso")
    })
}

exports.details = (req, res) => {
    Routine.findById(req.params.id, (err, routine) => {
        if(err) return err

        res.send(routine)
    })
}

exports.edit = (req, res) => {
    Routine.findByIdAndUpdate(req.params.id, { $set: req.body}, (err, routine) => {
        if (err) return err
        res.send('Rotina atualizada')
    })
}

exports.delete = (req, res) => {
    Routine.findByIdAndRemove(req.params.id, (err) => {
        if (err) return err
        res.send("Deletado com sucesso")
    })
}