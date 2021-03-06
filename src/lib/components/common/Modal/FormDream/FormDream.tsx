import { FormEvent, useCallback } from 'react';
import NumberFormat from 'react-number-format';

import { Button } from 'lib/components/common/Button';
import toast from 'lib/components/common/Toast';

import * as S from './FormDream.styles';

const WannaDream = ({ toggleModal }: { toggleModal?: () => void }) => {
  const notify = useCallback((type, message) => {
    toast({ type, message });
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      nome: { value: string };
      email: { value: string };
      phone: { value: string };
      howFind: { value: string };
      dreamValue: { value: number };
      motivations: { value: string };
    };

    const nome = target.nome.value;
    const email = target.email.value;
    const phone = target.phone.value;
    const howFind = target.howFind.value;
    const dreamValue = target.dreamValue.value;
    const motivations = target.motivations.value;

    const values = {
      nome,
      email,
      phone,
      howFind,
      dreamValue,
      motivations,
    };

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(values),
      });

      notify(
        'success',
        'Parabéns, seu sonho foi enviado com sucesso! Aguarde que entraremos em contato.',
      );
    } catch (error) {
      notify(
        'error',
        'Ooops, ocorreu algum erro :( Tente novamento ou entre em contato.',
      );
    }

    if (toggleModal) toggleModal();
  };

  return (
    <S.Container>
      <S.FormContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input name="nome" type="text" placeholder="Nome" />
            <input name="email" type="email" placeholder="E-mail" />
            <input name="phone" type="phone" placeholder="Telefone" />
            <input
              name="howFind"
              type="text"
              placeholder="Como nos conheceu?"
            />
            <label htmlFor="dreamValue">
              Qual o valor estimado do seu sonho?
            </label>
            <NumberFormat
              name="dreamValue"
              displayType={'input'}
              thousandSeparator="."
              decimalSeparator=","
              prefix={'$'}
              defaultValue={0}
            />
          </div>
          <div>
            <textarea
              name="motivations"
              rows={5}
              placeholder="Quem é você, qual o seu sonho, para que servirá o seu sonho e por que as pessoas devem te ajudar"
            />
            {/* <FileUploader /> */}
            <Button>Sonhar</Button>
          </div>
        </form>
      </S.FormContainer>

      <S.IllustrationWrapper>
        <S.Illustration
          src="/img/modal-illustration.svg"
          alt="Mascote da União de Sonhos brincando"
        />
      </S.IllustrationWrapper>
    </S.Container>
  );
};

export default WannaDream;
