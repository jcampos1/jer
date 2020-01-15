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
                id="profile"
                style={{backgroundColor: "#f4f5fa"}} 
                className="container-fluid m-0 px-0 py-5">
                <div className="container">
                    <img 
                        style={{width: "200px"}}
                        className="img-fluid d-block d-md-none mx-auto"
                        src={profilePicture.image} 
                        alt={profilePicture.alt} />
                    <div className="d-flex justify-content-center font-weight-bold px-3 px-md-0">
                        <Feature2 title={drName} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="w-50 text-justify text-muted px-3 px-md-0 d-none d-md-block">
                            <div
                                dangerouslySetInnerHTML={{ __html: converter.makeHtml(description) }} />
                            <SocialNetworks networks={networks} />
                            <div className="mt-3">
                                <ButtonMore to="/profile" />
                            </div>
                        </div>
                        <div className="w-100 text-justify text-muted px-3 px-md-0 d-block d-md-none">
                            <div
                                dangerouslySetInnerHTML={{ __html: converter.makeHtml(description) }} />
                            <SocialNetworks networks={networks} />
                            <div className="d-flex justify-content-center mt-3">
                                <ButtonMore to="/profile" />
                            </div>
                        </div>
                        <div className="d-none d-md-block">
                            <img 
                                style={{width: "250px"}}
                                className="img-fluid ml-auto"
                                src={profilePicture.image} 
                                alt={profilePicture.alt} />
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

Presentation.defaultProps = {
    drName: "Dra CAROLINA CARVAJAL",
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