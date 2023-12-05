import React, { Component } from 'react'; 
import List from './List'; 
import { DropdownButton, Dropdown } from 'react-bootstrap';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All" // This can be used to filter by type if implemented
    };
  }
  // Updates the state as the user types in the search bar
  onSearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  }
  // Updates the search state based on the selected dropdown item
  onSelect = (eventKey) => {
    this.setState({ search: eventKey.toLowerCase() });
  }
  filterItem = (item) => {
    // If the search term is 'all' or the item type includes the search term, return true
    if (this.state.search !== "all") {
      return item.type.toLowerCase().includes(this.state.search);
    } else {
      return true; // If the search term is 'all', return all items
    }
  }

  render() {
    return (
      <div className="filter-list">
        <br/>
        <h1>Produce Search</h1>
        <DropdownButton id="typeDropdown" title="Type" onSelect={this.onSelect}>
          <Dropdown.Item eventKey="all">All</Dropdown.Item><br/>
          <Dropdown.Item eventKey="Fruit">Fruits</Dropdown.Item><br/>
          <Dropdown.Item eventKey="Vegetable">Vegetables</Dropdown.Item><br/>
        </DropdownButton><br/><br/>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;