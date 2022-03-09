import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/CreateCountDown.css'
// import { fetchData } from "../../dataMenagment/axios/ApiMethod";

const CreateCountDown = () => {
  /* * Genres *  */
  const [genres, setGenres] = useState(["Action", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Thriller", "Western"])
  const [optionValue, setOptionValue] = useState(genres[0])
  const [selectedOptions, setSelectedOptions] = useState([])

  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [aboutMovie, setAboutMovie] = useState('')
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const airDate = useRef()
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0);
  const getGenre = () => {
    if (genres.length < 1) return
    setSelectedOptions([...selectedOptions, optionValue])
    let filteredGenres = genres.filter((value) => value !== optionValue)
    setGenres(filteredGenres);
    setOptionValue(filteredGenres[0])
  }

  const handleOnChange = (setter) => {
    return (e) => {
      setter(e.target.value)
    }
  }


  return (
    <div className="form-wrapper">
      <div className="form-wrapper2">
        <Form>
          <Form.Group className="mb-3" controlId="formText1">
            <Form.Label>Title of Movie:</Form.Label>
            <Form.Control value={title} onChange={handleOnChange(setTitle)} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formText2">
            <Form.Label>Url of image:</Form.Label>
            <Form.Control value={url} onChange={handleOnChange(setUrl)} type="text" />
          </Form.Group>
          {selectedOptions && selectedOptions.map((value) => <li>{value}</li>)}
          <Form.Select value={optionValue} onChange={(e) => { setOptionValue(e.target.value) }} aria-label="Default select example">
            {genres.map((value, index) => <option id={index} key={index}>{value}</option>)}
          </Form.Select>
          <Button style={{ marginTop: '2%', marginBottom: '7%' }} onClick={getGenre} variant="secondary">Add</Button>
          <Form.Group className="mb-3" controlId="formTextarea">
            <Form.Label>About the movie:</Form.Label>
            <Form.Control as="textarea" value={aboutMovie} onChange={handleOnChange(setAboutMovie)} style={{ height: '12vh' }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNumber">
            <Form.Label>Youtube Url:</Form.Label>
            <Form.Control value={youtubeUrl} onChange={handleOnChange(setYoutubeUrl)} type="string" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Air Date:</Form.Label>
            <Form.Control ref={airDate} type="date" min="2022-01-01" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formDate">
            <Row>
              <Col>
                <Form.Label>Hours:</Form.Label>
                <Form.Control value={hours} onChange={handleOnChange(setHours)} type="number" min="0" max="23" />
              </Col>
              <Col>
                <Form.Label>Minutes:</Form.Label>
                <Form.Control value={minutes} onChange={handleOnChange(setMinutes)} type="number" min="0" max="59" />
              </Col>
            </Row>
          </Form.Group>
          <Button variant="primary" >Subimt</Button>
        </Form>
      </div>
    </div >
  );
};

export default CreateCountDown;
