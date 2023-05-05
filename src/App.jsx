
import Tweet from './components/Tweet';

import './App.css'
const App = () => {
  return (
    <>
      <Tweet name={'Babina'} username={'@babina'} time={'6hr'} tweet={'Missing Sanchit.'} image={'https://sanchitpoudel.com.np/assets/image4.jpg'} />
      <Tweet name={'Sanchit'} username={'@sanchit'} time={'7hr'} tweet={'Miss you too babina.'} image={'https://sanchitpoudel.com.np/assets/logo.jpeg'} />
      < Tweet name={'Cristiano Ronaldo'} username={'@cr7'} time={'9hr'} tweet={'Siuuuuuu'} image={'https://i.pinimg.com/564x/bf/77/95/bf7795a3b833665de79b77469e7a592f.jpg'} />
      <Tweet name={'Leo Messi'} username={'@messi'} time={'10hr'} tweet={'	Camera Wawa'} image={'https://phantom-marca.unidadeditorial.es/d68ec4406053933c488d858b8a7aa5cc/resize/828/f/webp/assets/multimedia/imagenes/2022/12/10/16706269918207.jpg'} />

    </>
  );
};

export default App;