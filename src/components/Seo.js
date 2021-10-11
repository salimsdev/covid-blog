import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const query = graphql`
    {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;

const Seo = ({ title, description, isBlogPost}) => {
    const { site } = useStaticQuery(query);
    const { title: siteTitle, description: siteDescription } = site.siteMetadata;

    return (
        <Helmet 
            htmlAttributes={{ lang: 'fr' }}
            title={isBlogPost ? `${title} | ${siteTitle}` : `${siteTitle} | ${title}`} 
            meta={[{ name: 'description', content: description || siteDescription }]}>
        </Helmet>
    );
};

export default Seo;