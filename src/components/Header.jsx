import React from 'react'
import NewBudget from './NewBudget'

const Header = ({budget, setBudget}) => {
  return (   
   <header className='bg-cyan-200'>
    <h1 className='font-bold text-center text-white text-2xl uppercase py-10'
    >Planificador de gastos</h1>
    <NewBudget
    budget = {budget}
    setBudget = {setBudget}/>
   </header>
  )
}

export default Header