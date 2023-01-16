import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE } from '../redux/actions/actions';

const CardDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const history = useNavigate();

  id = Number(id);
  const [data, setData] = useState([]);
  const getData = useSelector((state) => state.reducerFunctions.carts);

  const fetchData = () => {
    const filteredData = getData.filter((e) => e.id === id);
    setData(filteredData);
  };

  const removeCart = (id) => {
    dispatch(REMOVE(id));
    history('/');
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>
      </div>
      <section className="container mt-3">
        <div className="items-details">
          {
            data.map((element) => (
              <>
                <div className="items_img">
                  <img src={element.imgdata} alt={element.rname} style={{ margin: '0.5rem' }} />
                </div>
                <div className="details">
                  <Table>
                    <tbody>
                      <tr key={element.id}>
                        <td>
                          <p>
                            <strong>Restaurant</strong>
                            :
                            { element.rname }
                          </p>
                          <p>
                            <strong>Price</strong>
                            : $
                            {element.price}
                          </p>
                          <p>
                            <strong>Dishes</strong>
                            :
                            {element.address}
                          </p>
                          <p>
                            <strong>Total</strong>
                            : $300
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>Rating: </strong>
                            <span style={{
                              background: 'green', color: '#fff', padding: '2px 5px', borderRadius: '5px',
                            }}
                            >
                              {element.rating}
                              ⭐
                            </span>
                          </p>
                          <p>
                            <strong>Order Review: </strong>
                            <span>{element.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove: </strong>
                            <span>
                              <i
                                className="fas fa-trash"
                                style={{ color: 'red', fontSize: 16, cursor: 'pointer' }}
                                onClick={() => removeCart(element.id)}
                                role="presentation"
                              />
                            </span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </>
            ))
          }
        </div>
      </section>
    </>
  );
};

export default CardDetails;
