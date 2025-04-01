// createClient.js
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const CreateClient = () => {
    const [client, setClient] = useState({nom: '', adresse: '', tel: ''});
    const navigate = useNavigate();

    const handleCreate = async () => {
        await axios.post('http://localhost:3001/clients', client); // ajout client
        navigate('/clients', { replace: true}); //apres ajout retour a la liste
    };

    return(
        <div>
            <center>
            <h1> creer un nouveau client</h1>
            <form>
                <label> Nom du client : </label>
                <input type="text" value={client.nom} onChange={(e) => setClient({...client, nom: e.target.value})}></input> <br/><label>adresse : </label>
                <input type="text" value={client.adresse} onChange={(e) => setClient({...client, adresse: e.target.value})}></input> <br/><label>telephone : </label>
                <input type="text" value={client.tel} onChange={(e) => setClient({...client, tel: e.target.value})}></input> <br/><button type="button" onClick={handleCreate}>creer</button>
            </form>
            </center>
        </div>  
    );
};

export default CreateClient;