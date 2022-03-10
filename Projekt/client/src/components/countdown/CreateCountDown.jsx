import React, { useCallback, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/CreateCountDown.css'
import { fetchData } from "../../dataMenagment/axios/ApiMethod";
import { backendPaths } from "../../dataMenagment/appPaths/BackendPaths";
import { makeAir_Date } from '../../utils/makeAirDate'
// import { useNavigate } from 'react-router-dom'

const CreateCountDown = () => {
  /* * genre *  */
  const [genre, setGenre] = useState(["Action", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Thriller", "Western"])
  const [optionValue, setOptionValue] = useState(genre[0])
  const [selectedOptions, setSelectedOptions] = useState([])

  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [about, setAbout] = useState('')
  const [youtubeURL, setYoutubeURL] = useState('')
  const [airDate, setAirDate] = useState('')
  const [hour, setHour] = useState(0)
  const [minutes, setMinutes] = useState(0);
  const [air_date, setAir_date] = useState({});

  const getGenre = () => {
    if (genre.length < 1) return

    setSelectedOptions([...selectedOptions, optionValue])
    let filteredgenre = genre.filter((value) => value !== optionValue)
    setGenre(filteredgenre);
    setOptionValue(filteredgenre[0])
  }

  const handleOnChange = (setter) => {
    return (e) => {
      setter(e.target.value)
    }
  }
  const parseDateAndSetAirDate = useCallback(() => {
    const parsedDate = makeAir_Date(airDate)
    setAir_date({ year: parsedDate.year, month: parsedDate.month, day: parsedDate.day, hour, minutes })
  }, [airDate, hour, minutes])

  useEffect(() => {
    if (airDate) parseDateAndSetAirDate()
  }, [airDate, parseDateAndSetAirDate, hour, minutes])

  // TODO form validation
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    fetchData.post(backendPaths.countdown, { title, url, genre: selectedOptions, about, youtubeURL, air_date })
  }


  return (
    <div className="form-wrapper">
      <div className="form-wrapper2">
        <Form onSubmit={(e) => e.preventDefault()}>
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
            {genre.map((value, index) => <option id={index} key={index}>{value}</option>)}
          </Form.Select>
          <Button style={{ marginTop: '2%', marginBottom: '7%' }} onClick={getGenre} variant="secondary">Add</Button>
          <Form.Group className="mb-3" controlId="formTextarea">
            <Form.Label>About the movie:</Form.Label>
            <Form.Control as="textarea" value={about} onChange={handleOnChange(setAbout)} style={{ height: '12vh' }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNumber">
            <Form.Label>Youtube Url:</Form.Label>
            <Form.Control value={youtubeURL} onChange={handleOnChange(setYoutubeURL)} type="string" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Air Date:</Form.Label>
            <Form.Control value={airDate} onChange={handleOnChange(setAirDate)} type="date" min="2022-01-01" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formDate2">
            <Row>
              <Col>
                <Form.Label>Hours:</Form.Label>
                <Form.Control value={hour} onChange={handleOnChange(setHour)} type="number" min="0" max="23" />
              </Col>
              <Col>
                <Form.Label>Minutes:</Form.Label>
                <Form.Control value={minutes} onChange={handleOnChange(setMinutes)} type="number" min="0" max="59" />
              </Col>
            </Row>
          </Form.Group>
          <Button variant="primary" onClick={handleOnSubmit} >Subimt</Button>
        </Form>
      </div>
    </div >
  );
};

export default CreateCountDown;
