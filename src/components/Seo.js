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

const Seo = ({ title, description, image, isBlogPost, url }) => {
    const { site } = useStaticQuery(query);
    const { title: siteTitle, description: siteDescription, image: siteImage, siteUrl, twitter } = site.siteMetadata;
    const metaDescription = description || siteDescription;
    const metaImage = isBlogPost ? image : siteImage;

    return (
        <Helmet 
            htmlAttributes={{ lang: 'fr' }}
            title={isBlogPost ? `${title} | ${siteTitle}` : `${siteTitle} | ${title}`} 
            meta={[
                { name: 'description', content: metaDescription }, 
                { name: 'image', content: metaImage },
                { property: 'og:title', content: title },
                { property: 'og:description', content: metaDescription },
                { property: 'og:type', content: 'website' },
                { property: 'og:image', content: metaImage },
                { property: 'og:url', content: url || siteUrl },
                { property: 'fb:app_id', content: '462894907779342' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:creator', content: twitter },
                { name: 'twitter:title', content: title },
                { name: 'twitter:description', content: metaDescription },
                { name: 'twitter:image', content: `https${metaImage}` },
                { name: 'propeller', content: '12f42849f5689ef637a420a91b5b3e94' }
            ]}>
        </Helmet>
    );
};

export default Seo;