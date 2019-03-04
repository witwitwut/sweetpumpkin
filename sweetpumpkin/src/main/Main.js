import React from "react"
import Navigation from "./navigation/Navigation"
import Movies from "./movies/Movies"

class Main extends React.Component {
    state = {
        genre: "comedy",
        year: {
            label: "year",
            min: 1990,
            max: 2019,
            step: 1,
            value: {min: 2000, max: 2010}
        },
        rating: {
            label: "rating",
            min: 0,
            max: 10,
            step: 1,
            value: {min: 8, max: 10}
        },
        runtime: {
            label: "runtime",
            min: 0,
            max: 300,
            step: 15,
            value: {min: 60, max: 120}
        }
    }
    
    onGenreChange = event => {
        this.setState({genre: event.target.value})
    }

    onChange = data => {
        this.setState({
            [data.type]: {
                ...this.state[data.type],
                value: data.value
            }
        })
    }
    
    setGenres = genres => {
        this.setState({genres})
    }
    
    render() {
        return(
            <section className="main">
                <Navigation 
                    onChange={this.onChange}
                    setGenres={this.genres}
                    onGenreChange={this.onGenreChange}
                    {...this.state}                    
                />
                <Movies />
            </section>
        )
    }
}

export default Main