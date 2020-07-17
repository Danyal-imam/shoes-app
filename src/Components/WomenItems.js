import React from 'react';
import { WomenData } from './ProductsData';
import {Link} from 'react-router-dom'

function WomenItems() {
	return (
		<div>
			{Object.entries(WomenData).map(([ womenId, { womenProductId, img } ]) => {
				return (
					<Link to={`/women/shoes/${womenId}`}>
						<img src={img} alt={womenProductId} />
					</Link>
				);
			})}
		</div>
	);
}

export default WomenItems;
