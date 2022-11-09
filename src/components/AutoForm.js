import React, {useEffect, useState} from 'react'
import validation from './validation';

const AutoForm = ({submitForm}) => {
    const [values,setValues]= useState({
        fullname: "",
        email: "",
        password: "",
        auto: "",
        model: "",
        
    });

    const [dataIsCorrect, setDataIsCorrect] = useState(false)

    const [errors, setErrors] = useState({});
    const handleChange =(event) =>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    const handleFormSubmit =(event)=>{
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);

};
  useEffect(()=>{
    if (Object.keys(errors).length === 0 && dataIsCorrect){
        submitForm(true);
    }
  }, [errors]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">LOGIN</h2>
        </div>
        <form className="form-wrapper">
          
         
          <div className="fUllname">
            <label className="label">FullName</label>
            <input
              className="input"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <p className='error'>{errors.fullname}</p>}
          </div>
          <div className="ref-code">
            <label className="label">Ref_code</label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className='error'>{errors.password}</p>}
          </div>
          <div className="email">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className='error'>{errors.email}</p>}
          </div>

          <section className='auto'>
          <select className='auto-section'>
            <option>Select auto-maker...</option>
            <option value={values.auto} name="auto" onChange={handleChange}>Toyota Motor Corp</option>
            <option value={values.auto} name="auto" onChange={handleChange}>Volkswagen AG</option>
            <option value={values.auto} name="auto" onChange={handleChange}>Daimler AG</option>
            <option value={values.auto} name="auto" onChange={handleChange}>Ford Motor Co</option>
            <option value={values.auto} name="auto" onChange={handleChange}>Honda Motor</option>
            <option value={values.auto} name="auto" onChange={handleChange}> Bayerische Motoren Werke AG</option>
          </select>
          {errors.auto && <p className='error'>{errors.auto}</p>}
          </section>

           

          <section className='select-section'>
          <select className='main-select'onChange={handleChange}>
            <option>Select Model...</option>
            <optgroup label='Toyota Models'>
            <option value={values.model} name="model"> Avalon</option>
            <option value={values.model} name="model"> Corolla</option>
            <option value={values.model} name="model"> Camry</option>
            <option value={values.model} name="model"> Yaris</option>
            <option value={values.model} name="model"> Sienna</option>
            </optgroup>
            
            <optgroup label='Volkswagen Models'>
            <option value={values.model} name="model"> Golf R</option>
            <option value={values.model} name="model"> Tiguan</option>
            <option value={values.model} name="model"> Jetta Gli</option>
            <option value={values.model} name="model"> Atlas</option>
            <option value={values.model} name="model"> Arteon</option>
            </optgroup>
 
            <optgroup label='Daimler AG Models'>
            <option value={values.model} name="model"> Mercedes-Benz</option>
            <option value={values.model} name="model"> Fuso</option>
            <option value={values.model} name="model"> Smart</option>
            <option value={values.model} name="model"> Setra</option>
            <option value={values.model} name="model"> Western Star</option>
            </optgroup>
            
            <optgroup label='Ford Motor Models'>
            <option value={values.model} name="model" onChange={handleChange}> Fiesta Classic</option>
            <option value={values.model} name="model" onChange={handleChange}> EcoSport</option>
            <option value={values.model} name="model" onChange={handleChange}> Focus</option>
            <option value={values.model} name="model" onChange={handleChange}> Mustang</option>
            <option value={values.model} name="model" onChange={handleChange}> Mondeo</option>
            </optgroup>

            <optgroup label='Honda Motor Models'>
            <option value={values.model} name="model" onChange={handleChange}> Mercedes-Benz</option>
            <option value={values.model} name="model"> Fuso</option>
            <option value={values.model} name="model"> Smart</option>
            <option value={values.model} name="model"> Setra</option>
            <option value={values.model} name="model"> Western Star</option>
            </optgroup>

            <optgroup label='Bayerische  Motor Models'>
            <option value={values.model} name="model"> Sedans</option>
            <option value={values.model} name="model"> X6</option>
            <option value={values.model} name="model"> 3 Series</option>
            <option value={values.model} name="model"> 7 Series</option>
            <option value={values.model} name="model"> X1</option>
            </optgroup>
          </select>
          {errors.model && <p className='error'>{errors.model}</p>}

          </section>

          


          <section className='checkbox-section'>
          <input type="checkbox" onChange={handleChange}/>
          <label htmlFor='vehicle'> Engine issue</label><br></br>
          <input type="checkbox" onChange={handleChange}/>
          <label htmlFor='vehicle'> Gearbox issue</label><br></br>
          <input type="checkbox" onChange={handleChange}/>
          <label htmlFor='vehicle'> Need body repair</label><br></br>
          <input type="checkbox" onChange={handleChange}/>
          <label htmlFor='vehicle'> Need repainting</label><br></br>
          <input type="checkbox" onChange={handleChange}/>
          <label htmlFor='vehicle'> Wiring problems</label><br></br>
          <input type="checkbox" onChange={handleChange}/>
          <label htmlFor='vehicle'>  Oil leakage</label><br></br>
          <input type="checkbox" onChange={handleChange}/>
          <label htmlFor='vehicle'> Brake issue</label><br></br>
          </section>

         


          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
          
         
          
        </form>
      </div>
    </div>
  )
}

export default AutoForm
