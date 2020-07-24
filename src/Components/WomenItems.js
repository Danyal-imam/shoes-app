import React from 'react';
import { WomenData } from './ProductsData';
import { Link } from 'react-router-dom';
import { makeStyles, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		margin: ' 0 10px 20px 10px'
	},
	description: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	link: {
		textDecoration: 'none'
	},
	bg: {
	}
});

function WomenItems() {
	const classes = useStyles();

	return (
		<div className={classes.bg}>
			<Grid container justify="center">
				{Object.entries(WomenData).map(([ womenId, { womenProductId, img } ]) => {
					return (
						<div>
							<Link to={`/women/shoes/${womenId}`} className={classes.link}>
								<Card className={classes.root}>
									<CardActionArea>
										<CardMedia
											component="img"
											alt="Contemplative Reptile"
											height="auto"
											image={img}
											title="Contemplative Reptile"
										/>
										<CardContent className={classes.description}>
											<Typography gutterBottom variant="h5" component="h2">
												{womenProductId}
											</Typography>
											<Button variant="contained" color="primary">
												Shop Now
											</Button>
										</CardContent>
									</CardActionArea>
								</Card>
							</Link>
						</div>
					);
				})}
			</Grid>
		</div>
	);
}

export default WomenItems;
