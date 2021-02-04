import Link from 'next/link'
import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import orange_card from "../public/images/products/orange.png"
import mint_card from "../public/images/products/mint.png"

export default function Production() {
    return (
        <div>
        <h1>ПАСТИЛКИ ОТ КАШЛЯ</h1>
        <p>«Нетангин Фито для горла» — это растительный антисептик (БАД), содержащий 12 растительных компонентов и обладающий тремя активными действиями — помогает при кашле, очищает носовые пазухи и успокаивает боль и першение в горле.</p>
        <h3>Показания к применению:</h3>
        <p>В качестве биологически активной добавки к пище — источника глицирризиновой кислоты, полифенольных соединений, куркумина.</p>
        <p>Леденцы-пастилки «Нетангин Фито» для горла представлены производителем со вкусом апельсина, клубники, лимона с имбирем и мяты</p>
        <CardDeck>
        <Card style={{ width: '10rem', border: 0 }}>
      <Card.Img variant="top" src={orange_card} />
      <Card.Body>
      <Card.Title>АПЕЛЬСИН</Card.Title>
        <Button variant="primary">Подробнее</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', border: 0 }}>
      <Card.Img variant="top" src={mint_card} />
      <Card.Body>
      <Card.Title>МЯТА</Card.Title>
        <Button variant="primary">Подробнее</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', border: 0 }}>
      <Card.Img variant="top" src={orange_card} />
      <Card.Body>
      <Card.Title>АПЕЛЬСИН</Card.Title>
        <Button variant="primary">Подробнее</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', border: 0 }}>
      <Card.Img variant="top" src={mint_card} />
      <Card.Body>
      <Card.Title>МЯТА</Card.Title>
        <Button variant="primary">Подробнее</Button>
      </Card.Body>
    </Card>
    </CardDeck>
    </div>
    )
};