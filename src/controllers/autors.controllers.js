const AutorModel = require('../models/autor.model');

const getAllAutors = async (req, res) => {
    try {
        const [result] = await AutorModel.selectAllAutors();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}
const createAutors = async (req, res) => {
    try {
        const [result] = await AutorModel.insertAutor(req.body);
        const [autor] = await AutorModel.selectAutorById(result.insertId);
        res.json(autor[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getAutorById = async (req, res) => {
    try {
        const { autorId } = req.params;

        const [autor] = await AutorModel.selectAutorById(autorId);
        res.json(autor[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}


const updateAutor = async (req, res) => {
    try {
        const { autorId } = req.params;
        const [result] = await AutorModel.updateAutorById(autorId, req.body);

        if (result.changedRows == 0) {
            res.status(404).send('Autor not found');
        } else {
            res.status(200).send("autor modified successfuly");
        }
    } catch (error) {
        res.json({ fatal: error.message });
    }

}


const deleteAutor = async (req, res) => {
    try {
        const { autorId } = req.params;
        const [result] = await AutorModel.deleteAutorById(autorId);

        if (result.affectedRows == 0) {
            res.status(404).send('Autor not found');
        } else {
            res.status(200).send("autor deleted successfuly");
        }
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

module.exports = { getAllAutors, createAutors, getAutorById, deleteAutor, updateAutor }