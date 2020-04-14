import React, {useState} from "react";
import {Col, Container} from "react-bootstrap";
import {Files, UploadButton, UploadInputGroup, UploadTextInputField} from "./styled";
import {useInput} from "../Hooks/useInfo";
import axios from 'axios';

const UploadForm = () => {
    const {value: title, bind: bindTitle, reset: resetTitle} = useInput('');
    const {value: description, bind: bindDescription, reset: resetDescription} = useInput('');
    const [file, setFile] = useState({});
    const {value: year, bind: bindYear, reset: resetYear} = useInput('');

    const handleChange = (e) => {
         setFile(e.target.files[0]);
         console.log(file);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description, year,file);

        const formData = new FormData();
        // data.append("title", title);
        // data.append("description", description);
        formData.append('file', file);
        // data.append("year", year);
        axios.post(" https://l27wt82pxc.execute-api.eu-west-2.amazonaws.com/dev/videos", formData, { // receive two parameter endpoint url ,form data
        }).then(res => { // then print response status
                console.log(res.statusText)
            })
        setFile({})
        resetTitle();
        resetDescription();
        resetYear();
    }

    return <div className="container">
        <Container>
            <Col>
                <form method="post" action="#" id="#" onSubmit={handleSubmit}>
                    <Files>
                        <label>Upload Video </label>
                        <input type="file" onChange={handleChange}/>
                    </Files>
                    <UploadInputGroup>
                        <label>Title</label>
                        <input type='text' aria-label='Title' {...bindTitle}/>
                    </UploadInputGroup>
                    <UploadInputGroup>
                        <label>Video Description</label>
                        <UploadTextInputField {...bindDescription}/>
                    </UploadInputGroup>
                    <UploadInputGroup>
                        <label>Year</label>
                        <select {...bindYear}>
                            <option value='2015' label='2015'/>
                            <option value='2016' label='2016'/>
                            <option value='2017' label='2017'/>
                            <option value='2018' label='2018'/>
                            <option value='2019' label='2019'/>
                            <option value='2020' label='2020'/>
                        </select>
                    </UploadInputGroup>
                    <UploadInputGroup>
                        <UploadButton onClick={handleSubmit}>Upload</UploadButton>
                    </UploadInputGroup>
                </form>
            </Col>
        </Container>
    </div>;
}

export default UploadForm
