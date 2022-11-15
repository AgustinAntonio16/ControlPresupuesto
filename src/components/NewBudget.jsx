import {useState} from 'react'

const NewBudget = ({budget, setBudget}) => {
  const[message, setMessage] = useState("")

  const handleBudget = (e) =>{
    e.preventDefault()
    console.log(Number(budget))
  }
  return (
    <div className='bg-red-100 p-10 w-1/4 lg:w-1/2 max-w-xl sm: w-full   rounded-2xl m-auto'>
      <form onSubmit={handleBudget}>
        <div className='text-center  place-items-center'>
          <label className = "font-bold uppercase container">Definir presupuesto</label>
          <input
          className='text-center w-3/4 mb-3 mt-3 rounded-lg'
          type="text"
          placeholder='Añade tu presupuesto'
          value={budget}
          onChange = {(e) => setBudget(e.target.value)}
          />
          
          <input
          className='bg-blue-500 font-bold uppercase w-3/4 rounded-lg cursor-pointer'
          type="submit"
          value="Agregar"/>
          
        </div>
      </form>
    </div>
  )
}

export default NewBudget