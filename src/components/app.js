import React from 'react';
import SearchbarComponent from './searchbarcomponent';
import unsplash from '../api/unsplash'
import ImageList from './imagelist'
class App extends React.Component{

    state={images: []};
     onSearchSubmit=async term=>{
        console.log(term);
       const response =await unsplash
        .get('/search/photos',{params:{query: term}
    });
    this.setState({images: response.data.results})
    }

    render(){
 return(
     <div className="ui container" style={{marginTop:'10px'}}>
        <SearchbarComponent onSubmit={this.onSearchSubmit}/>
        Found:{this.state.images.length} images
        <ImageList images={this.state.images}/>
     </div>
 ); 
}
}
export default App;
