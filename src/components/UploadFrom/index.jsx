import React from "react";
import {Col, Container} from "react-bootstrap";
import {Files, UploadButton, UploadInputGroup, UploadTextInputField} from "./styled";

const UploadForm = () => {
    return <div className="container">
        <Container>
            <Col>
                <form method="post" action="#" id="#">
                    <Files>
                        <label>Upload Video </label>
                        <input type="file" />
                    </Files>
                    <UploadInputGroup>
                        <label>Title</label>
                        <input type='text' aria-label='Title'/>
                    </UploadInputGroup>
                    <UploadInputGroup>
                        <label>Video Description</label>
                        <UploadTextInputField/>
                    </UploadInputGroup>
                    <UploadInputGroup>
                        <label>Year</label>
                        <select>
                            <option value='2015' label='2015'/>
                            <option value='2016' label='2016'/>
                            <option value='2017' label='2017'/>
                            <option value='2018' label='2018'/>
                            <option value='2019' label='2019'/>
                            <option value='2020' label='2020'/>
                        </select>
                    </UploadInputGroup>
                    <UploadInputGroup>
                        <UploadButton>Upload</UploadButton>
                    </UploadInputGroup>
                </form>
            </Col>
        </Container>
    </div>;
}

export default UploadForm
