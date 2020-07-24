import React from 'react';
import styles from './Home.modules.css';
import { Grid, Card, CardMedia, CardActionArea,Button } from '@material-ui/core';
import Attributes from './Attributes'
import Alert from './Alert'

function Home() {
	return (
		<div>
			<div>
				<img
					src="https://d2ob0iztsaxy5v.cloudfront.net/holdingimages/hp-desktop-adidas-week-24_herodesks.jpg"
					alt="bgc"
				/>
				{/* <h1 className='hero-heading'>meet the<br /> latest</h1> */}
			</div>
			<div>
				<h1 className="heading">Choose your icon</h1>
				<Grid container>
					<Grid item xs={12} sm={6}>
						<Card className="catagory-pic">
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Men shoes"
									height="200px"
									image="https://www.converse.com.au/media/wysiwyg/D_HP_Limited_Edition_Rokit.jpg"
								/>
                                <Button variant="contained" color="secondary" className='shop-btn'>Shop Now</Button >
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Card className="catagory-pic">
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Women shoes"
                                    image="https://i.pinimg.com/originals/bd/8d/16/bd8d168853d3cefca9b9c4372b2d143c.jpg"
                                    className="image"
								/>
                                <Button variant="contained" color="secondary" className='shop-btn'>Shop Now</Button >

							</CardActionArea>

						</Card>
					</Grid>
				</Grid>
			</div>
            <Attributes />
			<Alert />
		</div>
	);
}

export default Home;
