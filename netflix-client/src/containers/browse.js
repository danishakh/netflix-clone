import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Header, Loading } from '../components';
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    
    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        console.log('profile', profile)
        console.log('loading', loading)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [profile.displayName])

    return profile.displayName ? (
        <>
            {/* kick off the loading spinner */}
            { loading ? <Loading src={user.photoURL} /> 
                    : (<Loading.ReleaseBody />)
            }
            {/* once loading is complete... */}
            <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                        <Header.TextLink>Series</Header.TextLink>
                        <Header.TextLink>Movies</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink onClick={() => firebase.auth.signOut()}>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink>Sign Out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.
                        Arthur wears two masks -- the one he paints for his day job as a clown, and the
                        guise he projects in a futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play Now</Header.PlayButton>
                </Header.Feature>
            </Header>
        </>
    ) : <SelectProfileContainer user={user} setProfile={setProfile} />
}