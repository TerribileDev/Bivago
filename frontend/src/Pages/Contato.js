//Contato
import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as formik from 'formik';
import * as yup from 'yup';
 
const Contato = () => {
  const { Formik } = formik;
 
  const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    username: yup.string().required('Username is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    zip: yup.string().required('Zip code is required'),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });
 
  return (
    <div>
      <h2>Contate-nos</h2>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => console.log(values)}
        initialValues={{
          firstName: '',
          lastName: '',
          username: '',
          city: '',
          state: '',
          zip: '',
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Container>
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                    isInvalid={touched.firstName && !!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                    isInvalid={touched.lastName && !!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormikUsername">
 
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationFormik03">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik04">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="State"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    isInvalid={!!errors.state}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.state}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik05">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Zip"
                    name="zip"
                    value={values.zip}
                    onChange={handleChange}
                    isInvalid={!!errors.zip}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.zip}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  name="terms"
                  label="Agree to terms and conditions"
                  onChange={handleChange}
                  isInvalid={!!errors.terms}
                  feedback={errors.terms}
                  feedbackType="invalid"
                  id="validationFormik0"
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </Container>
        )}
      </Formik>
    </div>
  );
};

export default Contato;
