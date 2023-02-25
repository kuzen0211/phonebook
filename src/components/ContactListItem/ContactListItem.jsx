import { useState } from 'react';

import PropTypes from 'prop-types';

import {
  ItemWrapper,
  Wrapper,
  Name,
  Phone,
  ModifyBtn,
  BtnWrapper,
} from './ContactListItem.styled.js';

import { Modal } from 'components/Modal/Modal.jsx';
import { ChangeForm } from 'components/ChangeForm/ChangeForm';
import { DeleteForm } from 'components/DeleteForm/DeleteForm';

export const ContactListItem = ({ id, name, number }) => {
  const [isOpenedEditModal, SetIsOpenedEditModal] = useState(false);
  const [isOpenedDeleteModal, SetIsOpenedDeleteModal] = useState(false);

  const handleEditModalToggle = () => SetIsOpenedEditModal(!isOpenedEditModal);
  const handleDeleteModalToggle = () =>
    SetIsOpenedDeleteModal(!isOpenedDeleteModal);

  return (
    <>
      <Wrapper>
        <ItemWrapper>
          <Name>{name}</Name>
          <Phone>{number}</Phone>
        </ItemWrapper>
        <BtnWrapper>
          <ModifyBtn type="button" onClick={handleEditModalToggle}>
            Edit
          </ModifyBtn>
          <ModifyBtn type="button" onClick={handleDeleteModalToggle}>
            Delete
          </ModifyBtn>
        </BtnWrapper>
      </Wrapper>
      {isOpenedEditModal && (
        <Modal onClose={handleEditModalToggle}>
          <ChangeForm
            id={id}
            name={name}
            number={number}
            onClose={handleEditModalToggle}
          />
        </Modal>
      )}
      {isOpenedDeleteModal && (
        <Modal onClose={handleDeleteModalToggle}>
          <DeleteForm
            id={id}
            name={name}
            number={number}
            onClose={handleDeleteModalToggle}
          />
        </Modal>
      )}
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
