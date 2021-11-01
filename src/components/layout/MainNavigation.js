import { Link } from "react-router-dom";
import './mainnavigation.css';

function MainNavigation() {
  return (
    <div className="header">
      <span className="logo">eTranzact</span>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-one">Deposit</Link>
          </li>
          <li>
            <Link to="/page-two">Withdraw</Link>
          </li>
          <li>
            <Link to="/page-three">Balance</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;
