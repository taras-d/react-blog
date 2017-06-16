import React from 'react';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';

import './aboutPage.less';

const AboutPage = () => {
    return (
        <BlogLayout className="about-page">
            <IntroHeader
                bgImage="/assets/images/about-bg.jpg"
                title="About"
                subtitle="About"
            />
            <div className="page-content">
                {text.map((t, i) => <p key={i}>{t}</p>)}
            </div>
        </BlogLayout>
    );
}

const text = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ligula sapien, blandit ut ullamcorper nec, dictum at libero. Nunc euismod, odio ac eleifend ultricies, orci libero laoreet nunc, nec pretium arcu est a elit. Vestibulum a congue risus, sit amet aliquam arcu. Praesent fringilla a tellus vel gravida. Aenean luctus cursus tristique.',
    'Aenean aliquet magna eu urna pulvinar, et interdum leo tincidunt. Fusce commodo tellus vel congue lobortis. Suspendisse ac purus faucibus, pretium tortor quis, fermentum dolor.'
];

export default AboutPage;