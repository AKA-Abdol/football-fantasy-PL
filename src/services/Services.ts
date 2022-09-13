export interface ServiceResponse<T> {
    isSuccessful: boolean,
    res: T
}

export interface ErrorData {
    message: string
}