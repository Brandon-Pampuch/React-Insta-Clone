import React from 'react'


const higherOrderComponent = (wrappedComponent) => class extends React.Component {

    constructor(props) {
        super(props) 
            this.state ={

            }
        
    }





    render() {
        return <wrappedComponent />
    }

}

export default higherOrderComponent