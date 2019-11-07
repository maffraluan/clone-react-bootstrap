import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';


import styled from 'styled-components';

function Contact() {
    return (
        <Styles>
           <ListGroup>
                <li><a href="https://github.com/maffraluan" target="_blank"><FaGithub size={48} color="#6e5494" /></a></li>
                <li><a href="https://www.linkedin.com/in/luan-maffra-de-oliveira-16030415b/" target="_blank" ><FaLinkedin size={48}/></a></li>
            </ListGroup>
        </Styles>
    )
}

const Styles = styled.div`
`;

const ListGroup = styled('div', 'li')`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: space-around;
`;

export default Contact
