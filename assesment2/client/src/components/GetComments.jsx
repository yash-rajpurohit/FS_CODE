import React from 'react';
import {useState, useContext, useEffect} from 'react'

function GetComments() {


  const [data, setData] = useState([])


  // change numeric value to get response on the post id
  useEffect(() => {
      fetch('http://localhost:4000/api/id_data/1')
      .then(res => res.json())
      .then(res => {
          console.log(res)
          setData(res)})
  },[])


// post comment table
  return (
    <div className='table'>
          <table>
              <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>email</th>
                  <th>comments</th>
              </tr>
              {
                  data.map(datapost =>
                    <tr>
                        <td>{datapost.postId}</td>
                        <td>{datapost.name}</td>
                        <td>{datapost.email}</td>
                        <td>{datapost.body}</td>
                    </tr>
                    )
              }
          </table>
      </div>
  );
}

export default GetComments;