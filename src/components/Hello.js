import React from "react"

const Hello  = () => {
        // return (
        //     <div>

        //         <h1>Hallo</h1>
        //     </div>
        // )

    return React.createElement(
        'div',
        {id:'hello', className:'dummyHello'},
        React.createElement('h1', null,'Hello pals') 
    )
}

export default Hello