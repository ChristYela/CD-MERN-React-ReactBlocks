import React, { Component } from "react";
import styles from './Sub.module.css';

class Sub extends Component {
    render() {
        return <div className={styles.sub}>{this.props.children}</div>;
    }
}
export default Sub;