import { RotatingLines } from 'react-loader-spinner';
import { Modal } from 'components/Modal/Modal';

export const Loader = () => (
  <Modal>
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </Modal>
);
