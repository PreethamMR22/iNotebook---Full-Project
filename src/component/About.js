
import React, { useContext} from 'react'
import noteContext from '../context/notes/NoteContext'
import myPic from "../photo/aboutPic.png"
const About = () => {
const outerDivStyle= {
    height:"25rem",
    width:"50rem",
    border:"1px solid white",
    boxShadow:"rgba(98, 98, 98, 0.167) -5px -5px 10px",
    marginTop:"10rem"
}
const photoDivStyle={
    height:"100%",
    minWidth:"40%",
    zIndex:10,
    padding:"0",
    margin:"0",
    
    
}

const socialMediaStyle= {
    display:"flex",
    gap:"3rem",
    marginTop:"3rem",
    marginLeft:"9rem"
}
const styleMypic= {
    height:"16em",
    position:"relative",
    left:"0.1rem",
    top:"-1rem",
    borderRadius:"1rem"
}
    return (


        <div className='container'>
            
           <div className="container d-flex" style={outerDivStyle}>
                <div className="photoDiv d-flex justify-content-center align-items-center" style={photoDivStyle}>
               
                <img src={myPic} style={styleMypic}/>
                </div>
            <div className="detais">
                <h1 className='mx-1 my-3' style={{paddingLeft:"7rem"}}>About Us</h1>
                <p className='mx-3'>
                    <h5>Preetham M R,</h5> is a student of RV college of Engineering currently in second year, 
                    pursuing Information science and Engineering  . He is Highly passionate in frontend developement and he has adequate 
                    expertise in HTML,CSS,JS and React Js.
                </p>
                <div className="references"></div>
                <div className="github d-flex mx-3">
                <b className='mx-1'>GitHub</b>: <a className='mx-1' href="https://github.com/PreethamMR22" style={{textDecoration:"none"}}>Access GitHub Account</a>
                </div>
                <div className="socialMedia d-flex" style={socialMediaStyle}>
                <a href="https://www.instagram.com/thenameispreethamraj/" target="main"><i class="fa-brands fa-instagram fa-2x"  ></i>   </a>
                <a href="https://www.linkedin.com/in/preetham-raj-a6b604299/" target="main"><i class="fa-brands fa-linkedin fa-2x"  ></i>   </a>
                <a href="" target="main"><i class="fa-brands fa-twitter fa-2x"  ></i>   </a>

                </div>

            </div>


           </div>
            
        </div>
    )
}

export default About