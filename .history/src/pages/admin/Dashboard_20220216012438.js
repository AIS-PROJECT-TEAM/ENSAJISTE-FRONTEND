import React, {useState} from "react";
import { Container } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import { headersForm, postRequest } from "../../utils/RequestHandler";


export default function Dashboard(props){

    const {currentUser} = useAuth();

    const [test,setTest] = useState("");
    const [file, setFile] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("file", file, file.name);
        formdata.append("test", test);

        const result = await postRequest("file/upload", formdata, true, headersForm);
        console.log(result);

    }

    const onFileChange = e => {
        setFile(e.target.files[0])
    }
    return(
        <Container>
            Hello from Admin Dashboard
            <form>
                <input value={test} type="text" name="test" onChange={e => setTest(e.target.value)} />
                <input type="file" name="file" onChange={onFileChange} />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </Container>
    )
}