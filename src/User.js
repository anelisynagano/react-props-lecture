import React from 'react';

const User = ({ name, isDog, avatar }) => {
    return(
        <>
            <div>{name}</div>
            <div>{isDog ? "Puppy!" : "Kitty!"}</div>
            <img src={avatar} alt="avatar" />
        </>
    )
}

export default User;