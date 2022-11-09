import React from 'react'

const DisplayResult = ({values}) => {
   
  return (
    <div>
              <table className="table">
            <thead>
                <tr className='table-row'>
                    <th>Full Name</th>
                    <th>Ref_code</th>
                    <th>Email</th>

                </tr>
            </thead>
           {/* <tbody>
            {
                values.map((value, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{value.fullName}</td>
                            <td>{value.ref_code}</td>
                            <td>{value.email}</td>
                            <td>{value.auto}</td>
                            <td>{value.model}</td>
                            
                        </tr>
                    )
                })
            }
          </tbody>*/}
        </table>
    </div>
  )
}

export default DisplayResult
