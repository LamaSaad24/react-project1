import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRatings from 'react-star-ratings';

export default function Product({ product }) {
    const { title, price, description, category, image, rating } = product
    return (
        <div className="col-md-4 mb-3">
            <Card style={{ width: '100%' }} className='p-2'>
                <Button variant="primary" className='mb-2'>{category}</Button>
                <Card.Img variant="top" src={image} style={{width: '150px', height: '200px',margin:'auto', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title className='fs-5'>{title.substring(0, 20)}</Card.Title>
                    <Card.Text>
                        {description.substring(0, 90)}...
                        <a className="link-primary">see more</a>
                    </Card.Text>
                    <div className='d-flex justify-content-between align-items-center'>
                        <span> {price} $  </span>
                        <StarRatings
                            rating={rating.rate}
                            starRatedColor="yellow"
                            numberOfStars={5}
                            name='rating'
                            starDimension="20px"
                            starSpacing="2px"
                        />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
