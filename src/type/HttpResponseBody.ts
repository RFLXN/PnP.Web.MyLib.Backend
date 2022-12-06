interface HttpResponseBody<T> {
    info: {
        success: boolean;
        message: string;
    }
    data?: T;
}

export default HttpResponseBody;
