import { ImagesAction, ImagesActionTypes, ImagesState } from "../../types/images"


const initialState: ImagesState = {
    images: [],
    loading: false,
    error: null
}

export const imagesReducer = (state = initialState, action: ImagesAction): ImagesState => {
    switch (action.type) {
        case ImagesActionTypes.FETCH_IMAGES:
            return {loading: true, error: null, images: []}
        case ImagesActionTypes.FETCH_IMAGES_SUCCESS:
            return {loading: false, error: null, images: action.payload}
        case ImagesActionTypes.FETCH_IMAGES_ERROR:
            return {loading: false, error: action.payload, images: []}
        default:
            return state
    }
}