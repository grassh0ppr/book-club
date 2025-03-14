import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Welcome to the SFBB home page</h2>
      <p>This is our corner of the internet</p>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
