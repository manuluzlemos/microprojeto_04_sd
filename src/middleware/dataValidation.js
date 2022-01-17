class DataValidation {
    static validate = (req, res, next) => {
        const produto = req.body;

        if (!produto.codigo) {
            return res.status(400).json({
                status: 400,
                error: 'O produto precisa de um codigo!'
            });
        }

        next();
    }
}

module.exports = DataValidation;