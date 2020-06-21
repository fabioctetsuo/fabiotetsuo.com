import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as Typography from '../../../components/Typography';
import * as S from './styles';

const Resume = () => {
  const {
    babelLogo,
    reactLogo,
    gatsbyLogo,
    emberLogo,
    nodeLogo,
    javascriptLogo,
    htmlLogo,
    cssLogo,
    jestLogo,
    webpackLogo,
    gitLogo,
    jenkinsLogo,
    npmLogo,
    netlifyLogo,
  } = useStaticQuery(graphql`
    query Skills {
      reactLogo: file(relativePath: {eq: "skills/react.png"}) {
        childImageSharp {
          fluid (maxWidth: 52) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gatsbyLogo: file(relativePath: {eq: "skills/gatsby.png"}) {
        childImageSharp {
          fluid (maxWidth: 52) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      babelLogo: file(relativePath: {eq: "skills/babeljs.png"}) {
        childImageSharp {
          fluid (maxWidth: 52) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      emberLogo: file(relativePath: {eq: "skills/emberjs.png"}) {
        childImageSharp {
          fluid (maxWidth: 52) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nodeLogo: file(relativePath: {eq: "skills/nodejs.png"}) {
        childImageSharp {
          fluid (maxWidth: 52) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      javascriptLogo: file(relativePath: {eq: "skills/javascript.png"}) {
        childImageSharp {
          fluid (maxWidth: 52) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      htmlLogo: file(relativePath: {eq: "skills/html5.png"}) {
        childImageSharp {
          fluid (maxWidth: 52) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cssLogo: file(relativePath: {eq: "skills/css3.png"}) {
        childImageSharp {
          fluid (maxWidth: 52) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jestLogo: file(relativePath: {eq: "skills/jest.png"}) {
        childImageSharp {
          fluid (maxWidth: 52) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      webpackLogo: file(relativePath: {eq: "skills/webpack.png"}) {
        childImageSharp {
          fluid (maxWidth: 52) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gitLogo: file(relativePath: {eq: "skills/git.png"}) {
        childImageSharp {
          fluid (maxWidth: 52) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jenkinsLogo: file(relativePath: {eq: "skills/jenkins.png"}) {
        childImageSharp {
          fluid (maxWidth: 52) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      npmLogo: file(relativePath: {eq: "skills/npm.png"}) {
        childImageSharp {
          fluid (maxWidth: 52) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      netlifyLogo: file(relativePath: {eq: "skills/netlify.png"}) {
        childImageSharp {
          fluid (maxWidth: 52) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const skills = [
    { name: 'React JS', image: reactLogo },
    { name: 'Gatsby', image: gatsbyLogo },
    { name: 'Ember JS', image: emberLogo },
    { name: 'Node JS', image: nodeLogo },
    { name: 'Javascript', image: javascriptLogo },
    { name: 'HTML 5', image: htmlLogo },
    { name: 'CSS 3', image: cssLogo },
    { name: 'Jest', image: jestLogo },
    { name: 'Webpack', image: webpackLogo },
    { name: 'Babel JS', image: babelLogo },
    { name: 'Git', image: gitLogo },
    { name: 'Jenkins', image: jenkinsLogo },
    { name: 'NPM', image: npmLogo },
    { name: 'Netlify', image: netlifyLogo },
  ];

  return (
    <S.Container>
      <S.AboutWrapper>
        <S.AboutMeContainer>
          <Typography.Heading size={4} color="#FFFFFF">
            A little about myself...
          </Typography.Heading>
          <S.TextWrapper>
            <Typography.Body color="#FFFFFF">
              I'm in love with the front-end universe, I collaborated with awesome and talented people
              in the creation of new digital products! I'm really calm and I'm always targeting the 
              best solutions for my problems. P.S: I love gastronomy either!
            </Typography.Body>
          </S.TextWrapper>
        </S.AboutMeContainer>
        <S.Devices />
      </S.AboutWrapper>
      <S.SkillsContainer>
        <S.TitleWrapper>
          <Typography.Heading size={4}>
            Skills
          </Typography.Heading>
        </S.TitleWrapper>
        <S.SkillsWrapper>
          {skills.map(skill => (
            <S.SkillItem
              fluid={skill.image.childImageSharp.fluid}
              alt={skill.name}
              key={skill.name}
            />
          ))}
        </S.SkillsWrapper>
      </S.SkillsContainer>
    </S.Container>
  )
};

export default Resume;