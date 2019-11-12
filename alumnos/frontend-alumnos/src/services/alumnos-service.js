import axios from 'axios'

class AlumnosService {
  constructor(){
    this.appAlumno = axios.create({
      baseURL:'http://localhost:4000/api'
    })
  }
    getAllAlumnos(){
      return this.appAlumno.get('/alumnos')
      .then(response => response)
    }
    addOneAlumno(newAlumno){
      return this.appAlumno.post('/alumnos/new', newAlumno)
      .then(response => response)
    }
    searchAlumno(alumno){
      return this.appAlumno.post(`/alumnos/search`, alumno)
      .then(response => response)
    }


}

const appAlumno = new AlumnosService();

export default appAlumno;