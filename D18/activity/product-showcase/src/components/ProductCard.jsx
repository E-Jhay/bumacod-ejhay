import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product, onViewDetails }) => (
  <Card className="mb-4 product-card">
    <Card.Img variant="top" src={product.image} className="product-image" />
    <Card.Body>
      <Card.Title className="text-truncate">{product.title}</Card.Title>
      <Card.Text>${product.price}</Card.Text>
      <Button variant="primary" onClick={() => onViewDetails(product)}>
        View Details
      </Button>
    </Card.Body>
  </Card>
);

export default ProductCard;
