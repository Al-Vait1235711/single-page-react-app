import { useEffect, useState } from "react"
import Container from "react-bootstrap/esm/Container"

function AppFooter(){
    const [showTopBtn, setShowTopBtn] = useState(false);

useEffect(()=>{
window.addEventListener('scroll', () => {
    if(window.scrollY > 400){
        setShowTopBtn(true);
    } else{
        setShowTopBtn(false);
    }
})
}, [])

function goTop(){
    window.scrollTo({
        top: 0,
        behaviour: 'smooth',
    })
}

    return(
        <Container fluid>
            <div className="copyright">&copy; 2025 SomeCompany. All Rights Reserved</div>
            <div className="socials">
                <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            {
                showTopBtn && (<div className="go-top" onClick={goTop}></div>)
            }
        </Container>
    )
}

export default AppFooter
