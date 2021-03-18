import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import './NewsCards.css';

const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

function NewsCards({ articles, activeArticles }) {

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className='container' container alignItems="stretch" spacing={1}>
          {infoCards.map((infoCard) => (
            <Grid className='cards__gridHome' item xs={12} sm={6} md={3} ld={3} >
              <div className='cards__info' style={{ backgroundColor: infoCard.color}}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    )
  }

  return (
    <div>
      <Grow in>
        <Grid className='container' container alignItems="stretch" spacing={1}>
          {articles.map((article, i) => (
            <Grid className='cards' key={i} item xs={12} sm={6} md={3} ld={3} style={{ display: 'flex' }}>
              <NewsCard article={article} i={i} activeArticles={activeArticles} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </div>
  );
}

export default NewsCards;
