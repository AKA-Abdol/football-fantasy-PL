export interface ServiceResponseInterface<T> {
    res: T
}

export interface ServiceSuccessInterface<T> extends ServiceResponseInterface<T> {
    isSuccessful: true
}

export interface ServiceErrorInterface extends ServiceResponseInterface<string> {
    isSuccessful: false,
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

export const ServiceSuccess = <T>(res: T) => {
    const response: ServiceSuccessInterface<T> = {
        isSuccessful: true,
        res: res
    }
    return response;
}

export interface ErrorData {
    errorType: string,
    message: string
}