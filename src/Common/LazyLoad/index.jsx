import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function LazyLoad({ src, alt, style, className, effect }) {
    return <LazyLoadImage src={src} alt={alt} style={style} className={className} effect={effect} />
}
