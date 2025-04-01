// UpdateClient.js
import React, { useState, useEffect } from 'react';
import { useParams, /*useNavigate*/ } from 'react-router-dom';
import axios from 'axios';

const UpdateClient = () => {
    const { id } = useParams();//récupération id du client à modifier
    const [client, setClient] = useState({ nom: '', adresse: '', tel: '' });
    // const navigate = useNavigate();

    const handleUpdate = async () => {
        await axios.put(`http://localhost:3001/clients/${id}`, client);
        // navigate('/clients', { replace: true });//retour à la liste
        window.location.href = '/clients'; 
    };

    useEffect(() => {
        const fetchClient = async () => {
        const response = await axios.get(`http://localhost:3001/clients/${id}`);
        
        setClient(response.data);//récupération infos du client à modifier
        };
        
        fetchClient();
    }, [id]);

   
    return (
        <div>
            <h1>Mettre à jour le client</h1>
            <form>
                <label>Nom du client:</label>
                <input type="text" value={client.nom} onChange={(e) => setClient({ ...client, nom: e.target.value })} /><br/>
                <label>Adresse:</label>
                <input type="text" value={client.adresse} onChange={(e) => setClient({...client, adresse: e.target.value })} /><br/>
                <label>Téléphone:</label>
                <input type="text" value={client.tel} onChange={(e) => setClient({ ...client, tel: e.target.value })} /><br/>
                <button onClick={handleUpdate}>Mettre à jour</button>
            </form>
        </div>
    );
};

export default UpdateClient;
