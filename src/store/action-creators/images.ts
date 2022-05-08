import axios from "axios"
import { Dispatch } from "redux"
import { ImagesAction, ImagesActionTypes } from "../../types/images"

export const fetchImages = () => {
    return async (dispatch: Dispatch<ImagesAction>) => {
        try {
            dispatch({type: ImagesActionTypes.FETCH_IMAGES})
            const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=100&page=98&order=DESC&api_key=26f8c6b0-19ea-42e6-a534-cb0acab03699')
            const data = response.data
            // добавляем поле для отслеживания лайка
            const myData = data.map((item: typeof Image) => {
                let like = false
                return {...item, like}
            })
            dispatch({type: ImagesActionTypes.FETCH_IMAGES_SUCCESS, payload: myData})
        } catch(e: any) {
            dispatch({type: ImagesActionTypes.FETCH_IMAGES_ERROR, payload: e.message})
        }
    }
}

export const filterImages = (filterImages: typeof Image[]) => {
    return (dispatch: Dispatch<ImagesAction>) => {
        dispatch({type: ImagesActionTypes.FILTER_IMAGES, payload: filterImages})
    }
}

export const showOnlyLikedImages = (likedImages: typeof Image[]) => {
    return (dispatch: Dispatch<ImagesAction>) => {
        dispatch({type: ImagesActionTypes.SHOW_ONLY_LIKED_IMAGES, payload: likedImages})
    }
}

export const returnImages = (likedImages: typeof Image[]) => {
    return (dispatch: Dispatch<ImagesAction>) => {
        dispatch({type: ImagesActionTypes.RETURN_IMAGES, payload: likedImages})
    }
}