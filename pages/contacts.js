import Link from 'next/link'
import Layout from "../components/layout";
import {Map, YMaps} from "react-yandex-maps";
import {CardColumns, Container, Tab, Tabs} from "react-bootstrap";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Head from "next/head";


const StyledTitleDiv = styled.div`
  padding-top: 60px;
  padding-bottom: 30px;
`;

const StyledContentDiv= styled.div`
  padding-top: 90px;
  padding-bottom: 150px;
`;


const StyledCol= styled(Col)`
  position: relative;
  padding: 20px;
  box-sizing: border-box;
 display: flex;
  align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  margin: 0;
  float: left;
  text-align: center;

`;

const LineVertical = styled.div`
  background: #bebebe;
  width: 1px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0;
  border: 0;
`;


export default function Contacts() {

    const spbStores =[
        {
          id: 1,
          srcImage: "/images/stores/city-farm.jpg",
          alt: "Купить Нетангин фито - пастилки для горла со вкусом апельсина в аптеке Сити Фарм",
           link: "https://cityfarm.spb.ru",
        },
          {
            id: 2,
            srcImage: "/images/stores/help.png",
            alt: "Купить Нетангин фито - пастилки для горла со вкусом мяты в Аптеке Help",
             link: "https://apteka.help/",
          },
          {
                      id: 3,
                      srcImage: "/images/stores/lenfarm.png",
                      alt: "Купить Нетангин фито - пастилки для горла со вкусом имбиря и лимона в аптеке Ленфарм",
                       link: "http://www.lenfarm.ru/",
                    },
        {
            id: 4,
            srcImage: "/images/stores/Melodiya_zdorovya.png",
            alt: "Купить Нетангин фито - пастилки для горла со вкусом апельсина в аптеке Мелодия здоровья",
            link: "http://www.melzdrav.ru/",
        },
        {
            id: 5,
            srcImage: "/images/stores/neva.jpg",
            alt: "Купить Нетангин фито - пастилки для горла со вкусом апельсина в аптеке сети АО Петербургские Аптеки",
            link: "https://papteki.ru/",
        },
        {
            id: 6,
            srcImage: "/images/stores/petro_apteka.png",
            alt: "Купить Нетангин фито - пастилки для горла со вкусом апельсина в ПетроАптеке",
            link: "http://petroapteka.com",
        },
        {
            id: 7,
            srcImage: "/images/stores/votonya.png",
            alt: "Купить Нетангин фито - пастилки для горла со вкусом апельсина в ВотОнЯ",
            link: "https://www.votonia.ru/",
        },
        {
            id: 8,
            srcImage: "/images/stores/wildberries-600.png",
            alt: "Купить Нетангин фито - пастилки для горла со вкусом апельсина в wildberries",
            link: "https://www.wildberries.ru/",
        },
                   ]


    return (
        <YMaps>
        <Layout>
            <Head>
                <title>Нетангин фито | Где купить?</title>
            </Head>

            <Container>
            <StyledTitleDiv>
    <h1>Сеть аптек в вашем городе:</h1>
            </StyledTitleDiv>
                <StyledContentDiv>
    <Tabs defaultActiveKey="spb" id="uncontrolled-tab-example" fill>
  <Tab eventKey="spb" title="Санкт-Петербург и ЛО">
  <Row>
          {spbStores.map(({id, srcImage, alt, link}) => (
              <StyledCol
                  key ={id}
                  style={{ width: '25%'}}
                  bsPrefix ='align-self-center'
              >

                      <Link href={link} passHref>
                          <img className="mx-auto d-block"
                              src={srcImage}
                              alt={alt}

                               style={{ maxWidth: 160 }}
                          />
                      </Link>

                  <LineVertical/>


              </StyledCol>
          ))}
  </Row>
  </Tab>
  <Tab eventKey="nino" title="Нижнегородская область">
  <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
  </Tab>
  <Tab eventKey="archangelsk" title="Архангельская область" >
  <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
     </Tab>
    <Tab eventKey="novgorod" title="Новгородская область" >
    <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
  </Tab>

</Tabs>
                </StyledContentDiv>

        </Container>
            </Layout>
            </YMaps>
    )

}