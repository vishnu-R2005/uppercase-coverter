import React from 'react'

export default function about() {
    let mystyle={
        color:"red",
        backgroundColor:"green",
    }
  return (
    <div class="container" style={mystyle}>
      <h1>About us :</h1>
      <button type="button" class="btn btn-primary">Enable Dark Mode</button>
    </div>
  )
}
