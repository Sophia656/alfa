export interface ImagesState {
    images: any[],
    loading: boolean,
    error: null | string
}

export enum ImagesActionTypes {
    FETCH_IMAGES = 'FETCH_IMAGES',
    FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS',
    FETCH_IMAGES_ERROR = 'FETCH_IMAGES_ERROR'
}

interface FetchImagesAction {
    type: ImagesActionTypes.FETCH_IMAGES,
}

interface FetchImagesSuccessAction {
    type: ImagesActionTypes.FETCH_IMAGES_SUCCESS,
    payload: any[]
}

interface FetchImagesErrorAction {
    type: ImagesActionTypes.FETCH_IMAGES_ERROR,
    payload: string
}

export type ImagesAction = FetchImagesAction | FetchImagesSuccessAction | FetchImagesErrorAction