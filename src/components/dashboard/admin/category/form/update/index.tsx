import React, { useState, ChangeEvent } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { SBox, Image, SButton, SPreview } from '../styled';
import { useAppSelector } from '../../../../../../hooks';
import { FormCategoryUpdateProps } from './types';

const FormCategoryUpdate: React.FC<FormCategoryUpdateProps> = ({ submit, data }) => {
  const [preview, setPreview] = useState(data?.picture);
  const [form, setForm] = useState({ ...data });
  const loading: boolean = useAppSelector((state) => state.category.loading)

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
    const image = event.target.files && event.target.files[0];
    setPreview(Array(image));
  };

  const handleError = () => form?.name && form?.description && preview?.length;

  return (
    <SBox>
      <form noValidate autoComplete="off">
        {preview?.length ? (
          <Grid container direction="row">
            <SPreview>
              {preview?.length === 1 ? (
                <Image src={URL.createObjectURL(preview[0])} />
              ) : (
                <Image src={preview || data.picture} />
              )}

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
              name="image"
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
          value={form?.name}
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
          value={form?.description}
          onChange={handleChange}
          disabled={loading}
        />

        <SButton
          fullWidth
          type="submit"
          disabled={!handleError()}
          onClick={submitForm}
        >
          Atualizar
        </SButton>
      </form>
    </SBox>
  );
};

export default FormCategoryUpdate;