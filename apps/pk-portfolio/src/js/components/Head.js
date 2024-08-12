import {Helmet} from "react-helmet";
import faviconSm from '../../assets/imgs/favicon-16x.png';
import faviconMed from '../../assets/imgs/favicon-32x.png';


const Head = () => {

  return (
    <>
      <Helmet>
        <title>Paul Kaspriskie | Frontend Developer</title>
        <link rel="icon" type="image/png" href={faviconSm} sizes="16x16" />
        <link rel="icon" type="image/png" href={faviconMed} sizes="32x32" />
        <meta name="author" content="Paul Kaspriskie" />
        <meta name="keywords" content="Paul Kaspriskie, frontend developer, ui developer, javascript, react, html, css" />
        <meta name="description" content="Paul Kaspriskie Frontend Developer | UI Developer, Over nine years experience building and maintaining modern frontend architectures, ui components and web applications." />
      </Helmet>
    </>
  );

}

export default Head;

