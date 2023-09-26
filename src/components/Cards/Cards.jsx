import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card className="card">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;