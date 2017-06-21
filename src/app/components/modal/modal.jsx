import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import $ from 'jquery';

const propTypes = {
    className: PropTypes.string,
    open: PropTypes.bool,
    title: PropTypes.string,
    actions: PropTypes.node,
    children: PropTypes.node,
    onOutsideClick: PropTypes.func,
    onEscPress: PropTypes.func
};

const defaultProps = {
    open: false,
    onOutsideClick: () => {},
    onEscPress: () => {}
};

import './modal.less';

class Modal extends React.Component {

    constructor() {
        super(...arguments);

        this.modalRef = null;

        this.onKeyUp = this.onKeyUp.bind(this);
        this.onContentClick = this.onContentClick.bind(this);
    }

    render() {

        let className = this.props.className;
        className = classNames('modal', className);

        return (
            <div className={className} ref={el => this.modalRef = el}>
                <div className="modal-backdrop"></div>
                <div className="modal-content" onClick={this.onContentClick} >
                    <div className="modal-box">
                        {this.renderTitle()}
                        {this.renderBody()}
                        {this.renderActions()}
                    </div>
                </div>
            </div>
        );
    }

    renderTitle() {
        const title = this.props.title;
        return title? <div className="modal-title">{title}</div>: null;
    }

    renderBody() {
        return <div className="modal-body">{this.props.children}</div>;
    }

    renderActions() {
        const actions = this.props.actions;
        return actions? <div className="modal-actions">{actions}</div>: null;
    }

    componentDidMount() {
        window.addEventListener('keyup', this.onKeyUp);
        this.toggleModal();
    }

    componentDidUpdate(prevProps) {
        if (this.props.open !== prevProps.open) {
            this.toggleModal();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.onKeyUp);
    }

    onKeyUp(event) {
        if (event.keyCode === 27) {
            this.props.onEscPress(event);
        }
    }

    onContentClick(event) {
        if (event.target.classList.contains('modal-content')) {
            this.props.onOutsideClick(event);
        }
    }

    toggleModal() {

        const open = this.props.open;

        $(document.body).toggleClass('modal-open', open);

        const modal = $(this.modalRef);
        if (open) {
            modal.show(0, () => modal.addClass('open'));
        } else {
            modal.removeClass('open');
            setTimeout(() => modal.hide(), 300);
        }
    }

}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;