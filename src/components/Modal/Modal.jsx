import styles from '../Modal/Modal.module.css';
import { Component } from 'react';
// import { createPortal } from "react-dom";
// const modalRoot = document.getElementById("modal-root")

class modal extends Component  {
    componentDidMount() {
        document.addEventListener("keydown", this.close)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.close)
    }

    close = (e)=> {
        console.log(e);
        if(e.code === "Escape") {
            return this.props.handleClose();
        }
        if(e.target === e.currentTarget) {
            this.props.handleClose()
        }
    }
    render(){
    return (
    <div className={styles.overlay} onClick={this.close}>
      <div className={styles.content}>
        <img src={this.props.image} alt="" className={styles.img}/>
      </div>
    </div>
    )};
}
export default modal;
