import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';

const useStyles = makeStyles(theme => ({
    container: {
        margin: '2rem auto',
        [theme.breakpoints.down('md')]: {
            margin: '1rem auto'
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0.5rem 0.2rem',
            padding: 0
        }
    },
    paper: {
        padding: '4rem',
        [theme.breakpoints.down('md')]: {
            padding: '3rem'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '2rem 1rem'
        }
    },
    title: {
        marginBottom: '2rem',
        textAlign: 'center'
    },
    subtitle: {
        marginTop: '1.5rem',
        marginBottom: '1rem'
    },
    list: {
        fontSize: '1rem'
    }
}));

const Politique = () => {
    const classes = useStyles();

    return (
        <Layout>
            <Container maxWidth='lg' className={classes.container}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' className={classes.title}>Conditions générales d'utilisation</Typography>
                    <Typography variant='subtitle2'><em>En vigueur au 01/11/2021</em></Typography>
                    <Typography gutterBottom>
                        Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique des
                        modalités de mise à disposition du site et des services par l'équipe de MetaSante et de définir les conditions
                        d’accès et d’utilisation des services par « l'Utilisateur ».
                        Les présentes CGU sont accessibles sur le site à la rubrique «politique».
                    </Typography>
                    <Typography gutterBottom>
                        Toute inscription ou utilisation du site implique l'acceptation sans aucune réserve ni restriction des présentes
                        CGU par l’utilisateur. 
                    </Typography>
                    <Typography>
                        En cas de non-acceptation des CGU stipulées dans le présent contrat, l'Utilisateur se doit de renoncer à
                        l'accès des services proposés par le site.
                        MetaSante se réserve le droit de modifier unilatéralement et à tout moment le contenu des
                        présentes CGU.
                    </Typography>
                    <Typography variant='h5' className={classes.subtitle}>Article 1 : Les mentions légales</Typography>
                    <Typography>
                        L’édition et la direction de la publication du site MetaSante est assurée par DELPLANQUE Frédéric, 
                        domicilié 137, rue Emile Vidal à Nîmes.
                    </Typography>
                    <ul className={classes.list}><li>Adresse e-mail support@metasante.fr</li></ul>
                    <Typography>
                        L'hébergeur du site MetaSante est la société Netlify, dont le siège social est situé au: 
                    </Typography>
                    <ul className={classes.list}><li>2325 3rd Street Suite 215, 94107 San Francisco CA, US.</li></ul>
                    <Typography variant='h5' className={classes.subtitle}>ARTICLE 2 : Accès au site</Typography>
                    <Typography gutterBottom>
                        Le site MetaSante permet à l'Utilisateur un accès gratuit aux services suivants :
                        site d'information sur le bien-être et la santé.
                        Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais
                        supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.)
                        sont à sa charge.
                    </Typography>
                    <Typography>
                        Tout Utilisateur inscrit à la newsletter pourra solliciter sa désinscription simplement en envoyant un email à 
                        support@metasante.fr. Celle-ci sera effective dans un délai raisonnable.
                        Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du site ou
                        serveur et sous réserve de toute interruption ou modification en cas de maintenance, n'engage pas la
                        responsabilité de MetaSante. Dans ces cas, l’Utilisateur accepte ainsi de ne pas tenir rigueur à
                        l’éditeur de toute interruption ou suspension de service, même sans préavis.
                        L'Utilisateur a la possibilité de contacter le site par messagerie électronique à l’adresse email de l’éditeur
                        communiqué à l’ARTICLE 1.
                    </Typography>
                    <Typography variant='h5' className={classes.subtitle}>ARTICLE 3 : Collecte des données</Typography>
                    <Typography>
                        Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la
                        vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux
                        libertés.
                        En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès,
                        de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit par email.
                        Pour plus de détails, voir la politique de confidentialité.
                    </Typography>
                    <Typography variant='h5' className={classes.subtitle}>ARTICLE 4 : Propriété intellectuelle</Typography>
                    <Typography gutterBottom>
                        Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet d'une
                        protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.
                        L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des
                        différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute
                        utilisation à des fins commerciales et publicitaires est strictement interdite.
                    </Typography>
                    <Typography>
                        Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation
                        expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 et
                        suivants du Code de la propriété intellectuelle.
                        Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui
                        reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source
                    </Typography>
                    <Typography variant='h5' className={classes.subtitle}>ARTICLE 5 : Responsabilité</Typography>
                    <Typography gutterBottom>
                        Les sources des informations diffusées sur le site MetaSante sont réputées fiables mais le site
                        ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.
                        Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré
                        des mises à jour régulières, le site MetaSante ne peut être tenu responsable de la modification
                        des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être
                        tenu responsable de l’utilisation et de l’interprétation de l’information contenue dans ce site.
                    </Typography>
                    <Typography>
                        Le site MetaSante ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter
                        l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au
                        téléchargement provenant de ce site.
                        La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et
                        insurmontable d'un tiers.
                    </Typography>
                    <Typography variant='h5' className={classes.subtitle}>ARTICLE 6 : Liens hypertextes</Typography>
                    <Typography>
                        Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces liens,
                        il sortira du site MetaSante. Ce dernier n’a pas de contrôle sur les pages web sur lesquelles
                        aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
                    </Typography>
                    <Typography variant='h5' className={classes.subtitle}>ARTICLE 7 : Cookies</Typography>
                    <Typography gutterBottom>
                        L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur
                        son logiciel de navigation.
                        Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l’ordinateur de l’Utilisateur
                        par votre navigateur et qui sont nécessaires à l’utilisation du site MetaSante. Les cookies ne
                        contiennent pas d’information personnelle et ne peuvent pas être utilisés pour identifier quelqu’un. Un
                        cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la
                        fin de la visite de l’Utilisateur, d’autres restent.
                        L’information contenue dans les cookies est utilisée pour améliorer le site MetaSante.
                        En naviguant sur le site, L’Utilisateur les accepte.
                    </Typography>
                    <Typography>
                        L’Utilisateur doit toutefois donner son consentement quant à l’utilisation de certains cookies.
                        A défaut d’acceptation, l’Utilisateur est informé que certaines fonctionnalités ou pages risquent de lui être
                        refusées.
                        L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des paramètres figurant au sein de son
                        logiciel de navigation.
                    </Typography>
                    <Typography variant='h5' className={classes.subtitle}>ARTICLE 8 : Publication par l'Utilisateur</Typography>
                    <Typography gutterBottom>
                        MetaSante permet à l'Utilisateur de publier des informations sur son profil.
                        Dans ces informations et ses communications avec les autres membres, l'Utilisateur s'engage à respecter les 
                        règles de na Netiquette (règles de bonne conduite de l'internet) et les règles de droit en vigueur.
                        MetaSante peut exercer une modération sur le contenu des profils et se réserve le droit de les supprimer sans 
                        avoir à s'en justifier auprès de l'Utilisateur.
                    </Typography>
                    <Typography gutterBottom>
                        L'Utilisateur reste titulaire de l’intégralité de ses droits de propriété intellectuelle. Mais en publiant des
                        informations sur MetaSante, il cède à la société éditrice le droit non exclusif et gratuit de représenter, reproduire, 
                        adapter, modifier, diffuser et distribuer sa publication, directement ou par un tiers autorisé, dans le monde
                        entier, sur tout support (numérique ou physique), pour la durée de la propriété intellectuelle. L'Utilisateur
                        cède notamment le droit d'utiliser sa publication sur internet et sur les réseaux de téléphonie mobile.
                        MetaSante s'engage à faire figurer le nom de l'Utilisateur à proximité de chaque utilisation de sa
                        publication.
                    </Typography>
                    <Typography>
                        Tout contenu mis en ligne par l'Utilisateur est de sa seule responsabilité. L'Utilisateur s'engage à ne pas
                        mettre en ligne de contenus pouvant porter atteinte aux intérêts de tierces personnes. Tout recours en justice
                        engagé par un tiers lésé contre le site sera pris en charge par l'Utilisateur.
                        Le contenu de l'Utilisateur peut être à tout moment et pour n'importe quelle raison supprimé ou modifié par
                        le site, sans préavis.
                    </Typography>
                    <Typography variant='h5' className={classes.subtitle}>ARTICLE 9 : Droit applicable et juridiction compétente</Typography>
                    <Typography>
                        La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né
                        entre les parties, les tribunaux français seront seuls compétents pour en connaître.
                        Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur aux
                        coordonnées inscrites à l’ARTICLE 1.
                    </Typography>
                </Paper>
            </Container>
        </Layout>
    );
};

export default Politique;