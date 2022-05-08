import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchImages } from '../../store/action-creators/images';
import { Image } from '../../types/oneImage';

const ImagesList: FC = () => {
    const dispatch = useAppDispatch()
    const {images, error, loading} = useTypedSelector(state => state.images)

    useEffect(() => {
        dispatch<any>(fetchImages())
    }, [])

    return (
        <div>
            {images.map((image: Image) =>
                <div>{image.id}</div>
            )}
        </div>
    );
};

export default ImagesList;