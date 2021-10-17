import React from 'react';
import { render } from '@testing-library/react'
import { Profiles } from '../../components';

describe('<Profiles />', () => {
    it('renders the <Profiles /> with populated data', () => {
        const { container, getByTestId, getByText } = render(
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.Item onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL})}>
                        <Profiles.Picture src='/images/karl.png' data-testid='profile-picture'/>
                        <Profiles.Name>John Cena</Profiles.Name>
                    </Profiles.Item>
                </Profiles.List>
            </Profiles>
        );
        
        expect(getByText("Who's watching?"));
        expect(getByTestId('profile-picture')).toBeTruthy();
        expect(getByText('John Cena')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the <Profiles /> with populated data but misc profile image', () => {
        const { container, getByText, getByTestId } = render(
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.Item onClick={() => {}}>
                        <Profiles.Picture data-testid='profile-picture-misc'/>
                        <Profiles.Name>John Cena</Profiles.Name>
                    </Profiles.Item>
                </Profiles.List>
            </Profiles>
        );
        
        expect(getByText("Who's watching?"));
        expect(getByTestId('profile-picture-misc')).toBeTruthy();
        expect(getByText('John Cena')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();

    })
})
