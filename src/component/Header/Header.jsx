import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Header.scss";

Header.propTypes = {};

function Header() {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header__link header__title"
                            href="https://youtube.com/easyfrontend"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Easy Frontend
                        </a>
                    </Col>

                    <Col xs="auto">
                        <NavLink
                            exact
                            className="header__link"
                            to="/photo"
                            activeClassName="header__link--active"
                        >
                            Redux project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}
export default Header;
