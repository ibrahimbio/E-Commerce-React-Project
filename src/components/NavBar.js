import {Link} from 'react-router-dom'
import styled from 'styled-components'


const NavBarContainer = styled.ul`
 background: #419197;
 margin: 0;
 margin-bottom: 5em;
 width: 100%;
 height: 50%;
`

const NavBarLinKContainer = styled.li`
 display: flex;
 justify-content: center;
 list-style-type: none;
`
const NavBarLink = styled(Link)`
color: white;
text-decoration: none;
font-size: 1.3em;
font-weight:bold;
border: .8px solid #419197;
background:  #12486B;
margin: 0.5em;
padding: 1em;

&:hover{
    background:
}

`




const NavBar = () => {
    return ( 
        <div className="NavBar">
            
       <NavBarContainer>
             <NavBarLinKContainer>
                    <NavBarLink  className="button" to='/'>HOME</NavBarLink >
            </NavBarLinKContainer>

            <NavBarLinKContainer>
                    <NavBarLink  className="button" to='/shoes'>SHOES</NavBarLink >
            </NavBarLinKContainer>

            <NavBarLinKContainer>
                    <NavBarLink  className="button" to='/basket'>BASKET</NavBarLink >
            </NavBarLinKContainer>

       </NavBarContainer>

       </div>
        

    );
}
 
export default NavBar;