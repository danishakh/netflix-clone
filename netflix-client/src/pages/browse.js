import React from "react";
import { useContent } from '../hooks';

export default function Browse() {
	// need the series and movies
	const { series } = useContent('series')
	const { movies } = useContent('films')
	// console.log('series', series)
	// console.log('movies', movies);

	// we need slides

	// pass it to the browse container
	return <p>Browse Page!</p>;
}
