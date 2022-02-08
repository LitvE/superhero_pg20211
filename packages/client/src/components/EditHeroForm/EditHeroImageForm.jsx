import React from "react";
import {Formik, Form } from 'formik';
import * as API from '../../api';
import { useParams } from 'react-router-dom';
import style from './EditHeroImageForm.module.scss';

function EditHeroImageForm() {
    const params = useParams();
    const shId = params.id;

    const initialValues = {
        file: null,
    };

    const submitHandler = (values, formikBag) => {
        const formData = new FormData();
        formData.append('add_image', values.file);
        API.updateSuperheroImage(shId, formData)
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
                                <span>Image: </span>
                                <input id="file" name="file" type="file" onChange={(event) => {formikProps.setFieldValue("file", event.currentTarget.files[0]);
                                }} className={style.fieldStyle}/>
                            </label>
                        </div>
                        <div className={style.formItem}>
                            <button type="submit" className={style.btnStyle}>Add Image</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    );

}

export default EditHeroImageForm;
