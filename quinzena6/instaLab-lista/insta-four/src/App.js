import React from 'react';

import Post from './components/Post/Post';
import styled from "styled-components";


// Style
const MainStyle = styled.main`
  background: linear-gradient(
    90deg,
    hsla(154, 100%, 76%, 1) 0%,
    hsla(234, 100%, 83%, 1) 50%,
    hsla(288, 100%, 81%, 1) 100%
  );
`;

const ContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const InputStyle = styled.input`
  margin: 4px;
`;

const NovoPostInputStyle = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  margin: 2px;
`;


// Style


class App extends React.Component {


  state = {

    usuarios: [
      {
        nomeDoUsuario: "Crowley",
        fotoDoUsuario: "https://picsum.photos/50/50",
        fotoDoPost: "https://picsum.photos/200/150"
      },
      {
        nomeDoUsuario: "Levi",
        fotoDoUsuario: "https://picsum.photos/50/50?grayscale",
        fotoDoPost: "https://picsum.photos/seed/picsum/200/150"
      },
      {
        nomeDoUsuario: "Papus",
        fotoDoUsuario: "https://picsum.photos/id/237/50/50",
        fotoDoPost: "https://picsum.photos/200/150"
      }

    ]


  };

  //checkpoint 2
  adicionaPost = () => {
    const novoPost = {
      nomeDoUsuario: this.state.nomeUsuario,
      fotoDoUsuario: this.state.fotoUsuario,
      fotoDoPost: this.state.fotoPost,
    };

    const addPost = [...this.state.usuarios, novoPost];

    this.setState({
      usuarios: addPost,
      nomeUsuario: "",
      fotoUsuario: "",
      fotoPost: "",
    });
  };

  onChangeNomeDoUsuario = (event) => {
    this.setState({ nomeUsuario: event.target.value });
  };

  onChangeFotoDoUsuario = (event) => {
    this.setState({ fotoUsuario: event.target.value });
  };

  onChangeFotoDoPost = (event) => {
    this.setState({ fotoPost: event.target.value });
  };
  //checkpoint 2



  render() {




    const postDosUsuarios = this.state.usuarios.map((usuario) => {
      return (
        <Post
          nomeUsuario={usuario.nomeDoUsuario}
          fotoUsuario={usuario.fotoDoUsuario}
          fotoPost={usuario.fotoDoPost}
        />


      )
    })

    return (
      <MainStyle>



        <ContainerStyle>

          <h2>Insta4</h2>


          {/* checkpoint 2 */}
          
          <NovoPostInputStyle>
            <InputStyle
              value={this.state.nomeUsuario}
              onChange={this.onChangeNomeDoUsuario}
              placeholder={"Nome do Usuário"}
            />

            <InputStyle
              value={this.state.fotoUsuario}
              onChange={this.onChangeFotoDoUsuario}
              placeholder={"Link Para a Foto Do Perfil"}
            />

            <InputStyle
              value={this.state.fotoPost}
              onChange={this.onChangeFotoDoPost}
              placeholder={"Link Para a Foto Do Post"}
            />
            <button type={'submit'} onClick={this.adicionaPost}>Postar</button>
          </NovoPostInputStyle>
          {/* checkpoint 2 */}

          {postDosUsuarios}



        </ContainerStyle>

      </MainStyle>

    );
  }
}


export default App;
