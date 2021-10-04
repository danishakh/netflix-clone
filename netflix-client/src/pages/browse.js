import React from "react";
import { useContent } from '../hooks';
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
	// need the series and movies
	const { series } = useContent('series')
	const { films } = useContent('films')
	// console.log('series', series)
	// console.log('movies', films);

	// we need slides
	const slides = selectionFilter({ series, films});
	console.log(slides);

	// pass it to the browse container
	return <p>Browse Page!</p>;
}
