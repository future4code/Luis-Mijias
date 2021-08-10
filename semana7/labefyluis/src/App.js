import React from "react";
import CreatePlaylist from "./components/createNewPlaylist";
import Playlists from "./components/playlists";
import axios from "axios";


class App extends React.Component {
  state = {
    page: "playlists",
    button: ""
  }

  componentDidMount() {
    this.changePage()
  }

  changePage = () => {
    if (this.state.page === "createPlaylist") {
      this.setState({ page: "playlists" })
      this.setState({ button: "Crie sua Playlist" })
    } else if (this.state.page === "playlists") {
      this.setState({ page: "createPlaylist" })
      this.setState({ button: "Aqui suas playlists" })
    }
  }
  renderPage = () => {
    switch (this.state.page) {
      case "createPlaylist":
        return <CreatePlaylist/>;
      case "playlists":
        return <Playlists/>;
      default:
        return <div></div>;
    }
  }



  render() {
    return (
      < div > 
        

        <button onClick={this.changePage}>{this.state.button}</button>
        {this.renderPage()}

      </div>
    );
  }
}

export default App;
