import React from "react";
import {Formik, Form, Field} from 'formik';
import * as API from '../../api';
import style from './NewHeroForm.module.scss';

function NewHeroForm(props){
    
    const initialValues = {
        nickname: '',
        real_name: '',
        origin_description: '',
        //superpowers: '',
        catch_phrase: '',
        file: null,
    };

    const submitHandler = (values, formikBag) => {
        console.log(values);
        const formData = new FormData();
        formData.append('add_image', values.file);
        API.createSuperhero(values)
        .then((result) => {
            console.log(result.data.data);
            API.updateSuperheroImage(result.data.data.id, formData).then((result) => { console.log(result)}).catch((e) => {console.log(e)});
        })
        .catch((error)=> {console.log(error)});
        formikBag.resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={submitHandler}>
            {formikProps => {
                return(
                    <Form className={style.formStyle}>
                        <h1>Superhero Creation Form</h1>
                        <div className={style.formItem}>
                            <label>
                                <span>Nickname:</span>
                                <Field name="nickname" className={style.fieldStyle}/>
                            </label>
                        </div>
                        <div className={style.formItem}>
                            <label>
                                <span>Real name:</span>
                                <Field name="real_name" className={style.fieldStyle}/>
                            </label>
                        </div>
                        <div className={style.formItem}>
                            <label>
                                <span>Description:</span>
                                <Field name="origin_description" className={style.fieldStyle}/>
                            </label>
                        </div>

                        {/* <label>
                            <span>Superpowers:</span>
                            <Field name="superpowers"/>
                        </label> */}
                        <div className={style.formItem}>
                            <label>
                                <span>Catch phrase:</span>
                                <Field name="catch_phrase" className={style.fieldStyle}/>
                            </label>
                        </div>
                        <div className={style.formItem}>
                            <label>
                                <span>Image:</span>
                                <input id="file" name="file" type="file" onChange={(event) => {formikProps.setFieldValue("file", event.currentTarget.files[0]);
                                }} className={style.fieldStyle}/>
                            </label>
                        </div>
                        <div className={style.formItem}>
                            <button type="submit" className={style.btnStyle}>Add Hero</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    );

};


export default NewHeroForm;