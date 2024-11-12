// src/components/JoinForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #d4c1a7;
    color: #ffffff;
    height: 100vh;
    font-family: 'Andale Mono', monospace;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: #6f6b58;
    padding: 2rem;
    border-radius: 8px;
    width: 300px;
    color: #ffffff;
`;

const Input = styled.input`
    padding: 0.75rem;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    font-family: 'Andale Mono', monospace;
`;

const SubmitButton = styled.button`
    background-color: #ffffff;
    color: #6f6b58;
    border: none;
    padding: 0.75rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 8px;
    font-family: 'Andale Mono', monospace;
    font-weight: bold;
`;

const JoinForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store data in localStorage or send to backend API
        console.log('Form Submitted:', formData);
        localStorage.setItem('waitlistData', JSON.stringify(formData));
        alert('Thank you for joining the waitlist!');
    };

    return (
        <FormContainer>
            <h2>Join the Waitlist</h2>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
        </FormContainer>
    );
};

export default JoinForm;
