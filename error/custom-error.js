class customAPIError extends Error
{
    constructor(code, msg){
        super(msg)
        this.statusCode = code
    }
}

module.exports = customAPIError