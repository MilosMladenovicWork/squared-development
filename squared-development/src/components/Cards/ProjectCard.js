import React, {useState} from 'react'

import styled, {css, keyframes} from 'styled-components'
import Detail from '../Illustrations/Detail'
import Paragraph from '../Paragraph'

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
  object-fit:cover;
  object-position:top center;
  transform:translate(30px, -30px);
  position:absolute;
  top:0;
  left:0;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.12);
`

const ProjectDescription = styled.div`
  background-color: ${props => props.theme.colors.primary};
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
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
  ${ProjectTitle}{
    width:18.5vw;
  }
  margin-bottom:10rem;
  ${props => props.mobile && css`
    width: 13vw; 
    ${ProjectTitle}{
      width:10vw;
    }
  `}
  z-index:5;
  ${ImageCover}{
    animation: ${props => props.hovered ? imageHideAndShowNormal : imageHideAndShowReverse} 1s forwards;
  }
`


const ProjectCard = ({projectImg, mobile, description, title, ...rest}) => {

  const [hovered, setHovered] = useState(false)

  return(
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
      <ImageCover src={projectImg} alt=''/>
      <ProjectTitle>
        <Paragraph display alignment="center" textColor="textLight">
          {title}
        </Paragraph>
      </ProjectTitle>
    </StyledProjectCard>
  )
}

export default ProjectCard