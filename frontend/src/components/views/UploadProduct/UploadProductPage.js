import React, { useState } from 'react';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';

function UploadProductPage(props) {
	const [productName, setproductName] = useState('');
	const [DescriptionValue, setDescriptionValue] = useState('');
	const [PriceValue, setPriceValue] = useState(0);

	const [Images, setImages] = useState([]);

	const onNameChange = (event) => {
		setproductName(event.currentTarget.value);
	};

	const onDescriptionChange = (event) => {
		setDescriptionValue(event.currentTarget.value);
	};

	const onPriceChange = (event) => {
		setPriceValue(event.currentTarget.value);
	};

	const updateImages = (newImages) => {
		console.log(newImages);
		setImages(newImages);
	};
	const onSubmit = (event) => {
		event.preventDefault();

		if (!productName || !DescriptionValue || !PriceValue || !Images) {
			return alert('fill all the fields first!');
		}

		const variables = {
			product_category_id: '5ebab8b9608b791ec4d01df7',
			name: productName,
			description: DescriptionValue,
			cost: PriceValue,
			images: Images,
		};

		Axios.post('/api/product/', variables).then((response) => {
			if (response) {
				alert('Product Successfully Uploaded');
				props.history.push('/');
			} else {
				alert('Failed to upload Product');
			}
		});
	};

	return (
		<div>
			<div>
				<h2> Upload Product</h2>
			</div>

			<form onSubmit={onSubmit}>
				{<FileUpload refreshFunction={updateImages} />}

				<br />
				<br />
				<label>Product Name</label>
				<input onChange={onNameChange} value={productName} />
				<br />
				<br />
				<label>Description</label>
				<textarea onChange={onDescriptionChange} value={DescriptionValue} />
				<br />
				<br />
				<label>Price($)</label>
				<input onChange={onPriceChange} value={PriceValue} type="number" />
				<br />
				<br />

				<button onClick={onSubmit}>Submit</button>
			</form>
		</div>
	);
}

export default UploadProductPage;
