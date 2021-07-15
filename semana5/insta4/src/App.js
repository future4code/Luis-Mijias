import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/200'}
        />
          <Post
          nomeUsuario={'Marina'}
          fotoUsuario={'https://picsum.photos/40/40'}
          fotoPost={'https://picsum.photos/200/150'}
        />
          <Post
          nomeUsuario={'Luis Carlos'}
          fotoUsuario={'https://picsum.photos/45/45'}
          fotoPost={'https://picsum.photos/200/100'}
        />
      </MainContainer>
    );
  }
}

export default App;
