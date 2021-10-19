import React from 'react'
import { formatDate } from '../helper';


const NewsItemTime = ({ datePublished }) => {
    return (
        <small>{formatDate(datePublished)}</small>
    )
};

export default NewsItemTime;
