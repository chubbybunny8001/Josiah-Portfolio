import React from "react";
import { ButtonA } from "../ButtonElements";
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  ExternButton,
} from "./ProjectsElements";

const Github = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  heading,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  toLink,
  url,
  blank,
}) => {
  return (
    <>
      <ProjectsContainer lightBg={lightBg} id={id}>
        <ProjectsWrapper>
          <ProjectsRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{heading}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <ButtonA
                    href={url}
                    smooth={true}
                    spy={true}
                    primary={primary}
                    dark={dark}
                    target={blank}
                  >
                    {buttonLabel}
                  </ButtonA>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </ProjectsRow>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Github;
