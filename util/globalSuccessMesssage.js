exports.sendResponse = (statusCode, message,res) => {
    return res.status(statusCode).json({
       error:false,
      message
    });
};

exports.sendResponseGet = (statusCode,res)=> {
    return res.status(statusCode).json({
       error:false
      // message,
    });
};

exports.sendResponseDelete = (statusCode,message,res) => {
    return res.status(statusCode).json({
       error:false,
      message
      // data,
    });
};