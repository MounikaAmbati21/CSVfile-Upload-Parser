import React from 'react'

const Search = (props)=>{
    const {student , handleChange} = props

    return (
        <div>
            <input type="text" value={student} onChange={handleChange} placeholder="search by name or email" className="border border-2 border-info  form-control"/>
        </div>
    )
}

export default Search