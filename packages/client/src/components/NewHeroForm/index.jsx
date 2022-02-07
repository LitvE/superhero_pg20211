import React from "react";
import {Formik, Form, Field} from 'formik';
import * as API from '../../api';

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
            API.updateSuperhero(result.data.data.id, formData).then((result) => { console.log(result)}).catch((e) => {console.log(e)});
        })
        .catch((error)=> {console.log(error)});
        formikBag.resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={submitHandler}>
            {formikProps => {
                return(
                    <Form>
                        <label>
                        Nickname:
                            <Field name="nickname"/>
                        </label>
                        <label>
                            Real name:
                            <Field name="real_name"/>
                        </label>
                        <label>
                            Description:
                            <Field name="origin_description"/>
                        </label>
                        {/* <label>
                            Superpowers:
                            <Field name="superpowers"/>
                        </label> */}
                        <label>
                            Catch phrase:
                            <Field name="catch_phrase"/>
                        </label>
                        <label>
                            Image:
                            <input id="file" name="file" type="file" onChange={(event) => {formikProps.setFieldValue("file", event.currentTarget.files[0]);
                            }}/>
                        </label>
                        <button type="submit">Add Hero</button>
                    </Form>
                )
            }}
        </Formik>
    );

};


export default NewHeroForm;