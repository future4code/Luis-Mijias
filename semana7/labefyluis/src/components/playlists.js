import React from "react";
import axios from "axios";



class Playlists extends React.Component {

    state = {
        playlist: []
    }

    componentDidMount() {
        this.getPlaylists()
    }

    getPlaylists = async () => {
       
        try {
            const res = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", { headers: { Authorization: "luis-mijias-lovelace" } })
        } catch (e) {
            console.log(e)
        }
    }

    deletePlaylist = async (id) => {
        
        try {
            const result = window.confirm("Quer excluir o item")
            if (result == true) {
                const res = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, { headers: { Authorization: "luis-mijias-lovelace" } })
                this.getPlaylists()
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        const playlist = this.state.playlist.map ((play) => (
            <div key={play.id}>
                
                    {play.name}
                    <button
                    onClick={() => this.deletePlaylist(play.id)}
                    >x</button>
               
            </div>
        ))

    return (
        <div>
            <h2>Playlists Aqui</h2>
            {playlist}
        </div>
    )    
    }






}
export default Playlists









