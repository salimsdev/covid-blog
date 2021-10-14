import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const query = graphql`
    {
        site {
            siteMetadata {
                title
                description
                image
                siteUrl
                twitter
            }
        }
    }
`;

const Seo = ({ title, description, image, isBlogPost}) => {
    const { site } = useStaticQuery(query);
    const { title: siteTitle, description: siteDescription, image: siteImage, twitter } = site.siteMetadata;

    return (
        <Helmet 
            htmlAttributes={{ lang: 'fr' }}
            title={isBlogPost ? `${title} | ${siteTitle}` : `${siteTitle} | ${title}`} 
            meta={[
                { name: 'description', content: description || siteDescription }, 
                { name: 'image', content: image || siteImage },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:creator', content: twitter },
                { name: 'twitter:title', content: title },
                { name: 'twitter:description', content: description || siteDescription },
                { name: 'twitter:image', content: image || siteImage },
            ]}>
        </Helmet>
    );
};

export default Seo;