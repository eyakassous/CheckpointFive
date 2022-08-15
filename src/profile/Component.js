import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

Profile.propTypes = {
   fullName : PropTypes.string,
   bio : PropTypes.string,
   profession : PropTypes.string,
}
Profile.defaultProps={
    version: "16"
};

function Profile( props ){
    const handleClick=()=>{
        handleName(props.fullName)
    }
    return (
    <div>
        <h2>Name:{props.fullName}</h2>
        <h2>bio:{props.bio}</h2>
        <h2>profession:{props.profession}</h2>
        <div>{props.children}</div>
        <Button onClick={handleClick} style={{fontSize: "20px"}}>click</Button>

    </div>
    
);

}
export default Profile;

// import { string } from "prop-types";
// import React from "react";
// import PropTypes from "prop-types";
// import Button from "react-bootstrap/Button";

// profile.propTypes = {
//    fullName : PropTypes.string,
//    bio : PropTypes.string,
//    profession : PropTypes.string,
// }

// function profile ( props ){
//     function handleClick(){
//         alert({fullName});
//     }
//     return
//         <div>
//         <h3>Name:{props.fullName}</h3>
//         <h3>bio:{props.bio}</h3>
//         <h3>profession:{props.profession}</h3>
//         {props.children}
//         <button onClick={handleClick}>Click me</button>
//         </div>;
    
// }
// export default profile;