import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../interfaces/IEvento';
import { listaDeEventosState } from '../atom';

const useDeletarEventos = () => {
	const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

	return (evento: IEvento) => {
		setListaDeEventos((listaAntiga) => listaAntiga.filter((e) => e.id !== evento.id));
	};
};

export default useDeletarEventos;
