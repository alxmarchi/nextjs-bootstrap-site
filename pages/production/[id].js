import Layout from '../../components/layout'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Container} from "react-bootstrap";
import styled from "styled-components";
import Head from "next/head";


const Description = styled.p`
  font-size: 32px;
  line-height: 1.55;
  font-weight: 300;
`;
const StyledTitleDiv = styled.div`
  padding-top: 120px;
  padding-bottom: 60px;
`;
const StyledContentDiv= styled.div`
  padding-bottom: 75px;
`;

export default function Product({productData}) {

    return <Layout>
        <Head>
            <title>Нетангин фито со вкусом {(productData.title).toLowerCase()} | Пастилки для горла</title>
        </Head>
        <Container>
            <StyledTitleDiv>
        <h1>НЕТАНГИН ФИТО СО ВКУСОМ {productData.title}</h1>
            </StyledTitleDiv>
            <StyledContentDiv>
                <Row>
                <Col sm={4}>
        <Image src={productData.srcImage} width="305"  />
                </Col>
                <Col sm={8}>
        <Description>
            «Нетангин Фито для горла» — это растительные пастилки-леденцы для горла (БАД), содержащие 12 растительных компонентов и обладающие тремя активными действиями .
        </Description>
                </Col>
                </Row>
        <p>
            <b>Состав:</b> экстракт листьев Юстиции адхадота, экстракт плодов Перца Длинного, экстракт плодов Перца Черного, экстракт корневищ Имбиря Лекарственного, экстракт корня Солодки голой, экстракт плодов Эмблики лекарственной, экстракт корневищ Куркумы Длинной, экстракт плодов Фенхеля обыкновенного, экстракт плодов Терминалии чебула, экстракт плодов Терминалии беллерика, экстракт корневищ Альпинии галанга, экстракт травы Мяты перечной, Лимонная кислота (регулятор кислотности, Е330), Ароматизатор натуральный ({productData.taste}), краситель пищевой (Е124, может оказывать отрицательное влияние на активность и внимание детей), сахар, сироп глюкозный (основа).
        </p>
            <p>
                <b> Фармакотерапевтическая группа:</b> БАД, поддерживающие функции органов дыхания
            </p>
            <p>
               <b>ДОЗИРОВКА:</b>
            </p>
            <p>
                <b>Взрослым и детям старше 14 лет:</b> по 1-2 леденца 3 раза в день после еды, рассасывая во рту до полного растворения.
            </p>
            <p>
                <b>Продолжительность приема:</b> 3-4 недели. При необходимости прием можно повторить. Возможны повторные приемы в течение года
            </p>
            <p>
               <b>Показания к применению:</b> Препарат используется для симптоматического лечения различных видов кашля, охриплости и боли в горле.
            </p>
            <p>
                <b> Противопоказания:</b> Индивидуальная непереносимость компонентов продукта, беременность, кормление грудью, нарушение углеводного обмена.
            </p>
            <p>
               <b>1 леденец-пастилка содержит:</b>
                <ul>
                    <li>углеводы – 2,3 г</li>
               <li>калории – 8 ккал (34 кДж)</li>
                    <li>белки – 0 г</li>
                    <li>жиры – 0 г</li>
                </ul>
            </p>
            </StyledContentDiv>
        </Container>
    </Layout>
}

export async function getStaticPaths() {
    const paths = [
        {
            params: {
                id: 'orange'
            }
        },
        {
            params: {
                id: 'lemon'
            }
        },
        {
            params: {
                id: 'mint'
            }
        },
        {
            params: {
                id: 'strawberry'
            }
        }
    ]
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const productData = getProductData(params.id)
    return {
        props: {
            productData
        }
    }
}

function getProductData (id) {

    const products = [
        {
            id: 'orange',
            title: "АПЕЛЬСИНА",
            srcImage: "/images/products/orange.png",
            alt: "Нетангин фито - пастилки для горла со вкусом апельсина",
            taste: "апельсин",
        },
        {
            id: 'lemon',
            title: "ИМБИРЯ И ЛИМОНА",
            srcImage: "/images/products/lemon.png",
            alt: "Нетангин фито - пастилки для горла со вкусом имбиря и лимона",
            taste: "имбирь и лимон",
        },
        {
            id: 'mint',
            title: "МЯТЫ",
            srcImage: "/images/products/mint.png",
            alt: "Нетангин фито - пастилки для горла со вкусом мяты",
            taste: "мята",
        },
        {
            id: 'strawberry',
            title: "КЛУБНИКИ",
            srcImage: "/images/products/strawberry.png",
            alt: "Нетангин фито - пастилки для горла со вкусом клубники",
            taste: "клубника",
        },
    ]
    const product = products.filter(product =>{
       return product.id === id;
    })
    return product[0]
}