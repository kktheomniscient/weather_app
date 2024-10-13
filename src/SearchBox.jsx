import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function SearchBox({updateInfo}){
    let [city,SetCity] = useState("");
    let [error,SetError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "abee0f6a156f152203828490719064c5"

    let getWeatherInfo = async() => {
        try{
            let resposnse = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let JSONresponse = await resposnse.json();
            let result = {
                city : city,
                temp : JSONresponse.main.temp,
                tempMin: JSONresponse.main.temp_min,
                tempMax: JSONresponse.main.temp_max,
                humidity: JSONresponse.main.humidity,
                feels_like: JSONresponse.main.feels_like,
                weather: JSONresponse.weather[0].description,
            };
            console.log(result);
            SetError(false);
            return result
        } catch(err){
            throw err;
        }
        
    }

    let handleChange = (evt) => {
        SetCity(evt.target.value);
    };

    let handelSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            let newInfo = await getWeatherInfo();
            SetCity("");
            updateInfo(newInfo);
        } catch(err){
            SetError(true);
        }
    }

    const theme = createTheme({
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white', // White outline
                            },
                            '&:hover fieldset': {
                                borderColor: 'white', // White outline on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white', // White outline on focus
                            },
                        },
                    },
                },
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        color: 'white', // White placeholder color
                        '&.Mui-focused': {
                            color: 'white', // White when focused
                        },
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div>
                <form onSubmit={handelSubmit}>
                    <TextField id="city" label="City Name" variant="outlined" value={city} required onChange={handleChange} InputProps={{style: { color: 'white' },}}/>
                    <br /><br />
                    <Button variant="contained" type='Submit'>Search</Button>
                    {error && <p>API doesn't support this place</p>}
                </form>
            </div>
        </ThemeProvider>
    )
}