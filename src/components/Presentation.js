import React from 'react'
import Feature2 from './Feature2'
import SocialNetworks from './SocialNetworks';
import ButtonMore from './ButtonMore';
import showdown from 'showdown'

const converter = new showdown.Converter()

const Presentation = ({
    drName,
    description,
    networks,
    profilePicture
}) => {
    return (
        <>
            {/* displayed in desk */}
            <section
                id="about"
                className="container-fluid m-0 px-0 py-5 d-flex flex-column">
                <div className="container d-flex flex-column align-items-center">
                    <div className="d-flex justify-content-center font-weight-bold px-3 px-md-0">
                        <Feature2 title="Nosotros" />
                    </div>
                </div>
                <video 
                    controls={true}
                    className="m-auto" 
                    src="/img/video.mp4" />
            </section>
        </>
    )
}

Presentation.defaultProps = {
    drName: "Nosotros",
    networks: [{
        image: "/img/wathsapp.svg",
        name: "wathsapp",
        alt: "wathsapp web",
        url: "/"
    },{
        image: "/img/instagram.svg",
        name: "instagram",
        alt: "instagram",
        url: "/"
    },{
        image: "/img/youtube.svg",
        name: "youtube",
        alt: "youtube web",
        url: "/"
    },{
        image: "/img/facebook.svg",
        name: "facebook",
        alt: "facebook web",
        url: "/"
    }],
    profilePicture: {
        image: "/img/carolina.png",
        alt: "perfil de carolina"
    }
}

export default Presentation;