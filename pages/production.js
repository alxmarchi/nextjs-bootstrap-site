import Link from 'next/link'
import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import orange_card from "../public/images/products/orange.png"
import mint_card from "../public/images/products/mint.png"
import Layout from "../components/layout";
import Head from "next/head";

export default function Production() {
    const products = [
        {
            id: 1,
            title: "АПЕЛЬСИН",
            srcImage: "/images/products/orange.png",
            alt: "Нетангин фито - пастилки для горла со вкусом апельсина",
            link: "/production/orange",
        },
        {
            id: 2,
            title: "ИМБИРЬ И ЛИМОН",
            srcImage: "/images/products/lemon.png",
            alt: "Нетангин фито - пастилки для горла со вкусом имбиря и лимона",
            link: "/production/lemon",
        },
        {
            id: 3,
            title: "МЯТА",
            srcImage: "/images/products/mint.png",
            alt: "Нетангин фито - пастилки для горла со вкусом мяты",
            link: "/production/mint",
        },
        {
            id: 4,
            title: "КЛУБНИКА",
            srcImage: "/images/products/strawberry.png",
            alt: "Нетангин фито - пастилки для горла со вкусом клубники",
            link: "/production/strawberry",
        },
    ]

    return (
        <Layout>
            <Head>
                <title>Нетангин фито | Пастилки для горла | Продукция</title>
            </Head>
        <div>
            <div className="m-5">
        <h1>ПАСТИЛКИ ОТ КАШЛЯ</h1>
                </div>
            <div className="m-5">
        <p><b>«Нетангин Фито для горла»</b> — это растительный антисептик (БАД), содержащий 12 растительных компонентов и обладающий тремя активными действиями — помогает при кашле, очищает носовые пазухи и успокаивает боль и першение в горле.</p>
        </div>
            <div className="m-5">
       <p>Леденцы-пастилки «Нетангин Фито» для горла представлены производителем со вкусом апельсина, клубники, лимона с имбирем и мяты</p>
            </div>
            <div className="m-5">
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
                        <Card.Title>{title}</Card.Title>
                        <Link href={link} passHref>
                            <Button variant="primary">Подробнее</Button>
                        </Link>

                    </Card.Body>
                </Card>
            ))}

    </CardDeck>
            </div>
    </div>
            </Layout>
    )
};