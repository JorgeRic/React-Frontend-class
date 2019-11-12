import React, { Component } from 'react'
import alumnosService from '../services/alumnos-service'
import {Link} from 'react-router-dom'
import Search from './Search'


class List extends Component {
  state={
    alumnos:[],
  }
  componentDidMount(){
    alumnosService.getAllAlumnos()
    .then((response)=>{
      this.setState({
        alumnos:response.data.listOfAlumnos
      })
    })
  }
  render() {
    const {alumnos} = this.state
    return (
      <div>
        <h2>Lista de alumnos</h2>
        <Link to='/create'>
          <button>Crear Nuevo Alumno</button>
        </Link>
        <Link to='/search'>
          <button>Buscar Alumno</button>
        </Link>
        {alumnos.length > 0 ? alumnos.map((alumno)=>{
          return(
            <article key={alumno._id}>
              <img src={alumno.image} alt={alumno.name}/>
              <h4>{alumno.name}</h4>
            </article>
          )
        }):<p>Loading ...</p>}
      </div>
    )
  }
}
export default List

// import React, { Component } from 'react';
// import Foodbox from './components/FoodBox';
// import foods from './data/foods.json';
// import Button from './components/Button';
// import Search from './components/Search'
// import './App.css';

// class App extends Component {
//   state = {
//     foods,
//     originalFoods: foods,
//     name: '',
//     calories: '',
//     image: '',
//     isAddingNew: false,
//     quantity: []
//   }

//   changeFoods = (foods) => {
//     this.setState({foods})
//   }

//   showFood = (foods) => {
//     this.setState({foods})
//   }


//   render() {
//     return (
//       <div className="App">
//       <Button />
//       <Search changeFoods={this.changeFoods} originalFoods={this.state.originalFoods}/>
//       <Foodbox foods={this.state.foods} showFood={this.showFood}/>
//       </div>
//     );
//   }
// }

// export default App;