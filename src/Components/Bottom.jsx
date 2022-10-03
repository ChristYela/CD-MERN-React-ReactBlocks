import React, { Component } from "react";
import styles from './Bottom.module.css';

class Bottom extends Component {
    render() {
        return <div className={styles.bottom}>{this.props.children}</div>;
    }
}
export default Bottom;