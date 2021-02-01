import React from "react";
import PropTypes from "prop-types";
import Banner from "../../../../component/Banner/Banner";
import PhotoForm from "../../../../component/PhotoForm";
import "./AddEdit.scss";

AddEdit.propTypes = {};

function AddEdit(props) {
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo"></Banner>
            <div className="photo-edit__form">
                <PhotoForm onSubmit={(values) => console.log("Form submit", values)}></PhotoForm>
            </div>
        </div>
    );
}

export default AddEdit;
