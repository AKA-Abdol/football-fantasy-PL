export interface ServiceResponseInterface<T> {
    isSuccessful: boolean,
    res: T
}

export interface ServiceErrorInterface extends ServiceResponseInterface<string> {
    errorType: string
}

export const ServiceError = (errorType: string, message: string) => {
    const error: ServiceErrorInterface = {
        isSuccessful: false,
        errorType: errorType,
        res: message
    }
    return error;
}

export const ServiceResponse = <T>(res: T) => {
    const response: ServiceResponseInterface<T> = {
        isSuccessful: true,
        res: res
    }
    return response;
}



export interface ErrorData {
    errorType: string,
    message: string
}