import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from '../hooks';
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
	// need the series and movies
	const { series } = useContent('series')
	const { films } = useContent('films')
	// console.log('series', series)
	// console.log('movies', films);

	// we need our netflix style slides
	const slides = selectionFilter({ series, films});
	// console.log(slides);

	// pass it to the browse container
	return <BrowseContainer slides={slides} />;
}
