
import React from 'react'
import Cards from './component/Cards'

const App = () => {
  return (
    <div className='Parent'>
      <Cards name = "Amazon" payment = "$120/hr" place = "Mumbai,India" img = "https://e7.pngegg.com/pngimages/832/502/png-clipart-amazon-logo-text-brand-amazon-text-service-thumbnail.png" />
      <Cards name = "Flipcart" payment = "$100/hr" place = "Kolkata,India" img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPJM7J9hayr-YUaCqxlgYnQZlxVEkoi-18Q&s" />
      <Cards name = "Meesho" payment = "$90/hr" place = "Delhi,India" img = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Meesho_logo.png/500px-Meesho_logo.png" />
      <Cards name = "Myntra" payment = "$140/hr" place = "Hydrabad,India" img = "https://livewire.thewire.in/wp-content/uploads/2021/02/myntra.png" />
    </div>
  )
}

export default App
