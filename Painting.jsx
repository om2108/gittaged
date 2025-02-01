import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { createBrowserRouter, RouterProvider,Link } from 'react-router-dom';
import Art from './Art';


// Sample product data
const products = [
  { id: 1, title: 'GiTAGGED® Hathras Hing (Compounded) – 100gms', category: 'Spices', price: 192, rating: 4.00, image: '	https://www.gitagged.com/wp-content/uploads/2024/12/AIPAN-03-S1-OM-MANDALA-RED-1-1-300x300.jpg' },
  { id: 2, title: 'GiTAGGED® Coorg Green Cardamom (Whole) – 50gms | 100gms', category: 'Spices', price: 186, rating: 5.00, image: 'https://www.gitagged.com/wp-content/uploads/2024/12/AIPAN-03-S1-GANESHA-MANDALA-RED-3-1-300x300.jpg' },
  { id: 3, title: 'GiTAGGED® Uttarakhand Tej Patta Bay Leaf (Whole &amp; Powder) 100gm', category: 'Spices', price: 84, rating: 5.00, image: 'https://www.gitagged.com/wp-content/uploads/2024/01/AIPAN-P2-SWASTIK-MANDALA-BLUE-1-441x441.jpg' },
  { id: 4, title: 'GiTAGGED® Kanniyakumari Cloves (Lavangam) – 50gms | 250gms', category: 'Spices', price: 118, rating: 5.00, image: 'https://www.gitagged.com/wp-content/uploads/2023/09/AIPAN-002-ARTPLATE-DEER-1-441x441.jpg' },
  { id: 5, title: 'GiTAGGED® Kashmir Saffron Mongra Kesar A++ Grade (1gm &amp; 2gm)', category: 'Spices', price: 336, rating: 5.00, image: 'https://www.gitagged.com/wp-content/uploads/2023/09/AIPAN-01-S2-GANESHA-MANDALA-1-441x441.jpg' },
  { id: 6, title: 'GiTAGGED® Karbi Organic Ginger Powder (Whole) – 200gms', category: 'Spices', price: 173, rating: 4.50, image: 'https://www.gitagged.com/wp-content/uploads/2023/09/AIPAN-03-S1-OM-GANESHA-3-1-300x300.jpg' },
];


const categories1 = ['Spices'];
const categories2 = ['Cereals and Pulses', 'COFFEE', 'Dry Fruits', 'Fruit Concentrates', 'Fruit Squash'];

const router = createBrowserRouter(
  [
    {
      path:"/art",
      element:<Art/>
    }
  ]
)

function Painting() {
  const [selectedCategory1, setSelectedCategory1] = useState('');
  const [selectedCategory2, setSelectedCategory2] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedSortOption, setSelectedSortOption] = useState('price-asc');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filtered = products.filter((product) => {
      const inPriceRange = product.price >= minPrice && product.price <= maxPrice;
      const inCategory1 = selectedCategory1 ? product.category === selectedCategory1 : true;
      const inCategory2 = selectedCategory2 ? product.category === selectedCategory2 : true;
      const inRating = selectedRating !== null ? product.rating === selectedRating : true;

      return inPriceRange && inCategory1 && inCategory2 && inRating;
    });

    // Apply sorting
    if (selectedSortOption === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (selectedSortOption === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (selectedSortOption === 'rating-asc') {
      filtered.sort((a, b) => a.rating - b.rating);
    } else if (selectedSortOption === 'rating-desc') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(filtered);
  }, [selectedCategory1, selectedCategory2, minPrice, maxPrice, selectedRating, selectedSortOption]);

  const handleReset = () => {
    setSelectedCategory1('');
    setSelectedCategory2('');
    setMinPrice(60);
    setMaxPrice(1000);
    setSelectedRating(null);
    setSelectedSortOption('price-asc');
  };

  return (
    <Container fluid>
      <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{products.category}</Breadcrumb.Item>
    </Breadcrumb>
      <Row>
        {/* Left-side filter */}
        <Col xs={12} md={3} className={`sidebar ${isFilterVisible ? 'show' : 'hide'} d-md-block`}>
          <h3>Filters</h3>
          <Form>
            {/* Sorting Options */}
            <Form.Group className="mt-3">
              <Form.Label>Sort by</Form.Label>
              <Form.Control as="select" value={selectedSortOption} onChange={(e) => setSelectedSortOption(e.target.value)}>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-asc">Rating: Low to High</option>
                <option value="rating-desc">Rating: High to Low</option>
              </Form.Control>
            </Form.Group>

            {/* Category Filters */}
            <Form.Group controlId="categoryFilter1">
              <Form.Label>Category 1</Form.Label>
              <Form.Control as="select" value={selectedCategory1} onChange={(e) => setSelectedCategory1(e.target.value)}>
                <option value="">All</option>
                {categories1.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="categoryFilter2">
              <Form.Label>Category 2</Form.Label>
              <Form.Control as="select" value={selectedCategory2} onChange={(e) => setSelectedCategory2(e.target.value)}>
                <option value="">All</option>
                {categories2.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            {/* Min and Max Price Filters */}

            <Form.Group className="mt-3">
              <Form.Label>Price Range</Form.Label>
              <Row>
                <Col>
                  {/* Max Price Slider */}
                  <Form.Label>₹ 60 - ₹ {maxPrice}</Form.Label>
                  <Form.Range
                    min={minPrice}
                    max={1000}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    style={{ marginBottom: '10px' }}
                  />
                </Col>
              </Row>
            </Form.Group>

            {/* Rating Filter */}
            <Form.Group className="mt-3">
              <Form.Label>Filter by Rating</Form.Label>
              <Box sx={{ '& > legend': { mt: 2 } }}>
                <Rating name="rating" value={selectedRating} onChange={(e, newRating) => setSelectedRating(newRating)} precision={0.5} />
              </Box>
            </Form.Group>

            <Button variant="secondary" className="mt-3" onClick={handleReset}>Reset Filters</Button>
          </Form>
        </Col>

        {/* Button to toggle filter visibility on mobile */}
        <Col xs={12} className="d-md-none text-center mt-3">
          <Button variant="primary" onClick={() => setIsFilterVisible(!isFilterVisible)}>
            {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </Col>

        {/* Right-side content area (products list) */}
        <Col xs={12} md={9}>
          <h1>Product List</h1>
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={4}>
                <Link to="/art">
                <Card className="mb-3">
                {/* <Link to={`/product/${product.id}`}> */}
                    <Card.Img variant="top" src={product.image} className="product-image-w" />
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Subtitle className='text-center sub'>₹ {product.price} incl. GST</Card.Subtitle>
                  {/* </Link> */}
                  <Card.Body>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Rating name="read-only" value={product.rating} readOnly precision={0.5} />
                      <span style={{ marginLeft: '8px' }}></span>
                    </Box>
                    <Button variant="primary" className="btn-add-to-cart btn-lg w-40 mx-3">Add to Cart</Button>
                    <Button variant="primary" className="btn-custom btn-lg w-40 mx-3 px-4">Buy Now</Button>
                  </Card.Body>
                </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Painting;
