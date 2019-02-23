import react, { Component } from "react";
import { connect } from "react-redux";
import categories from "../actions/actions";
import { fetchCategoriesIfneeded } from "../actions/actions";
import Router from "next/router";
import Link from "next/link";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
        value:''
      
    };
  }
  handleInputChange = () => {
    this.setState({
      value: this.search.value
    })
  }
  searchResult = () => {

  }
  

  render() {
    return (
      <div>
        <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <Link as={`/search/${this.state.value}`} href={`/search?address=${this.state.value}`}>
       <button>search</button>
       </Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(SearchBar);
// export default Header
