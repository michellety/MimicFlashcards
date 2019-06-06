import React from "react";
import "./style.css";

class Radio extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "da"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const { value, onChange } = this.props;

    return (
      <div className="radio-block">
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" value="da" checked={value === "da"} onChange={onChange} />
          <label className="form-check-label">Danish</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" value="nl" checked={value === "nl"} onChange={onChange} />
          <label className="form-check-label">Dutch</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" value="pt" checked={value === "pt"} onChange={onChange} />
          <label className="form-check-label">Portuguese</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" value="es" checked={value === "es"} onChange={onChange} />
          <label className="form-check-label">Spanish</label>
        </div>
      </div>
    );
  }
}

export default Radio;
