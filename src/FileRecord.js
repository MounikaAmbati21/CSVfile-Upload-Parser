import React,{useState} from 'react'
import Table from './Table'
import ColumnChart from './ColomnChart'
import Search from './Search'

const FileRecord = (props)=>{
    const {fileRecord} = props
    const [student , setStudent] = useState('')
    //console.log(fileRecord)

    const hostDetails = fileRecord.find(file=>{
        return file.Guest==='No'
    })
    const hostName= hostDetails['Name (Original Name)']
    
    const time= `${hostDetails['Total Duration (Minutes)']} minutes (${Math.floor(hostDetails['Total Duration (Minutes)']/60)} hour ${hostDetails['Total Duration (Minutes)']%60} minutes)`

    const handleChange = (e) =>{ // to handle search
        const result=e.target.value
        setStudent(result)
    }

    
    const selectedStudent = ()=>{
        const result=fileRecord.filter(ele=>{
        return ele['Name (Original Name)'].toLowerCase().includes(student) || ele['User Email'].toLowerCase().includes(student)
    })
    // console.log(result)
     return result
    }

    return (
        <div className="mb-3">
        <div className="row">
            <div className="col-md-6">
                <h2>Report</h2>
                <h5>Host Name - {hostName}</h5>
                <h5>Total Participants - {fileRecord.length}</h5>
                <h5>Duration - {time}</h5>
            </div>
            <div className="col md-6">
                <Search handleChange={handleChange} stuent={student}/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <Table list={selectedStudent()}/>
            </div>
            <div className="col-md-6">
                <ColumnChart list={fileRecord} />
            </div>
        </div>
        </div>
    )
}

export default FileRecord