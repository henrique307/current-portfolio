import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import "./action.css";

export function CallToAction() {
  const [form, setForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState<boolean | undefined>(undefined);

  async function toggle() {
    setForm(!form);
  }

  interface MessageInterface {
    nome: string;
    email: string;
    mensagem: string;
  }

  const zodSchema = z.object({
    nome: z.string().min(1, { message: "Este campo é obrigatório" }),
    email: z
      .string()
      .min(1, { message: "Este campo é obrigatório" })
      .email({ message: "Email inválido" }),
    mensagem: z
      .string()
      .min(1, { message: "Por favor escreva uma mensagem" })
      .max(1500, { message: "Mucho testo 👀" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<MessageInterface>({
    resolver: zodResolver(zodSchema),
    mode: "onBlur",
  });

  async function sendMessage(data: MessageInterface) {
    return await fetch("https://api-sheets.onrender.com/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, telefone: "21 98888-8888" }),
    })
      .then((res) => {
        if (!res.ok) {
          return false;
        }
        return true;
      })
      .catch((e) => {
        return false;
      });
  }

  async function onSubmit(data: MessageInterface) {
    const response = await sendMessage(data);

    console.log(response)

    setErrorMessage(response);
  }

  return (
    <section
      className="hero min-h-[60svh] bg-gradient-to-t from-slate-950 to-accent"
      id="action"
    >
      <div className="hero-overlay"></div>
      {form ? (
        <div className="hero">
          <div className="hero-content pt-10 flex-col">
            {errorMessage === undefined ? "" :
            !errorMessage ? (
              <div className="bg-error max-w-2xl text-center text-red-900  rounded-md  px-6 py-3">
                <h1 className="text-3xl text-red-900 px-6 py-3 bold">
                  Houve um erro enviando sua mensagem
                </h1>
                <p className="text-xl">
                  Por favor tente novamente ou entre em contato comigo pelas
                  minhas rede sociais no fundo da página!
                </p>
              </div>
            ) : (
              <div className="max-w-2xl bg-success text-center text-green-900 rounded-md  px-6 py-3">
                <h1 className="text-3xl bold">Mensagem enviada com sucesso!</h1>
                <p className="text-xl text-center">Obrigado pelo contato!</p>
              </div>
            )}
            <div className="card bg-base-200 p-5 pt-0 shrink-0 w-full max-w-sm shadow-2xl">
              <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span
                      className={`label-text ${errors.nome && "text-error"}`}
                    >
                      {errors.nome ? errors.nome?.message : "Seu nome"}
                    </span>
                  </label>
                  <input
                    {...register("nome")}
                    type="text"
                    placeholder="nome"
                    className="input input-bordered rounded-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span
                      className={`label-text ${errors.email && "text-error"}`}
                    >
                      {errors.email ? errors.email?.message : "Seu Email"}
                    </span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="email"
                    className="input input-bordered rounded-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span
                      className={`label-text ${
                        errors.mensagem && "text-error"
                      }`}
                    >
                      {errors.mensagem
                        ? errors.mensagem?.message
                        : "Sua mensagem"}
                    </span>
                  </label>
                  <textarea
                    {...register("mensagem")}
                    placeholder="Mensagem"
                    className="py-2 max-h-40 input input-bordered rounded-none"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary rounded-none">Send</button>
                </div>
              </form>
            </div>
            <div onClick={toggle} className="text-primary link link-hover">
              Voltar
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`hero-content text-center text-neutral-content transition-opacity duration-500`}
        >
          <div className="max-w-3xl py-10">
            <h1 className="mb-5 text-xl md:text-3xl lg:text-4xl font-bold tracking-wider">
              🌍 Vamos dominar o mundo! 🚀
            </h1>
            <p className="mb-5 my-8 opacity-75 text-sm md:text-xl px-2 lg:text-2xl leading-relaxed">
              Comece agora a desenvolver a solução que você precisa para o seu
              negócio atingir um novo patamar!
            </p>
            <button
              onClick={toggle}
              className="btn btn-primary btn-sm md:btn-md mt-3 px-8 btn-outline rounded-none"
            >
              Fale comigo!
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
