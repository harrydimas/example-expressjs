const dfltStatus = true;
const dfltCode = 200;
const dfltMessage = "Success";
const dfltData = null;

const BaseResponse = (status, code, message, data) => {
    if(status == null) status = dfltStatus;
    if(code == null) code = dfltCode;
    if(message == null) message = dfltMessage;
    if(data == null) data = dfltData;

    return { status, code, message, data };
}

module.exports = BaseResponse;