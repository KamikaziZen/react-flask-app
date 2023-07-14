import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import '../App.css';

export default function MasonryImageList() {
  return ( 
    <Box sx={{ width: 800, align: 'center' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'images/sirius.png',
    title: 'sirius',
  },
  {
    img: 'images/umnaya.png',
    title: 'Books',
  },
  {
    img: 'images/quantorium-logo.png',
    title: 'Sink',
  },
  {
    img: 'images/gpu.jpg',
    title: 'Kitchen',
  },
  {
    img: 'images/skoltech.jpeg',
    title: 'Kitchen',
  },
];