import { Container } from './styles';
import Loading from '../Loading';

function Preview({url, loading}) {
    return (
        <Container>
            {!url ? (  <Loading /> ) : ( 
            <img  
                key={Date.now()} 
                src={url}  
                style={{
                    width:700,
                    height:500,
                    filter: loading
                        ? "blur(10px)"
                        : "none",
                    transition: loading
                        ? "none"
                        : "filter 0.4s ease-out"
        }} />) }
           
        </Container>);
    }

export default Preview;