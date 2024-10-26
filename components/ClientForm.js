import React, { useState } from 'react';
import { VStack, Input, Select, Button } from '@chakra-ui/react';

const ClientForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <Input
          name="firstName"
          placeholder="Vorname"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <Input
          name="lastName"
          placeholder="Nachname"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="E-Mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          name="phone"
          type="tel"
          placeholder="Telefon"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Select
          name="gender"
          placeholder="Geschlecht"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="male">Männlich</option>
          <option value="female">Weiblich</option>
          <option value="other">Divers</option>
        </Select>
        <Button type="submit" colorScheme="teal">Absenden</Button>
      </VStack>
    </form>
  );
};

export default ClientForm;