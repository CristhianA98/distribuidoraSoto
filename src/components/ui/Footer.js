import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-dark" id="tempaltemo_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light logo">
              Distribuidora Soto
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li className="mt-3">
                <i className="fas fa-map-marker-alt fa-fw" />
                <Link to='/' className="text-decoration-none mx-2">
                  Santa Martha sector # 4, Av. Los Quinches, Santo Domingo - Ecuador
                </Link>
              </li>
              <li className="mt-3">
                <i className="fa fa-phone fa-fw" />
                <Link to='/' className="text-decoration-none mx-2">+593 981346825</Link>
              </li>
              <li className="mt-3">
                <i className="fa fa-envelope fa-fw" />
                <Link to='/' className="text-decoration-none mx-2">darwin.soto@distribuidorasoto.com</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">
              Products
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <Link to='/' className="text-decoration-none" >
                  Luxury
                </Link>
              </li>
              <li>
                <Link to='/' className="text-decoration-none" >
                  Sport Wear
                </Link>
              </li>
              <li>
                <Link to='/' className="text-decoration-none" >
                  Men's Shoes
                </Link>
              </li>
              <li>
                <Link to='/' className="text-decoration-none" >
                  Women's Shoes
                </Link>
              </li>
              <li>
                <Link to='/' className="text-decoration-none" >
                  Popular Dress
                </Link>
              </li>
              <li>
                <Link to='/' className="text-decoration-none" >
                  Gym Accessories
                </Link>
              </li>
              <li>
                <Link to='/' className="text-decoration-none" >
                  Sport Shoes
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">
              Further Info
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <Link to='/' className="text-decoration-none" >
                  Home
                </Link>
              </li>
              <li>
                <Link to='/' className="text-decoration-none" >
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/' className="text-decoration-none" >
                  Shop Locations
                </Link>
              </li>
              <li>
                <Link to='/' className="text-decoration-none" >
                  FAQs
                </Link>
              </li>
              <li>
                <Link to='/' className="text-decoration-none" >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row text-light mb-4">
          <div className="col-12 mb-3">
            <div className="w-100 my-3 border-top border-light" />
          </div>
          <div className="col-auto me-auto mx-auto">
            <ul className="list-inline text-left footer-icons">
              <li className="list-inline-item border border-light rounded-circle text-center">
                <Link to='/'
                  className="text-light text-decoration-none"
                >
                  <i className="fab fa-facebook-f fa-lg fa-fw" />
                </Link>
              </li>
              <li className="list-inline-item border border-light rounded-circle text-center">
                <Link to='/'
                  className="text-light text-decoration-none"
                >
                  <i className="fab fa-instagram fa-lg fa-fw" />
                </Link>
              </li>
              <li className="list-inline-item border border-light rounded-circle text-center">
                <Link to='/'
                  className="text-light text-decoration-none"
                >
                  <i className="fab fa-whatsapp fa-lg fa-fw" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-100 bg-black py-3">
        <div className="container">
          <div className="row pt-2">
            <div className="col-12">
              <p className="text-center text-light">
                  
                <Link to='www.facebook.com'>Copyright © 2022 | Distribuidora Soto</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
