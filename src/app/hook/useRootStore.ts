import { useContext } from 'react';
import RootStore from '../store/RootStore';

const useRootStore = () => useContext(RootStore);

export default useRootStore;