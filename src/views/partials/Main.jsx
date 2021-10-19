import React from 'react';

import { MainWrapper } from '../styles/styles.js';
import Card from '../../components/Card/Card.jsx';
import AboutPomodoro from './AboutPomodoro/AboutPomodoro'

export default function Main({ theme, preferences }) {
 
    return (
        <MainWrapper>
                <Card theme={theme} preferences={preferences}/>
                <AboutPomodoro />
        </MainWrapper>
    )
}