import React from "react";
import PropTypes from "prop-types";
import Images from "../../../../constants/images";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Banner from "../../../../component/Banner/Banner";

Main.propTypes = {};

function Main(props) {
    return (
        <div className="photo-main">
            <Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG} />
            <Container className="text-center">
                <Link to="/photo/add">Add new photo</Link>
            </Container>
        </div>
    );
}

export default Main;
