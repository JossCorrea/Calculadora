import React from "react";
import "./Sobre.css"
import { Box } from '@mui/system';
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';


const Sobre = () => {

    return (
        <>
        <Box m={5} />
        <Container maxWidth="sm">
    <article className="sobre"> Essa calculadora foi feita em React.Js pela aluna Kendra Ferreira, para a turma 9
        da Aceleradora Inclusiva.
        <div className="texto">
        A <Link href="https://www.thoughtworks.com/pt-br/about-us/diversity-and-inclusion/aceleradora"> Aceleradora Inclusiva </Link> nasceu como um desdobramento do Aceleradora Ágil e, além de ensinar
        os primeiros passos em metodologias e programação ágeis a jovens, busca acelerar o processo
        de inclusão de grupos sociais mais vulneráveis na tecnologia. Cada participante recebe uma bolsa
        adicional de R$ 840,00.
        </div>
        A iniciativa é viabilizada por uma parceria entre a Thoughtworks e a
        PUCRS, e as aulas são ministradas no Centro de Inovação da Escola Politécnica da PUCRS.
        Para se candidatar a uma vaga nas aceleradoras, entre em contato pelo e-mail ci@pucrs.br.
    </article>
    </Container>
    </>
    )
}

export default Sobre;