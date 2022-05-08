import React, { FC, useContext, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchImages, filterImages, returnImages, showOnlyLikedImages } from '../../store/action-creators/images';
import { Image } from '../../types/oneImage';
import OneCard from '../OneCard/OneCard';
import s from './ImagesList.module.css';
import { Alert, Box, CircularProgress } from '@mui/material';
import { DataContext } from '../../context';

const ImagesList: FC = () => {
    const dispatch = useAppDispatch()
    const {images, error, loading} = useTypedSelector(state => state.images)
    const {setShowLiked, showLiked} = useContext(DataContext)

    // стейт для лайнутых картинок
    const [likedImages, setLikedImages] = useState<any[]>([])
    // чтобы при возврате на все картики показывались лайкнутые
    const [currentImages, setCurrentImages] = useState<any[]>([])

    useEffect(() => {
        dispatch<any>(fetchImages())
    }, [])

    // по клику - удаляем картинку
    const handleDelete = (current: Image) => {
        dispatch<any>(filterImages(images.filter(image => image.id !== current.id)))
    }

    // показать только лайкнутые/все
    useEffect(() => {
        if (showLiked) {
            // запоминаем состояние чтобы при возвращении не пропали лайки
            setCurrentImages(images)
            dispatch<any>(showOnlyLikedImages(likedImages))
        } else {
            dispatch<any>(returnImages(currentImages))
        }
    }, [showLiked])

    return (
        <div className={s.wrapper}>
            {loading && 
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            }
            {error && <Alert severity="error">{error}</Alert>}
            {images.map((image: Image) =>
                <OneCard
                key={image.id}
                image={image}
                handleDelete={handleDelete}
                likedImages={likedImages}
                setLikedImages={setLikedImages}
                />
            )}
        </div>
    );
};

export default ImagesList;