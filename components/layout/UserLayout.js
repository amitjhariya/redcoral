
import Header from '../header/ChatHeader';
import Footer from '../footer/ChatFooter';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header/>
            {children}
            <Footer />
        </React.Fragment>
    );
};

export default Layout;