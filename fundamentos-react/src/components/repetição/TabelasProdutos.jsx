import React from "react"
import produtos from "../../data/produtos"
import './TabelasProdutos.css'

function TabelasProdutos(props){
    const prod = produtos.map((produto) => {
        return(
            <tr key={produto.id}>
                <td>{produto.id}</td> 
                <td>{produto.produto}</td>
                <td>R${produto.preço}</td>  
            </tr>
        )
    })
        
    return(
        <div className="tabela">
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                        {prod}
                </tbody>
            </table>
        </div>
    )
}
export default TabelasProdutos