import React from 'react'

export default function UserValidation(user) {
    let errors = {};
    const {name,email,password} = user;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$')


    if (!name.trim()) errors.name="name is required";
    else if (name.trim().length <4) errors.name="name must be 3 at least";

    if (!email.trim()) errors.email="email is required";
    else if (!validEmail.test(email)) errors.email="email not valid";

    if (!password.trim()) errors.password="password is required";
    else if (!validPassword.test(password)) errors.password="password must contain letters and numbers at least 6";

    return errors;
}
