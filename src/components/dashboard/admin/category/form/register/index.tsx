import React, { useState, ChangeEvent } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { SBox, Image, SButton, SPreview } from '../styled';
import { useAppSelector } from '../../../../../../hooks';
import { FormCategoryRegisterProps } from './types';

const FormCategoryRegister: React.FC<FormCategoryRegisterProps> = ({ submit }) => {
  const [preview, setPreview] = useState<File[]>([]);
  const [form, setForm] = useState<Record<string, string | boolean>>({});
  const loading = useAppSelector((state) => state.category.loading)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const submitForm = () => {
    const formData = new FormData();
    formData.append('files', preview[0]);

    const newForm: any = {
      name: form.name,
      description: form.description,
    };

    Object.keys(newForm).map((k) => formData.append(k, newForm[k]));
    submit(formData);
  };

  const removeImage = () => setPreview([]);

  const previewImg = (event: ChangeEvent<HTMLInputElement>) => {
    const picture = event.target.files && event.target.files[0];
    setPreview([picture]);
  };

 const handleError = () => form.name && form.description && preview?.length;

  return (
    <SBox>
     <form noValidate autoComplete="off">
        {preview.length ? (
          <Grid container direction="row">
            <SPreview>
              <Image src={URL.createObjectURL(preview[0])} />
              <Button onClick={removeImage} component="label">
                Remover
              </Button>
            </SPreview>
          </Grid>
        ) : (
          ''
        )}

        <Grid container direction="column">
          <Button
            variant="contained"
            color="primary"
            size="small"
            component="label"
          >
            Upload Foto
            <input
              accept="image/*"
              type="file"
              name="picture"
              hidden
              onChange={previewImg}
              disabled={loading}
            />
          </Button>
        </Grid>

        <TextField
          autoFocus
          fullWidth
          size="small"
          margin="normal"
          id="standard-error-helper-text"
          label="Nome"
          name="name"
          value={form.name || ''}
          onChange={handleChange}
          disabled={loading}
        />

        <TextField
          fullWidth
          size="small"
          margin="normal"
          id="standard-error-helper-text"
          label="Descrição"
          name="description"
          multiline
          rows={2}
          maxRows={4}
          value={form.description || ''}
          onChange={handleChange}
          disabled={loading}
        />

        <SButton
          fullWidth
          type="submit"
          disabled={!handleError()}
          onClick={submitForm}
        >
          Cadastrar
        </SButton>
      </form>
    </SBox>
  );
};

export default FormCategoryRegister;