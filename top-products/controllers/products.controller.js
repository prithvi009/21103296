import axios from 'axios';


export const getProducts = async (req, res) => {
    try {
        const {top, minPrice, maxPrice} = req.query;
        const Authorization = req.headers.authorization.split(' ')[1];
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.API_URL}/companies/AMZ/categories/Laptop/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
            headers: { 
              'Authorization': `Bearer ${Authorization}` 
            }
          };
          axios.request(config)
          .then((response) => {
            res.status(200).send(response.data);
          })
          .catch((error) => {
            res.status(400).send({message: 'Invalid credentials'});
          });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}
