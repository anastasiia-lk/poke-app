import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

export default function PokemonData(props) {
  return (
    <Container className="mt-2">
      <Row>
        <Col>
          <Card xs={12} md={6}>
            <Card.Header>
              <h5>{props.name}</h5>
              <img src={props.sprite} alt={props.name} />
            </Card.Header>
            <Card.Body>
              <h5>Abilities</h5>
              {props.abilities.map((ability, key) => (
                <div key={key}>
                  <span>{ability.ability.name}</span>
                </div>
              ))}
              <h5>Types</h5>
              {props.types.map((type, key) => (
                <div key={key}>
                  <span>{type.type.name}</span>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card xs={12} md={6}>
            <Card.Body>
              <h5>Base Stats</h5>
              {props.stats.map((stat, key) => (
                <div key={key}>
                  <strong>{stat.stat.name}</strong>
                  <ProgressBar
                    now={stat.base_stat}
                    max={255}
                    label={stat.base_stat}
                  />
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
