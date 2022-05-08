import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchImages, filterImages } from '../../store/action-creators/images';
import { Image } from '../../types/oneImage';
import OneCard from '../OneCard/OneCard';
import s from './ImagesList.module.css';
import { Alert, Box, CircularProgress } from '@mui/material';

const ImagesList: FC = () => {
    const dispatch = useAppDispatch()
    const {images, error, loading} = useTypedSelector(state => state.images)

    useEffect(() => {
        dispatch<any>(fetchImages())
    }, [])

    const handleDelete = (current: Image) => {
        dispatch<any>(filterImages(images.filter(image => image.id !== current.id)))
    }

    return (
        <div className={s.wrapper}>
            {loading && 
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            }
            {error && <Alert severity="error">{error}</Alert>}
            {images.map((image: Image) =>
                <OneCard key={image.id} image={image} handleDelete={handleDelete} />
            )}
        </div>
    );
};

export default ImagesList;