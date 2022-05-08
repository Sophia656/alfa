import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Image } from '../../types/oneImage';

interface CardProps {
    image: Image
}

const OneCard: FC<CardProps> = ({image}) => {
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
            </CardActionArea>
        </Card>
    );
};

export default OneCard;