import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../button';
import SocialButton from '../socialButton';
import Modal from '../modal';

import './blogFooter.less';

const propTypes = {
    className: PropTypes.string
};

class BlogFooter extends React.Component {

    constructor() {
        super(...arguments);

        this.state = { authorModal: false };

        this.openAuthorModal = this.openAuthorModal.bind(this);
        this.closeAuthorModal = this.closeAuthorModal.bind(this);
    }

    render() {

        let className = classNames('blog-footer', this.props.className);

        return (
            <div className={className}>
                {this.renderSocialButtons()}
                {this.renderCopyright()}
                {this.renderAuthorModal()}
            </div>
        );

    }

    renderSocialButtons() {
        return (
            <div>
                <SocialButton name="facebook" url="https://www.facebook.com"/>
                <SocialButton name="twitter" url="https://twitter.com"/>
                <SocialButton name="github" url="https://github.com"/>
            </div>
        );
    }

    renderCopyright() {
        return <div className="copyright">{`Copyright © Blog ${fullYear}`}</div>;
    }

    renderAuthorModal() {
        return (
            <div>
                <a className="become-author"
                    onClick={this.openAuthorModal}>
                    Become an Author
                </a>
                <Modal 
                    open={this.state.authorModal}
                    title="Become an Author" 
                    actions={<Button onClick={this.closeAuthorModal}>Ok</Button>}
                    onOutsideClick={this.closeAuthorModal}
                    onEscPress={this.closeAuthorModal}
                >
                    This feature is not available now<br/>Try again later
                </Modal>
            </div>
        );
    }

    openAuthorModal() {
        this.setState({ authorModal: true });
    }

    closeAuthorModal() {
        this.setState({ authorModal: false });
    }
}

BlogFooter.propTypes = propTypes;

const fullYear = new Date().getFullYear();

export default BlogFooter;