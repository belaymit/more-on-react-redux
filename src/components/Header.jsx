import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import Table from 'react-bootstrap/Table';
import Menu from '@mui/material/Menu';
import cart from '../assets/going-shopping-shopping.gif';
import '../styles/styles.css';

const Header = () => {
  const getData = useSelector((state) => state.reducerFunctions.carts);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: '3.75rem' }}>
        <Container>
          <Navbar.Brand href="/" className="text-decoration-none text-light mx-3">Restaurant App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-decoration-none text-light mx-3">Home</Nav.Link>
            <Nav.Link href="/cart" className="text-decoration-none text-light mx-3">Details</Nav.Link>
            <Nav.Link href="#pricing" className="text-decoration-none text-light mx-3">Contacts</Nav.Link>
          </Nav>
          <Badge
            badgeContent={getData.length}
            color="secondary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: 'pointer' }} />
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {
            getData.length ? (
              <div className="card_details" style={{ width: '24rem', padding: 10 }}>
                <Table>
                  <thead>
                    <tr>
                      <th>Images</th>
                      <th>Restaurant Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      getData.map((e) => (
                        <>
                          <tr key={e.id}>
                            <td>
                              <NavLink to={`/cart/${e.id}`}>
                                <img src={e.imgdata} alt={e.rname} style={{ width: '5rem', height: '5rem' }} />
                              </NavLink>
                            </td>
                            <td>
                              <p>{e.rname}</p>
                              <p>
                                Price: $
                                {e.price}
                              </p>
                              <p>
                                Quantity:
                                {' '}
                                {e.qnty}
                              </p>
                              <p style={{ color: 'red', fontSize: 20, cursor: 'pointer' }}>
                                <i className="fas fa-trash small-trash" />
                              </p>
                            </td>
                            <td className="mt-5" style={{ color: 'red', fontSize: 20, cursor: 'pointer' }}>
                              <i className="fas fa-trash large-trash" />
                            </td>
                          </tr>
                        </>
                      ))
                    }
                    <p className="text-center">Total: $300</p>
                  </tbody>
                </Table>
              </div>
            )
              : (
                <div className="card-details d-flex justify-content-center align-items-center" style={{ width: '24rem', padding: 10, position: 'relative' }}>
                  <i
                    className="fas fa-close smallclose"
                    style={{
                      position: 'absolute', color: 'red', top: 2, right: 20, fontSize: 23, cursor: 'pointer',
                    }}
                  />
                  <p style={{ fontSize: 22 }}>Your cart is empty</p>
                  <img src={cart} alt="" className="empytcart_img" style={{ width: '5rem', padding: 10 }} />
                </div>
              )
          }
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
