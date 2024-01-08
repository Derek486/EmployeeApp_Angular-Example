// Middleware que ejecuta los esquemas de request
const validateMiddleware = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        return res
            .status(400)
            .json({ errors: error.errors.map((error) => (
                {
                    [error.path]: error.message
                }
            )) });
    }
};

module.exports = validateMiddleware