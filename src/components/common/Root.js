import Header from "./Header";
import Footer from './Footer'
export default function Root({ children }) {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
