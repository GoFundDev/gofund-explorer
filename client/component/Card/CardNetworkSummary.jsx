
import Component from '../../core/Component';
import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';
import GraphLine from '../Graph/GraphLine';

export default class CardNetworkSummary extends Component {
  static defaultProps = {
    difficulty: 0,
    hashps: 0,
    xAxis: [],
    yAxis: []
  };

  static propTypes = {
    difficulty: PropTypes.number.isRequired,
    hashps: PropTypes.number.isRequired,
    xAxis: PropTypes.arrayOf(PropTypes.string).isRequired,
    yAxis: PropTypes.arrayOf(PropTypes.number).isRequired
  };

  render() {
    const labels = ['H', 'kH', 'MH', 'GH', 'TH'];
    let hash = this.props.hashps;
    let idx = 0;
    while (hash > 1000) {
      hash = hash / 1000;
      idx++;
    }

    return (
      <Card
        className="card--graph"
        style={{ marginBottom: 0 }}
        title="Network">
        <p className="card__data-main">{ hash } { labels[idx] }/s</p>
        <p className="card__data-sub">Difficulty: { this.props.difficulty }</p>
        <GraphLine
          color="rgba(0,0,255,0.5)"
          data={ this.props.yAxis }
          height="100px"
          hideLines={ true }
          labels={ this.props.xAxis } />
      </Card>
    );
  };
}
