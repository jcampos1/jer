import React from 'react';
import Feature2 from './Feature2';

const Contacts = ({
    title,
    contacts
}) => {
    const phonesCount = contacts.phones.length;
    console.log('contacts :', contacts);
    return (
        <>
            {/* Displayed in desk */}
            <section
                id="contacts" 
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
                                    src="/img/placholder-image2.png" 
                                    alt="alt pac"
                                    className="img-fluid mr-3" />
                                <small>{contacts.address}</small> 
                            </div>
                            <div className="d-flex mb-3">
                                <img 
                                    src="/img/placholder-image2.png" 
                                    alt="alt pac"
                                    className="img-fluid mr-3" />
                                {
                                    contacts.phones.map((item, index) => (
                                        <small
                                            className="d-inline-block" 
                                            key={`phone${index}`}>{item.phone}
                                            {(index+1) < phonesCount ? " / " : ""}
                                        </small>
                                    ))
                                }
                            </div>
                            <div className="d-flex mb-4">
                                <img 
                                    src="/img/placholder-image2.png" 
                                    alt="alt pac"
                                    className="img-fluid mr-3" />
                                <small>{contacts.email}</small> 
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