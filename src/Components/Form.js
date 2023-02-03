import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from './Data context';
import { useContext } from 'react';
import '../App.css'

const AddPage = () => {
    let context=useContext(DataContext);
    const navigate = useNavigate();
    const [inputData, setInputdata] = useState({
        Name: "",
        Age: "",
        Course: "",
        Batch: ""
    });
    const [inputStore,setInputstore] =useState([]);
    const changeHandle = (event) => {
        setInputdata({ ...inputData, [event.target.name]: event.target.value })
    }
    let {Name,Age,Course,Batch}=inputData;
    const AddStudents = () => {setInputstore([...inputStore,{Name,Age,Course,Batch}])
        setInputdata({Name:"",Age:"",Course:"",Batch:""})
        context.entries.push(inputData)
        navigate('/Students')
    }
    return (
        <div>
          <input  name='Name' placeholder=' Name' type="text" value={inputData.Name} onChange={changeHandle} />
          <input name='Age' placeholder=' Age' type="number" value={inputData.Age} onChange={changeHandle} />
          <input name='Course' placeholder=' Course' type="text" value={inputData.Course} onChange={changeHandle} />
           <input name='Batch' placeholder=' Batch' type="text" value={inputData.Batch} onChange={changeHandle}/>
            <br/>
                <button className='btn-add-std' type="submit" onClick={AddStudents}><h3>Add</h3></button><br/>
                <button className='btn-cancel-std' onClick={()=>{navigate(-1)}}><h3>Cancel</h3></button>
                
        </div>
    )
}
export default AddPage;
