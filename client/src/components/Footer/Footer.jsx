import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
                <div className='footer-div'>
                    <h2>REDES SOCIALES</h2>
                    <div>
                        <a rel='noreferrer' target='_blank' href='https://www.instagram.com/amadeoalmacennatural/'>
                            <InstagramIcon style={{ marginTop: '.5rem' }} />
                            <span style={{ paddingBottom: '.5rem' }}>Amadeo almacén natural</span>
                        </a>
                    </div>
                </div>
                <div className='footer-div'>
                    <h2>CONTACTO</h2>
                    <div>
                        <a href="https://api.whatsapp.com/send?phone=2926410846" target='_blank' rel="noreferrer">
                            <WhatsAppIcon style={{ marginTop: '.5rem' }} />
                            <span style={{ paddingBottom: '.5rem' }} >2926-410846</span>
                        </a>
                    </div>
                    <div>
                        <a href='mailto:felipeblanco114@gmail.com'>
                            <AlternateEmailIcon style={{ marginTop: '.5rem' }} />
                            <span style={{ paddingBottom: '.5rem' }}>amadeoalmacen@gmail.com</span>
                        </a>
                    </div>
                    <div>
                        <a href='https://www.google.com/maps/place/Urquiza+245,+B7540DME+Coronel+Suarez,+Provincia+de+Buenos+Aires/@-37.4632205,-61.9462746,15z/data=!3m1!4b1!4m2!3m1!1s0x95eb73292df1990d:0xb9a4883e3d96cdca' target='_blank' rel='noreferrer'>
                            <LocationOnIcon style={{ marginTop: '.5rem' }} />
                            <span style={{ paddingBottom: '.5rem' }} >Coronel Suárez, Buenos Aires</span>
                        </a>
                    </div> 
                </div>
                {/* <div className='footer-div'>
                    
                </div> */}
            </div>
    </footer>
  )
}

export default Footer