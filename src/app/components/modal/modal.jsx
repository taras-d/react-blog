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
    onBackdropClick: PropTypes.func,
    onEscPress: PropTypes.func
};

const defaultProps = {
    open: false,
    onBackdropClick: () => {},
    onEscPress: () => {}
};

import './modal.less';

class Modal extends React.Component {

    constructor() {
        super(...arguments);

        this.windowRef = window;
        this.bodyRef = document.body;
        this.modalRef = null;

        this.onKeyUp = this.onKeyUp.bind(this);
    }

    render() {

        let { className, title, children, onBackdropClick } = this.props;

        className = classNames('modal', className);

        return (
            <div className={className} 
                ref={el => this.modalRef = el}>
                <div className="modal-backdrop" 
                    onClick={onBackdropClick}></div>
                <div className="modal-content">
                    {this.renderTitle()}
                    {this.renderBody()}
                    {this.renderActions()}
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
        this.windowRef.addEventListener('keyup', this.onKeyUp);
        this.toggleModal();
    }

    componentDidUpdate(prevProps) {
        if (this.props.open !== prevProps.open) {
            this.toggleModal();
        }
    }

    componentWillUnmount() {
        this.windowRef.removeEventListener('keyup', this.onKeyUp);
    }

    onKeyUp(event) {
        if (event.keyCode === 27) {
            this.props.onEscPress(event);
        }
    }

    toggleModal() {

        const open = this.props.open;

        $(this.bodyRef).toggleClass('modal-open', open);

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