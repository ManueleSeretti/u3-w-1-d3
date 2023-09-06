import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  handleSelect = () => {
    this.state.selected ? this.setState({ selected: false }) : this.setState({ selected: true });
  };
  render() {
    const cardClass = this.state.selected ? "border-2 border-danger " : "";
    return (
      <Card
        className={cardClass}
        onClick={() => {
          this.handleSelect();
        }}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>${this.props.book.price}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
