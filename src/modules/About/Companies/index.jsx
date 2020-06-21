import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as Typography from '../../../components/Typography';
import * as Styled from './styled';

const Companies = () => {
  const {
    gympassLogo,
    sciensaLogo,
    portoLogo,
  } = useStaticQuery(graphql`
    query Companies {
      gympassLogo: file(relativePath: {eq: "companies/gympass.webp"}) {
        childImageSharp {
          fluid (maxWidth: 230) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sciensaLogo: file(relativePath: {eq: "companies/sciensa.webp"}) {
        childImageSharp {
          fluid (maxWidth: 280) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      portoLogo: file(relativePath: {eq: "companies/porto-seguro.webp"}) {
        childImageSharp {
          fluid (maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const companies = [
    { name: 'Gympass', image: gympassLogo },
    { name: 'Sciensa', image: sciensaLogo },
    { name: 'Porto Seguro', image: portoLogo },
  ];
  return (
    <Styled.Container>
      <Typography.Heading size={4}>
        I had the opportunity to contribute to great companies and projects!
      </Typography.Heading>
      <Styled.CompaniesList>
        {companies.map(company => (
          <Styled.CompanyWrapper>
            <Img
              fluid={company.image.childImageSharp.fluid}
              alt={company.name}
              objectFit="cover"
            />
          </Styled.CompanyWrapper>
        ))}
      </Styled.CompaniesList>
    </Styled.Container>
  );
}

export default Companies;