import Link from 'next/link'
import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import orange_card from "../public/images/products/orange.png"
import mint_card from "../public/images/products/mint.png"
import Layout from "../components/layout";

export default function Production() {
    const products = [
        {
            id: 1,
            title: "АПЕЛЬСИН",
            srcImage: "/images/products/orange.png",
            alt: "Нетангин фито - пастилки для горла со вкусом апельсина",
            link: "/product/orange",
        },
        {
            id: 2,
            title: "ИМБИРЬ И ЛИМОН",
            srcImage: "/images/products/limon.png",
            alt: "Нетангин фито - пастилки для горла со вкусом имбиря и лимона",
            link: "/product/limon",
        },
        {
            id: 3,
            title: "МЯТА",
            srcImage: "/images/products/mint.png",
            alt: "Нетангин фито - пастилки для горла со вкусом мяты",
            link: "/product/mint",
        },
        {
            id: 4,
            title: "КЛУБНИКА",
            srcImage: "/images/products/strawberry.png",
            alt: "Нетангин фито - пастилки для горла со вкусом клубники",
            link: "/product/strawberry",
        },
    ]

    return (
        <Layout>
        <div>
        <h1>ПАСТИЛКИ ОТ КАШЛЯ</h1>
        <p>«Нетангин Фито для горла» — это растительный антисептик (БАД), содержащий 12 растительных компонентов и обладающий тремя активными действиями — помогает при кашле, очищает носовые пазухи и успокаивает боль и першение в горле.</p>
        <h3>Показания к применению:</h3>
        <p>В качестве биологически активной добавки к пище — источника глицирризиновой кислоты, полифенольных соединений, куркумина.</p>
        <p>Леденцы-пастилки «Нетангин Фито» для горла представлены производителем со вкусом апельсина, клубники, лимона с имбирем и мяты</p>
        <CardDeck>
            {products.map(({id, title, srcImage, alt, link}) => (
                <Card
                    key ={id}
                    style={{ width: '10rem', border: 0 }}
                >
                    <Card.Img variant="top"
                              src={srcImage}
                              alt={alt}
                    />
                    <Card.Body>
                        <Card.Title>АПЕЛЬСИН</Card.Title>
                        <Button variant="primary">Подробнее</Button>
                    </Card.Body>
                </Card>
            ))}

    </CardDeck>
    </div>
            </Layout>
    )
};