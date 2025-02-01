import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Accordion, Breadcrumb, Card, ListGroup, Nav, Navbar, Table, Dropdown, DropdownButton, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hing.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Link } from 'react-scroll';

const Products = [
    {
        id: 1,
        title: 'GiTAGGED® Uttarakhand Aipan Art on Wood (14×14) Inches',
        name: 'Hinge',
        category: 'Painting',
        price: 192,
        rating: 4.00,
        image: 'https://www.gitagged.com/wp-content/uploads/2024/12/AIPAN-03-S1-OM-MANDALA-RED-1-1.jpg',
        thumbnails: [
            'https://www.gitagged.com/wp-content/uploads/2023/06/Hathras-Hing-1-441x441.jpg',
            'https://www.gitagged.com/wp-content/uploads/2023/06/Hathras-Hing-2-441x441.jpg',
            'https://www.gitagged.com/wp-content/uploads/2023/06/Hathras-Hing-3-441x441.jpg',
            'https://www.gitagged.com/wp-content/uploads/2023/06/Hathras-Hing-4-441x441.jpg'
        ]
    },
];

const Uniqueness = [
    { id: 1, uni: 'Adds Rich Taste & Aroma.' },
    { id: 2, uni: 'Quality Ingredients.' },
    { id: 3, uni: 'Excellent health benefits.' },
    { id: 4, uni: 'No Artificial Colour.' }
];
const Additional = [
    { id: 1, th: 'Geographical Region', td: 'Hathras District, Uttar Pradesh' },
    { id: 2, th: 'GI Status Awarded', td: '2023' },
    { id: 3, th: 'GI Application No.', td: '672' },
    { id: 4, th: 'Manufactured By', td: 'Hathras Hing Wala' }
];


const reviewsData = {
    averageRating: 4.62,
    totalReviews: 13,
    ratingsBreakdown: [
        { rating: 5, count: 11, percentage: 85 },
        { rating: 4, count: 0, percentage: 0 },
        { rating: 3, count: 1, percentage: 8 },
        { rating: 2, count: 1, percentage: 8 },
        { rating: 1, count: 0, percentage: 0 },
    ]
};

const reviewsCard = [
    {
        reviewerName: "John Doe",
        // reviewerImage: "https://via.placeholder.com/50",
        reviewText: "This hing is absolutely amazing. The aroma and flavor are incredible.",
        rating: 5
    },
    {
        reviewerName: "Jane Smith",
        // reviewerImage: "https://via.placeholder.com/50",
        reviewText: "Good quality, but the packaging could be better.",
        rating: 4
    },
    {
        reviewerName: "Robert Brown",
        // reviewerImage: "https://via.placeholder.com/50",
        reviewText: "Not bad, but I expected a stronger flavor.",
        rating: 3
    },
    {
        reviewerName: "Robert Brown",
        // reviewerImage: "https://via.placeholder.com/50",
        reviewText: "Not bad, but I expected a stronger flavor.",
        rating: 3
    },
    {
        reviewerName: "Robert Brown",
        // reviewerImage: "https://via.placeholder.com/50",
        reviewText: "Not bad, but I expected a stronger flavor.",
        rating: 3
    }
];

const sproducts = [
    {
        id: 1,
        name: "Product 1",
        image: "/images/product1.jpg",
        price: 199,
        originalPrice: 249,
        discount: 20,
    },
    {
        id: 2,
        name: "Product 2",
        image: "/images/product2.jpg",
        price: 299,
    },
    {
        id: 3,
        name: "Product 3",
        image: "/images/product3.jpg",
        price: 179,
        originalPrice: 229,
        discount: 15,
    },
    {
        id: 4,
        name: "Product 4",
        image: "/images/product4.jpg",
        price: 149,
    },
];


function Art() {
    const [selectedImage, setSelectedImage] = useState(Products[0].image); // Initialize with the first image

    const changeImage = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const [showMore, setShowMore] = useState(false);

    // Function to toggle the description visibility
    const toggleDescription = () => {
        setShowMore(!showMore);
    };

    const ratingWidth = (reviewsData.averageRating / 5) * 100; // Calculate the width of the filled stars

    // const [selectedImages, setSelectedImages] = useState('https://www.gitagged.com/wp-content/uploads/2023/06/Hathras-Hing-1-441x441.jpg'); // Example default image

    let active = 1;
    let items = [];
    for (let number = 1; number <= 3; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    const [reviewerName, setReviewerName] = useState('');
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');

    // Define the handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform the submission logic (e.g., send data to an API)
        console.log('Submitted:', { reviewerName, rating, reviewText });
    };

    const ProductCard = ({ image, name, price, originalPrice, discount }) => (
        <div className="product-card">
            <img src={image} alt={name} />
            <h5>{name}</h5>
            <p>{discount && <span className="discount">-{discount}%</span>}</p>
            <p className="price">
                <span className="original-price">₹{originalPrice}</span>
                <span className="current-price">₹{price}</span>
            </p>
        </div>
    );

    return (
        <>
            <Container className="Product" id="home">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item>{Products[0].category}</Breadcrumb.Item>
                    <Breadcrumb.Item active>{Products[0].name}</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col xs={12} md={7}>
                        <div className="carousel-container">
                            <div className="main-image">
                                <img id="main-img" src={selectedImage} alt="Main Image" />
                            </div>
                            <div className="thumbnails">
                                {Products[0].thumbnails.map((thumb, index) => (
                                    <img
                                        key={index}
                                        className={`thumbnail ${selectedImage === thumb ? 'selected' : ''}`}
                                        src={thumb}
                                        alt={`Thumbnail ${index + 1}`}
                                        onClick={() => changeImage(thumb)}
                                    />
                                ))}
                            </div>
                        </div>
                        <Button variant="primary" className="btn-add-to-cart btn-lg w-40 my-4 mx-4 marg" aria-label="Add this product to cart">Add to Cart</Button>
                        <Button variant="primary" className="btn-custom btn-lg w-40 my-4 mx-4 mar" aria-label="Buy this product now">Buy Now</Button>

                    </Col>
                    <Col xs={12} md={5} className="py-3">
                        <h4>{Products[0].title}</h4>
                        <span className="price-color">₹{Products[0].price}<span className="icn">incl. GST</span></span>
                        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                            <Rating name="read-only" value={Products[0].rating} readOnly precision={0.5} />
                            <span style={{ marginLeft: '8px' }}>{Products[0].rating}</span>
                        </Box>

                        <p className="pt-2 comme">NEED ASSISTANCE? </p>
                        <p className="py-2 comm"> Call +91 9743482660 to get help on ordering this item. ( 10:30 am to 8 pm, 24/7 )</p>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Product Details</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        {Uniqueness.map(item => (
                                            <li key={item.id} className="li">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {item.uni}
                                            </li>
                                        ))}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Buy UNLIMITED GROCERIES Shipped at ₹88 Only</Accordion.Header>
                                <Accordion.Body>
                                    <Card>
                                        <Card.Header>Buy any or all Spices and Groceries of unlimited Quantity, Delivered at Flat ₹88 across India</Card.Header>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>
                                                <ul>
                                                    <li class="li">Region specific Specialties</li>
                                                    <li class="li">Only Authentic & Quality Products</li>
                                                    <li class="li">RWide Varieties to Choose</li>
                                                    <li class="li">No Returns and Refund for Food Items</li>
                                                    <li class="li">FSSAI, GMP, HACCP, ISO 9001, ISO 22000</li>
                                                </ul>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Available for Express Store Pickup!</Accordion.Header>
                                <Accordion.Body>
                                    <Card>
                                        <Card.Header>Can’t wait for your order?</Card.Header>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Get it early! Quick Pickup Available at our store – HSR Layout, Bengaluru. <a href="https://goo.gl/maps/othXjKqbrVJ2">Get Directions</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div >
                    {/* Navbar with smooth scroll links */}
                    <Navbar>
                        <Container >
                            <Nav className="ml-auto">
                                <Nav.Link href='home' as={Link} to="home" smooth={true} duration={500}>Gallery</Nav.Link>
                                <Nav.Link href='about' as={Link} to="about" smooth={true} duration={500}>Description</Nav.Link>
                                <Nav.Link href='services' as={Link} to="services" smooth={true} duration={500}>Services</Nav.Link>
                                <Nav.Link href='contact' as={Link} to="contact" smooth={true} duration={500}>Contact</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>

                    {/* Sections */}
                    <Container id="about">
                        <div>
                            <h3 class="fw-bold text-center py-3">Hathras Hing (Compounded)</h3>
                            <p>
                                Hing is the Dried Gum or Latex that which Oozes from the stem & root of the plant species, Ferula and is used as a spice for flavouring Curries. The milk juice obtained from the root becomes brown gum like mass after drying.
                            </p>
                            <h5 class="fw-bold">The Roots of Ferula</h5>
                            <p>Roots are thick,-massive, and pulpy. They yield a milk juice similar to that of the stems.</p>
                            <h5 class="fw-bold">Specification:</h5>
                            {showMore && (
                                <span>
                                    {' '}
                                    <ul>
                                        {Uniqueness.map(item => (
                                            <li key={item.id} className="li">
                                                {item.uni}
                                            </li>
                                        ))}
                                    </ul>
                                    <h5 class="fw-bold">Usages</h5>
                                    <p>The Hathras Hing is Extensively used for flavouring curries, sauces, and pickles. It is most the commonly used flavouring ingredient when no Orion or Garlic is used in preparation of Curries.</p>
                                    <h5 class="fw-bold">Why Hatras Hing?</h5>
                                    <p>India imports the Raw Asafoetida mainly from Iran, Afghanistan, Tajikistan, and Uzbekistan.
                                        The Uniqueness is in the process of manufacturing the end derivative Hygienically by using a perfect blend of herbal, natural & quality ingredients obtained locally.</p>
                                    <h5 class="fw-bold">Ingredients : Glutinous Rice, Edible Gum, Asafoetida Milk</h5>
                                    <p>Allergen : Gluten</p>
                                    <h5 class="fw-bold">Health Benefits</h5>
                                    <p>Medicinally Hing is said to Stimulate the Intestinal & Respiratory tracts, acts as an Appetizer and processes several Antibiotic properties.
                                        Note : Hatras Hing has been Conferred with the Geographical Indication (GI) Status in 2023 as 453rd GI Tagged Product of India.</p>
                                </span>
                            )}

                            {/* Button to toggle the "more" description */}
                            <div className='d-flex justify-content-center'>
                                <Button
                                    variant="link"
                                    onClick={toggleDescription}
                                    style={{ color: '#3c4150', borderColor: '#3c4150', textDecoration: 'none' }}
                                >
                                    {showMore ? 'Less Description' : 'More Description'}
                                </Button>
                            </div>
                        </div>

                    </Container>

                    <Container id="services">
                        <div className='py-4'>
                            <h3 className='py-2'>Additional information</h3>
                            <Table bordered>
                                <tbody>
                                    {Additional.map(tabl => (
                                        <tr>
                                            <th>{tabl.th}</th>
                                            <td>{tabl.td}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Container>

                    {/* Customer Reviews Section */}
                    <Container id="contact">
                        <div className="review-top">
                            <Row>
                                <Col lg={2} className='my-2'>
                                    <Row>
                                        <h5 class="fw-bold">Customer Reviews</h5>
                                        <Col lg={4} className="justify-center-black">
                                            <div className="average-rating">{reviewsData.averageRating}</div>
                                        </Col>
                                        <Col lg={8} className='my-2'>
                                            <Box >
                                                <Rating name="read-only" value={Products[0].rating} readOnly precision={0.5} />
                                            </Box>
                                            <div>Based on {reviewsData.totalReviews} reviews</div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col class="lg-8">
                                    <div className="rating-breakdown">
                                        {reviewsData.ratingsBreakdown.map((item) => (
                                            <div key={item.rating} className="rating-bar">
                                                <div className="rating-label">
                                                    <span>
                                                        <Box >
                                                            <Rating name="read-only" value={item.rating} readOnly precision={0.5} />
                                                        </Box>
                                                    </span>
                                                </div>
                                                <div className="progress-bar">
                                                    <div
                                                        className="progress-fill"
                                                        style={{ width: `${item.percentage}%` }}
                                                    />
                                                </div>
                                                <span>{item.count} Reviews</span>
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='review-middle'>

                            <a href="#reviews" class="filter-button">
                                <svg width="20" height="20" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#fffafa" stroke-width="0.384"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.77778 21H14.2222C17.3433 21 18.9038 21 20.0248 20.2646C20.51 19.9462 20.9267 19.5371 21.251 19.0607C22 17.9601 22 16.4279 22 13.3636C22 10.2994 22 8.76721 21.251 7.6666C20.9267 7.19014 20.51 6.78104 20.0248 6.46268C19.3044 5.99013 18.4027 5.82123 17.022 5.76086C16.3631 5.76086 15.7959 5.27068 15.6667 4.63636C15.4728 3.68489 14.6219 3 13.6337 3H10.3663C9.37805 3 8.52715 3.68489 8.33333 4.63636C8.20412 5.27068 7.63685 5.76086 6.978 5.76086C5.59733 5.82123 4.69555 5.99013 3.97524 6.46268C3.48995 6.78104 3.07328 7.19014 2.74902 7.6666C2 8.76721 2 10.2994 2 13.3636C2 16.4279 2 17.9601 2.74902 19.0607C3.07328 19.5371 3.48995 19.9462 3.97524 20.2646C5.09624 21 6.65675 21 9.77778 21ZM12 9.27273C9.69881 9.27273 7.83333 11.1043 7.83333 13.3636C7.83333 15.623 9.69881 17.4545 12 17.4545C14.3012 17.4545 16.1667 15.623 16.1667 13.3636C16.1667 11.1043 14.3012 9.27273 12 9.27273ZM12 10.9091C10.6193 10.9091 9.5 12.008 9.5 13.3636C9.5 14.7192 10.6193 15.8182 12 15.8182C13.3807 15.8182 14.5 14.7192 14.5 13.3636C14.5 12.008 13.3807 10.9091 12 10.9091ZM16.7222 10.0909C16.7222 9.63904 17.0953 9.27273 17.5556 9.27273H18.6667C19.1269 9.27273 19.5 9.63904 19.5 10.0909C19.5 10.5428 19.1269 10.9091 18.6667 10.9091H17.5556C17.0953 10.9091 16.7222 10.5428 16.7222 10.0909Z" fill="#1C274C"></path> </g></svg>


                                with Images
                            </a>
                            <a href="#" class="filter-button">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 10L11 14L9 12M4 5V12.0557C4 15.0859 5.71202 17.856 8.42229 19.2111L12 21L15.5777 19.2111C18.288 17.856 20 15.0859 20 12.0557V5L19.303 5.07744C16.8542 5.34953 14.3912 4.70802 12.3863 3.27594L12 3L11.6137 3.27594C9.60878 4.70802 7.14576 5.34953 4.69699 5.07744L4 5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                Verified
                            </a>

                            <DropdownButton id="dropdown-basic-button" title="All star">
                                <Dropdown.Item href="#/action-1">All stars</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">5 star</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">4 star</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">3 star</Dropdown.Item>
                                <Dropdown.Item href="#/action-5">2 star</Dropdown.Item>
                                <Dropdown.Item href="#/action-6">1 star</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div>
                            <h5 className="fw-bold">Customer Reviews</h5>
                            {reviewsCard.length > 0 ? (
                                <Row>
                                    {reviewsCard.map((review, index) => (
                                        <Col xs={12} sm={6} md={4} lg={3} key={index} className="my-3">
                                            <Card className="review-card p-3 border rounded shadow-sm">
                                                <div className="reviewer-info d-flex align-items-center mb-2">
                                                    {/* Uncomment the image part if you have reviewer images */}
                                                    {/* <img src={review.reviewerImage} alt={review.reviewerName} className="reviewer-image me-2" /> */}
                                                    <div className="reviewer-name fw-bold">{review.reviewerName}</div>
                                                </div>
                                                <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}>
                                                    <Rating name="read-only" value={review.rating} readOnly precision={0.5} />
                                                </Box>
                                                <p className="review-text">{review.reviewText}</p>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            ) : (
                                <p>No reviews yet. Be the first to review!</p>
                            )}
                        </div>
                    </Container>
                    <div className='pagination'><Pagination size="sm">{items}</Pagination></div>
                </div>
            </Container>
            <Container>
                <div>
                    <h5 className="fw-bold">Submit a Review</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="reviewerName" className="form-label">Your Name</label>
                            <input
                                type="text"
                                id="reviewerName"
                                className="form-control"
                                value={reviewerName}
                                onChange={(e) => setReviewerName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Rating</label>
                            <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}>
                                <Rating
                                    name="rating"
                                    value={rating}
                                    onChange={(_, newRating) => setRating(newRating)}
                                    precision={0.5}
                                    required
                                />
                            </Box>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="reviewText" className="form-label">Your Review</label>
                            <textarea
                                id="reviewText"
                                className="form-control"
                                rows="4"
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit Review</button>
                    </form>
                </div>
            </Container>
            <Container>
                <div className="similar-products">
                    <h2>Similar Products</h2>
                    <div className="carousel">
                        {sproducts.map((sproduct) => (
                            <ProductCard
                                key={sproduct.id}
                                image={sproduct.image}
                                name={sproduct.name}
                                price={sproduct.price}
                                originalPrice={sproduct.originalPrice}
                                discount={sproduct.discount}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Art;
