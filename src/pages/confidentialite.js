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

const Confidentialite = () => {
    const classes = useStyles();
    
    return (
        <Layout>
            <Container maxWidth='lg' className={classes.container}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' className={classes.title}>Politique de confidentialité</Typography>
                    <Typography variant='subtitle2'><em>En vigueur au 01/11/2021</em></Typography>
                    <Typography>
                        Cette politique de confidentialité s'applique au site MetaSante.
                        La présente politique a pour but d'exposer aux utilisateurs du site: 
                    </Typography>
                    <ul className={classes.list}>
                        <li>
                            La manière dont sont collectées et traitées leurs données à caractère personnel. Doivent être considérées 
                            comme données personnelles toutes les données susceptibles d'identifier un utilisateur. Il s'agit notamment 
                            du prénom et du nom, de l'âge, de l'adresse postale, l'adresse mail, la localisation de l'utilisateur ou
                            encore son adresse IP;
                        </li>
                        <li>Quels sont les droits des utilisateurs concernant ces données;</li>
                        <li>Qui est responsable du traitement des données à caractère personnel collectées et traitées;</li>
                        <li>A qui ces données sont transmises;</li>
                        <li>Eventuellement, la politique du site en matière de fichiers "cookies".</li>
                    </ul>
                    <Typography>
                        Cette politique de confidentialité complète les mentions légales et les conditions générales d'utilisation que
                        les utilisateurs peuvent consulter à l'adresse ci-après:
                    </Typography>
                    <ul className={classes.list}><li><a href='https://www.metasante.fr/politique'>https://www.metasante.fr/politique</a></li></ul>
                    <Typography variant='h5' className={classes.subtitle}>Article 1 : Principes généraux en matière de collecte et de traitement des données</Typography>
                    <Typography>
                        Conformément aux principes de l'article 5 du réglement européen 2016/679, la collecte et le traitement des données 
                        des utilisateurs du site respectent les principes suivants: 
                    </Typography>
                    <ul className={classes.list}>
                        <li>
                            Licéité, loyauté et transparence: les données ne peuvent être collectées et traitées qu'avec le consentement 
                            de l'utilisateur propriétaire des données. A chaque fois que des données à caractère personnel seront
                            collectées, il sera indiqué à l'utilisateur que ses données sont collectées et pour quelles raisons ses 
                            données sont collectées;
                        </li>
                        <li>
                            Finalités limitées: la collecte et le traitement des données sont exécutés pour répondre à un ou 
                            plusieurs objectifs déterminés dans les présentes conditions générales d'utilisation.
                        </li>
                        <li>
                            Minimisation de la collecte et du traitement des données: seules les données nécessaires à la bonne 
                            exécution des objets poursuivis par le site sont collectées.
                        </li>
                        <li>
                            Conservation des données réduites dans le temps: les données sont conservées pour une durée limitée, dont 
                            l'utilisateur est informé. Lorsque cette information ne peut pas être commmuniquée, l'utilisateur est 
                            informé des critères utilisés pour déterminer la durée de conservation.
                        </li>
                        <li>
                            Intégrité et confidentialité des données collectées et traitées: le responsable du traitement des données 
                            s'engage à garantir l'intégrité et la confidentialité des données collectées.
                        </li>
                    </ul>
                    <Typography>
                        Afin d'être licités, et ce conformément aux exigences de l'article 6 du réglement européen 2016/679, la collecte 
                        et le traitement des données à caractère personnel ne pourront intervenir que s'ils respectent au moins l'une 
                        des conditions ci-après énumérées: 
                    </Typography>
                    <ul className={classes.list}>
                        <li>L'utilisateur a expressément consenti au traitement;</li>
                        <li>Le traitement est nécessaire à la bonne exécution d'un contrat;</li>
                        <li>Le traitement répond à une obligation légale;</li>
                        <li>
                            Le traitement s'explique par une nécessité liée à la sauvegarde des intérêts vitaux de la personne 
                            concernée ou d'une autre personne physique;
                        </li>
                        <li>
                            Le traitement peut s'expliquer par une nécessité liée à l'exécution d'une mission d'intérêt public 
                            ou qui relève de l'exercice de l'autorité publique;
                        </li>
                        <li>
                            Le traitement et la collecte des données à caractère personnel sont nécessaires aux fins des 
                            intérêts légitimes et privés poursuivis par le responsable du traitement ou par un tiers;
                        </li>
                    </ul>
                    <Typography variant='h5' className={classes.subtitle}>ARTICLE 2 : Données à caractère personnel collectées et traitées dans le cadre de la navigation sur le site</Typography>
                    <Typography variant='h6' gutterBottom>A. Données collectées et traitées et mode de collecte</Typography>
                    <Typography>
                        Les données à caractère personnel collectées sur le site MetaSante sont les suivantes: 
                    </Typography>
                    <ul className={classes.list}>
                        <li>prénom</li>
                        <li>boîte mail</li>
                    </ul>
                    <Typography>
                        Ces données sont collectées lorsque l'utilisateur effectue l'une des opérations suivantes sur le site:<br /> 
                    </Typography>
                    <ul className={classes.list}><li>l'utilisateur s'inscrit à la newsletter.</li></ul>
                    <Typography>
                        Le responsable du traitement conservera dans les systèmes informatiques du site et dans des conditions 
                        raisonnables de sécurité l'ensemble des données collectées pour une durée de:<br />
                    </Typography>
                    <ul className={classes.list}><li>jusqu'à suppression de son compte par l'utilisateur ou en cas de non connection à ce compte pendant 2 ans.</li></ul>
                    <Typography>
                        La collecte et le traitement des données répondent aux finalités suivantes:<br />
                        permettre à l'utilisateur de recevoir des emails personnalisés contenant des informations en avant-première.
                        Les traitements de données effectuées sont fondés sur les bases légales suivantes:<br />
                    </Typography>
                    <ul className={classes.list}><li>consentement de l'utilisateur.</li></ul>
                    <Typography variant='h6' gutterBottom>B. Transmission des données à des tiers</Typography>
                    <Typography gutterBottom>
                        Les données à caractère personnel collectées par le site ne sont transmises à aucun tiers, et ne sont 
                        traitées que par l'éditeur du site.
                    </Typography>
                    <Typography variant='h6' gutterBottom>C. Hébergement des données</Typography>
                    <Typography>
                        Le site MetaSante est hébergé par Netlify dont le siège et situé à l'adresse ci-après:<br />
                        2325 3rd Street Suite 215, 94107 San Francisco CA, US.<br />
                        Les données collectées et traitées par le site sont transférées vers le pays suivant: Etats-Unis.
                    </Typography>
                    <Typography variant='h5' className={classes.subtitle}>ARTICLE 3 : Responsable du traitement des données</Typography>
                    <Typography variant='h6' gutterBottom>A. Le responsable du traitement des données</Typography>
                    <Typography>
                        Le responsable du traitement des données à caractère personnel est: DELPLANQUE Frédéric, 
                        domicilié 137, rue Emile Vidal à Nîmes. Il peut 
                        être contacté de la manière suivante:
                    </Typography>
                    <ul className={classes.list}><li>email: support@metasante.fr</li></ul>
                    <Typography gutterBottom>
                        Le responsable du traitement des données est chargé de déterminer les finalités et les moyens mis au 
                        service du traitement des données à caractère personnel.
                    </Typography>
                    <Typography variant='h6' gutterBottom>B. Obligations du responsable du traitement des données</Typography>
                    <Typography gutterBottom>
                        Le responsable du traitement des données s'engage à protéger les données à caractère personnel collectées, 
                        à ne pas les transmettre à des tiers sans que l'utilisateur n'en ait été informé et à respecter les finalités 
                        pour lesquelles ces données ont été collectées.
                    </Typography>
                    <Typography gutterBottom>
                        Le site dispose d'un certificat SSL afin de garantir que les informations et le transfert des données transitant 
                        par le site sont sécurisés.
                        Un certificat SSL ("Secure Socket Layer" Certificate) a pour but de sécuriser les échanges entre l'utilisateur 
                        et le site.
                    </Typography>
                    <Typography>
                        De plus, le responsable du traitement des données s'engage à notifier l'utilisateur en cas de rectification 
                        ou de suppression des données, à moins que cela n'entraîne pour lui des formalités, coûts et démarches 
                        disproportionnés. Dans le cas où l'intégrité, la confidentialité ou la sécurité des données à caractère 
                        personnel de l'utilisateur est compromise, le responsable du traitement s'engage à informer l'utilisateur 
                        par tout moyen.
                    </Typography>
                    <Typography variant='h5' className={classes.subtitle}>ARTICLE 4 : Droits de l'utilisateur</Typography>
                    <Typography gutterBottom>
                        Conformément à la réglementation concernant le traitement des données à caractère personnel, l'utilisateur 
                        possède les droits ci-après énumérés.
                        Afin que le responsable du traitement des données fasse droit à sa demande, l'utilisateur est tenu de lui 
                        communiquer: ses prénoms et nom ainsi que son adresse e-mail, et si cela est pertinent, son numéro de 
                        compte ou d'espace personnel ou d'abonné.
                        Le responsable du traitement des données est tenu de répondre à l'utilisateur dans un délai de 30 (trente) 
                        jours maximum.
                    </Typography>
                    <Typography variant='h6' gutterBottom>A. Présentation des droits de l'utilisateur en matière de collecte et traitement des données</Typography>
                    <Typography gutterBottom><em>Droit d'accès, de rectification et droit à l'effacement</em></Typography>
                    <Typography>
                        L'utilisateur peut prendre connaissance, mettre à jour, modifier ou demander la suppression des données le 
                        concernant, en respectant la procédure ci-après énoncée:
                    </Typography>
                    <ul className={classes.list}><li>en envoyant un mail au support de MetaSante.</li></ul>
                    <Typography>
                        S'il en possède un, l'utilisateur a le droit de demander la suppression de son espace personnel en suivant 
                        la procédure suivante:
                    </Typography>
                    <ul className={classes.list}><li>en envoyant un mail au support de MetaSante.</li></ul>
                    <Typography gutterBottom><em>Droit à la portabilité des données</em></Typography>
                    <Typography>
                        L'utilisateur a le droit de demander la portabilité de ses données personnelles, détenues par le site, vers 
                        un autre site, en se conformant à la procédure ci-après:
                    </Typography>
                    <ul className={classes.list}><li>en envoyant un mail au support de MetaSante.</li></ul>
                    <Typography gutterBottom><em>Droit à la limitation et à l'opposition du traitement des données</em></Typography>
                    <Typography>
                        L'utilisateur a le droit de demander la limitation ou de s'opposer au traitement de ses données par le 
                        site, sans que le site ne puisse refuser, sauf à démontrer l'existence de motifs légitimes et impérieux, 
                        pouvant prévaloir sur les intérêts et les droits et libertés de l'utilisateur.
                        Afin de demander la limitation du traitement de ses données ou de formuler une opposition au traitement 
                        de ses données, l'utilisateur doit suivre la procédure suivante:
                    </Typography>
                    <ul className={classes.list}><li>envoyer un mail au support de MetaSante.</li></ul>
                    <Typography gutterBottom><em>Droit de ne pas faire l'objet d'une décision fondée exclusivement sur un procédé automatisé</em></Typography>
                    <Typography gutterBottom>
                        Conformément aux dispositions du réglement 2016/679, l'utilisateur a le droit de ne pas faire l'objet d'une 
                        décision fondée exclusivement sur un procédé automatisé si la décision produit des effets juridiques le 
                        concernant, ou l'affecte de manière significative de façon similaire.
                    </Typography>
                    <Typography gutterBottom><em>Droit de déterminer le sort des données après la mort</em></Typography>
                    <Typography gutterBottom>
                        Il est rappelé à l'utilisateur qu'il peut organiser quel doit être le devenir de ses données collectées et 
                        traitées s'il décède, conformément à la loi n°2016-1321 du 7 octobre 2016.
                    </Typography>
                    <Typography gutterBottom><em>Droit de saisir l'autorité de contrôle compétente</em></Typography>
                    <Typography>
                        Dans le cas où le responsable du traitement des données décide de ne pas répondre à la demande de 
                        l'utilisateur, et que l'utilisateur souhaite contester cette décision, ou, s'il pense qu'il est porté 
                        atteinte à l'un des droits énumérés ci-dessus, il est en droit de saisir la CNIL (Commission Nationale 
                        de l'Informatique et des Libertés, https://www.cnil.fr) ou tout juge compétent.
                    </Typography>
                    <Typography variant='h5' className={classes.subtitle}>ARTICLE 5 : Utilisation des fichiers "cookies"</Typography>
                    <Typography gutterBottom>
                        Le site a recours aux techniques de "cookies". 
                        Un "cookie" est un fichier de petite taille (moins de 4 ko), stocké par le site sur le disque dur de 
                        l'utilisateur, contenant des informations relatives aux habitudes de navigation de l'utilisateur. 
                        Ces fichiers lui permettent de traiter des statistiques et des informations sur le trafic, de faciliter 
                        la navigation et d'améliorer le service pour le confort de l'utilisateur.                        
                    </Typography>
                    <Typography gutterBottom>
                        Pour l'utilisation de fichiers "cookies" impliquant la sauvegarde et l'analyse de données à caractère 
                        personnel, le consentement de l'utilisateur est nécessairement demandé.
                    </Typography>
                    <Typography>
                        En navigant sur MetaSante, vous consentez à l’utilisation des cookies déposés par MetaSante.
                        MetaSante utilise des cookies aux fins suivantes:
                    </Typography>
                    <ul className={classes.list}>
                        <li>Usage de MetaSante : pour nous aider à reconnaître votre navigateur comme celui d’un visiteur précédent et pour 
                        enregistrer les préférences que vous avez déterminées lors de votre précédente visite sur MetaSante. Par exemple, 
                        nous pouvons enregistrer vos informations de connexion de sorte que vous n’ayez pas à vous connecter à chaque fois que vous visitez MetaSante ;</li>
                        <li>Réseaux sociaux : pour vérifier si vous êtes connectés à des services tiers (Facebook, Twitter, Google+…) ;</li>
                        <li>Ciblage : pour nous permettre de cibler (emailing, enrichissement de base) à postériori ou en temps réel l’internaute qui navigue sur MetaSante ;</li>
                        <li>Mesure d’audience : pour suivre les données statistiques de fréquentation de MetaSante (soit l’utilisation faite de MetaSante par 
                        les utilisateurs et pour améliorer les services du site) et pour nous aider à mesurer et étudier l’efficacité de notre 
                        contenu interactif en ligne, de ses caractéristiques, publicités et autres communications.</li>
                        Nous utilisons les cookies de Google Analytics pour recueillir des informations sur la façon dont les visiteurs utilisent MetaSante, 
                        y compris les détails du site que le visiteur a parcouru avant d’arriver sur notre site, et le nombre total de fois qu’un visiteur 
                        a visité notre site. Nous utilisons les informations pour optimiser MetaSante et nos services, et pour améliorer l’expérience 
                        de nos utilisateurs. Les cookies ne vous identifient pas personnellement. Ils se contentent de collecter de façon anonyme des 
                        informations qui sont transmises et stockées par Google sur des serveurs aux États-Unis conformément à ses pratiques de 
                        confidentialité. Pour en savoir plus sur les pratiques de confidentialité de Google Analytics, cliquez sur:  
                        <a href='https://support.google.com/analytics/answer/6004245'>https://support.google.com/analytics/answer/6004245</a>
                        <li>
                            Cookies publicitaires: les fournisseurs tiers, y compris Google, utilisent des cookies pour diffuser des annonces en fonction des visites antérieures des internautes sur MetaSante ou sur d'autres pages.
                            Grâce aux cookies publicitaires, Google et ses partenaires adaptent les annonces diffusées auprès des visiteurs en fonction de leur navigation sur MetaSante et/ou d'autres sites Web.
                            Les utilisateurs peuvent choisir de désactiver la publicité personnalisée dans les <a href='https://adssettings.google.com/authenticated'>Paramètres des annonces</a>.
                        </li>
                    </ul>
                    <Typography variant='h6' className={classes.subtitle}>Vos Choix Concernant les Cookies et Balises Web</Typography>
                    <Typography gutterBottom>
                        Vous avez le choix de configurer votre navigateur pour accepter tous les cookies, rejeter tous les cookies, 
                        vous informer quand un cookie est émis, sa durée de validité et son contenu, ainsi que vous permettre de refuser 
                        son enregistrement dans votre terminal, et supprimer vos cookies périodiquement.
                    </Typography>
                    <Typography>
                        Vous pouvez paramétrer votre navigateur Internet pour désactiver les cookies. Notez toutefois que si vous 
                        désactivez les cookies, votre nom d’utilisateur ainsi que votre mot de passe ne seront plus sauvegardés sur 
                        aucun site web. Pour plus d’informations relatives aux méthodes vous permettant de supprimer et de contrôler 
                        les cookies stockés sur votre ordinateur, consultez le site suivant : http://www.allaboutcookies.org/fr/
                    </Typography>
                    <Typography variant='h6' className={classes.subtitle}>Comment configurer votre navigateur</Typography>
                    <Typography>
                        Firefox :
                    </Typography>
                    <ul className={classes.list}>
                        <li>1. Ouvrez Firefox</li>
                        <li>2. Appuyez sur la touche « Alt »</li>
                        <li>3. Dans le menu en haut de la page cliquez sur « Outils » puis « Options »</li>
                        <li>4. Sélectionnez l’onglet « Vie privée »</li>
                        <li>5. Dans le menu déroulant à droite de « Règles de conservation », cliquez sur « utiliser les paramètres personnalisés pour l’historique »</li>
                        <li>6. Un peu plus bas, décochez « Accepter les cookies »</li>
                        <li>7. Sauvegardez vos préférences en cliquant sur « OK »</li>
                    </ul>
                    <Typography>
                        Internet Explorer :
                    </Typography>
                    <ul className={classes.list}>
                        <li>1. Ouvrez Internet Explorer</li>
                        <li>2. Dans le menu « Outils », sélectionnez « Options Internet »</li>
                        <li>3. Cliquez sur l’onglet « Confidentialité »</li>
                        <li>4. Cliquez sur « Avancé » et décochez « Accepter »</li>
                        <li>5. Sauvegardez vos préférences en cliquant sur « OK »</li>
                    </ul>
                    <Typography>
                        Google Chrome :
                    </Typography>
                    <ul className={classes.list}>
                        <li>1. Ouvrez Google Chrome</li>
                        <li>2. Cliquez sur l’icône d’outils dans la barre de menu</li>
                        <li>3. Sélectionnez « Options »</li>
                        <li>4. Cliquez sur l’onglet « Options avancées »</li>
                        <li>5. Dans le menu déroulant « Paramètres des cookies », sélectionnez « Bloquer tous les cookies »</li>
                    </ul>
                    <Typography>
                        Safari :
                    </Typography>
                    <ul className={classes.list}>
                        <li>1. Ouvrez Safari</li>
                        <li>2. Dans la barre de menu en haut, cliquez sur « Safari », puis « Préférences »</li>
                        <li>3. Sélectionnez l’icône « Sécurité »</li>
                        <li>4. À côté de « Accepter les cookies », cochez « Jamais »</li>
                        <li>5. Si vous souhaitez voir les cookies qui sont déjà sauvegardés sur votre ordinateur, cliquez sur « Afficher les cookies »</li>
                    </ul>
                    <Typography variant='h5' className={classes.subtitle}>ARTICLE 7 : Conditions de modification de la politique de confidentialité</Typography>
                    <Typography>
                        La présente politique de confidentialité peut être consultée à tout moment à l'adresse ci-après indiquée:
                    </Typography>
                    <ul className={classes.list}><li>https://www.metasante.fr/confidentialite.</li></ul>
                    <Typography>
                        L'éditeur du site se réserve le droit de la modifier afin de garantir sa conformité avec le droit en vigueur. 
                        Par conséquent, l'utilisateur est invité à venir consulter régulièrement cette politique de confidentialité 
                        afin de se tenir informé des derniers changements qui lui seront apportés.
                        Toutefois, en cas de modification substantielle de cette politique, l'utilisateur en sera informé de la manière 
                        suivante:
                    </Typography>
                    <ul className={classes.list}><li>mail ou notification en visitant le site.</li></ul>
                    <Typography>
                        Il est porté à la connaissance de l'utilisateur que la dernière mise à jour de la présente politique de 
                        confidentialité est intervenue le 01/11/2021.
                    </Typography>
                </Paper>
            </Container>
        </Layout>
    );
};

export default Confidentialite;