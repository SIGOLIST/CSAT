export function errorHandler(err, req, res, next) {
    err.status = err.status || 500;
    console.log(`Error on request ${req.method} | ${req.url} | ${err.status}`);
    console.log(err.stack || `${err.code} \n ${err.message}`);
    err.message = err.status == 500 ? 'Server Dead.' : err.message;
    res.status(err.status).send(err.message);
}

export function error(status: number, message: string) {
    let err: any = new Error(message);
    err.status = status;
    throw err;
}

export let wrap = fn => (req, res, next) => fn(req, res, next).catch(next);
