import React from 'react';
import { MenData } from './ProductsData';
import { Link } from 'react-router-dom';
import {
	makeStyles,
	Grid,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	Button
} from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		margin:" 0 10px 20px 10px",
	  },
	  description: {
		  display:"flex",
		  justifyContent:"space-between",
		  alignItems:"center",
	  },
	  link: {
		  textDecoration:"none"
	  }
	
});

function MenItems() {
	const classes = useStyles();

	return (
		<div>
			<Grid container justify="center">
				{Object.entries(MenData).map(([ menId, { productId, img } ]) => {
					return (
						<div>
							<Link to={`/men/shoes/${menId}`} className={classes.link}>
							<Card className={classes.root} >

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
										{productId}
									</Typography>
									<Button variant="contained" color="primary">Shop Now</Button>
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

export default MenItems;
