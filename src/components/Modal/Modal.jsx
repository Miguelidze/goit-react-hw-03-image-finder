import React, {Component} from "react";
import s from "./Modal.module.css";

class Modal extends Component {
    onCloseModalByEsc = (e) => {
        if (e.keyCode === 27) {
            this.props.handleTogleModal ("")
        }
    }
    componentDidMount() {
        window.addEventListener("keydown",this.onCloseModalByEsc)
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.onCloseModalByEsc)
    }
    render() {
        const{modalImg, handleTogleModal} = this.props
        return (
            <div className={s.Overlay}
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        handleTogleModal("")
                    }
                }}>
                <div className={s.Modal}>
                    <img src={modalImg} alt="" />
                </div>
            </div>
        );
    }
   
};
export default Modal;