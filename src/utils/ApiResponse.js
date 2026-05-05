class ApiResponse {
    constructor(statusCode,data,message="Success") {
        this.statusCode=statusCode;
        this.message = message;
        this.data = data;
        //here we take data as a parameter because we want to send the data in the response to the client and we will set the success property based on the status code if the status code is less than 400 then we will set the success property to true otherwise we will set it to false because status codes less than 400 indicate success and status codes greater than or equal to 400 indicate failure
        this.success = statusCode <400;
    }   
}
export { ApiResponse };