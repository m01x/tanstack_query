import { Button, Image, Input, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useProductMutation } from "..";

interface FormInputs {

    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;

}

export const NewProduct = () => {

  const productMutation = useProductMutation();

  const [tempImage, setTempImage] = useState("");

  // 1)
  const { control, handleSubmit, watch } = useForm<FormInputs>({
    defaultValues: {
      title:"teclado",
      price:15000,
      description: "lorem50",
      category:"men's clothing",
      image:"https://cdnx.jumpseller.com/easytech-store/image/24090183/017004-1.jpg"
    }
  });

  const newImage = watch('image'); //Con esto, hacemos un re-render de este controller o input, solo de image.
//Asique lo usaremos en un efecto..

  useEffect(() => {
    setTempImage(newImage);
  
  }, [newImage])
  

  //2) Asi lo hacen los de FormData...
  const onSubmit:SubmitHandler<FormInputs> = (data) => {
    
    productMutation.mutate(data); //esto ya realiza el posteo de la data

  }
  

  return (
    <div className="w-full flex-col">
      <h1 className="text-2xl font-bold">Nuevo producto</h1>

      <form className="w-full" onSubmit={ handleSubmit( onSubmit )}>

        <div className="flex justify-around items-center">
          
          <div className="flex-col w-[500px]">
            {/* 3) agregar controlador */}
            <Controller
              control={ control }
              name="title"
              rules={{ required: true }}
              render={ ({field}) => (
              <Input value={ field.value } onChange={ field.onChange } className="mt-2" type="text" label="Titulo del producto" />
              )}
            />

            <Controller
              control={ control }
              name="price"
              rules={{ required: true }}
              render={ ({field}) => (
              <Input
                value={field.value?.toString()}
                onChange={e => field.onChange(Number(e.target.value))}
                className="mt-2"
                type="number"
                label="Precio del producto"
              />
              )}
            />

            <Controller
              control={ control }
              name="image"
              rules={{ required: true }}
              render={ ({field}) => (
              <Input value={ field.value } onChange={ field.onChange } className="mt-2" type="url" label="Url del producto" />
              )}
            />

            <Controller
              control={ control }
              name="description"
              rules={{ required: true }}
              render={ ({field}) => (
              <Textarea value={ field.value } onChange={ field.onChange } className="mt-2" label="Descripcion del producto" />
              )}
            />

            <Controller
              control={ control }
              name="category"
              rules={{ required: true }}
              render={ ({field}) => (
                <select value={ field.value } onChange={ field.onChange } className="rounded-md p-3 mt-2 bg-gray-800 w-full">
                  <option value="men's clothing">Men's clothing</option>
                  <option value="women's clothing">Women's clothing</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="electronics">Electronics</option>
                </select>
              )}
            />


            
           

            <br />
            <Button 
              type="submit" 
              className="mt-2" 
              color="primary"
              isDisabled={ productMutation.isPending }
            >
              { productMutation.isPending ? 'Cargando...':'Crear producto'}
            </Button>
          </div>

          <div className="bg-white rounded-2xl p-10 flex items-center" style={{
            width: '500px',
            height: '600px',
          }}>

            <Image
              src={tempImage}
            />
          </div>
          
        </div>


      </form>

    </div>
  )
}