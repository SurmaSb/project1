import * as React from 'react';
import logo from './logo.svg';
import Menu from './Menu';



class About extends React.Component {
    public render() {
        return (
            <div>
                <Menu />
                <div className="About">
                    <header className="About-header">
                        <img src={logo} className="About-logo" alt="logo"/>
                        <h1 className="About-title">This is my project</h1>
                    </header>
                    <p className="About-intro">
                        To get started, edit <code>src/About.tsx</code> and save to reload.
                    </p>
                </div>

            </div>
        );
    }
}

export default About;