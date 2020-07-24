import React from 'react'
import { useParams, useNavigate } from 'react-router'
import { WomenData } from './ProductsData';
import {
	makeStyles,
	Grid,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	Button,
	Fab,
	Theme,
	createStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
	root: {
		maxWidth: '800px',
		background: '-webkit-linear-gradient(left top, #eee 50%, #e1e5ed 50%)'
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	cart: {
		display: 'flex',
		justifyContent: 'center',
        alignItems: 'center',
		flexDirection:'row-reverse',
		[theme.breakpoints.down('sm')]: {
			flexWrap: 'wrap',
			justifyContent:'center',
			alignItems:'center',
			
		},
        
    },
   
	rotate: {
		transform: 'rotate(15deg)',
		width: '400px'
	},
	price: {
		fontWeight: '700',
		color: '#31589B'
	},
	sizeBtn: {
		color: 'black',
		backgroundColor: 'transparent',
		width: '35px',
		height: '35px',
		margin: '10px',
		'&:hover': {
			color: '#fff'
		},
		'&:focus': {
			backgroundColor: 'green'
		}
	},
	shop: {
		borderRadius: '20px',
		margin: '60px 20px 0px 30px',
		padding: '10px 50px 10px 50px'
	},
	backBtn: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
}),
);


function WomenItemDisplay() {
    
	const classes = useStyles();


    const navigate = useNavigate()
    const {womenId} =useParams()
    const womenProducts=WomenData[womenId]
    const {womenProductId, img,name,price} =womenProducts
    return (
        <div>
			<div className={classes.center}>
				<Card className={`${classes.root}`}>
					<Grid container>
						<CardActionArea className={classes.cart}>
							<Grid item xs={12}>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									height="140"
									image={img}
									title="Contemplative Reptile"
									className={classes.rotate}
								/>
							</Grid>
							<Grid item xs={12}>
								<CardContent className={classes.description}>
									<Typography gutterBottom variant="h4" component="h4">
										{name}
									</Typography>
									<Typography gutterBottom variant="body2">
										{womenProductId}
									</Typography>
									<Typography variant="h3" component="h3" gutterBottom className={classes.price}>
										{price}
									</Typography>
									<Typography gutterBottom variant="body2">
										Size
									</Typography>
									<Fab color="primary" aria-label="6" className={classes.sizeBtn}>
										6
									</Fab>
									<Fab color="primary" aria-label="7" className={classes.sizeBtn}>
										7
									</Fab>
									<Fab color="primary" aria-label="8" className={classes.sizeBtn}>
										8
									</Fab>
									<br />
									<Button variant="contained" color="primary" className={classes.shop}>
										Add to Cart
									</Button>
								</CardContent>
							</Grid>
						</CardActionArea>
					</Grid>
				</Card>
			</div>
			<div className={classes.backBtn}>
				<Button variant="contained" color="secondary" className={classes.shop} onClick={()=>{navigate('/women')}}>
					Back to Products
				</Button>
				
			</div>
		</div>
    )
}

export default WomenItemDisplay
