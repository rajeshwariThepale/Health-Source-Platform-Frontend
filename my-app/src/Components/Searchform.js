import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function SearchForm() {
  return (
    <Form id='search-form'>
      <Row>
        <Col xs={5}>
          <Form.Control placeholder="Location" />
        </Col>
        <Col xs={5}>
          <Form.Control placeholder="Doctors" />
        </Col>
        <Col>
        <Button variant="primary" type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchForm;