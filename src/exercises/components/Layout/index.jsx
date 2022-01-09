import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
	return (
		<div>
			<Header className="Link" />
			<div>hier ist der Content drin der auch children übergeben werden könnte </div>
			<Footer> Footer</Footer>
		</div>
	);
};
export default Layout;
