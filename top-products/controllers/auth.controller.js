import axios from 'axios';

export const companyRegister = async(req, res) => {
    try{
        const { companyName, ownerName, rollno, ownerEmail, accessCode } = req.body;
        const response = await fetch(`${process.env.API_URL}/register`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                companyName,
                ownerName,
                rollno,
                ownerEmail,
                accessCode
            })
        })

        if(response.status !== 200){
            res.status(400).send({message: 'Invalid credentials'});
        }

        const data = await response.json();
        res.status(200).send(data);
    }
    catch(err){
        res.status(500).send({message: err.message});
    }
}

export const companyLogin = async(req, res) => {
    try{
        const { companyName, clientID, clientSecret, ownerName, ownerEmail, rollNo } = req.body;
        const response = await axios.post(`${process.env.API_URL}/auth`,{
            companyName,
            clientID,
            clientSecret,
            ownerName,
            ownerEmail,
            rollNo
        })
        res.status(200).send(response.data);
    }
    catch(err){
        res.status(500).send({message: err.message});
    }
}