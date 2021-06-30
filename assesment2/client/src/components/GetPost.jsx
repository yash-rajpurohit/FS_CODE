import React from 'react';
import {useState, useContext, useEffect} from 'react'

function GetPost() {


    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api/id_data')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setData(res)})
    },[])




      // post table

  return (
      <div className='table'>
          <table>
              <tr>
                  <th>id</th>
                  <th>title</th>
                  <th>body</th>
              </tr>
              {
                  data.map(datapost =>
                    <tr>
                        <td>{datapost.id}</td>
                        <td>{datapost.title}</td>
                        <td>{datapost.body}</td>
                    </tr>
                    )
              }
          </table>
      </div>
  );
}

export default GetPost;