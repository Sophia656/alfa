import { Image } from "./oneImage"

export interface ImagesState {
    images: Image[],
    loading?: boolean,
    error?: null | string
}

export enum ImagesActionTypes {
    FETCH_IMAGES = 'FETCH_IMAGES',
    FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS',
    FETCH_IMAGES_ERROR = 'FETCH_IMAGES_ERROR',
    FILTER_IMAGES = 'FILTER_IMAGES',
    SHOW_ONLY_LIKED_IMAGES = 'SHOW_ONLY_LIKED_IMAGES',
    RETURN_IMAGES = 'RETURN_IMAGES'
}

interface FetchImagesAction {
    type: ImagesActionTypes.FETCH_IMAGES,
}

interface FetchImagesSuccessAction {
    type: ImagesActionTypes.FETCH_IMAGES_SUCCESS,
    payload: Image[]
}

interface FetchImagesErrorAction {
    type: ImagesActionTypes.FETCH_IMAGES_ERROR,
    payload: string
}

interface FilterImagesAction {
    type: ImagesActionTypes.FILTER_IMAGES,
    payload: Image[]
}

interface ShowOnlyLikedImagesAction {
    type: ImagesActionTypes.SHOW_ONLY_LIKED_IMAGES,
    payload: Image[]
}

interface ReturnImagesAction {
    type: ImagesActionTypes.RETURN_IMAGES,
    payload: Image[]
}

export type ImagesAction = FetchImagesAction | FetchImagesSuccessAction | FetchImagesErrorAction | FilterImagesAction | ShowOnlyLikedImagesAction | ReturnImagesAction