import React, {useState} from 'react'

import styled, {css, keyframes} from 'styled-components'
import Detail from '../Illustrations/Detail'
import Paragraph from '../Paragraph'
import projectImgDesktop from '../../images/Perun.png'
import projectImgMobile from '../../images/mobile-project.png'

const imageHideAndShowNormal = keyframes`
  0%{
    transform:translate(30px, -30px);
    z-index:0;
  }
  50%{
    transform:translate(30px, calc(-100% - 30px));
    z-index:0;
  }
  51%{
    z-index:-1;
  }
  100%{
    transform:translate(30px, 30px);
    z-index:-1;
  }
`

const imageHideAndShowReverse = keyframes`
  100%{
    transform:translate(30px, -30px);
    z-index:0;
  }
  51%{
    transform:translate(30px, calc(-100% - 30px));
    z-index:0;
  }
  50%{
    z-index:-1;
  }
  0%{
    transform:translate(30px, 30px);
    z-index:-1;
  }
`

const ImageCover = styled.img`
  width:100%;
  transform:translate(30px, -30px);
  position:absolute;
  top:0;
  left:0;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.12);
  border:none;
  @media (max-width:767px){
    width:unset;
    max-width:100%;
    position:relative;
    top:unset;
    left:unset;
  }
`

const ProjectDescription = styled.div`
  background-color: ${props => props.theme.colors.primary};
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  @media (max-width:767px){ 
    background-color: unset;
    padding:15px 15px 70px;
  }
`

const ProjectTitle = styled.div`
  position:absolute;
  bottom:0;
  left:50%;
  transform:translate(-50%, 0);
  background:${props => props.theme.colors.accent};
  padding:15px 20px;
`
const StyledProjectCard = styled.div`
  position: relative;
  width: 57.5vw;
  height: 28.5vw;
  transform:translateY(-2px);
  @media (max-width:767px){
    background-color: ${props => props.theme.colors.primary};
    width:90%;
    height:auto;
  }
  ${ProjectTitle}{
    width:18.5vw;
    @media (max-width:767px){
      width:80%;
    }
  }
  margin-bottom:10rem;
  ${props => props.mobile && css`
    width: 13vw; 
    ${ProjectTitle}{
      width:10vw;
      @media (max-width:767px){
        width:80%;
      }
    }
    @media (max-width:767px){
      width:90%;
      height:auto;
    }
  `}
  z-index:5;
  ${ImageCover}{
    animation: ${props => props.hovered ? imageHideAndShowNormal : imageHideAndShowReverse} 1s forwards;
    @media (max-width:767px){
      animation:unset;
    }
  }
`

const MobileCoverContainer = styled.div`
  display:none;
  @media (max-width:767px){
    position:relative;
    width:90%;
    display:block;
    background-color: ${props => props.theme.colors.primary};
  }
`

const DesktopCoverContainer = styled.div`
  display:block;
  @media (max-width:767px){
    display:none;
  }
`


const ProjectCard = ({projectImg, mobile, description, title, ...rest}) => {

  const [hovered, setHovered] = useState(false)

  return(
    <>
      <MobileCoverContainer>
        <ImageCover src={projectImg ? projectImg : (
          mobile ? projectImgMobile : projectImgDesktop
        )} alt=''/>
      </MobileCoverContainer>
      <StyledProjectCard 
      {...rest} 
      mobile={mobile} 
      hovered={hovered}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      >
        <ProjectDescription>
          <Detail size={2} horizontalPosition={'left'} verticalPosition={'top'}/>
          <Detail size={1} backwards horizontalPosition={'right'} verticalPosition={'bottom'}/>
          <Paragraph display halfWidth alignment="center" textColor="textLight">
            {description}
          </Paragraph>
        </ProjectDescription>
        <DesktopCoverContainer>
          <ImageCover src={projectImg} alt=''/>
        </DesktopCoverContainer>
        <ProjectTitle>
          <Paragraph display alignment="center" textColor="textLight">
            {title}
          </Paragraph>
        </ProjectTitle>
      </StyledProjectCard>
    </>
  )
}

export default ProjectCard