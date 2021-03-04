import Link from 'next/link'
import Layout from "../components/layout";
import CarouselBoxAbout from "../components/CarouselBoxAbout";
import Gallery from "../components/Gallery";
import {Map, YMaps} from "react-yandex-maps";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Head from "next/head";

export default function About() {
    return(
        <YMaps>
    <Layout>
        <Head>
            <title>Нетангин фито | О компании</title>
        </Head>
     <>

        <h1 className="m-5">Информация о компании</h1>

    <CarouselBoxAbout/>
    <div className="m-5">
    <p>Sydler Remedies Pvt. Ltd. — Группа компаний Sydler — это ведущий производитель и экспортёр#nbsp; высококачественных и надежных лекарственных форм, фитопрепаратов, БАДов и пищевых добавок#nbsp;, а также нутрицевтиков, которые удовлетворяют взыскательные требования рынка по всему миру.</p>
    <h3 className="m-4">Сертификаты</h3>
    <Gallery/>
        <div className="m-5">
        <Row>
            <Col>
                <h3 className="m-4">Контакты</h3>
                <p>Тел.: 8 812 312 87 72<br/>
                Сайт: www.netangin-fyto.ru<br/>
            Россия, 190000, г.Санкт-Петербург,<br/>
            Вознесенский пр., д.4, лит. А</p>

            </Col>
            <Map defaultState={{ center: [59.935227, 30.308897], zoom: 9 }} />
            <Col>

            </Col>
        </Row>
        </div>
    
    </div>
    
    

</>
        </Layout>
            </YMaps>
    )
}