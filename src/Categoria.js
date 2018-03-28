import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AnuncioHome from './AnuncioHome'

//

class Categoria extends Component {

    constructor(props) {
        super(props)
        this.state ={
            anuncios: {}
        }  
            this.loadAnuncios = this.loadAnuncios.bind(this)

            this.loadAnuncios(this.props.match.params.urlCategoria)
    }
    loadAnuncios(urlCategoria) {
        const url = `https://mercadodev-e4369.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22{urlCategoria}%22`
        axios
            .get(url)
            .then( data=> {
                this.setState({ anuncios: data.data })
                this.categoria = urlCategoria
            })
    }
    componentWillReceiveProps(newProps){
        if(newProps.match.params.urlCategoria){
            if(this.categoria !== newProps.match.params.urlCategoria){
                this.loadAnuncios(newProps.match.params.urlCategoria)
            }
        }
    }
    render(){
        return(
            <div>
            <h1>
                Categoria: {JSON.stringify(this.props.match.params.urlCategoria)}
            </h1>

            { Object.keys(this.state.anuncios).map( key => {
                const anuncio = this.state.anuncios[key]
                return <AnuncioHome anuncio={anuncio} />
            }) }

            <p>{JSON.stringify(this.state.anuncios)}
            </p>
            </div>
            
        )
    
    }
    

    }
    
   

export default Categoria