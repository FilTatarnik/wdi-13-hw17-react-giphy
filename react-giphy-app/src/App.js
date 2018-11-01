import React, { Component } from 'react';
// import logo from './logo.svg';
import GiphyComponent from './GiphyComponent'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gifs: []
    }
  }

  getGifs = async () => {
      try{
        const gifs = await fetch('https://api.giphy.com/v1/gifs/random?api_key=5dv8jSACGboBKpejdWUMaN9kKYO23OCH&tag=&rating=G')

        const gifsJson = await gifs.json();
        console.log(gifsJson, '<---------gifsJSON');
        return gifs.json
      }catch(err){
        return err
      }
  }
  render() {
    return (
      <div className="App">

        <h1>Giphy Search App</h1>
        <GiphyComponent />
      </div>
    );
  }
}

export default App;
