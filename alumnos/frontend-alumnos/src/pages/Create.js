import React, { Component } from 'react';
import alumnosService from '../services/alumnos-service';
import {Redirect} from 'react-router-dom'

class Create extends Component {
  state={
    name: '',
    surname: '',
    image: '',
    type: '',
    description: '',
    redirect: false
  }

  handleSubmit=(event) => {
    const {name, surname, image, type, description} = this.state
    event.preventDefault()
    alumnosService.addOneAlumno({
      name,
      surname,
      image,
      type,
      description
    })
   
    .then((response)=>{
    
      this.setState({
        redirect: true
      })
    })
    .catch(error =>{console.log(error)})
    }

  handleOnchange=(event) => {
    const {name, value} = event.target;
    this.setState({
      [name]:value
    })
  }

  render(){
    const {name, surname, image, type, description, redirect} = this.state
    return (
      <div>
        <h1>Nuevo Alumno</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' value={name} onChange={this.handleOnchange}/>
          <label htmlFor='surname'>Surname</label>
            <input type='text' id='surname' name='surname' value={surname} onChange={this.handleOnchange}/>
          <label htmlFor='image'>Imagen</label>
            <input type='text' id='image' name='image' value={image} onChange={this.handleOnchange}/>
          <label htmlFor='description'>Descripcion</label> 
            <input type='text' id='description' name='description' value={description} onChange={this.handleOnchange}/> 
          <label htmlFor='type'>Genero</label>
            <select type='' id='type' value={type} onChange={this.handleOnchange} name='type'>
              <option value=''></option>
              <option value='man'>Hombre</option>
              <option value='woman'>Mujer</option>
            </select>
            <label htmlFor='category'>Category</label>
          <button type='submit'>Crear nuevo Alumno</button>
        </form>
        {redirect ? <Redirect to = '/list'/> : null}
      </div>
    )
  }
}
export default Create;
