import React, { Component } from "react";
import { connect } from "react-redux";
import { getdocument, deletedocument } from "../action/action";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row
} from "react-bootstrap";

class Listdocument extends Component {
  componentWillMount() {
    this.props.getdocument();
  }

  render() {
    return (
      <div className="card">
        <Row>
          {this.props.document.map((el, i) => (
            <Col key={i}>
              <Card className="card-container"  key={i}>
                <CardImg top variant="top" src={el.image} />
<div className='description'>
                <Card.Title>{el.titel}</Card.Title>
                <Card.Text>{el.description}</Card.Text>
                <Card.Title>{el.rates}</Card.Title>
                </div>
                <Link to={`/updatedocument/${el._id}`}>
                  <Button className="btn" variant="outline-info">
                    Update
                  </Button>
                </Link>
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    this.props.deletedocument(el._id);
                  }}
                >
                  delete
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default connect(
  state => {
    return { document: state.document };
  },
  { getdocument, deletedocument }
)(Listdocument);
