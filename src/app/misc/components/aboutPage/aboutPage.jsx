import React from 'react';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';

import './aboutPage.less';

class AboutPage extends React.Component {

    render() {
        return (
            <BlogLayout className="about-page">
                <IntroHeader
                    bgImage="/assets/images/about-bg.jpg"
                    title="About"
                    subtitle="About"
                />
                {this.getBody()}
            </BlogLayout>
        )
    }

    getBody() {
        return (
            <div className="page-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies ipsum id scelerisque placerat. Proin egestas fringilla pharetra. Vestibulum nec odio tortor. Sed quam nunc, vulputate in volutpat eu, tincidunt vitae neque. Morbi tincidunt, ex a faucibus convallis, orci ipsum porttitor ipsum, a lobortis libero ex sit amet turpis. Nam varius interdum metus eu malesuada. Quisque sed consequat lectus. Mauris consectetur vehicula egestas. Maecenas eget tortor et nisl varius scelerisque nec in tellus. Cras dolor est, consequat et mauris ut, tempor sagittis sem.</p>
            </div>
        );
    }

}

export default AboutPage;