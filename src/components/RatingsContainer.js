import React from 'react';
import RottenTomatoesScore from './RottenTomatoesScore';
import MetaScore from './MetaScore';
import ImdbScore from './ImdbScore';
import DmdbScore from './DmdbScore';

export default (props) => {
  const { Metascore, tomatoMeter, tomatoUserMeter, imdbRating, tomatoImage } = props
  if (isNaN(Metascore) && isNaN(tomatoMeter) && isNaN(tomatoUserMeter) && isNaN(imdbRating)){
    return <h4 className="plot-text">Sorry, there are no ratings available at this time.</h4>
  }
  return (
    <div className="dmdb-ratings">
      <DmdbScore score={{Metascore, tomatoMeter, tomatoUserMeter, imdbRating}}/>
      <MetaScore score={Metascore}/>
      <RottenTomatoesScore
        image={tomatoImage}
        score={tomatoMeter}
        type="critics"/>
      <RottenTomatoesScore
        score={tomatoUserMeter}
        type="users"/>
      <ImdbScore score={imdbRating}/>
    </div>
  )
}
