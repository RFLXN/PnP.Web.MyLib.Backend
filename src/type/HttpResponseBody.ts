interface HttpResponseBody {
    info: {
        success: boolean;
        message: string;
    }
    data?: any;
}

export default HttpResponseBody;
