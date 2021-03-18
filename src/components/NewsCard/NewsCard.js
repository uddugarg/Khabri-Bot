import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React, { createRef, useEffect, useState } from 'react'
import './NewsCard.css';
import classNames from 'classnames';

function NewsCard({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticles }) {

    const [element, setElement] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

    useEffect(() => {
        setElement((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, [])

    useEffect(() => {
        if (i === activeArticles && element[activeArticles]) {
            scrollToRef(element[activeArticles]);
        }
    }, [i, activeArticles, element])

    return (
        <Card ref={element[i]} className={'card', activeArticles === i ? 'activeCard' : 'card'}>
            <CardActionArea href={url} target='_blank'>
                <CardMedia className='card__media' image={urlToImage || 'https://content.getkhabri.com/2020/6/images/1-1591638001725.jpg'} />
                <div className='card__source'>
                    <Typography variant='body2' color='textSecondary' component='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant='body2' color='textSecondary' component='h2'>{source.name}</Typography>
                </div>
                <Typography className='card__title' gutterBottom variant='h5'>{title}</Typography>
                <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className='card__actions'>
                <Button size='small' color='primary'>Learn More</Button>
                <Typography variant='h5' color='textSecondary'>{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard
