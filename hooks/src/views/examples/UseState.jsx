import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    const [marca, setMarca] = useState('Ford')
    const [modelo, setModelo] = useState('Mustang')
    const [ano, setAno] = useState('1964')
    const [color, setColor] = useState('Preto')

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className='text'>{count}</span>
                <div>
                    <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                    <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
                    <button className="btn" onClick={() => setCount(current => current + 1000)}>+1000</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02"/>
            <input type="text" className="input" 
                value={name} 
                onChange={(e) => setName(e.target.value)}/>
            <span className="text">{name}</span>  
            <SectionTitle title="Exercício #03"/>  
            <div>
                <h1>Meu {marca}!</h1>
                <p>modelo {modelo} ano {ano} cor {color}</p>
                <button className="btn" onClick={() => setMarca('Fiat')}>Marca</button>
                <button className="btn" onClick={() => setModelo('Palio')}>Modelo</button>
                <button className="btn" onClick={() => setAno('2006')}>Ano</button>
                <button className="btn" onClick={() => setColor('Prata')}>Cor</button>
            </div>
        </div>
    )
}

export default UseState
