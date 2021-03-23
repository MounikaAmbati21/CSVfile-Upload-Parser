import React from 'react'

const Table=(props)=>{
    const {list} = props

    return (
        <div className="col-md-7">
            <table className="table table-striped ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Duration</th>
                        <th>Guest/Host</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((participant,i)=>{
                            return (
                                <tr key={i}>
                                    <td>{participant['Name (Original Name)']}</td>
                                    <td>{participant['User Email']}</td>
                                    <td>{participant['Total Duration (Minutes)']}</td>
                                    <td>{participant['Guest']==='No' ? 'Host' : 'Guest'}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table