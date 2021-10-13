import React from 'react';

import { FooterWrapper } from '../styles/styles'
import { darkTheme } from '../../styles/themes/theme'
import ImageUpdater from '../../components/ThemeIconUpdater/ImageUpdater'

export default function Footer({ theme }) {
    return (
        <FooterWrapper>
            <span>Feito com &lt;3 by <a rel="noreferrer" href="mailto:igorfigueiredors@gmail.com"><strong>Igor Figueiredo</strong></a></span>
            <div>
                <a target="_blank" rel="noreferrer" href="https://www.github.com/igorfig">
                <ImageUpdater currentTheme={theme} imageName={theme === darkTheme ? 'darkGithub' : 'github'} />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/igufs123/">
                <img src="./images/instagram.svg" alt="instagram" />
                </a>
            </div>
        </FooterWrapper>
    )
}