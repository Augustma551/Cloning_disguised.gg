import './home_about.scss';
import Photo1 from '../../assets/PhotosPotrait/Photo1.png';
import Photo2 from '../../assets/PhotosPotrait/Photo2.png';
import Photo3 from '../../assets/PhotosPotrait/Photo3.png';
import Heart from '../../assets/heart.png';


const HomeAbout = () =>{
    return(
        <div className ="HomeAbout">
            <h1>
                More than an org; A promise to our <br />
                community. The heart of DSG is shaped by our <br/>
                <span className='text'>
                fans & patrons, leading a new era of esports.
                    </span>
                    
            </h1>
            <p>
                <i>
                In the spirit of excellence, sustainibility, and authenticity
                    </i>
            </p>
            <table className="table-content">
                    <tr className="child-first">
                        <td>Why We Are</td>
                        <td className="outline">2</td>
                    </tr>

                    <tr className="child-second">
                        <td>
                            Briding competition, creativity <br />
                            and culture export
                            </td>
                    </tr>

                    <tr className="child-third">
                        <td>
                            @DSG
                        </td>
                    </tr>
                    
                </table>
                <div className='img-group'>
                    <img src ={Heart} className='heart' />
                    <img src={Photo1} className='photo-1'/>
                    <img src={Photo2} className='photo-2'/>
                    <img src={Photo3} className='photo-3'/>
            </div>
        </div>
    )
}

export default HomeAbout;