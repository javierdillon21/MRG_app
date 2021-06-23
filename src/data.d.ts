import { type } from "node:os";


type ResultsPrismic= PrismicDoc[] | PrismicDocSZ[]

interface PrismicDoc{
    id: string
    data: {
        categoria: string
        cita_biblica: Texto[]
        version_biblica: string
        texto_biblico: Texto[]
        contenido: Texto[]
        titulo: Texto[]
    }
}

interface Devocional{
    cita_biblica: string
    version_biblica: string
    texto_biblico: string
    contenido: string
    titulo: string
}
interface Anuncio{
    titulo: string
    categoria: string
    contenido: string
    imagen: Imagen
    expiracion: Date
}
interface Texto {
    text: string
}
interface Imagen {
    url: string
    dimensions: {
        width: number
        height: number
    }
}

// Documento de prismic con slice zone
interface PrismicDocSZ {
    id: string
    data: {
        body: Slice[]
    }
}

interface Slice {
    slice_type: string
    primary: BodyPrimary
}

interface BodyPrimary {
    titulo: Texto[]
    categoria: string
    contenido: Texto[]
    imagen: Imagen
    expiracion: Date
}

// type Carrusel= Slide[]
