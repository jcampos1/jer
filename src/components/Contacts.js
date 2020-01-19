import React from 'react';
import Feature2 from './Feature2';

const data = {
    address: {
        icon: "/img/placholder-image2.png",
        alt: "kdlfldf",
        text: "Dirección: La Calera a 9km de la calle 175 con la Cra 7a"
    }, 
    phones: {
        icon: "/img/placholder-image2.png",
        alt: "kdlfldf",
        text: "8742201/ 317 3 72 40 33 / 311 2 51 17 40"
    }, 
    email: {
        icon: "/img/placholder-image2.png",
        alt: "kdlfldf",
        text: "info@colegiojer.com"
    }
};


const Contacts = ({
    title
}) => {
    const handleSubmit = data => {
        console.log('data :', data);
    }
    return (
        <>
            {/* Displayed in desk */}
            <section
                // style={{
                //     backgroundImage: "url(/img/bg-form.png)",
                //     backgroundRepeat: "none",
                // }}
                id="form" 
                className="container-fluid m-0 px-0 py-5 position-relative">
                <div
                    className="container position-relative">
                    <div className="d-flex justify-content-center font-weight-bold">
                        <Feature2 title={title} />
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <h3 className="mb-4">
                                Ponte en contacto con nosotros
                            </h3>
                            <div className="d-flex mb-3">
                                <img 
                                    src={data.address.icon} 
                                    alt={data.address.alt}
                                    className="img-fluid mr-3" />
                                <small>{data.address.text}</small> 
                            </div>
                            <div className="d-flex mb-3">
                                <img 
                                    src={data.phones.icon} 
                                    alt={data.phones.alt}
                                    className="img-fluid mr-3" />
                                <small>{data.phones.text}</small> 
                            </div>
                            <div className="d-flex mb-4">
                                <img 
                                    src={data.email.icon} 
                                    alt={data.email.alt}
                                    className="img-fluid mr-3" />
                                <small>{data.email.text}</small> 
                            </div>
                            <img 
                                src="/img/waze.png" 
                                alt="waze" 
                                width="100" />
                        </div>
                        <div className="col-md-7">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

Contacts.defaultProps = {
    title: "CONTACTO"
}

export default Contacts;