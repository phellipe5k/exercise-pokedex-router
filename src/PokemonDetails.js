import React from 'react';
import { Link } from 'react-router-dom';

class PokemonDetails extends React.Component {
  
  render() {
    const { id } = this.props.match.params;
    const { name, type, image, summary, averageWeight, foundAt } = this.props.data.find(el => el.id.toString() === id)
    return (
      <div>
        <h2>{`${name} Details`}</h2>
        <div className="pokemon">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p>
          </div>
          <img src={image} alt={`${name} sprite`} />
        </div>
        <article>
          <h3>Summary</h3>
            <p>{summary}</p>
        </article>
        <article>
          <h3>{`Game Locations of ${name}`}</h3>
          {
            foundAt.map((el) => {
              return (
                <div>
                  <img src={el.map}/>
                  <p>{el.location}</p>
                </div>
              )
            })
          }
        </article>
      </div>
      
    )
  }
}
export default PokemonDetails;