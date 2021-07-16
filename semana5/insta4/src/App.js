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
          nomeUsuario={'Luis Carlos'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/151'}
        />
          <Post
          nomeUsuario={'Marina'}
          fotoUsuario={'https://picsum.photos/49/49'}
          fotoPost={'https://picsum.photos/200/150'}
        />
          <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/51/51'}
          fotoPost={'https://picsum.photos/200/152'}
        />
      </MainContainer>
    );
  }
}

export default App;
