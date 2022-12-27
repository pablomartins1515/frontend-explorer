import { Container } from './styles'
import tomate from '../../assets/tomate.png'
import alface from '../../assets/alface.png'
import rabanete from '../../assets/rabanete.png'
import pãonaan from '../../assets/pãonaan.png'
import ingredients from '../../assets/ingredients.webp'
import presunto from '../../assets/presunto.png'
import ameixa from '../../assets/ameixa.png'
import café from '../../assets/café.png'
import claras from '../../assets/claras.png'
import damasco from '../../assets/damasco.png'
import aniz from '../../assets/aniz.png'
import amêndoas from '../../assets/amêndoas.png'
import canela from '../../assets/canela.png'
import farinha from '../../assets/farinha.png'
import limão from '../../assets/limão.png'
import maçã from '../../assets/maça.png'
import maracujá from '../../assets/maracujá.png'
import massa from '../../assets/massa.png'
import pão from '../../assets/pão.png'
import pepino from '../../assets/pepino.png'
import pêssego from '../../assets/pêssego.png'
import pesto from '../../assets/pesto.png'
import rúcula from '../../assets/rúcula.png'
import whiskey from '../../assets/whiskey.png'
import camarão from '../../assets/camarão.png'

export function Img({ imgName }) {
  if (imgName === "presunto") {
    return (
      <Container>
        <img src={presunto} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "tomate") {
    return (
      <Container>
        <img src={tomate} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "alface") {
    return (
      <Container>
        <img src={alface} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "rabanete") {
    return (
      <Container>
        <img src={rabanete} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "ameixas") {
    return (
      <Container>
        <img src={ameixa} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "café") {
    return (
      <Container>
        <img src={café} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "claras") {
    return (
      <Container>
        <img src={claras} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "damasco") {
    return (
      <Container>
        <img src={damasco} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "aniz") {
    return (
      <Container>
        <img src={aniz} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "amêndoas") {
    return (
      <Container>
        <img src={amêndoas} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "canela") {
    return (
      <Container>
        <img src={canela} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "farinha") {
    return (
      <Container>
        <img src={farinha} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "limão") {
    return (
      <Container>
        <img src={limão} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "maçã") {
    return (
      <Container>
        <img src={maçã} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "maracujá") {
    return (
      <Container>
        <img src={maracujá} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "pão") {
    return (
      <Container>
        <img src={pão} alt="imagem da salada" />
      </Container>
    )
  } else if (imgName === "massa") {
    return (
      <Container>
        <img src={massa} alt="imagem da salada" />
      </Container>
    )
  }else if (imgName === "pepino") {
    return (
      <Container>
        <img src={pepino} alt="imagem da salada" />
      </Container>
    )
  }else if (imgName === "pêssego") {
    return (
      <Container>
        <img src={pêssego} alt="imagem da salada" />
      </Container>
    )
  }else if (imgName === "rúcula") {
    return (
      <Container>
        <img src={rúcula} alt="imagem da salada" />
      </Container>
    )
  }else if (imgName === "pesto") {
    return (
      <Container>
        <img src={pesto} alt="imagem da salada" />
      </Container>
    )
  }else if (imgName === "whiskey") {
    return (
      <Container>
        <img src={whiskey} alt="imagem da salada" />
      </Container>
    )
  }else if (imgName === "pão naan") {
    return (
      <Container>
        <img src={pãonaan} alt="imagem da salada" />
      </Container>
    )
  }else if (imgName === "camarão") {
    return (
      <Container>
        <img src={camarão} alt="imagem da salada" />
      </Container>
    )
  }else {
    return (
      <Container>
        <img className="img" src={ingredients} alt="imagem da salada" />
      </Container>
    )
  }
}