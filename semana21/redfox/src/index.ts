import { app } from './app'

app.get('/ping', (req, res) => {
    try{
        res.send('pong. Funcionou Luis')
    }catch(error: any){
        console.log(error.message)
    }
})