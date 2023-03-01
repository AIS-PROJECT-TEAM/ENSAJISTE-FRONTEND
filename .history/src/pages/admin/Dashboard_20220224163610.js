import React, {useState} from "react";
import { Container } from "react-bootstrap";
import Feed from "../../components/Feed";
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
        <div>
            <Feed />
        </div>
    )
}