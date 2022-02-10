import React from "react";
import {Formik, Form, Field } from 'formik';
import * as API from './../../../api';
import { useParams } from 'react-router-dom';
import style from './EditHeroPowerForm.module.scss';

function EditHeroPowerForm() {
    const params = useParams();
    const shId = params.id;

    const initialValues = {
        superpower: '',
    };

    const submitHandler = (values, formikBag) => {
        API.updateSuperheroPowers(shId, values)
        .then((result) => { console.log(result)})
        .catch((e) => {console.log(e)});

        formikBag.resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={submitHandler}>
            {formikProps => {
                return(
                    <Form className={style.formStyle}>
                        <div className={style.formItem}>
                            <label>
                                <span>Superpower: </span>
                                <Field name="superpower" type="text" className={style.fieldStyle}/>
                            </label>
                        </div>
                        <div className={style.formItem}>
                            <button type="submit" className={style.btnStyle}>Add Superpower</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    );

}

export default EditHeroPowerForm;
