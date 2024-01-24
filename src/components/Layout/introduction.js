import './introduction.scss';
import X from '../../assets/PhotosPotrait/Xletter.png'

const introduction = () =>{
        return (
            <div className='introduction'>
                <div className='headline'>
                    <p>
                        We are shaping our own narrative as a team, <br/>
                        organization, and a business - unique story        <br/>
where we
                        <br/>
                        Control our own fate
                    </p>
                </div>
                <div className='text'>
                    <p>
                        <i>

                        We're everyone and anyone, united under the DSG banner together.
                        </i>
                    </p>
                </div>
                <div className="tagline">
                    <img src={X}/>

                    <p id="first">
                        DSG IS FUELED BY PASSION
                    </p>
                    <p id="second">
                        DSG IS COMMUNITY DRIVEN
                    </p>
                    <p id="third">
                        DSG IS LOCAL & INTERNATIONAL
                    </p>
                    <p id="fourth">
                        WE ARE DISGUISED
                    </p>
                </div>
                <table className="table-content">
                    <tr className="child-first">
                        <td>Why We Are</td>
                        <td className="outline">1</td>
                    </tr>

                    <tr className="child-second">
                        <td>
                            Chasing our competitive <br />
                            potential
                            </td>
                    </tr>

                    <tr className="child-third">
                        <td>
                            @DSG
                        </td>
                    </tr>
                    
                </table>
                
                
            </div>
        )
}

export default introduction;