import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Col, Card, Row } from 'antd';
import ImageSlider from '../../utils/ImageSlider';

const { Meta } = Card;

function LandingPage() {
	const [Products, setProducts] = useState([]);
	const [Skip, setSkip] = useState(0);
	const [Limit, setLimit] = useState(8);
	const [PostSize, setPostSize] = useState();

	useEffect(() => {
		const variables = {
			skip: Skip,
			limit: Limit,
		};
		getProducts();
	}, []);

	const getProducts = () => {
		Axios.get('/api/product/').then((response) => {
			if (response) {
				/*if (variables.loadMore) {
					setProducts([...Products, ...response.data.products]);
				} else {*/

				//console.log(response.data);
				setProducts(response.data);
				//console.log(Products);
				/*
				setPostSize(response.data.postSize);
				*/
			} else {
				alert('Failed to fectch product datas');
			}
		});
	};

	const renderCards = Products.map((product, index) => {
		console.log(product);
		return (
			<Col lg={6} md={8} xs={24}>
				<Card hoverable={true} cover={<ImageSlider images={product.images} />}>
					<Meta title={product.name} description={`$${product.cost}`} />
				</Card>
			</Col>
		);
	});

	return (
		<div style={{ width: '75%', margin: '3rem auto' }}>
			{
				<div style={{ textAlign: 'center' }}>
					<h2> Let's Travel Anywhere </h2>
				</div>

				/* Filter  

			<Row gutter={[16, 16]}>
				<Col lg={12} xs={24}>
					<CheckBox
						list={continents}
						handleFilters={(filters) => handleFilters(filters, 'continents')}
					/>
				</Col>
				<Col lg={12} xs={24}>
					<RadioBox
						list={price}
						handleFilters={(filters) => handleFilters(filters, 'price')}
					/>
				</Col>
			</Row>

			}

			{/* Search  
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					margin: '1rem auto',
				}}
			>
				<SearchFeature refreshFunction={updateSearchTerms} />
			</div>
				*/
			}

			{Products.length === 0 ? (
				<div
					style={{
						display: 'flex',
						height: '300px',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<h2>No post yet...</h2>
				</div>
			) : (
				<div>
					<Row gutter={[16, 16]}>{renderCards}</Row>
				</div>
			)}
			<br />
			<br />

			{/**
			{PostSize >= Limit && (
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<button onClick={onLoadMore}>Load More</button>
				</div>
			)}

			 */}
		</div>
	);
}

export default LandingPage;
