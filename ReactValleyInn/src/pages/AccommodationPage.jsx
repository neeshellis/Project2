import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useData } from '../hooks/useData';
import AccommodationCard from '../components/AccommodationCard';



export default function AccommodationPage() { 
    const data=useData("http://localhost:3000/pricingItems")

    const storedItems = data?.map(rate => (
<AccommodationCard key={rate.id} title={rate.title}
description={rate.description} image={rate.image} price={rate.price}/>

))

  return (
    <div>
     
      <Container sx={{ padding: 5, marginTop: 10, backgroundColor: 'rgba(176, 182, 134, 0.9)', fontWeight: 600, 
        minHeight: '5vh', maxWidth: '70%', borderRadius: 4 
     }}> 
      
    
     {storedItems}

     </Container>
     </div>
  );
}

// import AccommodationRates from "../components/BitcoinRates";

// export default function BitcoinPage() { 
//  return (
//  <div className="BitcoinPage">

//  <h3>Bitcoin Calculator!</h3>
//   <BitcoinRates />
//  </div>
//  )
// }


console.log(useData)


