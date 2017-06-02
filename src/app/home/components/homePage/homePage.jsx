import React from 'react';

import BlogLayout from '../../../components/blogLayout';

import './homePage.less';

export default class HomePage extends React.Component {

    render() {
        return ( 
            <BlogLayout>
                <div className="home-page">
                    {this.getIntro()}
                    {this.getContent()}
                </div>
            </BlogLayout>
        );
    }

    getIntro() {
        return (
            <div className="intro-image">
                <div className="intro-header">Home</div>
                <div className="intro-line"></div>
                <div className="intro-subheader">Lorem ipsum...</div>
            </div>
        );
    }

    getContent() {
        let style = { maxWidth: '800px', margin: '0 auto', padding: '25px' };
        return (
            <div style={style}>Home</div>
        );
    }

}