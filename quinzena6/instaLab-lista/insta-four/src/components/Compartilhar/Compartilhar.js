import React, {
    Component
} from 'react'
import './Compartilhar.css'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import twitter from '../../img/twitter.svg'



export class Compartilhar extends Component {
    state = {
        compartilhar: ' ',
    }


    onInstagram = () => {
        console.log('Post compartilhado no instagram')
    }
    onFacebook = () => {
        console.log('Post compartilhado no Facebook')
    }
    onTwitter = () => {

        console.log('Post compartilhado no twitter')
    }



    render() {

        console.log(this.state.compartilhar)

        return <div className = {'compartilhar-class'} >

        <img
        src = {instagram}
        value = {this.onClickComentario}
        onClick = {this.onInstagram}
        alt = 'instagram' 
        />

        <img
        src = {facebook}
        value = {this.onClickComentario}
        onClick = {this.onFacebook}
        alt = 'facebook' 
        />

        <img
        src = {twitter}
        value = {this.onClickComentario}
        onClick = {this.onTwitter}
        alt = 'twitter'
        />
    </div>
     }

}