import './pp-scratch.scss';


const ProfilePicture = ({Profile}) =>{
    return(
        <div className="ProfilePicture">
            <img src = {Profile}/>
        </div>
    )
}

export default ProfilePicture