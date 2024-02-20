import { useEffect } from 'react';
import moleImg from './assets/Images/mole.png';

const Mole = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000);
        let timer = setTimeout(() => {
            props.toggle(false);
        }, randSeconds);
        return () => clearTimeout(timer);
    })

    return (
        <div>
            <img style={{'width': '10vw'}} src={moleImg} alt={'Mole is here.'} onClick={props.handleClick} />
        </div>
    )
}

export default Mole;