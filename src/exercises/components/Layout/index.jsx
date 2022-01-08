import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
	return (
		<div>
			<Header className="Link" />
			<div>{children}</div>
			<Footer> Footer</Footer>
		</div>
	);
};
export default Layout;
