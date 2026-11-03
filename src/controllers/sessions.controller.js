export const sessionCheck = async (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Modulo de sesiones inicializado"
    });
};
