// Info Level Logger -> Maybe Change to Winston?
const info = (msg?: any) => {
    console.log(msg);
};

// Error Level Logger -> Maybe Change to Winston?
const error = (msg?: any) => {
    console.error(msg);
};

/**
 * Logger Wrapper
 */
const logger = {
    info,
    error
};

export default logger;
