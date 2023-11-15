import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SingleBook = ({ setSelected, selected, book }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate()

  const handleCardClick = () => {
    setSelected(book.asin);
    navigate(`/details/${book.asin}`)
  };

  return (
      <Card
        onClick={handleCardClick}
        onMouseEnter={() =>setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          border: selected === book.asin ? '3px solid red' : isHovered ? '3px solid red' : 'none',
          transition: 'border 0.3s ease-in-out',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)', 
        }}
      >
        <Card.Img variant="top" src={book.img} style={{ maxHeight: '590px', objectFit: 'cover', width: '100%'}}/>
        <Card.Body>
          <Card.Title style={{ color: '#1D3557', fontWeight: 'bold' }}>{book.title}</Card.Title>
          <Button
            variant="outline-dark"
            className="w-100 mt-2"
            onClick={() => navigate(`/details/${book.asin}`)}
          >
            Click here for details...
          </Button>
        </Card.Body>
      </Card>
  );
};

export default SingleBook;