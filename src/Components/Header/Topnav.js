import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import InstgramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';

const Topnav = () => {
  return (
    <div className='ts-topnav'>
        <Container>
            <Row>
                <Col xl={6} lg={6} md={6} sm={6}>
                    <div className='ts-topnav-social'>
                        <ul>
                            <li><InstgramIcon fontSize="small" /></li>
                            <li><FacebookIcon fontSize="small" /></li>
                            <li><LinkedInIcon fontSize="small" /></li>
                            <li><TwitterIcon fontSize="small" /></li>
                        </ul>
                    </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6}>
                <div className='ts-topnav-info'>
                        <ul className='text-end'>
                            <li><MailOutlineIcon fontSize="small" /> info@tasksource.net</li>
                            <li className='slash-icon'> | </li>
                            <li><CallIcon fontSize="small" /> +91 9589615070</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Topnav