import React, { Component, Fragment } from 'react';
import Gallery from 'react-grid-gallery';


const IMAGES =
	[{
			src: require('../images/gallery/01.jpg'),
			thumbnail: require('../images/gallery/01.jpg'),
			thumbnailWidth: 314
			
	},
	{
			src: require('../images/gallery/02.jpg'),
			thumbnail: require('../images/gallery/02.jpg'),
			thumbnailWidth: 314
			
	},
	
	{
			src: require('../images/gallery/03.jpg'),
			thumbnail: require('../images/gallery/03.jpg'),
			thumbnailWidth: 314
	},

	{
		src: require('../images/gallery/04.jpg'),
		thumbnail: require('../images/gallery/04.jpg'),
		thumbnailWidth: 314
	},
	{
		src: require('../images/gallery/05.jpg'),
		thumbnail: require('../images/gallery/05.jpg'),
		thumbnailWidth: 314
	},
	{
			src: require('../images/gallery/06.jpg'),
			thumbnail: require('../images/gallery/06.jpg'),
			thumbnailWidth: 314
	},
	{
		src: require('../images/gallery/07.jpg'),
		thumbnail: require('../images/gallery/07.jpg'),
		thumbnailWidth: 314
	},
	{
		src: require('../images/gallery/08.jpg'),
		thumbnail: require('../images/gallery/08.jpg'),
		thumbnailWidth: 314
		
},
{
		src: require('../images/gallery/09.jpg'),
		thumbnail: require('../images/gallery/09.jpg'),
		thumbnailWidth: 314
		
},

{
		src: require('../images/gallery/10.jpg'),
		thumbnail: require('../images/gallery/10.jpg'),
		thumbnailWidth: 314
},

{
	src: require('../images/gallery/11.jpg'),
	thumbnail: require('../images/gallery/11.jpg'),
	thumbnailWidth: 314
},
{
	src: require('../images/gallery/12.jpg'),
	thumbnail: require('../images/gallery/12.jpg'),
	thumbnailWidth: 314
},
{
		src: require('../images/gallery/13.jpg'),
		thumbnail: require('../images/gallery/13.jpg'),
		thumbnailWidth: 314
},
{
	src: require('../images/gallery/14.jpg'),
	thumbnail: require('../images/gallery/14.jpg'),
	thumbnailWidth: 314
},

{
	src: require('../images/gallery/15.jpg'),
	thumbnail: require('../images/gallery/15.jpg'),
	thumbnailWidth: 314
	
},
{
	src: require('../images/gallery/16.jpg'),
	thumbnail: require('../images/gallery/16.jpg'),
	thumbnailWidth: 314
	
},



{
src: require('../images/gallery/18.jpg'),
thumbnail: require('../images/gallery/18.jpg'),
thumbnailWidth: 314
},
{
	src: require('../images/gallery/17.jpg'),
	thumbnail: require('../images/gallery/17.jpg'),
	thumbnailWidth: 314
},

{
	src: require('../images/gallery/20.jpg'),
	thumbnail: require('../images/gallery/20.jpg'),
	thumbnailWidth: 314
},
{
src: require('../images/gallery/21.jpg'),
thumbnail: require('../images/gallery/21.jpg'),
thumbnailWidth: 314
},

{
	src: require('../images/gallery/23.jpg'),
	thumbnail: require('../images/gallery/23.jpg'),
	thumbnailWidth: 314
	
},



{
src: require('../images/gallery/25.jpg'),
thumbnail: require('../images/gallery/25.jpg'),
thumbnailWidth: 314
},
{
src: require('../images/gallery/26.jpg'),
thumbnail: require('../images/gallery/26.jpg'),
thumbnailWidth: 314
},
{
	src: require('../images/gallery/27.jpg'),
	thumbnail: require('../images/gallery/27.jpg'),
	thumbnailWidth: 314
},
{
src: require('../images/gallery/28.jpg'),
thumbnail: require('../images/gallery/28.jpg'),
thumbnailWidth: 314
},
{
	src: require('../images/gallery/19.jpg'),
	thumbnail: require('../images/gallery/19.jpg'),
	thumbnailWidth: 314
	},
	{
		src: require('../images/gallery/24.jpg'),
		thumbnail: require('../images/gallery/24.jpg'),
		thumbnailWidth: 314
	}
]

export default function imagegallery() {
	return (
		<Fragment>
		<section className="salesforce_team">
			
	   <Gallery images={IMAGES}/>
		
		</section>
		<div className="clearfix" />
	</Fragment>
	)
}



