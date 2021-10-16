import React from 'react'
import { render } from '@testing-library/react';
import { Feature } from '../../components'
import { Item } from '../../components/jumbotron/styles/jumbotron';

describe('<Feature />', () => {
    it('renders the <Feature /> with populated data', () => {
        const { container, getByText } = render(
            <Feature>
                <Feature.Title>Unlimited movies, TV programs and more!</Feature.Title>
                <Feature.SubTitle>Watch anywhere. Cancel at any time!</Feature.SubTitle>
            </Feature>
        );

        expect(getByText('Unlimited movies, TV programs and more!')).toBeTruthy();
        expect(getByText('Watch anywhere. Cancel at any time!')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the <Feature /> with just a title', () => {
        const { container, getByText, queryByText } = render(
            <Feature>
                <Feature.Title>Unlimited movies, TV programs and more!</Feature.Title>
            </Feature>
        );

        expect(getByText('Unlimited movies, TV programs and more!')).toBeTruthy();
        expect(queryByText('Watch anywhere. Cancel at any time!')).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the <Feature /> with just a subtitle', () => {
        const { container, getByText, queryByText } = render(
            <Feature>
                <Feature.SubTitle>Watch anywhere. Cancel at any time!</Feature.SubTitle>
            </Feature>
        );

        expect(queryByText('Unlimited movies, TV programs and more!')).toBeFalsy();
        expect(getByText('Watch anywhere. Cancel at any time!')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});
