import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({info}){

    const getImageForWeather = (temp, humidity) => {
        if (temp < 0) {
            return "https://images.unsplash.com/photo-1534324482290-e147f564f5b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbGR8ZW58MHwwfDB8fHww";  // Cold weather (below 0°C)
        } else if (temp >= 0 && temp <= 15) {
            if (humidity < 40) {
                return "https://images.unsplash.com/photo-1700534102730-e351bb34c974?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29vbCUyMHdlYXRoZXJ8ZW58MHwwfDB8fHww";   // Cool and dry
            } else if (humidity >= 40 && humidity <= 70) {
                return "https://images.unsplash.com/photo-1603334987939-dd677d05eaff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29vbCUyMHdlYXRoZXJ8ZW58MHwwfDB8fHww"; // Cool and moderate humidity
            } else {
                return "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvb2wlMjBhbmQlMjBodW1pZCUyMHdlYXRoZXJ8ZW58MHwwfDB8fHww"; // Cool and humid
            }
        } else if (temp > 15 && temp <= 30) {
            if (humidity < 40) {
                return "https://images.unsplash.com/photo-1628676150211-ea0bd33e05a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2FybSUyMGFuZCUyMGRyeXxlbnwwfDB8MHx8fDA%3D";   // Warm and dry
            } else if (humidity >= 40 && humidity <= 70) {
                return "https://images.unsplash.com/photo-1656105146858-1452fd50e565?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdhcm0lMjBhbmQlMjBkcnl8ZW58MHwwfDB8fHww"; // Warm and moderate humidity
            } else {
                return "https://images.unsplash.com/photo-1630488991068-d12e7e0dadb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FybSUyMGFuZCUyMGh1bWlkfGVufDB8MHwwfHx8MA%3D%3D"; // Warm and humid
            }
        } else {
            if (humidity < 40) {
                return "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwYW5kJTIwZHJ5fGVufDB8MHwwfHx8MA%3D%3D";    // Hot and dry
            } else if (humidity >= 40 && humidity <= 70) {
                return "https://images.unsplash.com/photo-1532708678180-09200f48f13a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdCUyMGFuZCUyMGRyeXxlbnwwfDB8MHx8fDA%3D"; // Hot and moderate humidity
            } else {
                return "https://images.unsplash.com/photo-1508767338923-f2d15fc531d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdCUyMGFuZCUyMGh1bWlkfGVufDB8MHwwfHx8MA%3D%3D";  // Hot and humid
            }
        }
    };

    const imageUrl = getImageForWeather(info.temp, info.humidity);

    return (
        <div className="InfoBox">
            <div className='CardBox'>
                <Card variant="outlined" sx={{ maxWidth: 345 , backgroundColor: '#292929', borderColor: 'white',}}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imageUrl}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', textAlign: 'left' }}>
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'white', textAlign: 'left' }} component={"span"}>
                                <p>Temperature = {info.temp}&deg;C</p>
                                <p>Humidity = {info.humidity}</p>
                                <p>Min temp = {info.tempMin}&deg;C</p>
                                <p>Max temp = {info.tempMax}&deg;C</p>
                                <p>The weather feels like {info.feels_like}&deg;C</p>
                                <p>Todays weather condition is <i>{info.weather}</i></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}