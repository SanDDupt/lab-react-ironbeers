import React, { Component } from "react";
import axios from "axios";

import Header from "./Header.js";

class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    const tagline = this.state.tagline;
    const description = this.state.description;
    const first_brewed = this.state.first_brewed;
    const brewers_tips = this.state.brewers_tips;
    const attenuation_level = this.state.attenuation_level;
    const contributed_by = this.state.contributed_by;

    axios
      .post("https://ironbeer-api.herokuapp.com/beers/new", {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by
      })
      .then(() => {
        this.props.getData();
        this.setState({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: ""
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="box">
        <Header />
        <div style={{ width: "710px" }}>
          <form onSubmit={this.handleFormSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  class="input"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Tagline:</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="tagline"
                  value={this.state.tagline}
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <textarea
                  class="textarea"
                  name="description"
                  value={this.state.description}
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">First Brewed</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="first_brewed"
                  value={this.state.first_brewed}
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Brewers Tips</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="brewers_tips"
                  value={this.state.brewers_tips}
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Attenuation Level</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="attenuation_level"
                  value={this.state.attenuation_level}
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Contributed by</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="contributed_by"
                  value={this.state.contributed_by}
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>

            <div className="control">
              <button className="button is-info is-rounded is-medium is-fullwidth">Add New</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewBeer;
