import './App.css';
import Profile from './profile/Component.js';

function App() {
  const fullName = "eya kassous";
  const bio = "take it easy stupid";
  const profession = "etudiante";
  const styleObject =
   { textAlign: 'center', 
   backgroundColor: '	lightpink', 
  width: '50%',
  border:'3px solid black',
marginLeft: '25%',
marginTop: '12.5%'}

const handleName=(x)=>{
  alert(x);
}

  return (
  <div style={styleObject}>
    <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName}>
    <img src="/img.webp" alt="myimage" ></img>
    </Profile>
  </div>
  );
  
  
}
export default App;
// function App() {
//   const props={
//   fullName : "eyakassous",
//   bio : "###",
//   profession : "etudiante"} 
//   const styleObject = { textAlign: 'center', backgroundColor: 'lightBlue', color:'red'}
//   return (
//    <div style={styleObject}>
//     <profile fullName={fullName} bio={bio} profession={profession}>
//     <h1>hello</h1>
//    <img src="/img.webp" alt="myimage" ></img>
//     </profile>
//    </div>
//   );
// }

// export default App;
