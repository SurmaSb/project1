import * as React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
   public render() {
        return (
            <div>
                <Link to="/">Tracks</Link>
                <Link to="/About">About</Link>
            </div>
        );
    }
}

export default Menu;