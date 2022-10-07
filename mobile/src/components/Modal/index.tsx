import { ReactNode } from 'react';
import { ConfirmModal, ModalView, ModalBottom, ModalBody, ConfirmButtonView, CancelButtonView } from './styles';

import { Link } from '../../components/Link';

interface ModalProps {
  visible: boolean;
  onRequestClose?: () => void;
  onConfirm?: () => void;
  children: ReactNode;
}

export function Modal({ visible, onRequestClose, onConfirm, children }: ModalProps) {
  return (
    <ConfirmModal
      visible={visible}
      onRequestClose={onRequestClose}
      animationType='slide'
      avoidKeyboard
      hasBackdrop
    >
      <ModalView>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalBottom>
          <ConfirmButtonView>
            <Link
              title="Cancelar"
              navegator={onRequestClose}
              textColor='red'
            />
          </ConfirmButtonView>
          <CancelButtonView>
            <Link
              title="Confirmar"
              navegator={onConfirm}
              textColor='green'
            />
          </CancelButtonView>
        </ModalBottom>
      </ModalView>
    </ConfirmModal >
  );
}
