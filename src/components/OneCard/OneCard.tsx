import React, { FC, useContext, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, IconButton, Tooltip } from '@mui/material';
import { Image } from '../../types/oneImage';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { DataContext } from '../../context';

interface CardProps {
    image: Image,
    handleDelete: (image: Image) => void,
    likedImages: Image[],
    setLikedImages: (likeImages: Image[]) => void,
}

const OneCard: FC<CardProps> = ({image, handleDelete, likedImages, setLikedImages}) => {
    const {showLiked} = useContext(DataContext)

    // для подсвечивания иконки при клике
    const [like, setLike] = useState(false)
    // по клику ставим лайк
    const handleLike = (image: Image) => {
        image.like = !image.like
        setLike(!like)
    }
    // и пушим в массив лайкнутых
    useEffect(() => {
        if (!like) {
            likedImages.map((like: Image) => {
                if (image.id === like.id) {
                    return setLikedImages(likedImages.filter(i => i.id !== image.id))
                }
            })
        } else {
            setLikedImages([...likedImages, image])
        }
    }, [like])

    return (
        <Card variant='elevation' color='success' sx={{ 
        maxWidth: 300, 
        maxHeight: 400, 
        minHeight: 400, 
        minWidth: 300, 
        p: 2, 
        m: 1,
        color: '#cf2735'
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={image.url}
                    alt="///"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {image.id}
                    </Typography>
                </CardContent>
                {!showLiked &&
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon onClick={() => handleLike(image)} color={image.like ? 'success' : 'primary'} />
                        </IconButton>
                        <Tooltip title="Delete image?" placement="right-start">
                            <IconButton>
                                <DeleteIcon onClick={() => handleDelete(image)} />
                            </IconButton>
                        </Tooltip>
                    </CardActions>
                    }
                    <Tooltip title="Delete from select?" placement="right-start">
                        <IconButton>
                            <DeleteIcon onClick={() => handleDelete(image)} />
                        </IconButton>
                    </Tooltip>
            </CardActionArea>
        </Card>
    );
};

export default OneCard;