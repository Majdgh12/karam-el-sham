import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useLocation, useNavigate } from 'react-router-dom'; // <-- Import hooks
import './RecommendedCard.css';

const RecommendedCard = ({ name, price, image }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isMenuPage = location.pathname === '/menu';

  const handleClick = () => {
    if (isMenuPage) {
      // Perform order logic or go to order page
      alert(`تم الطلب لـ ${name}`);
    } else {
      navigate('/menu');
    }
  };

  return (
    <Card className="recommended-card h-100 shadow-sm">
      <div className="position-relative">
        <Card.Img variant="top" src={image} className="rounded-top" />
        <div className="price-badge position-absolute top-0 end-0 m-2">
          {price} ج
        </div>
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="text-main fs-5 text-center">{name}</Card.Title>

        <Button
          variant={isMenuPage ? 'danger' : 'warning'}
          className={`mt-3 align-self-center ${isMenuPage ? 'text-white' : 'text-main'} recommended-btn`}
          onClick={handleClick}
        >
          {isMenuPage ? 'اطلب الآن' : (
            <>
              <ArrowLeft className="ms-2" />
              شاهد القائمة
            </>
          )}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RecommendedCard;
