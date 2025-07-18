class ApiResponse{
    constructor(success = true,message = "Success",stastusCode,data){

        this.stastusCode = stastusCode;
        this.data = data;
        this.message = message;
        this.success = success;
}

static success(message,data = null){
    return new ApiResponse(message,data);
}

static error(message){
    return new ApiResponse(false,message)
}

}

export {ApiResponse}