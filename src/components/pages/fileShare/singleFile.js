import React, { Component } from 'react'

export default class  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            file: {}
        }
    }
    componentDidMount() {
        fetch(`http://127.0.0.1:5000/file/get/${this.props.id}`, {method: "GET"})
        .then(response => response.blob())
        .then(data => {
            const file = new File([data], this.props.name, { type: this.props.type })
            this.setState({
                file: file
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className=''>
                Some File
            </div>
        )
    }
}
