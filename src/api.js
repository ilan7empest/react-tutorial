import React, { Component } from 'react'

class API extends Component {
    state = {
        data: [],
    }

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url =
            'https://ghibliapi.herokuapp.com/films'

        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    data: result
                })
            })
    }

    render() {
        const { data } = this.state
        
        const result = data.map((entry, index) => {
            // return <li key={index}><span>{entry.title}</span><span>{entry.description}</span></li>

            return (
                <div className="card col-2 m-2">
                    <div className="card-body">
                        <h5 className="card-title">{entry.title}</h5>
                        <p className="card-text">{entry.description}</p>
                        <a href="{entry.url}" class="btn btn-primary">Go somewhere</a>
                     </div>
                </div>
            )
        })

        return <div className="d-flex flex-wrap">{result}</div>
    }
}

export default API