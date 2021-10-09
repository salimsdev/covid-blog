import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    amazonTitle: {
        marginBottom: '1rem',
        fontFamily: 'Dancing Script',
        fontSize: '1.8rem',
        fontWeight: 500
    },
    amazon: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        justifyItems: 'center',
        justifyContent: 'center',
        gap: '1rem',        
        '& a': {
            transition: 'opacity 250ms ease-in-out',
            '&:hover': {
                opacity: 0.7
            }
        }
    }
}));

const AmazonWidget = () => {
    const classes = useStyles();

    return (
        <>
            <Typography variant='body1' align='center' color='primary' className={classes.amazonTitle}>Nos Lectures Préférées</Typography>
            <div className={classes.amazon}>
                <div><a aria-label='face aux virus et bactéries' href="https://www.amazon.fr/Face-aux-virus-bact%C3%A9ries-immunit%C3%A9/dp/2268104729?pd_rd_w=CP2IZ&pf_rd_p=a8b99513-9ed9-4379-9ce7-04130b9ba223&pf_rd_r=NJRQW0PG9R08J68NFM3W&pd_rd_r=a691615a-63e7-403f-8a1e-0c11f6a85ca6&pd_rd_wg=dhGbn&pd_rd_i=2268104729&psc=1&linkCode=li3&tag=votsan-21&linkId=d640cb990769a9f1b6cfbb606cdba6a5&language=fr_FR&ref_=as_li_ss_il" target="_blank" rel="noreferrer"><img border="0" alt='' src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=2268104729&Format=_SL250_&ID=AsinImage&MarketPlace=FR&ServiceVersion=20070822&WS=1&tag=votsan-21&language=fr_FR" /></a><img src="https://ir-fr.amazon-adsystem.com/e/ir?t=votsan-21&language=fr_FR&l=li3&o=8&a=2268104729" width="1" height="1" border="0" alt="" style={{border: 'none !important', margin: '0px !important'}} /></div>
                <div><a aria-label="les 5 blessures qui empêchent d'être soi-même" href="https://www.amazon.fr/cinq-blessures-emp%C3%AAchent-d%C3%AAtre-soi-m%C3%AAme/dp/2266229486?_encoding=UTF8&psc=1&refRID=8HSBF909RRS705EQYJ3Z&linkCode=li3&tag=votsan-21&linkId=88d3ffb89f31625bb5cf08f292e83e6f&language=fr_FR&ref_=as_li_ss_il" target="_blank" rel="noreferrer"><img border="0" alt='' src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=2266229486&Format=_SL250_&ID=AsinImage&MarketPlace=FR&ServiceVersion=20070822&WS=1&tag=votsan-21&language=fr_FR" /></a><img src="https://ir-fr.amazon-adsystem.com/e/ir?t=votsan-21&language=fr_FR&l=li3&o=8&a=2266229486" width="1" height="1" border="0" alt="" style={{border: 'none !important', margin: '0px !important'}} /></div>
                <div><a aria-label='je réussis ma détox sucre' href="https://www.amazon.fr/r%C3%A9ussis-d%C3%A9tox-sucre-Comprenez-quotidien/dp/2035997186?pd_rd_w=cMIi3&pf_rd_p=7b93080e-b130-4b2e-8b8b-d62a835c27a2&pf_rd_r=1DMS7ESBFHCAGWA3NDM4&pd_rd_r=327edd63-d2de-4c78-a0c0-9a8779d9ec0e&pd_rd_wg=cXmMV&pd_rd_i=2035997186&linkCode=li3&tag=votsan-21&linkId=a831a0d9a8a2c97d224101a1de0b2c82&language=fr_FR&ref_=as_li_ss_il" target="_blank" rel="noreferrer"><img border="0" alt='' src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=2035997186&Format=_SL250_&ID=AsinImage&MarketPlace=FR&ServiceVersion=20070822&WS=1&tag=votsan-21&language=fr_FR" /></a><img src="https://ir-fr.amazon-adsystem.com/e/ir?t=votsan-21&language=fr_FR&l=li3&o=8&a=2035997186" width="1" height="1" border="0" alt="" style={{border: 'none !important', margin: '0px !important'}} /></div>
                <div><a aria-label='la pensée positive' href="https://www.amazon.fr/PENS%C3%89E-POSITIVE-atteindre-objectifs-positive/dp/B085RTHNJW?_encoding=UTF8&psc=1&refRID=7HC776KEGMQ415N1TGX2&linkCode=li3&tag=votsan-21&linkId=fc174c67de13118f77c2cfbe36e89705&language=fr_FR&ref_=as_li_ss_il" target="_blank" rel="noreferrer"><img border="0" alt='' src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B085RTHNJW&Format=_SL250_&ID=AsinImage&MarketPlace=FR&ServiceVersion=20070822&WS=1&tag=votsan-21&language=fr_FR" /></a><img src="https://ir-fr.amazon-adsystem.com/e/ir?t=votsan-21&language=fr_FR&l=li3&o=8&a=B085RTHNJW" width="1" height="1" border="0" alt="" style={{border: 'none !important', margin: '0px !important'}} /></div>
                <div><a aria-label='ces femmes qui pensent trop' href="https://www.amazon.fr/Ces-femmes-qui-pensent-trop/dp/B077ZG44GY?_encoding=UTF8&psc=1&refRID=M89WWDRHP9S76SZDRD5F&linkCode=li3&tag=votsan-21&linkId=47f5f4c862b3efee0835989c6463b5a2&language=fr_FR&ref_=as_li_ss_il" target="_blank" rel="noreferrer"><img border="0" alt='' src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B077ZG44GY&Format=_SL250_&ID=AsinImage&MarketPlace=FR&ServiceVersion=20070822&WS=1&tag=votsan-21&language=fr_FR" /></a><img src="https://ir-fr.amazon-adsystem.com/e/ir?t=votsan-21&language=fr_FR&l=li3&o=8&a=B077ZG44GY" width="1" height="1" border="0" alt="" style={{border: 'none !important', margin: '0px !important'}} /></div>
                <div><a aria-label="changez d'alimentation" href="https://www.amazon.fr/Changez-dalimentation-Henri-JOYEUX/dp/2266261770?pd_rd_w=2wewK&pf_rd_p=3ee87bad-b849-4935-bc07-c2c555807d36&pf_rd_r=QCMPKQH15R8YV2HCTN8M&pd_rd_r=4a244206-0a68-4f35-a50e-98dde9260543&pd_rd_wg=pKm06&pd_rd_i=2266261770&psc=1&linkCode=li3&tag=votsan-21&linkId=6614b00a818d2022412d33e09545acd3&language=fr_FR&ref_=as_li_ss_il" target="_blank" rel="noreferrer"><img border="0" alt='' src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=2266261770&Format=_SL250_&ID=AsinImage&MarketPlace=FR&ServiceVersion=20070822&WS=1&tag=votsan-21&language=fr_FR" /></a><img src="https://ir-fr.amazon-adsystem.com/e/ir?t=votsan-21&language=fr_FR&l=li3&o=8&a=2266261770" width="1" height="1" border="0" alt="" style={{border: 'none !important', margin: '0px !important'}} /></div>
            </div>
        </>
    );
};

export default AmazonWidget;