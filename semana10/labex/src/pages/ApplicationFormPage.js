import React from "react"
import { useHistory } from "react-router"
import useForm from "../hooks/useForm"

export const ApplicationFormPage = () => {
    const history = useHistory()
    const goToHome = () => {
        history.push("/")
    }
    const { form, onChange, cleanFields } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "",
    })

    const cadastrar = (event) => {
        event.preventDefault();
        console.log("Formulário enviado com sucesso!!!", form)


    }
    return (
        <div>
            <p>Aplicando para vaga
            </p>
            <br></br>
            <h1>Inscrever-se para uma viagem</h1>
            <iframe
                src="https://giphy.com/embed/l0HlHLCqPLdy4ZGmI"
                width="480"
                height="350"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen>
            </iframe>
            <form onSubmit={cadastrar}>
                <br />
                <br />
                <select>
                    <option>---Escolha uma Viagem---</option>
                    <option>surfar em saturno</option>
                    <option>espacial dinner</option>
                    <option>Bronzeando em Marte</option>
                    <option>Nas nuvens de Plutão</option>

                </select>
                <br />
                <br />
                <input
                    name={"name"}
                    value={form.name}
                    onChange={onChange}                   
                    placeholder="Nome"
                />
                <br />
                <br />
                <input
                    value={form.age}
                    onChange={onChange}
                    name={"age"}
                    placeholder="Idade"
                />
                <br />
                <br />
                <input
                    valeu={form.applicationText}
                    onChange={onChange}
                    name={"applicationText"}
                    placeholder="Texto de Candidatura"
                />
                <br />
                <br />
                <input
                    value={form.profession}
                    onChange={onChange}
                    name={"profession"}
                    placeholder="Profissão"

                />
                <br />
                <br />
                <select>
                    <option>------selecione o país-------</option>
                    <option 
                    name="country"
                    onChange={onChange}
                    value={form.country}>Brasil
                    </option>
                    <option
                     name="country"
                    onChange={onChange}
                    value={form.country}>Nicaragua
                    </option>
                    <option
                     name="country"
                    onChange={onChange}
                    value={form.country}>Cuba
                    </option>
                    <option
                     name="country"
                    onChange={onChange}
                    value={form.country}>Costa Rica
                    </option>
                </select>
                <br />
                <br />
                <button>Inscrever-se</button>
                <br />
            </form>

            <br />
            <br />
            <br />
            <br />
            <button onClick={goToHome}>Voltar para Home</button>
        </div>
    )
}