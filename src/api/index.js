import axios from "axios"

export default function getInformation() {
    return async (req, res) => {

    const response = await axios.get('http://localhost:4000/')
    res.status(200).json(response)
    console.log(response)
    return response
    }}