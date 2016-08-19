import React from 'react';
import style from './index.css';

const propTypes = {
  size: React.PropTypes.number,
  value: React.PropTypes.number,
  onChange: React.PropTypes.func,
};

const defaultProps = {
  size: 5,
};

const starIcon = '★';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverCount: 0,
    };
  }

  onSelectRating = (val) => {
    this.props.onChange(val, this.props.value);
  }

  onMouseEnterStar = (val) => {
    this.setState({
      hoverCount: val,
    });
  }

  onMouseLeaveStar = () => {
    this.setState({
      hoverCount: 0,
    });
  }

  renderStarIcon(isOn, valueOfStar) {
    return (
      <span
        key={valueOfStar}
        className={isOn ? style.on : style.off}
        onMouseEnter={this.onMouseEnterStar.bind(null, valueOfStar)}
        onMouseLeave={this.onMouseLeaveStar.bind(null, valueOfStar)}
        onClick={this.onSelectRating.bind(null, valueOfStar)}
      >
       {starIcon}
      </span>
    );
  }

  renderStars = (size) => {
    const stars = [];
    const hoverCount = this.state.hoverCount;
    const numOfStarsToRender = hoverCount === 0 ? this.props.value : hoverCount;

    for (let i = 0; i < size; i++) {
      const isOn = (i < numOfStarsToRender);
      stars.push(this.renderStarIcon(isOn, i + 1));
    }

    return stars;
  }

  render() {
    return (
      <div className={style.root}>
        <div>
          {this.renderStars(this.props.size)}
        </div>
      </div>
    );
  }
}

StarRating.propTypes = propTypes;
StarRating.defaultProps = defaultProps;

export default StarRating;
