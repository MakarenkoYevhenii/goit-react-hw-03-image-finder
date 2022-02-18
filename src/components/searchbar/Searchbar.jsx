import { Component } from 'react';
import styles from '../searchbar/searchbar.module.css'
import PropTypes from 'prop-types';

class searchbar extends Component {
  state = {
    query: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      query:""
    })
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <input value={this.state.query} onChange={this.handleChange} name='query' className={styles.input} type="text" />
          <button  type="submit" className={styles.button}>
            <span className="button-label">Search</span>
          </button>

        </form>
      </header>
    );
  }
}
export default searchbar;

searchbar.propTypes={
  onSubmit:PropTypes.func.isRequired
}