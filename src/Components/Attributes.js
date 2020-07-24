import React from 'react';
import { makeStyles, Grid, Paper, Card, CardContent, Typography, IconButton } from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 100
	},
	box: {
		margin: 15,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height:"250px",
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '0 auto',
		textAlign:"center"
	},
	size: {
		fontSize: '40px',
		color: 'red'
  },
  align:{
    textAlign:"center"
  
  }
}));

export default function Attributes() {
	const classes = useStyles();
	return (
		<div>
			<Grid container>
				<Grid item xs={12} sm={4}>
					<Card className={classes.root} variant="outlined" className={classes.box}>
						<CardContent >
							<IconButton className={classes.center}>
								<LocalShippingIcon className={classes.size} />
							</IconButton>
							<Typography variant="h6" gutterBottom>Free Express Deleivery</Typography>
							<Typography variant="body2" className={classes.center}>On orders over $75.</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card className={classes.root} variant="outlined" className={classes.box}>
						<CardContent >
							<IconButton className={classes.center}>
								<SwapHorizontalCircleIcon className={classes.size} />
							</IconButton>
							<Typography variant="h6"  className={classes.center} gutterBottom>Worry-Free Returns</Typography>
              				<Typography variant="body2" className={classes.center}>If you’re not satisfied, simply return<br /> or exchange within 30 days.</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card className={classes.root} variant="outlined" className={classes.box}>
						<CardContent >
							<IconButton className={classes.center}>
								<CardGiftcardIcon className={classes.size} />
							</IconButton>
              <div >
							<Typography variant="h6" className={classes.center} gutterBottom>Gift Card</Typography >
              <Typography variant="body2" className={classes.center}>Give them exactly what they want<br /> with a Gift Card.

</Typography >
              </div>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}
