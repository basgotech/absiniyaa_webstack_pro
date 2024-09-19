//not found

const notFound = (req, res, next) => {
    const error = new error(`not found : ${req.orginalUrl}`);
    res.status(404);
    next(error);
};

//Error Handler 
const errorHandler = (err, req, next) => {
    const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
    res.status(statuscode);
    res.json({
        message: err?.message,
        stack: err?.stack,
    });
};

module.exports = {errorHandler,notFound};