import React from "react";
import axios from "axios";



class CreatePlaylist extends React.Component {
    state = {
        inputName: ""
    }


    onChangeInputname = (e) => {
        this.setState({ inputName: e.target.value })
    }

    createPlaylist = async () => {
        const body = { name: this.state.inputName }
        

        try {
            const res = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists" , body, { headers: { Authorization: "luis-mijias-lovelace" } })
            console.log(res.data)
            this.setState({inputName: res.data})
            alert("Playlist cadastrada com sucesso!")
        }
        catch (e){
            console.log (e)
        }
    }

    render() {
        return(
            <div>
                <h2>Crie sua Playlist</h2>
                <input
                value={this.state.inputName}
                onChange ={this.onChangeInputname}
                placeholder = {"nome da sua playlist"}
                />
                <button onClick = {this.createPlaylist}>Salvar</button>
            </div>
        )
    }
}
export default CreatePlaylist