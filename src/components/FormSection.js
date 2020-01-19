import React from 'react';
import { Formik, Field, Form } from 'formik';
import Feature2 from './Feature2';
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

const levels = [{
    value: "garden",
    label: "Jardín infantil y preescolar"
}, {
    value: "primary",
    label: "Primaria"
}, {
    value: "secondary",
    label: "Secundaría"
}, {
    value: "media",
    label: "Media y Bachillerato"
}];


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
                    <div
                        style={{zIndex: "100"}} 
                        className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                        {/* IMAGE */}
                        <div className="h-100 mt-3 mt-md-0 mr-md-5 pr-md-5 mb-5 mb-md-0">
                            <img 
                                src="/img/prof-formulario.png"
                                alt="fddfdf"
                                className="img-fluid" />
                        </div>
                        {/* FORM */}
                        <div>
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
                                    handleChange,
                                    handleBlur,
                                    setFieldValue, 
                                    setFieldTouched,
                                    isValid
                                }) => (
                                    <div
                                        style={{backgroundColor: "#047487", borderRadius: "50px"}} 
                                        className="container-form">
                                        <Form className="form-hubspot px-3 py-3">
                                            <img
                                                width="80"
                                                className="d-block img-fluid mx-auto mb-3"
                                                src="/img/logo.svg" 
                                                alt="placeholder image" 
                                                />
                                            <div className="text-white">
                                                <div className="font-weight-bold text-center mb-3">Matriculas 2020</div>
                                                <p 
                                                    className="text-center px-md-3">
                                                    <small>
                                                        Nos estaremos comunicando en el menor tiempo posible con el fin de explicarle el proceso de matrícula del Colegio Jose Eustacio Rivera
                                                    </small>
                                                </p>
                                            </div>
                                            
                                            {/* NAME FIELD */}
                                            <div className="form-group">
                                                <label> 
                                                    Nombres y apellido.
                                                </label>
                                                <Field
                                                    className="form-control"
                                                    name="name"
                                                    placeholder="Ingrese su nombre y apellidos completos."
                                                />
                                                {errors.name && touched.name && (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.name}
                                                    </div>
                                                )}
                                            </div>
                                            {/* EMAIL FIELD */}
                                            <div className="form-group mt-4">
                                                <label> 
                                                    Correo electrónico.
                                                </label>
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
                                                <label> 
                                                    Teléfono.
                                                </label>
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
                                            {/* LEVEL FIELD */}
                                            <div className="form-group mt-3">
                                                <label> 
                                                    Nivel educativo.
                                                </label>
                                                <select
                                                    className="form-control"
                                                    name="procedure"
                                                    value={values.procedure}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    style={{ display: 'block' }}
                                                    >
                                                    <option
                                                        disabled={true} 
                                                        value="" 
                                                        label="Nivel educativo." />
                                                    {
                                                        levels.map((proc, index) => (
                                                            <option 
                                                                key={`proc${index}`}
                                                                value={proc.value} 
                                                                label={proc.label} />
                                                        ))
                                                    }
                                                </select>
                                                {errors.procedure && touched.procedure && (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.procedure}
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
                                                className="btn btn-sm btn__custom position-relative text-capitalize px-4 d-flex mx-auto">
                                                Enviar
                                            </button>
                                        </Form>
                                    </div>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

FormSection.defaultProps = {
    title: "INSCRIPCIONES ABIERTAS"
}
export default FormSection;