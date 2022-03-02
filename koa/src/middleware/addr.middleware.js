const {addressFormatError} = require("../constant/err.type");

const validator =  (rules) => {
    return async (ctx,next) => {
        try {
            ctx.verifyParams(rules);
        } catch (error) {
            console.error(error);
            addressFormatError.result = error;
            return ctx.app.emit("error",addressFormatError,ctx);
        }
    
        await next();
    }
}

module.exports = {
    validator,
}