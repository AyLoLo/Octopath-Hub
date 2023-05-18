import Header from './Header';
import SearchBar from './SearchBar';
import TravelersContainer from './TravelersContainer';
import TravelerForm from './TravelerForm';
import OctopathContainer from './Octopath';
import OctopathTwoContainer from './OctopathTwo';
import NavBar from './NavBar';
import Home from './Home';
import './App.css';
import { useState, useEffect } from 'react';
import { Route , Switch } from 'react-router-dom/cjs/react-router-dom';

function App() {

  const [travelers, setTravelers] = useState([])
  const [searchText, setSearchText] = useState("")
  const [formData, setFormData] = useState({
    name: "Mysterious Figure",
    sprite: "https://thumbs.gfycat.com/TestyJauntyClingfish-max-1mb.gif",
    image: "https://files.cults3d.com/uploaders/16165612/illustration-file/11e78db9-d2ae-4d38-a3fe-e7cfebbb4eb4/Psyduck01.jpg",
    quote: "....?",
    bio: "It's behavior relates mostly to the feelings of a typical FlatIron student",
    job: "Trying",
    game: "Champions Of The Continent"
  })

  useEffect(() => {
    fetch("http://localhost:3000/travelers")
      .then(response => response.json())
      .then(travelersData => setTravelers(travelersData))
  }, [])

  function addTraveler(event){
    event.preventDefault()
    
    fetch("http://localhost:3000/travelers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newTraveler => setTravelers([...travelers, newTraveler]))
  }
  
  
  function partWithTraveler(id) {
    fetch(`http://localhost:3000/travelers/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      setTravelers(travelers.filter(traveler => {
        return traveler.id !== id
      }))
    })
  }
  
  const filteredTravelers = travelers.filter(traveler => {
    if(searchText === ""){
      return true
    } else {
      return traveler.name.toLowerCase().includes(searchText.toLowerCase()) || traveler.job.toLowerCase().includes(searchText.toLowerCase())
    }
   })

   const octopathTravelers = travelers.filter(traveler => {
    if(traveler.game === "Octopath Traveler"){
      return true
    } else {
      return null
    }
   })

   const octopathTravelersTwo = travelers.filter(traveler => {
    if(traveler.game === "Octopath Traveler Two" ){
      return true
    } else {
      return null
    }
   })


  function updateSearchText(event){
    setSearchText(event.target.value)
  }

  function updateFormData(event){
    setFormData({...formData, [event.target.id]: event.target.value})
  }

  return (
    <div className="app">
      <NavBar />
      <Header />
      <Switch>
        
        <Route path="/summon_traveler">
          <TravelerForm updateFormData={updateFormData} addTraveler={addTraveler} />  
        </Route>
        
        <Route path="/search_traveler">
          <SearchBar updateSearchText={updateSearchText} searchText={searchText} />
          <TravelersContainer  travelers={filteredTravelers} partWithTraveler={partWithTraveler}/>
        </Route>
        
        <Route path="/octopath_traveler">
        <OctopathContainer travelers={octopathTravelers}/>
        </Route>

        <Route path="/octopath_traveler_two">
          <OctopathTwoContainer travelers={octopathTravelersTwo}/>
        </Route>
        
        <Route exact path="/">
          <Home/> 
        </Route>
      </Switch>
    </div>
  );
}

export default App;
