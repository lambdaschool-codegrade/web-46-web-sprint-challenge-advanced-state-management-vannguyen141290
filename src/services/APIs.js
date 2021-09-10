import axios from "axios";

const URL_LINKS = {
    smurf: 'http://localhost:3333/smurfs'
};

export default function getSmurfs() {
    return axios.get(URL_LINKS.smurf)
}