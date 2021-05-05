import React from 'react';


const User = (props) =>{
    return(
        <div className="user">
            <img src={props.user.avatar_url} alt={props.user.name}></img>
            <div>
                <h1>{props.user.name}</h1>
                <h4>user name: {props.user.login}</h4>
                {props.user.location && <h3>{props.user.location}</h3>}
                <h3>{`Follower: ${props.user.followers}`}</h3>
                <h2>{`Following: ${props.user.following}`}</h2>
                {props.user.bio && <p>{props.user.bio}</p>}
            </div>
        </div>
    )
}


export default User;