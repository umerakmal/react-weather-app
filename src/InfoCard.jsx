import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ({ result }) {
    let imgUrl = result.temp > 30 ? 'https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' : result.temp > 5 ? 'https://plus.unsplash.com/premium_photo-1681154819978-2e26de845fdd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' : 'https://images.unsplash.com/photo-1554417063-60e738613596?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <div className='InfoCard'>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {imgUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {result.city}
          </Typography>
          <Typography variant="body2" color="text.secondary"  component={"span"}>
           <p>Temperature: {result.temp}&deg;C</p>
           <p>Minimun Temperature: {result.tempMin}&deg;C</p>
           <p>Maximum Temperature: {result.tempMax}&deg;C</p>
           <p>Humidity: {result.humidity}</p>
           <p>Weather description is <i>{result.description}</i> and feels like {result.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}
