import { useState } from "react";
import { Header } from "../components/Header"
import { api } from "../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";


export function Home (){
    const token = localStorage.getItem('accessToken');
    const {register, handleSubmit, reset, formState: { errors }} = useForm();
    const notify = () => toast.success("Produto Cadastrado com Sucesso");

    async function productPost(data) {

        try {
          const content = {
            title: data.title,
            img_url: data.img_url,
            short_description: data.short_description,
            long_description: "string",
            original_price: parseFloat(data.original_price),
            current_price: parseFloat(data.current_price),
            prize_draw_date: data.prize_draw_date,
            amount_available: 0,
            is_active: true, 
            is_running_out: true, 
          }
          const response = await api.post('/products', content,{
            headers: {
              'Content-Type': 'application/json',
            },
          });
          
          reset();
          notify()
        } catch (error) {
          console.error('Erro ao enviar Produto:', error)
        
          
        }
      }

    return(
        <>
        <ToastContainer />
            <Header/>
            <div className="form_container">
            <h2>Cadastro de Produtos</h2>
                <form className="form_content" onSubmit={handleSubmit(productPost)}>
                    <label>Titulo do Produto</label>
                    <input type="text" placeholder="Titulo do Produto"
                     {...register("title")} />
                    <label>Descrição</label>
                    <textarea type="text" placeholder="Descrição do Produto"
                     {...register("short_description")} />
                    <label>Produto Destaque?</label>
                    <input type="number" placeholder="Digite 1 pra sim ou 0 pra não"
                    {...register("original_price")} />
                    <label>Preço</label>
                    <input type="number" placeholder="Preço do Produto Ex: 29.95" 
                    {...register("current_price")} />
                    <label>Data e Hora do Sroteio</label>
                    <input type="text" placeholder=" Ex: 2023-10-25T19:30:00.931Z " 
                    {...register("prize_draw_date")} />
                    <label>Url Imagem </label>
                    <input type="text" placeholder="Link da Imagem Ex:https://s3.incrivelsorteios.com/redimensiona?key=600x600/20231013_6529584f4b2c3.jpeg "
                    {...register("img_url")}/>
                    <button type="submit" >Cadastrar Produto</button>
                </form>
            </div>
        </>
    )
}