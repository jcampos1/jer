import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";

const schema = Yup.object().shape({
    name: Yup
        .string()
        .required("Este campo es requerido."),
    email: Yup
        .string()
        .email("Este campo debe ser un email.")
        .required("Este campo es requerido."),
    phone: Yup
        .string()
        .min(6, "Este campo es inválido")
        .required("Este campo es requerido.")
  });

const FormSection = ({
    title
}) => {
    const handleSubmit = data => {
        console.log('data :', data);
    }

    return (
        <>
            {/* Displayed in desk */}
            <section
                id="form" 
                className="container-fluid m-0 px-0 py-5 position-relative">
                <div
                    className="container position-relative">
                    <div
                        style={{zIndex: "100"}} 
                        className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                        {/* FORM */}
                        <div className="form-content">
                            <Formik
                                initialValues={{
                                    name: "",
                                    terms: false,
                                    email: "",
                                    phone: ""
                                }}
                                validationSchema={schema}
                                onSubmit={() => null}>
                                {({ 
                                    values,
                                    errors, 
                                    touched,
                                    isValid
                                }) => (
                                    
                                    <Form className="form-hubspot px-3 py-5">
                                        <h4 className="font-weight-bold text-white text-center mb-3">{title}</h4>
                                        <div style={{
                                            height: "5px",
                                            width: "50px"
                                        }} 
                                        className="d-flex bg-white rounded-pill mx-auto mb-3 mb-md-5" />
                                        {/* NAME FIELD */}
                                        <div className="form-group">
                                            <div className="d-flex align-items-center mb-3">
                                                <img 
                                                    src="/img/user.svg" 
                                                    alt="name user"
                                                    className="mr-2" />
                                                <label className="mb-0"> 
                                                    Nombre.
                                                </label>
                                            </div>
                                            <Field
                                                className="form-control"
                                                name="name"
                                                placeholder="Ingrese su nombre completo."
                                            />
                                            {errors.name && touched.name && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>
                                        {/* EMAIL FIELD */}
                                        <div className="form-group mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <img 
                                                    src="/img/email.svg" 
                                                    alt="email"
                                                    className="mr-2" />
                                                <label className="mb-0"> 
                                                Correo electrónico.
                                                </label>
                                            </div>
                                            <Field
                                                className="form-control"
                                                name="email"
                                                placeholder="Ingrese su correo electrónico."
                                            />
                                            {errors.email && touched.email && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                        {/* PHONE FIELD */}
                                        <div className="form-group mt-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <img 
                                                    src="/img/phone.svg" 
                                                    alt="phone"
                                                    className="mr-2" />
                                                <label className="mb-0"> 
                                                    Teléfono.
                                                </label>
                                            </div>
                                            <Field
                                                className="form-control"
                                                name="phone"
                                                placeholder="Ingrese su número de contacto."
                                            />
                                            {errors.phone && touched.phone && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.phone}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group mt-4">
                                            <div className="form-check">
                                                <Field
                                                    name="terms"
                                                    render={({ field, form }) => {
                                                    return (
                                                        <div className="d-flex align-items-center">
                                                            <input 
                                                                className="form-check-input mt-0" 
                                                                type="checkbox" 
                                                                id="autoSizingCheck2"
                                                                checked={field.value}
                                                                {...field} />
                                                            <small 
                                                                style={{opacity: ".9"}}
                                                                className="form-check-label" 
                                                                for="autoSizingCheck2">
                                                                He leído y acepto la política de privacidad de tratamiento de datos.
                                                            </small>
                                                        </div>
                                                    );
                                                }}/>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => handleSubmit(values)} 
                                            disabled={!isValid || !values.terms}
                                            style={{top: "5px"}}
                                            type="button" 
                                            className="btn btn-sm btn-fill-2 py-2 mt-3 mt-md-5 rounded-pill position-relative text-capitalize px-5 d-flex mx-auto">
                                            Contactar
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FormSection;