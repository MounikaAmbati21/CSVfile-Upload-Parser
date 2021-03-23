import React ,{ useState} from 'react'
import Papa from "papaparse"
import FileRecord from './FileRecord'


const App = (props)=>{
    const [selectedFile, setSelectedFile] = useState([])
    const [data , setData] = useState([])
    const [isSelected, setIsSelected] = useState(false)

    const handleChange = (e)=>{
        //console.log(e.target.files[0])
        setSelectedFile(e.target.files[0])
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        Papa.parse(selectedFile, {
          download: true,
          delimiter: ",",
          chunkSize: 3,
          header: true,
          complete: function(response) {
            //console.log(response.data)
            setData(response.data)
            setIsSelected(true)
           },
          error: (err) =>{
              alert(err.message)
          }
        })
    }

    return (
        <div className="container">
            <div className="col  mt-2 md-2">
            <h1 >File Upload + CSV parser</h1>
            <form onSubmit={handleSubmit} >
                <input type="file" onChange={handleChange}  accept=".csv,.xlsx,.xls"/>
                <input type="submit" value="Upload file" />
            </form>
            </div>
            <div className="col  mt-2"> 
            <hr/>
            {
                isSelected && <FileRecord fileRecord={data} />
            }
            </div>
        </div>
    )
}
export default App