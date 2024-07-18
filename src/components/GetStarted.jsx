import React from 'react';
import {
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    styled
} from '@mui/material';
import Title from './Title';

// Images
import dwa from '../assets/dwa.jpg';
import kasi from '../assets/kasi.jpg';
// Add two more images or use existing ones
import ram from '../assets/ram.jpg';
import tri from '../assets/tri.jpg';

const GetStarted = () => {

    const cards = [
        {
            img: dwa,
            description: 'Dwarka is believed to have been the first capital of Gujarat. The city  name literally means the “gateway to heaven” in Sanskrit, as Dwar means “gate” and ka references “Brahma”'
        },
        {
            img: kasi,
            description: 'The temple is a Hindu pilgrimage site and is one of the twelve Jyotirlinga shrines. The presiding deity is known by the names Vishwanath and Vishweshwara '
        },
        {
            img: ram,
            description: 'Rameswaram is the terminus of the railway line from Chennai and Madurai. Together with Varanasi, it is considered to be one of the holiest places in India to Hindus and is part of the Char Dham pilgrimage.'
        },
        {
            img: tri,
            description: 'Tirupati is known as the abode of the Hindu god Venkateshvara, Lord of Seven Hills. '
        }
    ];

    const StyledCard = styled(Card)({
        maxWidth: 345,
        margin: 'auto'
    });

    const CustomTypography = styled(Typography)({
        fontSize: '1rem',
        textAlign: 'start',
        color: '#515151',
    });

    return (
        <Grid container spacing={4} sx={{ py: 10, px: 2 }}>
            {cards.map((card, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <StyledCard>
                        <CardMedia
                            component="img"
                            height="140"
                            image={card.img}
                            alt="Image"
                        />
                        <CardContent>
                            <CustomTypography variant="body2" color="text.secondary">
                                {card.description}
                            </CustomTypography>
                        </CardContent>
                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    );
}

export default GetStarted;
