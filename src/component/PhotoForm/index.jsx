import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Select from "react-select";
import { PHOTO_CATEGORY_OPTIONS } from "../../constants/global";
import Images from "../../constants/images";

PhotoForm.propTypes = {};

function PhotoForm(props) {
    return (
        <Form>
            <FormGroup>
                <Label for="titleId">Title</Label>
                <Input name="title" id="titleId" placeholder="Eg: Wow nature ..."></Input>
            </FormGroup>
            <FormGroup>
                <Label for="categoryId">Category</Label>
                <Select
                    id="categoryId"
                    name="categoryId"
                    placeholder="What's your photo category?"
                    options={PHOTO_CATEGORY_OPTIONS}
                ></Select>
            </FormGroup>
            <FormGroup>
                <Label for="categoryId">Photo</Label>
                <div>
                    <Button type="button" outline color="primary">
                        Random a photo
                    </Button>
                    <div>
                        <img
                            width="200px"
                            height="200px"
                            src={Images.COLORFUL_BG}
                            alt="colorful background"
                        />
                    </div>
                </div>
            </FormGroup>
            <FormGroup>
                <Button color="primary">Add to album</Button>
            </FormGroup>
        </Form>
    );
}

export default PhotoForm;
