import React from 'react';
import { MenData } from './ProductsData';
import {Link} from 'react-router-dom'

function MenItems() {
	return (
		<div>
			{Object.entries(MenData).map(([ menId, { productId, img } ]) => {
				return (
					<div>
						<Link to={`/men/shoes/${menId}`}>
							<img src={img} alt={productId} />
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default MenItems;
