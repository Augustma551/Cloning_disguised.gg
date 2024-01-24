import './footer.scss';
import TimePicker from '../TimePicker/Timepicker';
import Logo from '../../assets/PhotosPotrait/logo-black.svg';
import Bracket from './Bracket/bracket'


const Footer = () =>{
    return(
        <div className="Footer">
            <TimePicker />
            <img src = {Logo} className='logo' />
            <Bracket img src="../../../" />

        </div>
    )
}

export default Footer