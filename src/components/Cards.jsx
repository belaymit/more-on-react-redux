import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardsData from './CardsData';
import ADD from '../redux/actions/actions';
import '../styles/styles.css';

const Cards = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(cardsData);
  console.log(setData);

  const sendData = (e) => {
    dispatch(ADD(e));
  };
  return (
    <div className="container mt-3">
      <h2 className="text-center">Our Menu</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element) => (
            <Card style={{ width: '22rem', padding: '0.5rem', borderColor: 'lightgray' }} key={element.id} className="mx-2 mt-4 card_style">
              <Card.Img variant="top" src={element.imgdata} alt={element.rname} style={{ height: '15rem' }} />
              <Card.Body>
                <Card.Title>{element.rname}</Card.Title>
                <Card.Text>
                  Price: $
                  { element.price }
                </Card.Text>
                <div className="button_div d-flex justify-content-center">
                  <Button
                    variant="primary"
                    className="col-lg-12"
                    onClick={() => sendData(element)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        }
      </div>
    </div>
  );
};

export default Cards;
