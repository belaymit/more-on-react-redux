import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CardDetails = () => {
  let { id } = useParams();
  id = Number(id);
  const [data, setData] = useState([]);
  const getData = useSelector((state) => state.reducerFunctions.carts);

  const fetchData = () => {
    const filteredData = getData.filter((e) => e.id === id);
    setData(filteredData);
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
                            {' '}
                            <span style={{
                              background: 'green', color: '#fff', padding: '2px 5px', borderRadius: '5px',
                            }}
                            >
                              {' '}
                              3.5⭐
                              {' '}
                            </span>
                          </p>
                          <p>
                            <strong>Order Review: </strong>
                            <span>1175 + order place from here recently</span>
                          </p>
                          <p>
                            <strong>Remove: </strong>
                            <span>
                              {' '}
                              <i className="fas fa-trash" style={{ color: 'red', fontSize: 16, cursor: 'pointer' }} />
                              {' '}
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
