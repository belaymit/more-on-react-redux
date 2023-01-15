import React from 'react';
import Table from 'react-bootstrap/Table';

const CardDetails = () => (
  <>
    <div className="container mt-2">
      <h2 className="text-center">Items Details Page</h2>
    </div>
    <section className="container mt-3">
      <div className="items-details">
        <div className="items_img">
          <img src="" alt="" />
        </div>
        <div className="details">
          <Table>
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Restaurant</strong>
                    : Some food
                  </p>
                  <p>
                    <strong>Price</strong>
                    : $300
                  </p>
                  <p>
                    <strong>Some Foods</strong>
                    : Adama, Ethiopia
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
      </div>
    </section>
  </>
);

export default CardDetails;
