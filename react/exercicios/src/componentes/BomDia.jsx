import React from 'react'

// um componente não retorna várias tags, ele retorna um único elemento. para isso existe essas soluções:
// retornando um array de tags
export default props => [ // passando parâmentro pro componente
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>
]

// usando o fragment (precisa importar)
// export default props =>
//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>

// retorndo dentro de uma div (essa solução é a mais usada, faz mais sentido)
// export default props =>
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>