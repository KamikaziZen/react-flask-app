import React from 'react';
import '../../App.css';
import '../ShowCase.css';
import { TitlebarImageList } from '../ImageList';

const itemData = [
  {
    img: 'photos/photo_2023-06-22_18-03-20.jpg',
    title: 'Silicone Gloves',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'photos/photo_2023-06-22_18-03-19.jpg',
    title: 'Petri Dishes',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'photos/photo_2023-06-22_18-03-17.jpg',
    title: 'Sealing Tape',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'photos/photo_2023-06-22_18-03-15.jpg',
    title: 'Test Tubes',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'photos/photo_2023-06-22_18-03-14.jpg',
    title: 'Test Tubes',
    author: '@tjdragotta',
  },
  {
    img: 'photos/photo_2023-06-22_18-03-13.jpg',
    title: 'Tweezers',
    author: '@katie_wasserman',
  },
  {
    img: 'photos/photo_2023-06-22_18-03-12.jpg',
    title: 'Soil Sample Container',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'photos/photo_2023-06-22_18-03-12 (2).jpg',
    title: 'Bacteriological media',
    author: '@shelleypauls',
  },
  {
    img: 'photos/photo_2023-06-22_18-03-11.jpg',
    title: 'Toothpicks',
    author: '@peterlaster',
  },
  {
    img: 'photos/photo_2023-06-22_18-03-11 (2).jpg',
    title: 'Test Containers',
    author: '@southside_customs',
    cols: 2,
  },
  {
    img: 'photos/photo_2023-06-22_18-03-09.jpg',
    title: 'Pasteur Pipettes',
    author: '@peterlaster',
  },
  {
    img: 'photos/photo_2023-06-22_18-03-10.jpg',
    title: 'Alcochol Wipes',
    author: '@peterlaster',
  },
  {
    img: 'photos/photo_2023-06-22_18-03-08.jpg',
    title: 'Pipette Tips',
    author: '@peterlaster',
  },
  {
    img: 'photos/photo_2023-06-22_18-03-07 (2).jpg',
    title: 'Distilled Water',
    author: '@peterlaster',
  },
]

function ContentsPage() {
	return (
		<div className='showcase'>
			<h1>ScienceBox Contents</h1>
			<br /><br />
			<div class="cards__container" >
	                	<TitlebarImageList itemData={itemData} />
        		</ div>
		</div>
	)
};

export default ContentsPage;
