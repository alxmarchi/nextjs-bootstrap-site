import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/layout'
import {Container} from "react-bootstrap";
import CarouselBox from "../components/CarouselBox";


export default function Home() {
    const sliders = [
        {
            id: 1,
            className: "d-block w-100 h-20",
            srcImage: "/images/banner-orange.jpg",
            alt: "Нетангин фито - пастилки для горла со вкусом апельсина",
            link: "/production/orange",
        },
        {
            id: 2,
            className: "d-block w-100 h-20",
            srcImage: "/images/banner-lemon.jpg",
            alt: "Нетангин фито - пастилки для горла со вкусом имбиря и лимона",
            link: "/production/lemon",
        },
        {
            id: 3,
            className: "d-block w-100 h-20",
            srcImage: "/images/banner-mint.jpg",
            alt: "Нетангин фито - пастилки для горла со вкусом мяты",
            link: "/production/mint",
        },
        {
            id: 4,
            className: "d-block w-100 h-20",
            srcImage: "/images/banner-strawberry.jpg",
            alt: "Нетангин фито - пастилки для горла со вкусом клубники",
            link: "/production/strawberry",
        },
    ]

  return (
      <Layout>
        <Head>
          <title>Нетангин фито | Пастилки для горла</title>
        </Head>
          <CarouselBox sliders={sliders}></CarouselBox>
          <div className="m-5">
              <p className="lead">*Нетангин фито (Netanging Fyto) — это растительные пастилки-леденцы для горла (БАД), содержащие 12 растительных компонентов и обладающие тремя активными действиями.</p>
          </div>
      </Layout>
  )
}
