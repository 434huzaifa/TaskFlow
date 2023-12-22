import { Footer } from 'flowbite-react';
const FooterComponent = () => {
    return (
        <Footer container className='my-3'>
      <Footer.Copyright href="/" by="TaskFlow" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
    );
};

export default FooterComponent;